import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: Image[] = [
    {
      id:'1', 
      ruta: '../assets/images/banner-1.jpg'
    },
    {
      id:'2', 
      ruta: '../assets/images/banner-2.jpg'
    },
    {
      id:'3', 
      ruta: '../assets/images/banner-3.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
