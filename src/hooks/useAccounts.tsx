import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../services/api";

interface Account {
    id: number,
    total: number,
    income: number,
    outcome: number,
    name: string
}


interface AccountProviderProps {
    children: ReactNode
}

interface AccountsContextData {
    accounts: Account[],
    selectedAccountId: number,
    selectAccount: (id: number) => void;
    selectedAccount: Account
}

const AccountsContext = createContext<AccountsContextData>(
    {} as AccountsContextData
);

export function AccountProvider(props: AccountProviderProps) {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [selectedAccountId, setSelectedAccountId] = useState<number>(0);
    const [selectedAccount, setSelectedAccount] = useState<Account>({name: 'Todas'} as Account);

    useEffect(() => {
        api.get('accounts/', {
            headers: {
                Authorization: 'Token 27e890caed6156c2f01d9a119fa19d4e082cd3dd',
            }
        })
            .then(response => setAccounts(response.data))

    }, [])

    function selectAccount(id: number) {
        setSelectedAccountId(id);
        let account;
        if (id === 0) {
            account = {name: 'Todas'};
        } else {
            account = accounts.find(account => account.id === id);
        }
        setSelectedAccount(account as Account);
    }


    return (
        <AccountsContext.Provider value={{accounts, selectedAccountId, selectAccount, selectedAccount}}>
            {props.children}
        </AccountsContext.Provider>
    )
}

export function useAccounts() {
    return useContext(AccountsContext);
}