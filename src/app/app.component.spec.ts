import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JupiterDataService } from './services/jupiter-data.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let mockDataService: jasmine.SpyObj<JupiterDataService>;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('JupiterDataService', ['getFrontPageData']);
    mockDataService.getFrontPageData.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: JupiterDataService, useValue: mockDataService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});