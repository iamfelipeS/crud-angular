import { Component, Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})

export class ProductCreateComponent {
  product: Product= {
    name: 'Product-test',
    price: 100
  }

  private productService = Inject(ProductService) 
  private router = Inject(Router) 


  createProduct(): void {
    this.productService.showMessage('Sucesso');
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
