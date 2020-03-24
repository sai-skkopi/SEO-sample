import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  navigateToSchools() {
    this.router.navigate(['schools']);
  }
}
