import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent {

  private router = inject(Router) //instanciando router para funcionar em toda aplicação
    
  navigateToProductCreate(): void{
    this.router.navigate(['/products/create']);
  }

}
