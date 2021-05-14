import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellListComponent } from './well-list/well-list.component';
import { WellComponent } from './well/well.component';

const routes: Routes = [
  {path:"",component:WellListComponent},
  {path:"well-list",component:WellListComponent},
  {path:"well",component:WellComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
