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
      id: 1,
      image: 'product-macaroons01.png',
      title: 'Макарун с малиной',
      quantity: 1,
      price: 2,
    },
    {
      id: 2,
      image: 'product-macaroons02.png',
      title: 'Макарун с манго',
      quantity: 1,
      price: 4,
    },
    {
      id: 3,
      image: 'product-macaroons03.png',
      title: 'Пирог с ванилью',
      quantity: 1,
      price: 6,
    },
    {
      id: 4,
      image: 'product-macaroons04.png',
      title: 'Пирог с фисташками',
      quantity: 1,
      price: 8,
    },
  ];

  constructor() { }

  // Метод для получения списка товаров
  getProducts(): ProductType[] {
    return this.products;
  }
}
