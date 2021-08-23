import SA from '../assets/AS.png';
import S2 from '../assets/2S.png';
import S3 from '../assets/3S.png';
import S4 from '../assets/4S.png';
import S5 from '../assets/5S.png';
import S6 from '../assets/6S.png';
import S7 from '../assets/7S.png';
import S8 from '../assets/8S.png';
import S9 from '../assets/9S.png';
import S10 from '../assets/10S.png';
import SJ from '../assets/JS.png';
import SQ from '../assets/QS.png';
import SK from '../assets/KS.png';
import { flatten, times } from 'lodash';

export const ONE_SUIT_CARD_COUNT = 13;
export const ALL_CARD_NAMES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SUITS = {
    SPADE: 'S',
    DIAMOND: 'D',
    HEART: 'H',
    CLUB: 'C',
};
export const getFullDeck = () =>
    flatten(times(8, () => ALL_CARD_NAMES)).map((name, i) => ({
        id: i,
        value: (i % ONE_SUIT_CARD_COUNT) + 1,
        name,
        suit: SUITS.SPADE,
        isOpen: false,
    }));
export const INITIAL_BOARD_CARD_COUNT = 54;
export const INITIAL_STACK_CARD_COUNTS = [6, 6, 6, 6, 5, 5, 5, 5, 5, 5];
export const BOARD_STACK_COUNT = 10;
export const DECK_SET_COUNT = 8;
export const CARD_IMAGE_MAP = new Map([
    ['SA', SA],
    ['S2', S2],
    ['S3', S3],
    ['S4', S4],
    ['S5', S5],
    ['S6', S6],
    ['S7', S7],
    ['S8', S8],
    ['S9', S9],
    ['S10', S10],
    ['SJ', SJ],
    ['SQ', SQ],
    ['SK', SK],
]);
export const HUNDRED_MINUTES_IN_SECONDS = 6000;
export const ONE_SECOND = 1000;
