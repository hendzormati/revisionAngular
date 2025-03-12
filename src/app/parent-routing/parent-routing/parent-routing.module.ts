import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingComponent } from '../parent-routing.component';
import { ChildRoutingComponent } from '../child-routing/child-routing.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const ROUTES:Routes=[
  {path:"parentRouting",component:ParentRoutingComponent,
  children:[{path:"childRouting",component:ChildRoutingComponent}]},
  {path:"**",component:NotFoundComponent}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ParentRoutingModule { }
