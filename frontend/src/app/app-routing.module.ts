import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsAuthComponent } from './components-auth/components-auth.component';
import { ComponentsUserComponent } from './components-user/components-user.component';
import { CompProductsComponent } from './components/products/comp-products/comp-products.component';
import { ExploreMoreComponent } from './components/products/explore-more/explore-more.component';
import { NavComponent } from './components/template/nav/nav.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent
  },{
    path: 'products',
    component: CompProductsComponent
  },{
    path: 'explore',
    component: ExploreMoreComponent
  },{
    path: 'auth',
    component: ComponentsAuthComponent
  },{
    path: 'auth/User',
    component: ComponentsUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
