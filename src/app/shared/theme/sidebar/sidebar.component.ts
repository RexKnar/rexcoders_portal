import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Menu, MENUITEMS } from '../../config/menuitems';
import { CookiesService } from '../../services/cookies.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: Menu[];

  userDetails:any;

  constructor(private _cookiesService: CookiesService,) {

this.userDetails=this._cookiesService.getUserDetail();
console.log(this.userDetails.role)
  this.menuItems=MENUITEMS[this.userDetails.role];
  console.log(MENUITEMS[this.userDetails.role]);

  }
  toggletNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a) => {
        if (this.menuItems.includes(item)){
          a.active = false;
        }
      });
    }
    item.active = !item.active;
  }
  ngOnInit(): void {
  }

}
