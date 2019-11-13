!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";e.a=class{constructor(t){this.btn=t.trigger,this.target=t.target,this.addEvents()}ease(t){return t}scrollToTop(t,e,n,s,i){const o=e-t;let r=o/n;const c=this.ease(r);r=Math.min(r,1),window.scroll(0,i+s*c),o<n&&requestAnimationFrame(()=>{const e=(new Date).getTime();this.scrollToTop(t,e,n,s,i)})}scrolling(t){let e;console.log(window.location.pathname),"/"!=window.location.pathname&&"/en"!=window.location.pathname||t.preventDefault(),this.btn.hasAttribute("href")&&void 0!==(e=this.btn.href)&&-1==e.indexOf("#services")&&t.preventDefault();const n=this.target;requestAnimationFrame(()=>{const t=(new Date).getTime(),e=t,s=window.pageYOffset,i=n.getBoundingClientRect().top;this.scrollToTop(e,t,500,i,s)})}addEvents(){this.btn.addEventListener("click",()=>this.scrolling(event))}}},function(t,e,n){"use strict";e.a=class{constructor(){this.menuButton=document.querySelector(".menu-button"),this.menu=document.querySelector(".hero__nav"),this.menuLinks=document.querySelectorAll(".main-nav__link"),this.reset(),this.events()}events(){this.menuButton.addEventListener("click",()=>{this.toggleMenu(),this.removeHandlerClass()});for(let t=0;t<this.menuLinks.length;t++)this.menuLinks[t].addEventListener("click",()=>{this.toggleMenu()});window.addEventListener("keydown",()=>this.closeHandlerByEsc(event)),this.menuButton.addEventListener("click",()=>this.closeHandlerByClickOnPage(event))}reset(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),document.querySelector(".hero__nav-wrapper")&&document.querySelector(".hero__nav-wrapper").remove()}closeHandlerByEsc(t){27!=t.keyCode||this.menu.classList.contains("hero__nav--hidden")||(this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass())}closeMobileMenuByClick(){this.menuButton.classList.remove("menu-button--close"),this.menu.classList.add("hero__nav--hidden"),this.removeHandlerClass()}closeHandlerByClickOnPage(t){if(t.target.classList.contains("menu-button--close")){const t=document.createElement("div");t.classList.add("hero__nav-wrapper"),document.body.appendChild(t),t.addEventListener("click",()=>this.closeMobileMenuByClick())}}toggleMenu(){this.menuButton.classList.toggle("menu-button--close"),this.menu.classList.toggle("hero__nav--hidden"),this.menuButton.classList.contains("menu-button--close")||this.removeHandlerClass()}removeHandlerClass(){document.querySelector(".hero__nav-wrapper")&&document.querySelector(".hero__nav-wrapper").remove()}}},function(t,e,n){"use strict";var s=n(0);e.a=class{constructor(){this.btn=document.querySelector(".up-button"),this.target=document.body,this.btn&&(this.btn.style.opacity="0",this.btn.style.pointerEvents="none",this.addEvents())}addEvents(){new s.a({trigger:this.btn,target:this.target}),document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?(this.btn.style.opacity="1",this.btn.style.pointerEvents="auto"):(this.btn.style.opacity="0",this.btn.style.pointerEvents="none")})}}},function(t,e,n){"use strict";var s=n(0);e.a=class{constructor(){this.anchors=[...document.querySelectorAll(".smooth-trigger")],this.anchors&&this.addEvents()}addEvents(){this.anchors.map(t=>{const e=t.href.split("#")[1];new s.a({trigger:t,target:document.querySelector(`#${e}`)})})}}},,function(t,e,n){"use strict";e.a=class{constructor(){this.locationLogo=document.querySelector(".location-logo"),this.locationLogoEng=document.querySelector(".location-logo--out"),this.addEvents()}addEvents(){location.href.match(/oldboybarbershop.com/)&&(this.locationLogo.removeAttribute("href"),this.locationLogo.style.opacity="1"),location.href.match(/eu.oldboybarbershop.com/)&&this.locationLogo.removeAttribute("href")}}},function(t,e){},,,,,,,function(t,e,n){"use strict";n.r(e);var s=n(1),i=n(2),o=n(3);var r=class{constructor(){this.formResult=document.querySelector(".invest-calculator__result"),this.formGraphLabels=[...document.querySelectorAll(".invest-calculator__radio")],this.formInvest=this.formResult.querySelector("#invest-calculator__value-invest"),this.sumText=[...this.formResult.querySelectorAll(".invest-calculator__summ-text")],this.investVip=document.querySelector(".invest-calculator__vip-title"),this.investCalcSumms=[...document.querySelectorAll(".invest-calculator__sum")],this.investLocation=document.querySelector(".invest-location"),this.investLocs=[...this.investLocation.querySelectorAll(".invest-location__radio")],this.formPassive=this.formResult.querySelector("#invest-calculator__value-passive"),this.formYear=this.formResult.querySelector("#invest-calculator__value-year"),this.formMonth=this.formResult.querySelector("#invest-calculator__value-month"),this.location="monthRU",this.calcFlag=!0,this.euInvestment={0:"1 250 000 ₽",1:"2 500 000 ₽",2:"3 750 000 ₽",3:"5 000 000 ₽",4:"6 250 000 ₽",5:"более 6 250 000 ₽"},this.ruInvestment={0:"850 000 ₽",1:"1 700 000 ₽",2:"2 550 000 ₽",3:"3 400 000 ₽",4:"4 250 000 ₽",5:"более 4 250 000 ₽"},this.addEvents()}findParent(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}clicking(t){if(this.flag=!0,this.formResult.classList.remove("invest-calculator__special"),this.flag){const e=this.findParent(t,"invest-calculator__label").querySelector(".invest-calculator__sum");let n=e.dataset.monthru;"monthEU"===this.location&&(n=e.dataset.montheu);const s=e.textContent,i=s.substring(0,s.length-1).split(" ").join(""),o=/\d{1,3}(?=(\d{3})+(?!\d))/g,r=document.createElement("span");r.classList.add("invest-calculator__curr","rouble-sign"),r.textContent=" Р",this.sumText.map(t=>{t.querySelector(".invest-calculator__curr")||t.appendChild(r.cloneNode(!0))});const c=i.replace(o,"$& "),a=n.toString(),l=(12*n).toString(),u=(12*n*5).toString();this.formInvest.innerHTML=c,this.formPassive.innerHTML=u.replace(o,"$& "),this.formYear.innerHTML=l.replace(o,"$& "),this.formMonth.innerHTML=a.replace(o,"$& ")}}special(t){this.formResult.classList.add("invest-calculator__special")}addEvents(){this.investLocs.map(t=>t.addEventListener("change",()=>{this.clicking(this.formGraphLabels[0]),"rf"===t.id?(this.calcFlag=!0,this.investCalcSumms.map((t,e)=>{t.textContent=this.ruInvestment[e]}),this.investVip.textContent=this.ruInvestment[4],this.location="monthRU",this.formYear.innerHTML="480 000",this.formPassive.innerHTML="2 400 000",this.formMonth.innerHTML="40 000",this.formInvest.innerHTML="850 000"):"eu"===t.id&&(this.calcFlag=!1,this.investCalcSumms.map((t,e)=>{t.textContent=this.euInvestment[e]}),this.investVip.textContent=this.euInvestment[4],this.location="monthEU",this.formYear.innerHTML="850 000",this.formPassive.innerHTML="4 200 000",this.formMonth.innerHTML="70 000",this.formInvest.innerHTML="1 250 000")})),this.formGraphLabels.map((t,e,n)=>{e<n.length-1?t.addEventListener("click",()=>this.clicking(t)):t.addEventListener("click",()=>this.special(t))}),document.body.addEventListener("click",t=>{this.formGraphLabels.some(()=>{if(t.target!==document.activeElement&&this.calcFlag)this.formGraphLabels[0].checked=!0,this.formResult.classList.remove("invest-calculator__special"),this.formYear.innerHTML="480 000",this.formPassive.innerHTML="2 400 000",this.formMonth.innerHTML="40 000",this.formInvest.innerHTML="850 000";else{if(t.target===document.activeElement||this.calcFlag)return;this.formGraphLabels[0].checked=!0,this.formResult.classList.remove("invest-calculator__special"),this.formYear.innerHTML="840 000",this.formPassive.innerHTML="4 200 000",this.formMonth.innerHTML="70 000",this.formInvest.innerHTML="1 250 000"}})})}},c=n(5);var a=class{constructor(){this.investmentPopup=document.querySelector(".investment-popup"),this.protectionLink=document.querySelector(".protection__link"),this.investmentPopupClose=document.querySelector(".investment-popup__close"),this.events()}events(){this.protectionLink.addEventListener("click",()=>{this.investmentPopup.style.display="block"}),this.investmentPopupClose.addEventListener("click",()=>{this.investmentPopup.style.display="none"})}},l=n(6),u=n.n(l);new s.a,new c.a;new i.a,new o.a;new r,new a,new u.a}]);