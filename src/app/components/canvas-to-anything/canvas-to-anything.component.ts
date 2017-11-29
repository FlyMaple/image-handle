import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-to-anything',
  templateUrl: './canvas-to-anything.component.html',
  styleUrls: ['./canvas-to-anything.component.css']
})
export class CanvasToAnythingComponent implements OnInit {
  type: string = 'canvasToImage';

  constructor() { }

  ngOnInit() {
  }

  handleTypeChange(event: any , type: string): void {
    event.preventDefault();

    this.type = type;
  }
}
