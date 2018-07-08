import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { ErrorHandlerImpl } from './error.handler';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '../../node_modules/@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    CoreModule,
    MatInputModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerImpl },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { horizontalPosition: 'left' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
