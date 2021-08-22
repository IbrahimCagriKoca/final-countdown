import React from 'react';
import './stackHolder.scss';

const StackHolder = ({ isCompleted }) => {
    return <div className={isCompleted ? 'completed-stack' : 'uncompleted-stack'}></div>;
};

export default StackHolder;
