import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionService } from 'src/app/shared/services/section.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  sectionList: any=[];
  constructor(private _sectionService : SectionService) { }
  ngOnInit(): void { this.getSection()
  } 
  getSection(){
    this._sectionService.getSection().subscribe((sectionResponce:any) => {
      this.sectionList = sectionResponce.data.rows;
      console.log(this.sectionList);
    })
  } 
  isAddSection: boolean;
  isToggle: boolean;
  addSectionButton() {
    this.isAddSection = true;
  }
  editButton() {
    this.isAddSection = false;
  }
  toggleOn() {
    this.isToggle = !this.isToggle;
  }
  addSectionForm = new FormGroup({
    sectionName: new FormControl('', Validators.required),
    orderValue: new FormControl('', Validators.required),
  });
  insertSection() {
    Swal.fire(
      'Good Job',
      'Section name added!',
      'success'
    )
  }
  editSection() {
    Swal.fire(
      '',
      'Section name updated successfully!',
      'success'
    )
  }
  deleteSection() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  }
}