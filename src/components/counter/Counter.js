import React, { useEffect, useState } from 'react';
import { ONE_SECOND } from '../constants';
import { stringify } from '../helperFunctions';
import { getRemainderSeconds, toMinutes, toHours } from '../helperFunctions';

const Counter = ({ isGameStarted, isGameFinished, counter, setCounter }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        if (isGameStarted && !isGameFinished) {
            setTimeout(() => setCounter(counter + 1), ONE_SECOND);
            setSeconds(getRemainderSeconds(counter));
            setMinutes(toMinutes(counter));
            setHours(toHours(counter));
        }
    }, [counter, isGameStarted, isGameFinished]);
    return (
        <div>
            <span className='counter'>
                {stringify(hours, 2)}:{stringify(minutes, 2)}:{stringify(seconds, 2)}
            </span>
        </div>
    );
};

export default Counter;
