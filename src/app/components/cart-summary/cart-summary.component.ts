import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartSummary();
  }

  // Обновляем информацию о корзине
  updateCartSummary(): void {
    this.totalItems = this.cartService.getTotalItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
