import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanComponent } from './components/ocean/ocean.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}
