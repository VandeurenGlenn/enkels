import { _ as __esDecorate, a as i, x, b as __runInitializers, e, s } from './custom-element-DcT8CkwG.js';

let HomeView = (() => {
    let _classDecorators = [e('home-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = [
            i `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        overflow-y: auto;
      }
    `
        ]; }
        render() {
            return x `
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
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

export { HomeView };
