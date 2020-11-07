import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/bobject/list/list.component';
import { EditComponent } from './components/bobject/edit/edit.component';
import { CreateComponent } from './components/bobject/create/create.component';


const routes: Routes = [
  { path:  ':name/list', component:  ListComponent},
  { path:  ':name/edit/:id', component:  EditComponent},
  { path:  ':name/create', component:  CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
