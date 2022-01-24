import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//import { ProductDetailComponent } from './components/product/components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

import {AdminGuard} from './guardianes/admin.guard';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/home',
        pathMatch:'full',
      },
      {
        path:'home', 
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
        //component: HomeComponent
      },
      { 
        path:'products', 
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
        //component: ProductComponent
      },
      { 
        path:'contact', 
        canActivate: [AdminGuard],
        component: ContactComponent
      },
      {
        path:'**', 
        component: PageNotFoundComponent
      }
    ]
  },
  /*{
    path:'home', 
    component: HomeComponent
  },
  { 
    path:'products', 
    component: ProductComponent
  },
  { 
    path:'products/:id', 
    component: ProductDetailComponent
  },
  { 
    path:'contact', 
    component: ContactComponent
  },
  {
    path:'**', 
    component: PageNotFoundComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
