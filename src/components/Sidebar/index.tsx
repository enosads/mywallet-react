import {Container} from './styles'

export function Sidebar() {
    return (
        <Container>
            <ul>
                <li className='isActive'>Dashboard</li>
                <li>Carteiras</li>
            </ul>

        </Container>
    );
}