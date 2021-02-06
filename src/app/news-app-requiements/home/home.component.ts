import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsApiService } from './../service/news-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedIndexValue: any = 0;
  newsData: any = [];
  
  constructor(private apiService: NewsApiService) {
    this.apiService.getNews().subscribe((data)=>{
      // console.log(data);
      this.newsData = data['articles'];
    });
  }

  ngOnInit(): void {
    /**For in-memory data */
    // this.newsData =LEADS_DATA[0].articles
  }

  /** page url  */
  routerList: Array<any> = [
    { key: 0, value: '/home', title: 'Home' },
    { key: 1, value: '/bookmarks', title: 'Bookmarks' }
  ];


}

const LEADS_DATA = [
  {
    status: 'ok',
    totalResults: 10,
    articles: [
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch',
        },
        author: 'Mike Butcher',
        title:
          'As location becomes irrelevant, Greek VCs eye local talent and spread their wings',
        description:
          'Venture capital and venture debt have continued to grow in the country, although the angel scene remains low-key.',
        url:
          'https://techcrunch.com/2021/02/05/as-location-becomes-irrelevant-greek-vcs-eye-local-talent-and-spread-their-wings/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2021/02/GettyImages-626143228.jpg?w=600',
        publishedAt: '2021-02-06T05:33:54Z',
        content:
          'According to a recentreport on Greece’s startup ecosystem by management consultants Found.ation, venture capital and venture debt have continued to grow in the country, although its angel scene remai… [+49431 chars]',
      }
    ],
  },
];