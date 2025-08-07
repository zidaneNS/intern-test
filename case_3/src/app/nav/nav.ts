import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface NavLink {
  name: string,
  path: string
}

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  navLinks: NavLink[] = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Full Menu',
      path: '/menu'
    },
    {
      name: 'Our Story',
      path: '/story'
    },
  ];
}