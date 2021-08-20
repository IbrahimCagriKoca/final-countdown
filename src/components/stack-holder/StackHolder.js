import React from 'react';
import './stackHolder.scss';
import cardback from '../../assets/cardback.jpg';
import { times } from 'lodash';

const StackHolder = (isCompleted) => {
	return <div className={!isCompleted ? 'completed-stack' : 'stack-holder'}></div>;
};

export default StackHolder;
