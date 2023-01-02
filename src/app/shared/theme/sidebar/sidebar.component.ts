import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Menu, MENUITEMS } from '../../config/menuitems';
import { CookiesService } from '../../services/cookies.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: Menu[];
  userDetails: any;
  constructor(private _cookiesService: CookiesService) {
    this.userDetails = this._cookiesService.getUserDetail();

    if (this.userDetails.role) {
      this.menuItems = MENUITEMS[this.userDetails.role];
    } else {
      this.menuItems = [
        {
          path: '#',
          title: 'Dashboard',
          icon: 'fas fa-th',
          type: 'link',
        },
      ];
    }
  }
  toggletNavActive(item: any) {
    if (!item.active) {
      this.menuItems.forEach((a) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
      });
    }
    item.active = !item.active;
  }
  ngOnInit(): void {}
}
