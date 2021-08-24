import React from 'react';
import { times } from 'lodash';
import ClosedStack from '../../components/closed-stack/ClosedStack';
import StackHolder from '../../components/stack-holder/StackHolder';
import './topBoard.scss';
import { DECK_SET_COUNT } from '../../components/constants';

const TopBoard = ({ closedStackCount, onDrawClick, completedStacks, isGameStarted }) => {
    return (
        <div className='top-board'>
            <div className='closed-stacks'>
                {times(closedStackCount, (i) => (
                    <ClosedStack onClick={isGameStarted ? onDrawClick : () => {}} key={i} order={i} />
                ))}
            </div>
            <div className='stack-holder'>
                {times(DECK_SET_COUNT, (i) => (
                    <StackHolder key={i} isCompleted={!(DECK_SET_COUNT - i > completedStacks)} />
                ))}
            </div>
        </div>
    );
};

export default TopBoard;
