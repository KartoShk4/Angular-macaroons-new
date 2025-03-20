import { Component } from '@angular/core';
import {ProductType} from "./types/product.type";
import {FormType} from "./types/form.type";
import {AdvantagesType} from "./types/advantages.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // Блок Advantages
  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  // Блок продуктов
  public products: ProductType[] = [
    {
      image: 'product-macaroons01.png',
      title: 'Макарун с малиной',
      quantity: 2,
      price: 2.45,
    },
    {
      image: 'product-macaroons02.png',
      title: 'Макарун с манго',
      quantity: 1,
      price: 1.80,
    },
    {
      image: 'product-macaroons03.png',
      title: 'Пирог с ванилью',
      quantity: 1,
      price: 1.90,
    },
    {
      image: 'product-macaroons04.png',
      title: 'Пирог с фисташками',
      quantity: 1,
      price: 2.00,
    },
  ];

  // Для подарка, указываем false по умолчанию.
  showPresent: boolean = false;

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

    // Для подарка, указываем true для отображения, если форма валидна.
    this.showPresent = true;

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


