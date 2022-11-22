import { Component, EventEmitter, Input, OnInit, Output,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isToggleSidebar = new EventEmitter<boolean>();
  @Input() pageTitle!:string;
  isSidebar:boolean=true;
  constructor() { }

  ngOnInit(): void {

  }

toggleSidebar(){
  this.isSidebar=this.isSidebar?false:true;
  this.isToggleSidebar.emit(this.isSidebar);
}

}
