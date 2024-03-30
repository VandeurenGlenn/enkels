import { i, x, e, s, a as i$1, L as LittlePubSub, _ as __esDecorate$2, b as __runInitializers$2 } from './custom-element-DcT8CkwG.js';
import { t } from './query-BqWrjd_U.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __esDecorate$1(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers$1(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(() => {
    let _classDecorators = [e('custom-elevation')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _level_decorators;
    let _level_initializers = [];
    let _level_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _level_decorators = [i({ type: Number, renders: false })];
            __esDecorate$1(this, null, _level_decorators, { kind: "accessor", name: "level", static: false, private: false, access: { has: obj => "level" in obj, get: obj => obj.level, set: (obj, value) => { obj.level = value; } }, metadata: _metadata }, _level_initializers, _level_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
        #level_accessor_storage = __runInitializers$1(this, _level_initializers, void 0);
        get level() { return this.#level_accessor_storage; }
        set level(value) { this.#level_accessor_storage = value; }
        onChange(propertyKey, value) {
            if (propertyKey === 'level')
                this.style.setProperty('--md-elevation-level', String(value));
        }
        render() {
            return x `
      <style>
        :host {
          --_level: var(--md-elevation-level, 0);
          --_shadow-color: var(--md-sys-color-shadow);
          display: flex;
          pointer-events: none;
        }

        :host,
        .shadow,
        .shadow::before,
        .shadow::after {
          border-radius: inherit;
          inset: 0;
          position: absolute;
          transition-duration: inherit;
          transition-timing-function: inherit;
        }

        .shadow::before,
        .shadow::after {
          content: '';
          transition-property: box-shadow, opacity;
        }

        .shadow::before {
          box-shadow: 0px
            calc(
              1px * (clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 3, 1) + 2 * clamp(0, var(--_level) - 4, 1))
            )
            calc(
              1px * (2 * clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 2, 1) + clamp(0, var(--_level) - 4, 1))
            )
            0px var(--_shadow-color);
          opacity: 0.3;
        }

        .shadow::after {
          box-shadow: 0px
            calc(
              1px * (clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 1, 1) + 2 * clamp(0, var(--_level) - 2, 3))
            )
            calc(1px * (3 * clamp(0, var(--_level), 2) + 2 * clamp(0, var(--_level) - 2, 3)))
            calc(1px * (clamp(0, var(--_level), 4) + 2 * clamp(0, var(--_level) - 4, 1))) var(--_shadow-color);
          opacity: 0.15;
        }
      </style>

      <span class="shadow"></span>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$1(this, _level_extraInitializers);
        }
    });
    return _classThis;
})();

(() => {
    let _classDecorators = [e('custom-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _hasIcon_decorators;
    let _hasIcon_initializers = [];
    let _hasIcon_extraInitializers = [];
    let _hasLabel_decorators;
    let _hasLabel_initializers = [];
    let _hasLabel_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _label_decorators;
    let _label_initializers = [];
    let _label_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _hasIcon_decorators = [i({ attribute: 'has-icon', reflect: true })];
            _hasLabel_decorators = [i({ attribute: 'has-label', reflect: true })];
            _type_decorators = [i({ attribute: 'type', reflect: true })];
            _label_decorators = [i({ attribute: true })];
            __esDecorate$1(this, null, _hasIcon_decorators, { kind: "accessor", name: "hasIcon", static: false, private: false, access: { has: obj => "hasIcon" in obj, get: obj => obj.hasIcon, set: (obj, value) => { obj.hasIcon = value; } }, metadata: _metadata }, _hasIcon_initializers, _hasIcon_extraInitializers);
            __esDecorate$1(this, null, _hasLabel_decorators, { kind: "accessor", name: "hasLabel", static: false, private: false, access: { has: obj => "hasLabel" in obj, get: obj => obj.hasLabel, set: (obj, value) => { obj.hasLabel = value; } }, metadata: _metadata }, _hasLabel_initializers, _hasLabel_extraInitializers);
            __esDecorate$1(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate$1(this, null, _label_decorators, { kind: "accessor", name: "label", static: false, private: false, access: { has: obj => "label" in obj, get: obj => obj.label, set: (obj, value) => { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #hasIcon_accessor_storage = __runInitializers$1(this, _hasIcon_initializers, void 0);
        get hasIcon() { return this.#hasIcon_accessor_storage; }
        set hasIcon(value) { this.#hasIcon_accessor_storage = value; }
        #hasLabel_accessor_storage = (__runInitializers$1(this, _hasIcon_extraInitializers), __runInitializers$1(this, _hasLabel_initializers, void 0));
        get hasLabel() { return this.#hasLabel_accessor_storage; }
        set hasLabel(value) { this.#hasLabel_accessor_storage = value; }
        #type_accessor_storage = (__runInitializers$1(this, _hasLabel_extraInitializers), __runInitializers$1(this, _type_initializers, 'text'));
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #label_accessor_storage = (__runInitializers$1(this, _type_extraInitializers), __runInitializers$1(this, _label_initializers, void 0));
        get label() { return this.#label_accessor_storage; }
        set label(value) { this.#label_accessor_storage = value; }
        static styles = [
            i$1 `
      :host {
        color: var(--custom-button-color, --md-sys-color-on-background);
        display: flex;

        height: 40px;
        border-radius: 20px;
        position: relative;
        pointer-events: auto;
        cursor: pointer;

        --elevation-level: 0;
      }

      button {
        box-sizing: border-box;
        border: none;
        background: transparent;
        color: inherit;
        align-items: center;
        justify-content: center;
        user-select: none;
        outline: none;
        cursor: pointer;
        border-radius: inherit;
        padding: none;
        width: inherit;
        height: inherit;
        display: flex;
        pointer-events: none;
      }

      .label,
      ::slotted(*) {
        font-family: var(--md-sys-typescale-label-large-font-family-name);
        font-style: var(--md-sys-typescale-label-large-font-family-style);
        font-weight: var(--md-sys-typescale-label-large-font-weight);
        font-size: var(--md-sys-typescale-label-large-font-size);
        letter-spacing: var(--md-sys-typescale-label-large-tracking);
        line-height: var(--md-sys-typescale-label-large-height);
        text-transform: var(--md-sys-typescale-label-large-text-transform);
        text-decoration: var(--md-sys-typescale-label-large-text-decoration);
      }

      :host([type='filled']),
      :host([type='filled']) ::slotted(*) {
        color: var(--md-sys-color-on-primary);
        fill: var(--md-sys-color-on-primary);
        background: var(--md-sys-color-primary);
      }

      :host([type='outlined']),
      :host([type='outlined']) ::slotted(*) {
        color: var(--md-sys-color-on-surface);
        fill: var(--md-sys-color-on-surface);
        background: var(--md-sys-color-surface);
        border: solid 1px;
        border-color: var(--md-sys-color-outline);
      }

      :host([type='elevated']),
      :host([type='elevated']) ::slotted(*) {
        color: var(--md-sys-color-primary);
        fill: var(--md-sys-color-primary);
        background: var(--md-sys-color-surface-container-low);
      }

      :host([type='tertiary']),
      :host([type='tertiary']) ::slotted(*) {
        background: var(--md-sys-color-tertiary);
        color: var(--md-sys-color-on-tertiary);
        fill: var(--md-sys-color-on-tertiary);
      }

      :host([type='tonal']),
      :host([type='tonal']) ::slotted(*) {
        background: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-seconday-container);
        fill: var(--md-sys-color-on-seconday-container);
      }

      custom-elevation {
        --md-elevation-level: var(--elevation-level);
      }

      :host([type='elevated']) custom-elevation {
        --elevation-level: 1;
      }

      :host([type='filled']),
      :host([type='outlined']),
      :host([type='text']),
      :host([type='tonal']) {
        --elevation-level: 0;
      }

      :host([has-label]) .label {
        padding-left: 24px;
        padding-right: 24px;
      }

      :host([has-icon]:not([has-label])) {
        border-radius: 50%;
        width: 40px;
        align-items: center;
        justify-content: center;
      }

      :host([has-icon][has-label]) .label {
        padding-left: 8px;
        padding-right: 24px;
      }
      :host([has-icon][has-label]) slot[name='icon']::slotted(*) {
        padding-left: 16px;
      }

      :host([disabled]) .label,
      :host([disabled]) slot[name='icon']::slotted(*) {
        opacity: 0.38;
      }

      ::slotted(*) {
        pointer-events: none;
      }

      :host(:focus),
      :host(:hover) {
        --elevation-level: 2;
      }

      :host(:active) {
        --elevation-level: 0;
      }

      button * {
        pointer-events: none;
      }
    `
        ];
        connectedCallback() {
            const slots = Array.from(this.shadowRoot.querySelectorAll('slot'));
            for (const slot of slots) {
                slot.addEventListener('slotchange', () => this.#slotchange(slot));
            }
            this.#slotchange(slots[0]);
        }
        onChange(propertyKey, value) {
            if (propertyKey === 'label') {
                if (value)
                    this.hasLabel = true;
                else
                    this.hasLabel = false;
            }
        }
        #slotchange = (__runInitializers$1(this, _label_extraInitializers), (slot) => {
            if (slot.getAttribute('name') === 'icon') {
                this.hasIcon = Array.from(slot?.assignedNodes() || []).length !== 0;
            }
        });
        render() {
            return x `
      <button label=${this.label}>
        <custom-elevation></custom-elevation>
        <slot name="icon"></slot>
        <span class="label">${this.label}</span>
      </button>
    `;
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

globalThis.pubsub = globalThis.pubsub || new LittlePubSub(true);
(() => {
    let _classDecorators = [e('custom-icon')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _icon_decorators;
    let _icon_initializers = [];
    let _icon_extraInitializers = [];
    let _setName_decorators;
    let _setName_initializers = [];
    let _setName_extraInitializers = [];
    let __icon_decorators;
    let __icon_initializers = [];
    let __icon_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [i()];
            _icon_decorators = [i({ attribute: 'icon' })];
            _setName_decorators = [i()];
            __icon_decorators = [i()];
            __esDecorate$1(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate$1(this, null, _icon_decorators, { kind: "accessor", name: "icon", static: false, private: false, access: { has: obj => "icon" in obj, get: obj => obj.icon, set: (obj, value) => { obj.icon = value; } }, metadata: _metadata }, _icon_initializers, _icon_extraInitializers);
            __esDecorate$1(this, null, _setName_decorators, { kind: "accessor", name: "setName", static: false, private: false, access: { has: obj => "setName" in obj, get: obj => obj.setName, set: (obj, value) => { obj.setName = value; } }, metadata: _metadata }, _setName_initializers, _setName_extraInitializers);
            __esDecorate$1(this, null, __icon_decorators, { kind: "accessor", name: "_icon", static: false, private: false, access: { has: obj => "_icon" in obj, get: obj => obj._icon, set: (obj, value) => { obj._icon = value; } }, metadata: _metadata }, __icon_initializers, __icon_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #host_accessor_storage = __runInitializers$1(this, _host_initializers, void 0);
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #icon_accessor_storage = (__runInitializers$1(this, _host_extraInitializers), __runInitializers$1(this, _icon_initializers, this.innerHTML));
        get icon() { return this.#icon_accessor_storage; }
        set icon(value) { this.#icon_accessor_storage = value; }
        #setName_accessor_storage = (__runInitializers$1(this, _icon_extraInitializers), __runInitializers$1(this, _setName_initializers, void 0));
        get setName() { return this.#setName_accessor_storage; }
        set setName(value) { this.#setName_accessor_storage = value; }
        #_icon_accessor_storage = (__runInitializers$1(this, _setName_extraInitializers), __runInitializers$1(this, __icon_initializers, void 0));
        get _icon() { return this.#_icon_accessor_storage; }
        set _icon(value) { this.#_icon_accessor_storage = value; }
        onChange(propertyKey, value) {
            if (propertyKey === 'setName') {
                this.host = globalThis.pubsub.subscribers[`custom-icon-set-${value}-connected`]?.value;
                if (!this.host) {
                    globalThis.pubsub.subscribe(`custom-icon-set-${value}-connected`, (host) => {
                        if (host) {
                            this.host = host;
                        }
                    });
                }
            }
            if (propertyKey === 'icon' || propertyKey === 'host') {
                if (this.host && this.icon)
                    this._icon = this.host.getIcon(this.icon);
            }
        }
        static styles = [
            i$1 `
      :host {
        --__custom-icon-size: var(--custom-icon-size, 24px);
        --custom-icon-color: var(--md-sys-color-on-surface);
        display: flex;
        height: var(--custom-icon-size, 24px);
        width: var(--custom-icon-size, 24px);
      }

      svg {
        fill: var(--custom-icon-color);
        height: inherit;
        width: inherit;
        pointer-events: none;
      }
    `
        ];
        connectedCallback() {
            this.setName = this.getAttribute('set-name') || 'icons';
        }
        render() {
            return x ` ${this._icon} `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$1(this, __icon_extraInitializers);
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

(() => {
    let _classDecorators = [e('custom-pane')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _open_decorators;
    let _open_initializers = [];
    let _open_extraInitializers = [];
    let _mobile_decorators;
    let _mobile_initializers = [];
    let _mobile_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _left_decorators;
    let _left_initializers = [];
    let _left_extraInitializers = [];
    let _right_decorators;
    let _right_initializers = [];
    let _right_extraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _open_decorators = [i({ type: Boolean, reflect: true })];
            _mobile_decorators = [i({ type: Boolean, reflect: true })];
            _type_decorators = [i({ type: String, reflect: true })];
            _left_decorators = [i({ type: Boolean, reflect: true })];
            _right_decorators = [i({ type: Boolean, reflect: true })];
            _id_decorators = [i({ type: String })];
            __esDecorate$1(this, null, _open_decorators, { kind: "accessor", name: "open", static: false, private: false, access: { has: obj => "open" in obj, get: obj => obj.open, set: (obj, value) => { obj.open = value; } }, metadata: _metadata }, _open_initializers, _open_extraInitializers);
            __esDecorate$1(this, null, _mobile_decorators, { kind: "accessor", name: "mobile", static: false, private: false, access: { has: obj => "mobile" in obj, get: obj => obj.mobile, set: (obj, value) => { obj.mobile = value; } }, metadata: _metadata }, _mobile_initializers, _mobile_extraInitializers);
            __esDecorate$1(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate$1(this, null, _left_decorators, { kind: "accessor", name: "left", static: false, private: false, access: { has: obj => "left" in obj, get: obj => obj.left, set: (obj, value) => { obj.left = value; } }, metadata: _metadata }, _left_initializers, _left_extraInitializers);
            __esDecorate$1(this, null, _right_decorators, { kind: "accessor", name: "right", static: false, private: false, access: { has: obj => "right" in obj, get: obj => obj.right, set: (obj, value) => { obj.right = value; } }, metadata: _metadata }, _right_initializers, _right_extraInitializers);
            __esDecorate$1(this, null, _id_decorators, { kind: "accessor", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
        #open_accessor_storage = __runInitializers$1(this, _open_initializers, false);
        get open() { return this.#open_accessor_storage; }
        set open(value) { this.#open_accessor_storage = value; }
        #mobile_accessor_storage = (__runInitializers$1(this, _open_extraInitializers), __runInitializers$1(this, _mobile_initializers, false));
        get mobile() { return this.#mobile_accessor_storage; }
        set mobile(value) { this.#mobile_accessor_storage = value; }
        #type_accessor_storage = (__runInitializers$1(this, _mobile_extraInitializers), __runInitializers$1(this, _type_initializers, void 0));
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #left_accessor_storage = (__runInitializers$1(this, _type_extraInitializers), __runInitializers$1(this, _left_initializers, true));
        get left() { return this.#left_accessor_storage; }
        set left(value) { this.#left_accessor_storage = value; }
        #right_accessor_storage = (__runInitializers$1(this, _left_extraInitializers), __runInitializers$1(this, _right_initializers, false));
        get right() { return this.#right_accessor_storage; }
        set right(value) { this.#right_accessor_storage = value; }
        #id_accessor_storage = (__runInitializers$1(this, _right_extraInitializers), __runInitializers$1(this, _id_initializers, void 0));
        get id() { return this.#id_accessor_storage; }
        set id(value) { this.#id_accessor_storage = value; }
        closePane(event) {
            event.stopPropagation();
            this.open = false;
            document.dispatchEvent(new CustomEvent(`custom-pane-close`, { detail: this.id || `${this.left ? 'left' : 'right'}` }));
        }
        render() {
            return x `<style>
        :host {
          --custom-pane-width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--md-sys-color-surface);
          color: var(--md-sys-color-on-surface);
          position: relative;
          /* border-radius: 12px; */

          --md-elevation-level: 0;

          pointer-events: none;
          opacity: 0;
          width: 100%;
          max-width: var(--custom-pane-width);
          transition: var(--md-sys-motion-easing-emphasized-accelerate) 200ms opacity,
            var(--md-sys-motion-easing-emphasized-accelerate) 200ms transform;
        }

        :host([left]) {
          border-radius: var(--md-sys-shape-corner-large-end);
          transform: translateX(-100%);
          z-index: 1002;
        }

        :host([right]) {
          border-radius: var(--md-sys-shape-corner-large-start);
          transform: translateX(100%);
          z-index: 1001;
        }

        :host([mobile]) {
          inset: 0;
          position: fixed;
          z-index: 1001;
        }

        :host([type='modal']) {
          --md-elevation-level: 1;
        }

        :host([open]) {
          transform: translateX(0);
          opacity: 1;
          pointer-events: auto;
          transition: var(--md-sys-motion-easing-emphasized-decelerate) 500ms opacity,
            var(--md-sys-motion-easing-emphasized-decelerate) 500ms transform;
        }

        :host([open]) {
          position: relative;
        }

        :host([open][mobile]) {
          position: fixed;
        }

        aside {
          width: 100%;
          height: 100%;
        }

        .content {
          height: 100%;
          width: 100%;
          overflow-y: auto;
        }

        .footer {
          height: 54px;
        }

        :host([right]) custom-button {
          transform: rotateZ(180deg);
        }
      </style>
      <custom-elevation></custom-elevation>
      <aside>
        <slot name="header">
          <flex-row center>
            <slot name="headline"></slot>
            <flex-it></flex-it>
            <custom-button @click=${(e) => this.closePane(e)} .id=${this.id}>
              <custom-icon slot="icon">menu_open</custom-icon>
            </custom-button>
          </flex-row>
        </slot>
        <flex-column class="content">
          <slot name="content"></slot>
        </flex-column>
        <flex-row class="footer">
          <slot name="footer"></slot>
        </flex-row>
      </aside> `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$1(this, _id_extraInitializers);
        }
    });
    return _classThis;
})();

(() => {
    let _classDecorators = [e('custom-drawer')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _open_decorators;
    let _open_initializers = [];
    let _open_extraInitializers = [];
    let _mobile_decorators;
    let _mobile_initializers = [];
    let _mobile_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _right_decorators;
    let _right_initializers = [];
    let _right_extraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _open_decorators = [i({ type: Boolean, reflect: true })];
            _mobile_decorators = [i({ type: Boolean, reflect: true })];
            _type_decorators = [i({ type: String, reflect: true })];
            _right_decorators = [i({ type: Boolean })];
            _id_decorators = [i({ type: String })];
            __esDecorate$1(this, null, _open_decorators, { kind: "accessor", name: "open", static: false, private: false, access: { has: obj => "open" in obj, get: obj => obj.open, set: (obj, value) => { obj.open = value; } }, metadata: _metadata }, _open_initializers, _open_extraInitializers);
            __esDecorate$1(this, null, _mobile_decorators, { kind: "accessor", name: "mobile", static: false, private: false, access: { has: obj => "mobile" in obj, get: obj => obj.mobile, set: (obj, value) => { obj.mobile = value; } }, metadata: _metadata }, _mobile_initializers, _mobile_extraInitializers);
            __esDecorate$1(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate$1(this, null, _right_decorators, { kind: "accessor", name: "right", static: false, private: false, access: { has: obj => "right" in obj, get: obj => obj.right, set: (obj, value) => { obj.right = value; } }, metadata: _metadata }, _right_initializers, _right_extraInitializers);
            __esDecorate$1(this, null, _id_decorators, { kind: "accessor", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
        #open_accessor_storage = __runInitializers$1(this, _open_initializers, void 0);
        get open() { return this.#open_accessor_storage; }
        set open(value) { this.#open_accessor_storage = value; }
        #mobile_accessor_storage = (__runInitializers$1(this, _open_extraInitializers), __runInitializers$1(this, _mobile_initializers, void 0));
        get mobile() { return this.#mobile_accessor_storage; }
        set mobile(value) { this.#mobile_accessor_storage = value; }
        #type_accessor_storage = (__runInitializers$1(this, _mobile_extraInitializers), __runInitializers$1(this, _type_initializers, void 0));
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #right_accessor_storage = (__runInitializers$1(this, _type_extraInitializers), __runInitializers$1(this, _right_initializers, void 0));
        get right() { return this.#right_accessor_storage; }
        set right(value) { this.#right_accessor_storage = value; }
        #id_accessor_storage = (__runInitializers$1(this, _right_extraInitializers), __runInitializers$1(this, _id_initializers, void 0));
        get id() { return this.#id_accessor_storage; }
        set id(value) { this.#id_accessor_storage = value; }
        connectedCallback() {
            document.addEventListener('custom-pane-close', ({ detail }) => {
                if (this.id === detail)
                    this.open = false;
            });
            document.addEventListener('custom-pane-open', ({ detail }) => {
                if (this.id === detail)
                    this.open = true;
            });
        }
        render() {
            return x `<style>
        :host {
          display: contents;
        }

        custom-pane {
          box-sizing: border-box;
          padding: 12px 24px;
          height: 100%;
          --custom-pane-width: var(--custom-drawer-with, 320px);
        }

        slot[name='headline']::slotted(*) {
          color: var(--md-sys-color-on-surface-variant);
          font-family: var(--md-sys-typescale-title-small-font-family-name);
          font-style: var(--md-sys-typescale-title-small-font-family-style);
          font-weight: var(--md-sys-typescale-title-small-font-weight);
          font-size: var(--md-sys-typescale-title-small-font-size);
          letter-spacing: var(--md-sys-typescale-title-small-tracking);
          line-height: var(--md-sys-typescale-title-small-height);
          text-transform: var(--md-sys-typescale-title-small-text-transform);
          text-decoration: var(--md-sys-typescale-title-small-text-decoration);
          text-transform: capitalize;
          margin: 0;
        }

        ::slotted([slot='footer']) {
          display: block;
          box-sizing: border-box;
          min-height: 48px;
          border-top: 1px solid rgba(0, 0, 0, 0.14);
        }

        ::slotted([slot='content']) {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          overflow-y: auto;
        }

        ::slotted(*) {
          pointer-events: none;
        }

        aside {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      </style>

      <custom-pane .open=${this.open} .mobile=${this.mobile} .type=${this.type} .id=${this.id}>
        <slot name="headline" slot="headline"></slot>
        <slot name="menu-button" slot="menu-button"></slot>
        <slot name="content" slot="content"></slot>
        <slot name="footer" slot="footer"></slot>
      </custom-pane> `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$1(this, _id_extraInitializers);
        }
    });
    return _classThis;
})();

(() => {
    let _classDecorators = [e('custom-drawer-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _mobile_decorators;
    let _mobile_initializers = [];
    let _mobile_extraInitializers = [];
    let _drawerOpen_decorators;
    let _drawerOpen_initializers = [];
    let _drawerOpen_extraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _mobile_decorators = [i({ type: Boolean, reflect: true })];
            _drawerOpen_decorators = [i({ type: Boolean, reflect: true, attribute: 'drawer-open' })];
            _id_decorators = [i()];
            __esDecorate$1(this, null, _mobile_decorators, { kind: "accessor", name: "mobile", static: false, private: false, access: { has: obj => "mobile" in obj, get: obj => obj.mobile, set: (obj, value) => { obj.mobile = value; } }, metadata: _metadata }, _mobile_initializers, _mobile_extraInitializers);
            __esDecorate$1(this, null, _drawerOpen_decorators, { kind: "accessor", name: "drawerOpen", static: false, private: false, access: { has: obj => "drawerOpen" in obj, get: obj => obj.drawerOpen, set: (obj, value) => { obj.drawerOpen = value; } }, metadata: _metadata }, _drawerOpen_initializers, _drawerOpen_extraInitializers);
            __esDecorate$1(this, null, _id_decorators, { kind: "accessor", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #mobile_accessor_storage = __runInitializers$1(this, _mobile_initializers, false);
        get mobile() { return this.#mobile_accessor_storage; }
        set mobile(value) { this.#mobile_accessor_storage = value; }
        #drawerOpen_accessor_storage = (__runInitializers$1(this, _mobile_extraInitializers), __runInitializers$1(this, _drawerOpen_initializers, void 0));
        get drawerOpen() { return this.#drawerOpen_accessor_storage; }
        set drawerOpen(value) { this.#drawerOpen_accessor_storage = value; }
        #id_accessor_storage = (__runInitializers$1(this, _drawerOpen_extraInitializers), __runInitializers$1(this, _id_initializers, void 0));
        get id() { return this.#id_accessor_storage; }
        set id(value) { this.#id_accessor_storage = value; }
        openPane() {
            document.dispatchEvent(new CustomEvent('custom-pane-open', { detail: this.id }));
        }
        static styles = [
            i$1 `
      :host {
        display: block;
        opacity: 1;
        pointer-events: auto;
        will-change: width, opacity;
      }

      :host([drawer-open]) {
        opacity: 0;
        pointer-events: none;
        width: 0;
      }
    `
        ];
        render() {
            return x `
      <custom-button @click=${() => this.openPane()}>
        <custom-icon slot="icon">menu</custom-icon>
      </custom-button>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$1(this, _id_extraInitializers);
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

(() => {
    let _classDecorators = [e('custom-drawer-item')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static styles = [
            i$1 `
      :host {
        display: flex;
        padding-left: 16px;
        padding-right: 24px;
        height: 100%;
        min-height: 54px;
        max-height: 54px;
        width: 100%;
        box-sizing: border-box;
        border-radius: var(--md-sys-shape-corner-extra-large);
        align-items: center;
        pointer-events: auto;
        cursor: pointer;
      }

      slot {
        pointer-events: none;
      }

      slot[name='icon']::slotted(*) {
        margin-right: 12px;
        height: 24px;
        width: 24px;
      }

      slot[name='end']::slotted(*) {
        margin-left: 12px;
        box-sizing: border-box;
      }

      :host([non-interactive]) {
        pointer-events: none;
      }
    `
        ];
        render() {
            return x `
      <slot name="icon"></slot>
      <slot></slot>
      <slot name="end"></slot>
    `;
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

/**
 * @module `@vandeurenglenn/flex-elements/it.js`
 * @class FlexIt
 * @extends HTMLElement
 *
 * @example html`
 <flex-it flex="1"></flex-it>
 <flex-it flex="3"></flex-it>
 ...

 * @cssProperties
 * `--flex-it-max-width` (auto)
 *
 * `--flex-it-min-width` (auto)
 *
 * `--flex-it-width` (100%)
 */
class FlexIt extends HTMLElement {
    static get observedAttributes() { return ['flex', 'min-width', 'max-width', 'width']; }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.maxWidth = this.getAttribute('max-width') || 'auto';
        this.minWidth = this.getAttribute('min-width') || 'auto';
        this.width = this.getAttribute('width') || '100%';
        this.flex = this.getAttribute('flex') || '1';
        this.shadowRoot.innerHTML = this.template;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        oldValue !== newValue &&
            this.style.setProperty(`--flex-it-${name}`, newValue);
    }
    set minWidth(value) {
        value !== this.minWidth && this.setAttribute('min-width', value);
    }
    set maxWidth(value) {
        value !== this.maxWidth && this.setAttribute('max-width', value);
    }
    set width(value) {
        value !== this.width && this.setAttribute('width', value);
    }
    set flex(value) {
        value !== this.flex && this.setAttribute('flex', value);
    }
    get minWidth() {
        return this.getAttribute('min-width');
    }
    get maxWidth() {
        return this.getAttribute('max-width');
    }
    get width() {
        return this.getAttribute('width');
    }
    get flex() {
        return this.getAttribute('flex');
    }
    get template() {
        return `<style>
      :host {
        --flex-it-pointer-events: none;
        --flex-it-user-select: none;

        flex: var(--flex-it-flex, ${this.flex});
        max-width: var(--flex-it-max-width, ${this.maxWidth});
        min-width: var(--flex-it-min-width, ${this.minWidth});
        width: var(--flex-it-width, ${this.width});
        pointer-events: var(--flex-it-pointer-events);
        user-select: var(--flex-it-user-select);
      }
    </style>
    <slot></slot>
    `;
    }
}
customElements.define('flex-it', FlexIt);

var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
/**
 * @module @vandeurenglenn/flex-elements/display.js
 * @class FlexDisplay
 * @extends HTMLElement
 *
 * @example html`
 <flex-display direction="column"></flex-display>
 <flex-display></flex-display>
 ...

 * @cssProperties
 * `--flex-display-direction` (row)
 *
 * `--flex-display-max-width` (auto)
 *
 * `--flex-display-min-width` (auto)
 *
 * `--flex-display-width` (100%)
 *
 * `--flex-display-padding` (0)
 *
 * `--flex-display-align-items` (flex-start)
 *
 * `--flex-display-justify-content` (flex-start)
 *
 * `--flex-display-box-sizing` (border-box)
 */
let FlexDisplay = (() => {
    let _classSuper = s;
    let _instanceExtraInitializers = [];
    let _padding_decorators;
    let _padding_initializers = [];
    let _minWidth_decorators;
    let _minWidth_initializers = [];
    let _maxWidth_decorators;
    let _maxWidth_initializers = [];
    let _width_decorators;
    let _width_initializers = [];
    let _direction_decorators;
    let _direction_initializers = [];
    let _center_decorators;
    let _center_initializers = [];
    let _centerCenter_decorators;
    let _centerCenter_initializers = [];
    let _justifyContent_decorators;
    let _justifyContent_initializers = [];
    let _alignItems_decorators;
    let _alignItems_initializers = [];
    let _boxSizing_decorators;
    let _boxSizing_initializers = [];
    return class FlexDisplay extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _padding_decorators = [i({ type: String })];
            _minWidth_decorators = [i({ type: String })];
            _maxWidth_decorators = [i({ type: String })];
            _width_decorators = [i({ type: String })];
            _direction_decorators = [i({ type: String, reflect: true })];
            _center_decorators = [i({ type: Boolean, reflect: true })];
            _centerCenter_decorators = [i({ type: Boolean, reflect: true, attribute: 'center-center' })];
            _justifyContent_decorators = [i({ type: String })];
            _alignItems_decorators = [i({ type: String })];
            _boxSizing_decorators = [i({ type: String })];
            __esDecorate(this, null, _padding_decorators, { kind: "accessor", name: "padding", static: false, private: false, access: { has: obj => "padding" in obj, get: obj => obj.padding, set: (obj, value) => { obj.padding = value; } }, metadata: _metadata }, _padding_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _minWidth_decorators, { kind: "accessor", name: "minWidth", static: false, private: false, access: { has: obj => "minWidth" in obj, get: obj => obj.minWidth, set: (obj, value) => { obj.minWidth = value; } }, metadata: _metadata }, _minWidth_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _maxWidth_decorators, { kind: "accessor", name: "maxWidth", static: false, private: false, access: { has: obj => "maxWidth" in obj, get: obj => obj.maxWidth, set: (obj, value) => { obj.maxWidth = value; } }, metadata: _metadata }, _maxWidth_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _width_decorators, { kind: "accessor", name: "width", static: false, private: false, access: { has: obj => "width" in obj, get: obj => obj.width, set: (obj, value) => { obj.width = value; } }, metadata: _metadata }, _width_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _direction_decorators, { kind: "accessor", name: "direction", static: false, private: false, access: { has: obj => "direction" in obj, get: obj => obj.direction, set: (obj, value) => { obj.direction = value; } }, metadata: _metadata }, _direction_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _center_decorators, { kind: "accessor", name: "center", static: false, private: false, access: { has: obj => "center" in obj, get: obj => obj.center, set: (obj, value) => { obj.center = value; } }, metadata: _metadata }, _center_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _centerCenter_decorators, { kind: "accessor", name: "centerCenter", static: false, private: false, access: { has: obj => "centerCenter" in obj, get: obj => obj.centerCenter, set: (obj, value) => { obj.centerCenter = value; } }, metadata: _metadata }, _centerCenter_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _justifyContent_decorators, { kind: "accessor", name: "justifyContent", static: false, private: false, access: { has: obj => "justifyContent" in obj, get: obj => obj.justifyContent, set: (obj, value) => { obj.justifyContent = value; } }, metadata: _metadata }, _justifyContent_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _alignItems_decorators, { kind: "accessor", name: "alignItems", static: false, private: false, access: { has: obj => "alignItems" in obj, get: obj => obj.alignItems, set: (obj, value) => { obj.alignItems = value; } }, metadata: _metadata }, _alignItems_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _boxSizing_decorators, { kind: "accessor", name: "boxSizing", static: false, private: false, access: { has: obj => "boxSizing" in obj, get: obj => obj.boxSizing, set: (obj, value) => { obj.boxSizing = value; } }, metadata: _metadata }, _boxSizing_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #padding_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _padding_initializers, '0'));
        get padding() { return this.#padding_accessor_storage; }
        set padding(value) { this.#padding_accessor_storage = value; }
        #minWidth_accessor_storage = __runInitializers(this, _minWidth_initializers, 'auto');
        get minWidth() { return this.#minWidth_accessor_storage; }
        set minWidth(value) { this.#minWidth_accessor_storage = value; }
        #maxWidth_accessor_storage = __runInitializers(this, _maxWidth_initializers, 'auto');
        get maxWidth() { return this.#maxWidth_accessor_storage; }
        set maxWidth(value) { this.#maxWidth_accessor_storage = value; }
        #width_accessor_storage = __runInitializers(this, _width_initializers, '100%');
        get width() { return this.#width_accessor_storage; }
        set width(value) { this.#width_accessor_storage = value; }
        #direction_accessor_storage = __runInitializers(this, _direction_initializers, 'row');
        get direction() { return this.#direction_accessor_storage; }
        set direction(value) { this.#direction_accessor_storage = value; }
        #center_accessor_storage = __runInitializers(this, _center_initializers, void 0);
        get center() { return this.#center_accessor_storage; }
        set center(value) { this.#center_accessor_storage = value; }
        #centerCenter_accessor_storage = __runInitializers(this, _centerCenter_initializers, void 0);
        get centerCenter() { return this.#centerCenter_accessor_storage; }
        set centerCenter(value) { this.#centerCenter_accessor_storage = value; }
        #justifyContent_accessor_storage = __runInitializers(this, _justifyContent_initializers, 'flex-start');
        get justifyContent() { return this.#justifyContent_accessor_storage; }
        set justifyContent(value) { this.#justifyContent_accessor_storage = value; }
        #alignItems_accessor_storage = __runInitializers(this, _alignItems_initializers, 'flex-start');
        get alignItems() { return this.#alignItems_accessor_storage; }
        set alignItems(value) { this.#alignItems_accessor_storage = value; }
        #boxSizing_accessor_storage = __runInitializers(this, _boxSizing_initializers, 'border-box');
        get boxSizing() { return this.#boxSizing_accessor_storage; }
        set boxSizing(value) { this.#boxSizing_accessor_storage = value; }
        render() {
            return x `
      <style>
        :host {
          display: flex;
          box-sizing: var(--flex-display-box-sizing, ${this.boxSizing});
          max-width: var(--flex-display-max-width, ${this.maxWidth});
          min-width: var(--flex-display-min-width, ${this.minWidth});
          width: var(--flex-display-width, ${this.width});
          flex-direction: var(--flex-display-direction, ${this.direction});
          justify-content: var(
            --flex-display-justify-content,
            ${this.justifyContent}
          );
          align-items: var(--flex-display-align-items, ${this.alignItems});
          padding: var(--flex-display-padding, ${this.padding});
        }

        :host([center]) {
          align-items: center;
        }

        :host([center-center]) {
          align-items: center;
          justify-content: center;
        }
      </style>
      <slot></slot>
    `;
        }
    };
})();

class FlexRow extends FlexDisplay {
    constructor() {
        super();
        this.direction = 'row';
        this.width = 'auto';
    }
}
customElements.define('flex-row', FlexRow);

(() => {
    let _classDecorators = [e('custom-top-app-bar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _scrolling_decorators;
    let _scrolling_initializers = [];
    let _scrolling_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _type_decorators = [i({ type: String, reflect: true })];
            _scrolling_decorators = [i({ type: Boolean, reflect: true })];
            __esDecorate$1(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate$1(this, null, _scrolling_decorators, { kind: "accessor", name: "scrolling", static: false, private: false, access: { has: obj => "scrolling" in obj, get: obj => obj.scrolling, set: (obj, value) => { obj.scrolling = value; } }, metadata: _metadata }, _scrolling_initializers, _scrolling_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #type_accessor_storage = __runInitializers$1(this, _type_initializers, 'center-aligned');
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #scrolling_accessor_storage = (__runInitializers$1(this, _type_extraInitializers), __runInitializers$1(this, _scrolling_initializers, void 0));
        get scrolling() { return this.#scrolling_accessor_storage; }
        set scrolling(value) { this.#scrolling_accessor_storage = value; }
        static styles = [
            i$1 `
      :host {
        display: flex;
        flex-direction: column;
        width: calc(100% - 2px);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        box-sizing: border-box;
      }

      .container {
        padding: 20px 12px 24px 12px;
        box-sizing: border-box;
        position: relative;
        height: 64px;
      }

      :host([type='center-aligned']) .container,
      :host([type='small']) .container {
        justify-content: center;
      }

      :host(:not([type='center-aligned'])) ::slotted([name='title']) {
        padding-left: 16px;
      }

      :host(:not([type='large'])) ::slotted([name='title']) {
        padding-bottom: 28px;
      }

      :host([type='medium']) .container {
        height: 112px;
      }
      :host([type='large']) .container {
        height: 152px;
      }

      :host([type='center-aligned']) slot[name='title']::slotted(*) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      :host(:not([type='center-aligned'])) slot[name='title']::slotted(*) {
        padding-left: 6px;
      }

      :host([scrolling]) {
        --md-elevation-level: 2;
        padding: 0 16px;
      }

      flex-row {
        width: 100%;
        align-items: center;
      }

      custom-elevation {
        border-radius: var(--md-sys-shape-corner-large);
      }
    `
        ];
        connectedCallback() {
            document.addEventListener('custom-scroll', ({ detail }) => {
                this.scrolling = detail.scrolling;
            });
        }
        render() {
            return x `
      <flex-column class="container">
        <custom-elevation></custom-elevation>
        <flex-row>
          <slot name="start"></slot>
          ${this.type === 'center-aligned' || this.type === 'small'
                ? x `
                <custom-typography>
                  <slot name="title"></slot>
                </custom-typography>
              `
                : ''}
          <flex-it></flex-it>
          <slot name="end"></slot>
        </flex-row>
        ${this.type === 'medium' || this.type === 'large'
                ? x `
              <flex-it></flex-it>
              <custom-typography type="headline" size="small">
                <slot name="title"></slot>
              </custom-typography>
            `
                : ''}
      </flex-column>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$1(this, _scrolling_extraInitializers);
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

/**
 * @module `@vandeurenglenn/flex-elements/column.js`
 * @class FlexColumn
 * @extends FlexDisplay
 *
 * @example html`
 <flex-column></flex-column>
 ...

 * @cssProperties
 * `--flex-display-direction` (row)
 *
 * `--flex-display-max-width` (auto)
 *
 * `--flex-display-min-width` (auto)
 *
 * `--flex-display-width` (100%)
 */
class FlexColumn extends FlexDisplay {
    constructor() {
        super();
        this.direction = 'column';
    }
}
customElements.define('flex-column', FlexColumn);

// import { publish, subscribe } from "../decorators/pubsub.js";
(() => {
    let _classDecorators = [e('custom-drawer-layout')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _drawerOpen_decorators;
    let _drawerOpen_initializers = [];
    let _drawerOpen_extraInitializers = [];
    let _keepClosed_decorators;
    let _keepClosed_initializers = [];
    let _keepClosed_extraInitializers = [];
    let _narrow_decorators;
    let _narrow_initializers = [];
    let _narrow_extraInitializers = [];
    let _drawerType_decorators;
    let _drawerType_initializers = [];
    let _drawerType_extraInitializers = [];
    let _appBarType_decorators;
    let _appBarType_initializers = [];
    let _appBarType_extraInitializers = [];
    let _mainDrawerId_decorators;
    let _mainDrawerId_initializers = [];
    let _mainDrawerId_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _drawerOpen_decorators = [i({ type: Boolean, reflect: true, attribute: 'drawer-open' })];
            _keepClosed_decorators = [i({ type: Boolean, reflect: true, attribute: 'keep-closed' })];
            _narrow_decorators = [i({ type: Boolean, reflect: true })];
            _drawerType_decorators = [i({ type: String })];
            _appBarType_decorators = [i({ type: String })];
            _mainDrawerId_decorators = [i({ type: String })];
            __esDecorate$1(this, null, _drawerOpen_decorators, { kind: "accessor", name: "drawerOpen", static: false, private: false, access: { has: obj => "drawerOpen" in obj, get: obj => obj.drawerOpen, set: (obj, value) => { obj.drawerOpen = value; } }, metadata: _metadata }, _drawerOpen_initializers, _drawerOpen_extraInitializers);
            __esDecorate$1(this, null, _keepClosed_decorators, { kind: "accessor", name: "keepClosed", static: false, private: false, access: { has: obj => "keepClosed" in obj, get: obj => obj.keepClosed, set: (obj, value) => { obj.keepClosed = value; } }, metadata: _metadata }, _keepClosed_initializers, _keepClosed_extraInitializers);
            __esDecorate$1(this, null, _narrow_decorators, { kind: "accessor", name: "narrow", static: false, private: false, access: { has: obj => "narrow" in obj, get: obj => obj.narrow, set: (obj, value) => { obj.narrow = value; } }, metadata: _metadata }, _narrow_initializers, _narrow_extraInitializers);
            __esDecorate$1(this, null, _drawerType_decorators, { kind: "accessor", name: "drawerType", static: false, private: false, access: { has: obj => "drawerType" in obj, get: obj => obj.drawerType, set: (obj, value) => { obj.drawerType = value; } }, metadata: _metadata }, _drawerType_initializers, _drawerType_extraInitializers);
            __esDecorate$1(this, null, _appBarType_decorators, { kind: "accessor", name: "appBarType", static: false, private: false, access: { has: obj => "appBarType" in obj, get: obj => obj.appBarType, set: (obj, value) => { obj.appBarType = value; } }, metadata: _metadata }, _appBarType_initializers, _appBarType_extraInitializers);
            __esDecorate$1(this, null, _mainDrawerId_decorators, { kind: "accessor", name: "mainDrawerId", static: false, private: false, access: { has: obj => "mainDrawerId" in obj, get: obj => obj.mainDrawerId, set: (obj, value) => { obj.mainDrawerId = value; } }, metadata: _metadata }, _mainDrawerId_initializers, _mainDrawerId_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
        #drawerOpen_accessor_storage = __runInitializers$1(this, _drawerOpen_initializers, false);
        // @subscribe('drawer-open', (value) => {return value})
        get drawerOpen() { return this.#drawerOpen_accessor_storage; }
        set drawerOpen(value) { this.#drawerOpen_accessor_storage = value; }
        #keepClosed_accessor_storage = (__runInitializers$1(this, _drawerOpen_extraInitializers), __runInitializers$1(this, _keepClosed_initializers, false));
        get keepClosed() { return this.#keepClosed_accessor_storage; }
        set keepClosed(value) { this.#keepClosed_accessor_storage = value; }
        #narrow_accessor_storage = (__runInitializers$1(this, _keepClosed_extraInitializers), __runInitializers$1(this, _narrow_initializers, false));
        get narrow() { return this.#narrow_accessor_storage; }
        set narrow(value) { this.#narrow_accessor_storage = value; }
        #drawerType_accessor_storage = (__runInitializers$1(this, _narrow_extraInitializers), __runInitializers$1(this, _drawerType_initializers, 'modal'));
        get drawerType() { return this.#drawerType_accessor_storage; }
        set drawerType(value) { this.#drawerType_accessor_storage = value; }
        #appBarType_accessor_storage = (__runInitializers$1(this, _drawerType_extraInitializers), __runInitializers$1(this, _appBarType_initializers, 'center-aligned'));
        get appBarType() { return this.#appBarType_accessor_storage; }
        set appBarType(value) { this.#appBarType_accessor_storage = value; }
        #mainDrawerId_accessor_storage = (__runInitializers$1(this, _appBarType_extraInitializers), __runInitializers$1(this, _mainDrawerId_initializers, crypto.randomUUID()));
        get mainDrawerId() { return this.#mainDrawerId_accessor_storage; }
        set mainDrawerId(value) { this.#mainDrawerId_accessor_storage = value; }
        connectedCallback() {
            const media = matchMedia('(max-width: 860px)');
            this._onnarrow({ detail: media.matches });
            document.addEventListener('custom-pane-close', ({ detail }) => {
                if (this.mainDrawerId === detail)
                    this.drawerOpen = false;
            });
            document.addEventListener('custom-pane-open', ({ detail }) => {
                if (this.mainDrawerId === detail && !this.keepClosed)
                    this.drawerOpen = true;
            });
            document.addEventListener('custom-theme-narrow', this._onnarrow.bind(this));
        }
        _onnarrow({ detail }) {
            this.narrow = detail;
            if (this.keepClosed)
                return (this.drawerOpen = false);
            if (detail)
                this.drawerOpen = false;
            else
                this.drawerOpen = true;
        }
        _click = (__runInitializers$1(this, _mainDrawerId_extraInitializers), () => {
            if (this.narrow)
                this.drawerOpen = !this.drawerOpen;
        });
        render() {
            return x `<style>
        :host {
          --custom-drawer-width: 320px;
          display: flex;
          flex-direction: row;
          inset: 0;
          background: var(--md-sys-color-surface);
          color: var(--md-sys-color-on-surface);
          background-blend-mode: hue;
          position: absolute;
          box-sizing: border-box;
        }

        main {
          width: 100%;
          height: 100%;
          overflow-y: auto;
        }

        :host([drawer-open][narrow]) .scrim {
          z-index: 1000;
          position: fixed;
          inset: 0;
          background-color: var(--md-sys-color-scrim);
          opacity: 0.44;
        }

        custom-drawer {
          --custom-pane-width: var(--custom-drawer-width, 320px);
        }

        :host(:not([narrow])) .middle-pane {
          will-change: width, transform;
          width: calc(100% - var(--custom-drawer-width));
          height: 100%;
          position: absolute;
          transform: translateX(var(--custom-drawer-width));

          transition: var(--md-sys-motion-easing-emphasized-decelerate) 500ms width,
            var(--md-sys-motion-easing-emphasized-decelerate) 500ms transform;
        }

        :host(:not([drawer-open])) .middle-pane {
          transition: var(--md-sys-motion-easing-emphasized-accelerate) 200ms width,
            var(--md-sys-motion-easing-emphasized-accelerate) 200ms transform;
          transform: translateX(0);
          width: 100%;
        }

        :host([narrow]) .middle-pane {
          width: 100%;
          transform: 0;
          left: 0;
        }
      </style>
      <span class="scrim" @click=${this._click}></span>

      <slot name="drawer">
        <custom-drawer
          @click=${this._click}
          .mobile=${this.narrow}
          .open=${this.drawerOpen}
          .type=${this.drawerType}
          .id=${this.mainDrawerId}
        >
          <slot name="drawer-headline" slot="headline"></slot>
          <slot name="drawer-menu-button" slot="menu-button"></slot>
          <slot name="drawer-content" slot="content"></slot>
          <slot name="drawer-footer" slot="footer"></slot>
        </custom-drawer>
      </slot>

      <flex-column class="middle-pane">
        <!--  TODO: do we want a header? -->
        <slot name="header"></slot>

        <slot name="top-app-bar">
          <custom-top-app-bar .type=${this.appBarType}>
            <slot name="top-app-bar-start" slot="start">
              <slot name="drawer-menu-button">
                <custom-drawer-button .mobile=${this.narrow} ?drawer-open=${this.drawerOpen} .id=${this.mainDrawerId}>
                  menu
                </custom-drawer-button>
              </slot>
            </slot>
            <slot name="top-app-bar-title" slot="title"></slot>
            <slot name="top-app-bar-end" slot="end"></slot>
          </custom-top-app-bar>
        </slot>

        <slot name="content">
          <main>
            <slot></slot>
          </main>
        </slot>
      </flex-column> `;
        }
    });
    return _classThis;
})();

// @material-symbols
(() => {
    let _classDecorators = [e('custom-theme')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _loadFont_decorators;
    let _loadFont_initializers = [];
    let _loadFont_extraInitializers = [];
    let _loadSymbols_decorators;
    let _loadSymbols_initializers = [];
    let _loadSymbols_extraInitializers = [];
    let _narrowTrigger_decorators;
    let _narrowTrigger_initializers = [];
    let _narrowTrigger_extraInitializers = [];
    let _narrow_decorators;
    let _narrow_initializers = [];
    let _narrow_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _loadFont_decorators = [i({ type: Boolean, attribute: 'load-font' })];
            _loadSymbols_decorators = [i({ type: Boolean, attribute: 'load-symbols' })];
            _narrowTrigger_decorators = [i({ type: String, attribute: 'mobile-trigger' })];
            _narrow_decorators = [i({ type: Boolean })];
            __esDecorate$1(this, null, _loadFont_decorators, { kind: "accessor", name: "loadFont", static: false, private: false, access: { has: obj => "loadFont" in obj, get: obj => obj.loadFont, set: (obj, value) => { obj.loadFont = value; } }, metadata: _metadata }, _loadFont_initializers, _loadFont_extraInitializers);
            __esDecorate$1(this, null, _loadSymbols_decorators, { kind: "accessor", name: "loadSymbols", static: false, private: false, access: { has: obj => "loadSymbols" in obj, get: obj => obj.loadSymbols, set: (obj, value) => { obj.loadSymbols = value; } }, metadata: _metadata }, _loadSymbols_initializers, _loadSymbols_extraInitializers);
            __esDecorate$1(this, null, _narrowTrigger_decorators, { kind: "accessor", name: "narrowTrigger", static: false, private: false, access: { has: obj => "narrowTrigger" in obj, get: obj => obj.narrowTrigger, set: (obj, value) => { obj.narrowTrigger = value; } }, metadata: _metadata }, _narrowTrigger_initializers, _narrowTrigger_extraInitializers);
            __esDecorate$1(this, null, _narrow_decorators, { kind: "accessor", name: "narrow", static: false, private: false, access: { has: obj => "narrow" in obj, get: obj => obj.narrow, set: (obj, value) => { obj.narrow = value; } }, metadata: _metadata }, _narrow_initializers, _narrow_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
        #loadFont_accessor_storage = __runInitializers$1(this, _loadFont_initializers, true);
        get loadFont() { return this.#loadFont_accessor_storage; }
        set loadFont(value) { this.#loadFont_accessor_storage = value; }
        #loadSymbols_accessor_storage = (__runInitializers$1(this, _loadFont_extraInitializers), __runInitializers$1(this, _loadSymbols_initializers, true));
        get loadSymbols() { return this.#loadSymbols_accessor_storage; }
        set loadSymbols(value) { this.#loadSymbols_accessor_storage = value; }
        #narrowTrigger_accessor_storage = (__runInitializers$1(this, _loadSymbols_extraInitializers), __runInitializers$1(this, _narrowTrigger_initializers, '(max-width: 860px)'));
        get narrowTrigger() { return this.#narrowTrigger_accessor_storage; }
        set narrowTrigger(value) { this.#narrowTrigger_accessor_storage = value; }
        #narrow_accessor_storage = (__runInitializers$1(this, _narrowTrigger_extraInitializers), __runInitializers$1(this, _narrow_initializers, void 0));
        get narrow() { return this.#narrow_accessor_storage; }
        set narrow(value) { this.#narrow_accessor_storage = value; }
        #loadLink(href, rel, attributes) {
            let link = document.createElement('link');
            link.rel = rel;
            link.href = href;
            if (attributes) {
                for (const attribute of attributes) {
                    link.setAttribute(attribute, '');
                }
            }
            document.head.appendChild(link);
        }
        #generateSymbolsLink() {
            let link = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap';
            if (globalThis.symbols) {
                link += `&text=${globalThis.symbols}`;
            }
            return link;
        }
        connectedCallback() {
            const media = matchMedia('(max-width: 860px)');
            media.onchange = this.#mediaQueryChange;
            this.#mediaQueryChange({ matches: media.matches });
            // this.load('./themes/default/tokens.js')
            this.load('./themes/default/theme.css');
            const style = document.createElement('style');
            style.innerHTML = `
    html, body {
      inset: 0;
      position: absolute;
      margin: 0;
      background: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
      overflow: hidden;
    }`;
            document.head.appendChild(style);
            if (this.loadFont || this.loadSymbols)
                this.#loadLink('https://fonts.googleapis.com', 'preconnect');
            this.#loadLink('https://fonts.gstatic.com', 'preconnect', ['crossorigin']);
            if (this.loadFont)
                this.#loadLink('https://fonts.googleapis.com/css2?family=Roboto&display=swap', 'stylesheet');
            if (this.loadSymbols)
                this.#loadLink(this.#generateSymbolsLink(), 'stylesheet');
        }
        #mediaQueryChange = (__runInitializers$1(this, _narrow_extraInitializers), ({ matches }) => {
            this.narrow = matches;
            document.dispatchEvent(new CustomEvent('custom-theme-narrow', { detail: this.narrow }));
        });
        set language(value) {
            this.setAttribute('language', value);
        }
        // todo: support css & json
        get language() {
            return this.getAttribute('language') || 'css';
        }
        /**
         * loads given path and converst (when needed) to css variables
         * @param {string} path
         */
        async load(path) {
            if (this.language === 'js') {
                const importee = await import(path);
                for (const [property, value] of Object.entries(importee)) {
                    const cssProperty = `--${property.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()}`;
                    document.body.style.setProperty(cssProperty, value);
                }
            }
            else if (this.language === 'css') {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = path;
                document.head.appendChild(link);
            }
        }
    });
    return _classThis;
})();

globalThis.pubsub = globalThis.pubsub || new LittlePubSub(true);
(() => {
    let _classDecorators = [e('custom-icon-set')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static styles = [
            i$1 `
      :host {
        display: none;
      }
    `
        ];
        #getIcon(name) {
            return this.querySelector('template').content.querySelector(`span[name="${name}"]`)?.children[0];
        }
        getIcon(name) {
            const node = this.#getIcon(name);
            if (!node) {
                console.warn(`missing icon ${name}`);
                return name;
            }
            return node.cloneNode(true);
        }
        get setName() {
            return this.getAttribute('set-name') || 'icons';
        }
        connectedCallback() {
            globalThis.pubsub.subscribe(`custom-icon-set-${this.setName}-connected`, () => { });
            globalThis.pubsub.publish(`custom-icon-set-${this.setName}-connected`, this);
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

class SelectBase extends s {
    #selected;
    currentSelected;
    connectedCallback() {
        this.selected = this.defaultSelected;
    }
    get multi() {
        return this.hasAttribute('multi');
    }
    set multi(value) {
        value ? this.setAttribute('multi', '') : this.removeAttribute('multi');
    }
    get defaultSelected() {
        return this.getAttribute('default-selected') || 0;
    }
    set selected(value) {
        this.#selected = value;
        this.#requestSelectedUpdate();
    }
    get selected() {
        return this.#selected;
    }
    get slotted() {
        if (this.shadowRoot)
            return this.shadowRoot.querySelector('slot');
        return this;
    }
    get #assignedNodes() {
        const nodes = 'assignedNodes' in this.slotted ? this.slotted.assignedNodes() : this.children;
        const arr = [];
        for (var i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node.nodeType === 1)
                arr.push(node);
        }
        return arr;
    }
    get attrForSelected() {
        return this.getAttribute('attr-for-selected') || 'name';
    }
    /**
     * get the attribute used to set selected
     *
     * @example
     * <custom-selector attr-for-selected="select">
     *  <li select="1"></li>
     *  <li select="2"></li>
     * </custom-selector>
     */
    set attrForSelected(value) {
        this.setAttribute('attr-for-selected', value);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            // check if value is number
            if (!isNaN(newValue)) {
                newValue = Number(newValue);
            }
            this[name] = newValue;
        }
    }
    /**
     * @param {string|number|HTMLElement} selected
     */
    select(selected) {
        if (selected)
            this.selected = selected;
        // TODO: fix selectedobservers
        if (this.multi)
            this.#requestSelectedUpdate();
    }
    next() {
        const index = this.getIndexFor(this.currentSelected);
        if (index !== -1 &&
            index >= 0 &&
            this.#assignedNodes.length > index &&
            index + 1 <= this.#assignedNodes.length - 1) {
            this.selected = this.#assignedNodes[index + 1];
        }
    }
    previous() {
        const index = this.getIndexFor(this.currentSelected);
        if (index !== -1 && index >= 0 && this.#assignedNodes.length > index && index - 1 >= 0) {
            this.selected = this.#assignedNodes[index - 1];
        }
    }
    getIndexFor(element) {
        return this.#assignedNodes.indexOf(element || this.selected);
    }
    #updateSelected(selected, currentSelected) {
        selected.classList.add('custom-selected');
        if (currentSelected && currentSelected !== selected) {
            currentSelected.classList.remove('custom-selected');
        }
        this.currentSelected = selected;
    }
    #updateMultiSelected(selected) {
        for (const child of this.#assignedNodes) {
            if (selected.includes(child.getAttribute(this.attrForSelected))) {
                child.classList.add('custom-selected');
            }
            else {
                child.classList.remove('custom-selected');
            }
        }
    }
    #updateStringSelected(selected) {
        for (const child of this.#assignedNodes) {
            if (child.getAttribute(this.attrForSelected) === selected) {
                return this.#updateSelected(child, this.currentSelected);
            }
        }
    }
    #requestSelectedUpdate() {
        if (this.selected === undefined) {
            this.currentSelected && this.currentSelected.classList.remove('custom-selected');
            return;
        }
        const type = typeof this.selected;
        if (Array.isArray(this.selected))
            return this.#updateMultiSelected(this.selected);
        if (type === 'object')
            return this.#updateSelected(this.selected, this.currentSelected);
        if (type === 'string')
            return this.#updateStringSelected(this.selected);
        // set selected by index
        const child = this.#assignedNodes[this.selected];
        if (child)
            this.#updateSelected(child, this.currentSelected);
        // remove selected even when nothing found, better to return nothing
    }
}

class SelectorBase extends SelectBase {
    constructor() {
        super();
    }
    async connectedCallback() {
        super.connectedCallback && (await super.connectedCallback());
        // this.updateComplete && await this.updateComplete
        this.slotted.addEventListener('click', this.#onClick.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback && super.disconnectedCallback();
        this.slotted.removeEventListener('click', this.#onClick.bind(this));
    }
    #onClick(event) {
        const target = event.composedPath()[0];
        if (target.localName === this.localName) {
            // was just a click in the host element so we don't need todo anything
            return;
        }
        const selected = target.getAttribute(this.attrForSelected) || target;
        if (this.multi) {
            const selectedArray = Array.isArray(this.selected) ? this.selected : [];
            const index = selectedArray.indexOf(selected);
            if (index === -1)
                selectedArray.push(selected);
            else
                selectedArray.splice(index, 1);
            // trigger observer
            this.selected = selectedArray;
        }
        else
            this.selected = selected;
        this.dispatchEvent(new CustomEvent('selected', { detail: selected }));
    }
}

(() => {
    let _classDecorators = [e('custom-selector')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SelectorBase;
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static styles = [
            i$1 `
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: auto;
      }

      ::slotted(.custom-selected:not([non-interactive])) {
        background: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);
      }

      ::slotted(*) {
        color: var(--md-sys-color-on-surface-variant);
        font-family: var(--md-sys-typescale-label-large-font-family-name);
        font-style: var(--md-sys-typescale-label-large-font-family-style);
        font-weight: var(--md-sys-typescale-label-large-font-weight);
        font-size: var(--md-sys-typescale-label-large-font-size);
        letter-spacing: var(--md-sys-typescale-label-large-tracking);
        line-height: var(--md-sys-typescale-label-large-height);
        text-transform: var(--md-sys-typescale-label-large-text-transform);
        text-decoration: var(--md-sys-typescale-label-large-text-decoration);
      }

      ::slotted(:not(.custom-selected):not([non-interactive]):hover) {
        background: var(--md-sys-color-secondary-container-hover);
        color: var(--md-sys-color-on-secondary-container);
      }
    `
        ];
        render() {
            return x `<slot></slot>`;
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

/**
 * @extends HTMLElement
 */
class CustomPages extends SelectBase {
    async connectedCallback() {
        super.connectedCallback && (await super.connectedCallback());
        this.slotchange = this.slotchange.bind(this);
        this.shadowRoot.querySelector('slot').addEventListener('slotchange', this.slotchange);
        this.slotchange();
        this.selected = this.defaultSelected;
    }
    isEvenNumber(number) {
        return Boolean(number % 2 === 0);
    }
    /**
     * set animation class when slot changes
     */
    slotchange() {
        let call = 0;
        for (const child of this.slotted.assignedNodes()) {
            if (child && child.nodeType === 1) {
                child.style.zIndex = 99 - call;
                if (this.isEvenNumber(call++)) {
                    child.classList.add('animate-down');
                }
                else {
                    child.classList.add('animate-up');
                }
                this.dispatchEvent(new CustomEvent('child-change', { detail: child }));
            }
        }
    }
    static styles = [
        i$1 `
      :host {
        flex: 1;
        position: relative;
        --primary-background-color: #eceff1;
        overflow: hidden;
        height: 100%;
        width: 100%;
      }
      ::slotted(*) {
        display: flex;
        position: absolute;
        opacity: 0;
        pointer-events: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: var(--md-sys-motion-easing-emphasized-accelerate) 200ms opacity,
          var(--md-sys-motion-easing-emphasized-accelerate) 200ms transform;
        /*transform: scale(0.1);*/
        transform-origin: left;
      }
      ::slotted(.animate-up) {
        transform: translateY(-120%);
      }
      ::slotted(.animate-down) {
        transform: translateY(120%);
      }
      ::slotted(.custom-selected) {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
        transition: var(--md-sys-motion-easing-emphasized-decelerate) 500ms width,
          var(--md-sys-motion-easing-emphasized-decelerate) 500ms transform;
        max-height: 100%;
        max-width: 100%;
      }
    `
    ];
    render() {
        return x `
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
    }
}
// @ts-ignore
customElements.define('custom-pages', CustomPages);

(() => {
    let _classDecorators = [e('custom-typography')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _size_decorators;
    let _size_initializers = [];
    let _size_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _type_decorators = [i({ type: String, reflect: true })];
            _size_decorators = [i({ type: String, reflect: true })];
            __esDecorate$1(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate$1(this, null, _size_decorators, { kind: "accessor", name: "size", static: false, private: false, access: { has: obj => "size" in obj, get: obj => obj.size, set: (obj, value) => { obj.size = value; } }, metadata: _metadata }, _size_initializers, _size_extraInitializers);
            __esDecorate$1(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #type_accessor_storage = __runInitializers$1(this, _type_initializers, 'title');
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #size_accessor_storage = (__runInitializers$1(this, _type_extraInitializers), __runInitializers$1(this, _size_initializers, 'large'));
        get size() { return this.#size_accessor_storage; }
        set size(value) { this.#size_accessor_storage = value; }
        static styles = [
            i$1 `
      :host {
        display: contents;
      }

      :host([type='display'][size='large']) slot {
        font-family: var(--md-sys-typescale-display-large-font-family-name);
        font-style: var(--md-sys-typescale-display-large-font-family-style);
        font-weight: var(--md-sys-typescale-display-large-font-weight);
        font-size: var(--md-sys-typescale-display-large-font-size);
        letter-spacing: var(--md-sys-typescale-display-large-tracking);
        line-height: var(--md-sys-typescale-display-large-height);
        text-transform: var(--md-sys-typescale-display-large-text-transform);
        text-decoration: var(--md-sys-typescale-display-large-text-decoration);
      }
      :host([type='display'][size='medium']) slot {
        font-family: var(--md-sys-typescale-display-medium-font-family-name);
        font-style: var(--md-sys-typescale-display-medium-font-family-style);
        font-weight: var(--md-sys-typescale-display-medium-font-weight);
        font-size: var(--md-sys-typescale-display-medium-font-size);
        letter-spacing: var(--md-sys-typescale-display-medium-tracking);
        line-height: var(--md-sys-typescale-display-medium-height);
        text-transform: var(--md-sys-typescale-display-medium-text-transform);
        text-decoration: var(--md-sys-typescale-display-medium-text-decoration);
      }
      :host([type='display'][size='small']) slot {
        font-family: var(--md-sys-typescale-display-small-font-family-name);
        font-style: var(--md-sys-typescale-display-small-font-family-style);
        font-weight: var(--md-sys-typescale-display-small-font-weight);
        font-size: var(--md-sys-typescale-display-small-font-size);
        letter-spacing: var(--md-sys-typescale-display-small-tracking);
        line-height: var(--md-sys-typescale-display-small-height);
        text-transform: var(--md-sys-typescale-display-small-text-transform);
        text-decoration: var(--md-sys-typescale-display-small-text-decoration);
      }
      :host([type='headline'][size='large']) slot {
        font-family: var(--md-sys-typescale-headline-large-font-family-name);
        font-style: var(--md-sys-typescale-headline-large-font-family-style);
        font-weight: var(--md-sys-typescale-headline-large-font-weight);
        font-size: var(--md-sys-typescale-headline-large-font-size);
        letter-spacing: var(--md-sys-typescale-headline-large-tracking);
        line-height: var(--md-sys-typescale-headline-large-height);
        text-transform: var(--md-sys-typescale-headline-large-text-transform);
        text-decoration: var(--md-sys-typescale-headline-large-text-decoration);
      }
      :host([type='headline'][size='medium']) slot {
        font-family: var(--md-sys-typescale-headline-medium-font-family-name);
        font-style: var(--md-sys-typescale-headline-medium-font-family-style);
        font-weight: var(--md-sys-typescale-headline-medium-font-weight);
        font-size: var(--md-sys-typescale-headline-medium-font-size);
        letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
        line-height: var(--md-sys-typescale-headline-medium-height);
        text-transform: var(--md-sys-typescale-headline-medium-text-transform);
        text-decoration: var(--md-sys-typescale-headline-medium-text-decoration);
      }
      :host([type='headline'][size='small']) slot {
        font-family: var(--md-sys-typescale-headline-small-font-family-name);
        font-style: var(--md-sys-typescale-headline-small-font-family-style);
        font-weight: var(--md-sys-typescale-headline-small-font-weight);
        font-size: var(--md-sys-typescale-headline-small-font-size);
        letter-spacing: var(--md-sys-typescale-headline-small-tracking);
        line-height: var(--md-sys-typescale-headline-small-height);
        text-transform: var(--md-sys-typescale-headline-small-text-transform);
        text-decoration: var(--md-sys-typescale-headline-small-text-decoration);
      }
      :host([type='body'][size='large']) slot {
        font-family: var(--md-sys-typescale-body-large-font-family-name);
        font-style: var(--md-sys-typescale-body-large-font-family-style);
        font-weight: var(--md-sys-typescale-body-large-font-weight);
        font-size: var(--md-sys-typescale-body-large-font-size);
        letter-spacing: var(--md-sys-typescale-body-large-tracking);
        line-height: var(--md-sys-typescale-body-large-height);
        text-transform: var(--md-sys-typescale-body-large-text-transform);
        text-decoration: var(--md-sys-typescale-body-large-text-decoration);
      }
      :host([type='body'][size='medium']) slot {
        font-family: var(--md-sys-typescale-body-medium-font-family-name);
        font-style: var(--md-sys-typescale-body-medium-font-family-style);
        font-weight: var(--md-sys-typescale-body-medium-font-weight);
        font-size: var(--md-sys-typescale-body-medium-font-size);
        letter-spacing: var(--md-sys-typescale-body-medium-tracking);
        line-height: var(--md-sys-typescale-body-medium-height);
        text-transform: var(--md-sys-typescale-body-medium-text-transform);
        text-decoration: var(--md-sys-typescale-body-medium-text-decoration);
      }
      :host([type='body'][size='small']) slot {
        font-family: var(--md-sys-typescale-body-small-font-family-name);
        font-style: var(--md-sys-typescale-body-small-font-family-style);
        font-weight: var(--md-sys-typescale-body-small-font-weight);
        font-size: var(--md-sys-typescale-body-small-font-size);
        letter-spacing: var(--md-sys-typescale-body-small-tracking);
        line-height: var(--md-sys-typescale-body-small-height);
        text-transform: var(--md-sys-typescale-body-small-text-transform);
        text-decoration: var(--md-sys-typescale-body-small-text-decoration);
      }
      :host([type='label'][size='large']) slot {
        font-family: var(--md-sys-typescale-label-large-font-family-name);
        font-style: var(--md-sys-typescale-label-large-font-family-style);
        font-weight: var(--md-sys-typescale-label-large-font-weight);
        font-size: var(--md-sys-typescale-label-large-font-size);
        letter-spacing: var(--md-sys-typescale-label-large-tracking);
        line-height: var(--md-sys-typescale-label-large-height);
        text-transform: var(--md-sys-typescale-label-large-text-transform);
        text-decoration: var(--md-sys-typescale-label-large-text-decoration);
      }
      :host([type='label'][size='medium']) slot {
        font-family: var(--md-sys-typescale-label-medium-font-family-name);
        font-style: var(--md-sys-typescale-label-medium-font-family-style);
        font-weight: var(--md-sys-typescale-label-medium-font-weight);
        font-size: var(--md-sys-typescale-label-medium-font-size);
        letter-spacing: var(--md-sys-typescale-label-medium-tracking);
        line-height: var(--md-sys-typescale-label-medium-height);
        text-transform: var(--md-sys-typescale-label-medium-text-transform);
        text-decoration: var(--md-sys-typescale-label-medium-text-decoration);
      }
      :host([type='label'][size='small']) slot {
        font-family: var(--md-sys-typescale-label-small-font-family-name);
        font-style: var(--md-sys-typescale-label-small-font-family-style);
        font-weight: var(--md-sys-typescale-label-small-font-weight);
        font-size: var(--md-sys-typescale-label-small-font-size);
        letter-spacing: var(--md-sys-typescale-label-small-tracking);
        line-height: var(--md-sys-typescale-label-small-height);
        text-transform: var(--md-sys-typescale-label-small-text-transform);
        text-decoration: var(--md-sys-typescale-label-small-text-decoration);
      }
      :host([type='title'][size='large']) slot {
        font-family: var(--md-sys-typescale-title-large-font-family-name);
        font-style: var(--md-sys-typescale-title-large-font-family-style);
        font-weight: var(--md-sys-typescale-title-large-font-weight);
        font-size: var(--md-sys-typescale-title-large-font-size);
        letter-spacing: var(--md-sys-typescale-title-large-tracking);
        line-height: var(--md-sys-typescale-title-large-height);
        text-transform: var(--md-sys-typescale-title-large-text-transform);
        text-decoration: var(--md-sys-typescale-title-large-text-decoration);
      }
      :host([type='title'][size='medium']) slot {
        font-family: var(--md-sys-typescale-title-medium-font-family-name);
        font-style: var(--md-sys-typescale-title-medium-font-family-style);
        font-weight: var(--md-sys-typescale-title-medium-font-weight);
        font-size: var(--md-sys-typescale-title-medium-font-size);
        letter-spacing: var(--md-sys-typescale-title-medium-tracking);
        line-height: var(--md-sys-typescale-title-medium-height);
        text-transform: var(--md-sys-typescale-title-medium-text-transform);
        text-decoration: var(--md-sys-typescale-title-medium-text-decoration);
      }
      :host([type='title'][size='small']) slot {
        font-family: var(--md-sys-typescale-title-small-font-family-name);
        font-style: var(--md-sys-typescale-title-small-font-family-style);
        font-weight: var(--md-sys-typescale-title-small-font-weight);
        font-size: var(--md-sys-typescale-title-small-font-size);
        letter-spacing: var(--md-sys-typescale-title-small-tracking);
        line-height: var(--md-sys-typescale-title-small-height);
        text-transform: var(--md-sys-typescale-title-small-text-transform);
        text-decoration: var(--md-sys-typescale-title-small-text-decoration);
      }
    `
        ];
        render() {
            return x ` <slot></slot> `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$1(this, _size_extraInitializers);
        }
        static {
            __runInitializers$1(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

/**
 * @module `@vandeurenglenn/flex-elements/container.js`
 * @class FlexContainer
 * @extends HTMLElement
 *
 * @example html`
 <flex-container min-width="320px">content</flex-container>
 <flex-container max-width="640px"row>content</flex-container>`

 * @cssProperties
 * `--flex-display-max-width` (64Opx)
 *
 * `--flex-display-min-width` (320px)
 *
 * `--flex-display-width` (100%)
 *
 * `--flex-display-direction` (column)
 * `--flex-display-padding` (12px)
 */
class FlexContainer extends FlexDisplay {
    constructor() {
        super();
        this.maxWidth = '640px';
        this.minWidth = '320px';
        this.width = '100%';
        this.direction = 'column';
        this.padding = '12px';
    }
}
customElements.define('flex-container', FlexContainer);

(() => {
    let _classDecorators = [e('branding-element')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate$2(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = [
            i$1 `
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
        ]; }
        render() {
            return x `
    <img src="./assets/excavator.svg"></img>
    <h1>vic enkels</h1>
    `;
        }
        static {
            __runInitializers$2(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

(() => {
    let _classDecorators = [e('footer-element')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate$2(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = [
            i$1 `
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
        ]; }
        render() {
            return x `
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
    `;
        }
        static {
            __runInitializers$2(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

let AppShell = (() => {
    let _classDecorators = [e('app-shell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = s;
    let _pages_decorators;
    let _pages_initializers = [];
    let _pages_extraInitializers = [];
    let _selector_decorators;
    let _selector_initializers = [];
    let _selector_extraInitializers = [];
    (class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _pages_decorators = [t('custom-pages')];
            _selector_decorators = [t('custom-selector')];
            __esDecorate$2(this, null, _pages_decorators, { kind: "accessor", name: "pages", static: false, private: false, access: { has: obj => "pages" in obj, get: obj => obj.pages, set: (obj, value) => { obj.pages = value; } }, metadata: _metadata }, _pages_initializers, _pages_extraInitializers);
            __esDecorate$2(this, null, _selector_decorators, { kind: "accessor", name: "selector", static: false, private: false, access: { has: obj => "selector" in obj, get: obj => obj.selector, set: (obj, value) => { obj.selector = value; } }, metadata: _metadata }, _selector_initializers, _selector_extraInitializers);
            __esDecorate$2(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #pages_accessor_storage = __runInitializers$2(this, _pages_initializers, void 0);
        get pages() { return this.#pages_accessor_storage; }
        set pages(value) { this.#pages_accessor_storage = value; }
        #selector_accessor_storage = (__runInitializers$2(this, _pages_extraInitializers), __runInitializers$2(this, _selector_initializers, void 0));
        get selector() { return this.#selector_accessor_storage; }
        set selector(value) { this.#selector_accessor_storage = value; }
        static { this.styles = [
            i$1 `
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
        ]; }
        connectedCallback() {
            onhashchange = this.onhashchange.bind(this);
            location.hash.split('#!/')[1];
            this.onhashchange();
        }
        async onhashchange() {
            const selected = location.hash.split('#!/')[1] ?? 'home';
            if (!customElements.get(`${selected}-view`))
                await import(`./${selected}.js`);
            this.selector.select(selected);
            this.pages.select(selected);
        }
        render() {
            return x `
      <custom-theme load-symbols="false"></custom-theme>
      <custom-icon-set>
        <template>
          <span name="home"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg></span>
          <span name="gallery_thumbnail"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M100-200q-24.75 0-42.375-17.625T40-260v-440q0-24.75 17.625-42.375T100-760h440q24.75 0 42.375 17.625T600-700v440q0 24.75-17.625 42.375T540-200H100Zm620-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm20-60h120v-120H740v120ZM100-260h440v-440H100v440Zm60-100h320L375-500l-75 100-55-73-85 113Zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720Zm20-60h120v-120H740v120Zm-640 0v-440 440Zm640-320v-120 120Zm0 320v-120 120Z"/></svg></span>
          <span name="info"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg></span>
          <span name="menu"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></span>
          <span name="mail"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg></span>
          <span name="call"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.286 12.857-32.143T165-840h140q14 0 24 10t14 25l26.929 125.641Q372-665 369.5-653.5q-2.5 11.5-10.729 19.726L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.151-15T686-369l119 26q15 4 25 16.044T840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"/></svg></span>
          <span name="menu_open"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M120-240v-60h520v60H120Zm678-52L609-481l188-188 43 43-145 145 146 146-43 43ZM120-452v-60h400v60H120Zm0-208v-60h520v60H120Z"/></svg></span>
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
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers$2(this, _selector_extraInitializers);
        }
        static {
            __runInitializers$2(_classThis, _classExtraInitializers);
        }
    });
    return _classThis;
})();

export { AppShell };
