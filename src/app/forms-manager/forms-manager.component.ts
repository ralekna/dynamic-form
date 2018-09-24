import { Component, OnInit } from '@angular/core';
import {FormTemplate} from '../models/form-template';

@Component({
  selector: 'app-forms-manager',
  templateUrl: './forms-manager.component.html',
  styleUrls: ['./forms-manager.component.scss']
})
export class FormsManagerComponent implements OnInit {

  protected forms: Array<FormTemplate> = [{title: 'New form', formItems: []}];

  constructor() { }

  ngOnInit() {
  }

  protected createNewForm() {
    this.forms.push(new FormTemplate(''));
  }

}
