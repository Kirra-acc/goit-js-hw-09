var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form");function u(e,t){const n={position:e,delay:t},o=Math.random()>.3;return new Promise(((e,r)=>{setTimeout((()=>{o?e(n):r(n)}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=Number(i.querySelector("input[name='delay']").value),n=Number(i.querySelector("input[name='step']").value),o=Number(i.querySelector("input[name='amount']").value);for(let e=1;e<=o;e+=1)u(e,t+(e-1)*n).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}));i.reset()}));
//# sourceMappingURL=03-promises.a175f948.js.map