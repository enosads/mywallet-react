import {Container} from './styles'
import {useTransactions} from "../../hooks/useTransactions";

export function TransactionTable() {
    const {transactions} = useTransactions();
    return (
        <Container>
            <table>
                <caption>TRANSAÇÕES</caption>
                <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Carteira</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>

                {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.description}</td>
                            <td className={transaction.value > 0 ? 'deposit' : 'withdraw'}>
                                {new Intl.NumberFormat(
                                    'pt-BR',
                                    {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }
                                ).format(transaction.value)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.account}</td>

                            <td>
                                {new Intl.DateTimeFormat(
                                    'pt-BR',
                                ).format(new Date(transaction.date))}
                            </td>
                        </tr>
                    )
                )}
                </tbody>


            </table>
            {
                transactions.length === 0 &&
                <span>
                Ainda não há transações
                </span>
            }
        </Container>
    )
}