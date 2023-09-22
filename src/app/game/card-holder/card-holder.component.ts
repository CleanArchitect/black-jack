import { Component, Input } from '@angular/core';
import { CardHolder } from 'src/app/game/models/card-holder';

@Component({
    selector: 'bj-card-holder[cardHolder]',
    templateUrl: './card-holder.component.html',
    styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent {
    @Input() cardHolder: CardHolder;
}