import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})

// export class ProductListComponent {

  // products: Product[] = [];

  // constructor(private productService: ProductService) {

// }

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  currentCategoryName: string = "";
  // searchMode!: boolean;
  searchMode: boolean = false;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
    });
  }

  // listProducts() {
  //   this.productService.getProductList().subscribe(
  //     data => {
  //       this.products = data;
  //     }
  //   )
  // }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleListProducts() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string and convert it to number using symbol "+"
      // "!" tells compiler that the object is not null
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      // get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    }
    else {
      // category id is not available -> default to id of 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    // now get the products for the given category


    this.productService.getProductList(this.currentCategoryId).subscribe(
      (data: Product[]) => {
        console.log('Fetched products:', data); // Debug line
        this.products = data;
      },
      error => {
        console.error('Error fetching product list:', error);
      }
    );
  }
}