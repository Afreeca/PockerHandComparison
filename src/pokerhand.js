import { handRanking } from "./utils/constants";
import { validateHand } from "./utils/validator";

export class PokerHand {
  constructor(hand) {
    this.hand = hand;
  }
  compareWith(opponent) {
    const playerHand = validateHand(this.hand)
    const opponentHand = validateHand(opponent.hand);

    console.log({playerHand, opponentHand});

    if(playerHand.rank < opponentHand.rank)
      return Result.WIN;
    else if(playerHand.rank > opponentHand.rank)
      return Result.LOSS;
    return Result.TIE;
  }
}

export const Result = {
  WIN: 1,
  LOSS: 2,
  TIE: 3
};

export default PokerHand;

