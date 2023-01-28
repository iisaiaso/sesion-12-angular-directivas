import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CondicionalsiDirective } from '../directives/condicionalsi.directive';



@NgModule({
  declarations: [
    HomeComponent,
    CondicionalsiDirective
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
