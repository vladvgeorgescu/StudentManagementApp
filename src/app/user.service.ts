import { Injectable } from '@angular/core';
import { User } from './user';
import { Lab } from './lab';
import { Course } from './course';
import { environment } from '../environments/environment';

@Injectable()
export class UserService {

  constructor() { }

  getLabs(id:string):Lab{
    for(var i=0;i<environment.laboratories.length;i++){
      if(id==environment.laboratories[i]['id']){
        return environment.laboratories[i];
      }
    }

  }

  getCourses(id:string):Course{
    for(var i=0;i<environment.courses.length;i++){
      if(id==environment.courses[i]['id']){
        return environment.courses[i];
      }
    }
  }


}

