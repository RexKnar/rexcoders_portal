import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionService } from 'src/app/shared/services/section.service';
import { ActivatedRoute } from '@angular/router';
import { SectionModel } from 'src/app/shared/model/section.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  isAddSection: boolean;
  moduleId: number;
  addSectionForm = new FormGroup({
    sectionName: new FormControl('', Validators.required),
    order: new FormControl('', Validators.required),
    activeStatus: new FormControl('',),
    moduleId: new FormControl('',),
    sectionId: new FormControl('',)
  });
  sectionList: any = [];
  sectionData: SectionModel = new SectionModel();
  sectionid:number;
  constructor(private _sectionService: SectionService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.moduleId = params['moduleId'];
      console.log(this.moduleId);
    });
    this.getSection();
  }
  getSection() {
    this.moduleId = Number(this.moduleId);
    console.log(this.moduleId);
    this._sectionService.getSection(this.moduleId).subscribe((getSectionResponce: any) => {
      this.sectionList = getSectionResponce.data.rows;
      console.log(getSectionResponce.data.rows);
      console.log(this.sectionList);
    })
  }
  addSection() {
    this.sectionData = this.addSectionForm.value;
    this.sectionData.moduleId = Number(this.moduleId);
    this._sectionService.addSection(this.sectionData).subscribe((postSectionResponce: any) => {
      this.getSection();
    })
  }
  updateSection(){
    this.sectionData = this.addSectionForm.value;
    this.sectionData.moduleId = Number(this.moduleId);
    this._sectionService.updateSection(this.sectionData).subscribe({
      next:(updateSectionResponse) => {
      Swal.fire(
        '',
        'Section name updated successfully!',
        'success'
      )  
      this.getSection();
      },
      error:(error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })}
    });
  }
  deleteSection(){
    this._sectionService.deleteSection(this.sectionid).subscribe((deleteSectionResponce: any) => {
      Swal.fire(
        'Deleted!',
        'Your section has been deleted.',
        'success'
      )
    })
  }
  addSectionButton() {
    this.isAddSection = true;
  }
  editButton(currentObject:any) {
    this.addSectionForm.controls['sectionName'].patchValue(currentObject.sectionName);
    this.addSectionForm.controls['order'].patchValue(currentObject.order);
    this.addSectionForm.controls['activeStatus'].patchValue(currentObject.activeStatus);
    this.addSectionForm.controls['sectionId'].patchValue(currentObject.sectionId);
    this.isAddSection = false;
  }
  insertSection() {
    this.addSection()
    Swal.fire(
      'Success',
      'Section name added!',
      'success'
    )
  }
  editSection() {
    this.updateSection()  
  }
  removeSection(currentObject:any) {
   this.sectionid = currentObject.sectionId
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
      if(result.isConfirmed){
        this.deleteSection()
      }
    })
  }
}
