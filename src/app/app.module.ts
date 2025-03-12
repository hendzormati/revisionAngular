import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'app-routing.module';
import { TipsComponent } from './tips/tips.component';
import { CoursComponent } from './cours/cours.component';
import { ExamsComponent } from './exams/exams.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentModule } from './parent-routing/parent/parent.module';
import { EntityComponent } from './entity/entity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EntityFormComponent } from './entity-form/entity-form.component';
import { EntityUpdateFormComponent } from './entity-update-form/entity-update-form.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TipsComponent,
    CoursComponent,
    ExamsComponent,
    NotFoundComponent,
    EntityComponent,
    EntityFormComponent,
    EntityUpdateFormComponent,
    EntityDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
