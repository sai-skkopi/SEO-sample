import { Component } from '@angular/core';
import { SeoService } from './seo.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, mergeMap, map} from 'rxjs/operators'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private seoService: SeoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        console.log(route);
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
     )
     .subscribe((event) => {
       console.log(event);
       this.seoService.updateTitle(event['title']);
       //Updating Description tag dynamically with title
       this.seoService.updateDescription(event['description'])
     });
  }
  ngOnInit() {
   
   }
  }
