import { Directive, ElementRef, Input, NgModule, OnInit } from '@angular/core';

@Directive({ selector: '[PootaGradient]' })

export class PootaGradientDirective implements OnInit {
  radial: boolean = false;
  linear: boolean = false;
  @Input() degrees: any = '90';
  @Input() colors: any = [];
  @Input() positions: any = [];
  @Input('color-1') color1: any = '';
  @Input('color-2') color2: any = '';
  @Input('position-1') colorPos1: any = '0';
  @Input('position-2') colorPos2: any = '100';
  @Input('deg') set setDeg(d: any) { this.degrees = d };
  @Input('pos-1') set setPos1(p: any) { this.colorPos1 = p };
  @Input('pos-2') set setPos2(p: any) { this.colorPos2 = p };
  @Input('radial') set setRadial(r: boolean | '') { this.radial = r === '' || r };
  @Input('linear') set setLinear(l: boolean | '') { this.linear = l === '' || l };

  constructor(private gr: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.colors = this.colors.length < 1 ? [this.color1, this.color2] : this.colors;
    this.positions = this.positions.length < 1 ? [this.colorPos1, this.colorPos2] : this.positions;
    this.gr.nativeElement.style.background = !this.radial ?
      `linear-gradient(${ this.degrees }deg, var(--${ this.colors[0] })
        ${ this.positions[0] }%, var(--${ this.colors[1] }) ${ this.positions[1] }%)` :
      `radial-gradient(circle, var(--${ this.colors[0] })
        ${ this.positions[0] }%, var(--${ this.colors[1] }) ${ this.positions[1] }%)`;
  }
}

@NgModule({
  declarations: [PootaGradientDirective],
  exports: [PootaGradientDirective]
})

export class PootaGradientDirectiveModule {}
