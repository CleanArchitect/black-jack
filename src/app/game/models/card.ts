export declare type CardSuit = '♣' | '♠' | '♥' | '♦';
export declare type CardFace = 'K' | 'Q' | 'J';
export declare type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export class Card {
    readonly suit: CardSuit;

    readonly value: CardValue;

    get rank(): string {
        return this.value.toString();
    }

    constructor(suit: CardSuit, rank: CardValue) {
        this.value = rank;
        this.suit = suit;
    }
}

export class FaceCard extends Card {
    private face: CardFace;

    override get rank(): string {
        return this.face;
    }

    constructor(suit: CardSuit, face: CardFace) {
        super(suit, 10);

        this.face = face;
    }
}

export class AceCard extends Card {
    override get rank(): string {
        return 'A';
    }

    constructor(suit: CardSuit) {
        super(suit, 11);
    }
}