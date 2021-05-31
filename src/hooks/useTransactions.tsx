import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../services/api";
import {useAccounts} from "./useAccounts";

interface Transaction {
    id: number,
    description: string,
    date: Date,
    value: number,
    category: string,
    account: string
}


interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[],
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider(props: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const {selectedAccountId} = useAccounts();

    useEffect(() => {
        api.get(selectedAccountId === 0 ? 'transactions' : `transactions?account__id=${selectedAccountId}`, {
            headers: {
                Authorization: 'Token d5e9506c0c976de391d01e50ae979dea114f0894',
            }
        })
            .then(response => {
                setTransactions(response.data);
            });


    }, [selectedAccountId])


    return (
        <TransactionsContext.Provider value={{transactions}}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    return useContext(TransactionsContext);
}