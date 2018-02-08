import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable()
export class RegistrationService {

  constructor() { }

  register(user:User){
    var flag=0;
    console.log(environment.users.length);
    for(var i=0;i<environment.users.length;i++){
      if(environment.users[i]['username']==user.username){
        flag=1;
        break;
      }
      if(environment.users[i]['email']==user.email){
        flag=2;
        break;
      }
    }
      if(flag==1)
        alert('username already exists');
      else if(flag==2)
        alert('account already registered on this email');
      
      if(flag==0){
        environment.users.push(user);
        /*for(var i=0;i<environment.users.length;i++)
        console.log((environment.users[i])); test afisare lista noua useri */ 
        localStorage.setItem('currentUser',JSON.stringify(environment.users[environment.users.length-1]));
      }
    }
  }


