import React from 'react';
import './placeHolder.scss';

const PlaceHolder = ({ onClick }) => {
    return <div className='place-holder' onClick={onClick}></div>;
};

export default PlaceHolder;
