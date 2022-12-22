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
userType:string='Student';
  constructor() { }

  ngOnInit(): void {
    console.log(this.userType);
  }
getUserType(type:string){
this.userType=type;
}
}
