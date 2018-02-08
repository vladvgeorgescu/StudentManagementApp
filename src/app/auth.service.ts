import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {

  constructor() { }


  login(username:string,password:string){
    for(var i=0;i<environment.users.length;i++){
      if((username==environment.users[i]['username'])&&(password==environment.users[i]['password'])){
        localStorage.setItem('currentUser',JSON.stringify(environment.users[i]));
        break;
      }
      
    }
  }

}
