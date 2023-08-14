import { Injectable } from '@angular/core';
import { Blog } from '../Models/blog';
import { CartItem } from '../Models/cartItem';
import { CartItems } from '../Models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(blog: Blog) {
    let item = CartItems.find(x => x.blog.blogID === blog.blogID);
    if (item) {
      item.quantity += 1;
    }
    else {
      let cartItem = new CartItem();
      cartItem.blog = blog;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(blog: Blog) {
    let item: CartItem = CartItems.find(x => x.blog.blogID === blog.blogID);
    CartItems.splice(CartItems.indexOf(item), 1);
  }
  list(): CartItem[] {
    return CartItems;
  }

}
