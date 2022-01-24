import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'

import { BannerComponent } from './../home/components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ]
})

export class HomeModule {

}