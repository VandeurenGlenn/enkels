import { LiteElement, css, html, customElement, query, property } from '@vandeurenglenn/lite'

@customElement('carousel-element')
export class CarouselElement extends LiteElement {
  @property() accessor images = ['./assets/1.webp', './assets/2.webp', './assets/3.webp']
  @query('custom-pages')
  accessor pages

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 720px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position: relative;
      }

      img {
        transform: translateY(0);
        width: 100%;
      }

      .animate-down,
      .animate-up {
        transform: translateX(-120%);
      }
      .custom-selected {
        transform: translateX(0);
      }
    `
  ]
  connectedCallback() {
    let i = 0
    const run = () => {
      console.log(this.pages.getIndexFor(this.pages.selected))

      if (this.pages.getIndexFor(this.pages.selected) === this.images.length - 1) this.pages.select('0')
      else this.pages.next()
      setTimeout(() => {
        run()
      }, 4000)
    }

    run()
  }

  render() {
    return html`
      <custom-pages attr-for-selected="route">
        ${this.images?.map((src, i) => html` <img src=${src} route=${i} /> `)}
      </custom-pages>
    `
  }
}
