import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPoolComponent } from "./car-pool/car-pool.component";
import { ExpertComponent } from "./expert/expert.component";
import { BondHubComponent } from "./bond-hub/bond-hub.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'car-pool',component: CarPoolComponent},
    {path:'expert',component: ExpertComponent},
    {path:'bond',component: BondHubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
