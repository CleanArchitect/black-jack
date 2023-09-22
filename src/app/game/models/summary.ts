import { CardHolder } from './card-holder';
import { Player } from './player';

export class GameSummary {
    readonly results: PlayerResult[];

    constructor(results: PlayerResult[]) {
        this.results = results;
    }
}

export class PlayerResult {
    readonly player: Player;

    private ratio: Ratio;

    get winnings(): number {
        return this.ratio * this.player.amountBet;
    }

    get result(): string {
        switch (this.ratio) {
            case Ratio.blackjack: return '🏆 BLACKJACK! 🏆';
            case Ratio.win: return 'WIN 🤑';
            case Ratio.push: return 'Push 🫠';
            case Ratio.surrender: return 'Surrender 🏳️';
            case Ratio.lose: return 'Lost 🥺';
            case Ratio.bust: return 'Bust 💀';
        };
    }

    constructor(player: Player, dealer: CardHolder) {
        this.player = player;
        this.ratio = this.getRatio(player, dealer);
    }

    private getRatio(player: Player, dealer: CardHolder): Ratio {
        if (player.hasSurrended) return Ratio.surrender;

        if (player.isBust) return Ratio.bust;

        if (player.hasBlackjack && !dealer.hasBlackjack) return Ratio.blackjack;

        if (player.count > dealer.count) return Ratio.win;

        if (player.count === dealer.count) return Ratio.push;

        if (dealer.isBust) return Ratio.win;

        return Ratio.lose;
    }
}

export enum Ratio {
    blackjack = 2.5,
    win = 2,
    push = 1,
    surrender = 0.5,
    bust = 0,
    lose = 0
}

