import { Pipe, PipeTransform, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'trustPipe'
})
export class TrustPipe implements PipeTransform {

  constructor(@Inject(DomSanitizer) private sanitizer: DomSanitizer) { }

  transform(html: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}