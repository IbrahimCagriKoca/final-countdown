import React from 'react';
import { hot } from 'react-hot-loader/root';
import Main from './components/main/Main';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.scss';

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Main />
        </DndProvider>
    );
}

export default hot(App);
