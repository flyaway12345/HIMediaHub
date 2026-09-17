import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        HeaderComponent,
        FooterComponent,
        CommonModule,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HIMediaHub';
}
