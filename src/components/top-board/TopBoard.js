import React, { useEffect } from 'react';
import { times } from 'lodash';
import ClosedStack from '../closed-stack/ClosedStack';
import StackHolder from '../stack-holder/StackHolder';
import './topBoard.scss';

const TopBoard = ({ closedStackCount, onDrawClick, completedStacks, isGameStarted }) => {
    const placeHolderCount = 8;
    return (
        <div className='top-board'>
            <div className='topboard-container closed-stacks'>
                {times(closedStackCount, (i) => (
                    <ClosedStack onClick={isGameStarted ? onDrawClick : () => {}} key={i} order={i} />
                ))}
            </div>
            <div className='topboard-container'>
                {times(placeHolderCount, (i) => (
                    <StackHolder key={i} isCompleted={i < completedStacks} />
                ))}
            </div>
        </div>
    );
};

export default TopBoard;
