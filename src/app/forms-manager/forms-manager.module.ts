import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';
import {FormsManagerComponent} from './forms-manager.component';
import {DynamicFormBuilderComponent} from './dynamic-form-builder/dynamic-form-builder.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [FormsManagerComponent, DynamicFormBuilderComponent],
  exports: [FormsManagerComponent]
})
export class FormsManagerModule { }
