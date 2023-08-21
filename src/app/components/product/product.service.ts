//import { Product } from './product-create/product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private snackbar = inject(MatSnackBar)
  private http = inject(HttpClient)
  
  showMessage(msg: string){
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  // create(product: Product): Observable<Product> {
  //   return 
  // }
}
