import { Component } from '@angular/core';
import { ProductType } from "./types/product.type";
import { FormType } from "./types/form.type";
import { AdvantagesType } from "./types/advantages.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {



  // Блок продуктов
  public products: ProductType[] = [];

  // Для валидации
  public formValues: FormType = {
    productTitle: '',
    name: '',
    phone: '',
  }

  // Валидация
  public createOrder(): void {
    // Создали условие - если пицца не выбрана то выходит alert
    if (!this.formValues.productTitle) {
      alert('Выберите макарун');
      return;
    }
    // Создали еще условие - если адрес не введен то выходит alert
    if (!this.formValues.name.trim()) {
      alert('Введите имя');
      return;
    }
    // Создали еще условие - если телефон не введен то выходит alert
    if (!this.formValues.phone) {
      alert('Заполните номер телефона');
      return;
    }
    // Выводим alert если заказ успешно оформлен
    alert('Спасибо за заказ. Мы скоро свяжемся с вами');


    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }

  // Функция плавного скролла
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'})
  }

  // Функция добавления товара в форму
  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    // Указали, что бы в форме продукт показывался в верхнем регистре.
    this.formValues.productTitle = product.title.toUpperCase();
  }
}


