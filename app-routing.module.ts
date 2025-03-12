import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipsComponent } from 'src/app/tips/tips.component';
import { CoursComponent } from 'src/app/cours/cours.component';
import { ExamsComponent } from 'src/app/exams/exams.component';
import { EntityComponent } from 'src/app/entity/entity.component';
import { EntityFormComponent } from 'src/app/entity-form/entity-form.component';
import { EntityUpdateFormComponent } from 'src/app/entity-update-form/entity-update-form.component';
import { EntityDetailsComponent } from 'src/app/entity-details/entity-details.component';



const routes:Routes = [
  {path:"",redirectTo:'tips',pathMatch:"full"},
  {path:"tips",component:TipsComponent},
  {path:"cours",component:CoursComponent},
  {path:"exams",component:ExamsComponent},
  {path:"entity",component:EntityComponent},
  {path:"entity/add",component:EntityFormComponent},
  {path:"entity/update/:id",component:EntityUpdateFormComponent},
  {path:"entity/details/:id",component:EntityDetailsComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
