import React from 'react';
import './closedStack.scss';

const ClosedStack = ({ onClick, order }) => {
    return <div onClick={onClick} className='closed-stack' style={{ left: `${(order + 0.5) * 1.5}vw` }}></div>;
};

export default ClosedStack;
