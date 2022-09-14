import { Component, HostListener, OnInit } from '@angular/core';

import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
 
  public right_side_bar: boolean=false;

 

  constructor() { }


  ngAfterViewInit() {
    
  } 

  @HostListener('document:click', ['$event'])
  clickedOutside(event: any) {
 
  }

  public getRouterOutletState(outlet: { isActivated: any; activatedRoute: any; }) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public rightSidebar($event: boolean) {
    this.right_side_bar = $event
  }
  
  ngOnInit() { }

}
