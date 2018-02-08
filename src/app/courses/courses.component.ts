import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { Course } from '../course';
import { UserService } from '../user.service';

@Component({
  selector: 'app-labs',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  today=Date.now();
  user:User;
  courses:Course[]=[];
  dayOfTheWeek:string=new Date().toLocaleString('en-us', {  weekday: 'long' });
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')!=null){
      this.user=JSON.parse(localStorage.getItem('currentUser'));
      for(var i=0;i<this.user.attendance.length;i++){
        if(this.userService.getCourses(this.user.attendance[i])!=null)
          this.courses.push(this.userService.getCourses(this.user.attendance[i]));
      }
      console.log(this.courses);

    }
    else {
      localStorage.setItem('currentUser',null);
      this.router.navigateByUrl('/login');
    }
  }





}
