import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
    {
        path:'',
        component: ProductComponent,
    },
    {
        path:':id',
        component: ProductDetailComponent,
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {}