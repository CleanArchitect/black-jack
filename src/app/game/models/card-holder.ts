import { AceCard, Card } from './card';

export class CardHolder {
    readonly cards: Card[] = [];

    readonly cardsFaceDown: Card[] = [];

    get count(): number {
        const count = this.cards
            .reduce((total, card) => total + card.value, 0);

        return count - this.aceBonus(count);
    }

    get hasBlackjack(): boolean {
        return this.has21 && this.cards.length === 2;
    }

    get has21(): boolean {
        return this.count === 21;
    }

    get isBust(): boolean {
        return this.count > 21;
    }

    private get hasAce(): boolean {
        return this.cards
            .some(card => card instanceof AceCard);
    }

    deal(card: Card, faceDown: boolean = false): void {
        faceDown ? this.cardsFaceDown.push(card) : this.cards.push(card);
    }

    reveal(): void {
        while(this.cardsFaceDown.length)
            this.cards.push(this.cardsFaceDown.pop());
    }

    private aceBonus(count: number): number {
        return count > 21 && this.hasAce ? 10 : 0;
    }
}
