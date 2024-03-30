import { LiteElement, css, html, customElement } from '@vandeurenglenn/lite'

@customElement('footer-element')
export class FooterElement extends LiteElement {
  static styles = [
    css`
      :host {
        display: flex;
        width: 100%;
        background: var(--md-sys-color-surface-container-high);
        box-sizing: border-box;
        padding: 24px;
      }

      .footer-column {
        width: calc(100% / 2);

        max-width: 720px;
        align-items: center;
      }

      flex-row {
        margin-top: 24px;
        margin-bottom: 12px;
      }

      custom-icon {
        margin-right: 12px;
      }

      @media (max-width: 1199px) {
        .footer-column {
          width: 100%;
        }
        :host {
          align-items: center;
          flex-direction: column;
        }
      }
    `
  ]

  render() {
    return html`
      <flex-column class="footer-column">
        <branding-element></branding-element>
      </flex-column>
      <flex-it></flex-it>
      <flex-column class="footer-column">
        <flex-row>
          <custom-icon icon="home"></custom-icon>
          <custom-typography type="body">Hezerheiweg 16-3290 Schaffen-Diest</custom-typography>
        </flex-row>
        <flex-row>
          <custom-icon icon="call"></custom-icon>
          <span><custom-typography type="body">013.31.24.57</custom-typography></span>
        </flex-row>

        <flex-row>
          <custom-icon icon="call"></custom-icon>
          <custom-typography type="body">013.33.46.88</custom-typography>
        </flex-row>

        <flex-row>
          <custom-icon icon="mail"></custom-icon>
          <a href="mailto:info@vicenkels.be">info@vicenkels.be</a>
        </flex-row>
      </flex-column>
    `
  }
}
