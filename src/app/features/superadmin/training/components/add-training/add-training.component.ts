import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TrainingService } from 'src/app/shared/services/training.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  editor = ClassicEditor;
  addTrainingForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _trainingService: TrainingService) {
this.addTrainingForm=this._formBuilder.group({
  photo:[''],
  trainingSlug:[''],
  trainingName:['']
});

   }

  ngOnInit(): void {
  }


  onFileSelect(event:any)
  {
    const file=event.target.files[0];
    this.addTrainingForm.get('photo').setValue(file);
  }
  insertTrainingDetail()
  {

    let addTrainingFormData:FormData= new FormData();
    addTrainingFormData.append('trainingName',this.addTrainingForm.get('trainingName').value);
    addTrainingFormData.append('trainingSlug',this.addTrainingForm.get('trainingSlug').value);
    addTrainingFormData.append('photo',this.addTrainingForm.get('photo').value);
    this._trainingService.addTrainingDetail(addTrainingFormData).subscribe((responseData:any)=>{

      console.log(responseData);

    });
  }
}
