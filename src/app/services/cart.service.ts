import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  // Сервис делаем доступным во всём приложении
  providedIn: 'root'
})
export class CartService {
  // Товары в корзине
  private cartItems: ProductType[] = [];

  constructor() { }

  // Добавляем товары в корзину
  addToCart(product: ProductType): void {
    this.cartItems.push(product);
  }

  // Удаляем товары из корзины
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  }

  // Получаем список товаров в корзине
  getCartItems() : ProductType[] {
    return this.cartItems;
  }

  // Получаем общее количество товаров в корзине
  getTotalItems():number {
    return this.cartItems.length;
  }

  // Получаем всю сумму покупок
  getTotalPrice():number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
