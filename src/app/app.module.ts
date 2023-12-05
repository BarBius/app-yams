import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { BorderCardDirective } from './border-card.directive';
import { PastryTagColorPipe } from './pastry-tag-color.pipe';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PaginateComponent } from './paginate/paginate.component';


const pastriessRoutes: Routes = [
  {
    path: 'pastries',
    component: PastriesComponent
  },
  {
    path: '',
    redirectTo: '/pastries',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastryTagColorPipe,
    SearchComponent,
    LoginComponent,
    PaginateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(pastriessRoutes), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
