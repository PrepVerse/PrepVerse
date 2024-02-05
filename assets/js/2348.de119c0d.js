/*! For license information please see 2348.de119c0d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2348],{9614:(t,e)=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",m=g.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},y=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const o=null==i?void 0:i.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$E_)||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:v;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??y)(i?r:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$E_)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EO(t,this[t])))),this._$ET()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[$("elementProperties")]=new Map,S[$("finalized")]=new Map,null==m||m({ReactiveElement:S}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.2");const E=globalThis,b=E.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,U="?"+P,O=`<${U}>`,M=document,R=()=>M.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,x="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,k=/>/g,G=RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,W=/"/g,z=/^(?:script|style|textarea|title)$/i,D=(V=1,(t,...e)=>({_$litType$:V,strings:t,values:e})),B=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Z=new WeakMap,F=M.createTreeWalker(M,129);var V;function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=((t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=I;for(let a=0;a<s;a++){const e=t[a];let s,l,h=-1,c=0;for(;c<e.length&&(n.lastIndex=c,l=n.exec(e),null!==l);)c=n.lastIndex,n===I?"!--"===l[1]?n=H:void 0!==l[1]?n=k:void 0!==l[2]?(z.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=G):void 0!==l[3]&&(n=G):n===G?">"===l[0]?(n=r??I,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?G:'"'===l[3]?W:L):n===W||n===L?n=G:n===H||n===k?n=I:(n=G,r=void 0);const d=n===G&&t[a+1].startsWith("/>")?" ":"";o+=n===I?e+O:h>=0?(i.push(s),e.slice(0,h)+C+e.slice(h)+P+d):e+P+(-2===h?a:d)}return[q(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]})(t,e);if(this.el=K.createElement(l,s),F.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=h[o++],s=i.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?X:"?"===n[1]?tt:"@"===n[1]?et:Q}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(z.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],R()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){var r,o;if(e===B)return e;let n=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const a=N(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==a&&(null==(o=null==n?void 0:n._$AO)||o.call(n,!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=n:s._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,i)),e}class J{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(q(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??M).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new J(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=s[++n]}o!==(null==a?void 0:a.index)&&(r=F.nextNode(),o++)}return F.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}(r,this),e=t.u(this.options);t.p(s),this.$(e),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new K(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new J(this.k(R()),this.k(R()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,i[s+n],e,n),a===B&&(a=this._$AH[n]),o||(o=!N(a)||a!==this._$AH[n]),a===j?t=j:t!==j&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.O(t)}O(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===j?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class et extends Q{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??j)===B)return;const s=this._$AH,i=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==j&&(s===j||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const it=E.litHtmlPolyfillSupport;null==it||it(K,J),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.1.0");let rt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new J(e.insertBefore(R(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return B}};var ot;rt._$litElement$=!0,rt.finalized=!0,null==(ot=globalThis.litElementHydrateSupport)||ot.call(globalThis,{LitElement:rt});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:rt}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");const at={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},lt=(t=at,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const ct=2;const dt=(t,e)=>{var s;const i=t._$AN;if(void 0===i)return!1;for(const r of i)null==(s=r._$AO)||s.call(r,e,!1),dt(r,e);return!0},ut=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},pt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),_t(e)}};function gt(t){void 0!==this._$AN?(ut(this),this._$AM=t,pt(this)):this._$AM=t}function ft(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)dt(i[o],!1),ut(i[o]);else null!=i&&(dt(i,!1),ut(i));else dt(this,t)}const _t=t=>{t.type==ct&&(t._$AP??(t._$AP=ft),t._$AQ??(t._$AQ=gt))};class mt{}const $t=new WeakMap,vt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),pt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null==(s=this.reconnected)||s.call(this):null==(i=this.disconnected)||i.call(this)),e&&(dt(this,t),ut(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}{render(t){return j}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=null==(s=t.options)?void 0:s.host,this.ot(this.lt=t.element)),j}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let s=$t.get(e);void 0===s&&(s=new WeakMap,$t.set(e,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return"function"==typeof this.G?null==(t=$t.get(this.ct??globalThis))?void 0:t.get(this.G):null==(e=this.G)?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var yt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,St=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?At(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&yt(e,s,o),o};e.GiscusWidget=class extends rt{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new mt,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")??"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),e.hash="",void history.replaceState(void 0,document.title,e.toString());if(s)try{this.__session=JSON.parse(s)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==r?void 0:r.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus)return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut)return console.info("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!e.giscus.error)return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(s)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e;null==(e=this.iframeRef)||!e.contentWindow||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(t,e,s){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,s)}getMetaContent(t,e=!1){const s=e?`meta[property='og:${t}'],`:"",i=document.querySelector(s+`meta[name='${t}']`);return i?i.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping?this.term??"":""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this._host}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(r).toString()}`}render(){return D`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${vt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(s,t,r)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,St([ht({reflect:!0})],e.GiscusWidget.prototype,"host",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"repo",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"category",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"term",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"strict",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"theme",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"lang",2),St([ht({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=St([function(t){return customElements.get(t)?t=>t:(t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})(t)}("giscus-widget")],e.GiscusWidget)},8071:(t,e,s)=>{const i=s(5893),r=s(7294);t.exports=function({id:t,host:e,repo:o,repoId:n,category:a,categoryId:l,mapping:h,term:c,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:g,theme:f,lang:_,loading:m}){const[$,v]=r.useState(!1);return r.useEffect((()=>{$||(Promise.resolve().then((()=>s(9614))),v(!0))}),[]),$?i.jsx("giscus-widget",{id:t,host:e,repo:o,repoid:n,category:a,categoryid:l,mapping:h,term:c,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:g,theme:f,lang:_,loading:m}):null}},1020:(t,e,s)=>{s.d(e,{Z:()=>i});const i=(0,s(7267).Z)({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"})},6573:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(5456),r=s(6459);const o=(0,s(9075).Z)("facebook",(function(t,e){var s=e.quote,o=e.hashtag;return(0,i.Z)(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,r.Z)({u:t,quote:s,hashtag:o})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400})},4276:(t,e,s)=>{s.d(e,{Z:()=>i});const i=(0,s(7267).Z)({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"})},4099:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(5456),r=s(6459);const o=(0,s(9075).Z)("telegram",(function(t,e){var s=e.title;return(0,i.Z)(t,"telegram.url"),"https://telegram.me/share/url"+(0,r.Z)({url:t,text:s})}),(function(t){return{title:t.title}}),{windowWidth:550,windowHeight:400})},5251:(t,e,s)=>{s(7418);var i=s(7294),r=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),e.Fragment=o("react.fragment")}var n=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,s){var i,o={},h=null,c=null;for(i in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,i)&&!l.hasOwnProperty(i)&&(o[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===o[i]&&(o[i]=e[i]);return{$$typeof:r,type:t,key:h,ref:c,props:o,_owner:n.current}}e.jsx=h,e.jsxs=h},5893:(t,e,s)=>{t.exports=s(5251)},5506:(t,e,s)=>{s.d(e,{Z:()=>n});var i=s(7294),r=s(676),o=s(4185);function n({children:t,className:e}){const{frontMatter:s,assets:n}=(0,o.C)(),{withBaseUrl:a}=(0,r.C)();var l;const h=null!==(l=n.image)&&void 0!==l?l:s.image;return i.createElement("article",{className:e,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},h&&i.createElement("meta",{itemProp:"image",content:a(h,{absolute:!0})}),t)}},4185:(t,e,s)=>{s.d(e,{C:()=>a,n:()=>n});var i=s(7294),r=s(7806);const o=i.createContext(null);function n({children:t,content:e,isBlogPostPage:s=!1}){const r=function({content:t,isBlogPostPage:e}){return(0,i.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:e})),[t,e])}({content:e,isBlogPostPage:s});return i.createElement(o.Provider,{value:r},t)}function a(){const t=(0,i.useContext)(o);if(null===t)throw new r.i6("BlogPostProvider");return t}},60:(t,e,s)=>{s.d(e,{c:()=>h});var i=s(7294),r=s(8241);const o=["zero","one","two","few","many","other"];function n(t){return o.filter((e=>t.includes(e)))}const a={locale:"en",pluralForms:n(["one","other"]),select:t=>1===t?"one":"other"};function l(){const{i18n:{currentLocale:t}}=(0,r.Z)();return(0,i.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:n(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),a}}),[t])}function h(){const t=l();return{selectMessage:(e,s)=>function(t,e,s){const i=t.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${t}`);const r=s.select(e),o=s.pluralForms.indexOf(r);return i[Math.min(o,i.length-1)]}(s,e,t)}}},9861:(t,e,s)=>{s.d(e,{Z:()=>i});const i=s(8071)}}]);