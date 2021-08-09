import React from 'react';
import './card.scss';
import SA from '../../assets/AS.png';
import S2 from '../../assets/2S.png';
import S3 from '../../assets/3S.png';
import S4 from '../../assets/4S.png';
import S5 from '../../assets/5S.png';
import S6 from '../../assets/6S.png';
import S7 from '../../assets/7S.png';
import S8 from '../../assets/8S.png';
import S9 from '../../assets/9S.png';
import S10 from '../../assets/10S.png';
import SJ from '../../assets/JS.png';
import SQ from '../../assets/QS.png';
import SK from '../../assets/KS.png';

const Card = ({ card, order, cardSpan, onCardClick, selectedCardId }) => {
	const { name, isOpen, suit } = card;
	let cardSrc = suit + name;
	window[cardSrc];
	console.log(cardSrc);
	return (
		<div
			className={`card${card.id === selectedCardId ? ' selected' : ''}`}
			style={{ zIndex: order, top: order * cardSpan, left: order, backgroundColor: isOpen ? 'white' : 'green' }}
			onClick={() => isOpen && onCardClick(card, order)}>
			{isOpen ? <img className='card-img' src={cardSrc} alt={cardSrc} /> : <></>}
		</div>
	);
};

export default Card;
