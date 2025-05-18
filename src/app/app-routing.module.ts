import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Pages
import { HomeComponent } from './modules/portfolio/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }