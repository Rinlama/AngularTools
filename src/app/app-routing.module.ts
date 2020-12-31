import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'task',
    children: [
      {
        path: 'add',
        component: AddTaskComponent,
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
