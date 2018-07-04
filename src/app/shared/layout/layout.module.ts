import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchModule } from '../search';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSearchComponent } from './product-search/product-search.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SearchModule,
    MatCardModule
  ],
  declarations: [HeaderComponent, FooterComponent, ProductSearchComponent],
  exports: [HeaderComponent, FooterComponent, ProductSearchComponent]
})
export class LayoutModule { }
