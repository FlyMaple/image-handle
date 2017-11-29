import { Component, OnInit } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-file-to-data-url',
  templateUrl: './file-to-data-url.component.html',
  styleUrls: ['./file-to-data-url.component.css']
})
export class FileToDataUrlComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    $('.fileToDataUrl button').on('click', (event) => {
      event.preventDefault()

      const fileDOM = $('.fileToDataUrl [type=file]')[0];
      const file = fileDOM.files[0];


      this.transformService.fileToDataUrl(file, (dataUrl) => {
        this.transformService.dataUrlToImage(dataUrl, image => {
          $('.fileToDataUrl .wrapper').append(image)
        })

        $('.fileToDataUrl .code div').text(dataUrl)
      })
    })
  }
}
