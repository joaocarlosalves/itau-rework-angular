import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'p-button',
  templateUrl: './p-button.component.html',
  styleUrls: ['./p-button.css'],
  host: {
    '(mouseenter)': 'onHover = !onHover',
    '(mouseleave)': 'onHover = !onHover',
  }
})
export class PootaButtonComponent implements OnInit {
  onHover: boolean = false;
  rd: boolean = false;
  frd: boolean = false;
  sl: boolean = false;
  dt: boolean = false;
  ds: boolean = false;
  sic: boolean = true;
  ric: boolean = false;
  v4ic: boolean = false;
  dis: boolean = false;
  classList: any = [];
  @Input() width: string = 'fit-content';
  @Input() height: string = '';
  @Input() text: string = '';
  @Input() type: string = 'button';
  @Input() icon: string = '';
  @Input() css: string = '';
  @Input('icon-gap') gap: string = '';
  @Input('icon-color') ic: string = '';
  @Input('color') cl: string = 'white';
  @Input('padding') pd: string = '';
  @Input('border') bd: string = '';
  @Input('background') bg: string = 'primary';
  @Input('font-size') fs: string = '';
  @Input('border-width') bdWd: string = '';
  @Input('border-color') bdCl: string = '';
  @Input('border-style') bdSt: string = '';
  @Input('border-radius') bdRd: string = '';
  @Input('hover-color') hvCl: string = '';
  @Input('hover-background') hvBg: string = '';
  @Input('hover-icon-color') hvIcCl: string = '';
  @Input('hover-border') hvBd: string = '';
  @Input('hover-border-width') hvBdWd: string = '';
  @Input('hover-border-style') hvBdSt: string = '';
  @Input('hover-border-color') hvBdCl: string = '';
  @Input('hover-border-radius') hvBdRd: string = '';
  @Input('solid') set setSl(s: boolean | '') { this.sl = s === '' || s };
  @Input('dotted') set setDt(d: boolean | '') { this.dt = d === '' || d };
  @Input('dashed') set setDs(d: boolean | '') { this.ds = d === '' || d };
  @Input('rounded') set setFRd(r: boolean | '') { this.rd = r === '' || r };
  @Input('full-rounded') set setRd(r: boolean | '') { this.frd = r === '' || r };
  @Input('solid-icon') set setSolidIcon(s: boolean | '') { this.sic = s === '' || s };
  @Input('regular-icon') set setRegIcon(r: boolean | '') { this.ric = r === '' || r };
  @Input('v4-icon') set setv4Icon(v: boolean | '') { this.v4ic = v === '' || v };
  @Input('disabled') set setDisabled(d: boolean | '') { this.dis = d === '' || d };
  @Input('italic') set setItalic(i: boolean | '') { this.classList.push('italic') };
  @Input('bold') set setBold(i: boolean | '') { this.classList.push('bold') };
  @Input('full-rounded') set setFlRd(fr: boolean | '') { this.classList.push('full-rounded') };
  @Input('left') set setLeft(l: boolean | '') { this.classList.push('left row-reverse') };
  @Input('right') set setRight(r: boolean | '') { this.classList.push('right') };
  @Input('between') set setBetween(b: boolean | '') { this.classList.push('space-between') };
  @Input('around') set setAround(a: boolean | '') { this.classList.push('space-around') };
  @Input('evenly') set setEvenly(e: boolean | '') { this.classList.push('space-evenly') };
  @Input('start') set setStart(s: boolean | '') { this.classList.push('flex-start') };
  @Input('end') set setEnd(e: boolean | '') { this.classList.push('flex-end') };
  @Input('mini') set setMini(m: boolean | '') { this.classList.push('mini') };
  @Input('medium') set setMedium(m: boolean | '') { this.classList.push('medium') };
  @Input('small') set setSmall(s: boolean | '') { this.classList.push('small') };
  @Input('big') set setBig(b: boolean | '') { this.classList.push('big') };
  @Input('large') set setLarge(l: boolean | '') { this.classList.push('large') };
  @Input('full') set setFull(f: boolean | '') { this.classList.push('full') };
  @Input('no-background') set setNoBg(nbg: boolean | '') { this.classList.push('no-background') };
  @Input('no-padding') set setNoPd(npd: boolean | '') { this.classList.push('no-padding') };
  @Input('no-border') set setNoBorder(nbd: boolean | '') { this.classList.push('no-border') };
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.ic = this.ic == '' ? this.cl : this.ic;
    this.hvIcCl = this.hvIcCl == '' ? this.hvCl : this.hvIcCl;
  }

  getStyles() {
    return {
      'gap': this.gap != '' ? `0 ${ this.gap }` : '',
      'width': this.width!,
      'height': this.height!,
      'padding': this.pd!,
      'fontSize': this.fs!,
      'opacity': !this.onHover ? this.dis ? '.4' : '1' : this.dis ? '.4' : this.checkIsHover() ? '.7' : '1'
    };
  }

  checkIsHover() {
    return this.hvCl == '' && this.hvIcCl == '' && this.hvBg == '' && this.hvBdWd == '' &&
      this.hvBdCl == '' && this.hvBdSt == '' && this.hvBdRd == '';
  }
}
