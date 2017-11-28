import { Component, ElementRef, Input, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.html'
})

export class CardListComponent {
  @Input() headerColor: string = '#F53D3D';
  @Input() textColor: string = '#FFF';
  @Input() contentColor: string = '#F9F9F9';
  @Input() title: string;
  @Input() hasMargin: boolean = true;
  @Input() expanded: boolean;
  @Input() items: object[] = [];

  @ViewChild('accordionContent') elementView: ElementRef;

  viewHeight: number;

  constructor(public renderer: Renderer) { }

  ngAfterViewInit() {
    // this.viewHeight = this.elementView.nativeElement.offsetHeight;

    // if (!this.expanded) {
    //   this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
    // }
  }

  toggleAccordion() {
    // this.expanded = !this.expanded;
    // const newHeight = this.expanded ? '100%' : '0px';
    // this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
  }
}