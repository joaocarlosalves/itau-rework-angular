import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'p-full-bar',
  templateUrl: './p-full-bar.component.html',
  styleUrls: ['./p-full-bar.css']
})
export class PootaFullBarComponent {
  noColor: boolean = true;
  rounded: boolean = false;
  shadow: boolean = false;
  noBackground: boolean = false;
  noPadding: boolean = false;
  left: boolean = false;
  right: boolean = false;
  top: boolean = false;
  bottom: boolean = false;
  center: boolean = false;
  between: boolean = false;
  around: boolean = false;
  start: boolean = false;
  end: boolean = false;
  mini: boolean = false;
  small: boolean = false;
  big: boolean = false;
  large: boolean = false;
  border: boolean = false;
  borderBottom: boolean = false;
  borderTop: boolean = false;
  borderRight: boolean = false;
  borderLeft: boolean = false;
  noBorderBottom: boolean = false;
  noBorderTop: boolean = false;
  noBorderRight: boolean = false;
  noBorderLeft: boolean = false;
  classList: any = [];
  @Input() css: string = '';
  @Input() background: string = '';
  @Input() color: string = '';
  @Input('border-color') borderColor: string = '';
  @Input('border-size') borderSize: any = '';
  @Input('size') size: any = '';
  @Input('rounded') set setRounded(rounded: boolean | '') { this.rounded = rounded === '' || rounded }
  @Input('shadow') set setShadow(shadow: boolean | '') { this.shadow = shadow === '' || shadow }
  @Input('top') set setTop(top: boolean | '') { this.top = top === '' || top }
  @Input('bottom') set setBottom(bottom: boolean | '') { this.bottom = bottom === '' || bottom }
  @Input('left') set setLeft(left: boolean | '') { this.left = left === '' || left }
  @Input('right') set setRight(right: boolean | '') { this.right = right === '' || right }
  @Input('mini') set setMini(mini: boolean | '') { this.mini = mini === '' || mini }
  @Input('small') set setSmall(small: boolean | '') { this.small = small === '' || small }
  @Input('big') set setBig(big: boolean | '') { this.big = big === '' || big }
  @Input('large') set setLarge(large: boolean | '') { this.large = large === '' || large }
  @Input('border') set setBorder(border: boolean | '') { this.border = border === '' || border }
  @Input('border-bottom') set setBorderBottom(borderBottom: boolean | '') { this.borderBottom = borderBottom === '' || borderBottom }
  @Input('border-top') set setBorderTop(borderTop: boolean | '') { this.borderTop = borderTop === '' || borderTop }
  @Input('border-right') set setBorderRight(borderRight: boolean | '') { this.borderRight = borderRight === '' || borderRight }
  @Input('border-left') set setBorderLeft(borderLeft: boolean | '') { this.borderLeft = borderLeft === '' || borderLeft }
  @Input('no-border-bottom') set setNoBorderBottom(noBorderBottom: boolean | '') { this.noBorderBottom = noBorderBottom === '' || noBorderBottom }
  @Input('no-border-top') set setNoBorderTop(noBorderTop: boolean | '') { this.noBorderTop = noBorderTop === '' || noBorderTop }
  @Input('no-border-right') set setNoBorderRight(noBorderRight: boolean | '') { this.noBorderRight = noBorderRight === '' || noBorderRight }
  @Input('no-border-left') set setNoBorderLeft(noBorderLeft: boolean | '') { this.noBorderLeft = noBorderLeft === '' || noBorderLeft }
  @Input('left') set setLeftButton(leftButton: boolean | '') { this.left = leftButton === '' || leftButton }
  @Input('right') set setRightButton(rightButton: boolean | '') { this.right = rightButton === '' || rightButton }
  @Input('center') set setCenterButton(centerButton: boolean | '') { this.center = centerButton === '' || centerButton }
  @Input('around') set setAroundButton(aroundButton: boolean | '') { this.around = aroundButton === '' || aroundButton }
  @Input('start') set setStartButton(startButton: boolean | '') { this.start = startButton === '' || startButton }
  @Input('end') set setEndButton(endButton: boolean | '') { this.end = endButton === '' || endButton }
  @Input('between') set setBetweenButton(betweenButton: boolean | '') { this.between = betweenButton === '' || betweenButton }
  @Output() close = new EventEmitter()
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(event.key === 'Escape') this.closeAlert();
  }

  constructor() {}

  setClassList() {
    if(this.css != '') this.classList.push(this.css);
    if(this.rounded) this.classList.push('rounded');
    if(this.top) this.classList.push('p-full-bar-top');
    if(this.bottom) this.classList.push('p-full-bar-bottom');
    if(this.left) this.classList.push('p-full-bar-left');
    if(this.right) this.classList.push('p-full-bar-right');

    if(this.size != '') {
      if(this.mini) this.classList.push('mini');
      if(this.small) this.classList.push('small');
      if(this.big) this.classList.push('big');
      if(this.large) this.classList.push('large');
    } else this.classList.push(this.size);

    if(this.center) this.classList.push('justify-center');
    if(this.between) this.classList.push('space-between');
    if(this.around) this.classList.push('space-around');
    if(this.start) this.classList.push('flex-start');
    if(this.end) this.classList.push('flex-end');
    if(this.noBackground) this.classList.push('no-bg');
    if(this.noPadding) this.classList.push('no-padding');

    if(this.border) {
      this.classList.push('border-solid');

      if(this.borderColor != '') this.classList.push(`border-${ this.borderColor }`);
      else this.classList.push('border-primary');

      if(this.borderSize == '' || this.borderSize < 1 || this.borderSize > 10) this.classList.push('border-1');
      else this.classList.push(`border-${ this.borderSize }`);

      if(this.borderBottom) this.classList.push('border-bottom');
      if(this.borderTop) this.classList.push('border-top');
      if(this.borderRight) this.classList.push('border-right');
      if(this.borderLeft) this.classList.push('border-left');
      if(this.noBorderBottom) this.classList.push('no-border-bottom');
      if(this.noBorderTop) this.classList.push('no-border-top');
      if(this.noBorderRight) this.classList.push('no-border-right');
      if(this.noBorderLeft) this.classList.push('no-border-left');
    }

    if(this.color != '') this.classList.push(`bg-${ this.color }`);
    else this.classList.push('bg-primary');

    return this.classList;
  }

  closeAlert() { this.close.emit() }
}
