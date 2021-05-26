import Modal from "react-modal";
import {Container, RadioBox} from "./styles";
import closeImg from "../../assets/close.svg"
import {useAccounts} from "../../hooks/useAccounts";


interface SelectAccountModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SelectAccountModal(props: SelectAccountModalProps) {
    const {accounts, selectedAccountId, selectAccount} = useAccounts();
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={props.onRequestClose}
                className="react-modal-close"
            >
                <img
                    src={closeImg}
                    alt="Fechar modal"
                />
            </button>

            <Container>
                <h2>Selecione a carteira</h2>
                <RadioBox
                    key="0"
                    type="button"
                    isActive={selectedAccountId === 0}
                    onClick={()=>selectAccount(0)}
                >
                    <span>Todas</span>
                </RadioBox>
                {accounts.map(
                    account => (
                        <RadioBox
                            key={account.id}
                            type="button"
                            isActive={selectedAccountId === account.id}
                            onClick={()=>selectAccount(account.id)}
                        >
                            <span>{account.name}</span>
                        </RadioBox>
                    )
                )}
            </Container>
        </Modal>
    );
}

