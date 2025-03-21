import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ProductType } from "../types/product.type";

@Injectable({
  // Сервис делаем доступным во всём приложении
  providedIn: 'root'
})
export class CartService {
  // Товары в корзине
  private cartItems: ProductType[] = [];
  private cartSubject = new BehaviorSubject<ProductType[]>([]);

  constructor() { }

  // Добавляем товары в корзину
  addToCart(product: ProductType): void {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  // Удаляем товары из корзины
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item: ProductType): boolean => item.id !== productId);
    this.cartSubject.next(this.cartItems);
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
    return this.cartItems.reduce((total: number, item: ProductType): number => total + item.price, 0);
  }

  // Получаем информацию об изменении корзины
  getCartUpdate() {
    return this.cartSubject.asObservable();
  }
}
