import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

//Controla as rotas das aplicações - home, contatos, ajuda etc.
export const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  }

];
