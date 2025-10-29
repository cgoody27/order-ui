import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = environment.apiUrl ? `${environment.apiUrl}/orders` : `/orders`;

  constructor(private http: HttpClient) { }

  getOrderSummary(orderId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${orderId}`);
  }

  getOrderHistory(orderId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${orderId}/history`);
  }
}
