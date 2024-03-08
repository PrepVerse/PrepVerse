"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9576],{9184:(e,t,r)=>{r.d(t,{c:()=>b});var n=r(1504),a=r(440),o=r(2656),c=r(9936),l=r(1724),i=r(2640);const s=n.createContext({collectLink:()=>{}});var m=r(1080);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e,t){var r,d,f,b,{isNavLink:h,to:v,href:y,activeClassName:E,isActive:x,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=e,k=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:j}}=(0,c.c)(),{withBaseUrl:L}=(0,m.E)(),N=(0,n.useContext)(s),S=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,(()=>S.current));const C=v||y;const T=(0,l.c)(C),D=null===(d=C)||void 0===d||null===(r=d.replace)||void 0===r?void 0:r.call(d,"pathname://","");let M=void 0!==D?(I=D,O&&(e=>e.startsWith("/"))(I)?L(I):I):void 0;var I;M&&T&&(M=(0,o.applyTrailingSlash)(M,{trailingSlash:P,baseUrl:j}));const B=(0,n.useRef)(!1),R=h?a.Af:a.cH,A=i.c.canUseIntersectionObserver,V=(0,n.useRef)(),F=()=>{B.current||null==M||(window.docusaurus.preload(M),B.current=!0)};var U;(0,n.useEffect)((()=>(!A&&T&&null!=M&&window.docusaurus.prefetch(M),()=>{A&&V.current&&V.current.disconnect()})),[V,M,A,T]);const $=null!==(U=null===(b=M)||void 0===b||null===(f=b.startsWith)||void 0===f?void 0:f.call(b,"#"))&&void 0!==U&&U,G=!M||!T||$;return G||w||N.collectLink(M),G?n.createElement("a",u({ref:S,href:M},C&&!T&&{target:"_blank",rel:"noopener noreferrer"},k)):n.createElement(R,u(g(u({},k),{onMouseEnter:F,onTouchStart:F,innerRef:e=>{S.current=e,A&&e&&T&&(V.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(V.current.unobserve(e),V.current.disconnect(),null!=M&&window.docusaurus.prefetch(M))}))})),V.current.observe(e))},to:M}),h&&{isActive:x,activeClassName:E}))}const b=n.forwardRef(f)},5628:(e,t,r)=>{r.d(t,{W:()=>n});const n={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button",codeBlock:"theme-code-block",admonition:"theme-admonition",admonitionType:e=>`theme-admonition-${e}`},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}}},3624:(e,t,r)=>{r.d(t,{O:()=>h});var n=r(1504),a=r(4971),o=r(9184),c=r(844),l=r(8472),i=r(3652);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),n.createElement("path",{fill:"currentColor",d:"M14.4 4.8a4 4 0 0 0-4.8 0l-4 3a4 4 0 0 0-1.431 4.35l1.5 5A4 4 0 0 0 9.5 20h.5a.5.5 0 0 0 .5-.5v-2a1.5 1.5 0 0 1 3 0v2a.5.5 0 0 0 .5.5h.5a4 4 0 0 0 3.831-2.85l1.5-5A4 4 0 0 0 18.4 7.8l-4-3Z"}));function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),n.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.25,d:"M10.438 8.875 13.562 12l-3.124 3.125"})),g={landing:[720,960,1296,1440,1584],tw:[640,768,1024,1280,1536]},p=(e={variant:"tw"})=>{const[t,r]=n.useState(!0),[a,o]=n.useState(!0),[c,l]=n.useState(!0),[i,s]=n.useState(!0),[m,d]=n.useState(!1);return n.useEffect((()=>{if("undefined"!=typeof window){const[t,n,a,c,i]=g[e.variant].map((e=>window.matchMedia(`(min-width: ${e}px)`))),m=e=>{r(e.matches)},u=e=>{o(e.matches)},p=e=>{l(e.matches)},f=e=>{s(e.matches)},b=e=>{d(e.matches)};return t.addEventListener("change",m),n.addEventListener("change",u),a.addEventListener("change",p),c.addEventListener("change",f),i.addEventListener("change",b),r(t.matches),o(n.matches),l(a.matches),s(c.matches),d(i.matches),()=>{t.removeEventListener("change",m),n.removeEventListener("change",u),a.removeEventListener("change",p),c.removeEventListener("change",f),i.removeEventListener("change",b)}}}),[]),{sm:t,md:a,lg:c,xl:i,xxl:m}};function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const h=()=>{const e=p(),t=(0,c.js)(),r=(0,l.Y5)();if(!t)return null;const[s,d]=(0,n.useMemo)((()=>{const r=t.length>3&&!e.sm;return[t.map(((e,t,n)=>b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}({},e),{hideOnMobile:r&&t>0&&t<n.length-2}))),r]}),[t]);return n.createElement("nav",{className:(0,a.c)("refine-breadcrumbs","pb-6"),"aria-label":(0,i.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},s.find((e=>"Examples"===e.label))&&n.createElement("div",{className:(0,a.c)("example-full-title","hidden","h-0 w-0","overflow-hidden"),"aria-hidden":!0},s.slice(2).map((e=>e.label)).join(" ")," Example"),n.createElement("ul",{className:(0,a.c)("breadcrumbs","flex flex-wrap items-center"),itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},r&&n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},n.createElement(o.c,{href:"/docs",itemProp:"item"},n.createElement(m,{className:"text-gray-400 dark:text-gray-500"}),n.createElement("span",{className:"sr-only",itemProp:"name"},"Documentation"),n.createElement("meta",{itemProp:"position",content:"1"}))),s.map(((e,r)=>{const c=r===t.length-1;return n.createElement(n.Fragment,{key:r},n.createElement("li",{className:(0,a.c)("flex-row flex-nowrap",e.hideOnMobile?"hidden":"flex"),itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},n.createElement(u,{className:"text-gray-400 dark:text-gray-500"}),e.href&&!c?n.createElement(o.c,{href:e.href,className:(0,a.c)("text-gray-500 dark:text-gray-400","text-base"),itemProp:"item",itemID:e.href},n.createElement("span",{itemProp:"name"},e.label)):n.createElement("span",{className:(0,a.c)(c?"text-gray-400 dark:text-gray-500":"text-gray-500 dark:text-gray-400"),itemProp:"item",itemID:"#"},n.createElement("span",{itemProp:"name"},e.label)),n.createElement("meta",{itemProp:"position",content:String(r+2)})),0===r&&s.length>1&&d?n.createElement("li",{className:(0,a.c)("flex flex-row flex-nowrap")},n.createElement(u,{className:"text-gray-400 dark:text-gray-500"}),n.createElement("div",{className:"text-gray-500 dark:text-gray-400"},"...")):null)}))))}},8692:(e,t,r)=>{r.d(t,{l:()=>o});var n=r(1504),a=r(4971);const o=({version:e})=>n.createElement("div",{className:(0,a.c)("text-xs","py-[7px] px-4","rounded-[32px]","font-jetBrains-mono","border border-solid","border-gray-300 dark:border-gray-700","text-gray-500 dark:text-gray-400")},e)},6112:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(1504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.29289 7.70711C7.68342 8.09763 8.31658 8.09763 8.70711 7.70711L11.7071 4.70711C12.0976 4.31658 12.0976 3.68342 11.7071 3.29289L8.70711 0.292893C8.31658 -0.0976313 7.68342 -0.0976313 7.29289 0.292893C6.90237 0.683417 6.90237 1.31658 7.29289 1.70711L8.58579 3L1 3C0.447715 3 -1.26563e-07 3.44771 -1.74846e-07 4C-2.23128e-07 4.55228 0.447715 5 1 5L8.58579 5L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711Z",fill:"currentColor"}))},7416:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(1504),a=r(6684),o=r(844),c=r(1080),l=r(4971),i=r(9184),s=r(1724);function m({href:e,children:t}){return n.createElement(i.c,{href:e,className:(0,l.c)("no-underline","rounded-lg","dark:bg-gray-800 bg-gray-50","p-4","flex flex-col","gap-2 sm:gap-4 2xl:gap-6","hover:no-underline")},t)}function d({href:e,icon:t,title:r,description:a}){return n.createElement(m,{href:e},n.createElement("h2",{className:(0,l.c)("line-clamp-1","text-xs sm:text-base 2xl:text-xl","dark:text-gray-200 text-gray-900","font-semibold","m-0"),title:r},n.createElement("span",{className:"mr-2"},t),n.createElement("span",null,r)),a&&n.createElement("p",{className:(0,l.c)("line-clamp-3","m-0","text-xs sm:text-sm 2xl:text-lg","dark:text-gray-400 text-gray-700","font-normal","refine-prose"),title:a},a))}function u({item:e}){const t=(0,o.OQ)(e);return t?n.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:`${e.items.length} items`}):null;var r}function g({item:e}){var t;const r=(0,s.c)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var a;const c=(0,o._4)(null!==(a=e.docId)&&void 0!==a?a:void 0);var l;return n.createElement(d,{href:e.href,icon:r,title:e.label,description:null!==(l=e.description)&&void 0!==l?l:null===(t=c)||void 0===t?void 0:t.description})}const p=({item:e})=>{switch(e.type){case"link":return n.createElement(g,{item:e});case"category":return n.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}};function f({className:e}){const t=(0,o.wt)();return n.createElement(b,{items:t.items,className:e})}const b=e=>{const{items:t}=e;if(!t)return n.createElement(f,e);const r=(0,o.ML)(t);return n.createElement(n.Fragment,null,r.map(((e,t)=>n.createElement(p,{key:t,item:e}))))};var h=r(2076),v=r(1364),y=r(8692),E=r(3624),x=r(1688);function w({categoryGeneratedIndex:e}){return n.createElement(a.U7,{title:e.title,description:e.description,keywords:e.keywords,image:(0,c.c)(e.image)})}function O({categoryGeneratedIndex:e}){const t=(0,o.wt)(),{label:r}=(0,x.E)();return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.c)("flex flex-1 flex-col","items-center justify-start","px-4 sm:px-0 py-4 sm:py-14","w-full")},n.createElement("div",{className:(0,l.c)("max-w-screen-content w-full")},n.createElement(v.c,null),n.createElement("div",{className:(0,l.c)("flex flex-col","mb-8")},n.createElement(E.O,null),n.createElement("div",{className:"flex"},n.createElement(y.l,{version:r}))),n.createElement("div",{className:"refine-prose mb-16"},n.createElement("header",null,n.createElement("h1",null,e.title),e.description&&n.createElement("p",{className:"mb-8",dangerouslySetInnerHTML:{__html:e.description}})),n.createElement("article",{className:(0,l.c)("grid grid-cols-1 sm:grid-cols-2","gap-2 sm:gap-4 2xl:gap-8","not-prose")},n.createElement(b,{items:t.items})))),n.createElement("div",{className:(0,l.c)("max-w-screen-content","w-full")},n.createElement(h.c,{previous:e.navigation.previous,next:e.navigation.next}))),n.createElement("div",{className:(0,l.c)("hidden xl:block","w-full","sticky right-0 top-[67px]","max-w-[280px]","overflow-auto","h-[calc(100vh-67px)]","pl-3","pr-3","py-12","border-l dark:border-l-gray-700 border-l-gray-100","invisible")}))}const k=e=>n.createElement(n.Fragment,null,n.createElement(w,e),n.createElement(O,e))},2076:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(1504),a=r(4971),o=r(9184);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.70711 0.292893C4.31658 -0.0976311 3.68342 -0.097631 3.29289 0.292893L0.292893 3.29289C-0.0976314 3.68342 -0.0976314 4.31658 0.292893 4.70711L3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.09763 7.31658 5.09763 6.68342 4.70711 6.29289L3.41421 5L11 5C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3L3.41421 3L4.70711 1.70711C5.09763 1.31658 5.09763 0.683417 4.70711 0.292893Z",fill:"currentColor"}));var i=r(6112);const s=e=>{const{previous:t,next:r}=e;return n.createElement("div",{className:(0,a.c)("grid grid-cols-2","gap-4 2xl:gap-8","w-full")},t&&n.createElement(o.c,{href:t.permalink,className:(0,a.c)("group","flex-1","p-4","rounded-lg","border border-gray-300 dark:border-gray-600","hover:bg-gray-100 hover:dark:bg-gray-700","hover:no-underline")},n.createElement("div",{className:"flex-1 flex items-start justify-center flex-col gap-2 text-left"},n.createElement("div",{className:(0,a.c)("flex items-center gap-2","text-base","text-gray-800 dark:text-gray-100")},n.createElement("span",{className:(0,a.c)("flex items-center justify-center","w-6 h-6")},n.createElement(l,{className:"text-gray-400 dark:text-gray-500"})),"Previous"),n.createElement("span",{className:(0,a.c)("text-base","text-refine-react-light-link dark:text-refine-react-dark-link","ml-8")},t.title))),r&&n.createElement(o.c,{href:r.permalink,className:(0,a.c)("group","flex-1","p-4","rounded-lg","border border-gray-300 dark:border-gray-600","hover:bg-gray-100 hover:dark:bg-gray-700","hover:no-underline",!t&&"col-start-2")},n.createElement("div",{className:"flex-1 flex items-end justify-center flex-col gap-2 text-right"},n.createElement("div",{className:(0,a.c)("flex items-center gap-2","text-base","text-gray-800 dark:text-gray-100")},"Next",n.createElement("span",{className:(0,a.c)("flex items-center justify-center","w-6 h-6")},n.createElement(i.G,{className:"text-gray-400 dark:text-gray-500"}))),n.createElement("span",{className:(0,a.c)("text-base","text-refine-react-light-link dark:text-refine-react-dark-link","mr-8")},r.title))))}},1364:(e,t,r)=>{r.d(t,{c:()=>b});var n=r(1504),a=r(4971),o=r(9936),c=r(9184),l=r(3652),i=r(4245),s=r(5628),m=r(1880),d=r(1688);const u={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(l.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(l.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} ({versionLabel})")}};function g(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p({versionLabel:e,to:t,onClick:r}){return n.createElement(l.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(c.c,{to:t,onClick:r},n.createElement(l.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest docs")))}},"For {versionLabel} documentation, see the {latestVersionLink} ({versionLabel}).")}function f({className:e,versionMetadata:t}){const{siteConfig:{title:r}}=(0,o.c)(),{pluginId:c}=(0,i.UF)({failfast:!0}),{savePreferredVersionName:l}=(0,m.iy)(c),{latestDocSuggestion:d,latestVersionSuggestion:u}=(0,i.i8)(c),f=null!=d?d:(b=u).docs.find((e=>e.id===b.mainDocId));var b;return n.createElement("div",{className:(0,a.c)(e,s.W.docs.docVersionBanner,"alert alert--success margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:u.label,to:f.path,onClick:()=>l(u.name)})))}function b({className:e}){const t=(0,d.E)();return t.banner?n.createElement(f,{className:e,versionMetadata:t}):null}}}]);