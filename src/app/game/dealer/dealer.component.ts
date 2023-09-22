import { Component, Input } from '@angular/core';
import { Dealer } from '../models/dealer';

@Component({
    selector: 'bj-dealer',
    templateUrl: './dealer.component.html'
})
export class DealerComponent {
    @Input() dealer: Dealer;
}