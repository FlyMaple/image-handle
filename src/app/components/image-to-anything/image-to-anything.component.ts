import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-to-anything',
  templateUrl: './image-to-anything.component.html',
  styleUrls: ['./image-to-anything.component.css']
})
export class ImageToAnythingComponent implements OnInit {
  type: string = 'imageToDataUrl';

  constructor() { }

  ngOnInit() {
  }

  handleTypeChange(event: any , type: string): void {
    event.preventDefault();

    this.type = type;
  }
}
