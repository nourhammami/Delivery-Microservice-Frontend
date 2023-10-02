import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/delivery-person';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{
  locationName: string ='';
  nearestDeliveryPerson: DeliveryPerson; 
  constructor(private deliveryService:DeliveryService, private router:Router){}
  ngOnInit(): void {
    
  }
 
  onFindNearest(){
    if (this.locationName.trim() === '') {
      console.log('Please enter a valid location name.');
      return;
    }
    this.deliveryService.findNearestDeliveryPerson(this.locationName).subscribe((Response) => {
      this.nearestDeliveryPerson = Response; 
    },
    (error) => {
      console.error('Error fetching nearest delivery person', error);
    }
    );


  }
  



}
