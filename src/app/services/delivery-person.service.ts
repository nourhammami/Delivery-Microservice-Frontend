import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeliveryPerson } from '../models/delivery-person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonService {

  private baseURL = "http://localhost:8090/back/deliveryPersonController";

  constructor(private httpClient: HttpClient) { }
  
  getDeliveryPersonsList(): Observable<DeliveryPerson[]>{
    return this.httpClient.get<DeliveryPerson[]>(`http://localhost:8090/back/deliveryPersonController/deliverypersons`);
  }

  createDeliveryPerson(deliveryPerson: DeliveryPerson): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/deliveryPerson`, deliveryPerson);
  }

  getDeliveryPersonById(id: number): Observable<DeliveryPerson>{
    return this.httpClient.get<DeliveryPerson>(`${this.baseURL}/deliveryPerson/${id}`);
  }

  updateDeliveryPerson(id: number, deliveryPerson: DeliveryPerson): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/deliveryPerson/${id}`, deliveryPerson);
  }

  deleteDeliveryPerson(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deliveryPerson/${id}`);
  }

}
