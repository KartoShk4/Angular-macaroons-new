import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { ProductType } from "../../types/product.type";
import  { CartService } from "../../services/cart.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // Список товаров
  products: ProductType[] = [];

  constructor(private productService: ProductService,
              // Добавляем сервис корзины
              private cartService: CartService
) { }

  ngOnInit(): void {
    // Получаем товары из сервиса
    this.products = this.productService.getProducts();
  }

  // Метод для добавления товара в корзину
  addToCart(product: ProductType): void {
    this.cartService.addToCart(product);
    alert(`${product.title} добавлен в корзину!`)
  }
}
