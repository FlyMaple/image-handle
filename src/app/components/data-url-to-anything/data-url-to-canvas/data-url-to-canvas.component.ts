import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlighjsService } from '../../../services/highlighjs.service';
import { TransformService } from '../../../services/transform.service';

import { base64Array } from '../../../constants/constants';

declare const $: any;

@Component({
  selector: 'app-data-url-to-canvas',
  templateUrl: './data-url-to-canvas.component.html',
  styleUrls: ['./data-url-to-canvas.component.css']
})
export class DataUrlToCanvasComponent implements OnInit {
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
  
        this.transformService.dataUrlToCanvas(base64, canvas => {
          $('.dataUrlToCanvas .wrapper').append(canvas)
        })
  
        $('.dataUrlToCanvas .code div').text('<canvas width="128" height="128"></canvas>')
      })
    }
  }
  