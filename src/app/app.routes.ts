import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { SCRUMTeamComponent } from './componentes/proyectos/scrumteam/scrumteam.component';
import { LoginComponent } from './componentes/login/login.component';
import { SingUpComponent } from './componentes/sing-up/sing-up.component';

export const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'other', component: OtroComponent },
  { path: 'about', component: AcercaDeComponent },
  { path: 'scrum', component: SCRUMTeamComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: SingUpComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];