import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  public doRegistration(user: User){
    return this.http.post("http://localhost:8090/back/userController/user",user,{responseType:'text' as 'json'}); 
  }
  
  public getUsers(){
    return this.http.get("http://localhost:8090/back/userController/users");
  }
  
  public getUserById(id: number){
    return this.http.get("http://localhost:8090/back/userController/user/"+id);
  }
  
  public updateUserById(id: number, user: User){
    return this.http.put("http://localhost:8090/back/userController/user/"+id,user,{responseType:'text' as 'json'});
  }
  
  public deleteUser(id: number){
    return this.http.delete("http://localhost:8090/back/userController/user"+id);
  
  
  }
  

}
