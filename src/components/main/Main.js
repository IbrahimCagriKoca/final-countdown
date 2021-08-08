import React from 'react';
import BottomBoard from '../bottom-board/BottomBoard';
import TopBoard from '../top-board/TopBoard';
import './main.scss';

const Main = () => {
	return (
		<div className='main'>
			<TopBoard closedStackCount={5} placeHolderCount={8} />
			<BottomBoard stackCount={10} />
		</div>
	);
};

export default Main;
