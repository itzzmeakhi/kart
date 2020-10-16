import React from 'react';

import AuthPage from './pages/AuthPage.component';
import Header from './components/Header/Header.component';

import './App.scss';

const App = () => {
    return (
        <div>
            <Header />
            <AuthPage />
        </div>
    )
}

export default App;
