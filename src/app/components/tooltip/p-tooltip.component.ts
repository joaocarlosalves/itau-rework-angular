import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'p-tooltip',
  templateUrl: './p-tooltip.component.html',
  styleUrls:['./p-tooltip.css'],
  host: {
    '(mouseenter)': 'setOpen()',
    '(mouseleave)': 'setClose()',
  }
})
export class PootaTooltipComponent {
  onHover: boolean = false;
  offHover: boolean = false;
  bold: boolean = false;
  italic: boolean = false;
  rd: boolean = false;
  frd: boolean = false;
  sl: boolean = false;
  dt: boolean = false;
  ds: boolean = false;
  classList: any = [];
  tooltipStyles: any = {};
  @Input() target: string = '';
  @Input() href: string = '';
  @Input() background: string = 'primary';
  @Input() text: string = '';
  @Input() side: string = 'top-tooltip';
  @Input() color: string = 'white';
  @Input() css: string = '';
  @Input() border: string = '';
  @Input() padding: any = '5px 15px';
  @Input() width: any = 'max-content';
  @Input() height: any = 'max-content';
  @Input('color') cl: string = '';
  @Input('padding') pd: string = '';
  @Input('border') bd: string = '';
  @Input('background') bg: string = '';
  @Input('font-size') fs: string = '';
  @Input('border-width') bdWd: string = '';
  @Input('border-color') bdCl: string = '';
  @Input('border-style') bdSt: string = '';
  @Input('border-radius') bdRd: string = '';
  @Input('solid') set setSl(s: boolean | '') { this.sl = s === '' || s };
  @Input('dotted') set setDt(d: boolean | '') { this.dt = d === '' || d };
  @Input('dashed') set setDs(d: boolean | '') { this.ds = d === '' || d };
  @Input('rounded') set setFRd(r: boolean | '') { this.rd = r === '' || r };
  @Input('full-rounded') set setRd(r: boolean | '') { this.frd = r === '' || r };
  @Input('font-size') fontSize: string = '16px';
  @Input('link') set setLink(l: string) { this.href = l };
  @Input('_blank') set set_Blank(b: string) { this.target = '_blank' };
  @Input('blank') set setBlank(b: string) { this.target = '_blank' };
  @Input('_self') set set_Self(s: string) { this.target = '_self' };
  @Input('self') set setSelf(s: string) { this.target = '_self' };
  @Input('tooltip') set setTooltip(t: string) { this.text = t };
  @Input('tooltip-text') set setTooltipText(tt: string) { this.text = tt };
  @Input('bold') set setBold(b: boolean | '') { this.bold = b === '' || b };
  @Input('italic') set setItalic(i: boolean | '') { this.italic = i === '' || i };
  @Input('link-color') set setLinkColor(lc: string) { this.classList.push('color-'+lc) };
  @Input('no-underline') set setNoUndl(u: boolean | '') { this.classList.push('no-text-decoration') };
  @Input('no-text-decoration') set setNoDec(d: boolean | '') { this.classList.push('no-text-decoration') };
  @Input('top') set setTop(t: boolean | '') { this.side = 'top-tooltip' };
  @Input('top-center') set setTopCenter(tc: boolean | '') { this.side = 'top-center-tooltip' };
  @Input('top-right') set setTopRight(tr: boolean | '') { this.side = 'top-right-tooltip' };
  @Input('top-left') set setTopLeft(tl: boolean | '') { this.side = 'top-left-tooltip' };
  @Input('bottom') set setBottom(b: boolean | '') { this.side = 'bottom-tooltip' };
  @Input('bottom-center') set setBottomCenter(tc: boolean | '') { this.side = 'bottom-center-tooltip' };
  @Input('bottom-left') set setBottomLeft(bl: boolean | '') { this.side = 'bottom-left-tooltip' };
  @Input('bottom-right') set setBottomRight(br: boolean | '') { this.side = 'bottom-right-tooltip' };
  @Input('left') set setLeft(l: boolean | '') { this.side = 'left-tooltip' };
  @Input('right') set setRight(r: boolean | '') { this.side = 'right-tooltip' };
  @ViewChild('tip') tip: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  setOpen() { this.offHover = false; setTimeout(() => { this.onHover = !this.onHover }, 10) }

  setClose() { this.offHover = true; setTimeout(() => { this.onHover = !this.onHover }, 301) }

  setAnimIn() { return `p-${ this.side }-in` }

  setAnimOut() { return `p-${ this.side }-out` }

  setTooltipStyles() {
    return {
      'width': this.width!,
      'height': this.height!,
      'padding': this.padding!,
      'fontSize': this.fontSize != '' ? this.fontSize : '16px',
      'fontWeight': this.bold ? 'bold' : 'normal',
      'fontStyle': this.italic ? 'italic' : 'normal'
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.tooltipStyles = this.setTooltipStyles();
    if(this.href != "") this.tip.nativeElement.setAttribute('href', this.href);
    if(this.target != "") this.tip.nativeElement.setAttribute('target', this.target);
  }
}
