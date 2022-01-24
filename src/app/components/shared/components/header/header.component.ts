import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  viewCart() {
    console.log('Viendo el carrito de compras');
    //  this.productClicked.emit(this.product.id);
  }

}
