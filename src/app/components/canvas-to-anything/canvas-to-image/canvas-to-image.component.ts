import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-canvas-to-image',
  templateUrl: './canvas-to-image.component.html',
  styleUrls: ['./canvas-to-image.component.css']
})
export class CanvasToImageComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    this.transformService.createCanvas('assets/golang.png', canvas => {
      $('.canvasToImage .canvas-wrapper').append(canvas)
    });

    $('.canvasToImage button').on('click', (event) => {
      event.preventDefault()

      const canvas = $('.canvas-wrapper canvas')[0];

      this.transformService.canvasToImage(canvas, 'image/png', (image) => {
        $('.canvasToImage .wrapper').append(image)
        $('.canvasToImage .code div').text(`<img src="${image.src}">`)
      })
    })
  }
}
