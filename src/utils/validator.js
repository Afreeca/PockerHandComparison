import { handRanking } from "./constants";
import { isFlush, getDuplications, isRoyalFlush, } from "./domainSpecification";

export const validateHand = (hand) => {

    const handArray = hand.toUpperCase().split(" ") // Split into cards
    const kinds = handArray.map((item) => item.charAt(0))
    const suits = handArray.map((item) => item.charAt(1))
    
        if(isRoyalFlush(kinds))
            return handRanking.ROYAL_FLUSH
        else if(isFlush(suits))
            return handRanking.FLUSH;
        else
            return getDuplications(kinds);
}


