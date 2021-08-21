import React from 'react';
import './closedStack.scss';

const ClosedStack = ({ order }) => {
    return <div className='closed-stack' style={{ left: `${(order + 0.5) * 1.5}vw` }}></div>;
};

export default ClosedStack;
