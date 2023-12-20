import { Route } from '@angular/router';

import { ItemEditorComponent } from './item-editor/item-editor.component';

export const routes: Route[] = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: ItemEditorComponent,
        providers: [],
      },
    ],
  },
];
