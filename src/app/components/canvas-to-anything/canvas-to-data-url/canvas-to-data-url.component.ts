import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-canvas-to-data-url',
  templateUrl: './canvas-to-data-url.component.html',
  styleUrls: ['./canvas-to-data-url.component.css']
})
export class CanvasToDataUrlComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    this.transformService.createCanvas('assets/golang.png', canvas => {
      $('.canvasToDataUrl .canvas-wrapper').append(canvas)
    });

    $('.canvasToDataUrl button').on('click', (event) => {
      event.preventDefault()

      const canvas = $('.canvas-wrapper canvas')[0]

      this.transformService.canvasToDataUrl(canvas, 'image/png', (dataUrl) => {

        this.transformService.dataUrlToImage(dataUrl, image => {
          $('.canvasToDataUrl .wrapper').append(image)
        })

        $('.canvasToDataUrl .code div').append(dataUrl)
      })
    })
  }
}
