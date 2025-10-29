import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  orderId: string = "1";
  order: any = null;
  history: any[] = [];
  error: string | null = null;

  constructor(private orderService: OrderService) { }

  fetchOrder() {
    this.error = null;
    this.orderService.getOrderSummary(this.orderId).subscribe({
      next: (data) => this.order = data,
      error: () => this.error = 'Order not found'
    });

    this.orderService.getOrderHistory(this.orderId).subscribe({
      next: (data) => this.history = data,
      error: () => this.history = []
    });
  }
}
