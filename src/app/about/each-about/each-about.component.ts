import { SEOEnums } from './../../seoEnums';
import { SeoService } from './../../seo.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-about',
  templateUrl: './each-about.component.html',
  styleUrls: ['./each-about.component.scss']
})
export class EachAboutComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService) {
      console.log(this.activatedRoute.snapshot.params.id);
     
  }

  ngOnInit() {
    this.seoService.updateTitle(SEOEnums.SCHOOLS + ' '  + this.activatedRoute.snapshot.params.id);
  }

}
