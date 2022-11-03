import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({ selector: '[PootaTransition]' })

export class PootaTransitionDirective implements OnInit {
  @Input() PootaTransition: string = '';

  constructor(private cl: ElementRef<HTMLElement>) {}

  ngOnInit() { this.setStyle(false) }

  setStyle(hover: boolean) {
    //this.cl.nativeElement.style.color = !hover ? `var(--${ this.PootaColor })` : `var(--${ this.hoverColor })`;
  }
}
