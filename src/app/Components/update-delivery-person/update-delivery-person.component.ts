import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/delivery-person';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-update-delivery-person',
  templateUrl: './update-delivery-person.component.html',
  styleUrls: ['./update-delivery-person.component.css']
})
export class UpdateDeliveryPersonComponent implements OnInit{
  id: number;
  deliveryPerson: DeliveryPerson = new DeliveryPerson();
  constructor(private deliveryPersonService: DeliveryPersonService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deliveryPersonService.getDeliveryPersonById(this.id).subscribe(data => {
      this.deliveryPerson = data;
    }, error => console.log(error));


  }
  
  onSubmit(){
    this.deliveryPersonService.updateDeliveryPerson(this.id, this.deliveryPerson).subscribe( data =>{
      this.goToDeliveryPersonsList();
    }
    , error => console.log(error));
  }

  goToDeliveryPersonsList(){
    this.router.navigate(['/deliveryPersons']);
  }


}
