import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItemComponent } from '../content-item/content-item.component';
import { FrontPageSection } from '../../models/content.model';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-horizontal-strip',
  standalone: true,
  imports: [CommonModule, ContentItemComponent, CarouselModule, ButtonModule],
  templateUrl: './horizontal-strip.component.html',
  styleUrls: ['./horizontal-strip.component.scss']
})
export class HorizontalStripComponent {
  @Input() stripData!: FrontPageSection;
  responsiveOptions = [
    {
      breakpoint: '1920px',
      numVisible: 7.2,
      numScroll: 7
    },
    {
      breakpoint: '1440px',
      numVisible: 6.2,
      numScroll: 6
    },
    {
      breakpoint: '1024px',
      numVisible: 4.2,
      numScroll: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3.2,
      numScroll: 3
    },
    {
      breakpoint: '480px',
      numVisible: 2.2,
      numScroll: 2
    }
  ];
  
}