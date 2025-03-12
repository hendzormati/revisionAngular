import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildRoutingComponent } from '../child-routing/child-routing.component';
import { ParentRoutingComponent } from '../parent-routing.component';
import { ParentRoutingModule } from '../parent-routing/parent-routing.module';



@NgModule({
  declarations: [
    ParentRoutingComponent,
    ChildRoutingComponent,
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
