import { Component, OnInit } from '@angular/core';
import {NewModel} from '../../model/new-model';
import {FirebaseService} from '../../services/firebase.service';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noticias: NewModel[];

  constructor(private apiNews: NewsService) { }

  ngOnInit() {
    // this.noticias = this.apiNews.getNews();
  }

}
