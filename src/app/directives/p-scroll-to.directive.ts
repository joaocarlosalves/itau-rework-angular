import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[p-scroll-to]' })

export class PootaScrollToDirective {
  @Input('p-scroll-to') id: any

  constructor(private list: ElementRef<HTMLElement>) {}

  scrollTo() { this.list.nativeElement.scrollIntoView({ behavior: 'auto', block: 'center' }) }

}
