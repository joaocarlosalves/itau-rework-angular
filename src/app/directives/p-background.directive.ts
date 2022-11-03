import { Directive, Input, NgModule, OnInit  } from '@angular/core';

@Directive({
  selector: '[PootaBackground]',
  host: {
    '(mouseenter)':'hoverBackground != "" && setStyle(true)',
    '(mouseleave)':'hoverBackground != "" && setStyle(false)',
    '[style.background-color]': 'bg'
  }
})

export class PootaBackgroundDirective implements OnInit {
  bg: any = '';
  @Input() PootaBackground: string = '';
  @Input('background') set setB(b: string) { this.PootaBackground = b };
  @Input('hover-background') hoverBackground: any = '';

  constructor() {}

  ngOnInit() { this.setStyle(false) }

  setStyle(hover: boolean) { this.bg = !hover ? `var(--${ this.PootaBackground })` : `var(--${ this.hoverBackground })` }
}

@NgModule({
  declarations: [PootaBackgroundDirective],
  exports: [PootaBackgroundDirective]
})

export class PootaBackgroundDirectiveModule {}
