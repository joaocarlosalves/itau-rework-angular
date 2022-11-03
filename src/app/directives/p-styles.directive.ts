import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[PootaStyles]' })

export class PootaStylesDirective implements OnInit {
  bold: boolean = false;
  italic: boolean = false;
  underline: boolean = false;
  uppercase: boolean = false;
  lowercase: boolean = false;
  capitalize: boolean = false;
  @Input() color: any = '';
  @Input('font-size') fontSize: any = '';
  @Input('font-weight') fontWeight: any = '';
  @Input('font-style') fontStyle: any = '';
  @Input('text-align') textAlign: any = '';
  @Input('text-decoration') textDecoration: any = '';
  @Input('text-transform') textTransform: any = '';
  @Input('bold') set setBold(bold: boolean | '') { this.bold = bold === '' || bold }
  @Input('italic') set setItalic(italic: boolean | '') { this.italic = italic === '' || italic }
  @Input('underline') set setUnderline(underline: boolean | '') { this.underline = underline === '' || underline }
  @Input('uppercase') set setUppercase(uppercase: boolean | '') { this.uppercase = uppercase === '' || uppercase }
  @Input('lowercase') set setLowercase(lowercase: boolean | '') { this.lowercase = lowercase === '' || lowercase }
  @Input('capitalize') set setCapitalize(capitalize: boolean | '') { this.capitalize = capitalize === '' || capitalize }

  @Input() border: any = '';
  @Input('border-width') borderWidth: any = '';
  @Input('border-color') borderColor: any = '';
  @Input('border-style') borderStyle: any = '';
  @Input('border-radius') borderRadius: any = '';

  @Input() background: any = '';
  @Input('background-size') backgroundSize: any = '';
  @Input('background-position') backgroundPosition: any = '';
  @Input('background-image') backgroundImage: any = '';
  @Input('background-repeat') backgroundRepeat: any = '';
  @Input('background-color') backgroundColor: any = '';

  @Input() width: any = '';
  @Input() height: any = '';
  @Input('min-width') minWidth: any = '';
  @Input('max-width') maxWidth: any = '';
  @Input('min-height') minHeight: any = '';
  @Input('max-height') maxHeight: any = '';

  @Input() display: any = '';

  block: boolean = false;
  none: boolean = false;
  flex: boolean = false;
  inlineBlock: boolean = false;
  inlineFlex: boolean = false;
  @Input('block') set setBlock(block: boolean | '') { this.block = block === '' || block }
  @Input('none') set setNone(none: boolean | '') { this.none = none === '' || none }
  @Input('flex') set setFlex(flex: boolean | '') { this.flex = flex === '' || flex }
  @Input('inline-block') set setInlineBlock(inlineBlock: boolean | '') { this.inlineBlock = inlineBlock === '' || inlineBlock }
  @Input('inline-flex') set setInlineFlex(inlineFlex: boolean | '') { this.inlineFlex = inlineFlex === '' || inlineFlex }

  constructor(private elem: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.elem.nativeElement.style.display = this.display!;
    this.elem.nativeElement.style.display = this.inlineFlex ? 'inline-flex' : this.inlineBlock ? 'inline-block' : this.none ? 'none' : this.flex ? 'flex' : 'block';

    this.elem.nativeElement.style.width = this.width!;
    this.elem.nativeElement.style.height = this.height!;
    this.elem.nativeElement.style.minWidth = this.minWidth!;
    this.elem.nativeElement.style.maxWidth = this.maxWidth!;
    this.elem.nativeElement.style.minHeight = this.minHeight!;
    this.elem.nativeElement.style.maxHeight = this.maxHeight!;
    this.elem.nativeElement.style.height = this.height!;

    this.elem.nativeElement.style.color = this.color != '' ? `var(--${ this.color })` : '';
    this.elem.nativeElement.style.fontSize = this.fontSize!;
    this.elem.nativeElement.style.fontWeight = this.fontWeight!;
    this.elem.nativeElement.style.fontStyle = this.fontStyle!;
    this.elem.nativeElement.style.fontStyle = this.fontStyle!;
    this.elem.nativeElement.style.textAlign = this.textAlign!;
    this.elem.nativeElement.style.textDecoration = this.textDecoration!;
    this.elem.nativeElement.style.textTransform = this.textTransform!;

    this.elem.nativeElement.style.background = this.background!;
    this.elem.nativeElement.style.backgroundColor = this.backgroundColor != '' ? `var(--${ this.backgroundColor })` : '';
    this.elem.nativeElement.style.backgroundImage = this.backgroundImage != '' ? `url(${ this.backgroundImage })` : '';
    this.elem.nativeElement.style.backgroundSize = this.backgroundSize!;
    this.elem.nativeElement.style.backgroundPosition = this.backgroundPosition!;
    this.elem.nativeElement.style.backgroundRepeat = this.backgroundRepeat!;

    this.elem.nativeElement.style.border = this.border!;
    this.elem.nativeElement.style.borderWidth = this.borderWidth!;
    this.elem.nativeElement.style.borderColor = this.borderColor != '' ?
      this.borderColor.split(' ').map((c: string) => { return `var(--${ c })` }).toString().replaceAll(',', ' ') : '';
    this.elem.nativeElement.style.borderStyle = this.borderStyle!;
    this.elem.nativeElement.style.borderRadius = this.borderRadius!;
  }
}
