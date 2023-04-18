import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Dog } from '../../../assets/data/dogstructor';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
  datadog:Dog[] = [];

  constructor(private datanew : PetService){}

  ngOnInit(){
    this.datanew.GetDogs().subscribe((data)=>{
      this.datadog = data
    })
  }
}
