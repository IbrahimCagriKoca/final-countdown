import React, { useEffect } from 'react';
import { times } from 'lodash';
import ClosedStack from '../closed-stack/ClosedStack';
import StackHolder from '../stack-holder/StackHolder';
import './topBoard.scss';

const TopBoard = ({ closedStackCount, placeHolderCount, onDrawClick }, completedStacks) => {
	let isCompleted = false;
	useEffect(() => {
		if (completedStacks > 0) {
			isCompleted = true;
			completedStacks--;
		} else {
			isCompleted = false;
		}
	}, [completedStacks]);
	return (
		<div className='top-board'>
			<div onClick={onDrawClick} className='topboard-container closed-stacks'>
				{times(closedStackCount, (i) => (
					<ClosedStack key={i} order={i} />
				))}
			</div>
			<div className='topboard-container'>
				{times(placeHolderCount, (i) => (
					<StackHolder key={i} isCompleted={isCompleted} />
				))}
			</div>
		</div>
	);
};

export default TopBoard;
