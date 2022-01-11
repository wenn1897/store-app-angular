import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-app-angular';

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  viewCart() {
    console.log('Viendo el carrito de compras');
    //  this.productClicked.emit(this.product.id);
  }
}
