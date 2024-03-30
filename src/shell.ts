import { LiteElement, css, html, customElement, query } from '@vandeurenglenn/lite'
import { StyleList } from '@vandeurenglenn/lite/element'
import '@vandeurenglenn/lite-elements/drawer-layout.js'
import '@vandeurenglenn/lite-elements/drawer-item.js'
import '@vandeurenglenn/lite-elements/theme.js'
import '@vandeurenglenn/lite-elements/icon.js'
import '@vandeurenglenn/lite-elements/icon-set.js'
import '@vandeurenglenn/lite-elements/selector.js'
import '@vandeurenglenn/lite-elements/pages.js'
import '@vandeurenglenn/lite-elements/typography.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/flex-elements/row.js'
import '@vandeurenglenn/flex-elements/it.js'
import './elements/branding.js'
import './elements/footer.js'
@customElement('app-shell')
export class AppShell extends LiteElement {
  @query('custom-pages')
  accessor pages

  @query('custom-selector')
  accessor selector

  static styles?: StyleList = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        font-family: system-ui;
        line-height: 1.5;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: auto;

        height: 100%;
        background: var(--main-background, #1c1b1f);
        color: var(--on-main-background, #eee);
      }

      :not(custom-drawer-layout) {
        --flex-display-max-width: 720px;
      }

      header {
        width: 100%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      main {
        flex-direction: column;
        display: flex;
        align-items: center;
      }
      main,
      custom-pages,
      flex-container {
        height: 100%;
        width: 100%;
      }

      img {
        max-height: 120px;
        margin: 12px 24px 32px 24px;
      }
    `
  ]

  connectedCallback() {
    onhashchange = this.onhashchange.bind(this)
    const selected = location.hash.split('#!/')[1]
    this.onhashchange()
  }

  async onhashchange() {
    const selected = location.hash.split('#!/')[1] ?? 'home'
    if (!customElements.get(`${selected}-view`)) await import(`./${selected}.js`)
    this.selector.select(selected)
    this.pages.select(selected)
  }
  render() {
    return html`
      <custom-theme load-symbols="false"></custom-theme>
      <custom-icon-set>
        <template>
          <span name="home">@symbol-home</span>
          <span name="gallery_thumbnail">@symbol-gallery_thumbnail</span>
          <span name="info">@symbol-info</span>
          <span name="menu">@symbol-menu</span>
          <span name="mail">@symbol-mail</span>
          <span name="call">@symbol-call</span>
          <span name="menu_open">@symbol-menu_open</span>
        </template>
      </custom-icon-set>

      <custom-drawer-layout>
      <flex-column  slot="drawer-content">
      <img src="./assets/excavator.svg"></img>
        <custom-selector attr-for-selected="route" @selected=${({ detail }) => (location.hash = `#!/${detail}`)}>
          <custom-drawer-item route="home"
            >home<flex-it></flex-it><custom-icon icon="home"></custom-icon
          ></custom-drawer-item>

          <custom-drawer-item
          route="gallery"
            >photos<flex-it></flex-it><custom-icon icon="gallery_thumbnail"></custom-icon
          ></custom-drawer-item>
        </custom-selector>
      </flex-column>
      
        <main slot="content">
          <flex-container>
          <custom-pages attr-for-selected="route">
          
        <home-view route="home">
          
          </home-view>
          <gallery-view route="gallery">
          </gallery-view>
          </custom-pages>
          
          
          </flex-container>
          
          </main>
      </custom-drawer-layout>
    `
  }
}
