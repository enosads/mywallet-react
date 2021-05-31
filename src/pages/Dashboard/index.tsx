import React from "react";
import {Chart} from "../../components/Chart";
import {Container, ResumeContainer} from "./styles";
import {Summary} from "../../components/Summary";
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import {TransactionProvider} from "../../hooks/useTransactions";
import {TransactionTable} from "../../components/TransactionsTable";

export function Dashboard() {
    return (
        <TransactionProvider>
            <Container>
            <ResumeContainer>
                <AutoSizer style={{width: '66%'}}>
                    {({height, width}) => (
                        <Chart
                        />
                    )}
                </AutoSizer>
                <Summary/>

            </ResumeContainer>
            <TransactionTable/>
            </Container>
        </TransactionProvider>
    );
}