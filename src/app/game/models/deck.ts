import { AceCard, Card, CardSuit, FaceCard } from './card';

export class Deck {
    private cards = [
        ...this.createSuit('♣'),
        ...this.createSuit('♠'),
        ...this.createSuit('♥'),
        ...this.createSuit('♦')
    ];

    constructor() { this.shuffle(); }

    takeCard(): Card {
        const card = this.cards[0];

        this.cards.splice(0, 1);

        return card;
    }

    private createSuit(suit: CardSuit): Card[] {
        return [
            new Card(suit, 2),
            new Card(suit, 3),
            new Card(suit, 4),
            new Card(suit, 5),
            new Card(suit, 6),
            new Card(suit, 7),
            new Card(suit, 8),
            new Card(suit, 9),
            new Card(suit, 10),
            new FaceCard(suit, 'K'),
            new FaceCard(suit, 'Q'),
            new FaceCard(suit, 'J'),
            new AceCard(suit)
        ];
    }

    private shuffle(): void {
        this.cards = this.cards
            .sort(_ => Math.random() - 0.5);
    }
}