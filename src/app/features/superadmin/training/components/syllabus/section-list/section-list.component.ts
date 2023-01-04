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
    orderValue: new FormControl('', Validators.required),
    activeStatus: new FormControl('',),
    moduleId: new FormControl('',)
  });
  sectionList: any = [];
  sectionData: SectionModel = new SectionModel();
  constructor(private _sectionService: SectionService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getSection();
    this.route.queryParams.subscribe(params => {
      this.moduleId = params['moduleId'];
    })
  }
  getSection() {
    this._sectionService.getSection().subscribe((getSectionResponce: any) => {
      this.sectionList = getSectionResponce.data.rows;
    })
  }
  addSection() {
    this.sectionData = this.addSectionForm.value;
    this.sectionData.moduleId = this.moduleId;
    this._sectionService.addSection(this.sectionData).subscribe((postSectionResponce: any) => {
      this.getSection();
    })
  }
  addSectionButton() {
    this.isAddSection = true;
  }
  editButton() {
    this.isAddSection = false;
  }
  insertSection() {
    this.addSection()
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
