import React from 'react';
import { hot } from 'react-hot-loader/root';
import Main from './components/main/Main';
import CookieProvider from 'react-cookie';
import './index.scss';

function App(props) {
    return <Main />;
}

export default hot(App);
