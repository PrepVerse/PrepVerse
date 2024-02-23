"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2008],{9184:(e,t,n)=>{n.d(t,{c:()=>h});var r=n(1504),i=n(440),l=n(2656),o=n(9936),a=n(1724),s=n(2640);const u=r.createContext({collectLink:()=>{}});var c=n(1080);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function v(e,t){var n,d,v,h,{isNavLink:g,to:b,href:y,activeClassName:E,isActive:w,"data-noBrokenLinkCheck":O,autoAddBaseUrl:S=!0}=e,j=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C,baseUrl:T}}=(0,o.c)(),{withBaseUrl:P}=(0,c.E)(),A=(0,r.useContext)(u),F=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>F.current));const k=b||y;const L=(0,a.c)(k),R=null===(d=k)||void 0===d||null===(n=d.replace)||void 0===n?void 0:n.call(d,"pathname://","");let N=void 0!==R?(x=R,S&&(e=>e.startsWith("/"))(x)?P(x):x):void 0;var x;N&&L&&(N=(0,l.applyTrailingSlash)(N,{trailingSlash:C,baseUrl:T}));const H=(0,r.useRef)(!1),_=g?i.Af:i.cH,D=s.c.canUseIntersectionObserver,U=(0,r.useRef)(),I=()=>{H.current||null==N||(window.docusaurus.preload(N),H.current=!0)};var B;(0,r.useEffect)((()=>(!D&&L&&null!=N&&window.docusaurus.prefetch(N),()=>{D&&U.current&&U.current.disconnect()})),[U,N,D,L]);const q=null!==(B=null===(h=N)||void 0===h||null===(v=h.startsWith)||void 0===v?void 0:v.call(h,"#"))&&void 0!==B&&B,M=!N||!L||q;return M||O||A.collectLink(N),M?r.createElement("a",f({ref:F,href:N},k&&!L&&{target:"_blank",rel:"noopener noreferrer"},j)):r.createElement(_,f(p(f({},j),{onMouseEnter:I,onTouchStart:I,innerRef:e=>{F.current=e,D&&e&&L&&(U.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.current.unobserve(e),U.current.disconnect(),null!=N&&window.docusaurus.prefetch(N))}))})),U.current.observe(e))},to:N}),g&&{isActive:w,activeClassName:E}))}const h=r.forwardRef(v)},5948:(e,t,n)=>{n.d(t,{g:()=>i});var r,i=((r=i||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},2424:(e,t,n)=>{n.d(t,{O:()=>N});var r=n(1504),i=n(9648),l=n(7168),o=n(7616),a=n(6803),s=n(1423),u=n(5884),c=n(1408),d=n(7368);var f=n(3408);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(e,t,n,r){let i=n?"enter":"leave",l=(0,f.O)(),a=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let s=(0,o._)(i,{enter:()=>t.enter,leave:()=>t.leave}),u=(0,o._)(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,o._)(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return m(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),p(e,...s,...c),l.nextFrame((()=>{m(e,...c),p(e,...u),function(e,t){let n=(0,f.O)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[l,o]=[r,i].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),a=l+o;if(0!==a){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),a),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(m(e,...s),p(e,...t.entered),a())))})),l.dispose}var h=n(9208);var g=n(8512),b=n(1099);function y(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let E=(0,r.createContext)(null);E.displayName="TransitionContext";var w,O=((w=O||{}).Visible="visible",w.Hidden="hidden",w);let S=(0,r.createContext)(null);function j(e){return"children"in e?j(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function C(e,t){let n=(0,u.s)(e),l=(0,r.useRef)([]),s=(0,a.E)(),c=(0,h.S)(),d=(0,g.y)(((e,t=i.em.Hidden)=>{let r=l.current.findIndex((({el:t})=>t===e));-1!==r&&((0,o._)(t,{[i.em.Unmount](){l.current.splice(r,1)},[i.em.Hidden](){l.current[r].state="hidden"}}),c.microTask((()=>{var e;!j(l)&&s.current&&(null==(e=n.current)||e.call(n))})))})),f=(0,g.y)((e=>{let t=l.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):l.current.push({el:e,state:"visible"}),()=>d(e,i.em.Unmount)})),p=(0,r.useRef)([]),m=(0,r.useRef)(Promise.resolve()),v=(0,r.useRef)({enter:[],leave:[],idle:[]}),b=(0,g.y)(((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(v.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?m.current=m.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),y=(0,g.y)(((e,t,n)=>{Promise.all(v.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:l,register:f,unregister:d,onStart:b,onStop:y,wait:m,chains:v})),[f,d,l,b,y,v,m])}function T(){}S.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function A(e){var t;let n={};for(let r of P)n[r]=null!=(t=e[r])?t:T;return n}let F=i.B4.RenderStrategy;let k=(0,i.op)((function(e,t){let{show:n,appear:o=!1,unmount:a,...u}=e,f=(0,r.useRef)(null),p=(0,d.q)(f,t);(0,c.g)();let m=(0,l.qc)();if(void 0===n&&null!==m&&(n=(m&l.Ad.Open)===l.Ad.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,r.useState)(n?"visible":"hidden"),b=C((()=>{h("hidden")})),[y,w]=(0,r.useState)(!0),O=(0,r.useRef)([n]);(0,s.m)((()=>{!1!==y&&O.current[O.current.length-1]!==n&&(O.current.push(n),w(!1))}),[O,n]);let T=(0,r.useMemo)((()=>({show:n,appear:o,initial:y})),[n,o,y]);(0,r.useEffect)((()=>{if(n)h("visible");else if(j(b)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,b]);let P={unmount:a},A=(0,g.y)((()=>{var t;y&&w(!1),null==(t=e.beforeEnter)||t.call(e)})),k=(0,g.y)((()=>{var t;y&&w(!1),null==(t=e.beforeLeave)||t.call(e)}));return r.createElement(S.Provider,{value:b},r.createElement(E.Provider,{value:T},(0,i.ai)({ourProps:{...P,as:r.Fragment,children:r.createElement(L,{ref:p,...P,...u,beforeEnter:A,beforeLeave:k})},theirProps:{},defaultTag:r.Fragment,features:F,visible:"visible"===v,name:"Transition"})))})),L=(0,i.op)((function(e,t){let{beforeEnter:n,afterEnter:p,beforeLeave:m,afterLeave:w,enter:O,enterFrom:T,enterTo:P,entered:k,leave:L,leaveFrom:R,leaveTo:N,...x}=e,H=(0,r.useRef)(null),_=(0,d.q)(H,t),D=x.unmount?i.em.Unmount:i.em.Hidden,{show:U,appear:I,initial:B}=function(){let e=(0,r.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[q,M]=(0,r.useState)(U?"visible":"hidden"),$=function(){let e=(0,r.useContext)(S);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:V,unregister:W}=$,Y=(0,r.useRef)(null);(0,r.useEffect)((()=>V(H)),[V,H]),(0,r.useEffect)((()=>{if(D===i.em.Hidden&&H.current)return U&&"visible"!==q?void M("visible"):(0,o._)(q,{hidden:()=>W(H),visible:()=>V(H)})}),[q,H,V,W,U,D]);let z=(0,u.s)({enter:y(O),enterFrom:y(T),enterTo:y(P),entered:y(k),leave:y(L),leaveFrom:y(R),leaveTo:y(N)}),G=function(e){let t=(0,r.useRef)(A(e));return(0,r.useEffect)((()=>{t.current=A(e)}),[e]),t}({beforeEnter:n,afterEnter:p,beforeLeave:m,afterLeave:w}),J=(0,c.g)();(0,r.useEffect)((()=>{if(J&&"visible"===q&&null===H.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[H,q,J]);let K=B&&!I,Q=!J||K||Y.current===U?"idle":U?"enter":"leave",X=function(e=0){let[t,n]=(0,r.useState)(e),i=(0,a.E)(),l=(0,r.useCallback)((e=>{i.current&&n((t=>t|e))}),[t,i]),o=(0,r.useCallback)((e=>Boolean(t&e)),[t]),s=(0,r.useCallback)((e=>{i.current&&n((t=>t&~e))}),[n,i]),u=(0,r.useCallback)((e=>{i.current&&n((t=>t^e))}),[n]);return{flags:t,addFlag:l,hasFlag:o,removeFlag:s,toggleFlag:u}}(0),Z=(0,g.y)((e=>(0,o._)(e,{enter:()=>{X.addFlag(l.Ad.Opening),G.current.beforeEnter()},leave:()=>{X.addFlag(l.Ad.Closing),G.current.beforeLeave()},idle:()=>{}}))),ee=(0,g.y)((e=>(0,o._)(e,{enter:()=>{X.removeFlag(l.Ad.Opening),G.current.afterEnter()},leave:()=>{X.removeFlag(l.Ad.Closing),G.current.afterLeave()},idle:()=>{}}))),te=C((()=>{M("hidden"),W(H)}),$);(function({container:e,direction:t,classes:n,onStart:r,onStop:i}){let l=(0,a.E)(),o=(0,h.S)(),c=(0,u.s)(t);(0,s.m)((()=>{let t=(0,f.O)();o.add(t.dispose);let a=e.current;if(a&&"idle"!==c.current&&l.current)return t.dispose(),r.current(c.current),t.add(v(a,n.current,"enter"===c.current,(()=>{t.dispose(),i.current(c.current)}))),t.dispose}),[t])})({container:H,classes:z,direction:Q,onStart:(0,u.s)((e=>{te.onStart(H,e,Z)})),onStop:(0,u.s)((e=>{te.onStop(H,e,ee),"leave"===e&&!j(te)&&(M("hidden"),W(H))}))}),(0,r.useEffect)((()=>{K&&(D===i.em.Hidden?Y.current=null:Y.current=U)}),[U,K,q]);let ne=x,re={ref:_};return I&&U&&B&&(ne={...ne,className:(0,b.g)(x.className,...z.current.enter,...z.current.enterFrom)}),r.createElement(S.Provider,{value:te},r.createElement(l.uR,{value:(0,o._)(q,{visible:l.Ad.Open,hidden:l.Ad.Closed})|X.flags},(0,i.ai)({ourProps:re,theirProps:ne,defaultTag:"div",features:F,visible:"visible"===q,name:"Transition.Child"})))})),R=(0,i.op)((function(e,t){let n=null!==(0,r.useContext)(E),i=null!==(0,l.qc)();return r.createElement(r.Fragment,null,!n&&i?r.createElement(k,{ref:t,...e}):r.createElement(L,{ref:t,...e}))})),N=Object.assign(k,{Child:R,Root:k})},9208:(e,t,n)=>{n.d(t,{S:()=>l});var r=n(1504),i=n(3408);function l(){let[e]=(0,r.useState)(i.O);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},8512:(e,t,n)=>{n.d(t,{y:()=>l});var r=n(1504),i=n(5884);let l=function(e){let t=(0,i.s)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},1403:(e,t,n)=>{n.d(t,{I:()=>s});var r,i=n(1504),l=n(1423),o=n(1408),a=n(168);let s=null!=(r=i.useId)?r:function(){let e=(0,o.g)(),[t,n]=i.useState(e?()=>a._.nextId():null);return(0,l.m)((()=>{null===t&&n(a._.nextId())}),[t]),null!=t?""+t:void 0}},6803:(e,t,n)=>{n.d(t,{E:()=>l});var r=n(1504),i=n(1423);function l(){let e=(0,r.useRef)(!1);return(0,i.m)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},1423:(e,t,n)=>{n.d(t,{m:()=>l});var r=n(1504),i=n(168);let l=(e,t)=>{i._.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},5884:(e,t,n)=>{n.d(t,{s:()=>l});var r=n(1504),i=n(1423);function l(e){let t=(0,r.useRef)(e);return(0,i.m)((()=>{t.current=e}),[e]),t}},1408:(e,t,n)=>{n.d(t,{g:()=>l});var r=n(1504),i=n(168);function l(){let[e,t]=(0,r.useState)(i._.isHandoffComplete);return e&&!1===i._.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>i._.handoff()),[]),e}},7368:(e,t,n)=>{n.d(t,{q:()=>a,s:()=>o});var r=n(1504),i=n(8512);let l=Symbol();function o(e,t=!0){return Object.assign(e,{[l]:t})}function a(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,i.y)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[l])))?void 0:n}},7168:(e,t,n)=>{n.d(t,{Ad:()=>o,qc:()=>a,uR:()=>s});var r=n(1504);let i=(0,r.createContext)(null);i.displayName="OpenClosedContext";var l,o=((l=o||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function a(){return(0,r.useContext)(i)}function s({value:e,children:t}){return r.createElement(i.Provider,{value:e},t)}},1792:(e,t,n)=>{function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{g:()=>r})},1099:(e,t,n)=>{function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{g:()=>r})},3408:(e,t,n)=>{n.d(t,{O:()=>i});var r=n(6840);function i(){let e=[],t={addEventListener:(e,n,r,i)=>(e.addEventListener(n,r,i),t.add((()=>e.removeEventListener(n,r,i)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return(0,r.y)((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=i();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}},168:(e,t,n)=>{n.d(t,{_:()=>l});var r=Object.defineProperty,i=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},7616:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}n.d(t,{_:()=>r})},6840:(e,t,n)=>{function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{y:()=>r})},2448:(e,t,n)=>{n.d(t,{e:()=>i});var r=n(168);function i(e){return r._.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},9648:(e,t,n)=>{n.d(t,{B4:()=>s,ai:()=>c,em:()=>u,op:()=>p});var r,i,l=n(1504),o=n(1099),a=n(7616),s=((i=s||{})[i.None=0]="None",i[i.RenderStrategy=1]="RenderStrategy",i[i.Static=2]="Static",i),u=((r=u||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:l=!0,name:o}){let s=f(t,e);if(l)return d(s,n,r,o);let u=null!=i?i:0;if(2&u){let{static:e=!1,...t}=s;if(e)return d(t,n,r,o)}if(1&u){let{unmount:e=!0,...t}=s;return(0,a._)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,o)})}return d(s,n,r,o)}function d(e,t={},n,r){let{as:i=n,children:a,refName:s="ref",...u}=v(e,["unmount","static"]),c=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let p={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(i===l.Fragment&&Object.keys(m(u)).length>0){if(!(0,l.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,o.g)(null==e?void 0:e.className(...t),u.className):(0,o.g)(null==e?void 0:e.className,u.className),n=t?{className:t}:{};return(0,l.cloneElement)(d,Object.assign({},f(d.props,m(v(u,["ref"]))),p,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,l.createElement)(i,Object.assign({},v(u,["ref"]),i!==l.Fragment&&c,i!==l.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let i=n[r];for(let n of i){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}}}]);