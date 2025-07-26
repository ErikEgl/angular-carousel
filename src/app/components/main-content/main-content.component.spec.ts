import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContentComponent } from './main-content.component';
import { JupiterDataService } from '../../services/jupiter-data.service';
import { of } from 'rxjs';
import { FrontPageSection } from '../../models/content.model';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;
  let mockDataService: jasmine.SpyObj<JupiterDataService>;

  const mockFrontPageData: FrontPageSection[] = [
    {
      header: 'Saatesoovitus',
      headerUrl: '/v-saated',
      highTimeline: true,
      data: [
        {
          id: 1609737794,
          heading: 'Kirjanduse aeg 2025',
          canonicalUrl: 'https://jupiter.err.ee/1609737794',
          verticalPhotos: [{
            id: 2460827,
            photoTypes: { '80': { type: 80, w: 400, h: 600, url: 'test.jpg' } },
            photoUrlBase: 'test.jpg'
          }]
        }
      ]
    }
  ];

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('JupiterDataService', ['getFrontPageData']);
    mockDataService.getFrontPageData.and.returnValue(of(mockFrontPageData));

    await TestBed.configureTestingModule({
      imports: [MainContentComponent],
      providers: [
        { provide: JupiterDataService, useValue: mockDataService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data on init', () => {
    expect(mockDataService.getFrontPageData).toHaveBeenCalled();
    expect(component.frontPageData.length).toBe(1);
    expect(component.loading).toBeFalse();
  });

  it('should display loading state', () => {
    component.loading = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.loading')).toBeTruthy();
  });

  it('should display error state', () => {
    component.error = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.error')).toBeTruthy();
  });
});