import {FormItem} from './form-item';

export class FormTemplate {
  constructor(
    public title: string,
    public formItems: Array<FormItem> = []
  ) {}
}
