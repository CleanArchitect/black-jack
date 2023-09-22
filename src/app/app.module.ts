import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './game/card/card.component';
import { CommonModule } from '@angular/common';
import { CardHolderComponent } from './game/card-holder/card-holder.component';
import { DealerComponent } from './game/dealer/dealer.component';
import { PlayerComponent } from './game/player/player.component';
import { GameComponent } from './game/game.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
    ],
    declarations: [
        AppComponent,
        GameComponent,
        PlayerComponent,
        CardHolderComponent,
        CardComponent,
        DealerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
