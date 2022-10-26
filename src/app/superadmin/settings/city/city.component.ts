import { Component, OnInit } from '@angular/core';
import { AddCityModel } from 'src/app/shared/model/city.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cityData: AddCityModel= new AddCityModel();
  isAddCity:boolean;
  isEditCity:boolean;

  resetAddModal(){
    this.isAddCity=true; 
    this.isEditCity=false; 
    this.cityData=new AddCityModel();
  }

  constructor() { }

  ngOnInit(): void {
  }

  insertCity()
  {
    
    Swal.fire(
      'Good job!',
      'City name added!',
      'success'
    )

  
  }
  sendCity(cityDetails:any){
    this.cityData=cityDetails;
  }
  updateCity()
  {
    
      Swal.fire(
        '',
        'City name updated successfully!',
        'success'
      )

 }
 deleteCity()
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
            'Your city has been deleted.',
            'success'
          )
        
       
      }
    })
  }

}
