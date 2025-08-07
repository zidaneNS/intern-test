import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Story } from './story/story';

export const routes: Routes = [
 {
    path: '',
    title: 'Cool Coffee',
    component: Home
 },
 {
    title: 'Cool Coffee - Menu Page',
    path: 'menu',
    component: Menu
 },
 {
    title: 'Cool Coffee - Story Page',
    path: 'story',
    component: Story
 },
];