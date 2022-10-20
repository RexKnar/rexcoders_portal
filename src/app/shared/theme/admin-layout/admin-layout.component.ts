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

    }
    else{
      this.isSidebarMobile = false;

    }
  }


  ngOnInit() {
    this.screenWidth = window.innerWidth;

  }
  ngAfterViewInit(): void {

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
