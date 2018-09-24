import { Component, OnInit } from '@angular/core';
import {FormTemplate} from '../models/form-template';

@Component({
  selector: 'app-forms-manager',
  templateUrl: './forms-manager.component.html',
  styleUrls: ['./forms-manager.component.scss']
})
export class FormsManagerComponent implements OnInit {

  protected forms: Array<FormTemplate> = [
    {title: 'New form', formItems: [{label: 'Field 1', name: 'textinput0', type: 'textinput', required: false}]}
  ];

  constructor() { }

  ngOnInit() {
  }

  protected createNewForm() {
    this.forms.push(new FormTemplate(''));
  }

}
