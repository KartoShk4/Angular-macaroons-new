import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  // Делаем сервис доступным во всём приложении
  providedIn: 'root'
})
export class ProductService {

  // Массив списка продуктов
  private products: ProductType[] = [
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

  constructor() { }

  // Метод для получения списка товаров
  getProducts(): ProductType[] {
    return this.products;
  }
}
