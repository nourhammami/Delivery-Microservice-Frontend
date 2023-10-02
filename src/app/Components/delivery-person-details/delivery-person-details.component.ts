import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/delivery-person';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-delivery-person-details',
  templateUrl: './delivery-person-details.component.html',
  styleUrls: ['./delivery-person-details.component.css']
})
export class DeliveryPersonDetailsComponent implements OnInit{
  id: number; 
  deliveryPerson: DeliveryPerson; 
  constructor(private route:ActivatedRoute, private deliveryPersonService:DeliveryPersonService ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    
    this.deliveryPerson = new DeliveryPerson();
    this.deliveryPersonService.getDeliveryPersonById(this.id).subscribe( data => {
      this.deliveryPerson = data; 
    });



  }
}
