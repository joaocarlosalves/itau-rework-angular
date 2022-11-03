import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaTooltipModule } from './tooltip/p-tooltip.module';
import { PootaDialogModule } from './dialog/p-dialog.module';
import { PootaButtonModule } from './button/p-button.module';
import { PootaCloseButtonModule } from './close-button/p-close-button.module';
import { PootaFullBarModule } from './full-bar/p-full-bar.module';
import { PootaIconModule } from './icons/p-icon-module';
import { PootaSnackBarModule } from './snack-bar/p-snack-bar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PootaTooltipModule,
    PootaDialogModule,
    PootaButtonModule,
    PootaCloseButtonModule,
    PootaFullBarModule,
    PootaIconModule,
    PootaSnackBarModule,
  ],
  exports: [
    PootaTooltipModule,
    PootaTooltipModule,
    PootaDialogModule,
    PootaButtonModule,
    PootaCloseButtonModule,
    PootaFullBarModule,
    PootaIconModule,
    PootaSnackBarModule,
  ]
})
export class PootaComponentsModule { }
