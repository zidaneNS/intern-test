import { Injectable } from '@angular/core';

export interface MenuType {
  id: string;
  name: string;
  lowerPrice: number;
  upperPrice?: number;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuList: MenuType[] = [
    {
      id: 'm001',
      name: 'Espresso',
      lowerPrice: 15000
    },
    {
      id: 'm002',
      name: 'Americano',
      lowerPrice: 18000
    },
    {
      id: 'm003',
      name: 'Cappuccino',
      lowerPrice: 20000,
      upperPrice: 25000
    },
    {
      id: 'm004',
      name: 'Latte',
      lowerPrice: 22000,
      upperPrice: 27000
    },
    {
      id: 'm005',
      name: 'Mocha',
      lowerPrice: 23000,
      upperPrice: 28000
    },
    {
      id: 'm006',
      name: 'Caramel Macchiato',
      lowerPrice: 25000,
      upperPrice: 30000
    },
    {
      id: 'm007',
      name: 'Cold Brew',
      lowerPrice: 20000,
      upperPrice: 25000
    },
    {
      id: 'm008',
      name: 'Affogato',
      lowerPrice: 25000
    },
    {
      id: 'm009',
      name: 'Manual Brew (V60)',
      lowerPrice: 22000,
      upperPrice: 28000
    },
    {
      id: 'm010',
      name: 'Kopi Susu Gula Aren',
      lowerPrice: 18000,
      upperPrice: 22000
    }
  ];

  getMenuList(): MenuType[] {
    return this.menuList;
  }

  getMenuById(id: string): MenuType {
    return this.menuList.find(menu => menu.id === id) || this.menuList[0];
  }
}