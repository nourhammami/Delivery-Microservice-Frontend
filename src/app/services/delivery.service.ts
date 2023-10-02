import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Delivery } from '../models/delivery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private baseURL = "http://localhost:8090/back/deliveryController";

  constructor(private httpClient: HttpClient) { }
  
  getDeliveriesList(): Observable<Delivery[]>{
    return this.httpClient.get<Delivery[]>(`http://localhost:8090/back/deliveryController/deliveries`);
  }

  createDelivery(delivery: Delivery): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/delivery`, delivery);
  }

  getDeliveryById(id: number): Observable<Delivery>{
    return this.httpClient.get<Delivery>(`${this.baseURL}/delivery/${id}`);
  }

  updateDelivery(id: number, delivery: Delivery): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/delivery/${id}`, delivery);
  }

  deleteDelivery(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delivery/${id}`);
  }
  
  findNearestDeliveryPerson(locationName: string): Observable<any>{
    const params = new HttpParams().set('locationName', locationName);
    return this.httpClient.get('http://localhost:8090/back/api/findNearestDeliveryPerson',{params});
  }
}