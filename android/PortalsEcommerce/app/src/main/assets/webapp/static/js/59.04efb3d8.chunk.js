(this["webpackJsonpportals-ecommerce-demo"]=this["webpackJsonpportals-ecommerce-demo"]||[]).push([[59],{142:function(o,e,i){"use strict";i.r(e),i.d(e,"ion_icon",(function(){return l}));var t=i(52),n=i(68),r=function o(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var i=0;i<e.attributes.length;i++){var t=e.attributes[i].value;if(Object(n.d)(t)&&0===t.toLowerCase().indexOf("on"))return!1}for(i=0;i<e.childNodes.length;i++)if(!o(e.childNodes[i]))return!1}return!0},s=new Map,c=new Map,a=function(o,e){var i=c.get(o);if(!i){if("undefined"===typeof fetch||"undefined"===typeof document)return s.set(o,""),Promise.resolve();i=fetch(o).then((function(i){if(i.ok)return i.text().then((function(i){i&&!1!==e&&(i=function(o){var e=document.createElement("div");e.innerHTML=o;for(var i=e.childNodes.length-1;i>=0;i--)"svg"!==e.childNodes[i].nodeName.toLowerCase()&&e.removeChild(e.childNodes[i]);var t=e.firstElementChild;if(t&&"svg"===t.nodeName.toLowerCase()){var n=t.getAttribute("class")||"";if(t.setAttribute("class",(n+" s-ion-icon").trim()),r(t))return e.innerHTML}return""}(i)),s.set(o,i||"")}));s.set(o,"")})),c.set(o,i)}return i},l=function(){function o(o){Object(t.e)(this,o),this.iconName=null,this.isVisible=!1,this.mode=d(),this.lazy=!1,this.sanitize=!0}return o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))},o.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,e,i){var t=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(n.disconnect(),t.io=void 0,i())}),{rootMargin:e});n.observe(o)}else i()},o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var e=Object(n.c)(this);e&&(s.has(e)?this.svgContent=s.get(e):a(e,this.sanitize).then((function(){return o.svgContent=s.get(e)})))}var i=this.iconName=Object(n.b)(this.name,this.icon,this.mode,this.ios,this.md);this.ariaLabel||"true"===this.ariaHidden||i&&(this.ariaLabel=i.replace(/\-/g," "))},o.prototype.render=function(){var o,e,i=this.iconName,n=this.mode||"md",r=this.flipRtl||i&&(i.indexOf("arrow")>-1||i.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(t.d)(t.a,{role:"img",class:Object.assign(Object.assign((o={},o[n]=!0,o),h(this.color)),(e={},e["icon-"+this.size]=!!this.size,e["flip-rtl"]=!!r&&"rtl"===this.el.ownerDocument.dir,e))},this.svgContent?Object(t.d)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(t.d)("div",{class:"icon-inner"}))},Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"el",{get:function(){return Object(t.b)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:!1,configurable:!0}),o}(),d=function(){return"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md"},h=function(o){var e;return o?((e={"ion-color":!0})["ion-color-"+o]=!0,e):null};l.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}]);
//# sourceMappingURL=59.04efb3d8.chunk.js.map