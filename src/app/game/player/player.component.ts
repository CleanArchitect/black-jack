import { Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
    selector: 'bj-player[player]',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
    @Input() player: Player;
}