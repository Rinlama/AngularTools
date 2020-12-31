import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowTaskComponent } from './task/show-task/show-task.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    AddTaskComponent,
    ListTaskComponent,
    ShowTaskComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    ChartsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    ChartsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComponentModule {}
