import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-canvas-to-file',
  templateUrl: './canvas-to-file.component.html',
  styleUrls: ['./canvas-to-file.component.css']
})
export class CanvasToFileComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    this.transformService.createCanvas('assets/golang.png', canvas => {
      $('.canvasToFile .canvas-wrapper').append(canvas)
    });

    $('.canvasToFile button').on('click', (event) => {
      event.preventDefault()

      const canvas = $('.canvas-wrapper canvas')[0]

      this.transformService.canvasToFile(canvas, 'image/png', (file) => {
        console.log(file)
        
        this.transformService.fileToImage(file, image => {
          $('.canvasToFile .wrapper').append(image)
        })

        $('.canvasToFile .code div').html(
          `${file}
          <pre>${JSON.stringify({
            size: file.size,
            type: file.type
          }, null, 2)}</pre>`
        )
      })
    })
  }
}
