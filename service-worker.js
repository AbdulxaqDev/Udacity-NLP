if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const c=e=>n(e,s),d={module:{uri:s},exports:t,require:c};i[s]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"cabef01950a62e07d7610bbbae697b98"},{url:"50f99ba5493f46d03ad8ce2cd98776fd.ico",revision:null},{url:"favicon.ico",revision:"2de62613afa38a38d4826e932bf25318"},{url:"main.css",revision:"1fe4a06cea585b1d28d6966b968eb222"},{url:"main.js",revision:"06785ec9aee04d2e609b59c1a4415a13"}],{})}));
