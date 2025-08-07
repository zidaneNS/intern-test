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
  sortedMenuList: MenuType[] = [];

  filterMenu(value: string) {
    if (!value) {
      this.sortedMenuList = this.menuList;
      return
    }

    switch (value) {
      case 'high to low':
        this.sortedMenuList = this.menuList.sort((a, b) => b.lowerPrice - a.lowerPrice)
        break;
        
        default:
        this.sortedMenuList = this.menuList.sort((a, b) => a.lowerPrice - b.lowerPrice)
        break;
    }
  }

  constructor() {
    this.menuList = this.menuService.getMenuList();
  }
}
