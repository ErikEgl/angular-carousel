import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FrontPageSection } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class JupiterDataService {
  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  constructor(private http: HttpClient) { }

  getFrontPageData(): Observable<FrontPageSection[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data.category.frontPage)
    );
  }

}