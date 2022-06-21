import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./bus/list/list.component";
import {EditComponent} from "./bus/edit/edit.component";
import {CreateComponent} from "./bus/create/create.component";



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
