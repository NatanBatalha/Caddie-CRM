import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/crud/crud.component';

const routes: Routes = [
  { path: '', component: LoginComponent}, // Aqui basicamente, se meu miha rota for vazia, ele irá redirecionar para minha rota/página de login
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'crud', component: CrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
