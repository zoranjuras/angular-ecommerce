import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopFormService {

  private countriesUrl = 'http://localhost:8000/api/countries';
  private statesUrl = 'http://localhost:8000/api/states';

  constructor(private httpClient: HttpClient) { }

  getCreditCardMonths(startMonth: number): Observable<number[]> {

    let data: number[] = [];

    // Build an array for Month dropdown list
    // start at current month and loop

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);

  }

    getCreditCardYears(): Observable<number[]> {

    let data: number[] = [];

    // Build an array for Year dropdown list
    // start at current year and loop for next 10 years

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }
    
    return of(data);

  }
}
