import React from 'react';
import { hot } from 'react-hot-loader/root';
import Main from './components/main/Main';
import './index.scss';

function App(props) {
    return (
        <div className='app'>
            <Main />
        </div>
    );
}

export default hot(App);
