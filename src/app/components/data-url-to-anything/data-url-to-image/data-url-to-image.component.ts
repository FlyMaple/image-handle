import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';

import { base64Array } from '../../../constants/constants'

declare const $: any;

@Component({
  selector: 'app-data-url-to-image',
  templateUrl: './data-url-to-image.component.html',
  styleUrls: ['./data-url-to-image.component.css']
})
export class DataUrlToImageComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    $('#base64_1').val(base64Array[0])
    $('#base64_2').val(base64Array[1])

    $('#btnBase64_1').on('click', (event) => {
      event.preventDefault()

      this.transform(base64Array[0])
    })

    $('#btnBase64_2').on('click', (event) => {
      event.preventDefault()

      this.transform(base64Array[1])
    })
  }

  transform(base64) {
    this.transformService.dataUrlToFile(base64, (file) => {
      console.log(file)

      this.transformService.dataUrlToImage(base64, image => {
        $('.dataUrlToImage .wrapper').html(image)
      })

      $('.dataUrlToImage .code div').text(`<img src="${base64}">`)
    })
  }
}
