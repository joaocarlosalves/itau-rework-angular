import { Directive, ElementRef, HostListener, Input, NgModule, OnInit } from '@angular/core';

@Directive({ selector: '[PootaFont]' })

export class PootaFontDirective implements OnInit {
  style: any = {};
  underline: boolean = false;
  hoverUnderline: boolean = false;
  @Input('color') set setC(c: string) { this.style.color = c };
  @Input('hover-color') set setHC(c: string) { this.style.hoverColor = c };
  @Input('size') set setS(s: string) { this.style.fontSize = s };
  @Input('font-size') set setFS(s: string) { this.style.fontSize = s };
  @Input('lowercase') set setLow(b: string) { this.style.textTransform = 'lowercase' };
  @Input('uppercase') set setUpp(b: string) { this.style.textTransform = 'uppercase' };
  //@Input('capitalize') set setCap(b: string) { this.style.textTransform = 'capitalize' };
  @Input('bold') set setB(b: string) { this.style.fontWeight = 'bold' };
  @Input('italic') set setI(b: string) { this.style.fontStyle = 'italic' };
  @Input('underline') set setU(u: boolean | '') { this.underline = u === '' || u };
  @Input('hover-underline') set setHU(u: boolean | '') { this.hoverUnderline = u === '' || u };
  @HostListener('mouseenter') onMouseEnter() { this.setStyle(true) };
  @HostListener('mouseleave') onMouseLeave() { this.setStyle(false) };

  constructor(private cl: ElementRef<HTMLElement>) {}

  ngOnInit() { this.init() }

  init() {
    this.cl.nativeElement.style.fontWeight = this.style.fontWeight == '' ? 'normal' : this.style.fontWeight;
    this.cl.nativeElement.style.fontStyle = this.style.fontStyle == '' ? 'normal' : this.style.fontStyle;
    this.cl.nativeElement.style.fontSize = this.style.fontSize;
    this.setStyle(false);
  }

  setStyle(hover: boolean) {
    this.cl.nativeElement.style.color = !hover ? this.style.color == '' ? 'inherit' :
      `var(--${ this.style.color })` : `var(--${ this.style.hoverColor })`;
    this.cl.nativeElement.style.textDecoration = hover && this.hoverUnderline ? 'underline' : this.underline ? 'underline' : 'none';
  }
}

@NgModule({
  declarations: [PootaFontDirective],
  exports: [PootaFontDirective]
})

export class PootaFontDirectiveModule {}
