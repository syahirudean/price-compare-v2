import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: HomeComponent,
        providers: [],
      },
    ],
  },
];
