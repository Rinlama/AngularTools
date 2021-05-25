import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlinesComponent } from './component/airlines/airlines.component';
import { ProjectComponent } from './component/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectComponent,
      },
    ],
  },
  {
    path: 'airlines',
    children: [
      {
        path: '',
        component: AirlinesComponent,
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
