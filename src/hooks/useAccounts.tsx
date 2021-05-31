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
    const [selectedAccount, setSelectedAccount] = useState<Account>({
        name: 'Todas',
        outcome: 0,
        income: 0,
        total: 0,
        id: 0
    });
    useEffect(() => {
        api.get('accounts/', {
            headers: {
                Authorization: 'Token d5e9506c0c976de391d01e50ae979dea114f0894',
            }
        })
            .then(response => {
                const accounts: Account[] = response.data;
                setAccounts(accounts);
                setSelectedAccount(
                    accounts.reduce((acc, account) => {
                        acc.total += account.total
                        acc.income += account.income
                        acc.outcome += account.outcome;
                        return acc;
                    }, {
                        name: 'Todas',
                        outcome: 0,
                        income: 0,
                        total: 0,
                        id: 0
                    }))
            });


    }, [])

    function selectAccount(id: number) {
        setSelectedAccountId(id);
        let account;
        if (id === 0) {
            account = accounts.reduce((acc, account) => {
                acc.total += account.total;
                acc.income += account.income
                acc.outcome += account.outcome;
                return acc;
            }, {
                name: 'Todas',
                outcome: 0,
                income: 0,
                total: 0,
                id: 0
            })
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