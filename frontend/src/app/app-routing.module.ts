import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeComponent } from "./components/bike/bike.component";
import { StationComponent } from "./components/station/station.component";

const routes: Routes = [
  { path: 'api/bike/:id', component: BikeComponent },
  { path: 'api/station', component: StationComponent },
  { path: '', redirectTo: '/api/station', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
