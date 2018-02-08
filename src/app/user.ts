export class User {
    username:string;
    password:string;
    name:string;
    surname:string;
    email:string;
    id:string;
    attendance:string[];

    setAttributes(username:string,password:string,name:string,surname:string,email:string){
      this.username=username;
      this.password=password;
      this.name=name;
      this.surname=surname;
      this.email=email;
      this.id='';
      this.attendance=[];
    }
  }