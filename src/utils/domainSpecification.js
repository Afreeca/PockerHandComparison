import { cardOrder, handRanking } from "./constants";
import { getArrayItemAccurrences, getHighestOccurrence, getKeyByValue, getObjHighestValue } from './helper';

export const getDuplications = (kinds) => {
    const kindOcurrence = getArrayItemAccurrences(kinds)
    const highest = getObjHighestValue(kindOcurrence)

    if(Number(kindOcurrence[highest]) === 4)
        return handRanking.FOUR_OF_A_KIND;
    else if(kindOcurrence[highest] === 3)
    {
        if(getKeyByValue(kindOcurrence, 2))
            return handRanking.FULL_HOUSE;
        return handRanking.THREE_OF_A_KING;
    }
    else if(kindOcurrence[highest] === 2){
        const highestOcurrence = getHighestOccurrence(kindOcurrence, kindOcurrence[highest])
        if(highestOcurrence === 2) 
            return handRanking.TWO_PAIRS;
        else 
            return handRanking.PAIR;
    }
    
    return handRanking.HIGH_CARD;
}


export const isStraight = (hand) => {
    
}

export const isFlush = (suits) => {
    return suits.every((s) =>s === suits[0])
}

export const isStraightFlush = (hand) => {
    
}

export const isRoyalFlush = (kinds) => {
    if(kinds[0] !== "T") return 
    let indexTcardOrder = cardOrder.indexOf("T")
    return kinds.every((kind) =>kind === cardOrder[indexTcardOrder++])
}
