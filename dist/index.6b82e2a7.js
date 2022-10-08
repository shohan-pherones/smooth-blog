function t(t){return t&&t.__esModule?t.default:t}var e={};function i(){}i.prototype={on:function(t,e,i){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var o=this;function n(){o.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),o=0,n=i.length;o<n;o++)i[o].fn.apply(i[o].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),o=i[t],n=[];if(o&&e)for(var r=0,s=o.length;r<s;r++)o[r].fn!==e&&o[r].fn._!==e&&n.push(o[r]);return n.length?i[t]=n:delete i[t],this}},(e=i).TinyEmitter=i;var o={};function n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},s.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}o=function(){var t=0;function e(e){return"__private_"+t+++"_"+e}function i(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function o(){}o.prototype={on:function(t,e,i){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var o=this;function n(){o.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),o=0,n=i.length;o<n;o++)i[o].fn.apply(i[o].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),o=i[t],n=[];if(o&&e)for(var r=0,s=o.length;r<s;r++)o[r].fn!==e&&o[r].fn._!==e&&n.push(o[r]);return n.length?i[t]=n:delete i[t],this}};var n=o;n.TinyEmitter=o;var r,s="virtualscroll",h=e("options"),l=e("el"),a=e("emitter"),c=e("event"),u=e("touchStart"),d=e("bodyTouchAction");return function(){function t(t){var e=this;Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),this._onWheel=function(t){var o=i(e,h)[h],n=i(e,c)[c];n.deltaX=t.wheelDeltaX||-1*t.deltaX,n.deltaY=t.wheelDeltaY||-1*t.deltaY,r.isFirefox&&1===t.deltaMode&&(n.deltaX*=o.firefoxMultiplier,n.deltaY*=o.firefoxMultiplier),n.deltaX*=o.mouseMultiplier,n.deltaY*=o.mouseMultiplier,e._notify(t)},this._onMouseWheel=function(t){var o=i(e,c)[c];o.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,o.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,e._notify(t)},this._onTouchStart=function(t){var o=t.targetTouches?t.targetTouches[0]:t;i(e,u)[u].x=o.pageX,i(e,u)[u].y=o.pageY},this._onTouchMove=function(t){var o=i(e,h)[h];o.preventTouch&&!t.target.classList.contains(o.unpreventTouchClass)&&t.preventDefault();var n=i(e,c)[c],r=t.targetTouches?t.targetTouches[0]:t;n.deltaX=(r.pageX-i(e,u)[u].x)*o.touchMultiplier,n.deltaY=(r.pageY-i(e,u)[u].y)*o.touchMultiplier,i(e,u)[u].x=r.pageX,i(e,u)[u].y=r.pageY,e._notify(t)},this._onKeyDown=function(t){var o=i(e,c)[c];o.deltaX=o.deltaY=0;var n=window.innerHeight-40;switch(t.keyCode){case 37:case 38:o.deltaY=i(e,h)[h].keyStep;break;case 39:case 40:o.deltaY=-i(e,h)[h].keyStep;break;case 32:o.deltaY=n*(t.shiftKey?1:-1);break;default:return}e._notify(t)},i(this,l)[l]=window,t&&t.el&&(i(this,l)[l]=t.el,delete t.el),r||(r={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),i(this,h)[h]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},t),i(this,a)[a]=new n,i(this,c)[c]={y:0,x:0,deltaX:0,deltaY:0},i(this,u)[u]={x:null,y:null},i(this,d)[d]=null,void 0!==i(this,h)[h].passive&&(this.listenerOptions={passive:i(this,h)[h].passive})}var e=t.prototype;return e._notify=function(t){var e=i(this,c)[c];e.x+=e.deltaX,e.y+=e.deltaY,i(this,a)[a].emit(s,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},e._bind=function(){r.hasWheelEvent&&i(this,l)[l].addEventListener("wheel",this._onWheel,this.listenerOptions),r.hasMouseWheelEvent&&i(this,l)[l].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),r.hasTouch&&i(this,h)[h].useTouch&&(i(this,l)[l].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),i(this,l)[l].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),r.hasPointer&&r.hasTouchWin&&(i(this,d)[d]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",i(this,l)[l].addEventListener("MSPointerDown",this._onTouchStart,!0),i(this,l)[l].addEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&i(this,h)[h].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},e._unbind=function(){r.hasWheelEvent&&i(this,l)[l].removeEventListener("wheel",this._onWheel),r.hasMouseWheelEvent&&i(this,l)[l].removeEventListener("mousewheel",this._onMouseWheel),r.hasTouch&&(i(this,l)[l].removeEventListener("touchstart",this._onTouchStart),i(this,l)[l].removeEventListener("touchmove",this._onTouchMove)),r.hasPointer&&r.hasTouchWin&&(document.body.style.msTouchAction=i(this,d)[d],i(this,l)[l].removeEventListener("MSPointerDown",this._onTouchStart,!0),i(this,l)[l].removeEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&i(this,h)[h].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},e.on=function(t,e){i(this,a)[a].on(s,t,e);var o=i(this,a)[a].e;o&&o[s]&&1===o[s].length&&this._bind()},e.off=function(t,e){i(this,a)[a].off(s,t,e);var o=i(this,a)[a].e;(!o[s]||o[s].length<=0)&&this._unbind()},e.destroy=function(){i(this,a)[a].off(),this._unbind()},t}()}();var l=["duration","easing"],a=function(){function t(){}var e=t.prototype;return e.to=function(t,e){var i=this,o=void 0===e?{}:e,n=o.duration,r=void 0===n?1:n,h=o.easing,a=void 0===h?function(t){return t}:h,c=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)e.indexOf(i=r[o])>=0||(n[i]=t[i]);return n}(o,l);this.target=t,this.fromKeys=s({},c),this.toKeys=s({},c),this.keys=Object.keys(s({},c)),this.keys.forEach((function(e){i.fromKeys[e]=t[e]})),this.duration=r,this.easing=a,this.currentTime=0,this.isRunning=!0},e.stop=function(){this.isRunning=!1},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+.001*t,this.duration);var i=this.easing(this.progress);this.keys.forEach((function(t){var o=e.fromKeys[t];e.target[t]=o+(e.toKeys[t]-o)*i})),1===i&&(this.isRunning=!1)}},r(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}(),c=function(e){var i,n;function s(i){var n,r,s,h,l=void 0===i?{}:i,c=l.duration,u=void 0===c?1.2:c,d=l.easing,p=void 0===d?function(t){return 1===t?1:1-Math.pow(2,-10*t)}:d,v=l.smooth,f=void 0===v||v,w=l.smoothTouch,y=void 0!==w&&w,g=l.touchMultiplier,m=void 0===g?2:g,b=l.direction,T=void 0===b?"vertical":b,S=l.gestureDirection,_=void 0===S?"vertical":S,M=l.wrapper,O=void 0===M?window:M,E=l.content,W=void 0===E?document.body:E;(h=e.call(this)||this).onWindowResize=function(){h.wrapperWidth=window.innerWidth,h.wrapperHeight=window.innerHeight},h.onWrapperResize=function(t){var e=t[0];if(e){var i=e.contentRect;h.wrapperWidth=i.width,h.wrapperHeight=i.height}},h.onContentResize=function(t){var e=t[0];if(e){var i=e.contentRect;h.contentWidth=i.width,h.contentHeight=i.height}},h.onVirtualScroll=function(t){var e=t.deltaY,i=t.deltaX,o=t.originalEvent;o.ctrlKey||(h.smooth=o.changedTouches?h.smoothTouch:h.options.smooth,h.stopped?o.preventDefault():h.smooth&&4!==o.buttons&&(h.smooth&&o.preventDefault(),h.targetScroll-="both"===h.gestureDirection?i+e:"horizontal"===h.gestureDirection?i:e,h.targetScroll=Math.max(0,Math.min(h.targetScroll,h.limit)),h.scrollTo(h.targetScroll)))},h.onScroll=function(t){h.isScrolling&&h.smooth||(h.targetScroll=h.scroll=h.lastScroll=h.wrapperNode[h.scrollProperty],h.notify())},window.lenisVersion="0.2.9",h.options={duration:u,easing:p,smooth:f,smoothTouch:y,touchMultiplier:m,direction:T,gestureDirection:_,wrapper:O,content:W},h.duration=u,h.easing=p,h.smooth=f,h.smoothTouch=y,h.touchMultiplier=m,h.direction=T,h.gestureDirection=_,h.wrapperNode=O,h.contentNode=W,h.wrapperNode.addEventListener("scroll",h.onScroll),h.wrapperNode===window?(h.wrapperNode.addEventListener("resize",h.onWindowResize),h.onWindowResize()):(h.wrapperHeight=h.wrapperNode.offsetHeight,h.wrapperWidth=h.wrapperNode.offsetWidth,h.wrapperObserver=new ResizeObserver(h.onWrapperResize),h.wrapperObserver.observe(h.wrapperNode)),h.contentHeight=h.contentNode.offsetHeight,h.contentWidth=h.contentNode.offsetWidth,h.contentObserver=new ResizeObserver(h.onContentResize),h.contentObserver.observe(h.contentNode),h.targetScroll=h.scroll=h.lastScroll=h.wrapperNode[h.scrollProperty],h.animate=new a;var P=(null==(n=navigator)||null==(r=n.userAgentData)?void 0:r.platform)||(null==(s=navigator)?void 0:s.platform)||"unknown";return h.virtualScroll=new(t(o))({el:h.wrapperNode,firefoxMultiplier:50,mouseMultiplier:P.includes("Win")?1:.4,useKeyboard:!1,touchMultiplier:h.touchMultiplier,useTouch:!0,passive:!1}),h.virtualScroll.on(h.onVirtualScroll),h}n=e,(i=s).prototype=Object.create(n.prototype),i.prototype.constructor=i,h(i,n);var l=s.prototype;return l.start=function(){this.stopped=!1},l.stop=function(){this.stopped=!0,this.animate.stop()},l.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},l.raf=function(t){var e=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(e),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},l.setScroll=function(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)},l.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},l.scrollTo=function(t,e){var i=void 0===e?{}:e,o=i.offset,n=void 0===o?0:o,r=i.immediate,s=void 0!==r&&r,h=i.duration,l=void 0===h?this.duration:h,a=i.easing,c=void 0===a?this.easing:a;if(null!=t){var u;if("number"==typeof t)u=t;else if("top"===t||"#top"===t)u=0;else if("bottom"===t)u=this.limit;else{var d;if("string"==typeof t)d=document.querySelector(t);else{if(null==t||!t.nodeType)return;d=t}if(!d)return;var p=0;if(this.wrapperNode!==window){var v=this.wrapperNode.getBoundingClientRect();p="horizontal"===this.direction?v.left:v.top}var f=d.getBoundingClientRect();u=("horizontal"===this.direction?f.left:f.top)+this.scroll-p}this.targetScroll=u+=n,!this.smooth||s?this.setScroll(this.targetScroll):this.animate.to(this,{duration:l,easing:c,scroll:this.targetScroll})}},r(s,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),s}(t(e));(()=>{const t=new c({duration:1.5,direction:"vertical",smooth:!0}),e=()=>{t.raf(),requestAnimationFrame(e)};requestAnimationFrame(e)})();
//# sourceMappingURL=index.6b82e2a7.js.map
