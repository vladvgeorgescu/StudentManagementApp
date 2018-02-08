import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:User;

  constructor(private router:Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('currentUser'));
    if(this.user==null)
      this.router.navigateByUrl('/login');
  }

  logout(){
    localStorage.setItem('currentUser',null);
    this.router.navigateByUrl('/login');

  }

}
