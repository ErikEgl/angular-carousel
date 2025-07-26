import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentItemComponent } from './content-item.component';
import { ContentItem, Photo } from '../../models/content.model';

describe('ContentItemComponent', () => {
  let component: ContentItemComponent;
  let fixture: ComponentFixture<ContentItemComponent>;

  const mockItem: ContentItem = {
    id: 1609737794,
    heading: 'Kirjanduse aeg 2025',
    subHeading: 'Lilli Luuk ja Indrek Koff',
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
          },
          '60': {
            type: 60,
            w: 180,
            h: 270,
            url: 'https://s.err.ee/photo/crop/2024/07/03/2460827h0620t60.jpg'
          }
        },
        photoUrlBase: 'https://s.err.ee/photo/crop/2024/07/03/2460827h7f1c.jpg'
      } as Photo
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentItemComponent);
    component = fixture.componentInstance;
    component.itemData = mockItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display image with correct src', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toBe('https://s.err.ee/photo/crop/2024/07/03/2460827h9531t80.jpg');
  });

  it('should have correct link when canonicalUrl exists', () => {
    const link = fixture.nativeElement.querySelector('a');
    expect(link.href).toBe('https://jupiter.err.ee/1609737794');
  });
});