import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from 'src/app/models/delivery';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit{
  id: number; 
  delivery: Delivery; 
  constructor(private route:ActivatedRoute, private deliveryService:DeliveryService ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    

    this.delivery = new Delivery();
    this.deliveryService.getDeliveryById(this.id).subscribe( data => {
      this.delivery = data; 
    });



  }


}
