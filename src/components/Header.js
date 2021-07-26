import './css/Header.css';
import React from 'react';
import logo from '../assets/icon.svg';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='Logo' className='logo' />
                <h1 className='name'>Taskier</h1>
                <div className='buttons'>
                    <button className='button'>Login</button>
                    <button className='button'>Register</button>
                </div>
            </div>
        );
    }
}

export default Header;