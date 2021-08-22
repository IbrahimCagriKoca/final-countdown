import React from 'react';
import './placeHolder.scss';

const PlaceHolder = ({ onClick, stackId }) => {
    return <div key={`placeholder-${stackId}`} className='place-holder' onClick={onClick}></div>;
};

export default PlaceHolder;
