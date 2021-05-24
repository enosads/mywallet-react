import React from 'react';
import {GlobalStyle} from './styles/global'

import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";

function App() {
    return (
        <>
            <Header/>
            <Sidebar/>
            <GlobalStyle/>
        </>
    );
}

export default App;
