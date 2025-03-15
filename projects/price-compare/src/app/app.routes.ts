import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.routes'),
  },
  {
    path: 'order',
    loadChildren: () => import('./feature/order/order.routes'),
  },
  {
    path: 'product',
    loadChildren: () => import('./feature/product/product.routes'),
  },
];
