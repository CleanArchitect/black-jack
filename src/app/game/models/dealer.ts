import { CardHolder } from './card-holder';
import { Deck } from './deck';
import { Player } from './player';
import { GameSummary, PlayerResult } from './summary';

export class Dealer extends CardHolder {
    private readonly deck = new Deck();

    start(players: readonly Player[]): void {
        this.dealPlayers(players);
        this.deal(this.deck.takeCard(), true);
        this.dealPlayers(players);
        this.deal(this.deck.takeCard());
    }

    hit(hand: CardHolder): void {
        hand.deal(this.deck.takeCard());
    }

    play(): void {
        while (this.count < 17)
            this.deal(this.deck.takeCard());
    }

    end(players: readonly Player[]): GameSummary {
        const results = players.map(player => new PlayerResult(player, this));

        results.forEach(result => result.player.pay(result.winnings))

        return new GameSummary(results);
    }

    private dealPlayers(players: readonly Player[]): void {
        players
            .forEach(player => player
                .deal(this.deck.takeCard()));
    }
}


