import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-url-to-anything',
  templateUrl: './data-url-to-anything.component.html',
  styleUrls: ['./data-url-to-anything.component.css']
})
export class DataUrlToAnythingComponent implements OnInit {
  type: string = 'dataUrlToImage';

  constructor() { }

  ngOnInit() {
  }

  handleTypeChange(event: any , type: string): void {
    event.preventDefault();

    this.type = type;
  }
}
