import { Component, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor() {}
  // newsData: any = [];
  isVisibleBookmarks: boolean = true;
  isScroll: boolean = false;
  @Input() newsData: any;
  bookmarksData: any = [];

  ngOnInit(): void {
    // this.newsData = LEADS_DATA[0].articles;
    // this.apiService.getNews().subscribe((data)=>{
    //   // console.log(data);
    //   this.newsData = data['articles'];
    // });
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos == max) {
      setTimeout(() => {
        this.isScroll = true;
      }, 1000);
    }
  }

  bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  bookmarksEvent(value: any) {
    let findTabKey = this.bookmarksData.find((x) => x == value);

    if (value == findTabKey) {
      this.isVisibleBookmarks = false;
    } else {
      this.bookmarksData.push(value);
      this.isVisibleBookmarks = false;
    }
    console.log(this.bookmarksData);
  }
}
