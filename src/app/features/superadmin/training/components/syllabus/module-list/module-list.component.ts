import { Component, OnInit } from '@angular/core';
import { ModuleListModel } from 'src/app/shared/model/ModuleList.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  moduleListData: ModuleListModel = new ModuleListModel();
  isAddModuleList: boolean;
  isEditModuleList: boolean;
  statusToggle: boolean = true;

  resetAddModal() {
    this.isAddModuleList = true;
    this.isEditModuleList = false;
    this.moduleListData = new ModuleListModel();
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplayDiv() {
    this.statusToggle = !this.statusToggle;
  }

  insertModuleList() {

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
