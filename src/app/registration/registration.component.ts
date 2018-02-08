import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username:string;
  password:string;
  name:string;
  surname:string;
  email:string;
  user:User;

  constructor(private router:Router,private registrationService:RegistrationService) { }

  ngOnInit() {
    this.user=new User();
    localStorage.setItem('currentUser',null);
  }

  register(){
    if((this.username!=null)&&(this.password!=null)&&(this.surname!=null)&&(this.name!=null)&&(this.email!=null)){
      this.user.setAttributes(this.username,this.password,this.name,this.surname,this.email);
      this.registrationService.register(this.user);
      if(localStorage.getItem('currentUser')!=null)
        this.router.navigateByUrl('/menu');
    }
    else alert('All the fields are mandatory!');
  }

}
