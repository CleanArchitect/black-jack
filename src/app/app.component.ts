import { Component } from '@angular/core';
import { BlackjackGame } from './game/models/game';
import { Player } from './game/models/player';
import { GameSummary } from './game/models/summary';
import { Person } from './models/person';

@Component({
    selector: 'bj-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    game: BlackjackGame;
    summaries: GameSummary[] = [];

    persons = [new Person('Henk', 2000)];

    add(): void {
        this.persons.push(new Person(window.prompt('Naam'), 2000));
    }

    start(bet: number | string): void {
        this.game = new BlackjackGame(...this.createPlayers(Number(bet)));
        this.game.start();
        this.game.gameOver.subscribe(summary => this.summaries.push(summary));
    }

    private createPlayers(bet: number): Player[] {
        return this.persons
            .filter(person => person.winnings >= bet)
            .map(person => new Player(person, bet));
    }
}
