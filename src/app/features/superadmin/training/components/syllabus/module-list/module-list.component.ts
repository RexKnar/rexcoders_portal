import { Component, OnInit } from '@angular/core';
import { ModuleListModel } from 'src/app/shared/model/ModuleList.model';
import { ModuleListService } from 'src/app/shared/services/module-list.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss'],
})
export class ModuleListComponent implements OnInit {
  moduleListData: ModuleListModel = new ModuleListModel();
  isAddModule: boolean;
  isEditModule: boolean;
  statusToggle: boolean = true;
  moduleList: any;
  postData: ModuleListModel = new ModuleListModel();
  trainingId: any;
  resetAddModal() {
    this.isAddModule = true;
    this.isEditModule = false;
    this.moduleListData = new ModuleListModel();
  }
  constructor(
    private _moduleService: ModuleListService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((Params) => {
      this.trainingId = Params['trainingId'];
    });
    this.getModule();
  }
  getModule() {
    this.trainingId=Number(this.trainingId)
    this._moduleService.getModule(this.trainingId).subscribe((getModuleRespose: any) => {
      this.moduleList = getModuleRespose.data.rows;
    });
  }
  addModule() {
    this.moduleListData.activeStatus = Number(this.moduleListData.activeStatus);
    this.moduleListData.trainingId = Number(this.trainingId);
    this.postData = this.moduleListData;
    this._moduleService
      .addModule(this.postData)
      .subscribe((postModuleRespose: any) => {});
    this.getModule();
  }
  toggleDisplayDiv() {
    this.statusToggle = !this.statusToggle;
  }
  insertModule() {
    this.addModule();
    Swal.fire('Good job!','Module name added!','success');
  }
  sendModule(moduleListDetails: any) {
    this.moduleListData = moduleListDetails;
  }
  updateModule() {
    Swal.fire('', 'Module name updated successfully!', 'success');
  }
  deleteModule() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your Module has been deleted.', 'success');
      }
    });
  }
}
