import logoImg from '../../assets/logo.svg';
import {Container} from "./styles";

export  function Header() {
    return (
        <Container >
            <img src={logoImg} alt="My Wallet"/>

            <p>Gerencie finanças pessoais com simplicidade</p>
            {/*<span>{currentDate}</span>*/}
        </Container>
    );
}