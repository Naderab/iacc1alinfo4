import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';

const routes: Routes = [
  { path: 'residence', component: ResidenceComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residence/add', component: FormResidenceComponent },
  { path: 'appartement/add', component: FormAppartmentComponent },
  { path: 'residence/:id', component: DetailResidenceComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
