import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Menu, MENUITEMS } from '../../config/menuitems';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: Menu[] = MENUITEMS;
  isBtnClick = false;
  isBtnClickValue = true;
  constructor() {

  }
  toggletNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a) => {
        if (this.menuItems.includes(item)){
          a.active = false;
          console.log();
        }
      });
    }
    item.active = !item.active;
  }
  ngOnInit(): void {
  }

}
