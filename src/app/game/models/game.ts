import { Player } from './player';
import { BehaviorSubject } from 'rxjs';
import { Dealer } from './dealer';
import { GameSummary } from './summary';

export class BlackjackGame {
    readonly gameOver = new BehaviorSubject<GameSummary>(null);

    readonly dealer = new Dealer();

    readonly players: readonly Player[] = [];

    get summary(): GameSummary {
        return this.gameOver.value;
    }

    get activePlayer(): Player {
        return this.players.find(player => player.canPlay);
    }

    get dealerShouldPlay(): boolean {
        return this.players.some(player => player.canWin);
    }

    constructor(...players: Player[]) {
        this.players = players;
    }

    start(): void {
        this.dealer.start(this.players);
        this.nextPlayer();
    }

    hit(): void {
        this.dealer.hit(this.activePlayer);
        this.nextPlayer();
    }

    stand(): void {
        this.activePlayer.stand();
        this.nextPlayer();
    }

    double(): void {
        const player = this.activePlayer;
        player.double();
        this.dealer.hit(player);
        this.nextPlayer();
    }

    surrender(): void {
        this.activePlayer.surrender();
        this.nextPlayer();
    }

    private nextPlayer(): void {
        if (!this.activePlayer)
            this.dealerPlay();
    }

    private dealerPlay(): void {
        this.dealer.reveal();

        if (this.dealerShouldPlay)
            this.dealer.play();

        this.end();
    }

    private end(): void {
        const summary = this.dealer.end(this.players);

        this.gameOver.next(summary);
    }
}
