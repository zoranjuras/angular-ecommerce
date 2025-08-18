import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  // styleUrl: './product-details.component.css'
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product!: Product;

  constructor (private productService: ProductService,
               private cartService: CartService,
               private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
      })
    }

  handleProductDetails() {
    // get the "id" param string and convert it to number using symbol "+"
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  addToCart() {

    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
    const theCartItem = new CartItem(this.product.id, this.product.name,
                                     this.product.imageUrl, this.product.unitPrice);
    this.cartService.addToCart(theCartItem);
  }

}
