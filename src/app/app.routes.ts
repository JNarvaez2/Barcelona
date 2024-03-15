import { Routes } from '@angular/router';
import { InicioComponent } from './menu/inicio/inicio.component';
import { ServicioComponent } from './menu/servicio/servicio.component';
import { ContactoComponent } from './menu/contacto/contacto.component';
import { LoginComponent } from './menu/login/login.component';


export const routes: Routes = [
    {path: '',component: InicioComponent},
    { path: 'inicio', component: InicioComponent },
    { path: 'servicio', component: ServicioComponent },
    { path: 'contacto', component: ContactoComponent },
    {path:'login',component:LoginComponent}
    
];
