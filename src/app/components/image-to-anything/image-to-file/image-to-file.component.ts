import { Component, OnInit } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-image-to-file',
  templateUrl: './image-to-file.component.html',
  styleUrls: ['./image-to-file.component.css']
})
export class ImageToFileComponent implements OnInit {
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
    this.transformService.imageToFile(image, (file) => {
      console.log(file)

      this.transformService.fileToImage(file, image => {
        $('.imageToFile .wrapper').append(image);
      })

      $('.imageToFile .code div').html(
        `${file}
        <pre>${
        JSON.stringify({
          size: file.size,
          type: file.type
        }, null, 2)}</pre>`
      )
    })
  }
}
