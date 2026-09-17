import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-merch',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './merch.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './merch.component.css'
})
export class MerchComponent {

}
