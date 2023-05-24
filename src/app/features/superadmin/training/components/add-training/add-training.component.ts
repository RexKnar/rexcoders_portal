import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup } from '@angular/forms';
import { DomainService } from 'src/app/shared/services/domain.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  domainDetail: any;
  categoryDetail: any;
  subCategoryDetail:any;
  editor = ClassicEditor;
  constructor(private domainService: DomainService, private categoryService: CategoryService,
    private subCategoryService:SubCategoryService) { }

  addTrainingForm = new FormGroup({
    addTrainingName: new FormControl(''),
    learningLevel: new FormControl('')

  })


  ngOnInit(): void {
    this.domainService.getDomain().subscribe((response) => {
      this.domainDetail = response.data.rows;
      console.log(response.data)
    })

    
  }
getCategoryList(id:any){
console.log(id.target.value)
this.categoryService.getCategory(id.target.value).subscribe((response) => {
      this.categoryDetail = response;
      console.log(response)
    })

}
getSubCategoryList(id:any){
  console.log(id.target.value)
  this.subCategoryService.getSubCategory(id.target.value).subscribe((response) => {
    this.subCategoryDetail = response;
})

}
}
