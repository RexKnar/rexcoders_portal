import { Component, OnInit } from '@angular/core';
import { AddStateModel } from 'src/app/shared/model/state.module'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  stateData: AddStateModel= new AddStateModel();
  isAddState:boolean;
  isEditState:boolean;

  resetAddModal(){
    this.isAddState=true; 
    this.isEditState=false; 
    this.stateData=new AddStateModel();
  }

  constructor() { }

  ngOnInit(): void {
  }

  insertState()
  {
    // this._domainService.insertDomain(this.domainData).subscribe((postDomainRespose: any) => {
    // console.log(postDomainRespose);
    Swal.fire(
      'Good job!',
      'State name added!',
      'success'
    )
  //   this.getDomain();
  //   })
  
  }
  sendState(stateDetails:any){
    this.stateData=stateDetails;
  }
  updateState()
  {
    // this._domainService.updateDomain(this.domainData).subscribe((updateDomainRespose: any) => {
    //   console.log(updateDomainRespose);
      Swal.fire(
        '',
        'State name updated successfully!',
        'success'
      )
  //   })
 }
 deleteState()
  {
    
    Swal.fire({
      title: 'Are you sure?',
      // text: "Do you want to delete the Domain:"+domainDetails.domainName,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        //  this._domainService.deleteDomain(domainDetails.domainId).subscribe((userRespose: any) => {
          Swal.fire(
            'Deleted!',
            'Your state has been deleted.',
            'success'
          )
        // });
       
      }
    })
  }

}
