import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{

  user: User = new User();
  constructor(private userService:UserService,
    private router:Router){}



  ngOnInit(): void {
  }

  saveUser(){
    this.userService.doRegistration(this.user).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
    
  }
  
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}