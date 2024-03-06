import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';

export const routes: Routes = [

    {path: "home", component: InicioComponent},
    {path: "error", component: ErrorComponent},
    {path: "menu", component: MenuComponent},
    {path: "other", component: OtroComponent},
    {path: "about", component: AcercaDeComponent},

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: ErrorComponent}
    

];
