import { i, _ as __esDecorate, b as __runInitializers, a as i$1, x, e, s } from './custom-element-DcT8CkwG.js';
import { t } from './query-BqWrjd_U.js';

(() => {
    let _classDecorators = [e('carousel-element')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _images_decorators;
    let _images_initializers = [];
    let _images_extraInitializers = [];
    let _pages_decorators;
    let _pages_initializers = [];
    let _pages_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _images_decorators = [i()];
            _pages_decorators = [t('custom-pages')];
            __esDecorate(this, null, _images_decorators, { kind: "accessor", name: "images", static: false, private: false, access: { has: obj => "images" in obj, get: obj => obj.images, set: (obj, value) => { obj.images = value; } }, metadata: _metadata }, _images_initializers, _images_extraInitializers);
            __esDecorate(this, null, _pages_decorators, { kind: "accessor", name: "pages", static: false, private: false, access: { has: obj => "pages" in obj, get: obj => obj.pages, set: (obj, value) => { obj.pages = value; } }, metadata: _metadata }, _pages_initializers, _pages_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #images_accessor_storage = __runInitializers(this, _images_initializers, ['./assets/1.webp', './assets/2.webp', './assets/3.webp']);
        get images() { return this.#images_accessor_storage; }
        set images(value) { this.#images_accessor_storage = value; }
        #pages_accessor_storage = (__runInitializers(this, _images_extraInitializers), __runInitializers(this, _pages_initializers, void 0));
        get pages() { return this.#pages_accessor_storage; }
        set pages(value) { this.#pages_accessor_storage = value; }
        static { this.styles = [
            i$1 `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 720px;
        height: 100%;
        width: 100%;
        min-height: 230px;
        box-sizing: border-box;
      }

      img {
        transform: translateY(0);
        width: 100%;
        height: 100%;
      }

      .animate-down,
      .animate-up {
        transform: translateX(-120%);
      }
      .custom-selected {
        transform: translateX(0);
      }
    `
        ]; }
        connectedCallback() {
            const run = () => {
                console.log(this.pages.getIndexFor(this.pages.selected));
                if (this.pages.getIndexFor(this.pages.selected) === this.images.length - 1)
                    this.pages.select('0');
                else
                    this.pages.next();
                setTimeout(() => {
                    run();
                }, 4000);
            };
            run();
        }
        render() {
            return x `
      <custom-pages attr-for-selected="route">
        ${this.images?.map((src, i) => x ` <img src=${src} route=${i} /> `)}
      </custom-pages>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _pages_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

let GalleryView = (() => {
    let _classDecorators = [e('gallery-view')];
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
            i$1 `
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
            return x ` <carousel-element></carousel-element> <flex-it></flex-it> <footer-element> </footer-element>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

export { GalleryView };
