import React from 'react';
import { times } from 'lodash';
import ClosedStack from '../closed-stack/ClosedStack';
import StackHolder from '../stack-holder/StackHolder';
import './topBoard.scss';

const TopBoard = ({ closedStackCount, placeHolderCount }) => {
	return (
		<div className='top-board'>
			{times(closedStackCount, (i) => (
				<ClosedStack key={i} />
			))}
			;
			{times(placeHolderCount, (i) => (
				<StackHolder key={i} />
			))}
			;
		</div>
	);
};

export default TopBoard;
