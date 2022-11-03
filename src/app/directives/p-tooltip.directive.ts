import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[PootaTooltip]' })

export class PootaTooltipDirective implements OnInit {
  @Input() color: any = '';
  @Input('text-color') set setTextColor(textColor: string) { this.color = textColor ? textColor : '' }
  @Input('font-color') set setFontColor(fontColor: string) { this.color = fontColor ? fontColor : '' }

  constructor(private cl: ElementRef<HTMLElement>) {}

  ngOnInit() { this.cl.nativeElement.style.color = `var(--${ this.color })` }
}


/*
[tooltip] {
  display: inline-block;
  position: relative;
  color: inherit
}
[tooltip]:hover::after {
  color: var(--white);
  font-size: 16px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  content: attr(tooltip);
  position: absolute;
  width: max-content;
  height: max-content;
  bottom: 120%;
  left: 20px;
  z-index: 99
}
[tooltip].white:hover::after {
  color: var(--dark);
  border: 1px solid var(--dark-50)
}

[tooltip].primary:hover::after { background: var(--primary) }
[tooltip].secondary:hover::after { background: var(--secondary) }
[tooltip].red:hover::after { background: var(--red) }
[tooltip].error:hover::after { background: var(--error) }
[tooltip].disabled:hover::after { background: var(--disabled) }
[tooltip].success:hover::after { background: var(--success) }
[tooltip].warning:hover::after { background: var(--warning) }
[tooltip].white:hover::after { background: var(--white) }
[tooltip].black:hover::after { background: var(--black) }
[tooltip].blue:hover::after { background: var(--blue) }
[tooltip].orange:hover::after { background: var(--orange) }
[tooltip].yellow:hover::after { background: var(--yellow) }
[tooltip].gray:hover::after { background: var(--gray) }
[tooltip].dark:hover::after { background: var(--dark) }
[tooltip].orange:hover::after { background: var(--orange) }
[tooltip].purple:hover::after { background: var(--purple) }
[tooltip].green:hover::after { background: var(--green) }


 template: `
    <a
      class='p-tooltip {{ side }} {{ css }}'
      [ngStyle]='setTooltipStyles()'
      [ngClass]="classList"
      #tip>
      <ng-content></ng-content>

      <span
        #box *ngIf='onHover'
        [class.p-bottom-tooltip-in]='!offHover'
        [class.p-bottom-tooltip-out]='offHover'>{{ text }}</span>
    </a>
  `,
  styles: [`

    .p-tooltip[tooltip]:before {
      background-color: var(--tipBG);
      color: var(--tipCL);
      border-radius: var(--tipBorderRadius);
      border-color: var(--tipBorderColor);
      border-style: var(--tipBorderStyle);
      border-width: var(--tipBorderWidth);
      width: var(--tipWidth);
      height: var(--tipHeight);
      padding: var(--tipPadding);
      font-size: var(--tipFontSize);
    }
    `]
  })


    too: boolean = false;
    onHover: boolean = false;
    offHover: boolean = false;
    classList: any = [];
    @Input() target: string = '';
    @Input() href: string = '';
    @Input() background: string = 'primary';
    @Input() text: string = '';
    @Input() side: string = 'top-tooltip';
    @Input() color: string = '';
    @Input() css: string = '';
    @Input() border: string = '';
    @Input() padding: any = '4px 8px';
    @Input() width: any = 'max-content';
    @Input() height: any = 'max-content';
    @Input('border-width') borderWidth: any = '';
    @Input('border-color') borderColor: any = '';
    @Input('border-style') borderStyle: any = '';
    @Input('border-radius') borderRadius: any = '';
    @Input('text-color') textColor: string = 'white';
    @Input('font-size') fontSize: string = '16px';
    @Input('link') set setLink(l: string) { this.href = l };
    @Input('_blank') set set_Blank(b: string) { this.target = '_blank' };
    @Input('blank') set setBlank(b: string) { this.target = '_blank' };
    @Input('_self') set set_Self(s: string) { this.target = '_self' };
    @Input('self') set setSelf(s: string) { this.target = '_self' };
    @Input('tooltip') set setTooltip(t: string) { this.text = t };
    @Input('tooltip-text') set setTooltipText(tt: string) { this.text = tt };
    @Input('link-color') set setLinkColor(lc: string) { this.classList.push('color-'+lc) };
    @Input('rounded') set setRounded(r: boolean | '') { this.classList.push('rounded') };
    @Input('no-underline') set setNoUndl(u: boolean | '') { this.classList.push('no-text-decoration') };
    @Input('no-text-decoration') set setNoDec(d: boolean | '') { this.classList.push('no-text-decoration') };
    @Input('full-rounded') set setFullRounded(fr: boolean | '') { this.classList.push('full-rounded') };
    @Input('top') set setTop(t: boolean | '') { this.classList.push('top-tooltip') };
    @Input('bottom') set setBottom(b: boolean | '') { this.classList.push('bottom-tooltip') };
    @Input('left') set setLeft(l: boolean | '') { this.classList.push('left-tooltip') };
    @Input('right') set setRight(r: boolean | '') { this.classList.push('right-tooltip') };
    @Input('top-right') set setTopRight(tr: boolean | '') { this.classList.push('top-right-tooltip') };
    @Input('top-left') set setTopLeft(tl: boolean | '') { this.classList.push('top-left-tooltip') };
    @Input('bottom-left') set setBottomLeft(bl: boolean | '') { this.classList.push('bottom-left-tooltip') };
    @Input('bottom-right') set setBottomRight(br: boolean | '') { this.classList.push('bottom-right-tooltip') };
    @ViewChild('tip') tip: ElementRef;
    @ViewChild('box') box: ElementRef;

    @HostListener('mouseenter') onMouseEnter() { this.onHover = !this.onHover };
    @HostListener('mouseleave') onMouseLeave() {
      this.offHover = true;
      setTimeout(() => {
        this.onHover = !this.onHover;
        this.offHover = false;
      }, 300)
    };

    constructor(private cdr: ChangeDetectorRef) { }

    setTooltipStyles() {
      this.borderWidth = this.borderWidth == '' ? this.border.split(' ')[0] : this.borderWidth;
      this.borderStyle = this.borderStyle == '' ? this.border.split(' ')[1] : this.borderStyle;
      this.borderColor = this.borderColor == '' ? `var(--${  this.border.split(' ')[2] })` :
        this.borderColor.split(' ').map((c: string) => { return `var(--${ c })` }).toString().replaceAll(',', ' ');

       return {
        '--tipBG': 'var(--'+this.background+')',
        '--tipCL': 'var(--'+this.color+')',
        '--tipBorderRadius': this.borderRadius,
        '--tipBorderColor': this.borderColor,
        '--tipBorderWidth': this.borderWidth,
        '--tipBorderStyle': this.borderStyle,
        '--tipWidth': this.width!,
        '--tipHeight': this.height!,
        '--tipPadding': this.padding!,
        '--tipFontSize': this.fontSize!
      }
    }

    ngAfterViewInit() {
      this.cdr.detectChanges();
      if(this.href != "") this.tip.nativeElement.setAttribute('href', this.href);
      if(this.target != "") this.tip.nativeElement.setAttribute('target', this.target);
      //this.tip.nativeElement.setAttribute('tooltip', this.text);
    }


.p-tooltip[tooltip] {
  display: inline-block;
  position: relative;
  color: inherit
}
.p-tooltip[tooltip]:hover::after {
  color: var(--white);
  font-size: 16px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  content: attr(tooltip);
  position: absolute;
  width: max-content;
  height: max-content;
  z-index: 99;
  background-color: red;
}
.p-tooltip[tooltip].white:hover::after {
  color: var(--dark);
  border: 1px solid var(--dark-50)
}
 */


/* .p-tooltip[tooltip] {
  display: inline-block;
  position: relative;
  transition: all .2s ease-in-out;
}
.p-tooltip[tooltip]:before {
  display: flex;
  justify-content: center;
  align-items: center;
  content: attr(tooltip);
  position: absolute;
}
.p-tooltip[tooltip]:after, .p-tooltip[tooltip]:before {
  transition: all .2s ease-in-out;
  display: block;
  opacity: 0;
  pointer-events: none;
  position: absolute;
}
.p-tooltip[tooltip]:hover:after,
.p-tooltip[tooltip]:hover:before { opacity: 1 }
 */





/* .p-tooltip.top-tooltip[tooltip]:hover:after,
.p-tooltip.top-tooltip[tooltip]:hover:before {
  top: -5px; transform: translate3d(0, -100%, 0)
}
.p-tooltip.top-tooltip[tooltip]:before {
  top: 0; transform: translate3d(0, -110%, 0)
}
.p-tooltip.bottom-tooltip[tooltip]:hover:after,
.p-tooltip.bottom-tooltip[tooltip]:hover:before {
  bottom: -5px; transform: translate3d(0, 100%, 0)
}
.p-tooltip.bottom-tooltip[tooltip]:before {
  bottom: 0px; transform: translate3d(0, 110%, 0)
}
.p-tooltip.right-tooltip[tooltip]:hover:after,
.p-tooltip.right-tooltip[tooltip]:hover:before {
  right: -5px; transform: translate3d(100%, 0, 0)
}
.p-tooltip.right-tooltip[tooltip]:before {
  right: 0; transform: translate3d(110%, 0, 0)
}
.p-tooltip.left-tooltip[tooltip]:hover:after,
.p-tooltip.left-tooltip[tooltip]:hover:before {
  left: -5px; transform: translate3d(-100%, 0, 0)
}
.p-tooltip.left-tooltip[tooltip]:before {
  left: 0; transform: translate3d(-110%, 0, 0)
}
.p-tooltip.top-left-tooltip[tooltip]:hover:after,
.p-tooltip.top-left-tooltip[tooltip]:hover:before {
  top: -5px; left: -5px;
  transform: translate3d(-100%, -100%, 0)
}
.p-tooltip.top-left-tooltip[tooltip]:before {
  top: 0; left: 0;
  transform: translate3d(-110%, -110%, 0)
}
.p-tooltip.top-right-tooltip[tooltip]:hover:after,
.p-tooltip.top-right-tooltip[tooltip]:hover:before {
  top: -5px; right: -5px;
  transform: translate3d(100%, -100%, 0)
}
.p-tooltip.top-right-tooltip[tooltip]:before {
  top: 0; right: 0;
  transform: translate3d(110%, -110%, 0)
}
.p-tooltip.bottom-left-tooltip[tooltip]:hover:after,
.p-tooltip.bottom-left-tooltip[tooltip]:hover:before {
  bottom: -5px; left: -5px;
  transform: translate3d(-100%, 100%, 0)
}
.p-tooltip.bottom-left-tooltip[tooltip]:before {
  bottom: 0; left: 0;
  transform: translate3d(-110%, 110%, 0)
}
.p-tooltip.bottom-right-tooltip[tooltip]:hover:after,
.p-tooltip.bottom-right-tooltip[tooltip]:hover:before {
  bottom: -5px; right: -5px;
  transform: translate3d(100%, 100%, 0)
}
.p-tooltip.bottom-right-tooltip[tooltip]:before {
  bottom: 0; right: 0;
  transform: translate3d(110%, 110%, 0)
} */
