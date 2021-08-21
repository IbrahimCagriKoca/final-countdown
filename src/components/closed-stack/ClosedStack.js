import React from 'react';
import './closedStack.scss';

const ClosedStack = (order) => {
    let cardSpan = 1000;
    let leftPositionValue = cardSpan * order;
    return <div className='closed-stack' style={{ left: `${leftPositionValue}px` }}></div>;
};

export default ClosedStack;
