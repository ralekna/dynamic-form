import {Component, Input, OnInit} from '@angular/core';
import {FormTemplate} from '../../models/form-template';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent implements OnInit {

  @Input()
  public formTemplate: FormTemplate;

  constructor() { }

  ngOnInit() {
  }

}
