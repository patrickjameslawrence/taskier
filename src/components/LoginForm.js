import './css/LoginForm.css';
import React from 'react';

const LoginForm = ({ isShowingLoginForm }) => {
    return (
        <div className={`${!isShowingLoginForm ? 'active' : ''} show`}>
            <div>

            </div>
        </div>
    );
}

export default LoginForm;