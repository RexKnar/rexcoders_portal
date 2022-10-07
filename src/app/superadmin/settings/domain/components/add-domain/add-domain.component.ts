import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/shared/service/domain.service';
import { DOMAIN_CONFIG, ROUTE_CONFIG } from 'src/app/shared/config/endpoints';
@Component({
  selector: 'app-add-domain',
  templateUrl: './add-domain.component.html',
  styleUrls: ['./add-domain.component.scss']
})
export class AddDomainComponent implements OnInit {
  domainlist: any;
  domainName:any='demo1';
  domainData: { domainName:string };
  constructor(private _domainService: DomainService) { }

  ngOnInit(): void {
    this._domainService.getDomain().subscribe((userRespose: any) => {
      this.domainlist = userRespose;

    })
  }
  insertDomain()
  {
    // this.domainData.domainName=this.domainName;
    this._domainService.postDomain({'domainName':this.domainName}).subscribe((userRespose: any) => {
      console.log(userRespose);
    })
  }

}
