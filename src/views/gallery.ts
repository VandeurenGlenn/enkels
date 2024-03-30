import { LiteElement, css, html, customElement } from '@vandeurenglenn/lite'

import './../elements/carousel.js'
@customElement('gallery-view')
export class GalleryView extends LiteElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        overflow-y: auto;
      }
    `
  ]

  render() {
    return html` <carousel-element></carousel-element> <flex-it></flex-it> <footer-element> </footer-element>`
  }
}
