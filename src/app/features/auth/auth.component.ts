import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';  
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
@ViewChild('student') student:ElementRef;
@ViewChild('staff') staff:ElementRef;
@ViewChild('admin') admin:ElementRef;
showProgressBar = false;
userType:string='Student';
  constructor() { }

  ngOnInit(): void {
  }
getUserType(type:string){
this.userType=type;
}

isLoginSuccess(e:boolean){
  this.showProgressBar = e;
}
}
