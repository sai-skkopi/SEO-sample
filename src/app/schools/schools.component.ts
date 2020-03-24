import { SeoService } from './../seo.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  constructor(
    private seoService: SeoService,
    private http: HttpClient
  ) {
    this.seoService.updateTitle('sai kumar');
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/2').subscribe(res => {
      console.log(res);
      this.seoService.updateTitle(res['title']);
    });
  }

  updateOnSamePage(value) {
    this.seoService.updateTitle('Schools -' + value);
  }
}
