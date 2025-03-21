import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { ProductType } from "../../types/product.type";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // Список товаров
  products: ProductType[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Получаем товары из сервиса
    this.products = this.productService.getProducts();
  }

  // Метод для добавления товара в корзину
  onProductAdded(productName: string): void {
    alert(`${productName} добавлен в корзину!`);
  }
}
