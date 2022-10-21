import { Component, OnInit } from '@angular/core';
import { AddSubCategoryModel } from 'src/app/shared/model/sub-category-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  subCategoryData: AddSubCategoryModel= new AddSubCategoryModel();
  isAddSubCategory:boolean;
  isEditSubCategory:boolean;

  resetAddModal(){
    this.isAddSubCategory=true; 
    this.isEditSubCategory=false; 
    this.subCategoryData=new AddSubCategoryModel();
  }

  constructor() { }

  ngOnInit(): void {
  }

  insertSubCategory()
  {
    // this._domainService.insertDomain(this.domainData).subscribe((postDomainRespose: any) => {
    // console.log(postDomainRespose);
    Swal.fire(
      'Good job!',
      'Sub-Category name added!',
      'success'
    )
  //   this.getDomain();
  //   })
  
  }
  sendSubCategory(subCategoryDetails:any){
    this.subCategoryData=subCategoryDetails;
  }
  updateSubCategory()
  {
    // this._domainService.updateDomain(this.domainData).subscribe((updateDomainRespose: any) => {
    //   console.log(updateDomainRespose);
      Swal.fire(
        '',
        'Sub-Category name updated successfully!',
        'success'
      )
  //   })
 }
 deleteSubCategory()
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
            'Your sub-category has been deleted.',
            'success'
          )
        // });
       
      }
    })
  }
}
