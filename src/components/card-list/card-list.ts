import { Component, ElementRef, Input, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.html'
})

export class CardListComponent {
  @Input() items: object[] = [];

  @ViewChild('accordionContent') elementView: ElementRef;

  viewHeight: number;

  constructor(public renderer: Renderer) { }

  ngAfterViewInit() {

  }

}