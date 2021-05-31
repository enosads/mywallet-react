import {Container} from './styles';
import {useAccounts} from "../../hooks/useAccounts";

export function Summary() {
    const {selectedAccount} = useAccounts();
    return (
        <Container>
            <h2>RESUMO</h2>
            <ul>
                <li>
                    <span className='title income'>Entradas: </span>

                    <span className='value income'>
                        {new Intl.NumberFormat(
                            'pt-BR',
                            {
                                style: 'currency',
                                currency: 'BRL'
                            }
                        ).format(selectedAccount.income)}
                    </span>

                </li>
                <li>
                    <span className='title outcome'>Saídas:</span>
                    <span className='value outcome'>
                        {new Intl.NumberFormat(
                            'pt-BR',
                            {
                                style: 'currency',
                                currency: 'BRL'
                            }
                        ).format(selectedAccount.outcome)}
                    </span>
                </li>
                <li >
                    <span className='title' >Total:</span>
                    <span className='value' >
                        {new Intl.NumberFormat(
                            'pt-BR',
                            {
                                style: 'currency',
                                currency: 'BRL'
                            }
                        ).format(selectedAccount.total)}
                    </span>
                </li>
            </ul>
        </Container>
    )
}