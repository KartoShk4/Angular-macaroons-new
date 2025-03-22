import { Component } from '@angular/core';
import { ProductType } from "./types/product.type";
import { FormType } from "./types/form.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Блок продуктов
  public products: ProductType[] = [];

  // Флаг редактирования поля ввода телефона
  public isEditing: boolean = false;

  // Для валидации
  public formValues: FormType = {
    productTitle: '',
    name: '',
    phone: '',
  };

  // Метод обработки ввода номера телефона
  public onPhoneInput(value: string): void {
    this.formValues.phone = value.replace(/\D/g, ''); // Удаляем лишние символы
  }

  // Валидация
  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберите макарун');
      return;
    }
    if (!this.formValues.name.trim()) {
      alert('Введите имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните номер телефона');
      return;
    }
    alert('Спасибо за заказ! Мы скоро свяжемся с вами.');

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    };
  }

  // Функция плавного скролла
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  // Функция добавления товара в форму
  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }
}
