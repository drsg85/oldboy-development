!function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=26)}({0:function(t,e,o){"use strict";e.a=class{constructor(t){this.btn=t.trigger,this.target=t.target,this.addEvents()}ease(t){return t}scrollToTop(t,e,o,n,s){const i=e-t;let c=i/o;const l=this.ease(c);c=Math.min(c,1),window.scroll(0,s+n*l),i<o&&requestAnimationFrame(()=>{const e=(new Date).getTime();this.scrollToTop(t,e,o,n,s)})}scrolling(t){let e;"/"!=window.location.pathname&&"/en"!=window.location.pathname||t.preventDefault(),this.btn.hasAttribute("href")&&(e=this.btn.href,void 0!==e&&-1==e.indexOf("#services")&&t.preventDefault());const o=this.target;requestAnimationFrame(()=>{const t=(new Date).getTime(),e=t,n=window.pageYOffset,s=o.getBoundingClientRect().top;this.scrollToTop(e,t,500,s,n)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},1:function(t,e,o){"use strict";e.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events(),this.disableScroll(),this.disableScrollIos()}events(){const t=this.debounceOnScroll(this.checkPositionPopup,400);window.addEventListener("scroll",t),this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let t=0;t<this.menuLinks.length;t++)this.menuLinks[t].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){if(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}closeHandlerByEsc(t){27!=t.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(t){if(t.target.classList.contains("menu-button--close")){const t=document.createElement("div");t.classList.add("hero__nav-wrapper"),document.body.appendChild(t),t.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){if(document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}debounceOnScroll(t,e){let o;return function(n){o&&clearTimeout(o),o=setTimeout(t,e,n)}}checkPositionPopup(){document.documentElement.style.setProperty("--scroll-y",window.scrollY+"px")}disableScroll(){this.menuButton.addEventListener("click",()=>{if(this.menu.classList.contains("hero__nav--hidden")){const t=document.body,e=t.style.top;t.style.position="",t.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}else{const t=document.documentElement.style.getPropertyValue("--scroll-y"),e=document.body;e.style.position="fixed",e.style.top="-"+t}})}disableScrollIos(){const t=-1!==navigator.userAgent.indexOf("Safari"),e=-1!==navigator.userAgent.indexOf("iPhone"),o=t&&e;this.menu.classList.contains("menu-button--close")&&o?document.ontouchmove=t=>t.preventDefault():document.ontouchmove=t=>!0}}},2:function(t,e,o){"use strict";var n=o(0);e.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new n.a({trigger:this.btn,target:this.target});document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},26:function(t,e,o){"use strict";o.r(e);var n=o(1),s=o(2),i=o(3),c=o(4),l=o(6);new n.a,new s.a,new i.a,new c.a,new l.a},3:function(t,e,o){"use strict";var n=function(t,e,o,n){return(t/=n/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){var t=void 0,e=void 0,o=void 0,i=void 0,c=void 0,l=void 0,r=void 0,a=void 0,d=void 0,u=void 0,h=void 0,m=void 0;function y(){return window.scrollY||window.pageYOffset}function p(t){return t.getBoundingClientRect().top+e}function v(o){d||(d=o),h=c(u=o-d,e,r,a),window.scrollTo(0,h),u<a?window.requestAnimationFrame(v):function(){window.scrollTo(0,e+r),t&&l&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof m&&m();d=!1}()}return function(d){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=u.duration||1e3,i=u.offset||0,m=u.callback,c=u.easing||n,l=u.a11y||!1,e=y(),void 0===d?"undefined":s(d)){case"number":t=void 0,l=!1,o=e+d;break;case"object":o=p(t=d);break;case"string":t=document.querySelector(d),o=p(t)}switch(r=o-e+i,s(u.duration)){case"number":a=u.duration;break;case"function":a=u.duration(r)}window.requestAnimationFrame(v)}}();e.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}scrolling(t){const e=t.target.href.split("#")[1];i("#"+e)}addEvents(){this.anchors.map(t=>t.addEventListener("click",t=>this.scrolling(t)))}}},4:function(t,e,o){"use strict";e.a=class{constructor(){this.city=document.querySelector(".city-select"),this.citySelector=document.querySelector(".location-selector"),this.citySelectorClose=document.querySelector(".location-selector__close"),this.cityInput=document.querySelector(".city-form__input"),this.locationAbroad=document.querySelector(".location-selector__abroad"),this.locationLogo=document.querySelector(".location-logo--reset"),this.locationLogo&&(this.locationLogo.style.filter="drop-shadow(1px 1px 0px orange)"),this.locationAbroadSwitcher=document.querySelector(".location-logo--switcher"),this.toSwitchBlocks=[this.citySelector.querySelector(".location-selector__fast-nav"),this.citySelector.querySelector(".location-selector__alphabet"),this.citySelector.querySelector(".location-selector__content")],this.reset(),this.events()}switchAbroad(){this.toSwitchBlocks.map(t=>{t.classList.add("location-selector--invisible")}),this.locationAbroad.classList.add("location-selector__abroad--visible"),this.locationLogo.style.filter=null,this.locationAbroadSwitcher.style.filter="drop-shadow(1px 1px 0px orange)"}resetSwitch(){this.toSwitchBlocks.map(t=>{t.classList.remove("location-selector--invisible")}),this.locationAbroad.classList.remove("location-selector__abroad--visible"),this.locationAbroadSwitcher.style.filter=null,this.locationLogo.style.filter="drop-shadow(1px 1px 0px orange)"}events(){this.city.addEventListener("click",t=>{t.preventDefault(),this.toggleSelector(),this.cityInput&&setTimeout(()=>{this.cityInput.focus()},250)}),this.citySelectorClose.addEventListener("click",t=>{t.preventDefault(),this.toggleSelector()}),window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.locationAbroadSwitcher&&this.locationAbroadSwitcher.addEventListener("click",()=>this.switchAbroad()),this.locationLogo&&this.locationLogo.addEventListener("click",()=>this.resetSwitch())}reset(){this.citySelector.classList.add("location-selector--hidden"),this.citySelectorClose.classList.add("location-selector__close--hidden"),this.isHidden=!0}toggleSelector(){this.citySelector.classList.toggle("location-selector--hidden"),this.citySelectorClose.classList.toggle("location-selector__close--hidden"),this.isHidden=!this.isHidden,this.isHidden?document.documentElement.style.overflow="auto":document.documentElement.style.overflow="hidden"}closeHandlerByEsc(t){27!=t.keyCode||this.citySelector.classList.contains("location-selector--hidden")||(this.citySelectorClose.classList.add("location-selector__close--hidden"),this.citySelector.classList.add("location-selector--hidden"),document.documentElement.style.overflow="auto")}}},6:function(t,e,o){"use strict";e.a=class{constructor(){this.langSelect=document.querySelector(".language-select"),this.langSelect&&(this.langButton=this.langSelect.querySelector(".language-select__current"),this.langPopup=this.langSelect.querySelector(".language-select__popup"),this.langPopup?this.reset():this.langButton.style.display="none",this.addEvents())}addEvents(){this.langButton.addEventListener("click",()=>{this.togglePopup()}),document.addEventListener("click",t=>{t.target!=this.langButton&&t.target!=this.langPopup&&this.reset()})}reset(){this.langPopup.classList.add("language-select__popup--hidden")}togglePopup(){this.langPopup.classList.toggle("language-select__popup--hidden")}}}});