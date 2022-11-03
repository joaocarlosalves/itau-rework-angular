import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaCloseButtonModule } from '../close-button/p-close-button.module';
import { PootaDialogComponent } from './p-dialog.component';

@NgModule({
  declarations: [PootaDialogComponent],
  imports: [CommonModule, PootaCloseButtonModule],
  exports: [PootaDialogComponent]
})
export class PootaDialogModule { }
