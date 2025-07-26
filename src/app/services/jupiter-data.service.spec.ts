import { TestBed } from '@angular/core/testing';
import { JupiterDataService } from './jupiter-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JupiterDataService', () => {
  let service: JupiterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JupiterDataService]
    });
    service = TestBed.inject(JupiterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});