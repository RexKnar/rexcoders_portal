import { Component, OnInit } from '@angular/core';
import { Validator, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { TrainingService } from 'src/app/shared/services/training.service';
import { DomainService } from 'src/app/shared/services/domain.service';
import { takeUntil } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';
@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss'],
})
export class AddTrainingComponent implements OnInit {
  editor = ClassicEditor;
  addTrainingForm: any;
  trainingFormControls = {
    trainingName: ['',Validators.required],
    trainingSlug: ['',Validators.required],
    learnersLevel: ['',Validators.required],
    prerequisite: ['',Validators.required],
    amount: ['',Validators.required],
    discountAmount: ['',Validators.required],
    photo: ['',Validators.required],
    sampleVideoUrl: [''],
    syllabus: [''],
    description: ['',Validators.required],
    perks: ['',Validators.required],
    stack: ['',Validators.required],
    domainId: ['',Validators.required],
    category: ['',Validators.required],
    subcategory: ['',Validators.required],
    languageId: ['',Validators.required],
    medium: ['',Validators.required],
    classLink: [''],
    others: [''],
    fallon: ['',Validators.required],
    totalHours: ['',Validators.required],
    duration: ['',Validators.required],
    onlineDiscount: ['',Validators.required],
    shortNote: ['',Validators.required],
  };

  fileImage: any;
  imageSrc: string;
  progress: number;
  ishide: boolean;
  addClass: any;
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  domainList: any;
  categoryList: any;
  domainId:any;
  categoryId: any;
  subCategoryList: any;
  isAddTraining:boolean = false;
  constructor(
    private fb: FormBuilder,
    private _trainingService: TrainingService,
    private _domainService:DomainService,
    private _categoryService:CategoryService,
    private _subCategoryService:SubCategoryService
  ) {
    this.addTrainingForm = this.fb.group(this.trainingFormControls);
  }
  ngOnInit(): void {
    this._domainService.getDomain().subscribe((getDomainRespose: any) => {
      this.domainList = getDomainRespose.data.rows;
    });
    
  }

  onDomainChange(event:any){
    this.domainId = event.target.value;
    this._categoryService.getCategories(this.domainId).subscribe((getCategoryRespose: any) => {
      this.categoryList = getCategoryRespose;
  });
}

onCategoryChange(event:any){
  this.categoryId = event.target.value;
  this.subCategoryList= this._subCategoryService.getSubCategories(this.categoryId) 
}


  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      this.fileImage = event.target.files[0];
      this.addTrainingForm
        .get('photo')
        .setValue(this.fileImage, { emitModelToViewChange: false });
      reader.onload = () => {
        this.imageSrc = event.target.result as string;
        this.addTrainingForm.patchValue({
          photo: this.fileImage,
        });
      };
    }
  }

  

  addTrainingDetails() {
  this.isAddTraining = true;
  const formData = new FormData();
  formData.append('trainingName',this.addTrainingForm.controls.trainingName.value);
  formData.append('trainingSlug',this.addTrainingForm.controls.trainingSlug.value);
  formData.append('learnersLevel',this.addTrainingForm.controls.learnersLevel.value);
  formData.append('prerequisite',this.addTrainingForm.controls.prerequisite.value);
  formData.append('amount',this.addTrainingForm.controls.amount.value);
  formData.append('discountAmount',this.addTrainingForm.controls.discountAmount.value);
  formData.append('photo',this.fileImage);
  formData.append('sampleVideoUrl',this.addTrainingForm.controls.sampleVideoUrl.value);
  formData.append('syllabus',this.addTrainingForm.controls.syllabus.value);
  formData.append('description',this.addTrainingForm.controls.description.value);
  formData.append('stack',this.addTrainingForm.controls.stack.value);
  formData.append('domainId',this.addTrainingForm.controls.domainId.value);
  formData.append('category',this.addTrainingForm.controls.category.value);
  formData.append('subcategory',this.addTrainingForm.controls.subcategory.value);
  formData.append('languageId',this.addTrainingForm.controls.languageId.value);
  formData.append('medium',this.addTrainingForm.controls.medium.value);
  formData.append('classLink',this.addTrainingForm.controls.classLink.value);
  formData.append('others',this.addTrainingForm.controls.others.value);
  formData.append('fallon',this.addTrainingForm.controls.fallon.value);
  formData.append('totalHours',this.addTrainingForm.controls.totalHours.value);
  formData.append('duration',this.addTrainingForm.controls.duration.value);
  formData.append('onlineDiscount',this.addTrainingForm.controls.onlineDiscount.value);
  formData.append('shortNote',this.addTrainingForm.controls.shortNote.value);
  formData.append('perks',this.addTrainingForm.controls.perks.value);
     if (this.fileImage) {
      this._trainingService
        .addTrainingList(formData)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          Swal.fire('Good job!', 'trainind List added!', 'success'); 
          this.isAddTraining = false;
        });
    }
  }
}
