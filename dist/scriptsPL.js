<<<<<<< HEAD
!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}({0:function(e,t,n){"use strict";t.a=class{constructor(e){this.btn=e.trigger,this.target=e.target,this.addEvents()}ease(e){return e}scrollToTop(e,t,n,s,o){const i=t-e;let r=i/n;const c=this.ease(r);r=Math.min(r,1),window.scroll(0,o+s*c),i<n&&requestAnimationFrame(()=>{const t=(new Date).getTime();this.scrollToTop(e,t,n,s,o)})}scrolling(e){let t;"/"!=window.location.pathname&&"/en"!=window.location.pathname||e.preventDefault(),this.btn.hasAttribute("href")&&void 0!==(t=this.btn.href)&&-1==t.indexOf("#services")&&e.preventDefault();const n=this.target;requestAnimationFrame(()=>{const e=(new Date).getTime(),t=e,s=window.pageYOffset,o=n.getBoundingClientRect().top;this.scrollToTop(t,e,500,o,s)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},1:function(e,t,n){"use strict";t.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events()}events(){this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let e=0;e<this.menuLinks.length;e++)this.menuLinks[e].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){if(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}closeHandlerByEsc(e){27!=e.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(e){if(e.target.classList.contains("menu-button--close")){const e=document.createElement("div");e.classList.add("hero__nav-wrapper"),document.body.appendChild(e),e.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){if(document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}}},2:function(e,t,n){"use strict";var s=n(0);t.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new s.a({trigger:this.btn,target:this.target});document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},20:function(e,t,n){"use strict";n.r(t);var s=n(1),o=n(2),i=n(3),r=n(4);new s.a,new o.a,new i.a,new r.a},3:function(e,t,n){"use strict";var s=n(0);t.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}addEvents(){this.anchors.map(e=>{const t=e.href.split("#")[1];new s.a({trigger:e,target:document.querySelector(`#${t}`)})})}}},4:function(e,t,n){"use strict";t.a=class{constructor(){this.city=document.querySelector(".city-select"),this.citySelector=document.querySelector(".location-selector"),this.citySelectorClose=document.querySelector(".location-selector__close"),this.cityInput=document.querySelector(".city-form__input"),this.reset(),this.events()}events(){this.city.addEventListener("click",e=>{e.preventDefault(),this.toggleSelector(),this.cityInput&&setTimeout(()=>{this.cityInput.focus()},250)}),this.citySelectorClose.addEventListener("click",e=>{e.preventDefault(),this.toggleSelector()}),window.addEventListener("keydown",()=>this.closeHandlerByEsc(event))}reset(){this.citySelector.classList.add("location-selector--hidden"),this.citySelectorClose.classList.add("location-selector__close--hidden"),this.isHidden=!0}toggleSelector(){this.citySelector.classList.toggle("location-selector--hidden"),this.citySelectorClose.classList.toggle("location-selector__close--hidden"),this.isHidden=!this.isHidden,this.isHidden?document.documentElement.style.overflow="auto":document.documentElement.style.overflow="hidden"}closeHandlerByEsc(e){27!=e.keyCode||this.citySelector.classList.contains("location-selector--hidden")||(this.citySelectorClose.classList.add("location-selector__close--hidden"),this.citySelector.classList.add("location-selector--hidden"),document.documentElement.style.overflow="auto")}}}});
=======
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}({0:function(e,t,n){"use strict";t.a=class{constructor(e){this.btn=e.trigger,this.target=e.target,this.addEvents()}ease(e){return e}scrollToTop(e,t,n,o,s){const i=t-e;let r=i/n;const c=this.ease(r);r=Math.min(r,1),window.scroll(0,s+o*c),i<n&&requestAnimationFrame(()=>{const t=(new Date).getTime();this.scrollToTop(e,t,n,o,s)})}scrolling(e){let t;"/"!=window.location.pathname&&"/en"!=window.location.pathname||e.preventDefault(),this.btn.hasAttribute("href")&&void 0!==(t=this.btn.href)&&-1==t.indexOf("#services")&&e.preventDefault();const n=this.target;requestAnimationFrame(()=>{const e=(new Date).getTime(),t=e,o=window.pageYOffset,s=n.getBoundingClientRect().top;this.scrollToTop(t,e,500,s,o)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},1:function(e,t,n){"use strict";t.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events()}events(){this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let e=0;e<this.menuLinks.length;e++)this.menuLinks[e].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){if(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}closeHandlerByEsc(e){27!=e.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(e){if(e.target.classList.contains("menu-button--close")){const e=document.createElement("div");e.classList.add("hero__nav-wrapper"),document.body.appendChild(e),e.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){if(document.querySelector(".hero__nav-wrapper")){document.querySelector(".hero__nav-wrapper").remove()}}}},2:function(e,t,n){"use strict";var o=n(0);t.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new o.a({trigger:this.btn,target:this.target});document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},20:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n(2),i=n(3),r=n(4);new o.a,new s.a,new i.a,new r.a},3:function(e,t,n){"use strict";var o=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){var e=void 0,t=void 0,n=void 0,i=void 0,r=void 0,c=void 0,l=void 0,a=void 0,d=void 0,u=void 0,h=void 0,m=void 0;function v(e){return e.getBoundingClientRect().top+t}function y(n){d||(d=n),h=r(u=n-d,t,l,a),window.scrollTo(0,h),u<a?window.requestAnimationFrame(y):function(){window.scrollTo(0,t+l),e&&c&&(e.setAttribute("tabindex","-1"),e.focus());"function"==typeof m&&m();d=!1}()}return function(d){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=u.duration||1e3,i=u.offset||0,m=u.callback,r=u.easing||o,c=u.a11y||!1,t=window.scrollY||window.pageYOffset,void 0===d?"undefined":s(d)){case"number":e=void 0,c=!1,n=t+d;break;case"object":n=v(e=d);break;case"string":e=document.querySelector(d),n=v(e)}switch(l=n-t+i,s(u.duration)){case"number":a=u.duration;break;case"function":a=u.duration(l)}window.requestAnimationFrame(y)}}();t.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}scrolling(e){const t=e.target.href.split("#")[1];i(`#${t}`)}addEvents(){this.anchors.map(e=>e.addEventListener("click",e=>this.scrolling(e)))}}},4:function(e,t,n){"use strict";t.a=class{constructor(){this.city=document.querySelector(".city-select"),this.citySelector=document.querySelector(".location-selector"),this.citySelectorClose=document.querySelector(".location-selector__close"),this.cityInput=document.querySelector(".city-form__input"),this.reset(),this.events()}events(){this.city.addEventListener("click",e=>{e.preventDefault(),this.toggleSelector(),this.cityInput&&setTimeout(()=>{this.cityInput.focus()},250)}),this.citySelectorClose.addEventListener("click",e=>{e.preventDefault(),this.toggleSelector()}),window.addEventListener("keydown",()=>this.closeHandlerByEsc(event))}reset(){this.citySelector.classList.add("location-selector--hidden"),this.citySelectorClose.classList.add("location-selector__close--hidden"),this.isHidden=!0}toggleSelector(){this.citySelector.classList.toggle("location-selector--hidden"),this.citySelectorClose.classList.toggle("location-selector__close--hidden"),this.isHidden=!this.isHidden,this.isHidden?document.documentElement.style.overflow="auto":document.documentElement.style.overflow="hidden"}closeHandlerByEsc(e){27!=e.keyCode||this.citySelector.classList.contains("location-selector--hidden")||(this.citySelectorClose.classList.add("location-selector__close--hidden"),this.citySelector.classList.add("location-selector--hidden"),document.documentElement.style.overflow="auto")}}}});
>>>>>>> master
