!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=22)}({0:function(t,e,o){"use strict";e.a=class{constructor(t){this.btn=t.trigger,this.target=t.target,this.addEvents()}ease(t){return t}scrollToTop(t,e,o,n,i){const s=e-t;let c=s/o;const r=this.ease(c);c=Math.min(c,1),window.scroll(0,i+n*r),s<o&&requestAnimationFrame(()=>{const e=(new Date).getTime();this.scrollToTop(t,e,o,n,i)})}scrolling(t){let e;"/"!=window.location.pathname&&"/en"!=window.location.pathname||t.preventDefault(),this.btn.hasAttribute("href")&&void 0!==(e=this.btn.href)&&-1==e.indexOf("#services")&&t.preventDefault();const o=this.target;requestAnimationFrame(()=>{const t=(new Date).getTime(),e=t,n=window.pageYOffset,i=o.getBoundingClientRect().top;this.scrollToTop(e,t,500,i,n)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},1:function(t,e,o){"use strict";e.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events(),this.disableScroll(),this.disableScrollIos()}events(){this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let t=0;t<this.menuLinks.length;t++)this.menuLinks[t].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){if(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}closeHandlerByEsc(t){27!=t.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(t){if(t.target.classList.contains("menu-button--close")){const t=document.createElement("div");t.classList.add("hero__nav-wrapper"),document.body.appendChild(t),t.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){if(document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}disableScroll(){this.menuButton.addEventListener("click",()=>{this.menu.classList.contains("hero__nav--hidden")?(document.documentElement.style.overflow="unset",document.body.style.overflow="unset"):(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden")})}disableScrollIos(){const t=-1!==navigator.userAgent.indexOf("Safari"),e=-1!==navigator.userAgent.indexOf("iPhone"),o=t&&e;this.menu.classList.contains("menu-button--close")&&o?document.ontouchmove=t=>t.preventDefault():document.ontouchmove=t=>!0}}},2:function(t,e,o){"use strict";var n=o(0);e.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new n.a({trigger:this.btn,target:this.target});document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},22:function(t,e,o){"use strict";o.r(e);var n=o(1),i=o(2),s=o(3),c=o(4);new n.a,new i.a,new s.a,new c.a},3:function(t,e,o){"use strict";var n=function(t,e,o,n){return(t/=n/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){var t=void 0,e=void 0,o=void 0,s=void 0,c=void 0,r=void 0,l=void 0,a=void 0,d=void 0,u=void 0,h=void 0,m=void 0;function v(t){return t.getBoundingClientRect().top+e}function y(o){d||(d=o),h=c(u=o-d,e,l,a),window.scrollTo(0,h),u<a?window.requestAnimationFrame(y):function(){window.scrollTo(0,e+l),t&&r&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof m&&m();d=!1}()}return function(d){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=u.duration||1e3,s=u.offset||0,m=u.callback,c=u.easing||n,r=u.a11y||!1,e=window.scrollY||window.pageYOffset,void 0===d?"undefined":i(d)){case"number":t=void 0,r=!1,o=e+d;break;case"object":o=v(t=d);break;case"string":t=document.querySelector(d),o=v(t)}switch(l=o-e+s,i(u.duration)){case"number":a=u.duration;break;case"function":a=u.duration(l)}window.requestAnimationFrame(y)}}();e.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}scrolling(t){const e=t.target.href.split("#")[1];s(`#${e}`)}addEvents(){this.anchors.map(t=>t.addEventListener("click",t=>this.scrolling(t)))}}},4:function(t,e,o){"use strict";e.a=class{constructor(){this.city=document.querySelector(".city-select"),this.citySelector=document.querySelector(".location-selector"),this.citySelectorClose=document.querySelector(".location-selector__close"),this.cityInput=document.querySelector(".city-form__input"),this.locationAbroad=document.querySelector(".location-selector__abroad"),this.locationLogo=document.querySelector(".location-logo--reset"),this.locationLogo.style.filter="drop-shadow(1px 1px 0px orange)",this.locationAbroadSwitcher=document.querySelector(".location-logo--switcher"),this.toSwitchBlocks=[this.citySelector.querySelector(".location-selector__fast-nav"),this.citySelector.querySelector(".location-selector__alphabet"),this.citySelector.querySelector(".location-selector__content")],this.reset(),this.events()}switchAbroad(){this.toSwitchBlocks.map(t=>{t.classList.add("location-selector--invisible")}),this.locationAbroad.classList.add("location-selector__abroad--visible"),this.locationLogo.style.filter=null,this.locationAbroadSwitcher.style.filter="drop-shadow(1px 1px 0px orange)"}resetSwitch(){this.toSwitchBlocks.map(t=>{t.classList.remove("location-selector--invisible")}),this.locationAbroad.classList.remove("location-selector__abroad--visible"),this.locationAbroadSwitcher.style.filter=null,this.locationLogo.style.filter="drop-shadow(1px 1px 0px orange)"}events(){this.city.addEventListener("click",t=>{t.preventDefault(),this.toggleSelector(),this.cityInput&&setTimeout(()=>{this.cityInput.focus()},250)}),this.citySelectorClose.addEventListener("click",t=>{t.preventDefault(),this.toggleSelector()}),window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.locationAbroadSwitcher.addEventListener("click",()=>this.switchAbroad()),this.locationLogo.addEventListener("click",()=>this.resetSwitch())}reset(){this.citySelector.classList.add("location-selector--hidden"),this.citySelectorClose.classList.add("location-selector__close--hidden"),this.isHidden=!0}toggleSelector(){this.citySelector.classList.toggle("location-selector--hidden"),this.citySelectorClose.classList.toggle("location-selector__close--hidden"),this.isHidden=!this.isHidden,this.isHidden?document.documentElement.style.overflow="auto":document.documentElement.style.overflow="hidden"}closeHandlerByEsc(t){27!=t.keyCode||this.citySelector.classList.contains("location-selector--hidden")||(this.citySelectorClose.classList.add("location-selector__close--hidden"),this.citySelector.classList.add("location-selector--hidden"),document.documentElement.style.overflow="auto")}}}});