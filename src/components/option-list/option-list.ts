import { Component, Input, Renderer } from '@angular/core';

@Component({
  selector: 'option-list',
  templateUrl: 'option-list.html'
})

export class OptionListComponent {
  @Input() items: object[] = [];

  constructor(public renderer: Renderer) { }
}