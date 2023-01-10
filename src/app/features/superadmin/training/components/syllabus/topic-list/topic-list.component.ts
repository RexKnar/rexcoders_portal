import { Component, OnInit } from '@angular/core';
import { TopicListModel } from 'src/app/shared/model/topicList.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
topicListData: TopicListModel = new TopicListModel();
  isAddTopic: boolean;
  isEditTopic: boolean;
  statusToggle: boolean = true;
  resetTopic() {
    this.isAddTopic = true;
    this.isEditTopic = false;
  }
  resetAddModal() {
    this.isAddTopic = true;
    this.isEditTopic = false;
    this.topicListData = new TopicListModel();
  }
constructor() { }
ngOnInit(): void {
  }
  toggleDisplayDiv() {
    this.statusToggle = !this.statusToggle;
  }
insertTopic() {
Swal.fire(
      'Good job!',
      'Module name added!',
      'success'
    )
  }
  sendModuleList(topicDetails: any) {
    this.topicListData = topicDetails;
  }
  updateTopic() {
Swal.fire(
      '',
      'Module name updated successfully!',
      'success')
  }
  deleteTopic() {
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

