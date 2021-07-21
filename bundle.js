var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,a=!1;function c(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function l(t,e){a?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const s=c(1,r+1,t=>e[n[t]].claim_order,e[t].claim_order)-1;i[t]=n[s]+1;const o=s+1;n[o]=t,r=Math.max(o,r)}const s=[],o=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=i[t-1]){for(s.push(e[t-1]);a>=t;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((t,e)=>t.claim_order-e.claim_order);for(let e=0,n=0;e<o.length;e++){for(;n<s.length&&o[e].claim_order>=s[n].claim_order;)n++;const i=n<s.length?s[n]:null;t.insertBefore(o[e],i)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function f(t,e,n){a&&!n?l(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){t.value=null==e?"":e}function g(t){o=t}function m(t){(function(){if(!o)throw new Error("Function called outside component initialization");return o})().$$.on_mount.push(t)}const v=[],k=[],b=[],w=[],y=Promise.resolve();let M=!1;function B(t){b.push(t)}let $=!1;const x=new Set;function A(){if(!$){$=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];g(e),N(e.$$)}for(g(null),v.length=0;k.length;)k.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];x.has(e)||(x.add(e),e())}b.length=0}while(v.length);for(;w.length;)w.pop()();M=!1,$=!1,x.clear()}}function N(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const E=new Set;let O;function L(t,e){t&&t.i&&(E.delete(t),t.i(e))}function C(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),O.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function S(t,n,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:f}=t.$$;a&&a.m(n,s),o||B(()=>{const n=c.map(e).filter(r);l?l.push(...n):i(n),t.$$.on_mount=[]}),f.forEach(B)}function T(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(v.push(t),M||(M=!0,y.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,r,s,c,l,f,h=[-1]){const d=o;g(e);const _=e.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let p=!1;if(_.ctx=s?s(e,r.props||{},(t,n,...i)=>{const r=i.length?i[0]:n;return _.ctx&&l(_.ctx[t],_.ctx[t]=r)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](r),p&&z(e,t)),n}):[],_.update(),p=!0,i(_.before_update),_.fragment=!!c&&c(_.ctx),r.target){if(r.hydrate){a=!0;const t=(m=r.target,Array.from(m.childNodes));_.fragment&&_.fragment.l(t),t.forEach(u)}else _.fragment&&_.fragment.c();r.intro&&L(e.$$.fragment),S(e,r.target,r.anchor,r.customElement),a=!1,A()}var m;g(d)}class I{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var j,q=(function(t,e){t.exports=function(){var t=function(){},e=Object.prototype.hasOwnProperty,n=Array.prototype.slice;function i(t,i,r){var s,o;r=n.call(arguments,2);for(var a=0,c=r.length;a<c;a++)for(s in o=r[a])t&&!e.call(o,s)||(i[s]=o[s])}var r=function(e,n,r,s){var o=this;return"string"!=typeof e&&(s=r,r=n,n=e,e=null),"function"!=typeof n&&(s=r,r=n,n=function(){return o.apply(this,arguments)}),i(!1,n,o,s),n.prototype=function(e,n){var r;return"function"==typeof Object.create?r=Object.create(e):(t.prototype=e,r=new t,t.prototype=null),n&&i(!0,r,n),r}(o.prototype,r),n.prototype.constructor=n,n.class_=e||o.class_,n.super_=o,n};function s(){}s.class_="Nevis",s.super_=Object,s.extend=r;var o=s,a=o.extend(function(t,e,n){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(n)},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,n=e.padding||0,i=Math.floor((e.size-2*n)/t.width);return Math.max(1,i)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),c=a.extend({draw:function(t){var e,n,i=this.qrious,r=this.getModuleSize(t),s=parseInt((this.element.width-t.width*r)/2),o=this.element.getContext("2d");for(o.fillStyle=i.foreground,o.globalAlpha=i.foregroundAlpha,e=0;e<t.width;e++)for(n=0;n<t.width;n++)t.buffer[n*t.width+e]&&o.fillRect(r*e+s,r*n+s,r,r)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),n=t.size;e.lineWidth=1,e.clearRect(0,0,n,n),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,n,n)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),l=o.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),f=o.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),u=o.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),h=o.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),d=o.extend(function(t){var e,n,i,r,s,o=t.value.length;for(this._badness=[],this._level=f.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,i=4*(this._level-1)+16*(this._version-1),r=f.BLOCKS[i++],s=f.BLOCKS[i++],e=f.BLOCKS[i++],n=f.BLOCKS[i],i=e*(r+s)+s-3+(this._version<=9),!(o<=i)););this._dataBlock=e,this._eccBlock=n,this._neccBlock1=r,this._neccBlock2=s;var a=this.width=17+4*this._version;this.buffer=d._createArray(a*a),this._ecc=d._createArray(e+(e+n)*(r+s)+s),this._mask=d._createArray((a*(a+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+a*(a-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(o),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var n,i=this.buffer,r=this.width;for(i[t+r*e]=1,n=-2;n<2;n++)i[t+n+r*(e-2)]=1,i[t-2+r*(e+n+1)]=1,i[t+2+r*(e+n)]=1,i[t+n+1+r*(e+2)]=1;for(n=0;n<2;n++)this._setMask(t-1,e+n),this._setMask(t+1,e-n),this._setMask(t-n,e-1),this._setMask(t+n,e+1)},_appendData:function(t,e,n,i){var r,s,o,a=this._polynomial,c=this._stringBuffer;for(s=0;s<i;s++)c[n+s]=0;for(s=0;s<e;s++){if(255!==(r=u.LOG[c[t+s]^c[n]]))for(o=1;o<i;o++)c[n+o-1]=c[n+o]^u.EXPONENT[d._modN(r+a[i-o])];else for(o=n;o<n+i;o++)c[o]=c[o+1];c[n+i-1]=255===r?0:u.EXPONENT[d._modN(r+a[0])]}},_appendEccToData:function(){var t,e=0,n=this._dataBlock,i=this._calculateMaxLength(),r=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,n,i,r),e+=n,i+=r;for(t=0;t<this._neccBlock2;t++)this._appendData(e,n+1,i,r),e+=n+1,i+=r},_applyMask:function(t){var e,n,i,r,s=this.buffer,o=this.width;switch(t){case 0:for(r=0;r<o;r++)for(i=0;i<o;i++)i+r&1||this._isMasked(i,r)||(s[i+r*o]^=1);break;case 1:for(r=0;r<o;r++)for(i=0;i<o;i++)1&r||this._isMasked(i,r)||(s[i+r*o]^=1);break;case 2:for(r=0;r<o;r++)for(e=0,i=0;i<o;i++,e++)3===e&&(e=0),e||this._isMasked(i,r)||(s[i+r*o]^=1);break;case 3:for(n=0,r=0;r<o;r++,n++)for(3===n&&(n=0),e=n,i=0;i<o;i++,e++)3===e&&(e=0),e||this._isMasked(i,r)||(s[i+r*o]^=1);break;case 4:for(r=0;r<o;r++)for(e=0,n=r>>1&1,i=0;i<o;i++,e++)3===e&&(e=0,n=!n),n||this._isMasked(i,r)||(s[i+r*o]^=1);break;case 5:for(n=0,r=0;r<o;r++,n++)for(3===n&&(n=0),e=0,i=0;i<o;i++,e++)3===e&&(e=0),(i&r&1)+!(!e|!n)||this._isMasked(i,r)||(s[i+r*o]^=1);break;case 6:for(n=0,r=0;r<o;r++,n++)for(3===n&&(n=0),e=0,i=0;i<o;i++,e++)3===e&&(e=0),(i&r&1)+(e&&e===n)&1||this._isMasked(i,r)||(s[i+r*o]^=1);break;case 7:for(n=0,r=0;r<o;r++,n++)for(3===n&&(n=0),e=0,i=0;i<o;i++,e++)3===e&&(e=0),(e&&e===n)+(i+r&1)&1||this._isMasked(i,r)||(s[i+r*o]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,n=this._eccBlock,i=this._polynomial;for(i[0]=1,t=0;t<n;t++){for(i[t+1]=1,e=t;e>0;e--)i[e]=i[e]?i[e-1]^u.EXPONENT[d._modN(u.LOG[i[e]]+t)]:i[e-1];i[0]=u.EXPONENT[d._modN(u.LOG[i[0]]+t)]}for(t=0;t<=n;t++)i[t]=u.LOG[i[t]]},_checkBadness:function(){var t,e,n,i,r,s=0,o=this._badness,a=this.buffer,c=this.width;for(r=0;r<c-1;r++)for(i=0;i<c-1;i++)(a[i+c*r]&&a[i+1+c*r]&&a[i+c*(r+1)]&&a[i+1+c*(r+1)]||!(a[i+c*r]||a[i+1+c*r]||a[i+c*(r+1)]||a[i+1+c*(r+1)]))&&(s+=d.N2);var l=0;for(r=0;r<c;r++){for(n=0,o[0]=0,t=0,i=0;i<c;i++)e=a[i+c*r],t===e?o[n]++:o[++n]=1,l+=(t=e)?1:-1;s+=this._getBadness(n)}l<0&&(l=-l);var f=0,u=l;for(u+=u<<2,u<<=1;u>c*c;)u-=c*c,f++;for(s+=f*d.N4,i=0;i<c;i++){for(n=0,o[0]=0,t=0,r=0;r<c;r++)e=a[i+c*r],t===e?o[n]++:o[++n]=1,t=e;s+=this._getBadness(n)}return s},_convertBitStream:function(t){var e,n,i=this._ecc,r=this._version;for(n=0;n<t;n++)i[n]=this._value.charCodeAt(n);var s=this._stringBuffer=i.slice(),o=this._calculateMaxLength();t>=o-2&&(t=o-2,r>9&&t--);var a=t;if(r>9){for(s[a+2]=0,s[a+3]=0;a--;)e=s[a],s[a+3]|=255&e<<4,s[a+2]=e>>4;s[2]|=255&t<<4,s[1]=t>>4,s[0]=64|t>>12}else{for(s[a+1]=0,s[a+2]=0;a--;)e=s[a],s[a+2]|=255&e<<4,s[a+1]=e>>4;s[1]|=255&t<<4,s[0]=64|t>>4}for(a=t+3-(r<10);a<o;)s[a++]=236,s[a++]=17},_getBadness:function(t){var e,n=0,i=this._badness;for(e=0;e<=t;e++)i[e]>=5&&(n+=d.N1+i[e]-5);for(e=3;e<t-1;e+=2)i[e-2]===i[e+2]&&i[e+2]===i[e-1]&&i[e-1]===i[e+1]&&3*i[e-1]===i[e]&&(0===i[e-3]||e+3>t||3*i[e-3]>=4*i[e]||3*i[e+3]>=4*i[e])&&(n+=d.N3);return n},_finish:function(){var t,e;this._stringBuffer=this.buffer.slice();var n=0,i=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<i&&(i=t,n=e),7!==n);e++)this.buffer=this._stringBuffer.slice();n!==e&&this._applyMask(n),i=f.FINAL_FORMAT[n+(this._level-1<<3)];var r=this.buffer,s=this.width;for(e=0;e<8;e++,i>>=1)1&i&&(r[s-1-e+8*s]=1,e<6?r[8+s*e]=1:r[8+s*(e+1)]=1);for(e=0;e<7;e++,i>>=1)1&i&&(r[8+s*(s-7+e)]=1,e?r[6-e+8*s]=1:r[7+8*s]=1)},_interleaveBlocks:function(){var t,e,n=this._dataBlock,i=this._ecc,r=this._eccBlock,s=0,o=this._calculateMaxLength(),a=this._neccBlock1,c=this._neccBlock2,l=this._stringBuffer;for(t=0;t<n;t++){for(e=0;e<a;e++)i[s++]=l[t+e*n];for(e=0;e<c;e++)i[s++]=l[a*n+t+e*(n+1)]}for(e=0;e<c;e++)i[s++]=l[a*n+t+e*(n+1)];for(t=0;t<r;t++)for(e=0;e<a+c;e++)i[s++]=l[o+t+e*r];this._stringBuffer=i},_insertAlignments:function(){var t,e,n,i=this._version,r=this.width;if(i>1)for(t=l.BLOCK[i],n=r-7;;){for(e=r-7;e>t-3&&(this._addAlignment(e,n),!(e<t));)e-=t;if(n<=t+9)break;n-=t,this._addAlignment(6,n),this._addAlignment(n,6)}},_insertFinders:function(){var t,e,n,i,r=this.buffer,s=this.width;for(t=0;t<3;t++){for(e=0,i=0,1===t&&(e=s-7),2===t&&(i=s-7),r[i+3+s*(e+3)]=1,n=0;n<6;n++)r[i+n+s*e]=1,r[i+s*(e+n+1)]=1,r[i+6+s*(e+n)]=1,r[i+n+1+s*(e+6)]=1;for(n=1;n<5;n++)this._setMask(i+n,e+1),this._setMask(i+1,e+n+1),this._setMask(i+5,e+n),this._setMask(i+n+1,e+5);for(n=2;n<4;n++)r[i+n+s*(e+2)]=1,r[i+2+s*(e+n+1)]=1,r[i+4+s*(e+n)]=1,r[i+n+1+s*(e+4)]=1}},_insertTimingGap:function(){var t,e,n=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(n-8,e),this._setMask(7,e+n-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+n-8,7),this._setMask(t,n-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,n=this.width;for(t=0;t<n-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*n]=1,e[6+n*(8+t)]=1)},_insertVersion:function(){var t,e,n,i,r=this.buffer,s=this._version,o=this.width;if(s>6)for(t=h.BLOCK[s-7],e=17,n=0;n<6;n++)for(i=0;i<3;i++,e--)1&(e>11?s>>e-12:t>>e)?(r[5-n+o*(2-i+o-11)]=1,r[2-i+o-11+o*(5-n)]=1):(this._setMask(5-n,2-i+o-11),this._setMask(2-i+o-11,5-n))},_isMasked:function(t,e){var n=d._getMaskBit(t,e);return 1===this._mask[n]},_pack:function(){var t,e,n,i=1,r=1,s=this.width,o=s-1,a=s-1,c=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<c;e++)for(t=this._stringBuffer[e],n=0;n<8;n++,t<<=1){128&t&&(this.buffer[o+s*a]=1);do{r?o--:(o++,i?0!==a?a--:(i=!i,6==(o-=2)&&(o--,a=9)):a!==s-1?a++:(i=!i,6==(o-=2)&&(o--,a-=8))),r=!r}while(this._isMasked(o,a))}},_reverseMask:function(){var t,e,n=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+n-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+n-7)},_setMask:function(t,e){var n=d._getMaskBit(t,e);this._mask[n]=1},_syncMask:function(){var t,e,n=this.width;for(e=0;e<n;e++)for(t=0;t<=e;t++)this.buffer[t+n*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,n=[];for(e=0;e<t;e++)n[e]=0;return n},_getMaskBit:function(t,e){var n;return t>e&&(n=t,t=e,e=n),n=e,n+=e*e,n>>=1,n+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10}),_=d,p=a.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),g=o.extend(function(t,e,n,i){this.name=t,this.modifiable=Boolean(e),this.defaultValue=n,this._valueTransformer=i},{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}}),m=o.extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}}),v=o.extend(function(t){this.options={},t.forEach(function(t){this.options[t.name]=t},this)},{exists:function(t){return null!=this.options[t]},get:function(t,e){return v._get(this.options[t],e)},getAll:function(t){var e,n=this.options,i={};for(e in n)m.hasOwn(n,e)&&(i[e]=v._get(n[e],t));return i},init:function(t,e,n){var i,r;for(i in"function"!=typeof n&&(n=m.noop),this.options)m.hasOwn(this.options,i)&&(r=this.options[i],v._set(r,r.defaultValue,e),v._createAccessor(r,e,n));this._setAll(t,e,!0)},set:function(t,e,n){return this._set(t,e,n)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,n,i){var r=this.options[t];if(!r)throw new Error("Invalid option: "+t);if(!r.modifiable&&!i)throw new Error("Option cannot be modified: "+t);return v._set(r,e,n)},_setAll:function(t,e,n){if(!t)return!1;var i,r=!1;for(i in t)m.hasOwn(t,i)&&this._set(i,t[i],e,n)&&(r=!0);return r}},{_createAccessor:function(t,e,n){var i={get:function(){return v._get(t,e)}};t.modifiable&&(i.set=function(i){v._set(t,i,e)&&n(i,t)}),Object.defineProperty(e,t.name,i)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,n){var i="_"+t.name,r=n[i],s=t.transform(null!=e?e:t.defaultValue);return n[i]=s,s!==r}}),k=v,b=o.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),w=new k([new g("background",!0,"white"),new g("backgroundAlpha",!0,1,m.abs),new g("element"),new g("foreground",!0,"black"),new g("foregroundAlpha",!0,1,m.abs),new g("level",!0,"L",m.toUpperCase),new g("mime",!0,"image/png"),new g("padding",!0,null,m.abs),new g("size",!0,100,m.abs),new g("value",!0,"")]),y=new b,M=o.extend(function(t){w.init(t,this,this.update.bind(this));var e=w.get("element",this),n=y.getService("element"),i=e&&n.isCanvas(e)?e:n.createCanvas(),r=e&&n.isImage(e)?e:n.createImage();this._canvasRenderer=new c(this,i,!0),this._imageRenderer=new p(this,r,r===e),this.update()},{get:function(){return w.getAll(this)},set:function(t){w.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new _({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){y.setService(t.getName(),t)}});Object.defineProperties(M.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var B=M,$=o.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}});return B.use(new $),B}()}(j={exports:{}},j.exports),j.exports);function P(e){let n,i;return{c(){(n=h("img")).src!==(i=e[2])&&_(n,"src",i),_(n,"alt",e[0]),_(n,"class",e[1])},m(t,e){f(t,n,e)},p(t,[e]){4&e&&n.src!==(i=t[2])&&_(n,"src",i),1&e&&_(n,"alt",t[0]),2&e&&_(n,"class",t[1])},i:t,o:t,d(t){t&&u(n)}}}function D(t,e,n){const i=new q;let{errorCorrection:r="L"}=e,{background:s="#fff"}=e,{color:o="#000"}=e,{size:a="200"}=e,{value:c=""}=e,{padding:l=0}=e,{className:f="qrcode"}=e,u="";function h(){i.set({background:s,foreground:o,level:r,padding:l,size:a,value:c}),n(2,u=i.toDataURL("image/jpeg"))}return m(()=>{h()}),t.$$set=(t=>{"errorCorrection"in t&&n(3,r=t.errorCorrection),"background"in t&&n(4,s=t.background),"color"in t&&n(5,o=t.color),"size"in t&&n(6,a=t.size),"value"in t&&n(0,c=t.value),"padding"in t&&n(7,l=t.padding),"className"in t&&n(1,f=t.className)}),t.$$.update=(()=>{1&t.$$.dirty&&c&&h()}),[c,f,u,r,s,o,a,l]}class K extends I{constructor(t){super(),R(this,t,D,P,s,{errorCorrection:3,background:4,color:5,size:6,value:0,padding:7,className:1})}}function G(t){let e,n;return e=new K({props:{value:t[0]}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,i){S(e,t,i),n=!0},p(t,n){const i={};1&n&&(i.value=t[0]),e.$set(i)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function F(t){let e,n,r,s,o,a,c,g,m,v,k,b=t[0].length>0&&G(t);return{c(){(e=h("h1")).textContent="QR Code Generator",n=d(),r=h("main"),s=h("textarea"),o=d(),a=h("div"),b&&b.c(),c=d(),(g=h("footer")).innerHTML='<a href="https://svelte.dev/">Svelte</a> app using <a href="https://www.npmjs.com/package/svelte-qrcode">svelte-qrcode</a> by <a href="https://z720.net">z720</a>',_(e,"class","svelte-1nmurwg"),_(s,"class","svelte-1nmurwg"),_(a,"class","code svelte-1nmurwg"),_(r,"class","svelte-1nmurwg"),_(g,"class","svelte-1nmurwg")},m(i,u){var h,d,_,w;f(i,e,u),f(i,n,u),f(i,r,u),l(r,s),p(s,t[0]),l(r,o),l(r,a),b&&b.m(a,null),f(i,c,u),f(i,g,u),m=!0,v||(h=s,d="input",_=t[1],h.addEventListener(d,_,w),k=(()=>h.removeEventListener(d,_,w)),v=!0)},p(t,[e]){1&e&&p(s,t[0]),t[0].length>0?b?(b.p(t,e),1&e&&L(b,1)):((b=G(t)).c(),L(b,1),b.m(a,null)):b&&(O={r:0,c:[],p:O},C(b,1,1,()=>{b=null}),O.r||i(O.c),O=O.p)},i(t){m||(L(b),m=!0)},o(t){C(b),m=!1},d(t){t&&u(e),t&&u(n),t&&u(r),b&&b.d(),t&&u(c),t&&u(g),v=!1,k()}}}function U(t,e,n){let i="";return[i,function(){i=this.value,n(0,i)}]}return new class extends I{constructor(t){super(),R(this,t,U,F,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
