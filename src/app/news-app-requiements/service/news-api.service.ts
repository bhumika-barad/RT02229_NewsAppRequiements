import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private httpClient: HttpClient) { }
  API_KEY = '7c15fdcb7fa54b3197f013fb812d7ba6';
  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  
}
