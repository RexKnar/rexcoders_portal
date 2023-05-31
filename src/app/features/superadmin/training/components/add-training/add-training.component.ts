import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup } from '@angular/forms';
import { DomainService } from 'src/app/shared/services/domain.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';
import { TrainingService } from 'src/app/shared/services/training.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  domainDetail: any;
  categoryDetail: any;
  subCategoryDetail: any;
  languageDetail: any;
  fileImage = '';
  imageSrc = '';
  ngUnsubscribe = new Subject();
  editor = ClassicEditor;
  isAddTraining: boolean;
  constructor(private _domainService: DomainService, private _categoryService: CategoryService,
    private _subCategoryService: SubCategoryService, private _languageService: LanguageService,
    private _trainingService: TrainingService) { }

  addTrainingForm = new FormGroup({
    trainingName: new FormControl(''),
    trainingSlug: new FormControl(''),
    learnersLevel: new FormControl(''),
    prerequisite: new FormControl(''),
    amount: new FormControl(''),
    discountAmount: new FormControl(''),
    photo: new FormControl(''),
    sampleVideoUrl: new FormControl(''),
    syllabus: new FormControl(''),
    description: new FormControl(''),
    perks: new FormControl(''),
    stack: new FormControl(''),
    domainId: new FormControl(0),
    category: new FormControl(null,[]),
    subcategory: new FormControl(null,[]),
    languageId: new FormControl(null,[]),
    medium: new FormControl(''),
    classLink: new FormControl(''),
    others: new FormControl(''),
    fallon: new FormControl(''),
    totalHours: new FormControl(''),
    duration: new FormControl(''),
    onlineDiscount: new FormControl(''),
    shortNote: new FormControl(''),


  })


  ngOnInit(): void {
    this._domainService.getDomain().subscribe((response) => {
      this.domainDetail = response.data.rows;
    }),
      this._languageService.getLanguage().subscribe((response) => {
        this.languageDetail = response.rows;

      })


  }
  getCategoryList(id: any) {
    console.log(id.target.value)
    this._categoryService.getCategory(id.target.value).subscribe((response) => {
      this.categoryDetail = response;
      console.log(response)
    })

  }
  getSubCategoryList(id: any) {
    console.log(id.target.value)
    this._subCategoryService.getSubCategory(id.target.value).subscribe((response) => {
      this.subCategoryDetail = response;
    })

  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      this.fileImage = event.target.files[0];
      this.addTrainingForm
        .get('photo')
        .setValue(this.fileImage, { emitModelToViewChange: false });
      reader.onload = (event: any) => {
        this.imageSrc = event.target.result as string;
        this.addTrainingForm.get('photo').setValue(this.fileImage);
        // this.addTrainingForm.patchValue({
        //   photo: this.fileImage,
        // });
      };
    }
  }

  addTraining() {
    console.log(this.addTrainingForm.value)
    const trainingFormData = new FormData();
    trainingFormData.append('trainingName', 'demo demom edmom');
    trainingFormData.append('trainingSlug', 'dfdfdfdfdf'+22);
    trainingFormData.append('learnersLevel', 'beginer');
    trainingFormData.append('prerequisite', 'demo');
    trainingFormData.append('amount', '200');
    trainingFormData.append('discountAmount', '400');
    trainingFormData.append('photo', this.fileImage);
    trainingFormData.append('sampleVideoUrl', 'url');
    trainingFormData.append('syllabus', '{"demo":"demo"}');
    trainingFormData.append('description', 'demo');
    trainingFormData.append('perks', 'demo');
    trainingFormData.append('stack', 'demo');
    trainingFormData.append('domainId', '1');
    trainingFormData.append('category', '1');
    trainingFormData.append('subcategory', '54');
    trainingFormData.append('languageId', '1');
    trainingFormData.append('medium', 'demo');
    trainingFormData.append('classLink', 'demo');
    trainingFormData.append('others', 'demo');
    trainingFormData.append('fallon', 'demo');
    trainingFormData.append('totalHours', '140');
    trainingFormData.append('duration', '200');
    trainingFormData.append('onlineDiscount', '2000');
    trainingFormData.append('shortNote', 'demo');
    // console.log(this.addTrainingForm.value);
    if (this.fileImage) {
      console.log(this.addTrainingForm.value);
      this._trainingService
        .addTrainingDetails(trainingFormData).subscribe((responseData)=>{
          console.log(responseData);
        })
        // .pipe(takeUntil(this.ngUnsubscribe))
        // .subscribe((responseData) => {
        //   Swal.fire('Good job!', 'Training Details added!', 'success');
        //   this.isAddTraining = false;
        //   console.log(responseData);
        // });
    }
  }


}
