import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/delivery-person';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-delivery-person-list',
  templateUrl: './delivery-person-list.component.html',
  styleUrls: ['./delivery-person-list.component.css']
})
export class DeliveryPersonListComponent implements OnInit{
  deliveryPersons: DeliveryPerson[];

  constructor(private deliveryPersonService: DeliveryPersonService, private router:Router) {}
   ngOnInit(): void {
    this.getDeliveryPersons(); 
  }
    private getDeliveryPersons(){
      this.deliveryPersonService.getDeliveryPersonsList().subscribe(data=> {
        this.deliveryPersons = data; 
      })
    }

deliveryPersonDetails(id: number){
  this.router.navigate(['delivery-person-details', id]);
}

updateDeliveryPerson(id:number){
  this.router.navigate(['update-delivery-person', id]);
}

deleteDeliveryPerson(id: number){
  this.deliveryPersonService.deleteDeliveryPerson(id).subscribe( data => {
    console.log(data);
    this.getDeliveryPersons();
  })
}

}
