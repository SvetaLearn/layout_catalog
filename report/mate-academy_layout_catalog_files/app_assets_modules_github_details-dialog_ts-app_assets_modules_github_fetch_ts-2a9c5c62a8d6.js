"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_details-dialog_ts-app_assets_modules_github_fetch_ts"],{19146:(e,t,r)=>{r.d(t,{W:()=>o});var n=r(59753);async function o(e){let t=document.querySelector("#site-details-dialog"),r=t.content.cloneNode(!0),o=r.querySelector("details"),a=o.querySelector("details-dialog"),s=o.querySelector(".js-details-dialog-spinner");e.detailsClass&&o.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&a.classList.add(...e.dialogClass.split(" ")),e.label?a.setAttribute("aria-label",e.label):e.labelledBy&&a.setAttribute("aria-labelledby",e.labelledBy),document.body.append(r);try{let t=await e.content;s.remove(),a.prepend(t)}catch(r){s.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),a.prepend(t)}return o.addEventListener("toggle",()=>{o.hasAttribute("open")||((0,n.f)(a,"dialog:remove"),o.remove())}),a}},34892:(e,t,r)=>{r.d(t,{DF:()=>p,Fr:()=>f,a_:()=>d});var n=r(67525);function o(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let a=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function s(e,t,r=!1){let n=t.headers.get("content-type")||"";if(!r&&!n.startsWith("text/html"))throw new a(`expected response with text/html, but was ${n}`,t);if(r&&!(n.startsWith("text/html")||n.startsWith("application/json")))throw new a(`expected response with text/html or application/json, but was ${n}`,t);let o=t.headers.get("x-html-safe");if(o){if(!e.includes(o))throw new a("response X-HTML-Safe nonce did not match",t)}else throw new a("missing X-HTML-Safe nonce",t)}var i=r(22490),l=r(7180);let c="server-x-safe-html",u=i.Z.createPolicy(c,{createHTML:(e,t)=>l.O.apply({policy:()=>(s(o(document),t),e),policyName:c,fallback:e,silenceErrorReporting:!0})});async function d(e,t,r){let o=new Request(t,r);o.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(o);if(a.status<200||a.status>=300)throw Error(`HTTP ${a.status}${a.statusText||""}`);let s=u.createHTML(await a.text(),a);return(0,n.r)(e,s)}function p(e,t,r=1e3,n=[200]){return async function r(o){let a=new Request(e,t);a.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(a);if(202===s.status)return await new Promise(e=>setTimeout(e,o)),r(1.5*o);if(n.includes(s.status))return s;if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);throw Error(`Unexpected ${s.status} response status from poll endpoint`)}(r)}async function f(e,t,r){let{wait:n=500,acceptedStatusCodes:o=[200],max:a=3,attempt:s=0}=r||{},i=async()=>new Promise((r,i)=>{setTimeout(async()=>{try{let n=new Request(e,t);n.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(n);if(o.includes(i.status)||s+1===a)return r(i);r("retry")}catch(e){i(e)}},n*s)}),l=await i();return"retry"!==l?l:f(e,t,{wait:n,acceptedStatusCodes:o,max:a,attempt:s+1})}},67525:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(22490),o=r(7180);let a="parse-html-no-op",s=n.Z.createPolicy(a,{createHTML:e=>o.O.apply({policy:()=>e,policyName:a,fallback:e,sanitize:!1,fallbackOnError:!0})});function i(e,t){let r=e.createElement("template");return r.innerHTML=s.createHTML(t),e.importNode(r.content,!0)}},89359:(e,t,r)=>{function n(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=n("meta[name=analytics-location]");return e?e.content:window.location.pathname}function a(){let e=n("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let r=n("meta[name=analytics-location-params]");for(let e of(r&&(t+=(t?"&":"?")+r.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let r=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${r[0]}($|=)`,"g"),`$1${r[1]}$2`)}return t}function s(){return`${window.location.protocol}//${window.location.host}${o()+a()}`}r.d(t,{S:()=>s})},24601:(e,t,r)=>{r.d(t,{aJ:()=>R,cI:()=>S,eK:()=>g});var n=r(82918),o=r(83314),a=r(28382),s=r(89359),i=r(68202),l=r(53729),c=r(86283),u=r(46426);let d=!1,p=0,f=Date.now(),m=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function h(e){return e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message}function y(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}function w(e){return!!("AbortError"===e.name||"TypeError"===e.name&&m.has(e.message)||e.name.startsWith("ApiError")&&m.has(e.message))}function g(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!h(e)){if($(e))return;let r=Error(),n=y(e),o={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${n}`,stacktrace:S(r)};T(E(o,t));return}w(e)||T(E(b(e),t))}else w(e)||T(E(b(e),t))}async function T(e){if(!q())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(v(e.error.stacktrace)){d=!0;return}p++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function b(e){return{type:e.name,value:e.message,stacktrace:S(e)}}function E(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,s.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:R()||void 0,bundler:l.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function S(e){return(0,a.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let L=/(chrome|moz|safari)-extension:\/\//;function v(e){return e.some(e=>L.test(e.filename)||L.test(e.function))}function R(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,n.b)();return`anonymous-${t}`}let _=!1;function q(){return!_&&!d&&p<10&&(0,o.Gb)()}if(c.iG?.addEventListener("pageshow",()=>_=!1),c.iG?.addEventListener("pagehide",()=>_=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{g(e.data.error)})}let P=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"];function $(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(P.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}},7180:(e,t,r)=>{r.d(t,{O:()=>u,d:()=>TrustedTypesPolicyError});var n=r(46426),o=r(71643),a=r(24601),s=r(27856),i=r.n(s),l=r(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function c({policy:e,policyName:t,fallback:r,fallbackOnError:s=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,n.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let a=e();return c&&new Promise(e=>{let r=window.performance.now(),n=i().sanitize(a,{FORBID_ATTR:[]}),o=window.performance.now();if(a.length!==n.length){let s=Error("Trusted Types policy output sanitized"),i=s.stack?.slice(0,1e3),c=a.slice(0,250);(0,l.q)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:i,outputLength:a.length,sanitizedLength:n.length,executionTime:o-r}),e(a)}}),a}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,a.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!s))throw e}return r}let u={apply:c}},22490:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let a={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},s={createPolicy:(e,t)=>({name:e,...a,...t})},i=globalThis.trustedTypes??s,l=!1;n.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_details-dialog_ts-app_assets_modules_github_fetch_ts-ccc75d09447e.js.map