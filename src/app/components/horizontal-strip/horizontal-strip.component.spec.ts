import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorizontalStripComponent } from './horizontal-strip.component';
import { ContentItemComponent } from '../content-item/content-item.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FrontPageSection, ContentItem, Photo } from '../../models/content.model';

describe('HorizontalStripComponent', () => {
  let component: HorizontalStripComponent;
  let fixture: ComponentFixture<HorizontalStripComponent>;

  const mockStripData: FrontPageSection = {
    header: 'Saatesoovitus',
    headerUrl: '/v-saated',
    highTimeline: true,
    liveBlock: false,
    manual: {
      highTimeline: true,
      banner: false
    },
    data: [
      {
        id: 1609737794,
        heading: 'Kirjanduse aeg 2025',
        canonicalUrl: 'https://jupiter.err.ee/1609737794',
        verticalPhotos: [
          {
            id: 2460827,
            photoTypes: {
              '80': {
                type: 80,
                w: 400,
                h: 600,
                url: 'https://s.err.ee/photo/crop/2024/07/03/2460827h9531t80.jpg'
              }
            },
            photoUrlBase: 'https://s.err.ee/photo/crop/2024/07/03/2460827h7f1c.jpg'
          } as Photo
        ]
      } as ContentItem
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HorizontalStripComponent,
        ContentItemComponent,
        CarouselModule,
        ButtonModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalStripComponent);
    component = fixture.componentInstance;
    component.stripData = mockStripData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.strip-header').textContent)
      .toContain('Saatesoovitus');
  });

  it('should display the "Vaata kõiki" link', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent)
      .toContain('Vaata kõiki');
  });

  it('should render content items', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('app-content-item').length)
      .toBe(1);
  });
});