import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-modules',
  templateUrl: './add-modules.component.html',
  styleUrls: ['./add-modules.component.scss']
})
export class AddModulesComponent implements OnInit {
moduleForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.moduleForm = this.fb.group({
      moduleName:this.fb.array([this.fb.control('')])
    });
  }

  ngOnInit(): void {
  }

  get moduleName(){
    return this.moduleForm.get('moduleName') as FormArray;
  }
  addModuleNames(){
    this.moduleName.push(this.fb.control(''));
  }

  removeModuleNames(index: number) {
    this.moduleName.removeAt(index);
  }

  onSubmit() {
    const moduleNames = this.moduleName.value;
    console.log(moduleNames); 
  }

}
