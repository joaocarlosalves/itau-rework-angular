import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'p-snack-bar',
  templateUrl: './p-snack-bar.component.html',
  styleUrls: ['./p-snack-bar.css']
})
export class PootaSnackBarComponent {
  noButton: boolean = false;
  closeOnEsc: boolean = false;
  regIcon: boolean = false;
  v4Icon: boolean = false;
  rounded: boolean = false;
  fullRounded: boolean = false;
  solid: boolean = false;
  dotted: boolean = false;
  dashed: boolean = false;
  dir: string = '';
  setCloseAnim: string = '';
  classList: any = [];
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() background: string = '';
  @Input() color: string = 'white';
  @Input() css: string = '';
  @Input() timer: number = 5000;
  @Input() buttonText: string = '';
  @Input('font-size') fontSize: string = '';
  @Input('border') border: any = '';
  @Input('button-color') buttonColor: string = '';
  @Input('border-width') borderWidth: any = '';
  @Input('border-color') borderColor: any = '';
  @Input('border-style') borderStyle: any = '';
  @Input('border-radius') borderRadius: any = '';
  @Input('no-button') set setNoButton(nb: boolean | '') { this.noButton = nb === '' || nb }
  @Input('button-text') set setButtonText(bt: any) { this.buttonText = bt }
  @Input('v4-icon') set setV4Icon(v4: boolean | '') { this.v4Icon = v4 === '' || v4 }
  @Input('regular-icon') set setRegularIcon(r: boolean | '') { this.regIcon = r === '' || r }
  @Input('close-on-esc') set setCloseOnEsc(c: boolean | '') { this.closeOnEsc = c === '' || c }
  @Input('solid') set setSolid(s: boolean | '') { this.solid = s === '' || s };
  @Input('dotted') set setDotted(d: boolean | '') { this.dotted = d === '' || d };
  @Input('dashed') set setDashed(d: boolean | '') { this.dashed = d === '' || d };
  @Input('rounded') set setRd(r: boolean | '') { this.rounded = r === '' || r };
  @Input('full-rounded') set setFRd(r: boolean | '') { this.fullRounded = r === '' || r };
  @Input('italic') set setItalic(i: boolean | '') { this.classList.push('italic') };
  @Input('bold') set setBold(b: boolean | '') { this.classList.push('bold') };
  @Input('top') set setTop(t: boolean | '') { this.setClass('p-snack-bar-top p-top-in', 'p-top-out') };
  @Input('bottom') set setBottom(b: boolean | '') { this.setClass('p-snack-bar-bottom p-bottom-in', 'p-bottom-out') };
  @Input('left') set setLeft(l: boolean | '') { this.setClass('p-snack-bar-left p-left-in', 'p-left-out') };
  @Input('right') set setRight(r: boolean | '') { this.setClass('p-snack-bar-right p-right-in', 'p-right-out') };
  @Input('top-right') set setTopRight(tr: boolean | '') { this.setClass('p-top-right-in', 'p-top-right-out') };
  @Input('top-left') set setTopLeft(tl: boolean | '') { this.setClass('p-top-left-in', 'p-top-left-out') };
  @Input('bottom-left') set setBottomLeft(bl: boolean | '') { this.setClass('p-bottom-left-in', 'p-bottom-left-out') };
  @Input('bottom-right') set setBottomRight(br: boolean | '') { this.setClass('p-bottom-right-in', 'p-bottom-right-out') };
  @Input('center') set setCenter(c: boolean | '') { this.dir = 'justify-center' };
  @Input('around') set setAround(a: boolean | '') { this.dir = 'space-around' };
  @Input('evenly') set setEvenly(e: boolean | '') { this.dir = 'space-evenly' };
  @Input('start') set setStart(s: boolean | '') { this.dir = 'flex-start' };
  @Input('end') set setEnd(e: boolean | '') { this.dir = 'flex-end' };
  @ViewChild('snackbar') snackbar: ElementRef;
  @Output() close = new EventEmitter();
  @HostListener('document:keydown', ['$event']) onKeydownHandler(e: KeyboardEvent) {
    e.stopPropagation(); e.preventDefault();
    if(this.closeOnEsc && e.key === 'Escape') this.setClose();
  }

  constructor() { setTimeout(() => this.setClose(), this.timer) }

  setClass(cl: any, anim: any) { this.classList.push(cl); this.setCloseAnim = anim }

  getStyles() {return { 'fontSize': this.fontSize != '' ? this.fontSize : '16px' }}

  setClose() {
    this.snackbar.nativeElement.classList.add(this.setCloseAnim);
    setTimeout(() => this.close.emit(), 400);
  }
}
