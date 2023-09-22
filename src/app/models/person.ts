export class Person {
    readonly name: string;

    private chips: number;

    get winnings(): number {
        return this.chips;
    }

    constructor(name: string, chips: number) {
        this.name = name;
        this.chips = chips;
    }

    bet(amount: number): number {
        this.chips -= amount;
        
        return amount;
    }

    add(amount: number): void {
        this.chips += amount;
    }
}