import logoImg from '../../assets/logo.svg';
import {Container} from "./styles";
import {FaChevronDown, FaWallet} from 'react-icons/fa';
import {useAccounts} from "../../hooks/useAccounts";

interface HeaderProps {
    onOpenSelectAccountModal: () => void;
}


export function Header(props: HeaderProps) {
    const {selectedAccount} =useAccounts();
    return (
        <Container>
            <img src={logoImg} alt="My Wallet"/>

            <p>Gerencie finanças pessoais com simplicidade</p>


            <button type="button" onClick={props.onOpenSelectAccountModal}>
                <FaWallet/>
                <span>Carteira: {selectedAccount.name}</span>
                <FaChevronDown/>
            </button>


        </Container>
    );
}