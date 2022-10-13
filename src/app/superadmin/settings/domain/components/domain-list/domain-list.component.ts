import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { DomainService } from 'src/app/shared/service/domain.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {
  domainlist: any;
  domainName:string="";
  domainData: { domainName:string };
  @ViewChild('domainID') domainID:ElementRef;
  index:number;
  dId:number;
  constructor(private _domainService: DomainService) { }

  ngOnInit(): void {
      this._domainService.getDomain().subscribe((userRespose: any) => {
      this.domainlist = userRespose;
      this.index=this.domainlist.index;
  });
}

  insertDomain()
  {
    this._domainService.postDomain({'domainName':this.domainName}).subscribe((userRespose: any) => {
    })
    Swal.fire(
      'Good job!',
      'Domain name added!',
      'success'
    )
  }
  sendDomainId(domainDetails:any){
    // console.log(domainDetails.domainId);
    this.dId=domainDetails.domainId;
  }
  updateDomain()
  {
    this._domainService.updateDomain({'domainName':this.domainName, 'domainId':this.dId}).subscribe((userRespose: any) => {
    })
    console.log(this.dId);
    Swal.fire(
      '',
      'Domain name updated successfully!',
      'success'
    )
  }
  deleteDomain(domainDetails:any)
  {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._domainService.deleteDomain(domainDetails.domainId).subscribe((userRespose: any) => {
        console.log(domainDetails.domainId);
      });
        Swal.fire(
          'Deleted!',
          'Your domain has been deleted.',
          'success'
        )
      }
    })
  }
}
