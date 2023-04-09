import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
    ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetPet(this.getId).subscribe(res => {
    this.updateForm.setValue({
    name: res['name'],
    age: res['Age'],
    description: res['Description'],
    image: res['Img']
    });
  });
    this.updateForm = this.formBuilder.group({
    name: [''],
    age: [''],
    description: [''],
    img: ['']
    })
    }
    ngOnInit() { }
    onUpdate(): any {
    this.crudService.updatePet(this.getId, this.updateForm.value)
    .subscribe(() => {
    console.log('Data updated successfully!')
    this.ngZone.run(() => this.router.navigateByUrl('/list'))
    }, (err) => {
    console.log(err);
    });
    }
   }


