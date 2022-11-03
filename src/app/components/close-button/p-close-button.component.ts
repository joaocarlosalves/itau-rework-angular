import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'p-close-button',
  templateUrl: './p-close-button.component.html',
  styleUrls: ['./p-close-button.css'],
  host: {
    '(mouseenter)': 'onHover = !onHover',
    '(mouseleave)': 'onHover = !onHover',
  }
})
export class PootaCloseButtonComponent {
  onHover: boolean = false;
  mini: boolean = false;
  small: boolean = false;
  medium: boolean = false;
  big: boolean = false;
  large: boolean = false;
  rd: boolean = false;
  frd: boolean = false;
  noBg: boolean = false;
  noPd: boolean = false;
  dis: boolean = false;
  classList: any = [];
  @Input() type: any = '';
  @Input() icon: string = '';
  @Input() css: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input('color') cl: string = 'red';
  @Input('font-size') fontSize: string = '';
  @Input('padding') pd: string = '';
  @Input('border') bd: string = '';
  @Input('background') bg: string = 'white';
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
  @Input('no-padding') set setNoPd(n: boolean | '') { this.noPd = n === '' || n };
  @Input('rounded') set setRd(r: boolean | '') { this.rd = r === '' || r };
  @Input('full-rounded') set setFRd(f: boolean | '') { this.frd = f === '' || f };
  @Input('mini') set setMini(m: boolean | '') { this.mini = m === '' || m };
  @Input('medium') set setMedium(m: boolean | '') { this.medium = m === '' || m };
  @Input('small') set setSmall(s: boolean | '') { this.small = s === '' || s };
  @Input('big') set setBig(b: boolean | '') { this.big = b === '' || b };
  @Input('large') set setLarge(l: boolean | '') { this.large = l === '' || l };
  @Input('disabled') set setDis(d: boolean | '') { this.dis = d === '' || d };
  @Output() clicked = new EventEmitter();

  setClassList() {
    return this.mini ? 'mini fs15px' : this.small ? 'small fs18px' : this.medium ? 'medium fs22px' :
      this.big ? 'big fs26px' : this.large ? 'large fs28px' : 'medium fs22px';
  }

  getStyles() {
    return {
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
