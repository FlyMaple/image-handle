import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FileToAnythingComponent } from './components/file-to-anything/file-to-anything.component';
import { FileToImageComponent } from './components/file-to-anything/file-to-image/file-to-image.component';
import { FileToDataUrlComponent } from './components/file-to-anything/file-to-data-url/file-to-data-url.component';
import { FileToCanvasComponent } from './components/file-to-anything/file-to-canvas/file-to-canvas.component';
import { DataUrlToAnythingComponent } from './components/data-url-to-anything/data-url-to-anything.component';
import { DataUrlToImageComponent } from './components/data-url-to-anything/data-url-to-image/data-url-to-image.component';
import { DataUrlToCanvasComponent } from './components/data-url-to-anything/data-url-to-canvas/data-url-to-canvas.component';
import { DataUrlToFileComponent } from './components/data-url-to-anything/data-url-to-file/data-url-to-file.component';
import { CanvasToAnythingComponent } from './components/canvas-to-anything/canvas-to-anything.component';
import { ImageToAnythingComponent } from './components/image-to-anything/image-to-anything.component';
import { ImageToDataUrlComponent } from './components/image-to-anything/image-to-data-url/image-to-data-url.component';
import { ImageToCanvasComponent } from './components/image-to-anything/image-to-canvas/image-to-canvas.component';
import { ImageToFileComponent } from './components/image-to-anything/image-to-file/image-to-file.component';
import { CanvasToImageComponent } from './components/canvas-to-anything/canvas-to-image/canvas-to-image.component';
import { CanvasToDataUrlComponent } from './components/canvas-to-anything/canvas-to-data-url/canvas-to-data-url.component';
import { CanvasToFileComponent } from './components/canvas-to-anything/canvas-to-file/canvas-to-file.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FileToAnythingComponent,
    FileToImageComponent,
    FileToDataUrlComponent,
    FileToCanvasComponent,
    DataUrlToAnythingComponent,
    DataUrlToImageComponent,
    DataUrlToCanvasComponent,
    DataUrlToFileComponent,
    CanvasToAnythingComponent,
    ImageToAnythingComponent,
    ImageToDataUrlComponent,
    ImageToCanvasComponent,
    ImageToFileComponent,
    CanvasToImageComponent,
    CanvasToDataUrlComponent,
    CanvasToFileComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: HomeComponent
    }, {
      path: 'fileToAnything',
      component: FileToAnythingComponent
    }, {
      path: 'dataUrlToAnything',
      component: DataUrlToAnythingComponent
    }, {
      path: 'canvasToAnything',
      component: CanvasToAnythingComponent
    }, {
      path: 'imageToAnything',
      component: ImageToAnythingComponent
    }, {
      path: '**',
      component: PageNotFoundComponent
    }], {
        enableTracing: false
      }, )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
