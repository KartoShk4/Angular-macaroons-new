import { Component} from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // Для мобильного меню (burger)
  isBurger: boolean = false;

  // Функция отображения мобильного меню (burger)
  public showBurger(): void {
    this.isBurger = !this.isBurger;
  }

  // Функция скрытия мобильного меню (burger)
  public closeBurger(): void {
    this.isBurger = false;
  }

  // Номер телефона
  public showPhoneNumber: { phone: string }[] = [
    {
      phone: '+375 (29) 368-98-68'
    },
  ];

  protected readonly Component = Component;
}
