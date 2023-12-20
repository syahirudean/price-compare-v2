import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/home/home.routes').then((f) => f.routes),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./feature/order/order.routes').then((f) => f.routes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./feature/product/product.routes').then((f) => f.routes),
  },
];
