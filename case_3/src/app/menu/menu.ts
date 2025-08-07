import { Component, inject } from '@angular/core';
import { MenuService, MenuType } from '../menu.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  menuList: MenuType[] = [];
  menuService: MenuService = inject(MenuService);

  constructor() {
    this.menuList = this.menuService.getMenuList();
  }
}
