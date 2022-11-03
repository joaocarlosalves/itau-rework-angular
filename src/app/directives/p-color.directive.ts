import { Directive, Input, NgModule, OnInit } from '@angular/core';

@Directive({
  selector: '[PootaColor]',
  host: {
    '(mouseenter)':'hoverColor != "" && setStyle(true)',
    '(mouseleave)':'hoverColor != "" && setStyle(false)',
    '[style.color]': 'c'
  }
})

export class PootaColorDirective implements OnInit {
  c: string = '';
  @Input() PootaColor: string = '';
  @Input('color') set setC(c: string) { this.PootaColor = c };
  @Input('hover-color') hoverColor: string = '';

  constructor() {}

  ngOnInit() { this.setStyle(false) }

  setStyle(hv: boolean) { this.c = !hv ? `var(--${ this.PootaColor })` : `var(--${ this.hoverColor })` }
}

@NgModule({
  declarations: [PootaColorDirective],
  exports: [PootaColorDirective]
})

export class PootaColorDirectiveModule {}
