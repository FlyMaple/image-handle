import { Injectable } from '@angular/core';

@Injectable()
export class TransformService {

  constructor() { }

  /***************************************************
   * 
   * File Type Convert Anything
   * 
   ***************************************************/
  fileToDataUrl(file: File, cb: Function) {
    var reader = new FileReader()

    reader.onloadend = (e: any) => {
      cb(e.target.result)
    }

    reader.readAsDataURL(file)
  }

  fileToImage(file: File, cb: Function) {
    this.fileToDataUrl(file, (dataUrl) => {
      this.dataUrlToImage(dataUrl, (image) => {
        cb(image)
      })
    })
  }

  fileToCanvas(file: File, cb: Function) {
    this.fileToImage(file, (image) => {
      this.imageToCanvas(image, (canvas) => {
        cb(canvas)
      })
    })
  }

  /***************************************************
   * 
   * DataURL Type Convert Anything
   * 
   ***************************************************/
  dataUrlToImage(dataUrl: string, cb: Function) {
    var image = new Image()

    image.onload = () => {
      cb(image)
    }

    image.src = dataUrl
  }

  dataUrlToCanvas(dataUrl: string, cb: Function) {
    this.dataUrlToImage(dataUrl, (image) => {
      this.imageToCanvas(image, (canvas) => {
        cb(canvas)
      })
    })
  }

  dataUrlToFile(dataUrl: string, cb: Function) {
    this.dataUrlToImage(dataUrl, (image) => {
      this.imageToFile(image, (file) => {
        cb(file)
      })
    })
  }


  /***************************************************
   * 
   * Image Type Convert Anything
   * 
   ***************************************************/
  imageToCanvas(image: HTMLImageElement, cb: Function, test: boolean = false) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (test) {
      const canvasWidth = image.naturalWidth
      const canvasHeight = image.naturalWidth * image.naturalHeight / image.naturalWidth

      canvas.setAttribute('width', String(canvasWidth))
      canvas.setAttribute('height', String(canvasHeight))

      context.drawImage(image, 0, 0, canvasWidth, canvasHeight)
    } else {
      const canvasWidth = 128
      const canvasHeight = 128 * image.height / image.width

      canvas.setAttribute('width', String(canvasWidth))
      canvas.setAttribute('height', String(canvasHeight))

      context.drawImage(image, 0, 0, canvasWidth, canvasHeight)
    }

    cb(canvas)
  }

  imageToDataUrl(image: HTMLImageElement, cb: Function) {
    let mime = image.src.match(/^data:(.+);/) && image.src.match(/^data:(.+);/)[1]
    if (!mime && image.src.match(/([^.])+$/)[0]) {
      mime = image.src.match(/([^.])+$/)[0]
      if (mime === 'jpg' || mime === 'jpeg') {
        mime = 'image/jpeg'
      } else if (mime === 'png') {
        mime = 'image/png'
      } else if (mime === 'gif') {
        mime = 'image/gif'
      }
    }

    if (!mime) {
      mime = 'image/jpeg'
    }

    this.imageToCanvas(image, (canvas) => {
      cb(canvas.toDataURL(mime, 1))
    })
  }

  imageToFile(image: HTMLImageElement, cb: Function) {
    let mime = image.src.match(/^data:(.+);/) && image.src.match(/^data:(.+);/)[1]
    if (!mime && image.src.match(/([^.])+$/)[0]) {
      mime = image.src.match(/([^.])+$/)[0]
      if (mime === 'jpg' || mime === 'jpeg') {
        mime = 'image/jpeg'
      } else if (mime === 'png') {
        mime = 'image/png'
      } else if (mime === 'gif') {
        mime = 'image/gif'
      }
    }

    if (!mime) {
      mime = 'image/jpeg'
    }

    this.imageToCanvas(image, (canvas) => {
      canvas.toBlob((blob) => {
        cb(blob)
      }, mime, 1)
    }, false)
  }

  /***************************************************
   * 
   * Canvas Type Convert Anything
   * 
   ***************************************************/
  canvasToImage(canvas: HTMLCanvasElement, mime: string, cb: Function): void {
    const dataUrl = canvas.toDataURL(mime, 1)

    this.dataUrlToImage(dataUrl, image => {
      cb(image)
    })
  }

  canvasToDataUrl(canvas: HTMLCanvasElement, mime: string, cb: Function): void {
    cb(canvas.toDataURL(mime, 1))
  }

  canvasToFile(canvas: HTMLCanvasElement, mime: string, cb: Function): void {
    canvas.toBlob((blob) => {
      cb(blob)
    }, mime, 1)
  }

  createCanvas(url: string, cb: Function): void {
    const image = new Image()

    image.onload = () => {
      this.imageToCanvas(image, canvas => {
        cb(canvas)
      })
    }

    image.src = url
  }
}
