import { Component, Input } from '@angular/core';
import { BlackjackGame } from './models/game';
import { Player } from './models/player';
import { PlayerResult } from './models/summary';

@Component({
    selector: 'bj-game[game]',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {
    @Input() game: BlackjackGame;

    result(player: Player): PlayerResult {
        return this.game?.summary
            .results
            .find(result => result.player === player);
    }
}