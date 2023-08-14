import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/Models/blog';
import { CartItem } from 'src/app/Models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService,
    private toasterService: ToastrService
  ) { }
  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.cartItems = this.cartService.list();
  }
  removeFromCart(blog: Blog) {
    this.cartService.removeFromCart(blog);
    this.toasterService.error("silindi");

  }

}
