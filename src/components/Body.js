import './css/Body.css';
import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div>
                <div className='lightBody'>
                    <div className='messageGroup'>
                        <h1 className='message'>Welcome to <strong>Taskier</strong></h1>

                        <h1 className='message'>Your new favorite productivity app</h1>
                    </div>
                </div>

                <div className='darkBody'>
                    <div className='messageGroup'>
                        <h1 className='message'>Get to the meeting <strong>on time</strong></h1>

                        <h1 className='message'>Turn that project in <strong>early</strong></h1>
                    </div>
                </div>
            </div >
        );
    }
}

export default Body;