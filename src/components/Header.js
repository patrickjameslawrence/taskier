import './css/Header.css';
import logo from '../assets/icon.svg';

function Header({ handleLoginButtonClick }) {
    const handleButtonClick = () => handleLoginButtonClick();

    return (
        <div className='header'>
            <img src={logo} alt='Logo' className='logo' />
            <h1 className='name'>Taskier</h1>
            <div className='buttons'>
                <button className='button' onClick={handleButtonClick}>Login</button>
                <button className='button'>Register</button>
            </div>
        </div>
    );
}

export default Header;