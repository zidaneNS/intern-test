import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Menu } from './menu/menu';

export const routes: Routes = [
 {
    title: 'Home Page',
    path: '',
    component: Home
 },
 {
    title: 'Menu Page',
    path: 'menu',
    component: Menu
 },
];