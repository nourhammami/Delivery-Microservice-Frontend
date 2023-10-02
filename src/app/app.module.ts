import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeliveryService } from './services/delivery.service';
import { DeliveryPersonService } from './services/delivery-person.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDeliveryComponent } from './Components/add-delivery/add-delivery.component';
import { DeliveryListComponent } from './Components/delivery-list/delivery-list.component';
import { DeliveryDetailsComponent } from './Components/delivery-details/delivery-details.component';
import { UpdateDeliveryComponent } from './Components/update-delivery/update-delivery.component';
import { ApiComponent } from './Components/api/api.component';
import { AddDeliveryPersonComponent } from './Components/add-delivery-person/add-delivery-person.component';
import { DeliveryPersonDetailsComponent } from './Components/delivery-person-details/delivery-person-details.component';
import { DeliveryPersonListComponent } from './Components/delivery-person-list/delivery-person-list.component';
import { UpdateDeliveryPersonComponent } from './Components/update-delivery-person/update-delivery-person.component';

import { ToastrModule } from "ngx-toastr";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestComponent } from './test/test.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { AdminComponent } from './Components/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
   
    
    AddDeliveryComponent,
    DeliveryListComponent,
    DeliveryDetailsComponent,
    UpdateDeliveryComponent,
    ApiComponent,
    AddDeliveryPersonComponent,
    DeliveryPersonDetailsComponent,
    DeliveryPersonListComponent,
    UpdateDeliveryPersonComponent,
    TestComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SideAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    HeaderUserComponent,
    UserRegistrationComponent,
    AdminComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  

    
  ],
  providers: [DeliveryService, DeliveryPersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
