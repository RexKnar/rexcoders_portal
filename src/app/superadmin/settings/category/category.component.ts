import { Component, OnInit } from '@angular/core';
import { AddCategoryModel } from 'src/app/shared/model/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryData: AddCategoryModel= new AddCategoryModel();
  isAddCategory:boolean;
  isEditCategory:boolean;

  resetAddModal(){
    this.isAddCategory=true; 
    this.isEditCategory=false; 
    this.categoryData=new AddCategoryModel();
  }

  constructor() { }

  ngOnInit(): void {
  }

  insertCategory()
  {
    // this._domainService.insertDomain(this.domainData).subscribe((postDomainRespose: any) => {
    // console.log(postDomainRespose);
    Swal.fire(
      'Good job!',
      'Category name added!',
      'success'
    )
  //   this.getDomain();
  //   })
  
  }
  sendCategory(categoryDetails:any){
    this.categoryData=categoryDetails;
  }
  updateCategory()
  {
    // this._domainService.updateDomain(this.domainData).subscribe((updateDomainRespose: any) => {
    //   console.log(updateDomainRespose);
      Swal.fire(
        '',
        'Category name updated successfully!',
        'success'
      )
  //   })
 }
 deleteCategory()
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
            'Your category has been deleted.',
            'success'
          )
        // });
       
      }
    })
  }

}
