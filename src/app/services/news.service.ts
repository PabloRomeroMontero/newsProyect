import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // https://newsapi.org/v2/everything?apiKey=API_KEY&language=es
  API_KEY = '6f014f5b9b1742cfbb4895c37c113597';
  constructor(private http: HttpClient) {
  }
  getNews() {

    // return this.http.get(`https://newsapi.org/v2/everything?apiKey=${this.API_KEY}&language=es&q=f`)
    //   .pipe(
    //     map(this.createArray)
    //   );
  }
}
