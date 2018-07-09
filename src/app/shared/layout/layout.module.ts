import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SearchModule } from '../search';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { PipesModule } from '../../core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    ReactiveFormsModule,
    SearchModule,
    MatCardModule,
    PipesModule
  ],
  declarations: [HeaderComponent, FooterComponent, ProductCardComponent],
  exports: [HeaderComponent, FooterComponent, ProductCardComponent]
})
export class LayoutModule { }
