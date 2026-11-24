(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const yt={},xs=[],ei=()=>{},Qd=()=>!1,Ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ca=n=>n.startsWith("onUpdate:"),At=Object.assign,qc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mm=Object.prototype.hasOwnProperty,at=(n,e)=>mm.call(n,e),ke=Array.isArray,Yi=n=>so(n)==="[object Map]",da=n=>so(n)==="[object Set]",Hu=n=>so(n)==="[object Date]",Ke=n=>typeof n=="function",Tt=n=>typeof n=="string",ti=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",ef=n=>(ft(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),tf=Object.prototype.toString,so=n=>tf.call(n),gm=n=>so(n).slice(8,-1),nf=n=>so(n)==="[object Object]",Zc=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Lr=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},_m=/-\w/g,Bn=Pa(n=>n.replace(_m,e=>e.slice(1).toUpperCase())),vm=/\B([A-Z])/g,Ts=Pa(n=>n.replace(vm,"-$1").toLowerCase()),sf=Pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ya=Pa(n=>n?`on${sf(n)}`:""),Jn=(n,e)=>!Object.is(n,e),Qo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},rf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Jc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},xm=n=>{const e=Tt(n)?Number(n):NaN;return isNaN(e)?n:e};let Vu;const La=()=>Vu||(Vu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ro(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Tt(i)?Em(i):ro(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Tt(n)||ft(n))return n}const ym=/;(?![^(]*\))/g,Mm=/:([^]+)/,Sm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Em(n){const e={};return n.replace(Sm,t=>t.startsWith("/*")?"":t).split(ym).forEach(t=>{if(t){const i=t.split(Mm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zt(n){let e="";if(Tt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=zt(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const bm="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Tm=Yc(bm);function of(n){return!!n||n===""}function Am(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Da(n[s],e[s],t);return i}function Gu(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Da(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function wm(n,e,t){let i=Yi(n),s=Yi(e);if(i||s||(i=da(n),s=da(e),i||s))return i&&s?Gu(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Da(n[a],e[a],t))return!1}return String(n)===String(e)}function Wu(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Da(n,e,t){if(n===e)return!0;let i=Hu(n),s=Hu(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=ti(n),s=ti(e),i||s?n===e:(i=ke(n),s=ke(e),i||s?i&&s?Wu(n,e,t,Am):!1:(i=ft(n),s=ft(e),i||s?!i||!s?!1:Wu(n,e,t,wm):String(n)===String(e))))}const af=n=>!!(n&&n.__v_isRef===!0),ee=n=>Tt(n)?n:n==null?"":ke(n)||ft(n)&&(n.toString===tf||!Ke(n.toString))?af(n)?ee(n.value):JSON.stringify(n,lf,2):String(n),lf=(n,e)=>af(e)?lf(n,e.value):Yi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[qa(i,r)+" =>"]=s,t),{})}:da(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qa(t))}:ti(e)?qa(e):ft(e)&&!ke(e)&&!nf(e)?String(e):e,qa=(n,e="")=>{var t;return ti(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Rm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Bt&&(Bt.active?(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){if(this._on>0&&--this._on===0){if(Bt===this)Bt=this.prevScope;else{let e=Bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Cm(){return Bt}let St;const Za=new WeakSet;class cf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&(Bt.active?Bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Za.has(this)&&(Za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xu(this),df(this);const e=St,t=kn;St=this,kn=!0;try{return this.fn()}finally{ff(this),St=e,kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tu(e);this.deps=this.depsTail=void 0,Xu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$l(this)&&this.run()}get dirty(){return $l(this)}}let uf=0,Dr,Ir;function hf(n,e=!1){if(n.flags|=8,e){n.next=Ir,Ir=n;return}n.next=Dr,Dr=n}function Qc(){uf++}function eu(){if(--uf>0)return;if(Ir){let e=Ir;for(Ir=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Dr;){let e=Dr;for(Dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function df(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ff(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),tu(i),Pm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function $l(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hr)||(n.globalVersion=Hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$l(n))))return;n.flags|=2;const e=n.dep,t=St,i=kn;St=n,kn=!0;try{df(n);const s=n.fn(n._value);(e.version===0||Jn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{St=t,kn=i,ff(n),n.flags&=-3}}function tu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)tu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let kn=!0;const mf=[];function ni(){mf.push(kn),kn=!1}function ii(){const n=mf.pop();kn=n===void 0?!0:n}function Xu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=St;St=void 0;try{e()}finally{St=t}}}let Hr=0;class Lm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!St||!kn||St===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==St)t=this.activeLink=new Lm(St,this),St.deps?(t.prevDep=St.depsTail,St.depsTail.nextDep=t,St.depsTail=t):St.deps=St.depsTail=t,gf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=St.depsTail,t.nextDep=void 0,St.depsTail.nextDep=t,St.depsTail=t,St.deps===t&&(St.deps=i)}return t}trigger(e){this.version++,Hr++,this.notify(e)}notify(e){Qc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{eu()}}}function gf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)gf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const jl=new WeakMap,ys=Symbol(""),Kl=Symbol(""),Vr=Symbol("");function Xt(n,e,t){if(kn&&St){let i=jl.get(n);i||jl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new nu),s.map=i,s.key=t),s.track()}}function Si(n,e,t,i,s,r){const o=jl.get(n);if(!o){Hr++;return}const a=l=>{l&&l.trigger()};if(Qc(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&Zc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Vr||!ti(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Vr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ys)),Yi(n)&&a(o.get(Kl)));break;case"delete":l||(a(o.get(ys)),Yi(n)&&a(o.get(Kl)));break;case"set":Yi(n)&&a(o.get(ys));break}}eu()}function Rs(n){const e=ot(n);return e===n||(Xt(e,"iterate",Vr),An(n))?e:si(n)?qi(n)?e.map(t=>Qi(wn(t))):e.map(Qi):e.map(wn)}function Ia(n){return Xt(n=ot(n),"iterate",Vr),n}function Kn(n,e){return si(n)?Qi(qi(n)?wn(e):e):wn(e)}const Dm={__proto__:null,[Symbol.iterator](){return Ja(this,Symbol.iterator,n=>Kn(this,n))},concat(...n){return Rs(this).concat(...n.map(e=>ke(e)?Rs(e):e))},entries(){return Ja(this,"entries",n=>(n[1]=Kn(this,n[1]),n))},every(n,e){return hi(this,"every",n,e,void 0,arguments)},filter(n,e){return hi(this,"filter",n,e,t=>t.map(i=>Kn(this,i)),arguments)},find(n,e){return hi(this,"find",n,e,t=>Kn(this,t),arguments)},findIndex(n,e){return hi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hi(this,"findLast",n,e,t=>Kn(this,t),arguments)},findLastIndex(n,e){return hi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Qa(this,"includes",n)},indexOf(...n){return Qa(this,"indexOf",n)},join(n){return Rs(this).join(n)},lastIndexOf(...n){return Qa(this,"lastIndexOf",n)},map(n,e){return hi(this,"map",n,e,void 0,arguments)},pop(){return mr(this,"pop")},push(...n){return mr(this,"push",n)},reduce(n,...e){return ju(this,"reduce",n,e)},reduceRight(n,...e){return ju(this,"reduceRight",n,e)},shift(){return mr(this,"shift")},some(n,e){return hi(this,"some",n,e,void 0,arguments)},splice(...n){return mr(this,"splice",n)},toReversed(){return Rs(this).toReversed()},toSorted(n){return Rs(this).toSorted(n)},toSpliced(...n){return Rs(this).toSpliced(...n)},unshift(...n){return mr(this,"unshift",n)},values(){return Ja(this,"values",n=>Kn(this,n))}};function Ja(n,e,t){const i=Ia(n),s=i[e],r=s.call(i);if(i!==n&&!An(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>$u(r.next(),t),s!==_f[e]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>$u(r._next(),t)}return r}function $u(n,e){return n.done||(n.value=e(n.value)),n}const _f=Array.prototype;function hi(n,e,t,i,s,r){const o=Ia(n),a=o!==n&&!An(n),l=o[e];if(l!==_f[e]){const h=l.apply(n,r);return a?wn(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,Kn(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function ju(n,e,t,i){const s=Ia(n),r=s!==n&&!An(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Kn(n,c)),t.call(this,c,Kn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?Kn(n,l):l}function Qa(n,e,t){const i=ot(n);Xt(i,"iterate",Vr);const s=i[e](...t);return(s===-1||s===!1)&&ou(t[0])?(t[0]=ot(t[0]),i[e](...t)):s}function mr(n,e,t=[]){ni(),Qc();const i=ot(n)[e].apply(n,t);return eu(),ii(),i}const Im=Yc("__proto__,__v_isRef,__isVue"),vf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ti));function Nm(n){ti(n)||(n=String(n));const e=ot(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Wm:Ef:r?Sf:Mf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=Dm[t]))return l;if(t==="hasOwnProperty")return Nm}const a=Reflect.get(e,t,jt(e)?e:i);if((ti(t)?vf.has(t):Im(t))||(s||Xt(e,"get",t),r))return a;if(jt(a)){const l=o&&Zc(t)?a:a.value;return s&&ft(l)?ql(l):l}return ft(a)?s?ql(a):su(a):a}}class yf extends xf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ke(e)&&Zc(t);if(!this._isShallow){const c=si(r);if(!An(i)&&!si(i)&&(r=ot(r),i=ot(i)),!o&&jt(r)&&!jt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:at(e,t),l=Reflect.set(e,t,i,jt(e)?e:s);return e===ot(s)&&l&&(a?Jn(i,r)&&Si(e,"set",t,i):Si(e,"add",t,i)),l}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ti(t)||!vf.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",ke(e)?"length":ys),Reflect.ownKeys(e)}}class Um extends xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Om=new yf,Fm=new Um,Bm=new yf(!0);const Yl=n=>n,vo=n=>Reflect.getPrototypeOf(n);function km(n,e,t){return function(...i){const s=this.__v_raw,r=ot(s),o=Yi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Yl:e?Qi:wn;return!e&&Xt(r,"iterate",l?Kl:ys),At(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function xo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function zm(n,e){const t={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);n||(Jn(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=vo(o),c=e?Yl:n?Qi:wn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(ot(s),"iterate",ys),s.size},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return n||(Jn(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ot(a),c=e?Yl:n?Qi:wn;return!n&&Xt(l,"iterate",ys),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return At(t,n?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(s){const r=ot(this),o=vo(r),a=ot(s),l=!e&&!An(s)&&!si(s)?a:s;return o.has.call(r,l)||Jn(s,l)&&o.has.call(r,s)||Jn(a,l)&&o.has.call(r,a)||(r.add(l),Si(r,"add",l,l)),this},set(s,r){!e&&!An(r)&&!si(r)&&(r=ot(r));const o=ot(this),{has:a,get:l}=vo(o);let c=a.call(o,s);c||(s=ot(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Jn(r,u)&&Si(o,"set",s,r):Si(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=vo(r);let l=o.call(r,s);l||(s=ot(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Si(r,"delete",s,void 0),c},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&Si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=km(s,n,e)}),t}function iu(n,e){const t=zm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const Hm={get:iu(!1,!1)},Vm={get:iu(!1,!0)},Gm={get:iu(!0,!1)};const Mf=new WeakMap,Sf=new WeakMap,Ef=new WeakMap,Wm=new WeakMap;function Xm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function su(n){return si(n)?n:ru(n,!1,Om,Hm,Mf)}function $m(n){return ru(n,!1,Bm,Vm,Sf)}function ql(n){return ru(n,!0,Fm,Gm,Ef)}function ru(n,e,t,i,s){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Xm(gm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function qi(n){return si(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function si(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function ou(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function jm(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&rf(n,"__v_skip",!0),n}const wn=n=>ft(n)?su(n):n,Qi=n=>ft(n)?ql(n):n;function jt(n){return n?n.__v_isRef===!0:!1}function lt(n){return Km(n,!1)}function Km(n,e){return jt(n)?n:new Ym(n,e)}class Ym{constructor(e,t){this.dep=new nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ot(e),this._value=t?e:wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||An(e)||si(e);e=i?e:ot(e),Jn(e,t)&&(this._rawValue=e,this._value=i?e:wn(e),this.dep.trigger())}}function le(n){return jt(n)?n.value:n}const qm={get:(n,e,t)=>e==="__v_raw"?n:le(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return jt(s)&&!jt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function bf(n){return qi(n)?n:new Proxy(n,qm)}class Zm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return hf(this,!0),!0}get value(){const e=this.dep.track();return pf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jm(n,e,t=!1){let i,s;return Ke(n)?i=n:(i=n.get,s=n.set),new Zm(i,s,t)}const yo={},fa=new WeakMap;let ps;function Qm(n,e=!1,t=ps){if(t){let i=fa.get(t);i||fa.set(t,i=[]),i.push(n)}}function eg(n,e,t=yt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=x=>s?x:An(x)||s===!1||s===0?Ei(x,1):Ei(x);let u,h,d,f,g=!1,v=!1;if(jt(n)?(h=()=>n.value,g=An(n)):qi(n)?(h=()=>c(n),g=!0):ke(n)?(v=!0,g=n.some(x=>qi(x)||An(x)),h=()=>n.map(x=>{if(jt(x))return x.value;if(qi(x))return c(x);if(Ke(x))return l?l(x,2):x()})):Ke(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){ni();try{d()}finally{ii()}}const x=ps;ps=u;try{return l?l(n,3,[f]):n(f)}finally{ps=x}}:h=ei,e&&s){const x=h,I=s===!0?1/0:s;h=()=>Ei(x(),I)}const m=Cm(),p=()=>{u.stop(),m&&m.active&&qc(m.effects,u)};if(r&&e){const x=e;e=(...I)=>{try{return x(...I)}finally{p()}}}let T=v?new Array(n.length).fill(yo):yo;const A=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const I=u.run();if(x||s||g||(v?I.some((N,C)=>Jn(N,T[C])):Jn(I,T))){const N=ps;ni();try{d&&d(),ps=u;const C=[I,T===yo?void 0:v&&T[0]===yo?[]:T,f];T=I,l?l(e,3,C):e(...C)}finally{ps=N,ii()}}}else u.run()};return a&&a(A),u=new cf(h),u.scheduler=o?()=>o(A,!1):A,f=x=>Qm(x,!1,u),d=u.onStop=()=>{const x=fa.get(u);if(x){if(l)l(x,4);else for(const I of x)I();fa.delete(u)}},e?i?A(!0):T=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ei(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,jt(n))Ei(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)Ei(n[i],e,t);else if(da(n)||Yi(n))n.forEach(i=>{Ei(i,e,t)});else if(nf(n)){for(const i in n)Ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oo(n,e,t,i){try{return i?n(...i):n()}catch(s){Na(s,e,t)}}function Rn(n,e,t,i){if(Ke(n)){const s=oo(n,e,t,i);return s&&ef(s)&&s.catch(r=>{Na(r,e,t,void 0,!0)}),s}if(ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],e,t,i));return s}}function Na(n,e,t,i=!0,s=!1){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||yt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h&&!l.isUnmounted&&(!s||l.scope.active)){for(let d=0;d<h.length;d++)if(h[d](n,c,u)===!1)return}l=l.parent}if(o){ni(),oo(o,null,10,[n,c,u]),ii();return}}tg(n,t,r,i,a)}function tg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Qt=[];let Nn=-1;const Yn=[];let Vi=null,Ws=0;const Tf=Promise.resolve();let pa=null;function ng(n){const e=pa||Tf;return n?e.then(this?n.bind(this):n):e}function ig(n){let e=Nn+1,t=Qt.length;for(;e<t;){const i=e+t>>>1,s=Qt[i],r=Gr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Ua(n){if(!(n.flags&1)){const e=Gr(n),t=Qt[Qt.length-1];!t||!(n.flags&2)&&e>=Gr(t)?Qt.push(n):Qt.splice(ig(e),0,n),n.flags|=1,Af()}}function Af(){pa||(pa=Tf.then(Cf))}function sg(n){if(!ke(n))Vi&&n.id===-1?Vi.splice(Ws+1,0,n):n.flags&1||(Yn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Yn.push(n[e]);Af()}function wf(n,e,t,i=Nn+1){for(;i<Qt.length;i++){const s=Qt[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;Qt.splice(i,1),i=n?i-1:Nn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Rf(n,e,t=0){if(Yn.length){let i=Yn,s=0;if(e){i=[];for(let o=0;o<Yn.length;o++){const a=Yn[o];(a.i!==void 0?!a.i||a.i.uid<t:e.has(a))?Yn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Gr(o)-Gr(a));if(Yn.length=s,Vi){for(let o=0;o<r.length;o++)Vi.push(r[o]);return}for(Vi=r,Ws=0;Ws<Vi.length;Ws++){const o=Vi[Ws];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Vi=null,Ws=0}}let el=!1;function rg(n,e){if(el){n();return}const t=e===void 0?void 0:new Set(Yn);n(),el=!0;try{wf(void 0,e),Rf(void 0,t,e)}finally{el=!1}}const Gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cf(n){try{for(Nn=0;Nn<Qt.length;Nn++){const e=Qt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<Qt.length;Nn++){const e=Qt[Nn];e&&(e.flags&=-2)}Nn=-1,Qt.length=0,Rf(),pa=null,(Qt.length||Yn.length)&&Cf()}}let bn=null,Pf=null;function ma(n){const e=bn;return bn=n,Pf=n&&n.type.__scopeId||null,e}function Qn(n,e=bn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&xa(-1);const r=ma(e),o=Ms.length;let a;try{a=n(...s)}finally{for(let l=Ms.length;l>o;l--)ip();ma(r),i._d&&xa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function og(n,e){if(bn===null)return n;const t=za(bn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&Ei(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ss(n,e,t,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=n,n._mount=a)}else if(i==="mounted"){const a=n._latest;n._mount=n._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=At({},l,{oldValue:void 0}));let c=l.dir[i];c&&(ni(),Rn(c,t,8,[n.el,l,s,e]),ii())}}function ag(n,e){if(sn){let t=sn.provides;const i=sn.parent&&sn.parent.provides;i===t&&(t=sn.provides=Object.create(i)),t[n]=e}}function ea(n,e,t=!1){const i=hu();if(i||Ys){let s=Ys?Ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}const lg=Symbol.for("v-scx"),cg=()=>ea(lg);function Sn(n,e,t){return Lf(n,e,t)}function Lf(n,e,t=yt){const{immediate:i,deep:s,flush:r,once:o}=t,a=At({},t),l=e&&i||!e&&r!=="post";let c;if(qr){if(r==="sync"){const f=cg();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=ei,f.resume=ei,f.pause=ei,f}}const u=sn;a.call=(f,g,v)=>Rn(f,u,g,v);let h=!1;r==="post"?a.scheduler=f=>{f.i=u,Zt(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,g)=>{g?f():Ua(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=eg(n,e,a);return qr&&(c?c.push(d):l&&d()),d}function ug(n,e,t){const i=this.proxy,s=Tt(n)?n.includes(".")?Df(i,n):()=>i[n]:n.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,t=e);const o=co(this),a=Lf(s,r.bind(i),t);return o(),a}function Df(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const hg=Symbol("_vte"),Oa=n=>n.__isTeleport,Mn=Symbol("_leaveCb"),gr=Symbol("_enterCb");function If(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ao(()=>{n.isMounted=!0}),lo(()=>{n.isUnmounting=!0}),n}const vn=[Function,Array],Nf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vn,onEnter:vn,onAfterEnter:vn,onEnterCancelled:vn,onBeforeLeave:vn,onLeave:vn,onAfterLeave:vn,onLeaveCancelled:vn,onBeforeAppear:vn,onAppear:vn,onAfterAppear:vn,onAppearCancelled:vn},dg={name:"BaseTransition",props:Nf,setup(n,{slots:e}){const t=hu(),i=If();return()=>{const s=e.default&&au(e.default(),!0),r=s&&s.length?Uf(s):t.subTree?nn():void 0;if(!r)return;const o=ot(n),{mode:a}=o;if(i.isLeaving)return tl(r);const l=ga(r);if(!l)return tl(r);const c=Wr(l,o,i,t);l.type!==$t&&wi(l,c);let u=t.subTree&&ga(t.subTree);if(u&&u.type!==$t&&!gs(u,l)&&Xr(t.subTree)){let h=Wr(u,o,i,t);if(wi(u,h),a==="out-in"&&l.type!==$t)return i.isLeaving=!0,h.afterLeave=()=>{if(i.isLeaving=!1,!(t.job.flags&8))if(t.effect.flags&2){const d=()=>{t.job.flags&8||t.update()};d.i=t,Ua(d)}else t.update();delete h.afterLeave,u=void 0},tl(r);a==="in-out"&&l.type!==$t?h.delayLeave=(d,f,g)=>{const v=Of(i,u);v[String(u.key)]=u,d[Mn]=()=>{f(),d[Mn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Uf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==$t){e=t;break}}return e}const fg=dg;function Of(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Wr(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:p,onAppearCancelled:T}=e,A=String(n.key),x=Of(t,n),I=(P,M)=>{P&&Rn(P,i,9,M)},N=(P,M)=>{const y=M[1];I(P,M),ke(P)?P.every(L=>L.length<=1)&&y():P.length<=1&&y()},C={mode:r,persisted:o,beforeEnter(P){let M=a;if(!t.isMounted)if(s)M=v||a;else return;P[Mn]&&P[Mn](!0);const y=x[A];if(y&&gs(n,y)){let L=y.el[Mn];if(!L){const O=Xr(y);L=O&&O.el[Mn]}L&&L()}I(M,[P])},enter(P){if(x[A]===n)return;let M=l,y=c,L=u;if(!t.isMounted)if(s)M=m||l,y=p||c,L=T||u;else return;let O=!1;P[gr]=ie=>{O||(O=!0,ie?I(L,[P]):I(y,[P]),C.delayedLeave&&C.delayedLeave(),P[gr]=void 0)};const V=P[gr].bind(null,!1);M?N(M,[P,V]):V()},leave(P,M){const y=String(n.key);if(P[gr]&&P[gr](!0),t.isUnmounting)return M();I(h,[P]);let L=!1;P[Mn]=V=>{L||(L=!0,M(),V?I(g,[P]):I(f,[P]),P[Mn]=void 0,x[y]===n&&delete x[y])};const O=P[Mn].bind(null,!1);x[y]=n,d?N(d,[P,O]):O()},clone(P){const M=Wr(P,e,t,i);return M.afterLeave=()=>{C.afterLeave&&C.afterLeave()},M.delayLeave=(y,L,O)=>{C.delayLeave?C.delayLeave(y,L,O):O()},M.delayedLeave=()=>{C.delayedLeave&&C.delayedLeave()},M}};return C}function tl(n){if(Fa(n))return n=es(n),n.children=null,n}function ga(n){if(!Fa(n))return Oa(n.type)&&n.children?Uf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ke(t.default))return t.default()}}function wi(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;wi(Oa(t.type)&&ga(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&wi(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===_t&&ke(n.children)){const t=Wf(n.children,!1);t&&wi(t,e)}}function au(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===_t?(o.patchFlag&128&&s++,i=i.concat(au(o.children,e,a))):(e||o.type!==$t)&&i.push(a!=null?es(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Xr(n){if(n.component)return Xr(n.component.subTree);if(n.type===_t){const e=ke(n.children)&&Wf(n.children,!1);return e?Xr(e):void 0}if(n.type!==$t)return n}function Gn(n,e){return Ke(n)?At({name:n.name},e,{setup:n}):n}function Ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ku(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const _a=new WeakMap;function Nr(n,e,t,i,s=!1){if(ke(n)){n.forEach((v,m)=>Nr(v,e&&(ke(e)?e[m]:e),t,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Nr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?za(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,h=a.setupState,d=ot(h),f=h===yt?Qd:v=>Ku(u,v)?!1:at(d,v),g=(v,m)=>!(m&&Ku(u,m));if(c!=null&&c!==l){if(Yu(e),Tt(c))u[c]=null,f(c)&&(h[c]=null);else if(jt(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Ke(l))oo(l,a,12,[o,u]);else{const v=Tt(l),m=jt(l);if(v||m){const p=()=>{if(n.f){const T=v?f(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)ke(T)&&qc(T,r);else if(ke(T))T.includes(r)||T.push(r);else if(v)u[l]=[r],f(l)&&(h[l]=u[l]);else{const A=[r];g(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else v?(u[l]=o,f(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{p(),_a.delete(n)};T.id=-1,_a.set(n,T),Zt(T,t)}else Yu(n),p()}}}function Yu(n){const e=_a.get(n);e&&(e.flags|=8,_a.delete(n))}La().requestIdleCallback;La().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,Fa=n=>n.type.__isKeepAlive;function pg(n,e){Bf(n,"a",e)}function mg(n,e){Bf(n,"da",e)}function Bf(n,e,t=sn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if($r(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Fa(s.parent.vnode)&&gg(i,e,t,s),s=s.parent}}function gg(n,e,t,i){const s=$r(e,n,i,!0),r=$r("um",()=>qc(i[e],s),t);r.flags=16}function $r(n,e,t=sn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ni();const a=co(t),l=Rn(e,t,n,o);return a(),ii(),l});return i?s.unshift(r):s.push(r),r}}const Di=n=>(e,t=sn)=>{(!qr||n==="sp")&&$r(n,(...i)=>e(...i),t)},_g=Di("bm"),ao=Di("m"),vg=Di("bu"),kf=Di("u"),lo=Di("bum"),xg=Di("um"),yg=Di("sp"),Mg=Di("rtg"),Sg=Di("rtc");function Eg(n,e=sn){$r("ec",n,e)}const bg=Symbol.for("v-ndc");function tn(n,e,t,i){let s;const r=t,o=ke(n);if(o||Tt(n)){const a=o&&qi(n);let l=!1,c=!1;a&&(l=!An(n),c=si(n),n=Ia(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Qi(wn(n[u])):wn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ft(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Zl=n=>n?ap(n)?za(n):Zl(n.parent):null,Or=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zl(n.parent),$root:n=>Zl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Hf(n),$forceUpdate:n=>n.f||(n.f=()=>{Ua(n.update)}),$nextTick:n=>n.n||(n.n=ng.bind(n.proxy)),$watch:n=>ug.bind(n)}),nl=(n,e)=>n!==yt&&!n.__isScriptSetup&&at(n,e),Tg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(nl(i,e))return o[e]=1,i[e];if(s!==yt&&at(s,e))return o[e]=2,s[e];if(at(r,e))return o[e]=3,r[e];if(t!==yt&&at(t,e))return o[e]=4,t[e];Jl&&(o[e]=0)}}const c=Or[e];let u,h;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==yt&&at(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,at(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return nl(s,e)?(s[e]=t,!0):i!==yt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==yt&&a[0]!=="$"&&at(n,a)||nl(e,a)||at(r,a)||at(i,a)||at(Or,a)||at(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function qu(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Jl=!0;function Ag(n){const e=Hf(n),t=n.proxy,i=n.ctx;Jl=!1,e.beforeCreate&&Zu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:A,unmounted:x,render:I,renderTracked:N,renderTriggered:C,errorCaptured:P,serverPrefetch:M,expose:y,inheritAttrs:L,components:O,directives:V,filters:ie}=e;if(c&&wg(c,i,null),o)for(const ne in o){const W=o[ne];Ke(W)&&(i[ne]=W.bind(t))}if(s){const ne=s.call(t,t);ft(ne)&&(n.data=su(ne))}if(Jl=!0,r)for(const ne in r){const W=r[ne],ve=Ke(W)?W.bind(t,t):Ke(W.get)?W.get.bind(t,t):ei,Ee=!Ke(W)&&Ke(W.set)?W.set.bind(t):ei,Le=Ss({get:ve,set:Ee});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Oe=>Le.value=Oe})}if(a)for(const ne in a)zf(a[ne],i,t,ne);if(l){const ne=Ke(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(W=>{ag(W,ne[W])})}u&&Zu(u,n,"c");function Z(ne,W){ke(W)?W.forEach(ve=>ne(ve.bind(t))):W&&ne(W.bind(t))}if(Z(_g,h),Z(ao,d),Z(vg,f),Z(kf,g),Z(pg,v),Z(mg,m),Z(Eg,P),Z(Sg,N),Z(Mg,C),Z(lo,T),Z(xg,x),Z(yg,M),ke(y))if(y.length){const ne=n.exposed||(n.exposed={});y.forEach(W=>{Object.defineProperty(ne,W,{get:()=>t[W],set:ve=>t[W]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===ei&&(n.render=I),L!=null&&(n.inheritAttrs=L),O&&(n.components=O),V&&(n.directives=V),M&&Ff(n)}function wg(n,e,t=ei){ke(n)&&(n=Ql(n));for(const i in n){const s=n[i];let r;ft(s)?"default"in s?r=ea(s.from||i,s.default,!0):r=ea(s.from||i):r=ea(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zu(n,e,t){Rn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zf(n,e,t,i){let s=i.includes(".")?Df(t,i):()=>t[i];if(Tt(n)){const r=e[n];Ke(r)&&Sn(s,r)}else if(Ke(n))Sn(s,n.bind(t));else if(ft(n))if(ke(n))n.forEach(r=>zf(r,e,t,i));else{const r=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(r)&&Sn(s,r,n)}}function Hf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>va(l,c,o,!0)),va(l,e,o)),ft(e)&&r.set(e,l),l}function va(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&va(n,r,t,!0),s&&s.forEach(o=>va(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Rg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Rg={data:Ju,props:Qu,emits:Qu,methods:wr,computed:wr,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:wr,directives:wr,watch:Pg,provide:Ju,inject:Cg};function Ju(n,e){return e?n?function(){return At(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function Cg(n,e){return wr(Ql(n),Ql(e))}function Ql(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function wr(n,e){return n?At(Object.create(null),n,e):e}function Qu(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:At(Object.create(null),qu(n),qu(e??{})):e}function Pg(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function Vf(){return{app:null,config:{isNativeTag:Qd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lg=0;function Dg(n,e){return function(i,s=null){Ke(i)||(i=At({},i)),s!=null&&!ft(s)&&(s=null);const r=Vf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Lg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:h_,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...h)):Ke(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||dt(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,za(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ys;Ys=c;try{return u()}finally{Ys=h}}};return c}}let Ys=null;const Ig=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Bn(e)}Modifiers`]||n[`${Ts(e)}Modifiers`];function Ng(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||yt;let s=t;const r=e.startsWith("update:"),o=r&&Ig(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Tt(u)?u.trim():u)),o.number&&(s=s.map(Jc)));let a,l=i[a=Ya(e)]||i[a=Ya(Bn(e))];!l&&r&&(l=i[a=Ya(Ts(e))]),l&&Rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(c,n,6,s)}}const Ug=new WeakMap;function Gf(n,e,t=!1){const i=t?Ug:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ke(n)){const l=c=>{const u=Gf(c,e,!0);u&&(a=!0,At(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ft(n)&&i.set(n,null),null):(ke(r)?r.forEach(l=>o[l]=null):At(o,r),ft(n)&&i.set(n,o),o)}function Ba(n,e){return!n||!Ra(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,Ts(e))||at(n,e))}function eh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=n,m=ma(n);let p,T;try{if(t.shapeFlag&4){const x=s||i,I=x;p=qn(c.call(I,x,u,h,f,d,g)),T=a}else{const x=e;p=qn(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),T=e.props?a:Og(a)}}catch(x){Ms.length=0,Na(x,n,1),p=dt($t)}let A=p;if(T&&v!==!1){const x=Object.keys(T),{shapeFlag:I}=A;x.length&&I&7&&(r&&x.some(Ca)&&(T=Fg(T,r)),A=es(A,T,!1,!0))}if(t.dirs&&(A=es(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition){const x=Oa(A.type)&&ga(A)||A;wi(x,t.transition)}return p=A,ma(m),p}function Wf(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(Kr(s)){if(s.type!==$t||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Og=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ra(t))&&((e||(e={}))[t]=n[t]);return e},Fg=(n,e)=>{const t={};for(const i in n)(!Ca(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?th(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(Xf(o,i,d)&&!Ba(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?th(i,o,c):!0:!!o;return!1}function th(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!at(n,r)||Xf(e,n,r)&&!Ba(t,r))return!0}return!1}function Xf(n,e,t){const i=n[t],s=e[t];return t==="style"&&ft(i)&&ft(s)?!Da(i,s):i!==s}function kg({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const $f={},jf=()=>Object.create($f),Kf=n=>Object.getPrototypeOf(n)===$f;function zg(n,e,t,i=!1){const s={},r=jf();n.propsDefaults=Object.create(null),Yf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:$m(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Hg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ot(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ba(n.emitsOptions,d))continue;const f=e[d];if(l)if(at(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Bn(d);s[g]=ec(l,a,g,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Yf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!at(e,h)&&((u=Ts(h))===h||!at(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ec(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!at(e,h))&&(delete r[h],c=!0)}c&&Si(n.attrs,"set","")}function Yf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lr(l))continue;const c=e[l];let u;s&&at(s,u=Bn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ot(t),c=a||yt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=ec(s,l,h,c[h],n,!at(c,h))}}return o}function ec(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=co(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ts(t))&&(i=!0))}return i}const Vg=new WeakMap;function qf(n,e,t=!1){const i=t?Vg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ke(n)){const u=h=>{l=!0;const[d,f]=qf(h,e,!0);At(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ft(n)&&i.set(n,xs),xs;if(ke(r))for(let u=0;u<r.length;u++){const h=Bn(r[u]);nh(h)&&(o[h]=yt)}else if(r)for(const u in r){const h=Bn(u);if(nh(h)){const d=r[u],f=o[h]=ke(d)||Ke(d)?{type:d}:At({},d),g=f.type;let v=!1,m=!0;if(ke(g))for(let p=0;p<g.length;++p){const T=g[p],A=Ke(T)&&T.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=Ke(g)&&g.name==="Boolean";f[0]=v,f[1]=m,(v||at(f,"default"))&&a.push(h)}}const c=[o,a];return ft(n)&&i.set(n,c),c}function nh(n){return n[0]!=="$"&&!Lr(n)}const lu=n=>n==="_"||n==="_ctx"||n==="$stable",cu=n=>ke(n)?n.map(qn):[qn(n)],Gg=(n,e,t)=>{if(e._n)return e;const i=Qn((...s)=>cu(e(...s)),t);return i._c=!1,i},Zf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(lu(s))continue;const r=n[s];if(Ke(r))e[s]=Gg(s,r,i);else if(r!=null){const o=cu(r);e[s]=()=>o}}},Jf=(n,e)=>{const t=cu(e);n.slots.default=()=>t},Qf=(n,e,t)=>{for(const i in e)(t||!lu(i))&&(n[i]=e[i])},Wg=(n,e,t)=>{const i=n.slots=jf();if(n.vnode.shapeFlag&32){const s=e._;s?(Qf(i,e,t),t&&rf(i,"_",s,!0)):Zf(e,i)}else e&&Jf(n,e)},Xg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Qf(s,e,t):(r=!e.$stable,Zf(e,s)),o=e}else e&&(Jf(n,e),o={default:1});if(r)for(const a in s)!lu(a)&&o[a]==null&&delete s[a]},Zt=Zg;function $g(n){return jg(n)}function jg(n,e){const t=La();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=ei,insertStaticContent:g}=n,v=(w,D,k,b=null,te=null,$=null,re=void 0,J=null,ce=!!D.dynamicChildren)=>{if(w===D)return;w&&!gs(w,D)&&(b=de(w),Oe(w,te,$,!0),w=null),D.patchFlag===-2&&(ce=!1,D.dynamicChildren=null),D.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(D.dynamicChildren===xs&&(D.dynamicChildren=[]),D.dynamicChildren.hasOnce=!0);const{type:G,ref:E,shapeFlag:_}=D;switch(G){case ka:m(w,D,k,b);break;case $t:p(w,D,k,b);break;case ta:w==null&&T(D,k,b,re);break;case _t:O(w,D,k,b,te,$,re,J,ce);break;default:_&1?I(w,D,k,b,te,$,re,J,ce):_&6?V(w,D,k,b,te,$,re,J,ce):(_&64||_&128)&&G.process(w,D,k,b,te,$,re,J,ce,He)}E!=null&&te?Nr(E,w&&w.ref,$,D||w,!D):E==null&&w&&w.ref!=null&&Nr(w.ref,null,$,w,!0)},m=(w,D,k,b)=>{if(w==null)i(D.el=a(D.children),k,b);else{const te=D.el=w.el;D.children!==w.children&&c(te,D.children)}},p=(w,D,k,b)=>{w==null?i(D.el=l(D.children||""),k,b):D.el=w.el},T=(w,D,k,b)=>{[w.el,w.anchor]=g(w.children,D,k,b,w.el,w.anchor)},A=({el:w,anchor:D},k,b)=>{let te;for(;w&&w!==D;)te=d(w),i(w,k,b),w=te;i(D,k,b)},x=({el:w,anchor:D})=>{let k;for(;w&&w!==D;)k=d(w),s(w),w=k;s(D)},I=(w,D,k,b,te,$,re,J,ce)=>{if(D.type==="svg"?re="svg":D.type==="math"&&(re="mathml"),w==null)N(D,k,b,te,$,re,J,ce);else{const G=w.el&&w.el._isVueCE?w.el:null;try{G&&G._beginPatch(),M(w,D,te,$,re,J,ce)}finally{G&&G._endPatch()}}},N=(w,D,k,b,te,$,re,J)=>{let ce,G;const{props:E,shapeFlag:_,transition:U,dirs:X}=w;if(ce=w.el=o(w.type,$,E&&E.is,E),_&8?u(ce,w.children):_&16&&P(w.children,ce,null,b,te,il(w,$),re,J),X&&ss(w,null,b,"created"),C(ce,w,w.scopeId,re,b),E){for(const Y in E)Y!=="value"&&!Lr(Y)&&r(ce,Y,null,E[Y],$,b);"value"in E&&r(ce,"value",null,E.value,$),(G=E.onVnodeBeforeMount)&&Xn(G,b,w)}X&&ss(w,null,b,"beforeMount");const Q=Kg(te,U);Q?U.beforeEnter(ce):U&&!U.persisted&&(ce[qg]=!0),i(ce,D,k),((G=E&&E.onVnodeMounted)||Q||X)&&Zt(()=>{try{G&&Xn(G,b,w),Q&&U.enter(ce),X&&ss(w,null,b,"mounted")}finally{}},te)},C=(w,D,k,b,te)=>{if(k&&f(w,k),b)for(let $=0;$<b.length;$++)f(w,b[$]);if(te){let $=te.subTree;if(D===$||np($.type)&&($.ssContent===D||$.ssFallback===D)){const re=te.vnode;C(w,re,re.scopeId,re.slotScopeIds,te.parent)}}},P=(w,D,k,b,te,$,re,J,ce=0)=>{for(let G=ce;G<w.length;G++){const E=w[G]=J?Mi(w[G]):qn(w[G]);v(null,E,D,k,b,te,$,re,J)}},M=(w,D,k,b,te,$,re)=>{const J=D.el=w.el;let{patchFlag:ce,dynamicChildren:G,dirs:E}=D;ce|=w.patchFlag&16;const _=w.props||yt,U=D.props||yt;let X;if(k&&rs(k,!1),(X=U.onVnodeBeforeUpdate)&&Xn(X,k,D,w),E&&ss(D,w,k,"beforeUpdate"),k&&rs(k,!0),G&&(!w.dynamicChildren||w.dynamicChildren.length!==G.length)&&(ce=0,re=!1,G=null),(_.innerHTML&&U.innerHTML==null||_.textContent&&U.textContent==null)&&u(J,""),G?y(w.dynamicChildren,G,J,k,b,il(D,te),$):re||W(w,D,J,null,k,b,il(D,te),$,!1),ce>0){if(ce&16)L(J,_,U,k,te);else if(ce&2&&_.class!==U.class&&r(J,"class",null,U.class,te),ce&4&&r(J,"style",_.style,U.style,te),ce&8){const Q=D.dynamicProps;for(let Y=0;Y<Q.length;Y++){const _e=Q[Y],fe=_[_e],xe=U[_e];(xe!==fe||_e==="value")&&r(J,_e,fe,xe,te,k)}}ce&1&&w.children!==D.children&&u(J,D.children)}else!re&&G==null&&L(J,_,U,k,te);((X=U.onVnodeUpdated)||E)&&Zt(()=>{X&&Xn(X,k,D,w),E&&ss(D,w,k,"updated")},b)},y=(w,D,k,b,te,$,re)=>{for(let J=0;J<D.length;J++){const ce=w[J],G=D[J],E=ce.el||Fr(ce),_=E&&(ce.type===_t||!gs(ce,G)||ce.shapeFlag&198)?h(E):k;v(ce,G,_,null,b,te,$,re,!0)}},L=(w,D,k,b,te)=>{if(D!==k){if(D!==yt)for(const $ in D)!Lr($)&&!($ in k)&&r(w,$,D[$],null,te,b);for(const $ in k){if(Lr($))continue;const re=k[$],J=D[$];re!==J&&$!=="value"&&r(w,$,J,re,te,b)}"value"in k&&r(w,"value",D.value,k.value,te)}},O=(w,D,k,b,te,$,re,J,ce)=>{const G=D.el=w?w.el:a(""),E=D.anchor=w?w.anchor:a("");let{patchFlag:_,dynamicChildren:U,slotScopeIds:X}=D;X&&(J=J?J.concat(X):X),w==null?(i(G,k,b),i(E,k,b),P(D.children||[],k,E,te,$,re,J,ce)):_>0&&_&64&&U&&w.dynamicChildren&&w.dynamicChildren.length===U.length?(y(w.dynamicChildren,U,k,te,$,re,J),(D.key!=null||te&&D===te.subTree)&&ep(w,D,!0)):W(w,D,k,E,te,$,re,J,ce)},V=(w,D,k,b,te,$,re,J,ce)=>{D.slotScopeIds=J,w==null?D.shapeFlag&512?te.ctx.activate(D,k,b,re,ce):ie(D,k,b,te,$,re,ce):oe(w,D,ce)},ie=(w,D,k,b,te,$,re)=>{const J=w.component=s_(w,b,te);if(Fa(w)&&(J.ctx.renderer=He),r_(J,!1,re),J.asyncDep){if(te&&te.registerDep(J,Z,re,$),!w.el){const ce=J.subTree=dt($t);p(null,ce,D,k),w.placeholder=ce.el}}else Z(J,w,D,k,te,$,re)},oe=(w,D,k)=>{const b=D.component=w.component;if(Bg(w,D,k))if(b.asyncDep&&!b.asyncResolved){D.el=w.el,D.placeholder=w.placeholder,ne(b,D,k);return}else b.next=D,b.update();else D.el=w.el,D.placeholder=w.placeholder,b.vnode=D},Z=(w,D,k,b,te,$,re)=>{const J=()=>{if(w.isMounted){let{next:_,bu:U,u:X,parent:Q,vnode:Y}=w;{const he=tp(w);if(he){_&&(_.el=Y.el,ne(w,_,re)),he.asyncDep.then(()=>{const Se=()=>{w.job.flags&8||(te&&te.pendingBranch?Zt(Se,te):G())};Se.flags=48,Zt(Se,te)});return}}let _e=_,fe;rs(w,!1),_?(_.el=Y.el,ne(w,_,re)):_=Y,U&&Qo(U),(fe=_.props&&_.props.onVnodeBeforeUpdate)&&Xn(fe,Q,_,Y),rs(w,!0);const xe=eh(w),Ge=w.subTree;w.subTree=xe,v(Ge,xe,h(Ge.el||Fr(Ge)),de(Ge),w,te,$),_.el=xe.el,_e===null&&kg(w,xe.el),X&&Zt(X,te),(fe=_.props&&_.props.onVnodeUpdated)&&Zt(()=>Xn(fe,Q,_,Y),te)}else{let _;const{el:U,props:X}=D,{bm:Q,m:Y,parent:_e,root:fe,type:xe}=w,Ge=Ur(D);rs(w,!1),Q&&Qo(Q),!Ge&&(_=X&&X.onVnodeBeforeMount)&&Xn(_,_e,D),rs(w,!0);{fe.ce&&fe.ce._hasShadowRoot()&&fe.ce._injectChildStyle(xe,w.parent?w.parent.type:void 0);const he=w.subTree=eh(w);v(null,he,k,b,w,te,$),D.el=he.el}if(Y&&Zt(Y,te),!Ge&&(_=X&&X.onVnodeMounted)){const he=D;Zt(()=>Xn(_,_e,he),te)}(D.shapeFlag&256||_e&&Ur(_e.vnode)&&_e.vnode.shapeFlag&256)&&w.a&&Zt(w.a,te),w.isMounted=!0,D=k=b=null}};w.scope.on();const ce=w.effect=new cf(J);w.scope.off();const G=w.update=ce.run.bind(ce),E=w.job=ce.runIfDirty.bind(ce);E.i=w,E.id=w.uid,ce.scheduler=()=>Ua(E),rs(w,!0),G()},ne=(w,D,k)=>{D.component=w;const b=w.vnode.props;w.vnode=D,w.next=null,Hg(w,D.props,b,k),Xg(w,D.children,k),ni(),wf(w),ii()},W=(w,D,k,b,te,$,re,J,ce=!1)=>{const G=w&&w.children,E=w?w.shapeFlag:0,_=D.children,{patchFlag:U,shapeFlag:X}=D;if(U>0){if(U&128){Ee(G,_,k,b,te,$,re,J,ce);return}else if(U&256){ve(G,_,k,b,te,$,re,J,ce);return}}X&8?(E&16&&pe(G,te,$),_!==G&&u(k,_)):E&16?X&16?Ee(G,_,k,b,te,$,re,J,ce):pe(G,te,$,!0):(E&8&&u(k,""),X&16&&P(_,k,b,te,$,re,J,ce))},ve=(w,D,k,b,te,$,re,J,ce)=>{w=w||xs,D=D||xs;const G=w.length,E=D.length,_=Math.min(G,E);let U;for(U=0;U<_;U++){const X=D[U]=ce?Mi(D[U]):qn(D[U]);v(w[U],X,k,null,te,$,re,J,ce)}G>E?pe(w,te,$,!0,!1,_):P(D,k,b,te,$,re,J,ce,_)},Ee=(w,D,k,b,te,$,re,J,ce)=>{let G=0;const E=D.length;let _=w.length-1,U=E-1;for(;G<=_&&G<=U;){const X=w[G],Q=D[G]=ce?Mi(D[G]):qn(D[G]);if(gs(X,Q))v(X,Q,k,null,te,$,re,J,ce);else break;G++}for(;G<=_&&G<=U;){const X=w[_],Q=D[U]=ce?Mi(D[U]):qn(D[U]);if(gs(X,Q))v(X,Q,k,null,te,$,re,J,ce);else break;_--,U--}if(G>_){if(G<=U){const X=U+1,Q=X<E?D[X].el:b;for(;G<=U;)v(null,D[G]=ce?Mi(D[G]):qn(D[G]),k,Q,te,$,re,J,ce),G++}}else if(G>U)for(;G<=_;)Oe(w[G],te,$,!0),G++;else{const X=G,Q=G,Y=new Map;for(G=Q;G<=U;G++){const Ue=D[G]=ce?Mi(D[G]):qn(D[G]);Ue.key!=null&&Y.set(Ue.key,G)}let _e,fe=0;const xe=U-Q+1;let Ge=!1,he=0;const Se=new Array(xe);for(G=0;G<xe;G++)Se[G]=0;for(G=X;G<=_;G++){const Ue=w[G];if(fe>=xe){Oe(Ue,te,$,!0);continue}let Me;if(Ue.key!=null)Me=Y.get(Ue.key);else for(_e=Q;_e<=U;_e++)if(Se[_e-Q]===0&&gs(Ue,D[_e])){Me=_e;break}Me===void 0?Oe(Ue,te,$,!0):(Se[Me-Q]=G+1,Me>=he?he=Me:Ge=!0,v(Ue,D[Me],k,null,te,$,re,J,ce),fe++)}const ze=Ge?Yg(Se):xs;for(_e=ze.length-1,G=xe-1;G>=0;G--){const Ue=Q+G,Me=D[Ue],et=D[Ue+1],je=Ue+1<E?et.el||Fr(et):b;Se[G]===0?v(null,Me,k,je,te,$,re,J,ce):Ge&&(_e<0||G!==ze[_e]?Le(Me,k,je,2):_e--)}}},Le=(w,D,k,b,te=null)=>{const{el:$,type:re,transition:J,children:ce,shapeFlag:G}=w;if(G&6){Le(w.component.subTree,D,k,b);return}if(G&128){w.suspense.move(D,k,b);return}if(G&64){re.move(w,D,k,He);return}if(re===_t){i($,D,k);for(let _=0;_<ce.length;_++)Le(ce[_],D,k,b);i(w.anchor,D,k);return}if(re===ta){A(w,D,k);return}if(b!==2&&G&1&&J)if(b===0)J.persisted&&!$[Mn]?i($,D,k):(J.beforeEnter($),i($,D,k),Zt(()=>J.enter($),te));else{const{leave:_,delayLeave:U,afterLeave:X}=J,Q=()=>{w.ctx.isUnmounted?s($):i($,D,k)},Y=()=>{const _e=$._isLeaving||!!$[Mn];$._isLeaving&&$[Mn](!0),J.persisted&&!_e?Q():_($,()=>{Q(),X&&X()})};U?U($,Q,Y):Y()}else i($,D,k)},Oe=(w,D,k,b=!1,te=!1)=>{const{type:$,props:re,ref:J,children:ce,dynamicChildren:G,shapeFlag:E,patchFlag:_,dirs:U,cacheIndex:X,memo:Q}=w;if((_===-2||G&&G.hasOnce)&&(te=!1),J!=null&&(ni(),Nr(J,null,k,w,!0),ii()),X!=null&&(!w.ctx||w.ctx===D)&&(D.renderCache[X]=void 0),E&256&&D.ctx.deactivate(w))return;const Y=E&1&&U,_e=!Ur(w);let fe;if(_e&&(fe=re&&re.onVnodeBeforeUnmount)&&Xn(fe,D,w),E&6)ae(w.component,k,b);else{if(E&128){w.suspense.unmount(k,b);return}Y&&ss(w,null,D,"beforeUnmount"),E&64?w.type.remove(w,D,k,He,b):G&&!G.hasOnce&&($!==_t||_>0&&_&64)?pe(G,D,k,!1,!0):($===_t&&_&384||!te&&E&16)&&pe(ce,D,k),b&&st(w)}const xe=Q!=null&&X==null;(_e&&(fe=re&&re.onVnodeUnmounted)||Y||xe)&&Zt(()=>{fe&&Xn(fe,D,w),Y&&ss(w,null,D,"unmounted"),xe&&(w.el=null)},k)},st=w=>{const{type:D,el:k,anchor:b,transition:te}=w,$=D===_t;if($&&!te){K(k,b);return}if(D===ta){x(w),te&&!te.persisted&&te.afterLeave&&te.afterLeave();return}const re=$?Xr(w):w,J=()=>{$?h(k)&&K(k,b):s(k),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(re&&re.shapeFlag&1&&te&&!te.persisted){const{leave:ce,delayLeave:G}=te,E=re.el,_=()=>ce(E,J);G?G(E,J,_):_()}else J()},K=(w,D)=>{let k;for(;w!==D;)k=d(w),s(w),w=k;s(D)},ae=(w,D,k)=>{const{bum:b,scope:te,job:$,subTree:re,um:J,m:ce,a:G}=w;ih(ce),ih(G),b&&Qo(b),te.stop(),$?($.flags|=8,Oe(re,w,D,k)):re&&(re.transition=w.vnode.transition,Oe(re,w,D,k)),J&&Zt(J,D);const E=()=>{w.isUnmounted=!0};E.flags=16,Zt(E,D)},pe=(w,D,k,b=!1,te=!1,$=0)=>{for(let re=$;re<w.length;re++)Oe(w[re],D,k,b,te)},de=w=>{if(w.shapeFlag&6)return de(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=d(w.anchor||w.el),k=D&&D[hg];return k?d(k):D},Ce=(w,D,k)=>{const b=w&&D._vnode?void 0:w&&w.component?w.component.uid:i_();rg(()=>{w==null?D._vnode&&Oe(D._vnode,null,null,!0):v(D._vnode||null,w,D,null,null,null,k),D._vnode=w},b)},He={p:v,um:Oe,m:Le,r:st,mt:ie,mc:P,pc:W,pbc:y,n:de,o:n};return{render:Ce,hydrate:void 0,createApp:Dg(Ce)}}function il({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function rs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Kg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ep(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Mi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ep(o,a)),a.type===ka&&(a.patchFlag===-1&&(a=s[r]=Mi(a)),a.el=o.el),a.type===$t&&!a.el&&(a.el=o.el)}}function Yg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function tp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tp(e)}function ih(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Fr(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return Fr(e.subTree);const t=n.suspense;return t&&t.activeBranch?Fr(t.activeBranch):null}const np=n=>n.__isSuspense,qg=Symbol("_deferredEnter");function Zg(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):sg(n)}const _t=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),ta=Symbol.for("v-stc"),Ms=[];let pn=null;function Re(n=!1){Ms.push(pn=n?null:[])}function ip(){Ms.pop(),pn=Ms[Ms.length-1]||null}let jr=1;function xa(n,e=!1){jr+=n,n<0&&pn&&e&&(pn.hasOnce=!0)}function sp(n){return n.dynamicChildren=jr>0?pn||xs:null,ip(),jr>0&&pn&&pn.push(n),n}function Ie(n,e,t,i,s,r){return sp(R(n,e,t,i,s,r,!0))}function Xs(n,e,t,i,s){return sp(dt(n,e,t,i,s,!0))}function Kr(n){return n?n.__v_isVNode===!0:!1}function gs(n,e){return n.type===e.type&&n.key===e.key}const rp=({key:n})=>n??null,na=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||jt(n)||Ke(n)?{i:bn,r:n,k:e,f:!!t}:n:null);function R(n,e=null,t=null,i=0,s=null,r=n===_t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&rp(e),ref:e&&na(e),scopeId:Pf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?(ya(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),jr>0&&!o&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const dt=Jg;function Jg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===bg)&&(n=$t),Kr(n)){const a=es(n,e,!0);return t&&ya(a,t),jr>0&&!r&&pn&&(a.shapeFlag&6?pn[pn.indexOf(n)]=a:pn.push(a)),a.patchFlag=-2,a}if(c_(n)&&(n=n.__vccOpts),e){e=Qg(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=zt(a)),ft(l)&&(ou(l)&&!ke(l)&&(l=At({},l)),e.style=ro(l))}const o=Tt(n)?1:np(n)?128:Oa(n)?64:ft(n)?4:Ke(n)?2:0;return R(n,e,t,i,s,o,r,!0)}function Qg(n){return n?ou(n)?At({},n):Kf(n)?At({},n[cp]||n):n:null}function es(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?t_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&rp(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(na(e)):[r,na(e)]:na(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&wi(u,l.clone(u)),u}function uu(n=" ",e=0){return dt(ka,null,n,e)}function e_(n,e){const t=dt(ta,null,n);return t.staticCount=e,t}function nn(n="",e=!1){return e?(Re(),Xs($t,null,n)):dt($t,null,n)}function qn(n){return n==null||typeof n=="boolean"?dt($t):ke(n)?dt(_t,null,n.slice()):Kr(n)?Mi(n):dt(ka,null,String(n))}function Mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function ya(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ya(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Kf(e)?e._ctx=bn:s===3&&bn&&(bn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ke(e)){if(i&65){ya(n,{default:e});return}e={default:e,_ctx:bn},t=32}else e=String(e),i&64?(t=16,e=[uu(e)]):t=8;n.children=e,n.shapeFlag|=t}function t_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=zt([e.class,i.class]));else if(s==="style")e.style=ro([e.style,i.style]);else if(Ra(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ca(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Xn(n,e,t,i=null){Rn(n,e,7,[t,i])}const n_=Vf();let op=0;function i_(){return op}function s_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||n_,r={uid:op++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qf(i,s),emitsOptions:Gf(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ng.bind(null,r),n.ce&&n.ce(r),r}let sn=null;const hu=()=>sn||bn;let Ma,Yr;{const n=La(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ma=e("__VUE_INSTANCE_SETTERS__",t=>sn=t),Yr=e("__VUE_SSR_SETTERS__",t=>qr=t)}const co=n=>{const e=sn;return Ma(n),n.scope.on(),()=>{n.scope.off(),Ma(e)}},sh=()=>{sn&&sn.scope.off(),Ma(null)};function ap(n){return n.vnode.shapeFlag&4}let qr=!1;function r_(n,e=!1,t=!1){e&&Yr(e);const{props:i,children:s}=n.vnode,r=ap(n);zg(n,i,r,e),Wg(n,s,t||e);const o=r?o_(n,e):void 0;return e&&Yr(!1),o}function o_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Tg);const{setup:i}=t;if(i){ni();const s=n.setupContext=i.length>1?l_(n):null,r=co(n),o=oo(i,n,0,[n.props,s]),a=ef(o);if(ii(),r(),(a||n.sp)&&!Ur(n)&&Ff(n),a){if(o.then(sh,sh),e)return o.then(l=>{Yr(!0);try{rh(n,l,e)}finally{Yr(!1)}}).catch(l=>{Na(l,n,0,void 0,!0),n.ssrRender=(c,u)=>u("<!---->")});n.asyncDep=o}else rh(n,o)}else lp(n)}function rh(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=bf(e)),lp(n)}function lp(n,e,t){const i=n.type;n.render||(n.render=i.render||ei);{const s=co(n);ni();try{Ag(n)}finally{ii(),s()}}}const cp=Symbol(),a_={get(n,e){return Xt(n,"get",""),e===cp?n:n[e]}};function l_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,a_),slots:n.slots,emit:n.emit,expose:e}}function za(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bf(jm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](n)},has(e,t){return t in e||t in Or}})):n.proxy}function c_(n){return Ke(n)&&"__vccOpts"in n}const Ss=(n,e)=>Jm(n,e,qr);function u_(n,e,t){try{xa(-1);const i=arguments.length;return i===2?ft(e)&&!ke(e)?Kr(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Kr(t)&&(t=[t]),dt(n,e,t))}finally{xa(1)}}const h_="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tc;const oh=typeof window<"u"&&window.trustedTypes;if(oh)try{tc=oh.createPolicy("vue",{createHTML:n=>n})}catch{}const up=tc?n=>tc.createHTML(n):n=>n,d_="http://www.w3.org/2000/svg",f_="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,ah=xi&&xi.createElement("template"),p_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?xi.createElementNS(d_,n):e==="mathml"?xi.createElementNS(f_,n):t?xi.createElement(n,{is:t}):xi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>xi.createTextNode(n),createComment:n=>xi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ah.innerHTML=up(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ah.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ii="transition",_r="animation",er=Symbol("_vtc"),hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},dp=At({},Nf,hp),m_=n=>(n.displayName="Transition",n.props=dp,n),Xi=m_((n,{slots:e})=>u_(fg,fp(n),e)),os=(n,e=[])=>{ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},lh=n=>n?ke(n)?n.some(e=>e.length>1):n.length>1:!1;function fp(n){const e={};for(const O in n)O in hp||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,g=g_(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:A,onLeave:x,onLeaveCancelled:I,onBeforeAppear:N=p,onAppear:C=T,onAppearCancelled:P=A}=e,M=(O,V,ie,oe)=>{O._enterCancelled=oe,Hi(O,V?u:a),Hi(O,V?c:o),ie&&ie()},y=(O,V)=>{O._isLeaving=!1,Hi(O,h),Hi(O,f),Hi(O,d),V&&V()},L=O=>(V,ie)=>{const oe=O?C:T,Z=()=>M(V,O,ie);os(oe,[V,Z]),ch(()=>{Hi(V,O?l:r),$n(V,O?u:a),lh(oe)||uh(V,i,v,Z)})};return At(e,{onBeforeEnter(O){os(p,[O]),$n(O,r),$n(O,o)},onBeforeAppear(O){os(N,[O]),$n(O,l),$n(O,c)},onEnter:L(!1),onAppear:L(!0),onLeave(O,V){O._isLeaving=!0;const ie=()=>y(O,V);$n(O,h),O._enterCancelled?($n(O,d),nc(O)):(nc(O),$n(O,d)),ch(()=>{O._isLeaving&&(Hi(O,h),$n(O,f),lh(x)||uh(O,i,m,ie))}),os(x,[O,ie])},onEnterCancelled(O){M(O,!1,void 0,!0),os(A,[O])},onAppearCancelled(O){M(O,!0,void 0,!0),os(P,[O])},onLeaveCancelled(O){y(O),os(I,[O])}})}function g_(n){if(n==null)return null;if(ft(n))return[sl(n.enter),sl(n.leave)];{const e=sl(n);return[e,e]}}function sl(n){return xm(n)}function $n(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[er]||(n[er]=new Set)).add(e)}function Hi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[er];t&&(t.delete(e),t.size||(n[er]=void 0))}function ch(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let __=0;function uh(n,e,t,i){const s=n._endId=++__,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=pp(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function pp(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Ii}Delay`),r=i(`${Ii}Duration`),o=hh(s,r),a=i(`${_r}Delay`),l=i(`${_r}Duration`),c=hh(a,l);let u=null,h=0,d=0;e===Ii?o>0&&(u=Ii,h=o,d=r.length):e===_r?c>0&&(u=_r,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Ii:_r:null,d=u?u===Ii?r.length:l.length:0);const f=u===Ii&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ii}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function hh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>dh(t)+dh(n[i])))}function dh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function nc(n){return(n?n.ownerDocument:document).body.offsetHeight}function v_(n,e,t){const i=n[er];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fh=Symbol("_vod"),mp=Symbol("_vsh"),x_=Symbol(""),y_=/(?:^|;)\s*display\s*:/;function M_(n,e,t){const i=n.style,s=Tt(t);let r=!1;if(t&&!s){if(e)if(Tt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Rr(i,a,"")}else for(const o in e)t[o]==null&&Rr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?E_(n,o,!Tt(e)&&e?e[o]:void 0,a)||Rr(i,o,a):Rr(i,o,"")}}else if(s){if(e!==t){const o=i[x_];o&&(t+=";"+o),i.cssText=t,r=y_.test(t)}}else e&&n.removeAttribute("style");fh in n&&((!s||e!==t)&&(n[fh]=r?i.display:""),n[mp]&&(i.display="none"))}const Mo=/\s*!important$/;function Rr(n,e,t){if(ke(t))t.forEach(i=>Rr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Mo.test(t)?n.setProperty(e,t.replace(Mo,""),"important"):n.setProperty(e,t);else{const i=S_(n,e);Mo.test(t)?n.setProperty(Ts(i),t.replace(Mo,""),"important"):n[i]=t}}const ph=["Webkit","Moz","ms"],rl={};function S_(n,e){const t=rl[e];if(t)return t;let i=Bn(e);if(i!=="filter"&&i in n)return rl[e]=i;i=sf(i);for(let s=0;s<ph.length;s++){const r=ph[s]+i;if(r in n)return rl[e]=r}return e}function E_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Tt(i)&&t===i}const mh="http://www.w3.org/1999/xlink";function gh(n,e,t,i,s,r=Tm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(mh,e.slice(6,e.length)):n.setAttributeNS(mh,e,t):t==null||r&&!of(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ti(t)?String(t):t)}function _h(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?up(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=of(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function $s(n,e,t,i){n.addEventListener(e,t,i)}function b_(n,e,t,i){n.removeEventListener(e,t,i)}const vh=Symbol("_vei");function T_(n,e,t,i,s=null){const r=n[vh]||(n[vh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=R_(e);if(i){const c=r[e]=L_(i,s);$s(n,a,c,l)}else o&&(b_(n,a,o,l),r[e]=void 0)}}const A_=/(Once|Passive|Capture)$/,w_=/^on:?(?:Once|Passive|Capture)$/;function R_(n){let e,t;for(;(t=n.match(A_))&&!w_.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ts(n.slice(2)),e]}let ol=0;const C_=Promise.resolve(),P_=()=>ol||(C_.then(()=>ol=0),ol=Date.now());function L_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(ke(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Rn(c,e,5,a)}}else Rn(s,e,5,[i])};return t.value=n,t.attached=P_(),t}const xh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,D_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?v_(n,i,o):e==="style"?M_(n,t,i):Ra(e)?Ca(e)||T_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I_(n,e,i,o))?(_h(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gh(n,e,i,o,r,e!=="value")):n._isVueCE&&(N_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Tt(i)))?_h(n,Bn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),gh(n,e,i,o))};function I_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&xh(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xh(e)&&Tt(t)?!1:e in n}function N_(n,e){const t=n._def.props;if(!t)return!1;const i=Bn(e);return Array.isArray(t)?t.some(s=>Bn(s)===i):Object.keys(t).some(s=>Bn(s)===i)}const gp=new WeakMap,_p=new WeakMap,Sa=Symbol("_moveCb"),yh=Symbol("_enterCb"),ic=new WeakMap,U_=n=>(delete n.props.mode,n),O_=U_({name:"TransitionGroup",props:At({},dp,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=hu(),i=If();let s,r,o,a;const l=()=>(a===void 0&&(a=s.length>0&&W_(s[0].el,t.vnode.el,Mh(n))),a);return kf(()=>{if(ic.delete(t),!l()){s=[],o=void 0;return}const c=Mh(n);s.forEach(B_);const u=o&&G_(o,t.vnode.el);o=void 0,s.forEach(d=>k_(d,u));const h=s.filter(z_);nc(t.vnode.el),h.forEach(d=>{const f=d.el,g=f.style;$n(f,c),g.transform=g.webkitTransform=g.transitionDuration="";const v=f[Sa]=m=>{m&&m.target!==f||(!m||m.propertyName.endsWith("transform"))&&(f.removeEventListener("transitionend",v),f[Sa]=null,Hi(f,c))};f.addEventListener("transitionend",v)}),s=[]}),()=>{const c=ot(n),u=fp(c);let h=c.tag||_t;if(s=[],a=void 0,r)for(let d=0;d<r.length;d++){const f=r[d];f.el&&f.el instanceof Element&&!f.el[mp]&&(s.push(f),wi(f,Wr(f,u,i,t)),gp.set(f,Ha(f.el)))}r=e.default?au(e.default()):[];for(let d=0;d<r.length;d++){const f=r[d];f.key!=null&&wi(f,Wr(f,u,i,t))}return s.length&&(o=H_(t),ic.set(t,l)),dt(h,null,r)}}}),F_=O_;function B_(n){const e=n.el;e[Sa]&&e[Sa](),e[yh]&&e[yh]()}function Mh(n){return n.moveClass||`${n.name||"v"}-move`}function k_(n,e){_p.set(n,Ha(n.el,e))}function z_(n){const e=gp.get(n),t=_p.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el,o=r.style,a=r.getBoundingClientRect();let l=1,c=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(c=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/c}px)`,o.transitionDuration="0s",n}}function Ha(n,e){const t=n.getBoundingClientRect();return{left:t.left-(e?e.left:0),top:t.top-(e?e.top:0)}}function H_(n){let e;for(let t=n.parent;t;t=t.parent){const i=ic.get(t);if(i){const s=V_(t.vnode.el,n.vnode.el);s&&(e||(e=[])).push(At(Ha(s),{item:s,willMove:i}))}}return e}function V_(n,e){const t=n.nodeType===1?n:n.parentNode;for(;e&&e.parentNode!==t;)e=e.parentNode;if(e&&e.nodeType===1)return e}function G_(n,e){const t=n.find(i=>i.willMove()&&i.item.contains(e));return t&&Ha(t.item,t)}function W_(n,e,t){const i=n.cloneNode(),s=n[er];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=pp(i);return r.removeChild(i),o}const Sh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>Qo(e,t):e};function X_(n){n.target.composing=!0}function Eh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const So=Symbol("_assign"),Eo=Symbol("_initialValue");function al(n,e,t){return e&&(n=n.trim()),t&&(n=Jc(n)),n}const $_={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Eo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Eo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[So]=Sh(s);const r=i||s.props&&s.props.type==="number";$s(n,e?"change":"input",o=>{o.target.composing||n[So](al(n.value,t,r))}),(t||r)&&$s(n,"change",()=>{n.value=al(n.value,t,r)}),e||($s(n,"compositionstart",X_),$s(n,"compositionend",Eh),$s(n,"change",Eh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Eo];delete n[Eo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[So](al(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[So]=Sh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Jc(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},j_=["ctrl","shift","alt","meta"],K_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>j_.some(t=>n[`${t}Key`]&&!e.includes(t))},du=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=K_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Y_=At({patchProp:D_},p_);let bh;function q_(){return bh||(bh=$g(Y_))}const Z_=((...n)=>{const e=q_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Q_(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,J_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function J_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Q_(n){return Tt(n)?document.querySelector(n):n}const Ct={handle:"KN · fsltech",subtitle:{zh:"硬件与结构设计档案",en:"HARDWARE & STRUCTURE ARCHIVE"},taglineLead:"ARCHIVE",taglineBold:"OS",email:"fsltech@163.com",location:{zh:"中国 · 独立硬件与结构设计",en:"Independent Hardware & Mechanical Design"},links:[{label:{zh:"EMAIL / 联系邮箱",en:"EMAIL"},value:"fsltech@163.com",href:"mailto:fsltech@163.com"},{label:{zh:"GITHUB / 开源仓库",en:"GITHUB"},value:"github.com/fsltech-kn",href:"https://github.com/"}],bio:{zh:["机械电子一体化非标设计、从立项到产出独立全流程"],en:["Integrated mechatronics & custom non-standard engineering — independent end-to-end execution from concept to production."]},capabilities:[{title:{zh:"结构与机构设计",en:"Mechanical & CAD Design"},detail:{zh:"SolidWorks 参数化建模、装配体干涉检查、钣金与注塑/CNC 壳体设计",en:"SolidWorks parametric assemblies, tolerance & interference checks, CNC/3D-print enclosures"}},{title:{zh:"硬件与 PCB 协同",en:"Hardware & PCB Co-Design"},detail:{zh:"板框与结构堆叠定位、接插件开孔匹配、OLED/按键/风道内部走线布局",en:"Board outline & stack-up alignment, connector cutouts, internal routing for OLEDs and switches"}},{title:{zh:"散热与传动验证",en:"Thermal & Motion Systems"},detail:{zh:"涡轮风道流体导向、步进电机与 2GT 同步带传动机构、小型自动化执行机构",en:"Blower ducting, stepper & 2GT timing-belt transmissions, compact automation actuators"}},{title:{zh:"快速打样与测试",en:"Rapid Prototyping"},detail:{zh:"FDM / SLA 结构验证件打样、紧固件装配与实机功能联调",en:"FDM/SLA functional test prints, fastener assembly, and benchtop hardware validation"}}],tools:[{category:"3D CAD",items:["Solidworks","PTC ProE/Creo","UG NX"]},{category:"AI AGENT",items:["TRAE","CURSOR","Antigravity"]},{category:"Coding",items:["Python","C","Javascript","Typescript"]},{category:"PCB",items:["Altium Designer","LCEDA"]}],processes:{zh:["车削","铣削","电火花","水刀","等离子","FDM","SLA"],en:["Turning","Milling","EDM","Waterjet","Plasma","FDM","SLA"]}},jn=[{id:"notebook-cooler",code:"NO.001",indexLabel:"01",categoryKey:"thermal",category:{zh:"散热结构",en:"THERMAL STRUCTURE"},title:{zh:"笔记本涡轮散热底座",en:"Notebook Cooler"},subtitle:{zh:"12032 离心风道 / OLED 温控支架结构",en:"12032 Blower Duct / OLED Control Stand"},discipline:{zh:"结构设计 / 机电协同",en:"Mechanical Design / Mechatronics"},collection:{zh:"硬件原型 · 散热模块",en:"HARDWARE PROTOTYPES"},designer:"KN · fsltech",status:{zh:"装配体定型 · 可检视",en:"ASSEMBLED · INSPECTABLE"},year:"2026",modelUrl:"models/notebook-cooler.enc",initialRotation:[0,0,0],cameraDistance:4.06,abstract:{zh:"围绕笔记本高负载静音散热需求构建的一体化底座装配体。采用 12032 离心涡轮风机配合定向增压腔体，并在前端集成 0.96 寸 OLED 状态屏与定制 PWM 控制板，通过 M3 铜柱实现上下壳体与 PCB 的高精度定位锁附。",en:'An integrated laptop cooling dock engineered around a 12032 centrifugal blower and pressurized plenum. Combines a 0.96" OLED readout with a custom PWM controller PCB, anchored via M3 brass standoffs between upper and lower housings.'},highlights:{zh:["基于 12032 离心风机的封闭导流腔体，减少回流损耗并匹配笔记本底部进风口","集成 DC5525 供电接口、4Pin 风扇接口与独立 0.96 寸 OLED 视窗开孔","采用 EJLC-M3-L8 铜柱建立基准装配面，便于后续快速拆装与电路调试"],en:["Pressurized plenum tuned for a 12032 blower fan to direct airflow toward intake vents",'Integrated DC5525 power barrel, 4-pin header, and recessed 0.96" OLED display window',"M3 brass standoff datum stack-up for repeatable disassembly and bench testing"]},specs:[{label:{zh:"档案编号",en:"ARCHIVE ID"},value:{zh:"NO.001 / NOTEBOOK_COOLER",en:"NO.001 / NOTEBOOK_COOLER"}},{label:{zh:"外形尺寸 (CAD)",en:"ENVELOPE (CAD)"},value:{zh:"366.0 × 75.0 × 246.0 mm",en:"366.0 × 75.0 × 246.0 mm"}},{label:{zh:"核心器件",en:"KEY HARDWARE"},value:{zh:'12032 离心风扇 · 0.96" OLED · DC5525 · M3 铜柱',en:'12032 Blower · 0.96" OLED · DC5525 · M3 Standoffs'}},{label:{zh:"装配构成",en:"ASSEMBLY"},value:{zh:"52 个结构与电子零件子项",en:"52 mechanical & PCB sub-components"}},{label:{zh:"源文件格式",en:"SOURCE FORMAT"},value:{zh:"SolidWorks STEP AP214 → GLB",en:"SolidWorks STEP AP214 → GLB"}}],logs:[{date:"2026-11-19",entry:{zh:"完成底座上下壳体与 PCB 最终堆叠对齐，导出 SolidWorks 装配体并上线 3D 检视。",en:"Finalized shell-to-PCB alignment, exported STEP assembly and published 3D model."}},{date:"2026-11-08",entry:{zh:"调整 0.96 寸 OLED 视窗倒角与 4Pin 线束过孔间隙，消除盖板干涉。",en:'Refined 0.96" OLED bezel clearance and 4-pin harness routing channel.'}},{date:"2026-10-24",entry:{zh:"建立 12032 风机进排风几何边界与 M3 铜柱固定点布局。",en:"Established 12032 fan airflow boundaries and M3 standoff mounting layout."}}]},{id:"sorting-machine",code:"NO.002",indexLabel:"02",categoryKey:"mechanism",category:{zh:"传动机构",en:"MOTION MECHANISM"},title:{zh:"自动分拣机构装配体",en:"Sorting Machine"},subtitle:{zh:"42 步进同步带传送 / 机械爪分拣模块",en:"42 Stepper 2GT Conveyor / Gripper Sorter"},discipline:{zh:"机械机构 / 自动化结构",en:"Mechanical Systems / Automation"},collection:{zh:"机构研究 · 传动模块",en:"MECHANISM STUDIES"},designer:"KN · fsltech",status:{zh:"机构完整 · 可检视",en:"COMPLETED · INSPECTABLE"},year:"2026",modelUrl:"models/sorting-machine.enc",initialRotation:[-Math.PI/2,0,Math.PI],cameraDistance:5.7,abstract:{zh:"面向桌面级物料分拣场景设计的模块化传送与拨爪执行机构。由 42HS04A 步进电机驱动 2GT 同步带与 16T/60T 轮系，配合 SHF8 轴支座、光轴导向杆及末端分拣爪构成稳定的直线输送与分流通道。",en:"A compact desktop material-sorting module integrating belt conveyance and actuated diversion. Driven by a 42HS04A stepper motor through 2GT belts and 16T/60T pulleys, supported by SHF8 shaft mounts and linear guide rods."},highlights:{zh:["42HS04A 步进电机配合 2GT-16T/60T 同步带轮组，实现低背隙稳定输送","采用 SHF8 卧式轴支座与丝杆/光轴导轨，确保机架同轴度与快速拆装","集成多工位拨爪与导流槽结构，支持按节拍触发分拣动作"],en:["42HS04A stepper drive coupled with 2GT-16T/60T pulleys for low-backlash conveyance","SHF8 shaft supports and guide rails ensuring frame concentricity and modular servicing","Integrated sorting gripper and guide chute geometry for synchronized diversion"]},specs:[{label:{zh:"档案编号",en:"ARCHIVE ID"},value:{zh:"NO.002 / SORTING_MACHINE",en:"NO.002 / SORTING_MACHINE"}},{label:{zh:"外形尺寸 (CAD)",en:"ENVELOPE (CAD)"},value:{zh:"343.0 × 343.1 × 440.0 mm",en:"343.0 × 343.1 × 440.0 mm"}},{label:{zh:"传动组件",en:"DRIVETRAIN"},value:{zh:"42HS04A 步进电机 · 2GT 同步带 · SHF8 轴支座",en:"42HS04A Stepper · 2GT Timing Belt · SHF8 Mounts"}},{label:{zh:"装配构成",en:"ASSEMBLY"},value:{zh:"43 个机架、轮系与执行机构子项",en:"43 frame, pulley & actuator sub-components"}},{label:{zh:"源文件格式",en:"SOURCE FORMAT"},value:{zh:"SolidWorks STEP AP214 → GLB",en:"SolidWorks STEP AP214 → GLB"}}],logs:[{date:"2026-11-12",entry:{zh:"冻结输送带张紧轮位置与分拣爪行程包络，导出完整 STEP 装配体。",en:"Froze belt tensioner placement and gripper travel envelope; exported STEP assembly."}},{date:"2026-10-30",entry:{zh:"将标准件 SHF8 支座与 2GT 同步轮纳入总装，校核机架装配螺栓避让。",en:"Integrated SHF8 mounts and 2GT pulleys; verified fastener clearances."}}]},{id:"vibe-coding-keyboard",code:"NO.003",indexLabel:"03",categoryKey:"peripheral",category:{zh:"输入外设",en:"INPUT PERIPHERAL"},title:{zh:"定制编程机械键盘",en:"Vibe Coding Keyboard"},subtitle:{zh:"矮轴机械矩阵 / 定制外壳与嵌入式 PCB 堆叠",en:"Compact Mechanical Matrix / Custom PCB & Enclosure"},discipline:{zh:"外设结构 / PCB 结构协同",en:"Peripheral Design / PCB Stack-up"},collection:{zh:"交互外设 · 键盘原型",en:"INPUT DEVICES"},designer:"KN · fsltech",status:{zh:"结构完成 · 可检视",en:"PROTOTYPED · INSPECTABLE"},year:"2026",modelUrl:"models/vibe-coding-keyboard.enc",initialRotation:[0,0,0],cameraDistance:5.15,abstract:{zh:"面向高频编程与 AI 辅助开发工作流定制的紧凑型机械键盘原型。内部采用 CPG151101D06 轴体矩阵与完整贴片 PCB 模型直接导入结构装配，精确控制轴座支撑间隙、导光柱位置与上下壳体接缝公差。",en:"A compact custom mechanical keyboard engineered for coding and AI-assisted workflows. Imports the full SMD PCB and CPG151101D06 switch matrix directly into the mechanical assembly to lock plate tolerances and indicator alignment."},highlights:{zh:["完整 EDA 电路板（含 0603 阻容、LED 指示灯与电感）与机壳直接协同干涉检查","围绕 CPG151101D06 轴体行程优化定位开孔与内部声学/支撑空间","极简倒角边框与分体底壳设计，兼顾桌面倾斜角与拆装维护便利性"],en:["Full EDA board import (0603 passives, LEDs, inductors) verified for zero enclosure interference","Switch plate cutouts and cavity clearance tuned around CPG151101D06 switch travel","Minimal chamfered bezel with clean typing angle and serviceable bottom housing"]},specs:[{label:{zh:"档案编号",en:"ARCHIVE ID"},value:{zh:"NO.003 / VIBE_KEYBOARD",en:"NO.003 / VIBE_KEYBOARD"}},{label:{zh:"外形尺寸 (CAD)",en:"ENVELOPE (CAD)"},value:{zh:"110.0 × 33.6 × 91.7 mm",en:"110.0 × 33.6 × 91.7 mm"}},{label:{zh:"核心器件",en:"KEY HARDWARE"},value:{zh:"CPG151101D06 机械轴 · 定制贴片 PCB · 状态 LED",en:"CPG151101D06 Switches · Custom SMD PCB · Status LEDs"}},{label:{zh:"装配构成",en:"ASSEMBLY"},value:{zh:"100 个壳体、轴体与电子元件子项",en:"100 housing, switch & SMD sub-components"}},{label:{zh:"源文件格式",en:"SOURCE FORMAT"},value:{zh:"SolidWorks STEP AP214 → GLB",en:"SolidWorks STEP AP214 → GLB"}}],logs:[{date:"2026-11-12",entry:{zh:"将新版 PCB 3D 模型合入键盘外壳总装，完成全器件干涉检查并导出 STEP。",en:"Merged updated EDA PCB 3D board into shell assembly; verified clearances and exported STEP."}},{date:"2026-10-19",entry:{zh:"确立紧凑键位布局与 5V 状态灯视窗位置，细化外壳边缘倒角。",en:"Defined compact switch layout, 5V LED window, and perimeter bevel geometry."}}]}],ge={zh:{directoryTitle:"项目目录",specimenSource:"STEP → GLB",viewModes:{shaded:"实体",clay:"素模",wire:"线框"},resetView:"复位视角",autoRotateOn:"自动旋转",autoRotateOff:"暂停旋转",inspectFullscreen:"360° 全屏检视",bootStatus:"正在初始化档案终端",bootAssetsLabel:"已加载资源",bootPhases:["01 档案索引","02 几何装配","03 终端就绪"],dragHint:"左键拖动旋转 · 滚轮缩放 · 点击右上切换渲染模式",fullscreenHint:"左键旋转 · 右键平移 · 滚轮缩放 · Esc 返回",loadingModel:"正在加载 3D 装配体...",modelError:"3D 模型加载失败，请检查文件或刷新重试",archiveLabel:"设计档案",prevProject:"上一个项目",nextProject:"下一个项目",metaLabels:{discipline:"DISCIPLINE / 设计方向",collection:"COLLECTION / 所属序列",designer:"DESIGNER / 设计者",status:"STATUS / 档案状态"},tabs:{overview:"01 概述",specs:"02 结构与参数",logs:"03 研发记录"},abstractHeading:"ABSTRACT / 摘要",highlightsHeading:"KEY DETAILS / 结构要点",inspectCta:"360° 检视模型",saveArchive:"收藏档案 +",savedArchive:"已收藏 −",dock:{index:"档案检索",saved:"已收藏",about:"关于我",colophon:"KN · FSLTECH / PERSONAL ARCHIVE"},fullscreen:{back:"返回档案",studyTag:"OBJECT STUDY / 3D ARCHIVE"},modals:{close:"关闭",indexTitle:"ARCHIVE INDEX",indexSubtitle:"内部档案检索",indexPlaceholder:"搜索项目名称、编号、器件或结构关键词...",filters:{all:"全部档案",thermal:"散热结构",mechanism:"传动机构",peripheral:"输入外设",about:"关于我"},colCode:"编号",colProject:"档案项目",colDiscipline:"方向",emptySearch:"没有匹配的档案条目",resetSearch:"重置检索",foundPrefix:"共检索到",foundSuffix:"份档案",statusOnline:"本地档案 · 已就绪",savedTitle:"SAVED ARCHIVES",savedSubtitle:"本地收藏档案",savedEmpty:"暂未收藏任何项目档案，可在详情页点击「收藏档案 +」保存。",browseAll:"浏览全部档案",openProject:"查看",removeSaved:"移除",aboutTitle:"ABOUT / 关于我",aboutSubtitle:"个人简介与工程方向",capabilitiesHeading:"CAPABILITIES / 专注方向",toolsHeading:"WORKFLOW / 常用工具",processesHeading:"PROCESSES / 加工方式",contactHeading:"CONTACT / 联系方式",copyEmail:"复制邮箱",copiedEmail:"已复制"},toasts:{saved:"已加入本地收藏档案",removed:"已从收藏档案移除",copied:"邮箱已复制到剪贴板"}},en:{directoryTitle:"PROJECTS",specimenSource:"STEP → GLB",viewModes:{shaded:"SHADED",clay:"CLAY",wire:"WIRE"},resetView:"RESET VIEW",autoRotateOn:"AUTO ORBIT",autoRotateOff:"PAUSED",inspectFullscreen:"360° INSPECT",bootStatus:"INITIALIZING DESIGN ARCHIVE",bootAssetsLabel:"ASSETS",bootPhases:["01 INDEX","02 GEOMETRY","03 TERMINAL"],dragHint:"DRAG TO ORBIT · SCROLL TO ZOOM · SWITCH RENDER MODE TOP-RIGHT",fullscreenHint:"DRAG TO ORBIT · RIGHT-DRAG PAN · SCROLL ZOOM · ESC TO EXIT",loadingModel:"Loading 3D assembly...",modelError:"Failed to load 3D model. Please retry.",archiveLabel:"DESIGN ARCHIVE",prevProject:"Previous project",nextProject:"Next project",metaLabels:{discipline:"DISCIPLINE",collection:"COLLECTION",designer:"DESIGNER",status:"STATUS"},tabs:{overview:"01 Overview",specs:"02 Structure & Specs",logs:"03 Build Log"},abstractHeading:"ABSTRACT",highlightsHeading:"KEY HIGHLIGHTS",inspectCta:"360° INSPECT MODEL",saveArchive:"SAVE ARCHIVE +",savedArchive:"SAVED −",dock:{index:"Archive index",saved:"Saved",about:"About",colophon:"KN · FSLTECH / PERSONAL ARCHIVE"},fullscreen:{back:"BACK TO ARCHIVE",studyTag:"OBJECT STUDY / 3D ARCHIVE"},modals:{close:"CLOSE",indexTitle:"ARCHIVE INDEX",indexSubtitle:"Internal Directory Search",indexPlaceholder:"Search by project title, ID, hardware or keyword...",filters:{all:"All archives",thermal:"Thermal",mechanism:"Mechanism",peripheral:"Peripheral",about:"About me"},colCode:"ID",colProject:"ARCHIVE",colDiscipline:"DISCIPLINE",emptySearch:"No matching archive entries found.",resetSearch:"Reset search",foundPrefix:"Showing",foundSuffix:"entries",statusOnline:"LOCAL ARCHIVE · READY",savedTitle:"SAVED ARCHIVES",savedSubtitle:"Bookmarked Entries",savedEmpty:'No saved archives yet. Use "SAVE ARCHIVE +" in any project view.',browseAll:"Browse all archives",openProject:"OPEN",removeSaved:"REMOVE",aboutTitle:"ABOUT",aboutSubtitle:"Profile & Engineering Focus",capabilitiesHeading:"CAPABILITIES",toolsHeading:"WORKFLOW & TOOLS",processesHeading:"MANUFACTURING PROCESSES",contactHeading:"CONTACT",copyEmail:"COPY EMAIL",copiedEmail:"COPIED"},toasts:{saved:"Saved to local archives",removed:"Removed from saved archives",copied:"Email copied to clipboard"}}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="175",qs={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ev=0,Th=1,tv=2,vp=1,xp=2,vi=3,Pi=0,un=1,En=2,Zi=0,Zs=1,Ah=2,wh=3,Rh=4,nv=5,_s=100,iv=101,sv=102,rv=103,ov=104,av=200,lv=201,cv=202,uv=203,sc=204,rc=205,hv=206,dv=207,fv=208,pv=209,mv=210,gv=211,_v=212,vv=213,xv=214,oc=0,ac=1,lc=2,tr=3,cc=4,uc=5,hc=6,dc=7,yp=0,yv=1,Mv=2,Ji=0,Sv=1,Ev=2,bv=3,Mp=4,Tv=5,Av=6,wv=7,Ch="attached",Rv="detached",Sp=300,nr=301,ir=302,fc=303,pc=304,Va=306,sr=1e3,$i=1001,Ea=1002,rn=1003,Ep=1004,Cr=1005,mn=1006,ia=1007,bi=1008,Li=1009,bp=1010,Tp=1011,Zr=1012,pu=1013,Es=1014,Fn=1015,uo=1016,mu=1017,gu=1018,Jr=1020,Ap=35902,wp=1021,Rp=1022,Tn=1023,Cp=1024,Pp=1025,Qr=1026,eo=1027,_u=1028,vu=1029,Lp=1030,xu=1031,yu=1033,sa=33776,ra=33777,oa=33778,aa=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,yc=37492,Mc=37496,Sc=37808,Ec=37809,bc=37810,Tc=37811,Ac=37812,wc=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Dc=37818,Ic=37819,Nc=37820,Uc=37821,la=36492,Oc=36494,Fc=36495,Dp=36283,Bc=36284,kc=36285,zc=36286,to=2300,no=2301,ll=2302,Ph=2400,Lh=2401,Dh=2402,Cv=2500,Pv=0,Ip=1,Hc=2,Lv=3200,Dv=3201,Np=0,Iv=1,Wi="",kt="srgb",an="srgb-linear",ba="linear",vt="srgb",Cs=7680,Ih=519,Nv=512,Uv=513,Ov=514,Up=515,Fv=516,Bv=517,kv=518,zv=519,Vc=35044,Nh="300 es",Ti=2e3,Ta=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const Br=Math.PI/180,rr=180/Math.PI;function zn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Mu(n,e){return(n%e+e)%e}function Hv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vv(n,e,t){return n!==e?(t-n)/(e-n):0}function kr(n,e,t){return(1-t)*n+t*e}function Gv(n,e,t,i){return kr(n,e,1-Math.exp(-t*i))}function Wv(n,e=1){return e-Math.abs(Mu(n,e*2)-e)}function Xv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $v(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kv(n,e){return n+Math.random()*(e-n)}function Yv(n){return n*(.5-Math.random())}function qv(n){n!==void 0&&(Uh=n);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zv(n){return n*Br}function Jv(n){return n*rr}function Qv(n){return(n&n-1)===0&&n!==0}function e0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function t0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function n0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Su={DEG2RAD:Br,RAD2DEG:rr,generateUUID:zn,clamp:Qe,euclideanModulo:Mu,mapLinear:Hv,inverseLerp:Vv,lerp:kr,damp:Gv,pingpong:Wv,smoothstep:Xv,smootherstep:$v,randInt:jv,randFloat:Kv,randFloatSpread:Yv,seededRandom:qv,degToRad:Zv,radToDeg:Jv,isPowerOfTwo:Qv,ceilPowerOfTwo:e0,floorPowerOfTwo:t0,setQuaternionFromProperEuler:n0,normalize:mt,denormalize:Un};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],T=s[1],A=s[4],x=s[7],I=s[2],N=s[5],C=s[8];return r[0]=o*v+a*T+l*I,r[3]=o*m+a*A+l*N,r[6]=o*p+a*x+l*C,r[1]=c*v+u*T+h*I,r[4]=c*m+u*A+h*N,r[7]=c*p+u*x+h*C,r[2]=d*v+f*T+g*I,r[5]=d*m+f*A+g*N,r[8]=d*p+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cl.makeScale(e,t)),this}rotate(e){return this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cl=new qe;function Op(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i0(){const n=io("canvas");return n.style.display="block",n}const Oh={};function ca(n){n in Oh||(Oh[n]=!0,console.warn(n))}function s0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function r0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a0(){const n={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?ba:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[an]:{primaries:e,whitePoint:i,transfer:ba,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const nt=a0();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class l0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=io("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c0=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ul(s[o].image)):r.push(ul(s[o]))}else r=ul(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?l0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u0=0;class Ot extends As{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=$i,s=$i,r=mn,o=bi,a=Tn,l=Li,c=Ot.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=zn(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Sp;Ot.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(f+1)/2,I=(p+1)/2,N=(u+d)/4,C=(h+v)/4,P=(g+m)/4;return A>x&&A>I?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=N/i,r=C/i):x>I?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=N/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=P/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends As{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ot(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Eu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends h0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fp extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*v,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const I=Math.sqrt(A),N=Math.atan2(I,p*T);m=Math.sin(m*N)/I,a=Math.sin(a*N)/I}const x=a*T;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hl=new F,kh=new ri;class Vn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),To.subVectors(this.max,vr),Ls.subVectors(e.a,vr),Ds.subVectors(e.b,vr),Is.subVectors(e.c,vr),Ni.subVectors(Ds,Ls),Ui.subVectors(Is,Ds),as.subVectors(Ls,Is);let t=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-as.z,as.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,as.z,0,-as.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-as.y,as.x,0];return!dl(t,Ls,Ds,Is,To)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Ls,Ds,Is,To))?!1:(Ao.crossVectors(Ni,Ui),t=[Ao.x,Ao.y,Ao.z],dl(t,Ls,Ds,Is,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,bo=new Vn,Ls=new F,Ds=new F,Is=new F,Ni=new F,Ui=new F,as=new F,vr=new F,To=new F,Ao=new F,ls=new F;function dl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);const a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const f0=new Vn,xr=new F,fl=new F;class ai{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):f0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(fl)),this.expandByPoint(xr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new F,pl=new F,wo=new F,Oi=new F,ml=new F,Ro=new F,gl=new F;class ho{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){pl.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(pl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=Oi.dot(this.direction),l=-Oi.dot(wo),c=Oi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pl).addScaledVector(wo,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){ml.subVectors(t,e),Ro.subVectors(i,e),gl.crossVectors(ml,Ro);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Ro.crossVectors(Oi,Ro));if(l<0)return null;const c=a*this.direction.dot(ml.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,g,v,m){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p0,e,m0)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Fi.crossVectors(i,dn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Fi.crossVectors(i,dn)),Fi.normalize(),Co.crossVectors(dn,Fi),s[0]=Fi.x,s[4]=Co.x,s[8]=dn.x,s[1]=Fi.y,s[5]=Co.y,s[9]=dn.y,s[2]=Fi.z,s[6]=Co.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],A=i[7],x=i[11],I=i[15],N=s[0],C=s[4],P=s[8],M=s[12],y=s[1],L=s[5],O=s[9],V=s[13],ie=s[2],oe=s[6],Z=s[10],ne=s[14],W=s[3],ve=s[7],Ee=s[11],Le=s[15];return r[0]=o*N+a*y+l*ie+c*W,r[4]=o*C+a*L+l*oe+c*ve,r[8]=o*P+a*O+l*Z+c*Ee,r[12]=o*M+a*V+l*ne+c*Le,r[1]=u*N+h*y+d*ie+f*W,r[5]=u*C+h*L+d*oe+f*ve,r[9]=u*P+h*O+d*Z+f*Ee,r[13]=u*M+h*V+d*ne+f*Le,r[2]=g*N+v*y+m*ie+p*W,r[6]=g*C+v*L+m*oe+p*ve,r[10]=g*P+v*O+m*Z+p*Ee,r[14]=g*M+v*V+m*ne+p*Le,r[3]=T*N+A*y+x*ie+I*W,r[7]=T*C+A*L+x*oe+I*ve,r[11]=T*P+A*O+x*Z+I*Ee,r[15]=T*M+A*V+x*ne+I*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=h*m*c-v*d*c+v*l*f-a*m*f-h*l*p+a*d*p,A=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,x=u*v*c-g*h*c+g*a*f-o*v*f-u*a*p+o*h*p,I=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,N=t*T+i*A+s*x+r*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/N;return e[0]=T*C,e[1]=(v*d*r-h*m*r-v*s*f+i*m*f+h*s*p-i*d*p)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*C,e[4]=A*C,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*C,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*C,e[8]=x*C,e[9]=(g*h*r-u*v*r-g*i*f+t*v*f+u*i*p-t*h*p)*C,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*C,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*C,e[12]=I*C,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*m+t*h*m)*C,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,T=l*c,A=l*u,x=l*h,I=i.x,N=i.y,C=i.z;return s[0]=(1-(v+p))*I,s[1]=(f+x)*I,s[2]=(g-A)*I,s[3]=0,s[4]=(f-x)*N,s[5]=(1-(d+p))*N,s[6]=(m+T)*N,s[7]=0,s[8]=(g+A)*C,s[9]=(m-T)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ns.set(s[0],s[1],s[2]).length();const o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const c=1/r,u=1/o,h=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ti){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===Ti)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ta)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ti){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,f=(i+s)*u;let g,v;if(a===Ti)g=(o+r)*h,v=-2*h;else if(a===Ta)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ns=new F,Dn=new Ze,p0=new F(0,0,0),m0=new F(1,1,1),Fi=new F,Co=new F,dn=new F,zh=new Ze,Hh=new ri;class oi{constructor(e=0,t=0,i=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g0=0;const Vh=new F,Us=new ri,pi=new Ze,Po=new F,yr=new F,_0=new F,v0=new ri,Gh=new F(1,0,0),Wh=new F(0,1,0),Xh=new F(0,0,1),$h={type:"added"},x0={type:"removed"},Os={type:"childadded",child:null},_l={type:"childremoved",child:null};class bt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new F,t=new oi,i=new ri,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new qe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Po.copy(e):Po.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(yr,Po,this.up):pi.lookAt(Po,yr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(pi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,_0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new F,mi=new F,vl=new F,gi=new F,Fs=new F,Bs=new F,jh=new F,xl=new F,yl=new F,Ml=new F,Sl=new ct,El=new ct,bl=new ct;class On{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),mi.subVectors(i,t),vl.subVectors(e,t);const o=In.dot(In),a=In.dot(mi),l=In.dot(vl),c=mi.dot(mi),u=mi.dot(vl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sl.setScalar(0),El.setScalar(0),bl.setScalar(0),Sl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(El,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),mi.subVectors(e,t),In.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),In.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Bs.subVectors(r,i),xl.subVectors(e,i);const l=Fs.dot(xl),c=Bs.dot(xl);if(l<=0&&c<=0)return t.copy(i);yl.subVectors(e,s);const u=Fs.dot(yl),h=Bs.dot(yl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fs,o);Ml.subVectors(e,r);const f=Fs.dot(Ml),g=Bs.dot(Ml);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Bs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return jh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(jh,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Mu(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Tl(o,r,e+1/3),this.g=Tl(o,r,e),this.b=Tl(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Qe(Wt.r*255,0,255))*65536+Math.round(Qe(Wt.g*255,0,255))*256+Math.round(Qe(Wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=kt){nt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Lo);const i=kr(Bi.h,Lo.h,t),s=kr(Bi.s,Lo.s,t),r=kr(Bi.l,Lo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new $e;$e.NAMES=kp;let y0=0;class Hn extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Zs,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ai extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new F,Do=new Xe;let M0=0;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class zp extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hp extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ci extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let S0=0;const xn=new Ze,Al=new bt,ks=new F,fn=new Vn,Mr=new Vn,Ut=new F;class li extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Op(e)?Hp:zp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Al.lookAt(e),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(fn.min,Mr.min),fn.expandByPoint(Ut),Ut.addVectors(fn.max,Mr.max),fn.expandByPoint(Ut)):(fn.expandByPoint(Mr.min),fn.expandByPoint(Mr.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Ut.add(ks)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const c=new F,u=new F,h=new F,d=new Xe,f=new Xe,g=new Xe,v=new F,m=new F;function p(P,M,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(v),a[M].add(v),a[y].add(v),l[P].add(m),l[M].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,M=T.length;P<M;++P){const y=T[P],L=y.start,O=y.count;for(let V=L,ie=L+O;V<ie;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new F,x=new F,I=new F,N=new F;function C(P){I.fromBufferAttribute(s,P),N.copy(I);const M=a[P];A.copy(M),A.sub(I.multiplyScalar(I.dot(M))).normalize(),x.crossVectors(N,M);const L=x.dot(l[P])<0?-1:1;o.setXYZW(P,A.x,A.y,A.z,L)}for(let P=0,M=T.length;P<M;++P){const y=T[P],L=y.start,O=y.count;for(let V=L,ie=L+O;V<ie;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new Ze,cs=new ho,Io=new ai,Yh=new F,No=new F,Uo=new F,Oo=new F,wl=new F,Fo=new F,qh=new F,Bo=new F;class Ht extends bt{constructor(e=new li,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(wl.fromBufferAttribute(h,e),o?Fo.addScaledVector(wl,u):Fo.addScaledVector(wl.sub(t),u))}t.add(Fo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Io.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Io,Yh)===null||cs.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,I=A;x<I;x+=3){const N=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=ko(this,p,e,i,c,u,h,N,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),A=a.getX(m+1),x=a.getX(m+2);s=ko(this,o,e,i,c,u,h,T,A,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,I=A;x<I;x+=3){const N=x,C=x+1,P=x+2;s=ko(this,p,e,i,c,u,h,N,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=m,A=m+1,x=m+2;s=ko(this,o,e,i,c,u,h,T,A,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function E0(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Pi,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:n}}function ko(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,No),n.getVertexPosition(l,Uo),n.getVertexPosition(c,Oo);const u=E0(n,e,t,i,No,Uo,Oo,qh);if(u){const h=new F;On.getBarycoord(qh,No,Uo,Oo,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,h,new Xe)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,h,new Xe)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};On.getNormal(No,Uo,Oo,d.normal),u.face=d,u.barycoord=h}return u}class fo extends li{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(h,2));function g(v,m,p,T,A,x,I,N,C,P,M){const y=x/C,L=I/P,O=x/2,V=I/2,ie=N/2,oe=C+1,Z=P+1;let ne=0,W=0;const ve=new F;for(let Ee=0;Ee<Z;Ee++){const Le=Ee*L-V;for(let Oe=0;Oe<oe;Oe++){const st=Oe*y-O;ve[v]=st*T,ve[m]=Le*A,ve[p]=ie,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[p]=N>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(Oe/C),h.push(1-Ee/P),ne+=1}}for(let Ee=0;Ee<P;Ee++)for(let Le=0;Le<C;Le++){const Oe=d+Le+oe*Ee,st=d+Le+oe*(Ee+1),K=d+(Le+1)+oe*(Ee+1),ae=d+(Le+1)+oe*Ee;l.push(Oe,st,ae),l.push(st,K,ae),W+=6}a.addGroup(f,W,M),f+=W,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=or(n[t]);for(const s in i)e[s]=i[s]}return e}function b0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const T0={clone:or,merge:Jt};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new F,Zh=new Xe,Jh=new Xe;class en extends Gp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,Jh),t.subVectors(Jh,Zh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Hs=1;class R0 extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(zs,Hs,e,t);s.layers=this.layers,this.add(s);const r=new en(zs,Hs,e,t);r.layers=this.layers,this.add(r);const o=new en(zs,Hs,e,t);o.layers=this.layers,this.add(o);const a=new en(zs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new en(zs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new en(zs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wp extends Ot{constructor(e=[],t=nr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C0 extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fo(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Zi});r.uniforms.tEquirect.value=t;const o=new Ht(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=mn),new R0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class ji extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P0={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class L0 extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class D0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new F;class bu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qh=new F,ed=new ct,td=new ct,I0=new F,nd=new Ze,zo=new F,Cl=new ai,id=new Ze,Pl=new ho;class N0 extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ch,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zo),this.boundingSphere.expandByPoint(zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(s),e.ray.intersectsSphere(Cl)!==!1&&(id.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(id),!(this.boundingBox!==null&&Pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;ed.fromBufferAttribute(s.attributes.skinIndex,e),td.fromBufferAttribute(s.attributes.skinWeight,e),Qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=td.getComponent(r);if(o!==0){const a=ed.getComponent(r);nd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(I0.copy(Qh).applyMatrix4(nd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $p extends Ot{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,u=rn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sd=new Ze,U0=new Ze;class Tu{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:U0;sd.multiplyMatrices(a,t[r]),sd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Tu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new $p(t,e,e,Tn,Fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Xp),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Gc extends on{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vs=new Ze,rd=new Ze,Ho=[],od=new Vn,O0=new Ze,Sr=new Ht,Er=new ai;class F0 extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,O0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),od.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Er.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),rd.multiplyMatrices(i,Vs),Sr.matrixWorld=rd,Sr.raycast(e,Ho);for(let o=0,a=Ho.length;o<a;o++){const l=Ho[o];l.instanceId=r,l.object=this,t.push(l)}Ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $p(new Float32Array(s*this.count),s,this.count,_u,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ll=new F,B0=new F,k0=new qe;class Gi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ll.subVectors(i,t).cross(B0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||k0.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new ai,Vo=new F;class Au{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],A=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-f,x-p).normalize(),i[1].setComponents(l+r,d+c,m+f,x+p).normalize(),i[2].setComponents(l+o,d+u,m+g,x+T).normalize(),i[3].setComponents(l-o,d-u,m-g,x-T).normalize(),i[4].setComponents(l-a,d-h,m-v,x-A).normalize(),t===Ti)i[5].setComponents(l+a,d+h,m+v,x+A).normalize();else if(t===Ta)i[5].setComponents(a,h,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jp extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Aa=new F,wa=new F,ad=new Ze,br=new ho,Go=new ai,Dl=new F,ld=new F;class wu extends bt{constructor(e=new li,t=new jp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Aa.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Aa.distanceTo(wa);e.setAttribute("lineDistance",new Ci(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;ad.copy(s).invert(),br.copy(e.ray).applyMatrix4(ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=u.getX(v),T=u.getX(v+1),A=Wo(this,e,br,l,p,T,v);A&&t.push(A)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Wo(this,e,br,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=Wo(this,e,br,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Wo(this,e,br,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Aa.fromBufferAttribute(a,s),wa.fromBufferAttribute(a,r),t.distanceSqToSegment(Aa,wa,Dl,ld)>i)return;Dl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Dl);if(!(c<e.near||c>e.far))return{distance:c,point:ld.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const cd=new F,ud=new F;class z0 extends wu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)cd.fromBufferAttribute(t,s),ud.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cd.distanceTo(ud);e.setAttribute("lineDistance",new Ci(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H0 extends wu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kp extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hd=new Ze,Wc=new ho,Xo=new ai,$o=new F;class V0 extends bt{constructor(e=new li,t=new Kp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;hd.copy(s).invert(),Wc.copy(e.ray).applyMatrix4(hd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);$o.fromBufferAttribute(h,m),dd($o,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)$o.fromBufferAttribute(h,g),dd($o,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dd(n,e,t,i,s,r,o){const a=Wc.distanceSqToPoint(n);if(a<t){const l=new F;Wc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yp extends Ot{constructor(e,t,i=Es,s,r,o,a=rn,l=rn,c,u=Qr){if(u!==Qr&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class po extends li{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let A=0;A<c;A++){const x=A*h-r;g.push(x,-T,0),v.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const A=T+c*p,x=T+c*(p+1),I=T+1+c*(p+1),N=T+1+c*p;f.push(A,x,N),f.push(x,I,N)}this.setIndex(f),this.setAttribute("position",new Ci(g,3)),this.setAttribute("normal",new Ci(v,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}class G0 extends Hn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ga extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends Ga{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class W0 extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X0 extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function jo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function j0(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function fd(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function qp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class mo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class K0 extends mo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ph,endingEnd:Ph}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lh:r=e,a=2*t-i;break;case Dh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lh:o=e,l=2*i-t;break;case Dh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,T=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+T*o[c+I]+A*o[l+I]+x*o[h+I];return r}}class Y0 extends mo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class q0 extends mo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jo(t,this.TimeBufferType),this.values=jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jo(e.times,Array),values:jo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new K0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ll,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=no;class ur extends Wn{constructor(e,t,i){super(e,t,i)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=to;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Zp extends Wn{constructor(e,t,i,s){super(e,t,i,s)}}Zp.prototype.ValueTypeName="color";class ar extends Wn{constructor(e,t,i,s){super(e,t,i,s)}}ar.prototype.ValueTypeName="number";class Z0 extends mo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ri.slerpFlat(r,0,o,c-a,o,c,l);return r}}class lr extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Z0(this.times,this.values,this.getValueSize(),e)}}lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends Wn{constructor(e,t,i){super(e,t,i)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=to;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends Wn{constructor(e,t,i,s){super(e,t,i,s)}}cr.prototype.ValueTypeName="vector";class J0{constructor(e="",t=-1,i=[],s=Cv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ex(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=j0(l);l=fd(l,1,u),c=fd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ar(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,g,v){if(f.length!==0){const m=[],p=[];qp(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const A=d[g];m.push(A.time),p.push(A.morphTarget===v?1:0)}s.push(new ar(".morphTargetInfluence["+v+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";i(cr,f+".position",d,"pos",s),i(lr,f+".quaternion",d,"rot",s),i(cr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Q0(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ar;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return Zp;case"quaternion":return lr;case"bool":case"boolean":return ur;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ex(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Q0(n.type);if(n.times===void 0){const t=[],i=[];qp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tx{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const nx=new tx;class dr{constructor(e){this.manager=e!==void 0?e:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dr.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class ix extends Error{constructor(e,t){super(e),this.response=t}}class Jp extends dr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:i,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:A,value:x})=>{if(A)p.close();else{v+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let N=0,C=u.length;N<C;N++){const P=u[N];P.onProgress&&P.onProgress(I)}p.enqueue(x),T()}},A=>{p.error(A)})}}});return new Response(m)}else throw new ix(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ki.add(e,c);const u=_i[e];delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sx extends dr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=io("img");function l(){u(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class rx extends dr{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,o=new sx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Wa extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ox extends Wa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Il=new Ze,pd=new F,md=new F;class Ru{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(pd),md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(md),t.updateMatrixWorld(),Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ax extends Ru{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=rr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lx extends Wa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ax}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gd=new Ze,Tr=new F,Nl=new F;class cx extends Ru{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Tr),Nl.copy(i.position),Nl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nl),i.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd)}}class ux extends Wa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cu extends Gp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hx extends Ru{constructor(){super(new Cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ua extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new hx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dx extends dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,l),r.manager.itemStart(e)}}class fx extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Pu="\\[\\]\\.:\\/",px=new RegExp("["+Pu+"]","g"),Lu="[^"+Pu+"]",mx="[^"+Pu.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",Lu),_x=/(WCOD+)?/.source.replace("WCOD",mx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),yx=new RegExp("^"+gx+_x+vx+xx+"$"),Mx=["material","materials","bones","map"];class Sx{constructor(e,t,i){const s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class gt{constructor(e,t,i){this.path=t,this.parsedPath=i||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,i):new gt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(px,"")}static parseTrackName(e){const t=yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Mx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Sx;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _d{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ex extends As{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function vd(n,e,t,i){const s=bx(i);switch(t){case wp:return n*e;case Cp:return n*e;case Pp:return n*e*2;case _u:return n*e/s.components*s.byteLength;case vu:return n*e/s.components*s.byteLength;case Lp:return n*e*2/s.components*s.byteLength;case xu:return n*e*2/s.components*s.byteLength;case Rp:return n*e*3/s.components*s.byteLength;case Tn:return n*e*4/s.components*s.byteLength;case yu:return n*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:case vc:return Math.max(n,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(n,8)*Math.max(e,8)/2;case xc:case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case la:case Oc:case Fc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dp:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bx(n){switch(n){case Li:case bp:return{byteLength:1,components:1};case Zr:case Tp:case uo:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case Es:case pu:case Fn:return{byteLength:4,components:1};case Ap:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,my=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_y=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,My=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ey=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,by=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,By=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,iS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Ax,alphahash_pars_fragment:wx,alphamap_fragment:Rx,alphamap_pars_fragment:Cx,alphatest_fragment:Px,alphatest_pars_fragment:Lx,aomap_fragment:Dx,aomap_pars_fragment:Ix,batching_pars_vertex:Nx,batching_vertex:Ux,begin_vertex:Ox,beginnormal_vertex:Fx,bsdfs:Bx,iridescence_fragment:kx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Hx,clipping_planes_pars_fragment:Vx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:$x,color_pars_vertex:jx,color_vertex:Kx,common:Yx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Jx,displacementmap_vertex:Qx,emissivemap_fragment:ey,emissivemap_pars_fragment:ty,colorspace_fragment:ny,colorspace_pars_fragment:iy,envmap_fragment:sy,envmap_common_pars_fragment:ry,envmap_pars_fragment:oy,envmap_pars_vertex:ay,envmap_physical_pars_fragment:vy,envmap_vertex:ly,fog_vertex:cy,fog_pars_vertex:uy,fog_fragment:hy,fog_pars_fragment:dy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:py,lights_lambert_fragment:my,lights_lambert_pars_fragment:gy,lights_pars_begin:_y,lights_toon_fragment:xy,lights_toon_pars_fragment:yy,lights_phong_fragment:My,lights_phong_pars_fragment:Sy,lights_physical_fragment:Ey,lights_physical_pars_fragment:by,lights_fragment_begin:Ty,lights_fragment_maps:Ay,lights_fragment_end:wy,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Ly,map_fragment:Dy,map_pars_fragment:Iy,map_particle_fragment:Ny,map_particle_pars_fragment:Uy,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:Fy,morphinstance_vertex:By,morphcolor_vertex:ky,morphnormal_vertex:zy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Vy,normal_fragment_begin:Gy,normal_fragment_maps:Wy,normal_pars_fragment:Xy,normal_pars_vertex:$y,normal_vertex:jy,normalmap_pars_fragment:Ky,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:Jy,opaque_fragment:Qy,packing:eM,premultiplied_alpha_fragment:tM,project_vertex:nM,dithering_fragment:iM,dithering_pars_fragment:sM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:lM,shadowmap_vertex:cM,shadowmask_pars_fragment:uM,skinbase_vertex:hM,skinning_pars_vertex:dM,skinning_vertex:fM,skinnormal_vertex:pM,specularmap_fragment:mM,specularmap_pars_fragment:gM,tonemapping_fragment:_M,tonemapping_pars_fragment:vM,transmission_fragment:xM,transmission_pars_fragment:yM,uv_pars_fragment:MM,uv_pars_vertex:SM,uv_vertex:EM,worldpos_vertex:bM,background_vert:TM,background_frag:AM,backgroundCube_vert:wM,backgroundCube_frag:RM,cube_vert:CM,cube_frag:PM,depth_vert:LM,depth_frag:DM,distanceRGBA_vert:IM,distanceRGBA_frag:NM,equirect_vert:UM,equirect_frag:OM,linedashed_vert:FM,linedashed_frag:BM,meshbasic_vert:kM,meshbasic_frag:zM,meshlambert_vert:HM,meshlambert_frag:VM,meshmatcap_vert:GM,meshmatcap_frag:WM,meshnormal_vert:XM,meshnormal_frag:$M,meshphong_vert:jM,meshphong_frag:KM,meshphysical_vert:YM,meshphysical_frag:qM,meshtoon_vert:ZM,meshtoon_frag:JM,points_vert:QM,points_frag:eS,shadow_vert:tS,shadow_frag:nS,sprite_vert:iS,sprite_frag:sS},ye={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Zn={basic:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new $e(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Jt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Jt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Jt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new $e(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Jt([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Jt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Jt([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Jt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Jt([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Jt([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Jt([ye.lights,ye.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Zn.physical={uniforms:Jt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ko={r:0,b:0,g:0},hs=new oi,rS=new Ze;function oS(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(A){let x=A.isScene===!0?A.background:null;return x&&x.isTexture&&(x=(A.backgroundBlurriness>0?t:e).get(x)),x}function v(A){let x=!1;const I=g(A);I===null?p(a,l):I&&I.isColor&&(p(I,1),x=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===Va)?(u===void 0&&(u=new Ht(new fo(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hs.copy(x.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rS.makeRotationFromEuler(hs)),u.material.toneMapped=nt.getTransfer(I.colorSpace)!==vt,(h!==I||d!==I.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ht(new po(2,2),new ts({name:"BackgroundMaterial",uniforms:or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(I.colorSpace)!==vt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,x){A.getRGB(Ko,Vp(n)),i.buffers.color.setClear(Ko.r,Ko.g,Ko.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,x=1){a.set(A),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:v,addToRenderList:m,dispose:T}}function aS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,L,O,V,ie){let oe=!1;const Z=h(V,O,L);r!==Z&&(r=Z,c(r.object)),oe=f(y,V,O,ie),oe&&g(y,V,O,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,x(y,L,O,V),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,L,O){const V=O.wireframe===!0;let ie=i[y.id];ie===void 0&&(ie={},i[y.id]=ie);let oe=ie[L.id];oe===void 0&&(oe={},ie[L.id]=oe);let Z=oe[V];return Z===void 0&&(Z=d(l()),oe[V]=Z),Z}function d(y){const L=[],O=[],V=[];for(let ie=0;ie<t;ie++)L[ie]=0,O[ie]=0,V[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:V,object:y,attributes:{},index:null}}function f(y,L,O,V){const ie=r.attributes,oe=L.attributes;let Z=0;const ne=O.getAttributes();for(const W in ne)if(ne[W].location>=0){const Ee=ie[W];let Le=oe[W];if(Le===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Le=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Le=y.instanceColor)),Ee===void 0||Ee.attribute!==Le||Le&&Ee.data!==Le.data)return!0;Z++}return r.attributesNum!==Z||r.index!==V}function g(y,L,O,V){const ie={},oe=L.attributes;let Z=0;const ne=O.getAttributes();for(const W in ne)if(ne[W].location>=0){let Ee=oe[W];Ee===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor));const Le={};Le.attribute=Ee,Ee&&Ee.data&&(Le.data=Ee.data),ie[W]=Le,Z++}r.attributes=ie,r.attributesNum=Z,r.index=V}function v(){const y=r.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const O=r.newAttributes,V=r.enabledAttributes,ie=r.attributeDivisors;O[y]=1,V[y]===0&&(n.enableVertexAttribArray(y),V[y]=1),ie[y]!==L&&(n.vertexAttribDivisor(y,L),ie[y]=L)}function T(){const y=r.newAttributes,L=r.enabledAttributes;for(let O=0,V=L.length;O<V;O++)L[O]!==y[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function A(y,L,O,V,ie,oe,Z){Z===!0?n.vertexAttribIPointer(y,L,O,ie,oe):n.vertexAttribPointer(y,L,O,V,ie,oe)}function x(y,L,O,V){v();const ie=V.attributes,oe=O.getAttributes(),Z=L.defaultAttributeValues;for(const ne in oe){const W=oe[ne];if(W.location>=0){let ve=ie[ne];if(ve===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ve!==void 0){const Ee=ve.normalized,Le=ve.itemSize,Oe=e.get(ve);if(Oe===void 0)continue;const st=Oe.buffer,K=Oe.type,ae=Oe.bytesPerElement,pe=K===n.INT||K===n.UNSIGNED_INT||ve.gpuType===pu;if(ve.isInterleavedBufferAttribute){const de=ve.data,Ce=de.stride,He=ve.offset;if(de.isInstancedInterleavedBuffer){for(let Ne=0;Ne<W.locationSize;Ne++)p(W.location+Ne,de.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ne=0;Ne<W.locationSize;Ne++)m(W.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ne=0;Ne<W.locationSize;Ne++)A(W.location+Ne,Le/W.locationSize,K,Ee,Ce*ae,(He+Le/W.locationSize*Ne)*ae,pe)}else{if(ve.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)p(W.location+de,ve.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,st);for(let de=0;de<W.locationSize;de++)A(W.location+de,Le/W.locationSize,K,Ee,Le*ae,Le/W.locationSize*de*ae,pe)}}else if(Z!==void 0){const Ee=Z[ne];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(W.location,Ee);break;case 3:n.vertexAttrib3fv(W.location,Ee);break;case 4:n.vertexAttrib4fv(W.location,Ee);break;default:n.vertexAttrib1fv(W.location,Ee)}}}}T()}function I(){P();for(const y in i){const L=i[y];for(const O in L){const V=L[O];for(const ie in V)u(V[ie].object),delete V[ie];delete L[O]}delete i[y]}}function N(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const O in L){const V=L[O];for(const ie in V)u(V[ie].object),delete V[ie];delete L[O]}delete i[y.id]}function C(y){for(const L in i){const O=i[L];if(O[y.id]===void 0)continue;const V=O[y.id];for(const ie in V)u(V[ie].object),delete V[ie];delete O[y.id]}}function P(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function lS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Tn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Li&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:x,vertexTextures:I,maxSamples:N}}function uS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Gi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,A=T*4;let x=p.clippingState||null;l.value=x,x=u(g,d,A,f);for(let I=0;I!==A;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,x=f;A!==v;++A,x+=4)o.copy(h[A]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function hS(n){let e=new WeakMap;function t(o,a){return a===fc?o.mapping=nr:a===pc&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===pc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ks=4,xd=[.125,.215,.35,.446,.526,.582],vs=20,Ul=new Cu,yd=new $e;let Ol=null,Fl=0,Bl=0,kl=!1;const ms=(1+Math.sqrt(5))/2,Gs=1/ms,Md=[new F(-ms,Gs,0),new F(ms,Gs,0),new F(-Gs,0,ms),new F(Gs,0,ms),new F(0,ms,-Gs),new F(0,ms,Gs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],dS=new F;class Sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=dS}=r;Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Fl,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:uo,format:Tn,colorSpace:an,depthBuffer:!1},s=Ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fS(r)),this._blurMaterial=pS(r,e,t)}return s}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,i,s,r){const l=new en(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yd),h.toneMapping=Ji,h.autoClear=!1;const g=new Ai({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new Ht(new fo,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(yd),m=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):A===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const x=this._cubeSize;Yo(s,A*x,T>2?x:0,x,x),h.setRenderTarget(s),m&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===nr||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Yo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ul)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Md[(s-r-1)%Md.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vs-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let T=0;for(let C=0;C<vs;++C){const P=C/v,M=Math.exp(-P*P/2);p.push(M),C===0?T+=M:C<m&&(T+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-i;const x=this._sizeLods[s],I=3*x*(s>A-Ks?s-A+Ks:0),N=4*(this._cubeSize-x);Yo(t,I,N,3*x,2*x),l.setRenderTarget(t),l.render(h,Ul)}}function fS(n){const e=[],t=[],i=[];let s=n;const r=n-Ks+1+xd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ks?l=xd[o-n+Ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),A=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let N=0;N<f;N++){const C=N%3*2/3-1,P=N>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];T.set(M,v*g*N),A.set(d,m*g*N);const y=[N,N,N,N,N,N];x.set(y,p*g*N)}const I=new li;I.setAttribute("position",new on(T,v)),I.setAttribute("uv",new on(A,m)),I.setAttribute("faceIndex",new on(x,p)),e.push(I),s>Ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ed(n,e,t){const i=new bs(n,e,t);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pS(n,e,t){const i=new Float32Array(vs),s=new F(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function bd(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Td(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fc||l===pc,u=l===nr||l===ir;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Sd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Sd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _S(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let A=0,x=T.length;A<x;A+=3){const I=T[A+0],N=T[A+1],C=T[A+2];d.push(I,N,N,C,C,I)}}else if(g!==void 0){const T=g.array;v=g.version;for(let A=0,x=T.length/3-1;A<x;A+=3){const I=A+0,N=A+1,C=A+2;d.push(I,N,N,C,C,I)}}else return;const m=new(Op(d)?Hp:zp)(d,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yS(n,e,t){const i=new WeakMap,s=new ct;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*N*4*h),P=new Fp(C,I,N,h);P.type=Fn,P.needsUpdate=!0;const M=x*4;for(let L=0;L<h;L++){const O=p[L],V=T[L],ie=A[L],oe=I*N*4*L;for(let Z=0;Z<O.count;Z++){const ne=Z*M;g===!0&&(s.fromBufferAttribute(O,Z),C[oe+ne+0]=s.x,C[oe+ne+1]=s.y,C[oe+ne+2]=s.z,C[oe+ne+3]=0),v===!0&&(s.fromBufferAttribute(V,Z),C[oe+ne+4]=s.x,C[oe+ne+5]=s.y,C[oe+ne+6]=s.z,C[oe+ne+7]=0),m===!0&&(s.fromBufferAttribute(ie,Z),C[oe+ne+8]=s.x,C[oe+ne+9]=s.y,C[oe+ne+10]=s.z,C[oe+ne+11]=ie.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new Xe(I,N)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function MS(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const em=new Ot,Ad=new Yp(1,1),tm=new Fp,nm=new d0,im=new Wp,wd=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xa(n,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function AS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;Ld.set(i),n.uniformMatrix2fv(this.addr,!1,Ld),Nt(t,i)}}function wS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;Pd.set(i),n.uniformMatrix3fv(this.addr,!1,Pd),Nt(t,i)}}function RS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;Cd.set(i),n.uniformMatrix4fv(this.addr,!1,Cd),Nt(t,i)}}function CS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function IS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function FS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ad.compareFunction=Up,r=Ad):r=em,t.setTexture2D(e||r,s)}function BS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nm,s)}function kS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||im,s)}function zS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tm,s)}function HS(n){switch(n){case 5126:return SS;case 35664:return ES;case 35665:return bS;case 35666:return TS;case 35674:return AS;case 35675:return wS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return DS;case 5125:return IS;case 36294:return NS;case 36295:return US;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return zS}}function VS(n,e){n.uniform1fv(this.addr,e)}function GS(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function WS(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function XS(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function $S(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jS(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function KS(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YS(n,e){n.uniform1iv(this.addr,e)}function qS(n,e){n.uniform2iv(this.addr,e)}function ZS(n,e){n.uniform3iv(this.addr,e)}function JS(n,e){n.uniform4iv(this.addr,e)}function QS(n,e){n.uniform1uiv(this.addr,e)}function eE(n,e){n.uniform2uiv(this.addr,e)}function tE(n,e){n.uniform3uiv(this.addr,e)}function nE(n,e){n.uniform4uiv(this.addr,e)}function iE(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||em,r[o])}function sE(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nm,r[o])}function rE(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||im,r[o])}function oE(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tm,r[o])}function aE(n){switch(n){case 5126:return VS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return $S;case 35675:return jS;case 35676:return KS;case 5124:case 35670:return YS;case 35667:case 35671:return qS;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return oE}}class lE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HS(t.type)}}class cE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aE(t.type)}}class uE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function Dd(n,e){n.seq.push(e),n.map[e.id]=e}function hE(n,e,t){const i=n.name,s=i.length;for(zl.lastIndex=0;;){const r=zl.exec(i),o=zl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dd(t,c===void 0?new lE(a,n,e):new cE(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new uE(a),Dd(t,h)),t=h}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hE(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Id(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dE=37297;let fE=0;function pE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Nd=new qe;function mE(n){nt._getMatrix(Nd,nt.workingColorSpace,n);const e=`mat3( ${Nd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ud(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pE(n.getShaderSource(e),o)}else return s}function gE(n,e){const t=mE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _E(n,e){let t;switch(e){case Sv:t="Linear";break;case Ev:t="Reinhard";break;case bv:t="Cineon";break;case Mp:t="ACESFilmic";break;case Av:t="AgX";break;case wv:t="Neutral";break;case Tv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new F;function vE(){nt.getLuminanceCoefficients(qo);const n=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function yE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ME(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pr(n){return n!==""}function Od(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(n){return n.replace(SE,bE)}const EE=new Map;function bE(n,e){let t=Je[e];if(t===void 0){const i=EE.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(n){return n.replace(TE,AE)}function AE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function RE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function PE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yp:e="ENVMAP_BLENDING_MULTIPLY";break;case yv:e="ENVMAP_BLENDING_MIX";break;case Mv:e="ENVMAP_BLENDING_ADD";break}return e}function LE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function DE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wE(t),c=RE(t),u=CE(t),h=PE(t),d=LE(t),f=xE(t),g=yE(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ji?_E("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,gE("linearToOutputTexel",t.outputColorSpace),vE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Xc(o),o=Od(o,t),o=Fd(o,t),a=Xc(a),a=Od(a,t),a=Fd(a,t),o=Bd(o),a=Bd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+o,x=T+p+a,I=Id(s,s.VERTEX_SHADER,A),N=Id(s,s.FRAGMENT_SHADER,x);s.attachShader(v,I),s.attachShader(v,N),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(I).trim(),ie=s.getShaderInfoLog(N).trim();let oe=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,N);else{const ne=Ud(s,I,"vertex"),W=Ud(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ne+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||ie==="")&&(Z=!1);Z&&(L.diagnostics={runnable:oe,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(I),s.deleteShader(N),P=new ha(s,v),M=ME(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,dE)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=N,this}let IE=0;class NE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UE(e),t.set(e,i)),i}}class UE{constructor(e){this.id=IE++,this.code=e,this.usedTimes=0}}function OE(n,e,t,i,s,r,o){const a=new Bp,l=new NE,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,O,V){const ie=O.fog,oe=V.geometry,Z=M.isMeshStandardMaterial?O.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),W=ne&&ne.mapping===Va?ne.image.height:null,ve=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Ee=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Le=Ee!==void 0?Ee.length:0;let Oe=0;oe.morphAttributes.position!==void 0&&(Oe=1),oe.morphAttributes.normal!==void 0&&(Oe=2),oe.morphAttributes.color!==void 0&&(Oe=3);let st,K,ae,pe;if(ve){const pt=Zn[ve];st=pt.vertexShader,K=pt.fragmentShader}else st=M.vertexShader,K=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const de=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),He=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,w=!!M.map,D=!!M.matcap,k=!!ne,b=!!M.aoMap,te=!!M.lightMap,$=!!M.bumpMap,re=!!M.normalMap,J=!!M.displacementMap,ce=!!M.emissiveMap,G=!!M.metalnessMap,E=!!M.roughnessMap,_=M.anisotropy>0,U=M.clearcoat>0,X=M.dispersion>0,Q=M.iridescence>0,Y=M.sheen>0,_e=M.transmission>0,fe=_&&!!M.anisotropyMap,xe=U&&!!M.clearcoatMap,Ge=U&&!!M.clearcoatNormalMap,he=U&&!!M.clearcoatRoughnessMap,Se=Q&&!!M.iridescenceMap,ze=Q&&!!M.iridescenceThicknessMap,Ue=Y&&!!M.sheenColorMap,Me=Y&&!!M.sheenRoughnessMap,et=!!M.specularMap,je=!!M.specularColorMap,Mt=!!M.specularIntensityMap,B=_e&&!!M.transmissionMap,Te=_e&&!!M.thicknessMap,se=!!M.gradientMap,ue=!!M.alphaMap,we=M.alphaTest>0,Ae=!!M.alphaHash,Ye=!!M.extensions;let wt=Ji;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(wt=n.toneMapping);const Vt={shaderID:ve,shaderType:M.type,shaderName:M.name,vertexShader:st,fragmentShader:K,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:He,instancingColor:He&&V.instanceColor!==null,instancingMorph:He&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:an,alphaToCoverage:!!M.alphaToCoverage,map:w,matcap:D,envMap:k,envMapMode:k&&ne.mapping,envMapCubeUVHeight:W,aoMap:b,lightMap:te,bumpMap:$,normalMap:re,displacementMap:d&&J,emissiveMap:ce,normalMapObjectSpace:re&&M.normalMapType===Iv,normalMapTangentSpace:re&&M.normalMapType===Np,metalnessMap:G,roughnessMap:E,anisotropy:_,anisotropyMap:fe,clearcoat:U,clearcoatMap:xe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:he,dispersion:X,iridescence:Q,iridescenceMap:Se,iridescenceThicknessMap:ze,sheen:Y,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:et,specularColorMap:je,specularIntensityMap:Mt,transmission:_e,transmissionMap:B,thicknessMap:Te,gradientMap:se,opaque:M.transparent===!1&&M.blending===Zs&&M.alphaToCoverage===!1,alphaMap:ue,alphaTest:we,alphaHash:Ae,combine:M.combine,mapUv:w&&v(M.map.channel),aoMapUv:b&&v(M.aoMap.channel),lightMapUv:te&&v(M.lightMap.channel),bumpMapUv:$&&v(M.bumpMap.channel),normalMapUv:re&&v(M.normalMap.channel),displacementMapUv:J&&v(M.displacementMap.channel),emissiveMapUv:ce&&v(M.emissiveMap.channel),metalnessMapUv:G&&v(M.metalnessMap.channel),roughnessMapUv:E&&v(M.roughnessMap.channel),anisotropyMapUv:fe&&v(M.anisotropyMap.channel),clearcoatMapUv:xe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(M.sheenRoughnessMap.channel),specularMapUv:et&&v(M.specularMap.channel),specularColorMapUv:je&&v(M.specularColorMap.channel),specularIntensityMapUv:Mt&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:Te&&v(M.thicknessMap.channel),alphaMapUv:ue&&v(M.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(re||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!oe.attributes.uv&&(w||ue),fog:!!ie,useFog:M.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:V.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:w&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===vt,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(T(y,M),A(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function A(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const y=g[M.type];let L;if(y){const O=Zn[y];L=T0.clone(O.uniforms)}else L=M.uniforms;return L}function I(M,y){let L;for(let O=0,V=u.length;O<V;O++){const ie=u[O];if(ie.cacheKey===y){L=ie,++L.usedTimes;break}}return L===void 0&&(L=new DE(n,y,M,r),u.push(L)),L}function N(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:N,releaseShaderCache:C,programs:u,dispose:P}}function FE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function BE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||BE),i.length>1&&i.sort(d||zd),s.length>1&&s.sort(d||zd)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function kE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Hd,n.set(i,[o])):s>=r.length?(o=new Hd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function HE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VE=0;function GE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WE(n){const e=new zE,t=HE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new Ze,o=new Ze;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,A=0,x=0,I=0,N=0,C=0;c.sort(GE);for(let M=0,y=c.length;M<y;M++){const L=c[M],O=L.color,V=L.intensity,ie=L.distance,oe=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*V,h+=O.g*V,d+=O.b*V;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],V);C++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,W=t.get(L);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=oe,i.directionalShadowMatrix[f]=L.shadow.matrix,T++}i.directional[f]=Z,f++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(O).multiplyScalar(V),Z.distance=ie,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[v]=Z;const ne=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,ne.updateMatrices(L),L.castShadow&&N++),i.spotLightMatrix[v]=ne.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=oe,x++}v++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(O).multiplyScalar(V),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const ne=L.shadow,W=t.get(L);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,W.shadowCameraNear=ne.camera.near,W.shadowCameraFar=ne.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=L.shadow.matrix,A++}i.point[g]=Z,g++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(V),Z.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==x||P.numSpotMaps!==I||P.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=x+I-N,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=x,P.numSpotMaps=I,P.numLightProbes=C,i.version=VE++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const A=c[p];if(A.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(A.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(A.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Vd(n){const e=new WE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function XE(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Vd(n),e.set(s,[a])):r>=o.length?(a=new Vd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const $E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KE(n,e,t){let i=new Au;const s=new Xe,r=new Xe,o=new ct,a=new W0({depthPacking:Dv}),l=new X0,c={},u=t.maxTextureSize,h={[Pi]:un,[un]:Pi,[En]:En},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:$E,fragmentShader:jE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new li;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vp;let p=this.type;this.render=function(N,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Zi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==vi&&this.type===vi,ie=p===vi&&this.type!==vi;for(let oe=0,Z=N.length;oe<Z;oe++){const ne=N[oe],W=ne.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ve=W.getFrameExtents();if(s.multiply(ve),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ve.x),s.x=r.x*ve.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ve.y),s.y=r.y*ve.y,W.mapSize.y=r.y)),W.map===null||V===!0||ie===!0){const Le=this.type!==vi?{minFilter:rn,magFilter:rn}:{};W.map!==null&&W.map.dispose(),W.map=new bs(s.x,s.y,Le),W.map.texture.name=ne.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Ee=W.getViewportCount();for(let Le=0;Le<Ee;Le++){const Oe=W.getViewport(Le);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),O.viewport(o),W.updateMatrices(ne,Le),i=W.getFrustum(),x(C,P,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===vi&&T(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,L)};function T(N,C){const P=e.update(v);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new bs(s.x,s.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,v,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(C,null,P,f,v,null)}function A(N,C,P,M){let y=null;const L=P.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=y.uuid,V=C.uuid;let ie=c[O];ie===void 0&&(ie={},c[O]=ie);let oe=ie[V];oe===void 0&&(oe=y.clone(),ie[V]=oe,C.addEventListener("dispose",I)),y=oe}if(y.visible=C.visible,y.wireframe=C.wireframe,M===vi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=P}return y}function x(N,C,P,M,y){if(N.visible===!1)return;if(N.layers.test(C.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&y===vi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld);const V=e.update(N),ie=N.material;if(Array.isArray(ie)){const oe=V.groups;for(let Z=0,ne=oe.length;Z<ne;Z++){const W=oe[Z],ve=ie[W.materialIndex];if(ve&&ve.visible){const Ee=A(N,ve,M,y);N.onBeforeShadow(n,N,C,P,V,Ee,W),n.renderBufferDirect(P,null,V,Ee,N,W),N.onAfterShadow(n,N,C,P,V,Ee,W)}}}else if(ie.visible){const oe=A(N,ie,M,y);N.onBeforeShadow(n,N,C,P,V,oe,null),n.renderBufferDirect(P,null,V,oe,N,null),N.onAfterShadow(n,N,C,P,V,oe,null)}}const O=N.children;for(let V=0,ie=O.length;V<ie;V++)x(O[V],C,P,M,y)}function I(N){N.target.removeEventListener("dispose",I);for(const P in c){const M=c[P],y=N.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const YE={[oc]:ac,[lc]:hc,[cc]:dc,[tr]:uc,[ac]:oc,[hc]:lc,[dc]:cc,[uc]:tr};function qE(n,e){function t(){let B=!1;const Te=new ct;let se=null;const ue=new ct(0,0,0,0);return{setMask:function(we){se!==we&&!B&&(n.colorMask(we,we,we,we),se=we)},setLocked:function(we){B=we},setClear:function(we,Ae,Ye,wt,Vt){Vt===!0&&(we*=wt,Ae*=wt,Ye*=wt),Te.set(we,Ae,Ye,wt),ue.equals(Te)===!1&&(n.clearColor(we,Ae,Ye,wt),ue.copy(Te))},reset:function(){B=!1,se=null,ue.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,se=null,ue=null,we=null;return{setReversed:function(Ae){if(Te!==Ae){const Ye=e.get("EXT_clip_control");Ae?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Te=Ae;const wt=we;we=null,this.setClear(wt)}},getReversed:function(){return Te},setTest:function(Ae){Ae?de(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Ae){se!==Ae&&!B&&(n.depthMask(Ae),se=Ae)},setFunc:function(Ae){if(Te&&(Ae=YE[Ae]),ue!==Ae){switch(Ae){case oc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case uc:n.depthFunc(n.GEQUAL);break;case hc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ae}},setLocked:function(Ae){B=Ae},setClear:function(Ae){we!==Ae&&(Te&&(Ae=1-Ae),n.clearDepth(Ae),we=Ae)},reset:function(){B=!1,se=null,ue=null,we=null,Te=!1}}}function s(){let B=!1,Te=null,se=null,ue=null,we=null,Ae=null,Ye=null,wt=null,Vt=null;return{setTest:function(pt){B||(pt?de(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(pt){Te!==pt&&!B&&(n.stencilMask(pt),Te=pt)},setFunc:function(pt,Cn,ui){(se!==pt||ue!==Cn||we!==ui)&&(n.stencilFunc(pt,Cn,ui),se=pt,ue=Cn,we=ui)},setOp:function(pt,Cn,ui){(Ae!==pt||Ye!==Cn||wt!==ui)&&(n.stencilOp(pt,Cn,ui),Ae=pt,Ye=Cn,wt=ui)},setLocked:function(pt){B=pt},setClear:function(pt){Vt!==pt&&(n.clearStencil(pt),Vt=pt)},reset:function(){B=!1,Te=null,se=null,ue=null,we=null,Ae=null,Ye=null,wt=null,Vt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,A=null,x=null,I=null,N=null,C=new $e(0,0,0),P=0,M=!1,y=null,L=null,O=null,V=null,ie=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ne=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=ne>=2);let ve=null,Ee={};const Le=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),st=new ct().fromArray(Le),K=new ct().fromArray(Oe);function ae(B,Te,se,ue){const we=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(B,Ae),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<se;Ye++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Te+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Ae}const pe={};pe[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(tr),$(!1),re(Th),de(n.CULL_FACE),b(Zi);function de(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Ce(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function He(B,Te){return h[B]!==Te?(n.bindFramebuffer(B,Te),h[B]=Te,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ne(B,Te){let se=f,ue=!1;if(B){se=d.get(Te),se===void 0&&(se=[],d.set(Te,se));const we=B.textures;if(se.length!==we.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Ye=we.length;Ae<Ye;Ae++)se[Ae]=n.COLOR_ATTACHMENT0+Ae;se.length=we.length,ue=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ue=!0);ue&&n.drawBuffers(se)}function w(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const D={[_s]:n.FUNC_ADD,[iv]:n.FUNC_SUBTRACT,[sv]:n.FUNC_REVERSE_SUBTRACT};D[rv]=n.MIN,D[ov]=n.MAX;const k={[av]:n.ZERO,[lv]:n.ONE,[cv]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[mv]:n.SRC_ALPHA_SATURATE,[fv]:n.DST_COLOR,[hv]:n.DST_ALPHA,[uv]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[pv]:n.ONE_MINUS_DST_COLOR,[dv]:n.ONE_MINUS_DST_ALPHA,[gv]:n.CONSTANT_COLOR,[_v]:n.ONE_MINUS_CONSTANT_COLOR,[vv]:n.CONSTANT_ALPHA,[xv]:n.ONE_MINUS_CONSTANT_ALPHA};function b(B,Te,se,ue,we,Ae,Ye,wt,Vt,pt){if(B===Zi){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),B!==nv){if(B!==m||pt!==M){if((p!==_s||x!==_s)&&(n.blendEquation(n.FUNC_ADD),p=_s,x=_s),pt)switch(B){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ah:n.blendFunc(n.ONE,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ah:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,A=null,I=null,N=null,C.set(0,0,0),P=0,m=B,M=pt}return}we=we||Te,Ae=Ae||se,Ye=Ye||ue,(Te!==p||we!==x)&&(n.blendEquationSeparate(D[Te],D[we]),p=Te,x=we),(se!==T||ue!==A||Ae!==I||Ye!==N)&&(n.blendFuncSeparate(k[se],k[ue],k[Ae],k[Ye]),T=se,A=ue,I=Ae,N=Ye),(wt.equals(C)===!1||Vt!==P)&&(n.blendColor(wt.r,wt.g,wt.b,Vt),C.copy(wt),P=Vt),m=B,M=!1}function te(B,Te){B.side===En?Ce(n.CULL_FACE):de(n.CULL_FACE);let se=B.side===un;Te&&(se=!se),$(se),B.blending===Zs&&B.transparent===!1?b(Zi):b(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const ue=B.stencilWrite;a.setTest(ue),ue&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ce(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(B){y!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),y=B)}function re(B){B!==ev?(de(n.CULL_FACE),B!==L&&(B===Th?n.cullFace(n.BACK):B===tv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),L=B}function J(B){B!==O&&(Z&&n.lineWidth(B),O=B)}function ce(B,Te,se){B?(de(n.POLYGON_OFFSET_FILL),(V!==Te||ie!==se)&&(n.polygonOffset(Te,se),V=Te,ie=se)):Ce(n.POLYGON_OFFSET_FILL)}function G(B){B?de(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function E(B){B===void 0&&(B=n.TEXTURE0+oe-1),ve!==B&&(n.activeTexture(B),ve=B)}function _(B,Te,se){se===void 0&&(ve===null?se=n.TEXTURE0+oe-1:se=ve);let ue=Ee[se];ue===void 0&&(ue={type:void 0,texture:void 0},Ee[se]=ue),(ue.type!==B||ue.texture!==Te)&&(ve!==se&&(n.activeTexture(se),ve=se),n.bindTexture(B,Te||pe[B]),ue.type=B,ue.texture=Te)}function U(){const B=Ee[ve];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(B){st.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),st.copy(B))}function Me(B){K.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function et(B,Te){let se=c.get(Te);se===void 0&&(se=new WeakMap,c.set(Te,se));let ue=se.get(B);ue===void 0&&(ue=n.getUniformBlockIndex(Te,B.name),se.set(B,ue))}function je(B,Te){const ue=c.get(Te).get(B);l.get(Te)!==ue&&(n.uniformBlockBinding(Te,ue,B.__bindingPointIndex),l.set(Te,ue))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,Ee={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,A=null,x=null,I=null,N=null,C=new $e(0,0,0),P=0,M=!1,y=null,L=null,O=null,V=null,ie=null,st.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ce,bindFramebuffer:He,drawBuffers:Ne,useProgram:w,setBlending:b,setMaterial:te,setFlipSided:$,setCullFace:re,setLineWidth:J,setPolygonOffset:ce,setScissorTest:G,activeTexture:E,bindTexture:_,unbindTexture:U,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Se,texImage3D:ze,updateUBOMapping:et,uniformBlockBinding:je,texStorage2D:Ge,texStorage3D:he,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Ue,viewport:Me,reset:Mt}}function ZE(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):io("canvas")}function v(E,_,U){let X=1;const Q=G(E);if((Q.width>U||Q.height>U)&&(X=U/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(X*Q.width),_e=Math.floor(X*Q.height);h===void 0&&(h=g(Y,_e));const fe=_?g(Y,_e):h;return fe.width=Y,fe.height=_e,fe.getContext("2d").drawImage(E,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+_e+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,_,U,X,Q=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=_;if(_===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),_===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const _e=Q?ba:nt.getTransfer(X);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=_e===vt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(E,_){let U;return E?_===null||_===Es||_===Jr?U=n.DEPTH24_STENCIL8:_===Fn?U=n.DEPTH32F_STENCIL8:_===Zr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Es||_===Jr?U=n.DEPTH_COMPONENT24:_===Fn?U=n.DEPTH_COMPONENT32F:_===Zr&&(U=n.DEPTH_COMPONENT16),U}function I(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==rn&&E.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function N(E){const _=E.target;_.removeEventListener("dispose",N),P(_),_.isVideoTexture&&u.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),y(_)}function P(E){const _=i.get(E);if(_.__webglInit===void 0)return;const U=E.source,X=d.get(U);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(E),Object.keys(X).length===0&&d.delete(U)}i.remove(E)}function M(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const U=E.source,X=d.get(U);delete X[_.__cacheKey],o.memory.textures--}function y(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)n.deleteFramebuffer(_.__webglFramebuffer[X]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=E.textures;for(let X=0,Q=U.length;X<Q;X++){const Y=i.get(U[X]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(U[X])}i.remove(E)}let L=0;function O(){L=0}function V(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function ie(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function oe(E,_){const U=i.get(E);if(E.isVideoTexture&&J(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,E,_);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function Z(E,_){const U=i.get(E);if(E.version>0&&U.__version!==E.version){K(U,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function ne(E,_){const U=i.get(E);if(E.version>0&&U.__version!==E.version){K(U,E,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function W(E,_){const U=i.get(E);if(E.version>0&&U.__version!==E.version){ae(U,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const ve={[sr]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[Ea]:n.MIRRORED_REPEAT},Ee={[rn]:n.NEAREST,[Ep]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Le={[Nv]:n.NEVER,[zv]:n.ALWAYS,[Uv]:n.LESS,[Up]:n.LEQUAL,[Ov]:n.EQUAL,[kv]:n.GEQUAL,[Fv]:n.GREATER,[Bv]:n.NOTEQUAL};function Oe(E,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===ia||_.magFilter===Cr||_.magFilter===bi||_.minFilter===mn||_.minFilter===ia||_.minFilter===Cr||_.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ve[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ve[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ve[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ee[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ee[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==Cr&&_.minFilter!==bi||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function st(E,_){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",N));const X=_.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const Y=ie(_);if(Y!==E.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[Y].usedTimes++;const _e=Q[E.__cacheKey];_e!==void 0&&(Q[E.__cacheKey].usedTimes--,_e.usedTimes===0&&M(_)),E.__cacheKey=Y,E.__webglTexture=Q[Y].texture}return U}function K(E,_,U){let X=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=n.TEXTURE_3D);const Q=st(E,_),Y=_.source;t.bindTexture(X,E.__webglTexture,n.TEXTURE0+U);const _e=i.get(Y);if(Y.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const fe=nt.getPrimaries(nt.workingColorSpace),xe=_.colorSpace===Wi?null:nt.getPrimaries(_.colorSpace),Ge=_.colorSpace===Wi||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let he=v(_.image,!1,s.maxTextureSize);he=ce(_,he);const Se=r.convert(_.format,_.colorSpace),ze=r.convert(_.type);let Ue=A(_.internalFormat,Se,ze,_.colorSpace,_.isVideoTexture);Oe(X,_);let Me;const et=_.mipmaps,je=_.isVideoTexture!==!0,Mt=_e.__version===void 0||Q===!0,B=Y.dataReady,Te=I(_,he);if(_.isDepthTexture)Ue=x(_.format===eo,_.type),Mt&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ue,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Ue,he.width,he.height,0,Se,ze,null));else if(_.isDataTexture)if(et.length>0){je&&Mt&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,et[0].width,et[0].height);for(let se=0,ue=et.length;se<ue;se++)Me=et[se],je?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,Se,ze,Me.data):t.texImage2D(n.TEXTURE_2D,se,Ue,Me.width,Me.height,0,Se,ze,Me.data);_.generateMipmaps=!1}else je?(Mt&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,he.width,he.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Se,ze,he.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,he.width,he.height,0,Se,ze,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){je&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,et[0].width,et[0].height,he.depth);for(let se=0,ue=et.length;se<ue;se++)if(Me=et[se],_.format!==Tn)if(Se!==null)if(je){if(B)if(_.layerUpdates.size>0){const we=vd(Me.width,Me.height,_.format,_.type);for(const Ae of _.layerUpdates){const Ye=Me.data.subarray(Ae*we/Me.data.BYTES_PER_ELEMENT,(Ae+1)*we/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ae,Me.width,Me.height,1,Se,Ye)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,he.depth,Se,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ue,Me.width,Me.height,he.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,he.depth,Se,ze,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ue,Me.width,Me.height,he.depth,0,Se,ze,Me.data)}else{je&&Mt&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,et[0].width,et[0].height);for(let se=0,ue=et.length;se<ue;se++)Me=et[se],_.format!==Tn?Se!==null?je?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,Se,ze,Me.data):t.texImage2D(n.TEXTURE_2D,se,Ue,Me.width,Me.height,0,Se,ze,Me.data)}else if(_.isDataArrayTexture)if(je){if(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,he.width,he.height,he.depth),B)if(_.layerUpdates.size>0){const se=vd(he.width,he.height,_.format,_.type);for(const ue of _.layerUpdates){const we=he.data.subarray(ue*se/he.data.BYTES_PER_ELEMENT,(ue+1)*se/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,he.width,he.height,1,Se,ze,we)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,ze,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Se,ze,he.data);else if(_.isData3DTexture)je?(Mt&&t.texStorage3D(n.TEXTURE_3D,Te,Ue,he.width,he.height,he.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,ze,he.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Se,ze,he.data);else if(_.isFramebufferTexture){if(Mt)if(je)t.texStorage2D(n.TEXTURE_2D,Te,Ue,he.width,he.height);else{let se=he.width,ue=he.height;for(let we=0;we<Te;we++)t.texImage2D(n.TEXTURE_2D,we,Ue,se,ue,0,Se,ze,null),se>>=1,ue>>=1}}else if(et.length>0){if(je&&Mt){const se=G(et[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ue,se.width,se.height)}for(let se=0,ue=et.length;se<ue;se++)Me=et[se],je?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Se,ze,Me):t.texImage2D(n.TEXTURE_2D,se,Ue,Se,ze,Me);_.generateMipmaps=!1}else if(je){if(Mt){const se=G(he);t.texStorage2D(n.TEXTURE_2D,Te,Ue,se.width,se.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ze,he)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Se,ze,he);m(_)&&p(X),_e.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ae(E,_,U){if(_.image.length!==6)return;const X=st(E,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const Y=i.get(Q);if(Q.version!==Y.__version||X===!0){t.activeTexture(n.TEXTURE0+U);const _e=nt.getPrimaries(nt.workingColorSpace),fe=_.colorSpace===Wi?null:nt.getPrimaries(_.colorSpace),xe=_.colorSpace===Wi||_e===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ge=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Ge&&!he?Se[ue]=v(_.image[ue],!0,s.maxCubemapSize):Se[ue]=he?_.image[ue].image:_.image[ue],Se[ue]=ce(_,Se[ue]);const ze=Se[0],Ue=r.convert(_.format,_.colorSpace),Me=r.convert(_.type),et=A(_.internalFormat,Ue,Me,_.colorSpace),je=_.isVideoTexture!==!0,Mt=Y.__version===void 0||X===!0,B=Q.dataReady;let Te=I(_,ze);Oe(n.TEXTURE_CUBE_MAP,_);let se;if(Ge){je&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,et,ze.width,ze.height);for(let ue=0;ue<6;ue++){se=Se[ue].mipmaps;for(let we=0;we<se.length;we++){const Ae=se[we];_.format!==Tn?Ue!==null?je?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Ae.width,Ae.height,Ue,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,et,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Ae.width,Ae.height,Ue,Me,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,et,Ae.width,Ae.height,0,Ue,Me,Ae.data)}}}else{if(se=_.mipmaps,je&&Mt){se.length>0&&Te++;const ue=G(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,et,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(he){je?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Ue,Me,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,Se[ue].width,Se[ue].height,0,Ue,Me,Se[ue].data);for(let we=0;we<se.length;we++){const Ye=se[we].image[ue].image;je?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Ye.width,Ye.height,Ue,Me,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,et,Ye.width,Ye.height,0,Ue,Me,Ye.data)}}else{je?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ue,Me,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,Ue,Me,Se[ue]);for(let we=0;we<se.length;we++){const Ae=se[we];je?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Ue,Me,Ae.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,et,Ue,Me,Ae.image[ue])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function pe(E,_,U,X,Q,Y){const _e=r.convert(U.format,U.colorSpace),fe=r.convert(U.type),xe=A(U.internalFormat,_e,fe,U.colorSpace),Ge=i.get(_),he=i.get(U);if(he.__renderTarget=_,!Ge.__hasExternalTextures){const Se=Math.max(1,_.width>>Y),ze=Math.max(1,_.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,xe,Se,ze,_.depth,0,_e,fe,null):t.texImage2D(Q,Y,xe,Se,ze,0,_e,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),re(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,he.__webglTexture,0,$(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,he.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(E,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,Y=x(_.stencilBuffer,Q),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=$(_);re(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Y,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const Y=X[Q],_e=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),xe=A(Y.internalFormat,_e,fe,Y.colorSpace),Ge=$(_);U&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,xe,_.width,_.height):re(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,xe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,xe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),oe(_.depthTexture,0);const Q=X.__webglTexture,Y=$(_);if(_.depthTexture.format===Qr)re(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===eo)re(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function He(E){const _=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ce(_.__webglFramebuffer,E)}else if(U){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=n.createRenderbuffer(),de(_.__webglDepthbuffer[X],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),de(_.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(E,_,U){const X=i.get(E);_!==void 0&&pe(X.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&He(E)}function w(E){const _=E.texture,U=i.get(E),X=i.get(_);E.addEventListener("dispose",C);const Q=E.textures,Y=E.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=_.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let xe=0;xe<_.mipmaps.length;xe++)U.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else U.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)U.__webglFramebuffer[fe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(_e)for(let fe=0,xe=Q.length;fe<xe;fe++){const Ge=i.get(Q[fe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&re(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const xe=Q[fe];U.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);const Ge=r.convert(xe.format,xe.colorSpace),he=r.convert(xe.type),Se=A(xe.internalFormat,Ge,he,xe.colorSpace,E.isXRRenderTarget===!0),ze=$(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),de(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)pe(U.__webglFramebuffer[fe][xe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else pe(U.__webglFramebuffer[fe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let fe=0,xe=Q.length;fe<xe;fe++){const Ge=Q[fe],he=i.get(Ge);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Oe(n.TEXTURE_2D,Ge),pe(U.__webglFramebuffer,E,Ge,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Ge)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,X.__webglTexture),Oe(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)pe(U.__webglFramebuffer[xe],E,_,n.COLOR_ATTACHMENT0,fe,xe);else pe(U.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}E.depthBuffer&&He(E)}function D(E){const _=E.textures;for(let U=0,X=_.length;U<X;U++){const Q=_[U];if(m(Q)){const Y=T(E),_e=i.get(Q).__webglTexture;t.bindTexture(Y,_e),p(Y),t.unbindTexture()}}}const k=[],b=[];function te(E){if(E.samples>0){if(re(E)===!1){const _=E.textures,U=E.width,X=E.height;let Q=n.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),fe=_.length>1;if(fe)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const Ge=i.get(_[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,U,X,0,0,U,X,Q,n.NEAREST),l===!0&&(k.length=0,b.length=0,k.push(n.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(k.push(Y),b.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const Ge=i.get(_[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $(E){return Math.min(s.maxSamples,E.samples)}function re(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function J(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function ce(E,_){const U=E.colorSpace,X=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==an&&U!==Wi&&(nt.getTransfer(U)===vt?(X!==Tn||Q!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function G(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=W,this.rebindTextures=Ne,this.setupRenderTarget=w,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=re}function JE(n,e){function t(i,s=Wi){let r;const o=nt.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ap)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bp)return n.BYTE;if(i===Tp)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===uo)return n.HALF_FLOAT;if(i===wp)return n.ALPHA;if(i===Rp)return n.RGB;if(i===Tn)return n.RGBA;if(i===Cp)return n.LUMINANCE;if(i===Pp)return n.LUMINANCE_ALPHA;if(i===Qr)return n.DEPTH_COMPONENT;if(i===eo)return n.DEPTH_STENCIL;if(i===_u)return n.RED;if(i===vu)return n.RED_INTEGER;if(i===Lp)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===yu)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===yc||i===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xc||i===yc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sc||i===Ec||i===bc||i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Nc||i===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Oc||i===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dp||i===Bc||i===kc||i===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===la)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const QE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ts({vertexShader:QE,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nb extends As{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=new tb,m=t.getContextAttributes();let p=null,T=null;const A=[],x=[],I=new Xe;let N=null;const C=new en;C.viewport=new ct;const P=new en;P.viewport=new ct;const M=[C,P],y=new fx;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=A[K];return ae===void 0&&(ae=new Rl,A[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=A[K];return ae===void 0&&(ae=new Rl,A[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=A[K];return ae===void 0&&(ae=new Rl,A[K]=ae),ae.getHandSpace()};function V(K){const ae=x.indexOf(K.inputSource);if(ae===-1)return;const pe=A[ae];pe!==void 0&&(pe.update(K.inputSource,K.frame,c||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function ie(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",oe);for(let K=0;K<A.length;K++){const ae=x[K];ae!==null&&(x[K]=null,A[K].disconnect(ae))}L=null,O=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,T=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,de=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?eo:Qr,de=m.stencil?Jr:Es);const He={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new bs(d.textureWidth,d.textureHeight,{format:Tn,type:Li,depthTexture:new Yp(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new bs(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function oe(K){for(let ae=0;ae<K.removed.length;ae++){const pe=K.removed[ae],de=x.indexOf(pe);de>=0&&(x[de]=null,A[de].disconnect(pe))}for(let ae=0;ae<K.added.length;ae++){const pe=K.added[ae];let de=x.indexOf(pe);if(de===-1){for(let He=0;He<A.length;He++)if(He>=x.length){x.push(pe),de=He;break}else if(x[He]===null){x[He]=pe,de=He;break}if(de===-1)break}const Ce=A[de];Ce&&Ce.connect(pe)}}const Z=new F,ne=new F;function W(K,ae,pe){Z.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);const de=Z.distanceTo(ne),Ce=ae.projectionMatrix.elements,He=pe.projectionMatrix.elements,Ne=Ce[14]/(Ce[10]-1),w=Ce[14]/(Ce[10]+1),D=(Ce[9]+1)/Ce[5],k=(Ce[9]-1)/Ce[5],b=(Ce[8]-1)/Ce[0],te=(He[8]+1)/He[0],$=Ne*b,re=Ne*te,J=de/(-b+te),ce=J*-b;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ce),K.translateZ(J),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const G=Ne+J,E=w+J,_=$-ce,U=re+(de-ce),X=D*w/E*G,Q=k*w/E*G;K.projectionMatrix.makePerspective(_,U,X,Q,G,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ve(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ae=K.near,pe=K.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),y.near=P.near=C.near=ae,y.far=P.far=C.far=pe,(L!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,O=y.far),C.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,y.layers.mask=C.layers.mask|P.layers.mask;const de=K.parent,Ce=y.cameras;ve(y,de);for(let He=0;He<Ce.length;He++)ve(Ce[He],de);Ce.length===2?W(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),Ee(K,y,de)};function Ee(K,ae,pe){pe===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=rr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Le=null;function Oe(K,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let de=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Ne=0;Ne<pe.length;Ne++){const w=pe[Ne];let D=null;if(f!==null)D=f.getViewport(w);else{const b=h.getViewSubImage(d,w);D=b.viewport,Ne===0&&(e.setRenderTargetTextures(T,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(T))}let k=M[Ne];k===void 0&&(k=new en,k.layers.enable(Ne),k.viewport=new ct,M[Ne]=k),k.matrix.fromArray(w.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(w.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(D.x,D.y,D.width,D.height),Ne===0&&(y.matrix.copy(k.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(k)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ne=h.getDepthInformation(pe[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,s.renderState)}}for(let pe=0;pe<A.length;pe++){const de=x[pe],Ce=A[pe];de!==null&&Ce!==void 0&&Ce.update(de,ae,c||o)}Le&&Le(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const st=new Qp;st.setAnimationLoop(Oe),this.setAnimationLoop=function(K){Le=K},this.dispose=function(){}}}const ds=new oi,ib=new Ze;function sb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),A=T.envMap,x=T.envMapRotation;A&&(m.envMap.value=A,ds.copy(x),ds.x*=-1,ds.y*=-1,ds.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(ds)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const x=A.program;i.uniformBlockBinding(T,x)}function c(T,A){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const I=A.program;i.updateUBOMapping(T,I);const N=e.render.frame;r[T.id]!==N&&(d(T),r[T.id]=N)}function u(T){const A=h();T.__bindingPointIndex=A;const x=n.createBuffer(),I=T.__size,N=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const A=s[T.id],x=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let N=0,C=x.length;N<C;N++){const P=Array.isArray(x[N])?x[N]:[x[N]];for(let M=0,y=P.length;M<y;M++){const L=P[M];if(f(L,N,M,I)===!0){const O=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let ie=0;for(let oe=0;oe<V.length;oe++){const Z=V[oe],ne=v(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,O+ie,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,ie),ie+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,A,x,I){const N=T.value,C=A+"_"+x;if(I[C]===void 0)return typeof N=="number"||typeof N=="boolean"?I[C]=N:I[C]=N.clone(),!0;{const P=I[C];if(typeof N=="number"||typeof N=="boolean"){if(P!==N)return I[C]=N,!0}else if(P.equals(N)===!1)return P.copy(N),!0}return!1}function g(T){const A=T.uniforms;let x=0;const I=16;for(let C=0,P=A.length;C<P;C++){const M=Array.isArray(A[C])?A[C]:[A[C]];for(let y=0,L=M.length;y<L;y++){const O=M[y],V=Array.isArray(O.value)?O.value:[O.value];for(let ie=0,oe=V.length;ie<oe;ie++){const Z=V[ie],ne=v(Z),W=x%I,ve=W%ne.boundary,Ee=W+ve;x+=ve,Ee!==0&&I-Ee<ne.storage&&(x+=I-Ee),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=ne.storage}}}const N=x%I;return N>0&&(x+=I-N),T.__size=x,T.__cache={},this}function v(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const x=o.indexOf(A.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ob{constructor(e={}){const{canvas:t=i0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=kt;let N=0,C=0,P=null,M=-1,y=null;const L=new ct,O=new ct;let V=null;const ie=new $e(0);let oe=0,Z=t.width,ne=t.height,W=1,ve=null,Ee=null;const Le=new ct(0,0,Z,ne),Oe=new ct(0,0,Z,ne);let st=!1;const K=new Au;let ae=!1,pe=!1;const de=new Ze,Ce=new Ze,He=new F,Ne=new ct,w={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function k(){return P===null?W:1}let b=i;function te(S,z){return t.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fu}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),b===null){const z="webgl2";if(b=te(z,S),b===null)throw te(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $,re,J,ce,G,E,_,U,X,Q,Y,_e,fe,xe,Ge,he,Se,ze,Ue,Me,et,je,Mt,B;function Te(){$=new gS(b),$.init(),je=new JE(b,$),re=new cS(b,$,e,je),J=new qE(b,$),re.reverseDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ce=new xS(b),G=new FE,E=new ZE(b,$,J,G,re,je,ce),_=new hS(x),U=new mS(x),X=new Tx(b),Mt=new aS(b,X),Q=new _S(b,X,ce,Mt),Y=new MS(b,Q,X,ce),Ue=new yS(b,re,E),he=new uS(G),_e=new OE(x,_,U,$,re,Mt,he),fe=new sb(x,G),xe=new kE,Ge=new XE($),ze=new oS(x,_,U,J,Y,f,l),Se=new KE(x,Y,re),B=new rb(b,ce,re,J),Me=new lS(b,$,ce),et=new vS(b,$,ce),ce.programs=_e.programs,x.capabilities=re,x.extensions=$,x.properties=G,x.renderLists=xe,x.shadowMap=Se,x.state=J,x.info=ce}Te();const se=new nb(x,b);this.xr=se,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const S=$.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(Z,ne,!1))},this.getSize=function(S){return S.set(Z,ne)},this.setSize=function(S,z,j=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,ne=z,t.width=Math.floor(S*W),t.height=Math.floor(z*W),j===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(Z*W,ne*W).floor()},this.setDrawingBufferSize=function(S,z,j){Z=S,ne=z,W=j,t.width=Math.floor(S*j),t.height=Math.floor(z*j),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Le)},this.setViewport=function(S,z,j,q){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,z,j,q),J.viewport(L.copy(Le).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,z,j,q){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,z,j,q),J.scissor(O.copy(Oe).multiplyScalar(W).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){J.setScissorTest(st=S)},this.setOpaqueSort=function(S){ve=S},this.setTransparentSort=function(S){Ee=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,j=!0){let q=0;if(S){let H=!1;if(P!==null){const me=P.texture.format;H=me===yu||me===xu||me===vu}if(H){const me=P.texture.type,be=me===Li||me===Es||me===Zr||me===Jr||me===mu||me===gu,Pe=ze.getClearColor(),De=ze.getClearAlpha(),We=Pe.r,Ve=Pe.g,Fe=Pe.b;be?(g[0]=We,g[1]=Ve,g[2]=Fe,g[3]=De,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=We,v[1]=Ve,v[2]=Fe,v[3]=De,b.clearBufferiv(b.COLOR,0,v))}else q|=b.COLOR_BUFFER_BIT}z&&(q|=b.DEPTH_BUFFER_BIT),j&&(q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ze.dispose(),xe.dispose(),Ge.dispose(),G.dispose(),_.dispose(),U.dispose(),Y.dispose(),Mt.dispose(),B.dispose(),_e.dispose(),se.dispose(),se.removeEventListener("sessionstart",Nu),se.removeEventListener("sessionend",Uu),ns.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=ce.autoReset,z=Se.enabled,j=Se.autoUpdate,q=Se.needsUpdate,H=Se.type;Te(),ce.autoReset=S,Se.enabled=z,Se.autoUpdate=j,Se.needsUpdate=q,Se.type=H}function Ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ye(S){const z=S.target;z.removeEventListener("dispose",Ye),wt(z)}function wt(S){Vt(S),G.remove(S)}function Vt(S){const z=G.get(S).programs;z!==void 0&&(z.forEach(function(j){_e.releaseProgram(j)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,j,q,H,me){z===null&&(z=w);const be=H.isMesh&&H.matrixWorld.determinant()<0,Pe=cm(S,z,j,q,H);J.setMaterial(q,be);let De=j.index,We=1;if(q.wireframe===!0){if(De=Q.getWireframeAttribute(j),De===void 0)return;We=2}const Ve=j.drawRange,Fe=j.attributes.position;let it=Ve.start*We,ut=(Ve.start+Ve.count)*We;me!==null&&(it=Math.max(it,me.start*We),ut=Math.min(ut,(me.start+me.count)*We)),De!==null?(it=Math.max(it,0),ut=Math.min(ut,De.count)):Fe!=null&&(it=Math.max(it,0),ut=Math.min(ut,Fe.count));const Pt=ut-it;if(Pt<0||Pt===1/0)return;Mt.setup(H,q,Pe,j,De);let Rt,rt=Me;if(De!==null&&(Rt=X.get(De),rt=et,rt.setIndex(Rt)),H.isMesh)q.wireframe===!0?(J.setLineWidth(q.wireframeLinewidth*k()),rt.setMode(b.LINES)):rt.setMode(b.TRIANGLES);else if(H.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),J.setLineWidth(Be*k()),H.isLineSegments?rt.setMode(b.LINES):H.isLineLoop?rt.setMode(b.LINE_LOOP):rt.setMode(b.LINE_STRIP)}else H.isPoints?rt.setMode(b.POINTS):H.isSprite&&rt.setMode(b.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ca("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,Ft=H._multiDrawCounts,ht=H._multiDrawCount,Pn=De?X.get(De).bytesPerElement:1,ws=G.get(q).currentProgram.getUniforms();for(let hn=0;hn<ht;hn++)ws.setValue(b,"_gl_DrawID",hn),rt.render(Be[hn]/Pn,Ft[hn])}else if(H.isInstancedMesh)rt.renderInstances(it,Pt,H.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ft=Math.min(j.instanceCount,Be);rt.renderInstances(it,Pt,Ft)}else rt.render(it,Pt)};function pt(S,z,j){S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=un,S.needsUpdate=!0,_o(S,z,j),S.side=Pi,S.needsUpdate=!0,_o(S,z,j),S.side=En):_o(S,z,j)}this.compile=function(S,z,j=null){j===null&&(j=S),p=Ge.get(j),p.init(z),A.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==j&&S.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){const Pe=me[be];pt(Pe,j,H),q.add(Pe)}else pt(me,j,H),q.add(me)}),p=A.pop(),q},this.compileAsync=function(S,z,j=null){const q=this.compile(S,z,j);return new Promise(H=>{function me(){if(q.forEach(function(be){G.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){H(S);return}setTimeout(me,10)}$.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Cn=null;function ui(S){Cn&&Cn(S)}function Nu(){ns.stop()}function Uu(){ns.start()}const ns=new Qp;ns.setAnimationLoop(ui),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(S){Cn=S,se.setAnimationLoop(S),S===null?ns.stop():ns.start()},se.addEventListener("sessionstart",Nu),se.addEventListener("sessionend",Uu),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,z,P),p=Ge.get(S,A.length),p.init(z),A.push(p),Ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(Ce),pe=this.localClippingEnabled,ae=he.init(this.clippingPlanes,pe),m=xe.get(S,T.length),m.init(),T.push(m),se.enabled===!0&&se.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&ja(me,z,-1/0,x.sortObjects)}ja(S,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ve,Ee),D=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,D&&ze.addToRenderList(m,S),this.info.render.frame++,ae===!0&&he.beginShadows();const j=p.state.shadowsArray;Se.render(j,S,z),ae===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const me=z.cameras;if(H.length>0)for(let be=0,Pe=me.length;be<Pe;be++){const De=me[be];Fu(q,H,S,De)}D&&ze.render(S);for(let be=0,Pe=me.length;be<Pe;be++){const De=me[be];Ou(m,S,De,De.viewport)}}else H.length>0&&Fu(q,H,S,z),D&&ze.render(S),Ou(m,S,z);P!==null&&C===0&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,z),Mt.resetDefaultState(),M=-1,y=null,A.pop(),A.length>0?(p=A[A.length-1],ae===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ja(S,z,j,q){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){q&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ce);const be=Y.update(S),Pe=S.material;Pe.visible&&m.push(S,be,Pe,j,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const be=Y.update(S),Pe=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ne.copy(be.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(Ce)),Array.isArray(Pe)){const De=be.groups;for(let We=0,Ve=De.length;We<Ve;We++){const Fe=De[We],it=Pe[Fe.materialIndex];it&&it.visible&&m.push(S,be,it,j,Ne.z,Fe)}}else Pe.visible&&m.push(S,be,Pe,j,Ne.z,null)}}const me=S.children;for(let be=0,Pe=me.length;be<Pe;be++)ja(me[be],z,j,q)}function Ou(S,z,j,q){const H=S.opaque,me=S.transmissive,be=S.transparent;p.setupLightsView(j),ae===!0&&he.setGlobalState(x.clippingPlanes,j),q&&J.viewport(L.copy(q)),H.length>0&&go(H,z,j),me.length>0&&go(me,z,j),be.length>0&&go(be,z,j),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Fu(S,z,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new bs(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?uo:Li,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const me=p.state.transmissionRenderTarget[q.id],be=q.viewport||L;me.setSize(be.z*x.transmissionResolutionScale,be.w*x.transmissionResolutionScale);const Pe=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(ie),oe=x.getClearAlpha(),oe<1&&x.setClearColor(16777215,.5),x.clear(),D&&ze.render(j);const De=x.toneMapping;x.toneMapping=Ji;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ae===!0&&he.setGlobalState(x.clippingPlanes,q),go(S,j,q),E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,it=z.length;Fe<it;Fe++){const ut=z[Fe],Pt=ut.object,Rt=ut.geometry,rt=ut.material,Be=ut.group;if(rt.side===En&&Pt.layers.test(q.layers)){const Ft=rt.side;rt.side=un,rt.needsUpdate=!0,Bu(Pt,j,q,Rt,rt,Be),rt.side=Ft,rt.needsUpdate=!0,Ve=!0}}Ve===!0&&(E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me))}x.setRenderTarget(Pe),x.setClearColor(ie,oe),We!==void 0&&(q.viewport=We),x.toneMapping=De}function go(S,z,j){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,me=S.length;H<me;H++){const be=S[H],Pe=be.object,De=be.geometry,We=be.group;let Ve=be.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),Pe.layers.test(j.layers)&&Bu(Pe,z,j,De,Ve,We)}}function Bu(S,z,j,q,H,me){S.onBeforeRender(x,z,j,q,H,me),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(x,z,j,q,S,me),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,x.renderBufferDirect(j,z,q,H,S,me),H.side=Pi,H.needsUpdate=!0,x.renderBufferDirect(j,z,q,H,S,me),H.side=En):x.renderBufferDirect(j,z,q,H,S,me),S.onAfterRender(x,z,j,q,H,me)}function _o(S,z,j){z.isScene!==!0&&(z=w);const q=G.get(S),H=p.state.lights,me=p.state.shadowsArray,be=H.state.version,Pe=_e.getParameters(S,H.state,me,z,j),De=_e.getProgramCacheKey(Pe);let We=q.programs;q.environment=S.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(S.isMeshStandardMaterial?U:_).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",Ye),We=new Map,q.programs=We);let Ve=We.get(De);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===be)return zu(S,Pe),Ve}else Pe.uniforms=_e.getUniforms(S),S.onBeforeCompile(Pe,x),Ve=_e.acquireProgram(Pe,De),We.set(De,Ve),q.uniforms=Pe.uniforms;const Fe=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=he.uniform),zu(S,Pe),q.needsLights=hm(S),q.lightsStateVersion=be,q.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function ku(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=ha.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function zu(S,z){const j=G.get(S);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function cm(S,z,j,q,H){z.isScene!==!0&&(z=w),E.resetTextureUnits();const me=z.fog,be=q.isMeshStandardMaterial?z.environment:null,Pe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:an,De=(q.isMeshStandardMaterial?U:_).get(q.envMap||be),We=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,ut=!!j.morphAttributes.color;let Pt=Ji;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=x.toneMapping);const Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,rt=Rt!==void 0?Rt.length:0,Be=G.get(q),Ft=p.state.lights;if(ae===!0&&(pe===!0||S!==y)){const Kt=S===y&&q.id===M;he.setState(q,S,Kt)}let ht=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ft.state.version||Be.outputColorSpace!==Pe||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==De||q.fog===!0&&Be.fog!==me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==Ve||Be.morphTargets!==Fe||Be.morphNormals!==it||Be.morphColors!==ut||Be.toneMapping!==Pt||Be.morphTargetsCount!==rt)&&(ht=!0):(ht=!0,Be.__version=q.version);let Pn=Be.currentProgram;ht===!0&&(Pn=_o(q,z,H));let ws=!1,hn=!1,pr=!1;const Et=Pn.getUniforms(),gn=Be.uniforms;if(J.useProgram(Pn.program)&&(ws=!0,hn=!0,pr=!0),q.id!==M&&(M=q.id,hn=!0),ws||y!==S){J.buffers.depth.getReversed()?(de.copy(S.projectionMatrix),r0(de),o0(de),Et.setValue(b,"projectionMatrix",de)):Et.setValue(b,"projectionMatrix",S.projectionMatrix),Et.setValue(b,"viewMatrix",S.matrixWorldInverse);const ln=Et.map.cameraPosition;ln!==void 0&&ln.setValue(b,He.setFromMatrixPosition(S.matrixWorld)),re.logarithmicDepthBuffer&&Et.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Et.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,hn=!0,pr=!0)}if(H.isSkinnedMesh){Et.setOptional(b,H,"bindMatrix"),Et.setOptional(b,H,"bindMatrixInverse");const Kt=H.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(b,"boneTexture",Kt.boneTexture,E))}H.isBatchedMesh&&(Et.setOptional(b,H,"batchingTexture"),Et.setValue(b,"batchingTexture",H._matricesTexture,E),Et.setOptional(b,H,"batchingIdTexture"),Et.setValue(b,"batchingIdTexture",H._indirectTexture,E),Et.setOptional(b,H,"batchingColorTexture"),H._colorsTexture!==null&&Et.setValue(b,"batchingColorTexture",H._colorsTexture,E));const _n=j.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ue.update(H,j,Pn),(hn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,Et.setValue(b,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gn.envMap.value=De,gn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(gn.envMapIntensity.value=z.environmentIntensity),hn&&(Et.setValue(b,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&um(gn,pr),me&&q.fog===!0&&fe.refreshFogUniforms(gn,me),fe.refreshMaterialUniforms(gn,q,W,ne,p.state.transmissionRenderTarget[S.id]),ha.upload(b,ku(Be),gn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ha.upload(b,ku(Be),gn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Et.setValue(b,"center",H.center),Et.setValue(b,"modelViewMatrix",H.modelViewMatrix),Et.setValue(b,"normalMatrix",H.normalMatrix),Et.setValue(b,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Kt=q.uniformsGroups;for(let ln=0,Ka=Kt.length;ln<Ka;ln++){const is=Kt[ln];B.update(is,Pn),B.bind(is,Pn)}}return Pn}function um(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function hm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,z,j){const q=G.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=z,G.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const j=G.get(S);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const dm=b.createFramebuffer();this.setRenderTarget=function(S,z=0,j=0){P=S,N=z,C=j;let q=!0,H=null,me=!1,be=!1;if(S){const De=G.get(S);if(De.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(b.FRAMEBUFFER,null),q=!1;else if(De.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(De.__hasExternalTextures)E.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(De.__boundDepthTexture!==Fe){if(Fe!==null&&G.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(be=!0);const Ve=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?H=Ve[z][j]:H=Ve[z],me=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?H=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[j]:H=Ve,L.copy(S.viewport),O.copy(S.scissor),V=S.scissorTest}else L.copy(Le).multiplyScalar(W).floor(),O.copy(Oe).multiplyScalar(W).floor(),V=st;if(j!==0&&(H=dm),J.bindFramebuffer(b.FRAMEBUFFER,H)&&q&&J.drawBuffers(S,H),J.viewport(L),J.scissor(O),J.setScissorTest(V),me){const De=G.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,j)}else if(be){const De=G.get(S.texture),We=z;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,De.__webglTexture,j,We)}else if(S!==null&&j!==0){const De=G.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,De.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(S,z,j,q,H,me,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){J.bindFramebuffer(b.FRAMEBUFFER,Pe);try{const De=S.texture,We=De.format,Ve=De.type;if(!re.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-q&&j>=0&&j<=S.height-H&&b.readPixels(z,j,q,H,je.convert(We),je.convert(Ve),me)}finally{const De=P!==null?G.get(P).__webglFramebuffer:null;J.bindFramebuffer(b.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,z,j,q,H,me,be){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(z>=0&&z<=S.width-q&&j>=0&&j<=S.height-H){J.bindFramebuffer(b.FRAMEBUFFER,Pe);const De=S.texture,We=De.format,Ve=De.type;if(!re.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Fe),b.bufferData(b.PIXEL_PACK_BUFFER,me.byteLength,b.STREAM_READ),b.readPixels(z,j,q,H,je.convert(We),je.convert(Ve),0);const it=P!==null?G.get(P).__webglFramebuffer:null;J.bindFramebuffer(b.FRAMEBUFFER,it);const ut=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await s0(b,ut,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Fe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,me),b.deleteBuffer(Fe),b.deleteSync(ut),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,j=0){const q=Math.pow(2,-j),H=Math.floor(S.image.width*q),me=Math.floor(S.image.height*q),be=z!==null?z.x:0,Pe=z!==null?z.y:0;E.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,j,0,0,be,Pe,H,me),J.unbindTexture()};const fm=b.createFramebuffer(),pm=b.createFramebuffer();this.copyTextureToTexture=function(S,z,j=null,q=null,H=0,me=null){me===null&&(H!==0?(ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=H,H=0):me=0);let be,Pe,De,We,Ve,Fe,it,ut,Pt;const Rt=S.isCompressedTexture?S.mipmaps[me]:S.image;if(j!==null)be=j.max.x-j.min.x,Pe=j.max.y-j.min.y,De=j.isBox3?j.max.z-j.min.z:1,We=j.min.x,Ve=j.min.y,Fe=j.isBox3?j.min.z:0;else{const _n=Math.pow(2,-H);be=Math.floor(Rt.width*_n),Pe=Math.floor(Rt.height*_n),S.isDataArrayTexture?De=Rt.depth:S.isData3DTexture?De=Math.floor(Rt.depth*_n):De=1,We=0,Ve=0,Fe=0}q!==null?(it=q.x,ut=q.y,Pt=q.z):(it=0,ut=0,Pt=0);const rt=je.convert(z.format),Be=je.convert(z.type);let Ft;z.isData3DTexture?(E.setTexture3D(z,0),Ft=b.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(E.setTexture2DArray(z,0),Ft=b.TEXTURE_2D_ARRAY):(E.setTexture2D(z,0),Ft=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const ht=b.getParameter(b.UNPACK_ROW_LENGTH),Pn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ws=b.getParameter(b.UNPACK_SKIP_PIXELS),hn=b.getParameter(b.UNPACK_SKIP_ROWS),pr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Rt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Rt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,We),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ve),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Fe);const Et=S.isDataArrayTexture||S.isData3DTexture,gn=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const _n=G.get(S),Kt=G.get(z),ln=G.get(_n.__renderTarget),Ka=G.get(Kt.__renderTarget);J.bindFramebuffer(b.READ_FRAMEBUFFER,ln.__webglFramebuffer),J.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ka.__webglFramebuffer);for(let is=0;is<De;is++)Et&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,G.get(S).__webglTexture,H,Fe+is),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,G.get(z).__webglTexture,me,Pt+is)),b.blitFramebuffer(We,Ve,be,Pe,it,ut,be,Pe,b.DEPTH_BUFFER_BIT,b.NEAREST);J.bindFramebuffer(b.READ_FRAMEBUFFER,null),J.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||G.has(S)){const _n=G.get(S),Kt=G.get(z);J.bindFramebuffer(b.READ_FRAMEBUFFER,fm),J.bindFramebuffer(b.DRAW_FRAMEBUFFER,pm);for(let ln=0;ln<De;ln++)Et?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_n.__webglTexture,H,Fe+ln):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,_n.__webglTexture,H),gn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Kt.__webglTexture,me,Pt+ln):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Kt.__webglTexture,me),H!==0?b.blitFramebuffer(We,Ve,be,Pe,it,ut,be,Pe,b.COLOR_BUFFER_BIT,b.NEAREST):gn?b.copyTexSubImage3D(Ft,me,it,ut,Pt+ln,We,Ve,be,Pe):b.copyTexSubImage2D(Ft,me,it,ut,We,Ve,be,Pe);J.bindFramebuffer(b.READ_FRAMEBUFFER,null),J.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else gn?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(Ft,me,it,ut,Pt,be,Pe,De,rt,Be,Rt.data):z.isCompressedArrayTexture?b.compressedTexSubImage3D(Ft,me,it,ut,Pt,be,Pe,De,rt,Rt.data):b.texSubImage3D(Ft,me,it,ut,Pt,be,Pe,De,rt,Be,Rt):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,me,it,ut,be,Pe,rt,Be,Rt.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,me,it,ut,Rt.width,Rt.height,rt,Rt.data):b.texSubImage2D(b.TEXTURE_2D,me,it,ut,be,Pe,rt,Be,Rt);b.pixelStorei(b.UNPACK_ROW_LENGTH,ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Pn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ws),b.pixelStorei(b.UNPACK_SKIP_ROWS,hn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,pr),me===0&&z.generateMipmaps&&b.generateMipmap(Ft),J.unbindTexture()},this.copyTextureToTexture3D=function(S,z,j=null,q=null,H=0){return ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,z,j,q,H)},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),J.unbindTexture()},this.resetState=function(){N=0,C=0,P=null,J.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function Gd(n,e){if(e===Pv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Hc||e===Ip){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Hc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class ab extends dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new db(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Ab(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=zr.extractUrlBase(e);o=zr.resolveURL(c,this.path)}else o=zr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Jp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sm){try{o[tt.KHR_BINARY_GLTF]=new wb(e)}catch(h){s&&s(h);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new zb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:o[h]=new ub;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Rb(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[h]=new Cb;break;case tt.KHR_MESH_QUANTIZATION:o[h]=new Pb;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function lb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cb{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ua(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ux(u),c.distance=h;break;case"spot":c=new lx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class ub{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ai}extendParams(e,t,i){const s=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(s)}}class hb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class db{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(r)}}class fb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class pb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class mb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class gb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class _b{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],an),Promise.all(r)}}class vb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class xb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(r)}}class yb{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Mb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Sb{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Eb{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bb{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tb{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class Ab{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const v=new Ze,m=new F,p=new ri,T=new F(1,1,1),A=new F0(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&T.fromBufferAttribute(l.SCALE,x),A.setMatrixAt(x,v.compose(m,p,T));for(const x in l)if(x==="_COLOR_0"){const I=l[x];A.instanceColor=new Gc(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);bt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const sm="glTF",Ar=12,Wd={JSON:1313821514,BIN:5130562};class wb{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ar),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ar,r=new DataView(e,Ar);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Wd.JSON){const c=new Uint8Array(e,Ar+o,a);this.content=i.decode(c)}else if(l===Wd.BIN){const c=Ar+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=$c[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=$c[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],f=Qs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(f)},a,c,an,d)})})}}class Cb{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Pb{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class rm extends mo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,T=1-m,A=p-d+h;for(let x=0;x!==a;x++){const I=o[v+x+a],N=o[v+x+l]*u,C=o[g+x+a],P=o[g+x]*u;r[x]=T*I+A*N+m*C+p*P}return r}}const Lb=new ri;class Db extends rm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Lb.fromArray(r).normalize().toArray(r),r}}const yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xd={9728:rn,9729:mn,9984:Ep,9985:ia,9986:Cr,9987:bi},$d={33071:$i,33648:Ea,10497:sr},Hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ib={CUBICSPLINE:void 0,LINEAR:no,STEP:to},Vl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ga({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),n.DefaultMaterial}function fs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function yi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ub(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function Ob(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fb(n){let e;const t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gl(t.attributes):e=n.indices+":"+Gl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Gl(n.targets[i]);return e}function Gl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function jc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kb=new Ze;class zb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new rx(this.options.manager):this.textureLoader=new dx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return fs(r,a,s),yi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(zr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Hl[s.type],a=Qs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new on(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Hl[s.type],c=Qs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(d/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let A=t.cache.get(T);A||(v=new c(a,p*f,s.count*f/u),A=new D0(v,f/u),t.cache.add(T,A)),m=new bu(A,l,d%f/u,g)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),m=new on(v,l,g);if(s.sparse!==void 0){const p=Hl.SCALAR,T=Qs[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new T(o[1],A,s.sparse.count*p),N=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new on(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,P=I.length;C<P;C++){const M=I[C];if(m.setX(M,N[C*l]),l>=2&&m.setY(M,N[C*l+1]),l>=3&&m.setZ(M,N[C*l+2]),l>=4&&m.setW(M,N[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Xd[d.magFilter]||mn,u.minFilter=Xd[d.minFilter]||bi,u.wrapS=$d[d.wrapS]||sr,u.wrapT=$d[d.wrapT]||sr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==mn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Ot(v);m.needsUpdate=!0,d(m)}),t.load(zr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),yi(h,o),h.userData.mimeType=o.mimeType||Bb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Kp,Hn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new jp,Hn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ga}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=s[tt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],an),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,kt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=En);const u=r.alphaMode||Vl.OPAQUE;if(u===Vl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Vl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ai&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ai&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ai){const h=r.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&o!==Ai&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,kt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&fs(s,h,r),h})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return jd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Fb(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=jd(new li,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Nb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=o[f];let p;const T=c[f];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new N0(v,T):new Ht(v,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?p.geometry=Gd(p.geometry,Ip):m.mode===yn.TRIANGLE_FAN&&(p.geometry=Gd(p.geometry,Hc));else if(m.mode===yn.LINES)p=new z0(v,T);else if(m.mode===yn.LINE_STRIP)p=new wu(v,T);else if(m.mode===yn.LINE_LOOP)p=new H0(v,T);else if(m.mode===yn.POINTS)p=new V0(v,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ob(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),yi(p,r),m.extensions&&fs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&fs(s,h[0],r),h[0];const d=new ji;r.extensions&&fs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new en(Su.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Cu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),yi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let T=0,A=d.length;T<A;T++){const x=d[T],I=f[T],N=g[T],C=v[T],P=m[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=i._createAnimationTracks(x,I,N,C,P);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new J0(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,kb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Xp:c.length>1?u=new ji:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),yi(u,r),r.extensions&&fs(i,u,r),r.matrix!==void 0){const h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ji;i.name&&(r.name=s.createUniqueName(i.name)),yi(r,i),i.extensions&&fs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Hn||d instanceof Ot)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];zi[r.path]===zi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(zi[r.path]){case zi.weights:c=ar;break;case zi.rotation:c=lr;break;case zi.translation:case zi.scale:c=cr;break;default:switch(i.itemSize){case 1:c=ar;break;case 2:case 3:default:c=cr;break}break}const u=s.interpolation!==void 0?Ib[s.interpolation]:no,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+zi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=jc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof lr?Db:rm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Hb(n,e,t){const i=e.attributes,s=new Vn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=jc(Qs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=jc(Qs[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function jd(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=$c[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==an&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),yi(n,e),Hb(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ub(n,e.targets,t):n})}const Vb=[250,154,57,224,88,56,191,20],Gb=[236,125,209,56,136,83,192,183],Wb=[197,192,234,204,53,62,251,188],Xb=[248,157,98,102,174,8,47,216],$b=[24,6,15,20,2,29,13,23,14,8,5,21,11,19,25,7,9,31,1,30,0,28,22,10,3,16,27,18,26,17,12,4],jb=[84,159,89,44,227,214,65,23,59,206,55,91,73,169,131,144];function Kb(){const n=[Vb,Gb,Wb,Xb],e=new Uint8Array(32);for(let t=0;t<32;t++){const i=n[t>>3];e[$b[t]]=i[t&7]^jb[t&15]^t*73+19&255}return e}const Kd=[70,83,76,49],Kc=16,Yb=Kc+16+1;let Zo=null;function qb(){var n;if(!((n=globalThis.crypto)!=null&&n.subtle))return Promise.reject(new Error("Web Crypto API is unavailable; HTTPS or localhost is required for model decryption."));if(!Zo){const e=Kb(),t=new Uint8Array(e);e.fill(0),Zo=globalThis.crypto.subtle.importKey("raw",t,{name:"AES-GCM"},!1,["decrypt"]).finally(()=>{t.fill(0)}).catch(i=>{throw Zo=null,i})}return Zo}function Zb(n,e){const t=new Uint8Array(e);let i=0;for(const s of n)t.set(s,i),i+=s.byteLength;return t.buffer}async function Jb(n){if(n.byteLength<Yb)throw new Error(`Invalid encrypted model buffer length: ${n.byteLength}`);const e=new Uint8Array(n);for(let r=0;r<Kd.length;r++)if(e[r]!==Kd[r])throw new Error("Invalid encrypted model header");const t=e.subarray(4,Kc),i=e.subarray(Kc),s=await qb();return globalThis.crypto.subtle.decrypt({name:"AES-GCM",iv:t},s,i)}async function Qb(n,e){const s=`${"./".endsWith("/")?"./":".//"}${n.replace(/^\/+/,"")}`,r=await fetch(s);if(!r.ok)throw new Error(`Failed to fetch encrypted model (${r.status}): ${s}`);const o=Number(r.headers.get("content-length")??0);let a;if(r.body&&o>0&&e){const l=r.body.getReader(),c=[];let u=0;for(;;){const{done:h,value:d}=await l.read();if(h)break;d&&d.byteLength>0&&(c.push(d),u+=d.byteLength,e(Math.min(95,Math.round(u/o*95))))}a=Zb(c,u)}else a=await r.arrayBuffer(),e==null||e(95);return Jb(a)}const Wl=new Map,eT=new ab;function om(n,e){const t=Wl.get(n);if(t)return e&&t.then(()=>e(100)).catch(()=>{}),t;const i=Qb(n,s=>{e==null||e(Math.min(90,Math.round(s*.9)))}).then(s=>new Promise((r,o)=>{e==null||e(92),eT.parse(s,"",a=>{e==null||e(100),r(a.scene)},a=>{o(a)})})).catch(s=>{throw Wl.delete(n),s});return Wl.set(n,i),i}async function tT(n,e){const t=Array.from(new Set(n.filter(Boolean))),i=t.length;if(i===0){e==null||e({percent:100,loadedCount:0,totalCount:0});return}const s=new Array(i).fill(0);let r=0;const o=()=>{const a=s.reduce((c,u)=>c+u,0),l=Math.min(100,Math.round(a/i));e==null||e({percent:l,loadedCount:r,totalCount:i})};o(),await Promise.allSettled(t.map((a,l)=>om(a,c=>{c>s[l]&&(s[l]=Math.min(100,c),o())}).finally(()=>{s[l]=100,r+=1,o()})))}const nT={class:"boot-overlay",role:"status","aria-live":"polite"},iT={class:"boot-top-bar"},sT={class:"boot-brand"},rT={class:"boot-handle"},oT={class:"micro-label"},aT={class:"boot-tagline"},lT={class:"boot-center"},cT={class:"boot-status-row"},uT={class:"micro-label"},hT={class:"boot-percent"},dT={class:"boot-progress-track"},fT={class:"boot-phases"},pT={key:0,class:"signal-dot","aria-hidden":"true"},mT={key:1,class:"boot-phase-dash","aria-hidden":"true"},gT={class:"boot-bottom-bar"},_T={class:"micro-label"},vT=Gn({__name:"BootOverlay",props:{lang:{},active:{type:Boolean}},emits:["complete"],setup(n,{emit:e}){const t=n,i=e,s=lt(0),r=lt(0),o=lt(jn.length),a=lt(!1);let l=0,c=0,u=0,h=!1,d=0;const f=Ss(()=>a.value&&s.value>=95?2:s.value>=34?1:0),g=Ss(()=>`${String(Math.round(s.value)).padStart(2,"0")}%`);function v(){h||(h=!0,c&&cancelAnimationFrame(c),c=0,window.clearTimeout(u),s.value=100,i("complete"))}function m(){var y;c&&cancelAnimationFrame(c),c=0,window.clearTimeout(u);const p=++d;h=!1,a.value=!1,s.value=0,r.value=0,o.value=jn.length,l=0;let T=0,A=0;const x=()=>{p===d&&(l=Math.round(T*.05+A*.95))},I=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,N=typeof document<"u"&&((y=document.fonts)!=null&&y.ready)?document.fonts.ready.catch(()=>{}).then(()=>{T=100,x()}):Promise.resolve().then(()=>{T=100,x()}),C=tT(jn.map(L=>L.modelUrl),({percent:L,loadedCount:O,totalCount:V})=>{p===d&&(r.value=O,o.value=V,A=L,x())});Promise.allSettled([N,C]).then(()=>{p===d&&(l=100,a.value=!0)});let P=performance.now();const M=L=>{if(p!==d)return;const O=Math.min(64,Math.max(0,L-P));if(P=L,a.value&&I){s.value=100,c=0,u=window.setTimeout(v,40);return}const V=a.value?100:Math.min(99,l),ie=V-s.value;if(ie>0){const oe=a.value?.014:.01,Z=ie*(1-Math.exp(-oe*O)),ne=a.value?Math.min(ie,.35*(O/16)):0;s.value=Math.min(V,s.value+Math.max(Z,ne))}if(a.value&&s.value>=99.8){s.value=100,c=0,u=window.setTimeout(v,180);return}c=requestAnimationFrame(M)};c=requestAnimationFrame(M)}return Sn(()=>t.active,p=>{p?m():(d++,c&&cancelAnimationFrame(c),c=0,window.clearTimeout(u))}),ao(()=>{t.active&&m()}),lo(()=>{d++,c&&cancelAnimationFrame(c),c=0,window.clearTimeout(u)}),(p,T)=>(Re(),Ie("div",nT,[R("div",iT,[R("div",sT,[R("span",rT,ee(le(Ct).handle),1),R("span",oT,ee(le(Ct).subtitle[t.lang]),1),R("span",aT,[uu(ee(le(Ct).taglineLead)+" ",1),R("strong",null,ee(le(Ct).taglineBold),1)])]),T[0]||(T[0]=R("span",{class:"micro-label"},"SYS.ARCHIVE // 2026",-1))]),R("div",lT,[T[1]||(T[1]=e_('<div class="boot-reticle" aria-hidden="true" data-v-4d96066b><svg class="reticle-svg" viewBox="0 0 120 120" fill="none" data-v-4d96066b><circle class="reticle-ring-outer" cx="60" cy="60" r="52" stroke="currentColor" stroke-width="1" stroke-dasharray="14 8 4 8" data-v-4d96066b></circle><circle class="reticle-ring-inner" cx="60" cy="60" r="36" stroke="currentColor" stroke-width="1" stroke-dasharray="28 10" data-v-4d96066b></circle><path d="M60 2V16M60 104V118M2 60H16M104 60H118" stroke="currentColor" stroke-width="1" data-v-4d96066b></path><path d="M55 60H65M60 55V65" stroke="currentColor" stroke-width="1.25" data-v-4d96066b></path></svg><span class="reticle-glyph" data-v-4d96066b>±</span></div>',1)),R("div",cT,[R("span",uT,ee(le(ge)[t.lang].bootStatus),1),R("span",hT,ee(g.value),1)]),R("div",dT,[R("div",{class:"boot-progress-fill",style:ro({width:`${s.value}%`})},null,4)]),R("div",fT,[(Re(!0),Ie(_t,null,tn(le(ge)[t.lang].bootPhases,(A,x)=>(Re(),Ie("div",{key:A,class:zt(["boot-phase",{"is-active":x<=f.value}])},[x===f.value?(Re(),Ie("span",pT)):(Re(),Ie("span",mT)),R("span",null,ee(A),1)],2))),128))])]),R("div",gT,[T[2]||(T[2]=R("span",{class:"micro-label"},"KN · FSLTECH / ARCHIVE TERMINAL",-1)),R("span",_T,ee(le(ge)[t.lang].bootAssetsLabel)+" "+ee(r.value)+" / "+ee(o.value),1)])]))}}),$a=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},xT=$a(vT,[["__scopeId","data-v-4d96066b"]]),yT={class:"top-bar"},MT=["title"],ST={class:"brand-handle"},ET={class:"brand-subtitle"},bT={class:"brand-tagline"},TT=["aria-label"],AT={class:"micro-label"},wT={class:"project-dir-tabs"},RT=["onClick"],CT={key:0,class:"signal-dot","aria-hidden":"true"},PT=Gn({__name:"TopBar",props:{lang:{},projects:{},activeIndex:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e;return(s,r)=>(Re(),Ie("header",yT,[R("button",{type:"button",class:"brand-block",title:le(Ct).handle,onClick:r[0]||(r[0]=o=>i("select",0))},[R("span",ST,ee(le(Ct).handle),1),R("span",ET,ee(le(Ct).subtitle[t.lang]),1),R("span",bT,[uu(ee(le(Ct).taglineLead)+" ",1),R("strong",null,ee(le(Ct).taglineBold),1)])],8,MT),R("nav",{class:"project-dir","aria-label":le(ge)[t.lang].directoryTitle},[R("span",AT,ee(le(ge)[t.lang].directoryTitle),1),R("div",wT,[(Re(!0),Ie(_t,null,tn(t.projects,(o,a)=>(Re(),Ie("button",{key:o.id,type:"button",class:zt(["project-dir-tab",{"is-active":a===t.activeIndex}]),onClick:l=>i("select",a)},[a===t.activeIndex?(Re(),Ie("span",CT)):nn("",!0),R("span",null,ee(o.indexLabel),1)],10,RT))),128))]),dt(Xi,{name:"fade-slide",mode:"out-in"},{default:Qn(()=>{var o,a;return[(Re(),Ie("span",{key:`${t.activeIndex}-${t.lang}`,class:"project-dir-code"},ee((o=t.projects[t.activeIndex])==null?void 0:o.code)+" · "+ee((a=t.projects[t.activeIndex])==null?void 0:a.title[t.lang]),1))]}),_:1})],8,TT)]))}}),Yd={type:"change"},Iu={type:"start"},am={type:"end"},Jo=new ho,qd=new Gi,LT=Math.cos(70*Su.DEG2RAD),Dt=new F,cn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class DT extends Ex{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new ri,this._lastTargetPosition=new F,this._quat=new ri().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _d,this._sphericalDelta=new _d,this._scale=1,this._panOffset=new F,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new F,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NT.bind(this),this._onPointerDown=IT.bind(this),this._onPointerUp=UT.bind(this),this._onContextMenu=VT.bind(this),this._onMouseWheel=BT.bind(this),this._onKeyDown=kT.bind(this),this._onTouchStart=zT.bind(this),this._onTouchMove=HT.bind(this),this._onMouseDown=OT.bind(this),this._onMouseMove=FT.bind(this),this._interceptControlDown=GT.bind(this),this._interceptControlUp=WT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yd),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<LT?this.object.lookAt(this.target):(qd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(qd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(Yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function IT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function NT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function UT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(am),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function OT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Iu)}function FT(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function BT(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Iu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(am))}function kT(n){this.enabled!==!1&&this._handleKeyDown(n)}function zT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Iu)}function HT(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function VT(n){this.enabled!==!1&&n.preventDefault()}function GT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const XT=["aria-label"],$T={key:2,class:"viewer-status-overlay"},jT={class:"micro-label"},KT={key:3,class:"viewer-status-overlay"},YT={class:"micro-label",style:{color:"var(--access-signal)"}},qT=650,ZT=Gn({__name:"ModelViewer3D",props:{modelUrl:{},viewMode:{},initialRotation:{default:()=>[0,0,0]},cameraDistance:{default:3.1},interactiveZoom:{type:Boolean,default:!1},enablePan:{type:Boolean,default:!1},autoRotate:{type:Boolean,default:!0},resetSignal:{default:0},ariaLabel:{default:"3D model viewer"},loadingText:{default:"Loading 3D assembly..."},errorText:{default:"Failed to load 3D model."}},emits:["loading","loaded","error","telemetry"],setup(n,{emit:e}){const t=n,i=e,s=lt(null),r=lt(!0),o=lt(0),a=lt(!1),l=lt(0);let c=null,u=null,h=null,d=null,f=null,g=0,v=0,m=null,p=null,T=0,A=0,x=!1,I=0,N=!1,C=null,P=0,M=Number.NaN,y=Number.NaN,L=Number.NaN;function O(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}let V=null,ie=null,oe=null,Z=null,ne=null;function W(K){!m||!V||!ie||!oe||m.traverse(ae=>{if(ae instanceof Ht){if(ae.userData.isWireOverlay){ae.visible=K==="wire";return}if(ae.userData.originalMaterial||(ae.userData.originalMaterial=ae.material),K==="shaded")ae.material=ae.userData.originalMaterial;else if(K==="clay")ae.material=V;else if(K==="wire"){ae.material=ie;let pe=ae.userData.wireOverlayMesh;pe||(pe=new Ht(ae.geometry,oe),pe.userData.isWireOverlay=!0,pe.renderOrder=2,ae.add(pe),ae.userData.wireOverlayMesh=pe),pe.visible=!0}}})}function ve(K=!1){if(!h||!d)return;const ae=t.cameraDistance||3.1,pe=new F(.95,.72,1.05).normalize().multiplyScalar(ae),de=new F(0,0,0);if(!K||O()){C=null,h.position.copy(pe),d.target.copy(de),d.update();return}C={startTime:performance.now(),duration:600,fromPos:h.position.clone(),toPos:pe,fromTarget:d.target.clone(),toTarget:de}}function Ee(){O()||l.value++}function Le(K){if(!h||!d||K-P<80)return;P=K;const ae=h.position.clone().sub(d.target),pe=Number(ae.length().toFixed(2));if(pe<.001)return;const de=Math.atan2(ae.x,ae.z)*180/Math.PI,Ce=(Math.round(de)%360+360)%360,He=Math.round(Math.asin(Su.clamp(ae.y/pe,-1,1))*180/Math.PI);(Math.abs(Ce-M)>=1||Math.abs(He-y)>=1||Math.abs(pe-L)>=.05||Number.isNaN(M))&&(M=Ce,y=He,L=pe,i("telemetry",{azimuth:Ce,elevation:He,distance:pe}))}async function Oe(K){if(!u)return;const ae=++T;r.value=!0,a.value=!1,o.value=12,i("loading",12),m&&(u.remove(m),m=null);try{const pe=await om(K,k=>{ae===T&&(o.value=Math.max(12,k),i("loading",o.value))});if(ae!==T||!u)return;const de=pe.clone(!0),Ce=new ji,He=t.initialRotation??[0,0,0];de.rotation.set(He[0],He[1],He[2]),de.updateMatrixWorld(!0);const w=new Vn().setFromObject(de).getCenter(new F);de.position.sub(w),de.traverse(k=>{k instanceof Ht&&(k.castShadow=!0,k.receiveShadow=!0,k.userData.originalMaterial=k.material)}),Ce.add(de),Ce.updateMatrixWorld(!0);const D=new Vn().setFromObject(Ce);p&&(p.position.y=Number.isFinite(D.min.y)?D.min.y-.02:-1),m=Ce,O()?N=!1:(Ce.scale.setScalar(.86),Ce.position.y=-.12,Ce.rotation.y=-.48,I=performance.now(),N=!0),u.add(Ce),W(t.viewMode),ve(!1),d&&!x&&!O()&&(d.autoRotate=t.autoRotate),o.value=100,r.value=!1,Ee(),i("loaded")}catch(pe){if(ae!==T)return;a.value=!0,r.value=!1;const de=pe instanceof Error?pe.message:String(pe);i("error",de)}}function st(){const K=s.value;if(!K)return;const ae=Math.max(1,K.clientWidth),pe=Math.max(1,K.clientHeight);u=new L0,h=new en(38,ae/pe,.05,50),c=new ob({antialias:!0,alpha:!0,powerPreference:"high-performance"}),c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.setSize(ae,pe),c.toneMapping=Mp,c.toneMappingExposure=1.05,c.shadowMap.enabled=!0,c.shadowMap.type=xp,c.domElement.style.display="block",c.domElement.style.width="100%",c.domElement.style.height="100%",K.appendChild(c.domElement),d=new DT(h,c.domElement),d.enableDamping=!0,d.dampingFactor=.08,d.enableZoom=t.interactiveZoom,d.enablePan=t.enablePan,d.autoRotate=t.autoRotate&&!O(),d.autoRotateSpeed=1.15,d.minDistance=1.1,d.maxDistance=8.5;const de=()=>{x=!0,C=null,window.clearTimeout(A),d&&(d.autoRotate=!1)},Ce=()=>{x=!1,window.clearTimeout(A),t.autoRotate&&!O()&&(A=window.setTimeout(()=>{d&&t.autoRotate&&!x&&(d.autoRotate=!0)},3500))};d.addEventListener("start",de),d.addEventListener("end",Ce);const He=new ox(16777215,14209734,1.35);u.add(He);const Ne=new ua(16776437,1.6);Ne.position.set(4.5,7.5,5.5),Ne.castShadow=!0,Ne.shadow.mapSize.set(1024,1024),Ne.shadow.camera.near=1,Ne.shadow.camera.far=20,Ne.shadow.camera.left=-2.8,Ne.shadow.camera.right=2.8,Ne.shadow.camera.top=2.8,Ne.shadow.camera.bottom=-2.8,Ne.shadow.bias=-5e-4,Ne.shadow.normalBias=.02,u.add(Ne);const w=new ua(15659767,.7);w.position.set(-5.5,3.8,-4.2),u.add(w);const D=new ua(16774630,.52);D.position.set(.5,-2.5,-5),u.add(D),V=new Ga({color:14605010,roughness:.72,metalness:.05,side:En}),ie=new Ai({color:15263201,transparent:!0,opacity:.72,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,side:En}),oe=new Ai({color:2435872,wireframe:!0,transparent:!0,opacity:.45}),ne=new po(8,8),Z=new G0({opacity:.11}),p=new Ht(ne,Z),p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p.position.y=-1,u.add(p),f=new ResizeObserver(b=>{const te=b[b.length-1];if(!te)return;const $=Math.max(1,Math.round(te.contentRect.width)),re=Math.max(1,Math.round(te.contentRect.height));g&&cancelAnimationFrame(g),g=requestAnimationFrame(()=>{!c||!h||(h.aspect=$/re,h.updateProjectionMatrix(),c.setSize($,re))})}),f.observe(K);const k=b=>{if(v=requestAnimationFrame(k),N&&m){const te=b-I,$=Math.min(1,te/qT),re=$>=1?1:1-Math.pow(2,-10*$);m.scale.setScalar(.86+.14*re),m.position.y=-.12*(1-re),m.rotation.y=-.48*(1-re),$>=1&&(N=!1)}if(C&&h&&d){const te=b-C.startTime,$=Math.min(1,te/C.duration),re=1-Math.pow(1-$,3);h.position.lerpVectors(C.fromPos,C.toPos,re),d.target.lerpVectors(C.fromTarget,C.toTarget,re),$>=1&&(C=null)}d&&d.update(),Le(b),c&&u&&h&&c.render(u,h)};v=requestAnimationFrame(k)}return ao(()=>{st(),Oe(t.modelUrl)}),Sn(()=>t.modelUrl,K=>{Oe(K)}),Sn(()=>t.viewMode,K=>{W(K),Ee()}),Sn(()=>[t.interactiveZoom,t.enablePan],([K,ae])=>{d&&(d.enableZoom=K,d.enablePan=ae)}),Sn(()=>t.autoRotate,K=>{window.clearTimeout(A),d&&(d.autoRotate=K&&!x&&!O())}),Sn(()=>t.resetSignal,()=>{ve(!0)}),lo(()=>{T++,window.clearTimeout(A),g&&cancelAnimationFrame(g),v&&cancelAnimationFrame(v),f==null||f.disconnect(),d==null||d.dispose(),V==null||V.dispose(),ie==null||ie.dispose(),oe==null||oe.dispose(),Z==null||Z.dispose(),ne==null||ne.dispose(),c&&(c.dispose(),c.domElement.parentNode&&c.domElement.parentNode.removeChild(c.domElement)),c=null,u=null,h=null,d=null,m=null}),(K,ae)=>(Re(),Ie("div",{ref_key:"containerRef",ref:s,class:"viewer-root",role:"img","aria-label":t.ariaLabel},[l.value>0&&!r.value&&!a.value?(Re(),Ie("div",{key:l.value,class:"specimen-scan-beam","aria-hidden":"true"})):nn("",!0),r.value?(Re(),Ie("div",{key:1,class:"viewer-progress-line",style:ro({width:`${o.value}%`}),"aria-hidden":"true"},null,4)):nn("",!0),r.value?(Re(),Ie("div",$T,[R("span",jT,ee(t.loadingText),1)])):a.value?(Re(),Ie("div",KT,[R("span",YT,ee(t.errorText),1)])):nn("",!0)],8,XT))}}),lm=$a(ZT,[["__scopeId","data-v-07cc09e3"]]),JT={class:"stage-column"},QT={class:"specimen-frame"},eA={class:"specimen-hud-top"},tA={class:"specimen-id-group"},nA={class:"specimen-code"},iA={class:"specimen-badge"},sA={class:"mode-switch",role:"group","aria-label":"Render mode"},rA=["onClick"],oA={class:"specimen-viewport"},aA={class:"specimen-hud-bottom"},lA={style:{display:"inline-flex","align-items":"center",gap:"4px"}},cA=["aria-pressed","title"],uA={class:"hud-btn-label-sm-hide"},hA={class:"telemetry-readout"},dA={class:"stage-nav-bar"},fA={class:"stage-nav-controls"},pA=["aria-label"],mA={class:"stage-counter"},gA={class:"stage-counter-roll"},_A={class:"stage-counter-total"},vA=["aria-label"],xA={class:"micro-label"},yA=Gn({__name:"ModelStage",props:{lang:{},project:{},activeIndex:{},totalProjects:{},direction:{}},emits:["prev","next","open-fullscreen"],setup(n,{emit:e}){const t=n,i=e,s=lt("shaded"),r=lt(!0),o=lt(0),a=lt({azimuth:42,elevation:25,distance:t.project.cameraDistance}),l=["shaded","wire"];function c(u){return String(u).padStart(3,"0")}return(u,h)=>(Re(),Ie("section",JT,[R("div",QT,[h[8]||(h[8]=R("span",{class:"specimen-corner tl","aria-hidden":"true"},null,-1)),h[9]||(h[9]=R("span",{class:"specimen-corner tr","aria-hidden":"true"},null,-1)),h[10]||(h[10]=R("span",{class:"specimen-corner bl","aria-hidden":"true"},null,-1)),h[11]||(h[11]=R("span",{class:"specimen-corner br","aria-hidden":"true"},null,-1)),R("div",eA,[R("div",tA,[R("span",nA,ee(t.project.code),1),R("span",iA,ee(le(ge)[t.lang].specimenSource),1)]),R("div",sA,[(Re(),Ie(_t,null,tn(l,d=>R("button",{key:d,type:"button",class:zt(["mode-switch-btn",{"is-active":s.value===d}]),onClick:f=>s.value=d},ee(le(ge)[t.lang].viewModes[d]),11,rA)),64))])]),R("div",oA,[dt(lm,{"model-url":t.project.modelUrl,"view-mode":s.value,"initial-rotation":t.project.initialRotation,"camera-distance":t.project.cameraDistance,"interactive-zoom":!0,"enable-pan":!1,"auto-rotate":r.value,"reset-signal":o.value,"aria-label":t.project.title[t.lang],"loading-text":le(ge)[t.lang].loadingModel,"error-text":le(ge)[t.lang].modelError,onTelemetry:h[0]||(h[0]=d=>a.value=d)},null,8,["model-url","view-mode","initial-rotation","camera-distance","auto-rotate","reset-signal","aria-label","loading-text","error-text"])]),R("div",aA,[R("div",lA,[R("button",{type:"button",class:"hud-link-btn",onClick:h[1]||(h[1]=d=>o.value++)},[h[6]||(h[6]=R("span",null,"↺",-1)),R("span",null,ee(le(ge)[t.lang].resetView),1)]),R("button",{type:"button",class:zt(["hud-link-btn",{"is-active":r.value}]),"aria-pressed":r.value,title:r.value?le(ge)[t.lang].autoRotateOn:le(ge)[t.lang].autoRotateOff,onClick:h[2]||(h[2]=d=>r.value=!r.value)},[R("span",null,ee(r.value?"⟳":"⏸"),1),R("span",uA,ee(r.value?le(ge)[t.lang].autoRotateOn:le(ge)[t.lang].autoRotateOff),1)],10,cA)]),R("span",hA," AZ "+ee(c(a.value.azimuth))+"° · EL "+ee(a.value.elevation)+"° ",1),R("button",{type:"button",class:"hud-link-btn",onClick:h[3]||(h[3]=d=>i("open-fullscreen",s.value))},[R("span",null,ee(le(ge)[t.lang].inspectFullscreen),1),h[7]||(h[7]=R("span",null,"↗",-1))])])]),R("div",dA,[R("div",fA,[R("button",{type:"button",class:"btn-arch btn-arch-square","aria-label":le(ge)[t.lang].prevProject,onClick:h[4]||(h[4]=d=>i("prev"))}," ← ",8,pA),R("div",mA,[R("span",gA,[dt(Xi,{name:t.direction==="next"?"digit-up":"digit-down",mode:"out-in"},{default:Qn(()=>[(Re(),Ie("span",{key:t.activeIndex,class:"stage-counter-current"}," 0"+ee(t.activeIndex+1),1))]),_:1},8,["name"])]),R("span",_A,"/ 0"+ee(t.totalProjects),1)]),R("button",{type:"button",class:"btn-arch btn-arch-square","aria-label":le(ge)[t.lang].nextProject,onClick:h[5]||(h[5]=d=>i("next"))}," → ",8,vA)]),R("span",xA,ee(t.project.category[t.lang])+" · "+ee(t.project.year),1)])]))}}),MA={class:"detail-panel","aria-live":"polite"},SA={class:"detail-header"},EA={class:"detail-title-group"},bA={class:"micro-label"},TA={class:"detail-title"},AA={class:"detail-subtitle"},wA={class:"detail-steppers"},RA=["aria-label","title"],CA=["aria-label","title"],PA={class:"meta-grid"},LA={class:"meta-cell"},DA={class:"micro-label"},IA={class:"meta-value"},NA={class:"meta-cell"},UA={class:"micro-label"},OA={class:"meta-value"},FA={class:"meta-cell"},BA={class:"micro-label"},kA={class:"meta-value font-mono"},zA={class:"meta-cell"},HA={class:"micro-label"},VA={class:"meta-value"},GA={class:"detail-tabs",role:"tablist"},WA=["aria-selected"],XA={key:0,class:"signal-dot","aria-hidden":"true"},$A=["aria-selected"],jA={key:0,class:"signal-dot","aria-hidden":"true"},KA=["aria-selected"],YA={key:0,class:"signal-dot","aria-hidden":"true"},qA={class:"tab-body"},ZA={key:"overview",class:"tab-pane-stack"},JA={class:"micro-label"},QA={class:"abstract-text"},ew={class:"micro-label"},tw={class:"highlights-list"},nw={key:"specs",class:"tab-pane-stack"},iw={class:"spec-table"},sw={key:"logs",class:"log-list"},rw={class:"log-date"},ow={class:"log-entry"},aw={class:"detail-actions"},lw={class:"btn-bracket-label"},cw=Gn({__name:"ProjectDetail",props:{lang:{},project:{},isSaved:{type:Boolean},direction:{}},emits:["prev","next","inspect","toggle-save"],setup(n,{emit:e}){const t=n,i=e,s=lt("overview");return Sn(()=>t.project.id,()=>{s.value="overview"}),(r,o)=>(Re(),Ie("section",MA,[dt(Xi,{name:t.direction==="next"?"slide-next":"slide-prev",mode:"out-in"},{default:Qn(()=>[(Re(),Ie("div",{key:t.project.id,class:"detail-slide-inner"},[R("div",SA,[R("div",EA,[R("span",bA,ee(le(ge)[t.lang].archiveLabel)+" · "+ee(t.project.code),1),R("h1",TA,ee(t.project.title[t.lang]),1),R("p",AA,ee(t.project.subtitle[t.lang]),1)]),R("div",wA,[R("button",{type:"button",class:"btn-arch btn-arch-square","aria-label":le(ge)[t.lang].prevProject,title:le(ge)[t.lang].prevProject,onClick:o[0]||(o[0]=a=>i("prev"))}," ← ",8,RA),R("button",{type:"button",class:"btn-arch btn-arch-square","aria-label":le(ge)[t.lang].nextProject,title:le(ge)[t.lang].nextProject,onClick:o[1]||(o[1]=a=>i("next"))}," → ",8,CA)])]),R("div",PA,[R("div",LA,[R("span",DA,ee(le(ge)[t.lang].metaLabels.discipline),1),R("span",IA,ee(t.project.discipline[t.lang]),1)]),R("div",NA,[R("span",UA,ee(le(ge)[t.lang].metaLabels.collection),1),R("span",OA,ee(t.project.collection[t.lang]),1)]),R("div",FA,[R("span",BA,ee(le(ge)[t.lang].metaLabels.designer),1),R("span",kA,ee(t.project.designer),1)]),R("div",zA,[R("span",HA,ee(le(ge)[t.lang].metaLabels.status),1),R("span",VA,[o[7]||(o[7]=R("span",{class:"signal-dot","aria-hidden":"true"},null,-1)),R("span",null,ee(t.project.status[t.lang]),1)])])]),R("div",GA,[R("button",{type:"button",role:"tab","aria-selected":s.value==="overview",class:zt(["detail-tab-btn",{"is-active":s.value==="overview"}]),onClick:o[2]||(o[2]=a=>s.value="overview")},[s.value==="overview"?(Re(),Ie("span",XA)):nn("",!0),R("span",null,ee(le(ge)[t.lang].tabs.overview),1)],10,WA),R("button",{type:"button",role:"tab","aria-selected":s.value==="specs",class:zt(["detail-tab-btn",{"is-active":s.value==="specs"}]),onClick:o[3]||(o[3]=a=>s.value="specs")},[s.value==="specs"?(Re(),Ie("span",jA)):nn("",!0),R("span",null,ee(le(ge)[t.lang].tabs.specs),1)],10,$A),R("button",{type:"button",role:"tab","aria-selected":s.value==="logs",class:zt(["detail-tab-btn",{"is-active":s.value==="logs"}]),onClick:o[4]||(o[4]=a=>s.value="logs")},[s.value==="logs"?(Re(),Ie("span",YA)):nn("",!0),R("span",null,ee(le(ge)[t.lang].tabs.logs),1)],10,KA)]),R("div",qA,[dt(Xi,{name:"tab-fade",mode:"out-in"},{default:Qn(()=>[s.value==="overview"?(Re(),Ie("div",ZA,[R("span",JA,ee(le(ge)[t.lang].abstractHeading),1),R("p",QA,ee(t.project.abstract[t.lang]),1),R("span",ew,ee(le(ge)[t.lang].highlightsHeading),1),R("ul",tw,[(Re(!0),Ie(_t,null,tn(t.project.highlights[t.lang],(a,l)=>(Re(),Ie("li",{key:l},ee(a),1))),128))])])):s.value==="specs"?(Re(),Ie("div",nw,[R("table",iw,[R("tbody",null,[(Re(!0),Ie(_t,null,tn(t.project.specs,(a,l)=>(Re(),Ie("tr",{key:l},[R("th",null,ee(a.label[t.lang]),1),R("td",null,ee(a.value[t.lang]),1)]))),128))])])])):(Re(),Ie("div",sw,[(Re(!0),Ie(_t,null,tn(t.project.logs,(a,l)=>(Re(),Ie("div",{key:l,class:"log-row"},[R("span",rw,ee(a.date),1),R("span",ow,ee(a.entry[t.lang]),1)]))),128))]))]),_:1})]),R("div",aw,[R("button",{type:"button",class:"btn-bracket",onClick:o[5]||(o[5]=a=>i("inspect"))},[R("span",lw,ee(le(ge)[t.lang].inspectCta),1),o[8]||(o[8]=R("span",{class:"btn-bracket-arrow","aria-hidden":"true"},"↗",-1))]),R("button",{type:"button",class:zt(["btn-arch",{"is-active":t.isSaved}]),onClick:o[6]||(o[6]=a=>i("toggle-save"))},ee(t.isSaved?le(ge)[t.lang].savedArchive:le(ge)[t.lang].saveArchive),3)])]))]),_:1},8,["name"])]))}}),uw=$a(cw,[["__scopeId","data-v-cbc6cfd4"]]),hw={class:"bottom-dock"},dw={class:"dock-tools"},fw=["title"],pw={class:"dock-btn-text"},mw=["title"],gw={class:"dock-btn-text"},_w={key:0,class:"font-mono"},vw=["title"],xw={class:"dock-btn-text"},yw={class:"lang-switch",role:"group","aria-label":"Language"},Mw={class:"dock-right"},Sw={class:"dock-colophon"},Ew=Gn({__name:"BottomDock",props:{lang:{},savedCount:{},activeCode:{}},emits:["open-index","open-saved","open-about","change-lang"],setup(n,{emit:e}){const t=n,i=e;return(s,r)=>(Re(),Ie("footer",hw,[R("div",dw,[R("button",{type:"button",class:"dock-icon-btn",title:le(ge)[t.lang].dock.index,onClick:r[0]||(r[0]=o=>i("open-index"))},[r[5]||(r[5]=R("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[R("circle",{cx:"7",cy:"7",r:"4.75",stroke:"currentColor","stroke-width":"1.4"}),R("path",{d:"M10.75 10.75L14 14",stroke:"currentColor","stroke-width":"1.4"})],-1)),R("span",pw,ee(le(ge)[t.lang].dock.index),1)],8,fw),R("button",{type:"button",class:"dock-icon-btn",title:le(ge)[t.lang].dock.saved,onClick:r[1]||(r[1]=o=>i("open-saved"))},[r[6]||(r[6]=R("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[R("path",{d:"M3.5 2.5H12.5V13.5L8 10.5L3.5 13.5V2.5Z",stroke:"currentColor","stroke-width":"1.4"})],-1)),R("span",gw,ee(le(ge)[t.lang].dock.saved),1),t.savedCount>0?(Re(),Ie("span",_w,"("+ee(t.savedCount)+")",1)):nn("",!0)],8,mw),R("button",{type:"button",class:"dock-icon-btn",title:le(ge)[t.lang].dock.about,onClick:r[2]||(r[2]=o=>i("open-about"))},[r[7]||(r[7]=R("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[R("circle",{cx:"8",cy:"5.25",r:"2.4",stroke:"currentColor","stroke-width":"1.4"}),R("path",{d:"M3.2 13.5C3.6 10.9 5.5 9.5 8 9.5C10.5 9.5 12.4 10.9 12.8 13.5",stroke:"currentColor","stroke-width":"1.4"})],-1)),R("span",xw,ee(le(ge)[t.lang].dock.about),1)],8,vw),r[9]||(r[9]=R("span",{class:"dock-divider","aria-hidden":"true"},null,-1)),R("div",yw,[R("button",{type:"button",class:zt(["lang-btn",{"is-active":t.lang==="zh"}]),onClick:r[3]||(r[3]=o=>i("change-lang","zh"))}," 中 ",2),r[8]||(r[8]=R("span",{class:"micro-label","aria-hidden":"true"},"/",-1)),R("button",{type:"button",class:zt(["lang-btn",{"is-active":t.lang==="en"}]),onClick:r[4]||(r[4]=o=>i("change-lang","en"))}," EN ",2)])]),R("div",Mw,[R("div",Sw,[R("span",null,ee(le(ge)[t.lang].dock.colophon),1),r[10]||(r[10]=R("span",{"aria-hidden":"true"},"·",-1)),R("span",null,ee(t.activeCode),1)])])]))}}),bw={class:"fullscreen-viewer",role:"dialog","aria-modal":"true"},Tw={class:"viewer-top-bar"},Aw={style:{display:"flex","align-items":"center","flex-wrap":"wrap",gap:"16px"}},ww={class:"btn-bracket-label"},Rw={style:{display:"flex","flex-direction":"column",gap:"2px"}},Cw={class:"micro-label"},Pw={style:{"font-size":"18px",color:"var(--theme-ink-strong)","line-height":"1.2"}},Lw={class:"mode-switch",role:"group","aria-label":"Render mode"},Dw=["onClick"],Iw={class:"viewer-canvas-wrap"},Nw={class:"viewer-bottom-bar"},Uw={class:"micro-label"},Ow={style:{display:"inline-flex","align-items":"center","flex-wrap":"wrap",gap:"12px"}},Fw={class:"telemetry-readout"},Bw=["aria-pressed"],kw=Gn({__name:"FullscreenViewer",props:{lang:{},project:{},initialMode:{}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=lt(t.initialMode),r=lt(!0),o=lt(0),a=lt({azimuth:42,elevation:25,distance:t.project.cameraDistance}),l=["shaded","clay","wire"];function c(u){return String(u).padStart(3,"0")}return(u,h)=>(Re(),Ie("div",bw,[R("div",Tw,[R("div",Aw,[R("button",{type:"button",class:"btn-bracket is-reverse",onClick:h[0]||(h[0]=d=>i("close"))},[h[4]||(h[4]=R("span",{class:"btn-bracket-arrow","aria-hidden":"true"},"←",-1)),R("span",ww,ee(le(ge)[t.lang].fullscreen.back),1)]),R("div",Rw,[R("span",Cw,ee(le(ge)[t.lang].fullscreen.studyTag),1),R("strong",Pw,ee(t.project.code)+" · "+ee(t.project.title[t.lang]),1)])]),R("div",Lw,[(Re(),Ie(_t,null,tn(l,d=>R("button",{key:d,type:"button",class:zt(["mode-switch-btn",{"is-active":s.value===d}]),style:{padding:"8px 14px","font-size":"12px"},onClick:f=>s.value=d},ee(le(ge)[t.lang].viewModes[d]),11,Dw)),64))])]),R("div",Iw,[dt(lm,{"model-url":t.project.modelUrl,"view-mode":s.value,"initial-rotation":t.project.initialRotation,"camera-distance":t.project.cameraDistance,"interactive-zoom":!0,"enable-pan":!0,"auto-rotate":r.value,"reset-signal":o.value,"aria-label":t.project.title[t.lang],"loading-text":le(ge)[t.lang].loadingModel,"error-text":le(ge)[t.lang].modelError,onTelemetry:h[1]||(h[1]=d=>a.value=d)},null,8,["model-url","view-mode","initial-rotation","camera-distance","auto-rotate","reset-signal","aria-label","loading-text","error-text"])]),R("div",Nw,[R("span",Uw,ee(le(ge)[t.lang].fullscreenHint),1),R("div",Ow,[R("span",Fw," AZ "+ee(c(a.value.azimuth))+"° · EL "+ee(a.value.elevation)+"° · DIST "+ee(a.value.distance.toFixed(2)),1),R("button",{type:"button",class:zt(["btn-arch",{"is-active":r.value}]),"aria-pressed":r.value,onClick:h[2]||(h[2]=d=>r.value=!r.value)},[R("span",null,ee(r.value?"⟳":"⏸"),1),R("span",null,ee(r.value?le(ge)[t.lang].autoRotateOn:le(ge)[t.lang].autoRotateOff),1)],10,Bw),R("button",{type:"button",class:"btn-arch",onClick:h[3]||(h[3]=d=>o.value++)},[R("span",null,ee(le(ge)[t.lang].resetView),1),h[5]||(h[5]=R("span",{"aria-hidden":"true"},"↗",-1))])])])]))}}),zw={class:"modal-panel"},Hw={class:"modal-header"},Vw={class:"micro-label"},Gw={class:"modal-body"},Ww={class:"modal-heading-row"},Xw={class:"modal-title"},$w={class:"modal-subtitle"},jw={class:"search-field-wrap"},Kw=["placeholder"],Yw={class:"chip-row"},qw=["onClick"],Zw={key:0,class:"signal-dot","aria-hidden":"true"},Jw={key:0,class:"archive-table"},Qw={style:{width:"110px"}},e1={style:{width:"34%"}},t1=["onClick"],n1={class:"font-mono",style:{"font-size":"13px",color:"var(--theme-ink-strong)"}},i1={style:{"font-weight":"600",color:"var(--theme-ink-strong)"}},s1={class:"micro-label",style:{"margin-top":"2px"}},r1={style:{"font-size":"13px",color:"var(--theme-muted)"}},o1={key:1,style:{padding:"36px 0",display:"flex","flex-direction":"column","align-items":"flex-start",gap:"12px","border-top":"1px solid var(--rule-soft)"}},a1={style:{color:"var(--theme-muted)","font-size":"14px"}},l1={class:"modal-footer"},c1={style:{display:"inline-flex","align-items":"center",gap:"7px"}},u1=Gn({__name:"ArchiveIndexModal",props:{lang:{},projects:{}},emits:["close","select-project","open-about"],setup(n,{emit:e}){const t=n,i=e,s=lt(""),r=lt("all"),o=["all","thermal","mechanism","peripheral","about"],a=Ss(()=>{if(r.value==="about")return[];const u=s.value.trim().toLowerCase();return t.projects.map((h,d)=>({project:h,index:d})).filter(({project:h})=>r.value!=="all"&&h.categoryKey!==r.value?!1:u?[h.code,h.title.zh,h.title.en,h.subtitle.zh,h.subtitle.en,h.discipline.zh,h.discipline.en,h.abstract.zh,h.abstract.en,...h.specs.map(f=>`${f.value.zh} ${f.value.en}`)].join(" ").toLowerCase().includes(u):!0)});function l(u){if(u==="about"){i("open-about");return}r.value=u}function c(){s.value="",r.value="all"}return(u,h)=>(Re(),Ie("div",{class:"modal-backdrop",role:"dialog","aria-modal":"true",onClick:h[2]||(h[2]=du(d=>i("close"),["self"]))},[R("div",zw,[R("div",Hw,[R("span",Vw,ee(le(Ct).handle)+" / ARCHIVE DIRECTORY",1),R("button",{type:"button",class:"modal-close-btn",onClick:h[0]||(h[0]=d=>i("close"))},[R("span",null,ee(le(ge)[t.lang].modals.close),1),h[3]||(h[3]=R("span",{"aria-hidden":"true"},"×",-1))])]),R("div",Gw,[R("div",Ww,[R("h2",Xw,ee(le(ge)[t.lang].modals.indexTitle),1),R("span",$w,ee(le(ge)[t.lang].modals.indexSubtitle),1)]),R("label",jw,[h[4]||(h[4]=R("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[R("circle",{cx:"7",cy:"7",r:"4.75",stroke:"currentColor","stroke-width":"1.4"}),R("path",{d:"M10.75 10.75L14 14",stroke:"currentColor","stroke-width":"1.4"})],-1)),og(R("input",{"onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),type:"search",class:"search-input",placeholder:le(ge)[t.lang].modals.indexPlaceholder,autofocus:""},null,8,Kw),[[$_,s.value]])]),R("div",Yw,[(Re(),Ie(_t,null,tn(o,d=>R("button",{key:d,type:"button",class:zt(["filter-chip",{"is-active":r.value===d}]),onClick:f=>l(d)},[r.value===d?(Re(),Ie("span",Zw)):nn("",!0),R("span",null,ee(le(ge)[t.lang].modals.filters[d]),1)],10,qw)),64))]),a.value.length>0?(Re(),Ie("table",Jw,[R("thead",null,[R("tr",null,[R("th",Qw,ee(le(ge)[t.lang].modals.colCode),1),R("th",null,ee(le(ge)[t.lang].modals.colProject),1),R("th",e1,ee(le(ge)[t.lang].modals.colDiscipline),1)])]),dt(F_,{name:"row-stagger",tag:"tbody"},{default:Qn(()=>[(Re(!0),Ie(_t,null,tn(a.value,d=>(Re(),Ie("tr",{key:d.project.id,class:"archive-row",onClick:f=>i("select-project",d.index)},[R("td",n1,ee(d.project.code),1),R("td",null,[R("div",i1,ee(d.project.title[t.lang]),1),R("div",s1,ee(d.project.subtitle[t.lang]),1)]),R("td",r1,ee(d.project.discipline[t.lang]),1)],8,t1))),128))]),_:1})])):(Re(),Ie("div",o1,[R("span",a1," ∅ "+ee(le(ge)[t.lang].modals.emptySearch),1),R("button",{type:"button",class:"btn-arch",onClick:c},ee(le(ge)[t.lang].modals.resetSearch)+" → ",1)]))]),R("div",l1,[R("span",null,ee(le(ge)[t.lang].modals.foundPrefix)+" 0"+ee(a.value.length)+" "+ee(le(ge)[t.lang].modals.foundSuffix),1),R("span",c1,[h[5]||(h[5]=R("span",{class:"status-online-dot","aria-hidden":"true"},null,-1)),R("span",null,ee(le(ge)[t.lang].modals.statusOnline),1)])])])]))}}),h1={class:"modal-panel"},d1={class:"modal-header"},f1={class:"micro-label"},p1={class:"modal-body"},m1={class:"modal-heading-row"},g1={class:"modal-title"},_1={class:"modal-subtitle"},v1={key:0,class:"archive-table"},x1={style:{width:"110px"}},y1=["onClick"],M1=["onClick"],S1={style:{"font-weight":"600",color:"var(--theme-ink-strong)"}},E1={class:"micro-label",style:{"margin-top":"2px"}},b1={style:{"text-align":"right"}},T1={style:{display:"inline-flex",gap:"6px"}},A1=["onClick"],w1=["onClick"],R1={key:1,style:{padding:"32px 0",display:"flex","flex-direction":"column","align-items":"flex-start",gap:"14px","border-top":"1px solid var(--rule-soft)"}},C1={style:{margin:"0",color:"var(--theme-muted)","font-size":"14px"}},P1={class:"modal-footer"},L1={style:{display:"inline-flex","align-items":"center",gap:"7px"}},D1=Gn({__name:"SavedArchivesModal",props:{lang:{},projects:{},savedIds:{}},emits:["close","select-project","remove-saved","open-index"],setup(n,{emit:e}){const t=n,i=e,s=Ss(()=>t.projects.map((r,o)=>({project:r,index:o})).filter(({project:r})=>t.savedIds.includes(r.id)));return(r,o)=>(Re(),Ie("div",{class:"modal-backdrop",role:"dialog","aria-modal":"true",onClick:o[2]||(o[2]=du(a=>i("close"),["self"]))},[R("div",h1,[R("div",d1,[R("span",f1,ee(le(Ct).handle)+" / SAVED ARCHIVES",1),R("button",{type:"button",class:"modal-close-btn",onClick:o[0]||(o[0]=a=>i("close"))},[R("span",null,ee(le(ge)[t.lang].modals.close),1),o[3]||(o[3]=R("span",{"aria-hidden":"true"},"×",-1))])]),R("div",p1,[R("div",m1,[R("h2",g1,ee(le(ge)[t.lang].modals.savedTitle),1),R("span",_1,ee(le(ge)[t.lang].modals.savedSubtitle),1)]),s.value.length>0?(Re(),Ie("table",v1,[R("thead",null,[R("tr",null,[R("th",x1,ee(le(ge)[t.lang].modals.colCode),1),R("th",null,ee(le(ge)[t.lang].modals.colProject),1),o[4]||(o[4]=R("th",{style:{width:"180px"}},null,-1))])]),R("tbody",null,[(Re(!0),Ie(_t,null,tn(s.value,a=>(Re(),Ie("tr",{key:a.project.id,class:"archive-row"},[R("td",{class:"font-mono",style:{"font-size":"13px",color:"var(--theme-ink-strong)"},onClick:l=>i("select-project",a.index)},ee(a.project.code),9,y1),R("td",{onClick:l=>i("select-project",a.index)},[R("div",S1,ee(a.project.title[t.lang]),1),R("div",E1,ee(a.project.subtitle[t.lang]),1)],8,M1),R("td",b1,[R("div",T1,[R("button",{type:"button",class:"btn-arch",style:{"min-height":"32px",padding:"0 10px","font-size":"12px"},onClick:l=>i("select-project",a.index)},ee(le(ge)[t.lang].modals.openProject),9,A1),R("button",{type:"button",class:"btn-arch",style:{"min-height":"32px",padding:"0 10px","font-size":"12px"},onClick:l=>i("remove-saved",a.project.id)},ee(le(ge)[t.lang].modals.removeSaved),9,w1)])])]))),128))])])):(Re(),Ie("div",R1,[R("p",C1,ee(le(ge)[t.lang].modals.savedEmpty),1),R("button",{type:"button",class:"btn-arch",onClick:o[1]||(o[1]=a=>i("open-index"))},ee(le(ge)[t.lang].modals.browseAll)+" → ",1)]))]),R("div",P1,[R("span",null,"0"+ee(s.value.length)+" SAVED",1),R("span",L1,[o[5]||(o[5]=R("span",{class:"status-online-dot","aria-hidden":"true"},null,-1)),R("span",null,ee(le(ge)[t.lang].modals.statusOnline),1)])])])]))}}),I1={class:"modal-panel"},N1={class:"modal-header"},U1={class:"micro-label"},O1={class:"modal-body"},F1={class:"modal-heading-row"},B1={class:"modal-title"},k1={class:"modal-subtitle"},z1={style:{display:"flex","flex-direction":"column",gap:"10px"}},H1={style:{display:"flex","flex-wrap":"wrap","justify-content":"space-between",gap:"8px"}},V1={style:{"font-size":"16px",color:"var(--theme-ink-strong)"}},G1={class:"micro-label"},W1={style:{display:"flex","flex-direction":"column",gap:"10px"}},X1={class:"micro-label"},$1={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px 24px"}},j1={style:{"font-weight":"600","font-size":"13.5px",color:"var(--theme-ink-strong)","margin-bottom":"4px"}},K1={style:{"font-size":"12.5px",color:"var(--theme-muted)","line-height":"1.55"}},Y1={style:{display:"flex","flex-direction":"column",gap:"8px"}},q1={class:"micro-label"},Z1={class:"workflow-group-list"},J1={class:"font-mono workflow-category"},Q1={class:"workflow-tags"},eR={style:{display:"flex","flex-direction":"column",gap:"8px"}},tR={class:"micro-label"},nR={style:{display:"flex","flex-wrap":"wrap",gap:"8px"}},iR={style:{display:"flex","flex-wrap":"wrap","align-items":"center","justify-content":"space-between",gap:"12px"}},sR={style:{display:"flex","flex-direction":"column",gap:"3px"}},rR={class:"micro-label"},oR=["href"],aR={class:"modal-footer"},lR={style:{display:"inline-flex","align-items":"center",gap:"7px"}},cR=Gn({__name:"AboutModal",props:{lang:{}},emits:["close","copied"],setup(n,{emit:e}){const t=n,i=e,s=lt(!1);async function r(){try{await navigator.clipboard.writeText(Ct.email)}catch{}s.value=!0,i("copied"),window.setTimeout(()=>{s.value=!1},2e3)}return(o,a)=>(Re(),Ie("div",{class:"modal-backdrop",role:"dialog","aria-modal":"true",onClick:a[1]||(a[1]=du(l=>i("close"),["self"]))},[R("div",I1,[R("div",N1,[R("span",U1,ee(le(Ct).handle)+" / PROFILE",1),R("button",{type:"button",class:"modal-close-btn",onClick:a[0]||(a[0]=l=>i("close"))},[R("span",null,ee(le(ge)[t.lang].modals.close),1),a[2]||(a[2]=R("span",{"aria-hidden":"true"},"×",-1))])]),R("div",O1,[R("div",F1,[R("h2",B1,ee(le(ge)[t.lang].modals.aboutTitle),1),R("span",k1,ee(le(ge)[t.lang].modals.aboutSubtitle),1)]),a[3]||(a[3]=R("hr",{class:"rule-strong"},null,-1)),R("div",z1,[R("div",H1,[R("strong",V1,ee(le(Ct).handle),1),R("span",G1,ee(le(Ct).location[t.lang]),1)]),(Re(!0),Ie(_t,null,tn(le(Ct).bio[t.lang],(l,c)=>(Re(),Ie("p",{key:c,class:"abstract-text",style:{"font-size":"14.5px"}},ee(l),1))),128))]),a[4]||(a[4]=R("hr",{class:"rule-soft"},null,-1)),R("div",W1,[R("span",X1,ee(le(ge)[t.lang].modals.capabilitiesHeading),1),R("div",$1,[(Re(!0),Ie(_t,null,tn(le(Ct).capabilities,(l,c)=>(Re(),Ie("div",{key:c,style:{padding:"12px 14px",border:"1px solid var(--rule-soft)","background-color":"rgba(244, 242, 236, 0.55)"}},[R("div",j1,ee(l.title[t.lang]),1),R("div",K1,ee(l.detail[t.lang]),1)]))),128))])]),R("div",Y1,[R("span",q1,ee(le(ge)[t.lang].modals.toolsHeading),1),R("div",Z1,[(Re(!0),Ie(_t,null,tn(le(Ct).tools,l=>(Re(),Ie("div",{key:l.category,class:"workflow-group"},[R("span",J1,ee(l.category),1),R("div",Q1,[(Re(!0),Ie(_t,null,tn(l.items,c=>(Re(),Ie("span",{key:c,class:"specimen-badge",style:{padding:"4px 10px","font-size":"11px",color:"var(--theme-ink)"}},ee(c),1))),128))])]))),128))])]),R("div",eR,[R("span",tR,ee(le(ge)[t.lang].modals.processesHeading),1),R("div",nR,[(Re(!0),Ie(_t,null,tn(le(Ct).processes[t.lang],l=>(Re(),Ie("span",{key:l,class:"specimen-badge",style:{padding:"4px 10px","font-size":"11px",color:"var(--theme-ink)"}},ee(l),1))),128))])]),a[5]||(a[5]=R("hr",{class:"rule-soft"},null,-1)),R("div",iR,[R("div",sR,[R("span",rR,ee(le(ge)[t.lang].modals.contactHeading),1),R("a",{href:`mailto:${le(Ct).email}`,class:"font-mono",style:{"font-size":"14px",color:"var(--theme-ink-strong)","text-decoration":"underline"}},ee(le(Ct).email),9,oR)]),R("button",{type:"button",class:"btn-arch",onClick:r},ee(s.value?le(ge)[t.lang].modals.copiedEmail:le(ge)[t.lang].modals.copyEmail),1)])]),R("div",aR,[R("span",null,ee(le(Ct).handle),1),R("span",lR,[a[6]||(a[6]=R("span",{class:"status-online-dot","aria-hidden":"true"},null,-1)),R("span",null,ee(le(ge)[t.lang].modals.statusOnline),1)])])])]))}}),uR=$a(cR,[["__scopeId","data-v-0be162e7"]]),hR={class:"archive-main"},dR={key:0,class:"archive-toast",role:"status"},Zd="kn_archive_lang",Jd="kn_archive_saved",fR=Gn({__name:"App",setup(n){function e(){try{const P=localStorage.getItem(Zd);if(P==="zh"||P==="en")return P}catch{}return"zh"}function t(){try{const P=localStorage.getItem(Jd);if(!P)return[];const M=JSON.parse(P);return Array.isArray(M)?M.filter(y=>typeof y=="string"):[]}catch{return[]}}const i=lt(e()),s=lt(0),r=lt("next"),o=lt(t()),a=lt(null),l=lt(!1),c=lt("shaded"),u=lt(!0),h=lt(!1),d=lt("");let f=0;const g=Ss(()=>jn[s.value]??jn[0]),v=Ss(()=>o.value.includes(g.value.id));function m(P){d.value=P,window.clearTimeout(f),f=window.setTimeout(()=>{d.value=""},2200)}function p(P,M){const y=jn.length,L=(P%y+y)%y;M?r.value=M:r.value=L<s.value?"prev":"next",s.value=L}function T(){p(s.value-1,"prev")}function A(){p(s.value+1,"next")}function x(P){o.value.includes(P)?(o.value=o.value.filter(y=>y!==P),m(ge[i.value].toasts.removed)):(o.value=[...o.value,P],m(ge[i.value].toasts.saved))}function I(P){c.value=P,l.value=!0}function N(){u.value=!1,h.value=!0}function C(P){if(u.value)return;if(P.key==="Escape"){if(l.value){l.value=!1;return}if(a.value){a.value=null;return}}if(l.value||a.value)return;const M=P.target;M&&(M.tagName==="INPUT"||M.tagName==="TEXTAREA")||(P.key==="ArrowLeft"?T():P.key==="ArrowRight"&&A())}return Sn(i,P=>{document.documentElement.lang=P==="zh"?"zh-CN":"en";try{localStorage.setItem(Zd,P)}catch{}}),Sn(o,P=>{try{localStorage.setItem(Jd,JSON.stringify(P))}catch{}},{deep:!0}),ao(()=>{document.documentElement.lang=i.value==="zh"?"zh-CN":"en",window.addEventListener("keydown",C)}),lo(()=>{window.removeEventListener("keydown",C),window.clearTimeout(f)}),(P,M)=>(Re(),Ie("div",{class:zt(["archive-shell",{"is-ready":h.value}])},[h.value?(Re(),Ie(_t,{key:0},[dt(PT,{lang:i.value,projects:le(jn),"active-index":s.value,onSelect:M[0]||(M[0]=y=>p(y))},null,8,["lang","projects","active-index"]),R("main",hR,[dt(yA,{lang:i.value,project:g.value,"active-index":s.value,"total-projects":le(jn).length,direction:r.value,onPrev:T,onNext:A,onOpenFullscreen:I},null,8,["lang","project","active-index","total-projects","direction"]),dt(uw,{lang:i.value,project:g.value,"is-saved":v.value,direction:r.value,onPrev:T,onNext:A,onInspect:M[1]||(M[1]=y=>I("shaded")),onToggleSave:M[2]||(M[2]=y=>x(g.value.id))},null,8,["lang","project","is-saved","direction"])]),dt(Ew,{lang:i.value,"saved-count":o.value.length,"active-code":g.value.code,onOpenIndex:M[3]||(M[3]=y=>a.value="index"),onOpenSaved:M[4]||(M[4]=y=>a.value="saved"),onOpenAbout:M[5]||(M[5]=y=>a.value="about"),onChangeLang:M[6]||(M[6]=y=>i.value=y)},null,8,["lang","saved-count","active-code"])],64)):nn("",!0),dt(Xi,{name:"viewer-expand"},{default:Qn(()=>[l.value?(Re(),Xs(kw,{key:0,lang:i.value,project:g.value,"initial-mode":c.value,onClose:M[7]||(M[7]=y=>l.value=!1)},null,8,["lang","project","initial-mode"])):nn("",!0)]),_:1}),dt(Xi,{name:"modal-reveal",mode:"out-in"},{default:Qn(()=>[a.value==="index"?(Re(),Xs(u1,{key:"index",lang:i.value,projects:le(jn),onClose:M[8]||(M[8]=y=>a.value=null),onSelectProject:M[9]||(M[9]=y=>{p(y),a.value=null}),onOpenAbout:M[10]||(M[10]=y=>a.value="about")},null,8,["lang","projects"])):a.value==="saved"?(Re(),Xs(D1,{key:"saved",lang:i.value,projects:le(jn),"saved-ids":o.value,onClose:M[11]||(M[11]=y=>a.value=null),onSelectProject:M[12]||(M[12]=y=>{p(y),a.value=null}),onRemoveSaved:M[13]||(M[13]=y=>x(y)),onOpenIndex:M[14]||(M[14]=y=>a.value="index")},null,8,["lang","projects","saved-ids"])):a.value==="about"?(Re(),Xs(uR,{key:"about",lang:i.value,onClose:M[15]||(M[15]=y=>a.value=null),onCopied:M[16]||(M[16]=y=>m(le(ge)[i.value].toasts.copied))},null,8,["lang"])):nn("",!0)]),_:1}),dt(Xi,{name:"toast-pop"},{default:Qn(()=>[d.value?(Re(),Ie("div",dR,[M[17]||(M[17]=R("span",{class:"signal-dot","aria-hidden":"true"},null,-1)),R("span",null,ee(d.value),1)])):nn("",!0)]),_:1}),dt(Xi,{name:"boot-curtain"},{default:Qn(()=>[u.value?(Re(),Xs(xT,{key:0,lang:i.value,active:u.value,onComplete:N},null,8,["lang","active"])):nn("",!0)]),_:1})],2))}});Z_(fR).mount("#app");
