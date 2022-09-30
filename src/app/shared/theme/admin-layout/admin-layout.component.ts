import { Component, HostListener, OnInit } from '@angular/core';

import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
 
  public right_side_bar: boolean=false;

  isToogleSidebar:boolean=true;


  constructor() { }


  toggleSidebar(event:boolean){

    this.isToogleSidebar=event;



  }
 
  
  ngOnInit() { }

}
