import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaIconModule } from '../icons/p-icon-module';
import { PootaTooltipComponent } from './p-tooltip.component';
import { PootaBorderDirectiveModule} from 'src/app/directives/p-border.directive';
import { PootaBackgroundDirectiveModule } from 'src/app/directives/p-background.directive';
import { PootaColorDirectiveModule } from 'src/app/directives/p-color.directive';

@NgModule({
  declarations: [PootaTooltipComponent],
  imports: [
    CommonModule,
    PootaIconModule,
    PootaBorderDirectiveModule,
    PootaBackgroundDirectiveModule,
    PootaColorDirectiveModule
  ],
  exports: [PootaTooltipComponent]
})
export class PootaTooltipModule { }
