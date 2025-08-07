import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('case_3');
}
