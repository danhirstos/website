(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function L(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function lt(t){return t()}function ue(){return Object.create(null)}function R(t){t.forEach(lt)}function fe(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ut(t){return Object.keys(t).length===0}function x(t,e,n,i){if(t){const l=ot(t,e,n,i);return t[0](l)}}function ot(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function ee(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],s=Math.max(e.dirty.length,l.length);for(let a=0;a<s;a+=1)o[a]=e.dirty[a]|l[a];return o}return e.dirty|l}return e.dirty}function te(t,e,n,i,l,o){if(l){const s=ot(e,n,i,o);t.p(s,l)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function J(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function de(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function me(t){return t==null?"":t}function dt(t){return t&&fe(t.destroy)?t.destroy:L}function S(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function K(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function N(){return F(" ")}function E(){return F("")}function rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function pe(t,e){for(const n in e)_(t,n,e[n])}function mt(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}class pt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=q(n.nodeName):this.e=w(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)b(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(h)}}let ae;function Z(t){ae=t}const X=[],_e=[],Y=[],he=[],_t=Promise.resolve();let re=!1;function ht(){re||(re=!0,_t.then(st))}function se(t){Y.push(t)}const le=new Set;let V=0;function st(){const t=ae;do{for(;V<X.length;){const e=X[V];V++,Z(e),gt(e.$$)}for(Z(null),X.length=0,V=0;_e.length;)_e.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];le.has(n)||(le.add(n),n())}Y.length=0}while(X.length);for(;he.length;)he.pop()();re=!1,le.clear(),Z(t)}function gt(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(se)}}const $=new Set;let z;function bt(){z={r:0,c:[],p:z}}function kt(){z.r||R(z.c),z=z.p}function P(t,e){t&&t.i&&($.delete(t),t.i(e))}function j(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),z.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ce(t,e){const n={},i={},l={$$scope:1};let o=t.length;for(;o--;){const s=t[o],a=e[o];if(a){for(const f in s)f in a||(i[f]=1);for(const f in a)l[f]||(n[f]=a[f],l[f]=1);t[o]=a}else for(const f in s)l[f]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ft(t){return typeof t=="object"&&t!==null?t:{}}function T(t){t&&t.c()}function H(t,e,n,i){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),i||se(()=>{const s=t.$$.on_mount.map(lt).filter(fe);t.$$.on_destroy?t.$$.on_destroy.push(...s):R(s),t.$$.on_mount=[]}),o.forEach(se)}function I(t,e){const n=t.$$;n.fragment!==null&&(R(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&(X.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,n,i,l,o,s,a=[-1]){const f=ae;Z(t);const u=t.$$={fragment:null,ctx:[],props:o,update:L,not_equal:l,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:ue(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};s&&s(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(d,m,...r)=>{const p=r.length?r[0]:m;return u.ctx&&l(u.ctx[d],u.ctx[d]=p)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](p),c&&wt(t,d)),m}):[],u.update(),c=!0,R(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const d=mt(e.target);u.fragment&&u.fragment.l(d),d.forEach(h)}else u.fragment&&u.fragment.c();e.intro&&P(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),st()}Z(f)}class W{$destroy(){I(this,1),this.$destroy=L}$on(e,n){if(!fe(n))return L;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ge(t,e,n){const i=t.slice();return i[11]=e[n],i}function be(t,e,n){const i=t.slice();return i[14]=e[n],i}function ke(t,e,n){const i=t.slice();return i[17]=e[n],i}function we(t){return document.title=t[0],{c:L,m:L,d:L}}function ve(t){let e;return{c(){e=w("meta"),_(e,"name","description"),_(e,"content",t[3])},m(n,i){b(n,e,i)},p(n,i){i&8&&_(e,"content",n[3])},d(n){n&&h(e)}}}function ye(t){let e;return{c(){e=w("link"),_(e,"rel","canonical"),_(e,"href",t[5])},m(n,i){b(n,e,i)},p(n,i){i&32&&_(e,"href",n[5])},d(n){n&&h(e)}}}function Ne(t){let e;return{c(){e=w("meta"),_(e,"name","keywords"),_(e,"content",t[4])},m(n,i){b(n,e,i)},p(n,i){i&16&&_(e,"content",n[4])},d(n){n&&h(e)}}}function Se(t){let e,n,i,l,o,s,a=t[6].title&&Ae(t),f=t[6].description&&Ce(t),u=(t[6].url||t[5])&&Oe(t),c=t[6].type&&Pe(t),d=t[6].article&&je(t),m=t[6].images&&t[6].images.length&&Be(t);return{c(){a&&a.c(),e=N(),f&&f.c(),n=N(),u&&u.c(),i=N(),c&&c.c(),l=N(),d&&d.c(),o=N(),m&&m.c(),s=E()},m(r,p){a&&a.m(r,p),b(r,e,p),f&&f.m(r,p),b(r,n,p),u&&u.m(r,p),b(r,i,p),c&&c.m(r,p),b(r,l,p),d&&d.m(r,p),b(r,o,p),m&&m.m(r,p),b(r,s,p)},p(r,p){r[6].title?a?a.p(r,p):(a=Ae(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r[6].description?f?f.p(r,p):(f=Ce(r),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null),r[6].url||r[5]?u?u.p(r,p):(u=Oe(r),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),r[6].type?c?c.p(r,p):(c=Pe(r),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null),r[6].article?d?d.p(r,p):(d=je(r),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),r[6].images&&r[6].images.length?m?m.p(r,p):(m=Be(r),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},d(r){a&&a.d(r),r&&h(e),f&&f.d(r),r&&h(n),u&&u.d(r),r&&h(i),c&&c.d(r),r&&h(l),d&&d.d(r),r&&h(o),m&&m.d(r),r&&h(s)}}}function Ae(t){let e,n;return{c(){e=w("meta"),_(e,"property","og:title"),_(e,"content",n=t[6].title)},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[6].title)&&_(e,"content",n)},d(i){i&&h(e)}}}function Ce(t){let e,n;return{c(){e=w("meta"),_(e,"property","og:description"),_(e,"content",n=t[6].description)},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[6].description)&&_(e,"content",n)},d(i){i&&h(e)}}}function Oe(t){let e,n;return{c(){e=w("meta"),_(e,"property","og:url"),_(e,"content",n=t[6].url||t[5])},m(i,l){b(i,e,l)},p(i,l){l&96&&n!==(n=i[6].url||i[5])&&_(e,"content",n)},d(i){i&&h(e)}}}function Pe(t){let e,n;return{c(){e=w("meta"),_(e,"property","og:type"),_(e,"content",n=t[6].type.toLowerCase())},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[6].type.toLowerCase())&&_(e,"content",n)},d(i){i&&h(e)}}}function je(t){let e,n,i,l,o,s,a=t[6].article.publishedTime&&Ee(t),f=t[6].article.modifiedTime&&Le(t),u=t[6].article.expirationTime&&He(t),c=t[6].article.section&&Ie(t),d=t[6].article.authors&&t[6].article.authors.length&&Te(t),m=t[6].article.tags&&t[6].article.tags.length&&De(t);return{c(){a&&a.c(),e=N(),f&&f.c(),n=N(),u&&u.c(),i=N(),c&&c.c(),l=N(),d&&d.c(),o=N(),m&&m.c(),s=E()},m(r,p){a&&a.m(r,p),b(r,e,p),f&&f.m(r,p),b(r,n,p),u&&u.m(r,p),b(r,i,p),c&&c.m(r,p),b(r,l,p),d&&d.m(r,p),b(r,o,p),m&&m.m(r,p),b(r,s,p)},p(r,p){r[6].article.publishedTime?a?a.p(r,p):(a=Ee(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r[6].article.modifiedTime?f?f.p(r,p):(f=Le(r),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null),r[6].article.expirationTime?u?u.p(r,p):(u=He(r),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),r[6].article.section?c?c.p(r,p):(c=Ie(r),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null),r[6].article.authors&&r[6].article.authors.length?d?d.p(r,p):(d=Te(r),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),r[6].article.tags&&r[6].article.tags.length?m?m.p(r,p):(m=De(r),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},d(r){a&&a.d(r),r&&h(e),f&&f.d(r),r&&h(n),u&&u.d(r),r&&h(i),c&&c.d(r),r&&h(l),d&&d.d(r),r&&h(o),m&&m.d(r),r&&h(s)}}}function Ee(t){let e,n;return{c(){e=w("meta"),_(e,"property","article:published_time"),_(e,"content",n=t[6].article.publishedTime)},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[6].article.publishedTime)&&_(e,"content",n)},d(i){i&&h(e)}}}function Le(t){let e,n;return{c(){e=w("meta"),_(e,"property","article:modified_time"),_(e,"content",n=t[6].article.modifiedTime)},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[6].article.modifiedTime)&&_(e,"content",n)},d(i){i&&h(e)}}}function He(t){let e,n;return{c(){e=w("meta"),_(e,"property","article:expiration_time"),_(e,"content",n=t[6].article.expirationTime)},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[6].article.expirationTime)&&_(e,"content",n)},d(i){i&&h(e)}}}function Ie(t){let e,n;return{c(){e=w("meta"),_(e,"property","article:section"),_(e,"content",n=t[6].article.section)},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[6].article.section)&&_(e,"content",n)},d(i){i&&h(e)}}}function Te(t){let e,n=t[6].article.authors,i=[];for(let l=0;l<n.length;l+=1)i[l]=Me(ke(t,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=E()},m(l,o){for(let s=0;s<i.length;s+=1)i[s].m(l,o);b(l,e,o)},p(l,o){if(o&64){n=l[6].article.authors;let s;for(s=0;s<n.length;s+=1){const a=ke(l,n,s);i[s]?i[s].p(a,o):(i[s]=Me(a),i[s].c(),i[s].m(e.parentNode,e))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(l){K(i,l),l&&h(e)}}}function Me(t){let e,n;return{c(){e=w("meta"),_(e,"property","article:author"),_(e,"content",n=t[17])},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[17])&&_(e,"content",n)},d(i){i&&h(e)}}}function De(t){let e,n=t[6].article.tags,i=[];for(let l=0;l<n.length;l+=1)i[l]=Ge(be(t,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=E()},m(l,o){for(let s=0;s<i.length;s+=1)i[s].m(l,o);b(l,e,o)},p(l,o){if(o&64){n=l[6].article.tags;let s;for(s=0;s<n.length;s+=1){const a=be(l,n,s);i[s]?i[s].p(a,o):(i[s]=Ge(a),i[s].c(),i[s].m(e.parentNode,e))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(l){K(i,l),l&&h(e)}}}function Ge(t){let e,n;return{c(){e=w("meta"),_(e,"property","article:tag"),_(e,"content",n=t[14])},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[14])&&_(e,"content",n)},d(i){i&&h(e)}}}function Be(t){let e,n=t[6].images,i=[];for(let l=0;l<n.length;l+=1)i[l]=Fe(ge(t,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=E()},m(l,o){for(let s=0;s<i.length;s+=1)i[s].m(l,o);b(l,e,o)},p(l,o){if(o&64){n=l[6].images;let s;for(s=0;s<n.length;s+=1){const a=ge(l,n,s);i[s]?i[s].p(a,o):(i[s]=Fe(a),i[s].c(),i[s].m(e.parentNode,e))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(l){K(i,l),l&&h(e)}}}function We(t){let e,n;return{c(){e=w("meta"),_(e,"property","og:image:alt"),_(e,"content",n=t[11].alt)},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[11].alt)&&_(e,"content",n)},d(i){i&&h(e)}}}function ze(t){let e,n;return{c(){e=w("meta"),_(e,"property","og:image:width"),_(e,"content",n=t[11].width.toString())},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[11].width.toString())&&_(e,"content",n)},d(i){i&&h(e)}}}function qe(t){let e,n;return{c(){e=w("meta"),_(e,"property","og:image:height"),_(e,"content",n=t[11].height.toString())},m(i,l){b(i,e,l)},p(i,l){l&64&&n!==(n=i[11].height.toString())&&_(e,"content",n)},d(i){i&&h(e)}}}function Fe(t){let e,n,i,l,o,s,a=t[11].alt&&We(t),f=t[11].width&&ze(t),u=t[11].height&&qe(t);return{c(){e=w("meta"),i=N(),a&&a.c(),l=N(),f&&f.c(),o=N(),u&&u.c(),s=E(),_(e,"property","og:image"),_(e,"content",n=t[11].url)},m(c,d){b(c,e,d),b(c,i,d),a&&a.m(c,d),b(c,l,d),f&&f.m(c,d),b(c,o,d),u&&u.m(c,d),b(c,s,d)},p(c,d){d&64&&n!==(n=c[11].url)&&_(e,"content",n),c[11].alt?a?a.p(c,d):(a=We(c),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null),c[11].width?f?f.p(c,d):(f=ze(c),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null),c[11].height?u?u.p(c,d):(u=qe(c),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(c){c&&h(e),c&&h(i),a&&a.d(c),c&&h(l),f&&f.d(c),c&&h(o),u&&u.d(c),c&&h(s)}}}function Je(t){let e,n,i,l,o,s,a,f,u,c,d,m=t[7].site&&Re(t),r=t[7].title&&Xe(t),p=t[7].description&&Ze(t),v=t[7].image&&Ke(t),A=t[7].imageAlt&&Ue(t),C=t[7].player&&Ve(t),y=t[7].playerWidth&&Qe(t),O=t[7].playerHeight&&Ye(t);return{c(){e=w("meta"),i=N(),m&&m.c(),l=N(),r&&r.c(),o=N(),p&&p.c(),s=N(),v&&v.c(),a=N(),A&&A.c(),f=N(),C&&C.c(),u=N(),y&&y.c(),c=N(),O&&O.c(),d=E(),_(e,"name","twitter:card"),_(e,"content",n=t[7].card||"summary_large_image")},m(g,k){b(g,e,k),b(g,i,k),m&&m.m(g,k),b(g,l,k),r&&r.m(g,k),b(g,o,k),p&&p.m(g,k),b(g,s,k),v&&v.m(g,k),b(g,a,k),A&&A.m(g,k),b(g,f,k),C&&C.m(g,k),b(g,u,k),y&&y.m(g,k),b(g,c,k),O&&O.m(g,k),b(g,d,k)},p(g,k){k&128&&n!==(n=g[7].card||"summary_large_image")&&_(e,"content",n),g[7].site?m?m.p(g,k):(m=Re(g),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),g[7].title?r?r.p(g,k):(r=Xe(g),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null),g[7].description?p?p.p(g,k):(p=Ze(g),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null),g[7].image?v?v.p(g,k):(v=Ke(g),v.c(),v.m(a.parentNode,a)):v&&(v.d(1),v=null),g[7].imageAlt?A?A.p(g,k):(A=Ue(g),A.c(),A.m(f.parentNode,f)):A&&(A.d(1),A=null),g[7].player?C?C.p(g,k):(C=Ve(g),C.c(),C.m(u.parentNode,u)):C&&(C.d(1),C=null),g[7].playerWidth?y?y.p(g,k):(y=Qe(g),y.c(),y.m(c.parentNode,c)):y&&(y.d(1),y=null),g[7].playerHeight?O?O.p(g,k):(O=Ye(g),O.c(),O.m(d.parentNode,d)):O&&(O.d(1),O=null)},d(g){g&&h(e),g&&h(i),m&&m.d(g),g&&h(l),r&&r.d(g),g&&h(o),p&&p.d(g),g&&h(s),v&&v.d(g),g&&h(a),A&&A.d(g),g&&h(f),C&&C.d(g),g&&h(u),y&&y.d(g),g&&h(c),O&&O.d(g),g&&h(d)}}}function Re(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:site"),_(e,"content",n=t[7].site)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].site)&&_(e,"content",n)},d(i){i&&h(e)}}}function Xe(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:title"),_(e,"content",n=t[7].title)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].title)&&_(e,"content",n)},d(i){i&&h(e)}}}function Ze(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:description"),_(e,"content",n=t[7].description)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].description)&&_(e,"content",n)},d(i){i&&h(e)}}}function Ke(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:image"),_(e,"content",n=t[7].image)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].image)&&_(e,"content",n)},d(i){i&&h(e)}}}function Ue(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:image:alt"),_(e,"content",n=t[7].imageAlt)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].imageAlt)&&_(e,"content",n)},d(i){i&&h(e)}}}function Ve(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:player"),_(e,"content",n=t[7].player)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].player)&&_(e,"content",n)},d(i){i&&h(e)}}}function Qe(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:player:width"),_(e,"content",n=t[7].playerWidth)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].playerWidth)&&_(e,"content",n)},d(i){i&&h(e)}}}function Ye(t){let e,n;return{c(){e=w("meta"),_(e,"name","twitter:player:height"),_(e,"content",n=t[7].playerHeight)},m(i,l){b(i,e,l)},p(i,l){l&128&&n!==(n=i[7].playerHeight)&&_(e,"content",n)},d(i){i&&h(e)}}}function $e(t){let e,n=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...t[8]})+"<"}/script>`,i;return{c(){e=new pt(!1),i=E(),e.a=i},m(l,o){e.m(n,l,o),b(l,i,o)},p(l,o){o&256&&n!==(n=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...l[8]})+"<"}/script>`)&&e.p(n)},d(l){l&&h(i),l&&e.d()}}}function vt(t){let e,n,i,l,o,s,a,f,u,c,d,m=t[0]&&we(t),r=t[3]&&ve(t),p=t[5]&&ye(t),v=t[4]&&Ne(t),A=t[6]&&Se(t),C=t[7]&&Je(t),y=t[8]&&$e(t);const O=t[10].default,g=x(O,t,t[9],null);return{c(){m&&m.c(),e=w("meta"),i=w("meta"),r&&r.c(),o=E(),p&&p.c(),s=E(),v&&v.c(),a=E(),A&&A.c(),f=E(),C&&C.c(),u=E(),y&&y.c(),c=E(),g&&g.c(),_(e,"name","robots"),_(e,"content",n=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`),_(i,"name","googlebot"),_(i,"content",l=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`)},m(k,M){m&&m.m(document.head,null),S(document.head,e),S(document.head,i),r&&r.m(document.head,null),S(document.head,o),p&&p.m(document.head,null),S(document.head,s),v&&v.m(document.head,null),S(document.head,a),A&&A.m(document.head,null),S(document.head,f),C&&C.m(document.head,null),S(document.head,u),y&&y.m(document.head,null),S(document.head,c),g&&g.m(document.head,null),d=!0},p(k,[M]){k[0]?m||(m=we(k),m.c(),m.m(e.parentNode,e)):m&&(m.d(1),m=null),(!d||M&6&&n!==(n=`${k[1]?"noindex":"index"},${k[2]?"nofollow":"follow"}`))&&_(e,"content",n),(!d||M&6&&l!==(l=`${k[1]?"noindex":"index"},${k[2]?"nofollow":"follow"}`))&&_(i,"content",l),k[3]?r?r.p(k,M):(r=ve(k),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null),k[5]?p?p.p(k,M):(p=ye(k),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null),k[4]?v?v.p(k,M):(v=Ne(k),v.c(),v.m(a.parentNode,a)):v&&(v.d(1),v=null),k[6]?A?A.p(k,M):(A=Se(k),A.c(),A.m(f.parentNode,f)):A&&(A.d(1),A=null),k[7]?C?C.p(k,M):(C=Je(k),C.c(),C.m(u.parentNode,u)):C&&(C.d(1),C=null),k[8]?y?y.p(k,M):(y=$e(k),y.c(),y.m(c.parentNode,c)):y&&(y.d(1),y=null),g&&g.p&&(!d||M&512)&&te(g,O,k,k[9],d?ee(O,k[9],M,null):ne(k[9]),null)},i(k){d||(P(g,k),d=!0)},o(k){j(g,k),d=!1},d(k){m&&m.d(k),h(e),h(i),r&&r.d(k),h(o),p&&p.d(k),h(s),v&&v.d(k),h(a),A&&A.d(k),h(f),C&&C.d(k),h(u),y&&y.d(k),h(c),g&&g.d(k)}}}function yt(t,e,n){let{$$slots:i={},$$scope:l}=e,{title:o=void 0}=e,{noindex:s=!1}=e,{nofollow:a=!1}=e,{description:f=void 0}=e,{keywords:u=void 0}=e,{canonical:c=void 0}=e,{openGraph:d=void 0}=e,{twitter:m=void 0}=e,{jsonLd:r=void 0}=e;return t.$$set=p=>{"title"in p&&n(0,o=p.title),"noindex"in p&&n(1,s=p.noindex),"nofollow"in p&&n(2,a=p.nofollow),"description"in p&&n(3,f=p.description),"keywords"in p&&n(4,u=p.keywords),"canonical"in p&&n(5,c=p.canonical),"openGraph"in p&&n(6,d=p.openGraph),"twitter"in p&&n(7,m=p.twitter),"jsonLd"in p&&n(8,r=p.jsonLd),"$$scope"in p&&n(9,l=p.$$scope)},[o,s,a,f,u,c,d,m,r,l,i]}class Nt extends W{constructor(e){super(),B(this,e,yt,vt,G,{title:0,noindex:1,nofollow:2,description:3,keywords:4,canonical:5,openGraph:6,twitter:7,jsonLd:8})}}function St(t){let e,n;return e=new Nt({props:{title:"Dan Hirst",description:"Portfolio website for Dan Hirst",openGraph:{title:"Dan Hirst",description:"Portfolio website for Dan Hirst, the coolest person in the universe",url:"https://www.danhirst.me",type:"website",images:[{url:"https://www.danhirst.me/big_map.png",width:512,height:512,alt:"World map emoji"}]}}}),{c(){T(e.$$.fragment)},m(i,l){H(e,i,l),n=!0},p:L,i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}class At extends W{constructor(e){super(),B(this,e,null,St,G,{})}}function Ct(t){let e,n,i,l,o,s,a,f,u,c,d,m,r;return{c(){e=w("div"),n=w("a"),i=w("div"),l=w("h3"),o=F(t[1]),s=N(),a=w("p"),f=F(t[2]),u=N(),c=w("p"),d=F(t[5]),_(l,"class","text-primary-600 dark:text-primary-400 underline group-hover:underline-offset-4 ease-in-out duration-300 forced-colors:block transition appearance-none"),_(a,"class","text-primary-500 dark:text-white"),_(c,"class","text-primary-300 dark:text-primary-200 transparency:text-sm absolute bottom-5"),_(i,"class","shadow-lg p-4 group group-[.is-inactive]:blur-sm relative group-[.is-active]:shadow-2xl group-[.is-active]:dark:border-4 focus-within:blur-none mx-auto max-w-md hover:shadow-md hover:border-primary-400 ease-in duration-100 h-40 text-left border-solid border-2 rounded-md border-primary-200"),_(n,"href",t[0]),_(n,"class",m=me(t[4])+" svelte-79mobw"),_(e,"class",r="mx-auto my-2 w-full "+t[3]+" group")},m(p,v){b(p,e,v),S(e,n),S(n,i),S(i,l),S(l,o),S(i,s),S(i,a),S(a,f),S(i,u),S(i,c),S(c,d)},p(p,[v]){v&2&&Q(o,p[1]),v&4&&Q(f,p[2]),v&32&&Q(d,p[5]),v&1&&_(n,"href",p[0]),v&16&&m!==(m=me(p[4])+" svelte-79mobw")&&_(n,"class",m),v&8&&r!==(r="mx-auto my-2 w-full "+p[3]+" group")&&_(e,"class",r)},i:L,o:L,d(p){p&&h(e)}}}function Ot(t,e,n){let i,l,o,{link:s}=e,{title:a}=e,{desc:f}=e,{tags:u}=e,{active_tag:c}=e;function d(m){return m==""||m==null?"":u.includes(m)?"is-active":"is-inactive"}return t.$$set=m=>{"link"in m&&n(0,s=m.link),"title"in m&&n(1,a=m.title),"desc"in m&&n(2,f=m.desc),"tags"in m&&n(6,u=m.tags),"active_tag"in m&&n(7,c=m.active_tag)},t.$$.update=()=>{t.$$.dirty&64&&n(5,i=u.join(" \u2022 ")),t.$$.dirty&128&&n(3,l=d(c)),t.$$.dirty&8&&n(4,o=l=="is-inactive"?"disabled":"")},[s,a,f,l,o,i,u,c]}class Pt extends W{constructor(e){super(),B(this,e,Ot,Ct,G,{link:0,title:1,desc:2,tags:6,active_tag:7})}}var xe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function jt(t){var f;let e,n,i;const l=t[7].default,o=x(l,t,t[6],null);let s=[xe,t[4],{width:t[2]},{height:t[2]},{stroke:t[1]},{"stroke-width":t[3]},{class:n=`lucide-icon lucide lucide-${t[0]} ${(f=t[5].class)!=null?f:""}`}],a={};for(let u=0;u<s.length;u+=1)a=D(a,s[u]);return{c(){e=q("svg"),o&&o.c(),pe(e,a)},m(u,c){b(u,e,c),o&&o.m(e,null),i=!0},p(u,[c]){var d;o&&o.p&&(!i||c&64)&&te(o,l,u,u[6],i?ee(l,u[6],c,null):ne(u[6]),null),pe(e,a=ce(s,[xe,c&16&&u[4],(!i||c&4)&&{width:u[2]},(!i||c&4)&&{height:u[2]},(!i||c&2)&&{stroke:u[1]},(!i||c&8)&&{"stroke-width":u[3]},(!i||c&33&&n!==(n=`lucide-icon lucide lucide-${u[0]} ${(d=u[5].class)!=null?d:""}`))&&{class:n}]))},i(u){i||(P(o,u),i=!0)},o(u){j(o,u),i=!1},d(u){u&&h(e),o&&o.d(u)}}}function Et(t,e,n){const i=["name","color","size","strokeWidth"];let l=de(e,i),{$$slots:o={},$$scope:s}=e,{name:a}=e,{color:f="currentColor"}=e,{size:u=24}=e,{strokeWidth:c=2}=e;return t.$$set=d=>{n(5,e=D(D({},e),J(d))),n(4,l=de(e,i)),"name"in d&&n(0,a=d.name),"color"in d&&n(1,f=d.color),"size"in d&&n(2,u=d.size),"strokeWidth"in d&&n(3,c=d.strokeWidth),"$$scope"in d&&n(6,s=d.$$scope)},e=J(e),[a,f,u,c,l,e,s,o]}class at extends W{constructor(e){super(),B(this,e,Et,jt,G,{name:0,color:1,size:2,strokeWidth:3})}}function Lt(t){let e,n,i,l,o;const s=t[1].default,a=x(s,t,t[2],null);return{c(){e=q("path"),n=N(),i=q("path"),l=N(),a&&a.c(),_(e,"d","M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"),_(i,"d","M9 18c-4.51 2-5-2-7-2")},m(f,u){b(f,e,u),b(f,n,u),b(f,i,u),b(f,l,u),a&&a.m(f,u),o=!0},p(f,u){a&&a.p&&(!o||u&4)&&te(a,s,f,f[2],o?ee(s,f[2],u,null):ne(f[2]),null)},i(f){o||(P(a,f),o=!0)},o(f){j(a,f),o=!1},d(f){f&&h(e),f&&h(n),f&&h(i),f&&h(l),a&&a.d(f)}}}function Ht(t){let e,n;const i=[{name:"github"},t[0]];let l={$$slots:{default:[Lt]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)l=D(l,i[o]);return e=new at({props:l}),{c(){T(e.$$.fragment)},m(o,s){H(e,o,s),n=!0},p(o,[s]){const a=s&1?ce(i,[i[0],ft(o[0])]):{};s&4&&(a.$$scope={dirty:s,ctx:o}),e.$set(a)},i(o){n||(P(e.$$.fragment,o),n=!0)},o(o){j(e.$$.fragment,o),n=!1},d(o){I(e,o)}}}function It(t,e,n){let{$$slots:i={},$$scope:l}=e;return t.$$set=o=>{n(0,e=D(D({},e),J(o))),"$$scope"in o&&n(2,l=o.$$scope)},e=J(e),[e,i,l]}class Tt extends W{constructor(e){super(),B(this,e,It,Ht,G,{})}}function Mt(t){let e,n,i,l,o,s,a;const f=t[1].default,u=x(f,t,t[2],null);return{c(){e=q("path"),n=N(),i=q("rect"),l=N(),o=q("circle"),s=N(),u&&u.c(),_(e,"d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"),_(i,"x","2"),_(i,"y","9"),_(i,"width","4"),_(i,"height","12"),_(o,"cx","4"),_(o,"cy","4"),_(o,"r","2")},m(c,d){b(c,e,d),b(c,n,d),b(c,i,d),b(c,l,d),b(c,o,d),b(c,s,d),u&&u.m(c,d),a=!0},p(c,d){u&&u.p&&(!a||d&4)&&te(u,f,c,c[2],a?ee(f,c[2],d,null):ne(c[2]),null)},i(c){a||(P(u,c),a=!0)},o(c){j(u,c),a=!1},d(c){c&&h(e),c&&h(n),c&&h(i),c&&h(l),c&&h(o),c&&h(s),u&&u.d(c)}}}function Dt(t){let e,n;const i=[{name:"linkedin"},t[0]];let l={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)l=D(l,i[o]);return e=new at({props:l}),{c(){T(e.$$.fragment)},m(o,s){H(e,o,s),n=!0},p(o,[s]){const a=s&1?ce(i,[i[0],ft(o[0])]):{};s&4&&(a.$$scope={dirty:s,ctx:o}),e.$set(a)},i(o){n||(P(e.$$.fragment,o),n=!0)},o(o){j(e.$$.fragment,o),n=!1},d(o){I(e,o)}}}function Gt(t,e,n){let{$$slots:i={},$$scope:l}=e;return t.$$set=o=>{n(0,e=D(D({},e),J(o))),"$$scope"in o&&n(2,l=o.$$scope)},e=J(e),[e,i,l]}class Bt extends W{constructor(e){super(),B(this,e,Gt,Dt,G,{})}}document.addEventListener("DOMContentLoaded",function(){const e=new U(20),n=new ie(e);ct.decode(".email",n)});function U(t){this.key=t}U.prototype.encode=function(t){let e="";for(let n=0;n<t.length;++n){const l=t.charCodeAt(n)^this.key;e+=this.fromHex(l)}return e};U.prototype.decode=function(t){let e="";for(let n=0;n<t.length;n+=2){const l=this.toHex(t,n)^this.key;e+=String.fromCharCode(l)}return e};U.prototype.fromHex=function(t){let e=t.toString(16);return t<16&&(e="0"+e),e};U.prototype.toHex=function(t,e){const n=t.substr(e,2);return parseInt(n,16)};function ie(t){this.coder=t}ie.prototype.encode=function(t){this.apply("encode",t)};ie.prototype.decode=function(t){this.apply("decode",t)};ie.prototype.apply=function(t,e){const n=e.getAttribute("href"),i=this.coder[t](n);e.setAttribute("href",i)};let ct={};ct.decode=function(t,e){const n=document.querySelectorAll(t),i=e.decode.bind(e);n.forEach(i)};function Wt(t){let e,n,i,l,o,s,a,f,u,c,d,m,r,p,v,A,C,y,O;return u=new Tt({}),m=new Bt({}),{c(){e=w("div"),n=w("div"),i=w("h1"),i.textContent="Dan Hirst",l=N(),o=w("h2"),o.textContent="Geospatial Engineer",s=N(),a=w("div"),f=w("a"),T(u.$$.fragment),c=N(),d=w("a"),T(m.$$.fragment),r=N(),p=w("h2"),p.textContent="About",v=N(),A=w("p"),A.textContent="Hi! I am a full-stack engineer focussed on geospatial applications. I am currently working at BeZero Carbon as a Senior Data Engineer, where I build satellite imagery pipelines to assess carbon offset projects. I live in Barcelona, Spain, where I am learning Spanish, hiking, and drinking sangria.",C=N(),y=w("div"),y.innerHTML='<a class="email w-32 text-primary-500 dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400 forced-colors:block p-2 rounded-md shadow-lg appearance-none ease-in duration-100 hover:bg-primary-500 hover:text-white border-solid border-2 border-primary-500" href="79757d78607b2e70777c7d66676024547379757d783a777b79" rel="nofollow, noindex">Get in touch</a>',_(i,"class",""),_(f,"href","https://github.com/dchirst"),_(f,"class","shadow-lg forced-colors:block hover:forced-colors:block p-2 dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400 text-primary-500 hover:bg-primary-500 hover:text-white mx-auto hover:shadow-md ease-in duration-100 text-left border-solid border-2 rounded-md border-primary-500"),_(d,"href","https://www.linkedin.com/in/dan-hirst/"),_(d,"class","shadow-lg dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400 forced-colors:block text-primary-500 p-2 hover:bg-primary-500 hover:text-white mx-auto hover:shadow-md ease-in duration-100 text-left border-solid border-2 rounded-md border-primary-500"),_(a,"class","grid grid-cols-2 max-w-xs mx-auto grid-rows-1 grid-flow-row gap-4 text-center m-5"),_(n,"class",""),_(p,"class","text-3xl text-center"),_(A,"class","text-left p-4"),_(y,"class","mx-auto h-auto my-auto m-4"),_(e,"class","mb-10 mt-24 max-w-3xl mx-auto")},m(g,k){b(g,e,k),S(e,n),S(n,i),S(n,l),S(n,o),S(n,s),S(n,a),S(a,f),H(u,f,null),S(a,c),S(a,d),H(m,d,null),S(e,r),S(e,p),S(e,v),S(e,A),S(e,C),S(e,y),O=!0},p:L,i(g){O||(P(u.$$.fragment,g),P(m.$$.fragment,g),O=!0)},o(g){j(u.$$.fragment,g),j(m.$$.fragment,g),O=!1},d(g){g&&h(e),I(u),I(m)}}}class zt extends W{constructor(e){super(),B(this,e,null,Wt,G,{})}}function et(t,e,n){const i=t.slice();return i[2]=e[n].title,i[3]=e[n].desc,i[4]=e[n].link,i[5]=e[n].tags,i}function tt(t){let e,n;return e=new Pt({props:{link:t[4],desc:t[3],title:t[2],tags:t[5],active_tag:t[1]}}),{c(){T(e.$$.fragment)},m(i,l){H(e,i,l),n=!0},p(i,l){const o={};l&1&&(o.link=i[4]),l&1&&(o.desc=i[3]),l&1&&(o.title=i[2]),l&1&&(o.tags=i[5]),l&2&&(o.active_tag=i[1]),e.$set(o)},i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function qt(t){let e,n,i,l,o,s,a=t[0],f=[];for(let c=0;c<a.length;c+=1)f[c]=tt(et(t,a,c));const u=c=>j(f[c],1,1,()=>{f[c]=null});return{c(){e=w("div"),n=w("h2"),i=F(t[2]),l=N(),o=w("div");for(let c=0;c<f.length;c+=1)f[c].c();_(n,"class","text-3xl text-center"),_(o,"class","grid gap-4 p-4 sm:grid-cols-2"),_(e,"class","mb-5")},m(c,d){b(c,e,d),S(e,n),S(n,i),S(e,l),S(e,o);for(let m=0;m<f.length;m+=1)f[m].m(o,null);s=!0},p(c,[d]){if((!s||d&4)&&Q(i,c[2]),d&3){a=c[0];let m;for(m=0;m<a.length;m+=1){const r=et(c,a,m);f[m]?(f[m].p(r,d),P(f[m],1)):(f[m]=tt(r),f[m].c(),P(f[m],1),f[m].m(o,null))}for(bt(),m=a.length;m<f.length;m+=1)u(m);kt()}},i(c){if(!s){for(let d=0;d<a.length;d+=1)P(f[d]);s=!0}},o(c){f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)j(f[d]);s=!1},d(c){c&&h(e),K(f,c)}}}function Ft(t,e,n){let{title:i}=e,{content:l}=e,{active_tag:o}=e;return t.$$set=s=>{"title"in s&&n(2,i=s.title),"content"in s&&n(0,l=s.content),"active_tag"in s&&n(1,o=s.active_tag)},[l,o,i]}class oe extends W{constructor(e){super(),B(this,e,Ft,qt,G,{title:2,content:0,active_tag:1})}}function Jt(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function nt(t,e,n){const i=t.slice();return i[8]=e[n],i}function it(t){let e,n=t[8]+"",i,l,o;return{c(){e=w("button"),i=F(n),_(e,"id",t[8]),_(e,"class","inline-block m-1")},m(s,a){b(s,e,a),S(e,i),l||(o=rt(e,"click",t[5]),l=!0)},p:L,d(s){s&&h(e),l=!1,o()}}}function Rt(t){let e,n,i,l,o,s,a,f,u,c,d=t[4],m=[];for(let r=0;r<d.length;r+=1)m[r]=it(nt(t,d,r));return i=new oe({props:{title:"Code",content:t[1],active_tag:t[0]}}),o=new oe({props:{title:"Blogs",content:t[2],active_tag:t[0]}}),a=new oe({props:{title:"Other",content:t[3],active_tag:t[0]}}),{c(){e=w("div");for(let r=0;r<m.length;r+=1)m[r].c();n=N(),T(i.$$.fragment),l=N(),T(o.$$.fragment),s=N(),T(a.$$.fragment),_(e,"class","mb-5")},m(r,p){b(r,e,p);for(let v=0;v<m.length;v+=1)m[v].m(e,null);b(r,n,p),H(i,r,p),b(r,l,p),H(o,r,p),b(r,s,p),H(a,r,p),f=!0,u||(c=[dt(Jt.call(null,e)),rt(e,"click_outside",t[6])],u=!0)},p(r,[p]){if(p&48){d=r[4];let y;for(y=0;y<d.length;y+=1){const O=nt(r,d,y);m[y]?m[y].p(O,p):(m[y]=it(O),m[y].c(),m[y].m(e,null))}for(;y<m.length;y+=1)m[y].d(1);m.length=d.length}const v={};p&1&&(v.active_tag=r[0]),i.$set(v);const A={};p&1&&(A.active_tag=r[0]),o.$set(A);const C={};p&1&&(C.active_tag=r[0]),a.$set(C)},i(r){f||(P(i.$$.fragment,r),P(o.$$.fragment,r),P(a.$$.fragment,r),f=!0)},o(r){j(i.$$.fragment,r),j(o.$$.fragment,r),j(a.$$.fragment,r),f=!1},d(r){r&&h(e),K(m,r),r&&h(n),I(i,r),r&&h(l),I(o,r),r&&h(s),I(a,r),u=!1,R(c)}}}function Xt(t,e,n){const i=[{title:"osdatahub Python",desc:"Open source Python package for the OS Data Hub API.",link:"https://github.com/OrdnanceSurvey/osdatahub",tags:["python","geospatial","package","work"]},{title:"osdatahub JavaScript",desc:"Open source Node package for the OS Data Hub API.",link:"https://github.com/OrdnanceSurvey/osdatahub-js",tags:["javascript","geospatial","package","work"]},{title:"Pret Crawl",desc:"Website that plans a pub crawl between Prets in London. Made to learn Svelte.",link:"https://www.pretcrawl.com",tags:["svelte","geospatial","website","personal"]},{title:"Country-A-Like",desc:"Fun website that determines which country looks like a given image ",link:"https://dchirst-what-country-am-i-main-nkgm6x.streamlitapp.com/",tags:["python","geospatial","website","personal"]},{title:"Space Company Name Generator",desc:"Make your own space company in 1 easy step. First website I ever made.",link:"https://danhirst98.github.io/space_company_generator/",tags:["javascript","space","website","personal"]},{title:"SAR Activity Monitor",desc:"Using SAR satellite imagery to monitor the activity of smelters.",link:"https://danielhirst1998.users.earthengine.app/view/guixi-poc",tags:["javascript","geospatial","eo","gee","work"]},{title:"Alternative Zone Designer",desc:"Designs local zones using the importance of each road. Experiment for alternative census zones.",link:"https://lemon-bay-0090d5003.1.azurestaticapps.net/",tags:["svelte","geospatial","website","work"]},{title:"Green Energy",desc:"Shows suitability of green energy infrastructure at a location. ",link:"https://lemon-bush-00c674003.1.azurestaticapps.net/",tags:["svelte","geospatial","website","work"]},{title:"Pret Share",desc:"Small web app that helps you share a Pret Subscription. Made to learn Firebase.",link:"https://pret-share.web.app/",tags:["svelte","firebase","website","personal"]}],l=[{title:"Monitoring Sewage from Space",desc:"ArcGIS StoryMap about using EO to detect sewage overspill, presented at COP27.",link:"https://storymaps.arcgis.com/stories/2386c7178666421a8ee69a94c6bfb1a6",tags:["geospatial","eo","work"]},{title:"Get Pret Go",desc:"Blog post about the Pret Crawl algorithm, used in the Pret Crawl website (above).",link:"https://python.plainenglish.io/get-pret-go-a-geospatial-project-966ad04f5fb9",tags:["python","geospatial","work"]},{title:"OS Data Hub OAuth API",desc:"How to securely use the OS Data Hub with OAuth.",link:"https://github.com/dchirst/osdatahub-oauth-blogpost",tags:["work"]},{title:"Peat Health Index",desc:"ArcGIS StoryMap about using EO to monitor peatlands, presented at COP26.",link:"https://storymaps.arcgis.com/stories/68ac541504fc4714b371b1a33e540c95",tags:["geospatial","eo","work"]},{title:"London's Blue Plaques",desc:"Spatial analysis of London's Blue Plaques.",link:"https://python.plainenglish.io/finding-the-densest-area-of-londons-blue-plaques-with-geospatial-data-f5559ebfef21",tags:["python","geospatial","work"]},{title:"Vector Data in Python",desc:"Blog post about easily showing points, lines, and polygons on maps.",link:"https://python.plainenglish.io/how-to-easily-display-vector-geospatial-data-in-python-c739482c395",tags:["python","geospatial","work"]},{title:"Open Source Coding",desc:"Blog detailing our first expedition into open-source software development.",link:"https://python.plainenglish.io/our-first-expedition-into-open-source-coding-d62810453d3c",tags:["work"]}],o=[{title:"Chapel Thrill Escapes",desc:"Non-profit escape room company.",link:"https://www.chapelthrillescapes.com/",tags:["personal"]},{title:"Prospero Space Fellowship",desc:"Internships, mentorships, and retreats for students.",link:"https://prosperofellowship.org/",tags:["space","personal"]}];let s=[...i,...l,...o].map(d=>d.tags).flat(),a=[...new Set(s)],f="";function u(d){let m=d.target.id;f==m?n(0,f=""):n(0,f=m)}return[f,i,l,o,a,u,()=>{n(0,f="")}]}class Zt extends W{constructor(e){super(),B(this,e,Xt,Rt,G,{})}}function Kt(t){let e,n,i,l,o,s,a;return n=new zt({}),l=new Zt({}),s=new At({}),{c(){e=w("div"),T(n.$$.fragment),i=N(),T(l.$$.fragment),o=N(),T(s.$$.fragment),_(e,"class","")},m(f,u){b(f,e,u),H(n,e,null),S(e,i),H(l,e,null),b(f,o,u),H(s,f,u),a=!0},p:L,i(f){a||(P(n.$$.fragment,f),P(l.$$.fragment,f),P(s.$$.fragment,f),a=!0)},o(f){j(n.$$.fragment,f),j(l.$$.fragment,f),j(s.$$.fragment,f),a=!1},d(f){f&&h(e),I(n),I(l),f&&h(o),I(s,f)}}}class Ut extends W{constructor(e){super(),B(this,e,null,Kt,G,{})}}new Ut({target:document.getElementById("app")});