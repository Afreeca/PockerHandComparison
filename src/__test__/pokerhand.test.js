import PokerHand, { Result } from "../pokerhand.js";

describe("PokerHand", () => {
  describe("Result should be tie", () => {
    test(`PlayerOne:'High Card' VS PlayerTwo:'High Card'`, () => {
      const playerOne = new PokerHand("4C 8S 5S AC TH");
      const playerTwo = new PokerHand("4C 8S 5S AC TH");

      expect(playerOne.compareWith(playerTwo)).toBe(Result.TIE);
    });
  });

  describe("Result should be a WIN for playerOne", () => {

    test(`playerOne:'Three of Akind' VS playerTwo:'Pair'`, () => {
      const playerOne = new PokerHand("TS AC 3H AS AD");
      const playerTwo = new PokerHand("TC 8S 8S AC AH");

      expect(playerOne.compareWith(playerTwo)).toBe(Result.WIN);
    });

    test(`playerOne:'Royal flush' VS playerTwo:'Full house'`, () => {
      const playerOne = new PokerHand("TC JC QC KC AC");
      const playerTwo = new PokerHand("3S AC 3H AS AD");

      expect(playerOne.compareWith(playerTwo)).toBe(Result.WIN);
    });
  });

  describe("Result should be a LOST for playerOne", () => {
    test(`playerOne:'Royal flush' VS playerTwo:'Full house'`, () => {
      const playerOne = new PokerHand("4S 5S 8S AS AS");
      const playerTwo = new PokerHand("5H 2H 5C 5S 5D");

      expect(playerOne.compareWith(playerTwo)).toBe(Result.LOSS);
    });

    test(`playerOne:'Three of Akind' VS playerTwo:'Pair'`, () => {
      const playerOne = new PokerHand("5H 2H 5C 5S 5D");
      const playerTwo = new PokerHand("3S AC 3H AS AD");

      expect(playerOne.compareWith(playerTwo)).toBe(Result.WIN);
    });
  });
});

/*
  (D)iamonds - ♦
  (H)earts - ♥
  (S)pades - ♠
  (C)lubs - ♣
*/