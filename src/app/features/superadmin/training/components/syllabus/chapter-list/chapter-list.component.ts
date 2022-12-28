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
      "activeStatus": 1
    },
    {
      "chapterListId": 3,
      "chapterName": "flex",
      "activeStatus": 0
    },
    {
      "chapterListId": 4,
      "chapterName": "media quriy",
      "activeStatus": 0
    }
  ]

  isAddChapter: boolean;
  isToggle: boolean;

  addChapterButton() {
    this.isAddChapter = true;
  }
  editButton() {
    this.isAddChapter = false;
  }
  toggleOn() {
    this.isToggle = !this.isToggle;
  }
  addChapterForm = new FormGroup({
    chapterName: new FormControl('', Validators.required),
    orderValue: new FormControl('', Validators.required),
  });
  insertChapter() {
    Swal.fire(
      'Good Job',
      'Chapter name added!',
      'success'
    )
  }
  editChapter() {
    Swal.fire(
      '',
      'Chapter name updated successfully!',
      'success'
    )
  }
  deleteChapter() {
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