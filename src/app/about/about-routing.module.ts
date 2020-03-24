import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: ':id',
        loadChildren: () => import('./each-about/each-about.module').then( m => m.EachAboutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
