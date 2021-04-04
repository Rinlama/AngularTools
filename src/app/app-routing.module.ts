import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './component/project/project.component';
import { ProjectdetailsComponent } from './component/projectdetails/projectdetails.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'projects',
        component: ProjectComponent,
      },
      {
        path: 'projects/:id',
        component: ProjectdetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'projects',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
