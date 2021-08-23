import { ONE_SUIT_CARD_COUNT, INITIAL_STACK_CARD_COUNTS } from './constants';

export const openLastCard = (cards) => {
    if (cards.length > 0) {
        cards[cards.length - 1].isOpen = true;
    }
    return cards;
};

export const checkFinished = (cards) => {
    if (cards.length < ONE_SUIT_CARD_COUNT) {
        return false;
    }
    const last13 = cards.slice(cards.length - ONE_SUIT_CARD_COUNT);
    for (let i = 0; i < ONE_SUIT_CARD_COUNT; i++) {
        if (!last13[i].isOpen) return false;
        if (last13[i].value !== i + 1) {
            return false;
        }
    }
    return true;
};

export const prepareInitialBoard = (drawnCards) => {
    return [
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[0]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[1]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[2]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[3]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[4]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[5]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[6]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[7]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[8]),
        drawnCards.splice(0, INITIAL_STACK_CARD_COUNTS[9]),
    ].map(openLastCard);
};

export const checkAndRemoveFinished = (stack, onComplete) => {
    if (checkFinished(stack)) {
        stack.splice(-ONE_SUIT_CARD_COUNT);
        openLastCard(stack);
        onComplete();
        return stack;
    }
    return stack;
};

export const getRemainderSeconds = (seconds) => seconds % 60;
export const toMinutes = (seconds) => Math.floor(seconds / 60);
export const toHours = (seconds) => Math.floor(seconds / 3600);

export const isCardMovable = (order, cards) => {
    if (!cards[order].isOpen) return false;
    let i = order + 1;
    while (i < cards.length) {
        if (cards[i].value !== cards[i - 1].value + 1) return false;
        i++;
    }
    return true;
};

export const stringify = (string, n) => {
    string = string.toLocaleString('en-US', {
        minimumIntegerDigits: n,
        useGrouping: false,
    });
    return string;
};

export const worstRestartEver = () => {
    window.location.reload();
};
