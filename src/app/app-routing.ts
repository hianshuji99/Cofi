import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { SearchPageComponent } from './views/search-page/search-page.component';


export const routes: Routes = [
  {
    path: "",
    redirectTo: "login-page",
    pathMatch: "full",
  },
  {
    path: "login-page",
    component: LoginPageComponent,
    data: {
      title: "",
    },
  },
  {
    path: "search",
    component: SearchPageComponent,
    data: {
      title: "",
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // Or your custom strategy
  })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
