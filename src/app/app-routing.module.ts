import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes : Routes = [
  {path : 'home', component:MainComponent},
  {path : 'contact', component:ContactComponent},
  { path:'', redirectTo:'/home', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
