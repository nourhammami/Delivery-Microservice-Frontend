import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from 'src/app/models/delivery';
import { DeliveryService } from 'src/app/services/delivery.service';
@Component({
  selector: 'app-update-delivery',
  templateUrl: './update-delivery.component.html',
  styleUrls: ['./update-delivery.component.css']
})
export class UpdateDeliveryComponent implements OnInit{
   
  id: number;
  delivery: Delivery = new Delivery();
  constructor(private deliveryService: DeliveryService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deliveryService.getDeliveryById(this.id).subscribe(data => {
      this.delivery = data;
    }, error => console.log(error));


  }
  
  onSubmit(){
    this.deliveryService.updateDelivery(this.id, this.delivery).subscribe( data =>{
      this.goToDeliveryList();
    }
    , error => console.log(error));
  }

  goToDeliveryList(){
    this.router.navigate(['/deliveries']);
  }

}
