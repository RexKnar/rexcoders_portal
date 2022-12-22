import { Component, OnInit } from '@angular/core';
import { AddCountryModel } from 'src/app/shared/model/country.model';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {


  countryData: AddCountryModel= new AddCountryModel();
  isAddCountry:boolean;
  isEditCountry:boolean;


  resetAddModal(){
    this.isAddCountry=true;
    this.isEditCountry=false;
    this.countryData=new AddCountryModel();
  }
  constructor() { }

  ngOnInit(): void {
    // this.getCountry()
  }
  sendCountry(countryDetails:any){
    this.countryData=countryDetails;
  }
  // getCountry(){
  //   this._countryService.getCountry().subscribe({
  //     next : (data:any)=>{
  //       console.log(data);
  //     }
  //   })
  // }
  insertCountry()
  {

    Swal.fire(
      'Good job!',
      'State name added!',
      'success'
    )


  }
  updateCountry()
  {

      Swal.fire(
        '',
        'Country name updated successfully!',
        'success'
      )

 }
 deleteCountry()
  {

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
            'Your state has been deleted.',
            'success'
          )


      }
    })
  }



}
