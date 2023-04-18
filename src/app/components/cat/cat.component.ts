import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Cat } from '../../../assets/data/catstructor';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  datacat:Cat[] = [];

  constructor(private datanew : PetService){}

  ngOnInit(){
    this.datanew.GetCats().subscribe((data)=>{
      this.datacat = data
    })
  }
}
