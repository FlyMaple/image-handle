import { Component, OnInit } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-image-to-data-url',
  templateUrl: './image-to-data-url.component.html',
  styleUrls: ['./image-to-data-url.component.css']
})
export class ImageToDataUrlComponent implements OnInit {
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
    this.transformService.imageToDataUrl(image, (dataUrl) => {
      this.transformService.dataUrlToImage(dataUrl, image => {
        $('.imageToDataUrl .wrapper').append(image)
      })

      $('.imageToDataUrl .code div').text(dataUrl)
    })
  }
}
