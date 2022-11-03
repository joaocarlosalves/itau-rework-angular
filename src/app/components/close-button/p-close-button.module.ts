import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PootaIconModule } from '../icons/p-icon-module';
import { PootaBorderDirectiveModule} from 'src/app/directives/p-border.directive';
import { PootaBackgroundDirectiveModule } from 'src/app/directives/p-background.directive';
import { PootaColorDirectiveModule } from 'src/app/directives/p-color.directive';
import { PootaCloseButtonComponent } from './p-close-button.component';

@NgModule({
  declarations: [PootaCloseButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PootaIconModule,
    PootaBorderDirectiveModule,
    PootaBackgroundDirectiveModule,
    PootaColorDirectiveModule
  ],
  exports: [PootaCloseButtonComponent]
})
export class PootaCloseButtonModule { }
