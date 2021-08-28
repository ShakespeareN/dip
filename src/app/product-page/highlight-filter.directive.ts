import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ShopParams } from '../interface/shopParams';

@Directive({
  selector: '[appHighlightFilter]'
})
export class HighlightFilterDirective {
  @Input() params: ShopParams;
  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
    console.log(this.params);
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('', 'orange');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('', 'black');
  }

  private highlight(backcolor: string, color: string ): void {
    this.el.nativeElement.style.backgroundColor = backcolor;
    this.el.nativeElement.style.color = color;
  }

}
