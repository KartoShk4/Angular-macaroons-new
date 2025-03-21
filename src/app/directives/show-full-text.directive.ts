import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ShowFullText]'
})
export class ShowFullTextDirective {
  @Input() fullText: string = ''; // Полный текст

  constructor(private el: ElementRef) {}

  // Наведение мышки на элемент
  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.textContent = this.fullText;
  }

  // Уход мышки с элемента
  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.textContent = this.truncatedText;
  }

  // Сокращенный текст
  private get truncatedText(): string {
    return this.el.nativeElement.textContent;
  }
}
