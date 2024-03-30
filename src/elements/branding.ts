import { LiteElement, css, html, customElement } from '@vandeurenglenn/lite';

@customElement('branding-element')
export class BrandingElement extends LiteElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 320px;
        width: 100%;
        padding: 24px 12px;
        box-sizing: border-box;
      }

      h1 {
        line-height: 64px;
        font-size: 57px;
        letter-spacing: -0.25px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0;
      }

      img {
        width: 50%;
      }
    `,
  ];

  render() {
    return html`
    <img src="./assets/excavator.svg"></img>
    <h1>vic enkels</h1>
    `;
  }
}
