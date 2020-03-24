import { EachAboutComponent } from './each-about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EachAboutComponent,
        data: {
          title: 'About-each',
          description: 'Individual About '
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EachAboutRoutingModule { }
