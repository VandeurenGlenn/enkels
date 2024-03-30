const t=t=>function(e,{kind:o,name:r,access:n,addInitializer:s}){return "accessor"!==o&&s((function(){console.warn(`${this.localName}: @query(${t}) ${String(r)} ${o} is not supported`);})),{get(){return this.shadowRoot?this.shadowRoot.querySelector(t):this.querySelector(t)}}};

export { t };
