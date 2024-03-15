import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './menu/inicio/inicio.component';
import { ServicioComponent } from './menu/servicio/servicio.component';
import { ContactoComponent } from './menu/contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    InicioComponent,
    ServicioComponent,
    ContactoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial';
}
