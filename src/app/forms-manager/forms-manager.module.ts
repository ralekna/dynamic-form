import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatSelectModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';
import {FormsManagerComponent} from './forms-manager.component';
import {DynamicFormBuilderComponent} from './dynamic-form-builder/dynamic-form-builder.component';
import {FormsModule} from '@angular/forms';
import { DynamicFieldBuilderComponent } from './dynamic-field-builder/dynamic-field-builder.component';

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
    MatIconModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [FormsManagerComponent, DynamicFormBuilderComponent, DynamicFieldBuilderComponent],
  exports: [FormsManagerComponent]
})
export class FormsManagerModule { }
