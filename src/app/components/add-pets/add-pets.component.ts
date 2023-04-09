import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent {
  petForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.petForm = this.formBuilder.group({
      name: [''],
      Age: [''],
      Description: [''],
      Img: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddPet(this.petForm.value)
    .subscribe(() => {
      console.log("Data added successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/list'))
    }, (err) => {
      console.log(err);
    })
  }
}
