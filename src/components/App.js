import './css/App.css';
import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Body from './Body';

export default function App() {
    const [isShowingLoginForm, setIsShowingLoginForm] = React.useState(false);

    const handleLoginButtonClick = () => setIsShowingLoginForm((isShowingLoginForm) => !isShowingLoginForm);

    return (
        <div>
            <Header handleLoginButtonClick={handleLoginButtonClick} />
            <LoginForm isShowingLoginForm={isShowingLoginForm} handleLoginButtonClick={handleLoginButtonClick} />
            <Body />
        </div>
    );
}