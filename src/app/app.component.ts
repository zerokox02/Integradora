import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Productos', url: '/home', icon: 'mail' },
    { title: 'Perfil', url: '/perfil', icon: 'paper-plane' },
    { title: 'Cerrar sesion', url: '/cerrar', icon: 'heart' },

  ];
  public labels = [];
  constructor() {}
}
