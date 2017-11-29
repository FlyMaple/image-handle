import { Component, OnInit } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-image-to-canvas',
  templateUrl: './image-to-canvas.component.html',
  styleUrls: ['./image-to-canvas.component.css']
})
export class ImageToCanvasComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    $('#button1').on('click', (event) => {
      event.preventDefault();

      const img1 = $('#img1')[0];

      this.transform(img1);
    })

    $('#button2').on('click', (event) => {
      event.preventDefault();

      const img2 = $('#img2')[0];

      this.transform(img2);
    })
  }

  transform(image: HTMLImageElement): void {
    this.transformService.imageToCanvas(image, (canvas) => {
      $('.imageToCanvas .wrapper').append(canvas)

      $('.imageToCanvas .code div').text('<canvas width="128" height="128"></canvas>')
    })
  }
}
