import React from 'react';
import Stack from '../stack/Stack';
import { times } from 'lodash';
import './bottomBoard.scss';

const BottomBoard = ({ stackCount }) => {
	return (
		<div className='bottom-board'>
			{times(stackCount, (i) => (
				<Stack cards={[5, 8, 8, 9, 7]} key={i} />
			))}
		</div>
	);
};

export default BottomBoard;
