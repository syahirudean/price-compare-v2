import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { DocumentManagerComponent } from '../../../pattern/document-manager/document-manager.component';

import { ProductService } from '../product.service';
import { CardComponent } from '../../../ui/card/card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-org-product-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    CardComponent,
    DocumentManagerComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products = inject(ProductService).products;
}
