import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LiveMobileComponent } from "../../../app/header/live/live-mobile/live-mobile.component";

@Component({
    selector: 'app-perks',
    imports: [LiveMobileComponent],
    templateUrl: './perks.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './perks.component.css'
})
export class PerksComponent {

}
