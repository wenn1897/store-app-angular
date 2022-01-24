import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() productClicked: EventEmitter<any>; 

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camisetas.png',
      title: 'Camiseta',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    },
    {
      id: '2',
      image: 'assets/images/blusa.png',
      title: 'Blusa',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    },
    {
      id: '3',
      image: 'assets/images/chaqueta.png',
      title: 'Chaqueta Dama',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    },
    {
      id: '4',
      image: 'assets/images/chaquetamen.png',
      title: 'Chaqueta Caballero',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    },
    {
      id: '5',
      image: 'assets/images/pantalones.png',
      title: 'Pantalon',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    },
    {
      id: '6',
      image: 'assets/images/sudadera.png',
      title: 'Sudadera',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    },
    {
      id: '7',
      image: 'assets/images/zapatos.png',
      title: 'Zapatos',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    },
    {
      id: '8',
      image: 'assets/images/botas.png',
      title: 'Botas',
      price: 80000,
      description: {
        color: 'azul, blanco',
        talla: 'x,s,l'
      }
    }
  ]
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  addCart() {
    console.log('añadido al carrito, producto');
    //this.productClicked.emit(this.products);
    //  this.productClicked.emit(this.product.id);
  }

}
