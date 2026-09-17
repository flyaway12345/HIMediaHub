import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-payment',
    imports: [
        RouterLink
    ],
    templateUrl: './payment.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
