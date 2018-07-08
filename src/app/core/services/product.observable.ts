import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ObservableProduct extends Subject<Product> {}
