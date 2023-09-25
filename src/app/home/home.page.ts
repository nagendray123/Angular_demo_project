import { Component, AfterViewInit,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule],

})
export class HomePage implements AfterViewInit{

    swiper_images=[
    '../../assets/back-11.jpg',
    '../../assets/back-12.jpg',
    ]

   


    ngAfterViewInit(): void {
      register();
    }
  

}
