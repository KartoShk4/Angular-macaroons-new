import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[UnderlineHover]'
})
export class UnderlineHoverDirective {
  constructor(private el: ElementRef) {
    this.setInitialStyles();
  }

  // Наведение мышки на элемент
  @HostListener('mouseenter') onMouseEnter(): void {
    this.applyHoverStyles();
  }

  // Уход мышки с элемента
  @HostListener('mouseleave') onMouseLeave(): void {
    this.removeHoverStyles();
  }

  // Установка начальных стилей
  private setInitialStyles(): void {
    const element = this.el.nativeElement;
    element.style.paddingBottom = '3px';
    element.style.backgroundImage = 'linear-gradient(#821328, #821328)';
    element.style.backgroundPosition = '0 100%';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundSize = '0 2px';
    element.style.transition = 'background-size 0.3s';
  }

  // Применение стилей при наведении
  private applyHoverStyles(): void {
    this.el.nativeElement.style.backgroundSize = '100% 2px';
  }

  // Удаление стилей при уходе
  private removeHoverStyles(): void {
    this.el.nativeElement.style.backgroundSize = '0 2px';
  }
}
