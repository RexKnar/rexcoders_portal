import { Component, HostListener, OnInit, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { trigger, transition, useAnimation } from '@angular/animations';
import { r3JitTypeSourceSpan } from '@angular/compiler';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {



  isToogleSidebar: boolean = true;
  isMobileToogleSidebar: boolean = false;
  isSidebarMobile: boolean = true;
  @ViewChild('sidebarmobile') sidebarmobile!: ElementRef;
  @ViewChild('navbarmobile') navsbarmobile!: ElementRef;
  screenWidth: any;
  constructor() { }

  toggleSidebar(event: boolean) {

    this.isToogleSidebar = event;
    if(this.isMobileToogleSidebar) {
      this.isSidebarMobile = event;
      console.log(this.isSidebarMobile);
    }
    else{
      this.isSidebarMobile = false;
      console.log(this.isSidebarMobile);
    }
  }


  ngOnInit() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    console.log(this.isSidebarMobile);
  }
  ngAfterViewInit(): void {
    // console.log(this.navsbarmobile.nativeElement.getAttribute('class'));
  }
  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  public onChange() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 992) {
      this.isMobileToogleSidebar = true;
    }
    else{
      this.isMobileToogleSidebar = false;
    }

  }
}
