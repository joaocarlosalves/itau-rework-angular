import { Component, EventEmitter, HostListener, Output, Renderer2, OnDestroy,
  ViewChild, ElementRef, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'p-dialog',
  templateUrl: './p-dialog.component.html',
  styleUrls: ['./p-dialog.component.css']
})
export class PootaDialogComponent implements OnInit, OnDestroy {
  isOut: boolean = false;
  light: boolean = false;
  noShadow: boolean = false;
  noAnimation: boolean = false;
  noCloseOnEsc: boolean = false;
  noCloseOnMask: boolean = false;
  noBlur: boolean = false;
  rounded: boolean = false;
  maskClasses: any = [];
  dialogClasses: any = [];
  @Input() side: string = '';
  @Input() css: string = '';
  @Input() background: string = '';
  @Input() color: string = '';
  @Input() padding: string = '';
  @Input() timer: number = 0;
  @Input('font-size') fontSize: string = '';
  @Input('button-color') buttonColor: string = '';
  @Input('border') border: any = '';
  @Input('border-width') borderWidth: any = '';
  @Input('border-color') borderColor: any = '';
  @Input('border-style') borderStyle: any = '';
  @Input('border-radius') borderRadius: any = '';
  @Input('shadow-color') shadowColor: any = '';
  @Input('no-shadow') set setShadow(s: boolean | '') { this.noShadow = s === '' || s };
  @Input('rounded') set setRounded(r: boolean | '') { this.rounded = r === '' || r };
  @Input('light') set setLight(l: boolean | '') { this.light = l === '' || l };
  @Input('no-blur') set setNoBlur(nb: boolean | '') { this.noBlur = nb === '' || nb };
  @Input('no-animation') set setNoAnim(na: boolean | '') { this.noAnimation = na === '' || na };
  @Input('no-close-on-esc') set setNoClEsc(nc: boolean | '') { this.noCloseOnEsc = nc === '' || nc };
  @Input('no-close-on-mask') set setNoClM(nm: boolean | '') { this.noCloseOnMask = nm === '' || nm };
  @Input('center') set setCenter(c: boolean | '') { this.side = 'centered' };
  @Input('top') set setTop(t: boolean | '') { this.side = 'top-center' };
  @Input('bottom') set setBottom(b: boolean | '') { this.side = 'bottom-center' };
  @Input('left') set setLeft(l: boolean | '') { this.side = 'left-center' };
  @Input('right') set setRight(r: boolean | '') { this.side = 'right-center' };
  @Input('top-right') set setTopRight(tr: boolean | '') { this.side = 'top-right' };
  @Input('top-left') set setTopLeft(tl: boolean | '') { this.side = 'top-left' };
  @Input('bottom-left') set setBottomLeft(bl: boolean | '') { this.side = 'bottom-left' };
  @Input('bottom-right') set setBottomRight(br: boolean | '') { this.side = 'bottom-right' };
  @Output() closeDialog = new EventEmitter();
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(!this.isOut && !this.noCloseOnEsc && event.key === 'Escape') this.setCloseDialog();
  };
  @ViewChild('dialog') dialog: ElementRef;

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) { this.renderer.addClass(document.body, 'overflow-hidden') }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    document.addEventListener('mousedown', this.setCloseOnMaskClick, true)
  }

  ngOnDestroy() { this.renderer.removeClass(document.body, 'overflow-hidden') }

  ngOnInit() {
    this.maskClasses.push(
      this.light ? 'light' : '',
      this.noBlur ? 'no-blur' : '',
      this.noAnimation ? 'no-animation' : '',
      this.side != '' ? this.side : 'centered',
      this.isOut ? this.light ? 'p-mask-light-out' : 'p-mask-out' : this.light ? 'p-mask-light-in' : 'p-mask-in'
    );
    if(this.timer != 0) setTimeout(() => this.setCloseDialog(), this.timer);
    this.shadowColor = !this.noShadow && this.shadowColor == '' ?
      !this.light ? 'dark-opacity-2' : 'dark-opacity-1' : this.shadowColor;
  }

  getStyles() {
    return {
      'borderColor': this.borderColor != '' ?
        this.borderColor.split(' ').map((c: string) => { return `var(--${ c })` }).toString().replaceAll(',', ' ') : '',
      'borderWidth': this.borderWidth!,
      'borderStyle': this.borderStyle!,
      'borderRadius': this.borderRadius!,
      'border': this.border != '' ?
        `${ this.border.split(' ')[0]} ${ this.border.split(' ')[1] } var(--${ this.border.split(' ')[2] })` : '',
      'backgroundColor': this.background != '' ? `var(--${ this.background })` : `var(--white)`,
      'padding': this.padding != '' ? this.padding : '',
      'boxShadow': this.noShadow ? '' : !this.light ?
        '0 0 6px var(--'+this.shadowColor+')' : '0 0 8px var(--'+this.shadowColor+')'
    };
  }

  setCloseOnMaskClick = (event: Event) => {
    let isOutside = this.dialog.nativeElement.contains(event.target);
    if(!this.isOut && !isOutside && !this.noCloseOnMask) this.setCloseDialog();
  }

  setCloseDialog() {
    this.isOut = true;
    setTimeout(() => { this.closeDialog.emit() }, 301);
  }
}
