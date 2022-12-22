import { Component, OnInit } from '@angular/core';
import { AddSubCategoryModel } from 'src/app/shared/model/sub-category-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
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
  
    Swal.fire(
      'Good job!',
      'Subcategory name added!',
      'success'
    )
  
  
  }
  sendSubCategory(subCategoryDetails:any){
    this.subCategoryData=subCategoryDetails;
  }
  updateSubCategory()
  {
    
      Swal.fire(
        '',
        'Subcategory name updated successfully!',
        'success'
      )
  
 }
 deleteSubCategory()
  {
    
    Swal.fire({
      title: 'Are you sure?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        
          Swal.fire(
            'Deleted!',
            'Your Subcategory has been deleted.',
            'success'
          )
      
       
      }
    })
  }
}
