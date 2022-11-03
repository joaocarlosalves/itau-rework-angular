import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'p-icon',
  template: `
    <i *ngIf='v6 || !v4' class="flex centered fa fa-{{ regular ? 'regular' : 'solid' }} fa-{{ icon }}" [ngClass]="setClassList()"></i>
    <i *ngIf='v4' class="flex centered fa-v4 fa-v4-{{ icon }}" [ngClass]="setClassList()"></i>
  `,
  styleUrls: ['./p-icon.css']
})
export class PootaIconComponent {
  regular: boolean = false;
  solid: boolean = false;
  v4: boolean = false;
  v6: boolean = false;
  left: boolean = false;
  right: boolean = false;
  classList: any = [];
  @Input() icon: string = '';
  @Input() side: string = '';
  @Input() color: string = '';
  @Input() size: string = '';
  @Input('regular') set setRegular(regular: boolean | '') { this.regular = regular === '' || regular }
  @Input('solid') set setSolid(solid: boolean | '') { this.solid = solid === '' || solid }
  @Input('v4') set setV4(v4: boolean | '') { this.v4 = v4 === '' || v4 }
  @Input('v6') set setV6(v6: boolean | '') { this.v6 = v6 === '' || v6 }
  @Input('left') set setLeft(left: boolean | '') { this.left = left === '' || left }
  @Input('right') set setRight(right: boolean | '') { this.right = right === '' || right }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() { this.cdr.detectChanges() }

  setClassList() {
    if(this.right) this.classList.push('right');
    if(this.left || !this.right) this.classList.push('left');
    if(this.color != '') this.classList.push(`color-${ this.color }`);

    return this.classList;
  }
}
