import {Container} from './styles'
import {MdDashboard} from "react-icons/md";
import {FaWallet} from "react-icons/fa";

export function Sidebar() {
    return (
        <Container>
            <ul>

                <li className='isActive'>
                    <MdDashboard/>
                    <span>
                        Dashboard
                    </span>
                </li>
                <li>
                    <FaWallet/>
                    <span>
                        Carteiras
                    </span>
                </li>
            </ul>

        </Container>
    );
}