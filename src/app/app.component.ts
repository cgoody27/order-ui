import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, OrderSummaryComponent],
  template: `<app-order-summary></app-order-summary>`
})
export class AppComponent { }
