import React from 'react';
import Main from './components/main/Main';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.scss';

function App() {
    return (
        <div className='app'>
            <DndProvider backend={HTML5Backend}>
                <Main />
            </DndProvider>
        </div>
    );
}

export default App;
