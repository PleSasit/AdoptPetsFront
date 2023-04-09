import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-pets'},
  { path: 'list', component: ListComponent },
  { path: 'add-pets', component: AddPetsComponent },
  { path: 'edit/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
