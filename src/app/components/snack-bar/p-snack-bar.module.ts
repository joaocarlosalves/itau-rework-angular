import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaSnackBarComponent } from './p-snack-bar.component';
import { PootaIconModule } from '../icons/p-icon-module';
import { PootaBorderDirectiveModule} from 'src/app/directives/p-border.directive';
import { PootaBackgroundDirectiveModule } from 'src/app/directives/p-background.directive';
import { PootaColorDirectiveModule } from 'src/app/directives/p-color.directive';

@NgModule({
  declarations: [PootaSnackBarComponent],
  imports: [
    CommonModule,
    PootaIconModule,
    PootaBorderDirectiveModule,
    PootaBackgroundDirectiveModule,
    PootaColorDirectiveModule
  ],
  exports: [PootaSnackBarComponent]
})
export class PootaSnackBarModule { }
