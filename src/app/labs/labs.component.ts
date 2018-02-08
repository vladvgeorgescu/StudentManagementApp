import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { Lab } from '../lab';
import { UserService } from '../user.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  today=Date.now();
  user:User;
  labs:Lab[]=[];
  dayOfTheWeek:string=new Date().toLocaleString('en-us', {  weekday: 'long' });
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')!=null){
      this.user=JSON.parse(localStorage.getItem('currentUser'));
      for(var i=0;i<this.user.attendance.length;i++){
        if(this.userService.getLabs(this.user.attendance[i])!=null)
          this.labs.push(this.userService.getLabs(this.user.attendance[i]));
      }
      console.log(this.labs);

    }
    else {
      localStorage.setItem('currentUser',null);
      this.router.navigateByUrl('/login');
    }
  }





}
