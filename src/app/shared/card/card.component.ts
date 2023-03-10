import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Product} from "../../models/product";
import {CardImageDirective} from "../../directives/card-image.directive";
import {CartService} from "../../services/cart.service";
import {DiscountPipe} from "../pipes/discount.pipe";

@Component({
  selector: 'app-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage, CardImageDirective, DiscountPipe],
  template: `
    <div cardImage class="row card " style=" width: 250px;">
      <div class="one col-12">
        <img ngSrc="{{product.image}}" width="150" height="150" class="image mt-1" alt="...">
      </div>
      <hr class="mt-1"/>
      <div class="col-12">
        <p class="card-category p-0 m-0">{{product.category | uppercase}} - </p>
        <p #title class="card-title ">{{product.title}}</p>
      </div>
      <div class="col-12">
        <p class="price fw-bold">{{product.price | currency:'Kshs ':'symbol':'2.1-2'}}</p>
      </div>
      <div class="row">
        <div class="col-6 ">
          <p class="card-text text-decoration-line-through">{{product.discountedPrice | currency:'Kshs ':'symbol':'2.1-2'}}</p>
        </div>
        <div class="col-6 ">
          <p class="card-text text-warning">{{product | discount }}%</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 card-body">
          <p class="card-text bg-warning">Qty: {{product.quantity }}</p>
        </div>
        <div class="col-6 card-body">
          <a (click)=addToCart(product) class="btn btn-primary">Buy</a>
        </div>

      </div>
    </div>
  `,
  styles: []
})
export class CardComponent {

  @Input() product!: Product;

  constructor(private cartService: CartService) {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
