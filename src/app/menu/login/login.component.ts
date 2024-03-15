import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    login() {
      alert('¡Bienvenido!');
    }
  registro(){
    alert('Registrate')
  }
  contrasena(){
    alert('Se te olvido la Contraseña')
  }
}
