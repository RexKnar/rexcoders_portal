import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddDomainModel } from 'src/app/shared/model/domain.model';
import { DomainService } from 'src/app/shared/services/domain.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {
  domainlist: any;
  domainData: AddDomainModel = new AddDomainModel();
  isAddDomain: boolean;
  isEditDomain: boolean;
  @ViewChild('closemodal') closemodal: ElementRef;
  constructor(private _domainService: DomainService) { }

  resetAddModal() {
    this.isAddDomain = true;
    this.isEditDomain = false;
    this.domainData = new AddDomainModel();
  }

  ngOnInit(): void {
    this.getDomain();
  }
  getDomain() {
    this._domainService.getDomain().subscribe((getDomainRespose: any) => {
      this.domainlist = getDomainRespose;
      this.domainData = this.domainlist;
    });
  }


  insertDomain() {
    this._domainService.insertDomain(this.domainData).subscribe((postDomainRespose: any) => {
      Swal.fire(
        'Good job!',
        'Domain name added!',
        'success'
      )
      this.getDomain();

      this.closemodal.nativeElement.click();
    })

  }
  sendDomain(domainDetails: any) {
    this.domainData = domainDetails;
  }
  updateDomain() {
    this._domainService.updateDomain(this.domainData).subscribe((updateDomainRespose: any) => {
      Swal.fire(
        '',
        'Domain name updated successfully!',
        'success'
      )
      this.closemodal.nativeElement.click();
    })
  }
  deleteDomain(domainDetails: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete the Domain:" + domainDetails.domainName,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._domainService.deleteDomain(domainDetails.domainId).subscribe((userRespose: any) => {
          Swal.fire(
            'Deleted!',
            'Your domain has been deleted.',
            'success'
          )
        });

      }
    })
  }
}
