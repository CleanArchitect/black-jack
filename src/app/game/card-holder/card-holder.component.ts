import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { CardHolder } from 'src/app/game/models/card-holder';

@Component({
    selector: 'bj-card-holder[cardHolder]',
    templateUrl: './card-holder.component.html',
    styleUrls: ['./card-holder.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CardHolderComponent {
    @Input() cardHolder: CardHolder;

    @HostBinding() class = 'card-holder';
}