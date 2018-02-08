import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  user:User;



  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  login():void{
    this.user=null;
    localStorage.setItem('currentUser',null);
    this.authService.login(this.username,this.password);
    this.user=JSON.parse(localStorage.getItem('currentUser'));

    if(this.user!=null){
      console.log('login successful');
      this.router.navigateByUrl('/menu');
    }
    else alert('invalid username or password');

    
  }

}
