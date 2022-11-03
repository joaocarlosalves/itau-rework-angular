import { Directive, ElementRef, Input, NgModule, OnInit } from '@angular/core';

@Directive({
  selector: '[PootaBorder]',
  host: {
    '(mouseenter)': 'setStyle(true)',
    '(mouseleave)': 'setStyle(false)'
  }
})
export class PootaBorderDirective implements OnInit {
  rd: boolean = false;
  flRd: boolean = false;
  solid: boolean = false;
  dotted: boolean = false;
  double: boolean = false;
  dashed: boolean = false;
  groove: boolean = false;
  inset: boolean = false;
  outset: boolean = false;
  @Input() border: string = '';
  @Input('PootaBorder') set setPB(b: any) { this.border = b };
  @Input('border-width') bdWd: any = '';
  @Input('border-color') bdCl: any = '';
  @Input('border-style') bgSt: any = '';
  @Input('border-radius') bdRd: any = '';
  @Input('hover-border') hvBd: any = '';
  @Input('hover-border-width') hvBdWd: any = '';
  @Input('hover-border-color') hvBdCl: any = '';
  @Input('hover-border-style') hvBdSt: any = '';
  @Input('hover-border-radius') hvBdRd: any = '';
  @Input('rounded') set setRd(r: boolean | '') { this.rd = r === '' || r };
  @Input('full-rounded') set setFRd(r: boolean | '') { this.flRd = r === '' || r };
  @Input('solid') set setSolid(s: boolean | '') { this.solid = s === '' || s };
  @Input('dotted') set setDotted(d: boolean | '') { this.dotted = d === '' || d };
  @Input('double') set setDouble(d: boolean | '') { this.double = d === '' || d };
  @Input('dashed') set setDashed(d: boolean | '') { this.dashed = d === '' || d };
  @Input('groove') set setGroove(g: boolean | '') { this.groove = g === '' || g };
  @Input('inset') set setInset(i: boolean | '') { this.inset = i === '' || i };
  @Input('outset') set setOutset(o: boolean | '') { this.outset = o === '' || o };

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    this.setBorder();
    this.setStyle(false);
  }

  setBorderStyle() {
    return this.bgSt != '' ? this.bgSt :
      this.solid  ? 'solid'  : this.dotted ? 'dotted' :
      this.double ? 'double' : this.dashed ? 'dashed' :
      this.groove ? 'groove' : this.inset  ? 'inset' :
      this.outset ? 'outset' : this.border != '' ? this.border.split(' ')[1] : '';
  }

  setBorder() {
    this.bdRd = this.bdRd != '' ? this.bdRd : this.rd ? '4px' : this.flRd ? '5000px' : '';
    this.bdWd = this.bdWd! || this.border.split(' ')[0];
    this.bgSt = this.setBorderStyle();
    this.bdCl = this.bdCl == '' ? `var(--${  this.border.split(' ')[2] })` :
      this.bdCl.split(' ').map((c: string) => { return `var(--${ c })` }).toString().replaceAll(',', ' ');

    this.hvBdWd = this.hvBdWd != '' ? this.hvBdWd : this.hvBd != '' ? this.hvBd.split(' ')[0] : this.bdWd;
    this.hvBdSt = this.hvBdSt != '' ? this.hvBdSt : this.hvBd != '' ? this.hvBd.split(' ')[1] : this.bgSt;
    this.hvBdCl = this.hvBdCl != '' ?
      this.hvBdCl.split(' ').map((c: string) => { return `var(--${ c })` }).toString().replaceAll(',', ' ') :
      this.hvBd != '' ? `var(--${ this.hvBd.split(' ')[2] })` : this.bdCl;
    this.hvBdRd = this.hvBdRd != '' ? this.hvBdRd : this.bdRd;
  }

  setStyle(hv: boolean) {
    this.el.nativeElement.style.borderColor = !hv ? this.bdCl : this.hvBdCl;
    this.el.nativeElement.style.borderWidth = !hv ? this.bdWd : this.hvBdWd;
    this.el.nativeElement.style.borderStyle = !hv ? this.bgSt : this.hvBdSt;
    this.el.nativeElement.style.borderRadius = !hv ? this.bdRd : this.hvBdRd;
  }
}

@NgModule({
  declarations: [PootaBorderDirective],
  exports: [PootaBorderDirective]
})

export class PootaBorderDirectiveModule {}
