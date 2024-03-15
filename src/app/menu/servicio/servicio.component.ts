import { Component } from '@angular/core';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {
  total: number = 0;

  jersey(precio: number): void {
    this.total += precio;
  }

  balon(precio: number): void {
    this.total += precio;
  }

  gorra(precio: number): void {
    this.total += precio;
  }
  mostrarTotal(): void {
    alert("Total a pagar: $" + this.total);
    this.total=0;
  }
  
}
