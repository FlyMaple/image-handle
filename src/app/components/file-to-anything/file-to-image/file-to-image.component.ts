import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-file-to-image',
  templateUrl: './file-to-image.component.html',
  styleUrls: ['./file-to-image.component.css']
})
export class FileToImageComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    $('.fileToImage button').on('click', (event) => {
      event.preventDefault()

      const fileDOM = $('.fileToImage [type=file]')[0];
      const file = fileDOM.files[0];

      this.transformService.fileToImage(file, (image) => {
        $('.fileToImage .wrapper').append(image)
        $('.fileToImage .code div').text(`<img src="${image.src}">`)
      })
    })
  }
}
