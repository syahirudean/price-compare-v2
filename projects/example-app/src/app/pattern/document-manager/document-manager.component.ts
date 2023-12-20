import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Input,
  signal,
} from '@angular/core';

import { CardComponent } from '../../ui/card/card.component';

import { DocumentManagerService } from './document-manager.service';
import { DocumentManagerCtx } from './document-manager.types';

@Component({
  selector: 'my-org-document-manager',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './document-manager.component.html',
  styleUrl: './document-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentManagerComponent {
  private documentManagerService = inject(DocumentManagerService);

  ctx = signal<DocumentManagerCtx>('default');
  documents = this.documentManagerService.documents;

  ref = effect(
    () => {
      this.documentManagerService.loadDocumentsForContext(this.ctx());
    },
    { allowSignalWrites: true },
  );

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ alias: 'ctx' }) set _ctx(ctx: DocumentManagerCtx) {
    this.ctx.set(ctx);
  }
}
