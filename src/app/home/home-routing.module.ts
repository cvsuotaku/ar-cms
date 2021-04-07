import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "manage", component: ManageProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
