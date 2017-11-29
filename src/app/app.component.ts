import { Component } from '@angular/core';
import { HighlighjsService } from './services/highlighjs.service';
import { TransformService } from './services/transform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HighlighjsService, TransformService]
})
export class AppComponent {
}
