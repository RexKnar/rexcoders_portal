import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit {

  chapterList: any = [
    {
      "chapterListId": 1,
      "chapterName": "table",
      "activeStatus": 1
    },
    {
      "chapterListId": 2,
      "chapterName": "styling",
      "activeStatus": 0
    },
    {
      "chapterListId": 3,
      "chapterName": "flex",
      "activeStatus": 0
    }

  ]

  isAddChapterList: boolean;
  isToggle: boolean;

  addChapterButton() {
    this.isAddChapterList = true;
  }
  editButton() {
    this.isAddChapterList = false;
  }
  toggleOn() {
    this.isToggle = !this.isToggle;
  }
  chapterListForm = new FormGroup({
    chapterName: new FormControl('', Validators.required),
    orderValue: new FormControl('', Validators.required),
  });
  insertChapterList() {
    Swal.fire(
      'Good Job',
      'Chapter name added!',
      'success'
    )
  }
  editChapterList() {
    Swal.fire(
      '',
      'Chapter name updated successfully!',
      'success'
    )
  }
  deleteChapterList() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
