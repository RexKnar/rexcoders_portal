import { Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  editor = ClassicEditor;
  constructor() { }

addTrainingForm = new FormGroup({
  addTrainingName:new FormControl(''),
  learningLevel:new FormControl('')

})


  ngOnInit(): void {
  }

}
