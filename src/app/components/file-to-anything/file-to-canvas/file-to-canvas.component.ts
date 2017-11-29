import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';
declare const $: any;

@Component({
  selector: 'app-file-to-canvas',
  templateUrl: './file-to-canvas.component.html',
  styleUrls: ['./file-to-canvas.component.css']
})
export class FileToCanvasComponent implements OnInit {
  constructor(
    private hljsService: HighlighjsService,
    private transformService: TransformService
  ) { }

  ngOnInit() {
    this.hljsService.init();

    $('.fileToCanvas button').on('click', (event) => {
      event.preventDefault()

      const fileDOM = $('.fileToCanvas [type=file]')[0];
      const file = fileDOM.files[0];


      this.transformService.fileToCanvas(file, (canvas) => {
        $('.fileToCanvas .wrapper').append(canvas)
        $('.fileToCanvas .code div').text('<canvas width="128" height="128"></canvas>')
      })
    })
  }
}
