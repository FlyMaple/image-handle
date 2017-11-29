import { Injectable } from '@angular/core';
declare const hljs: any;
declare const $: any;

@Injectable()
export class HighlighjsService {

  constructor() { }

  init(): void {
    setTimeout(() => {
      $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
        hljs.lineNumbersBlock(block);
      });
    }, 0);
  }
}
