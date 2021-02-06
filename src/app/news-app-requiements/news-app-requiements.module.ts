import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './section/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './service/news-api.service';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent, NewsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[NewsApiService]
})
export class NewsAppRequiementsModule { }
