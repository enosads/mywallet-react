import Modal from "react-modal";
import {Container, RadioBox} from "./styles";
import closeImg from "../../assets/close.svg"
import {useAccounts} from "../../hooks/useAccounts";
import {useState} from "react";


interface SelectAccountModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SelectAccountModal(props: SelectAccountModalProps) {
    const {accounts, selectedAccountId, selectAccount} = useAccounts();
    const [id, setId] = useState(selectedAccountId);
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
                    isActive={id === 0}
                    onClick={() => setId(0)}
                >
                    <span>Todas</span>
                </RadioBox>
                {accounts.map(
                    account => (
                        <RadioBox
                            key={account.id}
                            type="button"
                            isActive={id === account.id}
                            onClick={() => setId(account.id)}
                        >
                            <span>{account.name}</span>
                        </RadioBox>
                    )
                )}
                <button
                    className='btnSave'
                    type="button"
                    onClick={
                        () => {
                            selectAccount(id);
                            props.onRequestClose();
                        }
                    }
                >
                    <span>Salvar</span>
                </button>

            </Container>
        </Modal>
    );
}

