import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from 'src/app/models/delivery';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit{
  
  deliveries: Delivery[];

  constructor(private deliveryService: DeliveryService, private router:Router) {}
   ngOnInit(): void {
    this.getDeliveries(); 
  }
    private getDeliveries(){
      this.deliveryService.getDeliveriesList().subscribe(data=> {
        this.deliveries = data; 
      })
    }

deliveryDetails(id: number){
  this.router.navigate(['delivery-details', id]);
}

updateDelivery(id:number){
  this.router.navigate(['update-delivery', id]);
}

deleteDelivery(id: number){
  this.deliveryService.deleteDelivery(id).subscribe( data => {
    console.log(data);
    this.getDeliveries();
  })
}


}
