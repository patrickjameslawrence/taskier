import './css/Body.css';
import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div className='body'>
                <div className='messageGroup'>
                    <h1 className='message'>Welcome to <strong>Taskier</strong></h1>

                    <h1 className='message'>Your new favorite app</h1>
                </div>
            </div>
        );
    }
}

export default Body;