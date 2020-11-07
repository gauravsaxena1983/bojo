import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

import {
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatPaginatorModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/bobject/list/list.component';
import { EditComponent } from './components/bobject/edit/edit.component';
import { CreateComponent } from './components/bobject/create/create.component';
import { BInputTextComponent } from './components/common/binput/binput-text/binput-text.component';
import { BInputMultiTextComponent } from './components/common/binput/binput-multi-text/binput-multi-text.component';
import { BInputDateComponent } from './components/common/binput/binput-date/binput-date.component';
import { BInputRefComponent } from './components/common/binput/binput-ref/binput-ref.component';
import { BInputBoolComponent } from './components/common/binput/binput-bool/binput-bool.component';
import { BInputOptionComponent } from './components/common/binput/binput-option/binput-option.component';
import { BInputNumberComponent } from './components/common/binput/binput-number/binput-number.component';
import { BCellSelectComponent } from './components/common/bcell/bcell-select/binput-select.component';
import { BCellTextComponent } from './components/common/bcell/bcell-text/binput-text.component';
import { BCellMultiTextComponent } from './components/common/bcell/bcell-multi-text/bcell-multi-text.component';
import { BCellDateComponent } from './components/common/bcell/bcell-date/bcell-date.component';
import { BCellRefComponent } from './components/common/bcell/bcell-ref/bcell-ref.component';
import { BCellBoolComponent } from './components/common/bcell/bcell-bool/bcell-bool.component';
import { BCellOptionComponent } from './components/common/bcell/bcell-option/bcell-option.component';
import { BCellNumberComponent } from './components/common/bcell/bcell-number/bcell-number.component';
import { BCellHeaderComponent } from './components/common/bcell/bcell-header/bcell-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    BInputTextComponent,
    BInputMultiTextComponent,
    BInputDateComponent,
    BInputRefComponent,
    BInputBoolComponent,
    BInputOptionComponent,
    BInputNumberComponent,
    BCellSelectComponent,
    BCellTextComponent,
    BCellMultiTextComponent,
    BCellDateComponent,
    BCellRefComponent,
    BCellBoolComponent,
    BCellOptionComponent,
    BCellNumberComponent,
    BCellHeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
