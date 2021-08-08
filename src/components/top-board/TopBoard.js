import React from 'react';
import { times } from 'lodash';
import ClosedStack from '../closed-stack/ClosedStack';
import StackHolder from '../stack-holder/StackHolder';
import './topBoard.scss';

const TopBoard = ({ closedStackCount, placeHolderCount, onDrawClick }) => {
	return (
		<div className='top-board'>
			<div onClick={onDrawClick} className='topboard-container closed-stacks'>
				{times(closedStackCount, (i) => (
					<ClosedStack key={i} />
				))}
			</div>
			<div className='topboard-container'>
				{times(placeHolderCount, (i) => (
					<StackHolder key={i} />
				))}
			</div>
		</div>
	);
};

export default TopBoard;
