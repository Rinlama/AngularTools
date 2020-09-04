import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicsumComponent } from './picsum/picsum.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationDirective } from './directives/pagination.directive';

@NgModule({
  declarations: [AppComponent, PicsumComponent, PaginationDirective],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
