import { Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup } from '@angular/forms';
import { DomainService } from 'src/app/shared/services/domain.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  domainDetail:any
  editor = ClassicEditor;
  constructor(private domainService:DomainService) { }

addTrainingForm = new FormGroup({
  addTrainingName:new FormControl(''),
  learningLevel:new FormControl('')

})


  ngOnInit(): void {
    this.domainService.getDomain().subscribe((response)=>{
      this.domainDetail=response.data.rows;
      console.log(response.data)
    })
  }

}
