import {Component, Input, Output, EventEmitter} from '@angular/core';
import { ProductType } from "../../types/product.type";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  // Товар, который передается из родительского компонента
  @Input() product!: ProductType;

  // Событие для уведомления родителя
  @Output() addedToCart: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cartService: CartService) {}

  // Метод для добавления товара в корзину
  addToCart(): void {
    // Добавляем товар в корзину
    this.cartService.addToCart(this.product);

    // Уведомляем родителя
    this.addedToCart.emit(this.product.title);
  }
}
