import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ScrollerModule } from 'primeng/scroller';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    ScrollerModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule
   
    
  ]

})
export class ProductModule { }
