export class FormItem {
  constructor(
    public label: string,
    public name: string,
    public type: 'textinput' | 'checkbox' | 'piechart',
    public required: boolean = false) {}
}
