import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Lab } from '../lab';
import { Course } from '../course';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  labs:Lab[]=[];
  courses:Course[]=[];
  today=Date.now();
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')!=null){
      this.user=JSON.parse(localStorage.getItem('currentUser'));
      for(var i=0;i<this.user.attendance.length;i++){
        if(this.userService.getLabs(this.user.attendance[i])!=null)
          this.labs.push(this.userService.getLabs(this.user.attendance[i]));
        }
      for(var i=0;i<this.user.attendance.length;i++){
        if(this.userService.getCourses(this.user.attendance[i])!=null)
          this.courses.push(this.userService.getCourses(this.user.attendance[i]));
      }

    }
    else {
      localStorage.setItem('currentUser',null);
      this.router.navigateByUrl('/login');
    }
  }

}
