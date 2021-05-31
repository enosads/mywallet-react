import React, {useState} from 'react';
import {GlobalStyle} from './styles/global'

import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {AccountProvider} from "./hooks/useAccounts";
import {SelectAccountModal} from "./components/SelectAccountModal";
import Modal from "react-modal";
import {Dashboard} from "./pages/Dashboard";

Modal.setAppElement("#root");

function App() {
    const [isSelectAccountModalOpen, setIsSelectAccountModalOpen] = useState(false)

    function handleOpenSelectAccountModal() {
        setIsSelectAccountModalOpen(true);
    }

    function handleCloseSelectAccountModal() {
        setIsSelectAccountModalOpen(false);
    }

    return (
        <AccountProvider>
            <Header onOpenSelectAccountModal={handleOpenSelectAccountModal}/>
            <div className='content'>
                <Sidebar/>
                <Dashboard/>
            </div>
            <SelectAccountModal
                onRequestClose={handleCloseSelectAccountModal}
                isOpen={isSelectAccountModalOpen}
            />
            <GlobalStyle/>
        </AccountProvider>
    );
}

export default App;
