import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ButtonHover]'
})
export class ButtonHoverDirective {
  // Стандартные значения кнопки
  @Input() appButtonHover: string = 'linear-gradient(0.0deg, #71081e 0%, #d7485c 100%)';
  // Значение кнопки при наведении
  @Input() hoverBackground: string = 'linear-gradient(0.0deg, #d7485c 0%, #71081e 100%)';
  // Тень при наведении
  @Input() hoverShadow: string = '0 5px 9px 1px rgba(130, 19, 40, 0.5)';

  constructor(private el: ElementRef) {
    this.setInitialStyles();
  }

  // Наведение мышки на кнопку
  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeBackground(this.hoverBackground);
    this.applyShadow(this.hoverShadow);
  }

  // Обработчик события ухода мыши
  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeBackground(this.appButtonHover);
    this.removeShadow();
  }

  // Метод для установки начальных стилей
  private setInitialStyles(): void {
    this.el.nativeElement.style.backgroundImage = this.appButtonHover;
    this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.el.nativeElement.style.backgroundSize = 'cover';
    this.el.nativeElement.style.transition = 'background-image 0.3s ease, box-shadow 0.3s ease'; // Плавный переход
  }

  // Метод для изменения фона
  private changeBackground(background: string): void {
    this.el.nativeElement.style.backgroundImage = background;
  }

  // Метод для добавления тени
  private applyShadow(shadow: string): void {
    this.el.nativeElement.style.boxShadow = shadow;
  }

  // Метод для удаления тени
  private removeShadow(): void {
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
