import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateToDoComponentComponent } from './create-to-do-component/create-to-do-component.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { DoneListComponentComponent } from './done-list-component/done-list-component.component';

const routes: Routes = [
  { path: 'create-list', component: CreateToDoComponentComponent },
  { path: '',   redirectTo: '/create-list', pathMatch: 'full' },
  { path: 'to-do-list', component: ToDoListComponentComponent },
  { path: 'done-list', component: DoneListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
