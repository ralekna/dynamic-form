import {Component, Input, OnInit} from '@angular/core';
import {FormItem} from '../../models/form-item';

@Component({
  selector: 'app-dynamic-field-builder',
  templateUrl: './dynamic-field-builder.component.html',
  styleUrls: ['./dynamic-field-builder.component.css']
})
export class DynamicFieldBuilderComponent implements OnInit {

  @Input()
  public formItem: FormItem;

  constructor() { }

  ngOnInit() {
  }

}
