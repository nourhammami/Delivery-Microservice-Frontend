import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from 'src/app/models/delivery';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit{

delivery: Delivery = new Delivery();
constructor(private deliveryService:DeliveryService,
  private router:Router){}


  ngOnInit(): void {
   
  }

  saveDelivery(){
    this.deliveryService.createDelivery(this.delivery).subscribe( data =>{
      console.log(data);
      this.goToDeliveriesList();
    },
    error => console.log(error));
    
  }
  goToDeliveriesList(){
    this.router.navigate(['/deliveries']);
  }

  
  onSubmit(){
    console.log(this.delivery);
    this.saveDelivery();
  }

   
  }


