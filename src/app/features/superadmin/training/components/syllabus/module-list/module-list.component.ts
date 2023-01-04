import { Component, OnInit } from '@angular/core';
import { ModuleListModel } from 'src/app/shared/model/ModuleList.model';
import { ModuleListService } from 'src/app/shared/services/module-list.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  moduleList:any ='this.moduleListData';
  moduleListData: ModuleListModel = new ModuleListModel();
  isAddModuleList: boolean;
  isEditModuleList: boolean;
  statusToggle: boolean = true;
  moduleData: any;

  resetAddModal() {
    
    this.isAddModuleList = true;
    this.isEditModuleList = false;
    this.moduleListData = new ModuleListModel();
  }

  constructor(private _moduleService: ModuleListService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getModule();
    this.route.queryParams.subscribe(Params=>{
      console.log(Params);
      console.log(this.moduleListData);
      // console.log(this.moduleList.order);
    })
  }

getModule() {
  this._moduleService.getModule().subscribe((getModuleRespose: any) => {
    console.log(getModuleRespose);
    this.moduleList = getModuleRespose;
    this.moduleData = this.moduleList;

  });
}
  addModule() {
    this._moduleService.addModule(this.moduleList).subscribe((postModuleRespose: any) => {
      console.log(postModuleRespose);
      this.moduleList = postModuleRespose;
      this.moduleData = this.moduleList;
    });
  }


  toggleDisplayDiv() {
    this.statusToggle = !this.statusToggle;
  }

  insertModuleList() {
   this.addModule()
   console.log(this.moduleListData);
  

    Swal.fire(
      'Good job!',
      'Module name added!',
      'success'
    )

  }
  sendModuleList(moduleListDetails: any) {
    this.moduleListData = moduleListDetails;
  }
  updateModuleList() {

    Swal.fire(
      '',
      'Module name updated successfully!',
      'success'
    )
  }
  deleteModuleList() {

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your Module has been deleted.',
            'success'
          )
        }
      })
  }

}
