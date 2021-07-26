import './css/App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';
import BodySecond from './BodySecond';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <BodySecond />
            </div>
        );
    }
}

export default App;