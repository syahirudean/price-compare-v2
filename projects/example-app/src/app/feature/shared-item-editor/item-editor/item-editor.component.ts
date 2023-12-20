import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from '../../../ui/card/card.component';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'my-org-item-editor',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink, CardComponent],
  templateUrl: './item-editor.component.html',
  styleUrl: './item-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemEditorComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  name = toSignal(
    this.activatedRoute.paramMap.pipe(map((params) => params.get('name'))),
  );

  handleClose() {
    this.router.navigate(['../..'], { relativeTo: this.activatedRoute });
  }
}
