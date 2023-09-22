import { Person } from 'src/app/models/person';
import { CardHolder } from './card-holder';

export class Player extends CardHolder {
    readonly person: Person;

    private bet: number;
    private stands = false;
    private surrended = false;

    get canPlay(): boolean {
        return !this.hasBlackjack
            && !this.has21
            && !this.isBust
            && !this.stands
            && !this.surrended;
    }

    get canWin(): boolean {
        return this.stands
            || this.has21
            || this.hasBlackjack;
    }

    get isStanding(): boolean {
        return this.stands;
    }

    get hasSurrended(): boolean {
        return this.surrended;
    }

    get amountBet(): number {
        return this.bet;
    }

    constructor(person: Person, bet: number) {
        super();

        this.person = person;
        this.bet = person.bet(bet);
    }

    stand(): void {
        this.stands = true;
    }

    double(): void {
        this.bet += this.person.bet(this.bet);
        this.stand();
    }

    surrender(): void {
        this.surrended = true;
    }

    pay(winnings: number): void {
        this.person.add(winnings);
    }
}
