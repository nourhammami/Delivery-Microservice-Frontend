import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/delivery-person';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-add-delivery-person',
  templateUrl: './add-delivery-person.component.html',
  styleUrls: ['./add-delivery-person.component.css']
})
export class AddDeliveryPersonComponent implements OnInit{

  deliveryPerson: DeliveryPerson = new DeliveryPerson();
  constructor(private deliveryPersonService:DeliveryPersonService,
    private router:Router){}

  ngOnInit(): void {
   
  }



  saveDeliveryPerson(){
    this.deliveryPersonService.createDeliveryPerson(this.deliveryPerson).subscribe( data =>{
      console.log(data);
      this.goToDeliveryPersonsList();
    },
    error => console.log(error));
    
  }
  goToDeliveryPersonsList(){
    this.router.navigate(['/delivery-persons']);
  }

  
  onSubmit(){
    console.log(this.deliveryPerson);
    this.saveDeliveryPerson();
    this.goToDeliveryPersonsList();
  }


}
