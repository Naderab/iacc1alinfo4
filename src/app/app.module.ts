import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    ResidencesComponent,
    NavBarComponent,
    NotFoundComponent,
    DetailResidenceComponent,
    FormResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
