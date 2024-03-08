import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { SCRUMTeamComponent } from './componentes/proyectos/scrumteam/scrumteam.component';
import { LoginComponent } from './componentes/login/login.component';
import { SingUpComponent } from './componentes/sing-up/sing-up.component';
import { CiclosDeVidaComponent } from './componentes/ciclos-de-vida/ciclos-de-vida.component';
import { RequerimientosComponent } from './componentes/proyectos/requerimientos/requerimientos.component';
import { SwebokComponent } from './componentes/proyectos/swebok/swebok.component';

export const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'other', component: OtroComponent },
  { path: 'about', component: AcercaDeComponent },
  { path: 'lifecycle', component: CiclosDeVidaComponent},
  { path: 'scrum', component: SCRUMTeamComponent },
  { path: 'requirements', component: RequerimientosComponent},
  { path: 'swebok', component: SwebokComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: SingUpComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
