import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-to-anything',
  templateUrl: './file-to-anything.component.html',
  styleUrls: ['./file-to-anything.component.css']
})
export class FileToAnythingComponent implements OnInit {
  type: string = 'fileToImage';

  constructor() { }

  ngOnInit() {
  }

  handleTypeChange(event: any , type: string): void {
    event.preventDefault();

    this.type = type;
  }
}
