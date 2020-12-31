import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSelectModule,
  ],
})
export class MaterialsModule {}
