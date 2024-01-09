import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';

export default <Routes>[
  {
    path: '',
    providers: [ProductService],
    children: [
      {
        path: '',
        component: ProductListComponent,
        children: [
          {
            path: 'item-editor/:name',
            loadChildren: () =>
              import('../shared-item-editor/item-editor.routes'),
          },
        ],
      },
    ],
  },
];
