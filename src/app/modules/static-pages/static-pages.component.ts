import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-static-pages',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './static-pages.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './static-pages.component.css'
})
export class StaticPagesComponent {

}
