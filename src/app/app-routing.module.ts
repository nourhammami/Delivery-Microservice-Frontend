import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDeliveryComponent } from './Components/add-delivery/add-delivery.component';
import { UpdateDeliveryComponent } from './Components/update-delivery/update-delivery.component';
import { DeliveryDetailsComponent } from './Components/delivery-details/delivery-details.component';
import { DeliveryListComponent } from './Components/delivery-list/delivery-list.component';
import { ApiComponent } from './Components/api/api.component';
import { AddDeliveryPersonComponent } from './Components/add-delivery-person/add-delivery-person.component';
import { DeliveryPersonDetailsComponent } from './Components/delivery-person-details/delivery-person-details.component';
import { DeliveryPersonListComponent } from './Components/delivery-person-list/delivery-person-list.component';
import { UpdateDeliveryPersonComponent } from './Components/update-delivery-person/update-delivery-person.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';

import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { AdminComponent } from './Components/admin/admin.component';
const routes: Routes = [
  {path:"create-delivery",component:AddDeliveryComponent},
{path:"update-delivery/:id",component:UpdateDeliveryComponent},
{path:"delivery-details/:id",component:DeliveryDetailsComponent},
{path:"deliveries",component:DeliveryListComponent},
{path: '*', redirectTo: 'deliveries', pathMatch: 'full'},
{path:"api", component:ApiComponent},
{path:"create-delivery-person",component:AddDeliveryPersonComponent},
{path:"delivery-person-details", component:DeliveryPersonDetailsComponent},
{path:"deliveryPersons",component:DeliveryPersonListComponent},
{path:"update-delivery-person",component:UpdateDeliveryPersonComponent},
{path:"userRegistration", component:UserRegistrationComponent},
  {path:"adminlogin",component:AdminComponent},
{
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'admin',
      component:BodyAdminComponent
    }
  ]

},
{
  path:'',
  component: AllTemplateUserComponent,
  children:[
    {
      path:'user',
      component: BodyUserComponent
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
