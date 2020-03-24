import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools.component';


const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: SchoolsComponent,
      data: {
        title: 'Schools',
        description: 'Skkopi schools list'
      }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
