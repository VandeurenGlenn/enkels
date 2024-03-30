import { LiteElement, css, html, customElement } from '@vandeurenglenn/lite'

@customElement('home-view')
export class HomeView extends LiteElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
      }
    `
  ]

  render() {
    return html`
      <summary>
        <h2>Welkom bij Grond- & Afbraakwerken VIC ENKELS.</h2>
        <p>Op deze site geven we U een overzicht over de mogelijkheden van ons bedrijf.</p>

        <p>
          Indien U vragen heeft of een Offerte op maat wil kan U steeds contact met ons opnemen via E-mail of
          telefonisch.
        </p>

        <p>
          Voor kwaliteit in afbraakwerken en snelle degelijke Grondwerken is er dus slechts één adres: BVBA VIC ENKELS
          ::.
        </p>
      </summary>
      <flex-it></flex-it>
      <footer-element> </footer-element>
    `
  }
}
