(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6965],{17761:function(e,t){"use strict";t.Z=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},63588:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=i.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},49032:function(e,t){!function(e){"use strict";function t(){}function n(e,t,n,r,i){for(var o=0,l=t.length,s=0,a=0;o<l;o++){var u=t[o];if(u.removed){if(u.value=e.join(r.slice(a,a+u.count)),a+=u.count,o&&t[o-1].added){var d=t[o-1];t[o-1]=t[o],t[o]=d}}else{if(!u.added&&i){var f=n.slice(s,s+u.count);f=f.map((function(e,t){var n=r[a+t];return n.length>e.length?n:e})),u.value=e.join(f)}else u.value=e.join(n.slice(s,s+u.count));s+=u.count,u.added||(a+=u.count)}}var c=t[l-1];return l>1&&"string"===typeof c.value&&(c.added||c.removed)&&e.equals("",c.value)&&(t[l-2].value+=c.value,t.pop()),t}function r(e){return{newPos:e.newPos,components:e.components.slice(0)}}t.prototype={diff:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.callback;"function"===typeof i&&(o=i,i={}),this.options=i;var l=this;function s(e){return o?(setTimeout((function(){o(void 0,e)}),0),!0):e}e=this.castInput(e),t=this.castInput(t),e=this.removeEmpty(this.tokenize(e));var a=(t=this.removeEmpty(this.tokenize(t))).length,u=e.length,d=1,f=a+u,c=[{newPos:-1,components:[]}],p=this.extractCommon(c[0],t,e,0);if(c[0].newPos+1>=a&&p+1>=u)return s([{value:this.join(t),count:t.length}]);function h(){for(var i=-1*d;i<=d;i+=2){var o=void 0,f=c[i-1],p=c[i+1],h=(p?p.newPos:0)-i;f&&(c[i-1]=void 0);var g=f&&f.newPos+1<a,v=p&&0<=h&&h<u;if(g||v){if(!g||v&&f.newPos<p.newPos?(o=r(p),l.pushComponent(o.components,void 0,!0)):((o=f).newPos++,l.pushComponent(o.components,!0,void 0)),h=l.extractCommon(o,t,e,i),o.newPos+1>=a&&h+1>=u)return s(n(l,o.components,t,e,l.useLongestToken));c[i]=o}else c[i]=void 0}d++}if(o)!function e(){setTimeout((function(){if(d>f)return o();h()||e()}),0)}();else for(;d<=f;){var g=h();if(g)return g}},pushComponent:function(e,t,n){var r=e[e.length-1];r&&r.added===t&&r.removed===n?e[e.length-1]={count:r.count+1,added:t,removed:n}:e.push({count:1,added:t,removed:n})},extractCommon:function(e,t,n,r){for(var i=t.length,o=n.length,l=e.newPos,s=l-r,a=0;l+1<i&&s+1<o&&this.equals(t[l+1],n[s+1]);)l++,s++,a++;return a&&e.components.push({count:a}),e.newPos=l,s},equals:function(e,t){return this.options.comparator?this.options.comparator(e,t):e===t||this.options.ignoreCase&&e.toLowerCase()===t.toLowerCase()},removeEmpty:function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};var i=new t;function o(e,t,n){return i.diff(e,t,n)}function l(e,t){if("function"===typeof e)t.callback=e;else if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var s=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,a=/\S/,u=new t;function d(e,t,n){return n=l(n,{ignoreWhitespace:!0}),u.diff(e,t,n)}function f(e,t,n){return u.diff(e,t,n)}u.equals=function(e,t){return this.options.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e===t||this.options.ignoreWhitespace&&!a.test(e)&&!a.test(t)},u.tokenize=function(e){for(var t=e.split(/(\s+|[()[\]{}'"]|\b)/),n=0;n<t.length-1;n++)!t[n+1]&&t[n+2]&&s.test(t[n])&&s.test(t[n+2])&&(t[n]+=t[n+2],t.splice(n+1,2),n--);return t};var c=new t;function p(e,t,n){return c.diff(e,t,n)}function h(e,t,n){var r=l(n,{ignoreWhitespace:!0});return c.diff(e,t,r)}c.tokenize=function(e){var t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var r=0;r<n.length;r++){var i=n[r];r%2&&!this.options.newlineIsToken?t[t.length-1]+=i:(this.options.ignoreWhitespace&&(i=i.trim()),t.push(i))}return t};var g=new t;function v(e,t,n){return g.diff(e,t,n)}g.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};var m=new t;function y(e,t,n){return m.diff(e,t,n)}function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e){return k(e)||L(e)||E()}function k(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function L(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance")}m.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};var x=Object.prototype.toString,C=new t;function N(e,t,n){return C.diff(e,t,n)}function S(e,t,n,r,i){var o,l;for(t=t||[],n=n||[],r&&(e=r(i,e)),o=0;o<t.length;o+=1)if(t[o]===e)return n[o];if("[object Array]"===x.call(e)){for(t.push(e),l=new Array(e.length),n.push(l),o=0;o<e.length;o+=1)l[o]=S(e[o],t,n,r,i);return t.pop(),n.pop(),l}if(e&&e.toJSON&&(e=e.toJSON()),"object"===b(e)&&null!==e){t.push(e),l={},n.push(l);var s,a=[];for(s in e)e.hasOwnProperty(s)&&a.push(s);for(a.sort(),o=0;o<a.length;o+=1)l[s=a[o]]=S(e[s],t,n,r,s);t.pop(),n.pop()}else l=e;return l}C.useLongestToken=!0,C.tokenize=c.tokenize,C.castInput=function(e){var t=this.options,n=t.undefinedReplacement,r=t.stringifyReplacer,i=void 0===r?function(e,t){return"undefined"===typeof t?n:t}:r;return"string"===typeof e?e:JSON.stringify(S(e,null,null,i),i,"  ")},C.equals=function(e,n){return t.prototype.equals.call(C,e.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"))};var D=new t;function T(e,t,n){return D.diff(e,t,n)}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.split(/\r\n|[\n\v\f\r\x85]/),r=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],i=[],o=0;function l(){var e={};for(i.push(e);o<n.length;){var r=n[o];if(/^(\-\-\-|\+\+\+|@@)\s/.test(r))break;var l=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);l&&(e.index=l[1]),o++}for(s(e),s(e),e.hunks=[];o<n.length;){var u=n[o];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(u))break;if(/^@@/.test(u))e.hunks.push(a());else{if(u&&t.strict)throw new Error("Unknown line "+(o+1)+" "+JSON.stringify(u));o++}}}function s(e){var t=/^(---|\+\+\+)\s+(.*)$/.exec(n[o]);if(t){var r="---"===t[1]?"old":"new",i=t[2].split("\t",2),l=i[0].replace(/\\\\/g,"\\");/^".*"$/.test(l)&&(l=l.substr(1,l.length-2)),e[r+"FileName"]=l,e[r+"Header"]=(i[1]||"").trim(),o++}}function a(){for(var e=o,i=n[o++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),l={oldStart:+i[1],oldLines:+i[2]||1,newStart:+i[3],newLines:+i[4]||1,lines:[],linedelimiters:[]},s=0,a=0;o<n.length&&!(0===n[o].indexOf("--- ")&&o+2<n.length&&0===n[o+1].indexOf("+++ ")&&0===n[o+2].indexOf("@@"));o++){var u=0==n[o].length&&o!=n.length-1?" ":n[o][0];if("+"!==u&&"-"!==u&&" "!==u&&"\\"!==u)break;l.lines.push(n[o]),l.linedelimiters.push(r[o]||"\n"),"+"===u?s++:"-"===u?a++:" "===u&&(s++,a++)}if(s||1!==l.newLines||(l.newLines=0),a||1!==l.oldLines||(l.oldLines=0),t.strict){if(s!==l.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(a!==l.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return l}for(;o<n.length;)l();return i}function O(e,t,n){var r=!0,i=!1,o=!1,l=1;return function s(){if(r&&!o){if(i?l++:r=!1,e+l<=n)return l;o=!0}if(!i)return o||(r=!0),t<=e-l?-l++:(i=!0,s())}}function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t&&(t=A(t)),Array.isArray(t)){if(t.length>1)throw new Error("applyPatch only works with a single input.");t=t[0]}var r,i,o=e.split(/\r\n|[\n\v\f\r\x85]/),l=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],s=t.hunks,a=n.compareLine||function(e,t,n,r){return t===r},u=0,d=n.fuzzFactor||0,f=0,c=0;function p(e,t){for(var n=0;n<e.lines.length;n++){var r=e.lines[n],i=r.length>0?r[0]:" ",l=r.length>0?r.substr(1):r;if(" "===i||"-"===i){if(!a(t+1,o[t],i,l)&&++u>d)return!1;t++}}return!0}for(var h=0;h<s.length;h++){for(var g=s[h],v=o.length-g.oldLines,m=0,y=c+g.oldStart-1,b=O(y,f,v);void 0!==m;m=b())if(p(g,y+m)){g.offset=c+=m;break}if(void 0===m)return!1;f=g.offset+g.oldStart+g.oldLines}for(var w=0,k=0;k<s.length;k++){var L=s[k],E=L.oldStart+L.offset+w-1;w+=L.newLines-L.oldLines,E<0&&(E=0);for(var x=0;x<L.lines.length;x++){var C=L.lines[x],N=C.length>0?C[0]:" ",S=C.length>0?C.substr(1):C,D=L.linedelimiters[x];if(" "===N)E++;else if("-"===N)o.splice(E,1),l.splice(E,1);else if("+"===N)o.splice(E,0,S),l.splice(E,0,D),E++;else if("\\"===N){var T=L.lines[x-1]?L.lines[x-1][0]:null;"+"===T?r=!0:"-"===T&&(i=!0)}}}if(r)for(;!o[o.length-1];)o.pop(),l.pop();else i&&(o.push(""),l.push("\n"));for(var F=0;F<o.length-1;F++)o[F]=o[F]+l[F];return o.join("")}function B(e,t){"string"===typeof e&&(e=A(e));var n=0;function r(){var i=e[n++];if(!i)return t.complete();t.loadFile(i,(function(e,n){if(e)return t.complete(e);var o=F(n,i,t);t.patched(i,o,(function(e){if(e)return t.complete(e);r()}))}))}r()}function _(e,t,n,r,i,o,l){l||(l={}),"undefined"===typeof l.context&&(l.context=4);var s=p(n,r,l);function a(e){return e.map((function(e){return" "+e}))}s.push({value:"",lines:[]});for(var u=[],d=0,f=0,c=[],h=1,g=1,v=function(e){var t=s[e],i=t.lines||t.value.replace(/\n$/,"").split("\n");if(t.lines=i,t.added||t.removed){var o;if(!d){var p=s[e-1];d=h,f=g,p&&(c=l.context>0?a(p.lines.slice(-l.context)):[],d-=c.length,f-=c.length)}(o=c).push.apply(o,w(i.map((function(e){return(t.added?"+":"-")+e})))),t.added?g+=i.length:h+=i.length}else{if(d)if(i.length<=2*l.context&&e<s.length-2){var v;(v=c).push.apply(v,w(a(i)))}else{var m,y=Math.min(i.length,l.context);(m=c).push.apply(m,w(a(i.slice(0,y))));var b={oldStart:d,oldLines:h-d+y,newStart:f,newLines:g-f+y,lines:c};if(e>=s.length-2&&i.length<=l.context){var k=/\n$/.test(n),L=/\n$/.test(r),E=0==i.length&&c.length>b.oldLines;!k&&E&&c.splice(b.oldLines,0,"\\ No newline at end of file"),(k||E)&&L||c.push("\\ No newline at end of file")}u.push(b),d=0,f=0,c=[]}h+=i.length,g+=i.length}},m=0;m<s.length;m++)v(m);return{oldFileName:e,newFileName:t,oldHeader:i,newHeader:o,hunks:u}}function P(e,t,n,r,i,o,l){var s=_(e,t,n,r,i,o,l),a=[];e==t&&a.push("Index: "+e),a.push("==================================================================="),a.push("--- "+s.oldFileName+("undefined"===typeof s.oldHeader?"":"\t"+s.oldHeader)),a.push("+++ "+s.newFileName+("undefined"===typeof s.newHeader?"":"\t"+s.newHeader));for(var u=0;u<s.hunks.length;u++){var d=s.hunks[u];a.push("@@ -"+d.oldStart+","+d.oldLines+" +"+d.newStart+","+d.newLines+" @@"),a.push.apply(a,d.lines)}return a.join("\n")+"\n"}function R(e,t,n,r,i,o){return P(e,e,t,n,r,i,o)}function j(e,t){return e.length===t.length&&V(e,t)}function V(e,t){if(t.length>e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function G(e){var t=ne(e.lines),n=t.oldLines,r=t.newLines;void 0!==n?e.oldLines=n:delete e.oldLines,void 0!==r?e.newLines=r:delete e.newLines}function I(e,t,n){e=H(e,n),t=H(t,n);var r={};(e.index||t.index)&&(r.index=e.index||t.index),(e.newFileName||t.newFileName)&&(M(e)?M(t)?(r.oldFileName=W(r,e.oldFileName,t.oldFileName),r.newFileName=W(r,e.newFileName,t.newFileName),r.oldHeader=W(r,e.oldHeader,t.oldHeader),r.newHeader=W(r,e.newHeader,t.newHeader)):(r.oldFileName=e.oldFileName,r.newFileName=e.newFileName,r.oldHeader=e.oldHeader,r.newHeader=e.newHeader):(r.oldFileName=t.oldFileName||e.oldFileName,r.newFileName=t.newFileName||e.newFileName,r.oldHeader=t.oldHeader||e.oldHeader,r.newHeader=t.newHeader||e.newHeader)),r.hunks=[];for(var i=0,o=0,l=0,s=0;i<e.hunks.length||o<t.hunks.length;){var a=e.hunks[i]||{oldStart:1/0},u=t.hunks[o]||{oldStart:1/0};if(z(a,u))r.hunks.push(Z(a,l)),i++,s+=a.newLines-a.oldLines;else if(z(u,a))r.hunks.push(Z(u,s)),o++,l+=u.newLines-u.oldLines;else{var d={oldStart:Math.min(a.oldStart,u.oldStart),oldLines:0,newStart:Math.min(a.newStart+l,u.oldStart+s),newLines:0,lines:[]};q(d,a.oldStart,a.lines,u.oldStart,u.lines),o++,i++,r.hunks.push(d)}}return r}function H(e,t){if("string"===typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return A(e)[0];if(!t)throw new Error("Must provide a base reference or pass in a patch");return _(void 0,void 0,t,e)}return e}function M(e){return e.newFileName&&e.newFileName!==e.oldFileName}function W(e,t,n){return t===n?t:(e.conflict=!0,{mine:t,theirs:n})}function z(e,t){return e.oldStart<t.oldStart&&e.oldStart+e.oldLines<t.oldStart}function Z(e,t){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+t,newLines:e.newLines,lines:e.lines}}function q(e,t,n,r,i){var o={offset:t,lines:n,index:0},l={offset:r,lines:i,index:0};for(X(e,o,l),X(e,l,o);o.index<o.lines.length&&l.index<l.lines.length;){var s=o.lines[o.index],a=l.lines[l.index];if("-"!==s[0]&&"+"!==s[0]||"-"!==a[0]&&"+"!==a[0])if("+"===s[0]&&" "===a[0]){var u;(u=e.lines).push.apply(u,w(K(o)))}else if("+"===a[0]&&" "===s[0]){var d;(d=e.lines).push.apply(d,w(K(l)))}else"-"===s[0]&&" "===a[0]?U(e,o,l):"-"===a[0]&&" "===s[0]?U(e,l,o,!0):s===a?(e.lines.push(s),o.index++,l.index++):J(e,K(o),K(l));else $(e,o,l)}Y(e,o),Y(e,l),G(e)}function $(e,t,n){var r=K(t),i=K(n);if(ee(r)&&ee(i)){var o,l;if(V(r,i)&&te(n,r,r.length-i.length))return void(o=e.lines).push.apply(o,w(r));if(V(i,r)&&te(t,i,i.length-r.length))return void(l=e.lines).push.apply(l,w(i))}else if(j(r,i)){var s;return void(s=e.lines).push.apply(s,w(r))}J(e,r,i)}function U(e,t,n,r){var i,o=K(t),l=Q(n,o);l.merged?(i=e.lines).push.apply(i,w(l.merged)):J(e,r?l:o,r?o:l)}function J(e,t,n){e.conflict=!0,e.lines.push({conflict:!0,mine:t,theirs:n})}function X(e,t,n){for(;t.offset<n.offset&&t.index<t.lines.length;){var r=t.lines[t.index++];e.lines.push(r),t.offset++}}function Y(e,t){for(;t.index<t.lines.length;){var n=t.lines[t.index++];e.lines.push(n)}}function K(e){for(var t=[],n=e.lines[e.index][0];e.index<e.lines.length;){var r=e.lines[e.index];if("-"===n&&"+"===r[0]&&(n="+"),n!==r[0])break;t.push(r),e.index++}return t}function Q(e,t){for(var n=[],r=[],i=0,o=!1,l=!1;i<t.length&&e.index<e.lines.length;){var s=e.lines[e.index],a=t[i];if("+"===a[0])break;if(o=o||" "!==s[0],r.push(a),i++,"+"===s[0])for(l=!0;"+"===s[0];)n.push(s),s=e.lines[++e.index];a.substr(1)===s.substr(1)?(n.push(s),e.index++):l=!0}if("+"===(t[i]||"")[0]&&o&&(l=!0),l)return n;for(;i<t.length;)r.push(t[i++]);return{merged:r,changes:n}}function ee(e){return e.reduce((function(e,t){return e&&"-"===t[0]}),!0)}function te(e,t,n){for(var r=0;r<n;r++){var i=t[t.length-n+r].substr(1);if(e.lines[e.index+r]!==" "+i)return!1}return e.index+=n,!0}function ne(e){var t=0,n=0;return e.forEach((function(e){if("string"!==typeof e){var r=ne(e.mine),i=ne(e.theirs);void 0!==t&&(r.oldLines===i.oldLines?t+=r.oldLines:t=void 0),void 0!==n&&(r.newLines===i.newLines?n+=r.newLines:n=void 0)}else void 0===n||"+"!==e[0]&&" "!==e[0]||n++,void 0===t||"-"!==e[0]&&" "!==e[0]||t++})),{oldLines:t,newLines:n}}function re(e){for(var t,n,r=[],i=0;i<e.length;i++)n=(t=e[i]).added?1:t.removed?-1:0,r.push([n,t.value]);return r}function ie(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];r.added?t.push("<ins>"):r.removed&&t.push("<del>"),t.push(oe(r.value)),r.added?t.push("</ins>"):r.removed&&t.push("</del>")}return t.join("")}function oe(e){var t=e;return t=(t=(t=(t=t.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}D.tokenize=function(e){return e.slice()},D.join=D.removeEmpty=function(e){return e},e.Diff=t,e.diffChars=o,e.diffWords=d,e.diffWordsWithSpace=f,e.diffLines=p,e.diffTrimmedLines=h,e.diffSentences=v,e.diffCss=y,e.diffJson=N,e.diffArrays=T,e.structuredPatch=_,e.createTwoFilesPatch=P,e.createPatch=R,e.applyPatch=F,e.applyPatches=B,e.parsePatch=A,e.merge=I,e.convertChangesToDMP=re,e.convertChangesToXML=ie,e.canonicalize=S,Object.defineProperty(e,"__esModule",{value:!0})}(t)},2961:function(e,t,n){"use strict";n.r(t),n.d(t,{cache:function(){return G},css:function(){return j},cx:function(){return F},flush:function(){return A},getRegisteredStyles:function(){return _},hydrate:function(){return O},injectGlobal:function(){return P},keyframes:function(){return R},merge:function(){return B},sheet:function(){return V}});var r=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)===0){var t,n=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var o=105===e.charCodeAt(1)&&64===e.charCodeAt(0);i.insertRule(e,o?0:i.cssRules.length)}catch(l){0}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=n(83065),o="/*|*/";function l(e){e&&s.current.insert(e+"}")}var s={current:null},a=function(e,t,n,r,i,a,u,d,f,c){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return s.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===d)return t+o;break;case 3:switch(d){case 102:case 112:return s.current.insert(n[0]+t),"";default:return t+(0===c?o:"")}case-2:t.split("/*|*/}").forEach(l)}},u=function(e){void 0===e&&(e={});var t,n=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var o=new i.Z(t);var l,u={};l=e.container||document.head;var d,f=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(f,(function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach((function(e){u[e]=!0})),e.parentNode!==l&&l.appendChild(e)})),o.use(e.stylisPlugins)(a),d=function(e,t,n,r){var i=t.name;s.current=n,o(e,t.styles),r&&(c.inserted[i]=!0)};var c={key:n,sheet:new r({key:n,container:l,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:u,registered:{},insert:d};return c};var d=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},f=n(86130),c=n(17761),p=/[A-Z]|^ms/g,h=/_EMO_([^_]+?)_([^]*?)_EMO_/g,g=function(e){return 45===e.charCodeAt(1)},v=function(e){return null!=e&&"boolean"!==typeof e},m=(0,c.Z)((function(e){return g(e)?e:e.replace(p,"-$&").toLowerCase()})),y=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(h,(function(e,t,n){return w={name:t,styles:n,next:w},t}))}return 1===f.Z[e]||g(e)||"number"!==typeof t||0===t?t:t+"px"};function b(e,t,n,r){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return w={name:n.name,styles:n.styles,next:w},n.name;if(void 0!==n.styles){var i=n.next;if(void 0!==i)for(;void 0!==i;)w={name:i.name,styles:i.styles,next:w},i=i.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=b(e,t,n[i],!1);else for(var o in n){var l=n[o];if("object"!==typeof l)null!=t&&void 0!==t[l]?r+=o+"{"+t[l]+"}":v(l)&&(r+=m(o)+":"+y(o,l)+";");else if(!Array.isArray(l)||"string"!==typeof l[0]||null!=t&&void 0!==t[l[0]]){var s=b(e,t,l,!1);switch(o){case"animation":case"animationName":r+=m(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var a=0;a<l.length;a++)v(l[a])&&(r+=m(o)+":"+y(o,l[a])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=w,l=n(e);return w=o,b(e,t,l,r)}}if(null==t)return n;var s=t[n];return void 0===s||r?n:s}var w,k=/label:\s*([^\s;\n{]+)\s*;/g;var L=function(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";w=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,i+=b(n,t,o,!1)):i+=o[0];for(var l=1;l<e.length;l++)i+=b(n,t,e[l],46===i.charCodeAt(i.length-1)),r&&(i+=o[l]);k.lastIndex=0;for(var s,a="";null!==(s=k.exec(i));)a+="-"+s[1];return{name:d(i)+a,styles:i,next:w}};function E(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "})),r}var x=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var i=t;do{e.insert("."+r,i,e.sheet,!0);i=i.next}while(void 0!==i)}};function C(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function N(e,t,n){var r=[],i=E(e,r,n);return r.length<2?n:i+t(r)}var S=function e(t){for(var n="",r=0;r<t.length;r++){var i=t[r];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var l in o="",i)i[l]&&l&&(o&&(o+=" "),o+=l);break;default:o=i}o&&(n&&(n+=" "),n+=o)}}return n},D=function(e){var t=u(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=L(n,t.registered,void 0);return x(t,i,!1),t.key+"-"+i.name};return{css:n,cx:function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return N(t.registered,n,S(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=L(n,t.registered);C(t,i)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=L(n,t.registered),o="animation-"+i.name;return C(t,{name:i.name,styles:"@keyframes "+o+"{"+i.styles+"}"}),o},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:E.bind(null,t.registered),merge:N.bind(null,t.registered,n)}},T=D(),A=T.flush,O=T.hydrate,F=T.cx,B=T.merge,_=T.getRegisteredStyles,P=T.injectGlobal,R=T.keyframes,j=T.css,V=T.sheet,G=T.cache},75177:function(e,t,n){"use strict";n.r(t);var r=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function i(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(i=e[n],o=t[n],!(i===o||r(i)&&r(o)))return!1;var i,o;return!0}t.default=function(e,t){var n;void 0===t&&(t=i);var r,o=[],l=!1;return function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return l&&n===this&&t(i,o)||(r=e.apply(this,i),l=!0,n=this,o=i),r}}},59739:function(e,t,n){"use strict";var r=n(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,l){if(l!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},47329:function(e,t,n){e.exports=n(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77212:function(e,t,n){"use strict";var r=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return l},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var o,l,s=n(49032),a=s;!function(e){e[e.DEFAULT=0]="DEFAULT",e[e.ADDED=1]="ADDED",e[e.REMOVED=2]="REMOVED"}(o=t.DiffType||(t.DiffType={})),function(e){e.CHARS="diffChars",e.WORDS="diffWords",e.WORDS_WITH_SPACE="diffWordsWithSpace",e.LINES="diffLines",e.TRIMMED_LINES="diffTrimmedLines",e.SENTENCES="diffSentences",e.CSS="diffCss"}(l=t.DiffMethod||(t.DiffMethod={}));var u=function(e){var t=e.split("\n");if(t.every((function(e){return!e})))return 2===t.length?[]:(t.pop(),t);var n=t[t.length-1],r=t[0];return n||t.pop(),r||t.shift(),t};t.computeLineInformation=function(e,t,n,r,d){void 0===n&&(n=!1),void 0===r&&(r=l.CHARS),void 0===d&&(d=0);var f=s.diffLines(e.trimRight(),t.trimRight(),{newlineIsToken:!0,ignoreWhitespace:!1,ignoreCase:!1}),c=d,p=d,h=[],g=0,v=[],m=[],y=function(e,t,i,s,d){return u(e).map((function(e,h){var b={},w={};if(!(m.includes(t+"-"+h)||d&&0!==h)){if(i||s)if(v.includes(g)||v.push(g),s){p+=1,b.lineNumber=p,b.type=o.REMOVED,b.value=e||" ";var k=f[t+1];if(k&&k.added)if(u(k.value)[h]){var L=y(k.value,t,!0,!1,!0)[0].right,E=L.value,x=L.lineNumber,C=L.type;if(m.push(t+1+"-"+h),w.lineNumber=x,w.type=C,n)w.value=E;else{var N=function(e,t,n){void 0===n&&(n=l.CHARS);var r=a[n](e,t),i={left:[],right:[]};return r.forEach((function(e){var t=e.added,n=e.removed,r=e.value,l={};return t&&(l.type=o.ADDED,l.value=r,i.right.push(l)),n&&(l.type=o.REMOVED,l.value=r,i.left.push(l)),n||t||(l.type=o.DEFAULT,l.value=r,i.right.push(l),i.left.push(l)),l})),i}(e,E,r);w.value=N.right,b.value=N.left}}}else c+=1,w.lineNumber=c,w.type=o.ADDED,w.value=e;else p+=1,c+=1,b.lineNumber=p,b.type=o.DEFAULT,b.value=e,w.lineNumber=c,w.type=o.DEFAULT,w.value=e;return g+=1,{right:w,left:b}}})).filter(Boolean)};return f.forEach((function(e,t){var n=e.added,r=e.removed,o=e.value;h=i(h,y(o,t,n,r))})),{lineInformation:h,diffLines:v}}},54407:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(82684),o=n(47329),l=n(63588),s=n(77212);t.DiffMethod=s.DiffMethod;var a,u=n(86967),d=n(75177),f=d.default||d;!function(e){e.LEFT="L",e.RIGHT="R"}(a=t.LineNumberPrefix||(t.LineNumberPrefix={}));var c=function(e){function t(t){var n=e.call(this,t)||this;return n.resetCodeBlocks=function(){return n.state.expandedBlocks.length>0&&(n.setState({expandedBlocks:[]}),!0)},n.onBlockExpand=function(e){var t=n.state.expandedBlocks.slice();t.push(e),n.setState({expandedBlocks:t})},n.computeStyles=f(u.default),n.onLineNumberClickProxy=function(e){return n.props.onLineNumberClick?function(t){return n.props.onLineNumberClick(e,t)}:function(){}},n.renderWordDiff=function(e,t){return e.map((function(e,r){var o;return i.createElement("span",{key:r,className:l.default(n.styles.wordDiff,(o={},o[n.styles.wordAdded]=e.type===s.DiffType.ADDED,o[n.styles.wordRemoved]=e.type===s.DiffType.REMOVED,o))},t?t(e.value):e.value)}))},n.renderLine=function(e,t,r,o,a,u){var d,f,c,p,h,g=r+"-"+e,v=u+"-"+a,m=n.props.highlightLines.includes(g)||n.props.highlightLines.includes(v),y=t===s.DiffType.ADDED,b=t===s.DiffType.REMOVED;return h=Array.isArray(o)?n.renderWordDiff(o,n.props.renderContent):n.props.renderContent?n.props.renderContent(o):o,i.createElement(i.Fragment,null,!n.props.hideLineNumbers&&i.createElement("td",{onClick:e&&n.onLineNumberClickProxy(g),className:l.default(n.styles.gutter,(d={},d[n.styles.emptyGutter]=!e,d[n.styles.diffAdded]=y,d[n.styles.diffRemoved]=b,d[n.styles.highlightedGutter]=m,d))},i.createElement("pre",{className:n.styles.lineNumber},e)),!n.props.splitView&&!n.props.hideLineNumbers&&i.createElement("td",{onClick:a&&n.onLineNumberClickProxy(v),className:l.default(n.styles.gutter,(f={},f[n.styles.emptyGutter]=!a,f[n.styles.diffAdded]=y,f[n.styles.diffRemoved]=b,f[n.styles.highlightedGutter]=m,f))},i.createElement("pre",{className:n.styles.lineNumber},a)),i.createElement("td",{className:l.default(n.styles.marker,(c={},c[n.styles.emptyLine]=!h,c[n.styles.diffAdded]=y,c[n.styles.diffRemoved]=b,c[n.styles.highlightedLine]=m,c))},i.createElement("pre",null,y&&"+",b&&"-")),i.createElement("td",{className:l.default(n.styles.content,(p={},p[n.styles.emptyLine]=!h,p[n.styles.diffAdded]=y,p[n.styles.diffRemoved]=b,p[n.styles.highlightedLine]=m,p))},i.createElement("pre",{className:n.styles.contentText},h)))},n.renderSplitView=function(e,t){var r=e.left,o=e.right;return i.createElement("tr",{key:t,className:n.styles.line},n.renderLine(r.lineNumber,r.type,a.LEFT,r.value),n.renderLine(o.lineNumber,o.type,a.RIGHT,o.value))},n.renderInlineView=function(e,t){var r,o=e.left,l=e.right;return o.type===s.DiffType.REMOVED&&l.type===s.DiffType.ADDED?i.createElement(i.Fragment,{key:t},i.createElement("tr",{className:n.styles.line},n.renderLine(o.lineNumber,o.type,a.LEFT,o.value,null)),i.createElement("tr",{className:n.styles.line},n.renderLine(null,l.type,a.RIGHT,l.value,l.lineNumber))):(o.type===s.DiffType.REMOVED&&(r=n.renderLine(o.lineNumber,o.type,a.LEFT,o.value,null)),o.type===s.DiffType.DEFAULT&&(r=n.renderLine(o.lineNumber,o.type,a.LEFT,o.value,l.lineNumber,a.RIGHT)),l.type===s.DiffType.ADDED&&(r=n.renderLine(null,l.type,a.RIGHT,l.value,l.lineNumber)),i.createElement("tr",{key:t,className:n.styles.line},r))},n.onBlockClickProxy=function(e){return function(){return n.onBlockExpand(e)}},n.renderSkippedLineIndicator=function(e,t,r,o){var s,a=n.props,u=a.hideLineNumbers,d=a.splitView,f=n.props.codeFoldMessageRenderer?n.props.codeFoldMessageRenderer(e,r,o):i.createElement("pre",{className:n.styles.codeFoldContent},"Expand ",e," lines ..."),c=i.createElement("td",null,i.createElement("a",{onClick:n.onBlockClickProxy(t),tabIndex:0},f)),p=!d&&!u;return i.createElement("tr",{key:r+"-"+o,className:n.styles.codeFold},!u&&i.createElement("td",{className:n.styles.codeFoldGutter}),i.createElement("td",{className:l.default((s={},s[n.styles.codeFoldGutter]=p,s))}),p?i.createElement(i.Fragment,null,i.createElement("td",null),c):i.createElement(i.Fragment,null,c,i.createElement("td",null)),i.createElement("td",null),i.createElement("td",null))},n.renderDiff=function(){var e=n.props,t=e.oldValue,r=e.newValue,o=e.splitView,l=e.disableWordDiff,a=e.compareMethod,u=e.linesOffset,d=s.computeLineInformation(t,r,l,a,u),f=d.lineInformation,c=d.diffLines,p=n.props.extraLinesSurroundingDiff<0?0:n.props.extraLinesSurroundingDiff,h=[];return f.map((function(e,t){var r=c[0],l=r-t;if(n.props.showDiffOnly&&(l===-p&&(h=[],c.shift()),e.left.type===s.DiffType.DEFAULT&&(l>p||"undefined"===typeof r)&&!n.state.expandedBlocks.includes(r)))return h.push(t+1),t===f.length-1&&h.length>1?n.renderSkippedLineIndicator(h.length,r,e.left.lineNumber,e.right.lineNumber):null;var a=o?n.renderSplitView(e,t):n.renderInlineView(e,t);if(l===p&&h.length>0){var u=h.length;return h=[],i.createElement(i.Fragment,{key:t},n.renderSkippedLineIndicator(u,r,e.left.lineNumber,e.right.lineNumber),a)}return a}))},n.render=function(){var e,t=n.props,r=t.oldValue,o=t.newValue,s=t.useDarkTheme,a=t.leftTitle,u=t.rightTitle,d=t.splitView,f=t.hideLineNumbers;if("string"!==typeof r||"string"!==typeof o)throw Error('"oldValue" and "newValue" should be strings');n.styles=n.computeStyles(n.props.styles,s);var c=n.renderDiff(),p=f?2:3,h=f?2:4,g=(a||u)&&i.createElement("tr",null,i.createElement("td",{colSpan:d?p:h,className:n.styles.titleBlock},i.createElement("pre",{className:n.styles.contentText},a)),d&&i.createElement("td",{colSpan:p,className:n.styles.titleBlock},i.createElement("pre",{className:n.styles.contentText},u)));return i.createElement("table",{className:l.default(n.styles.diffContainer,(e={},e[n.styles.splitView]=d,e))},i.createElement("tbody",null,g,c))},n.state={expandedBlocks:[]},n}return r(t,e),t.defaultProps={oldValue:"",newValue:"",splitView:!0,highlightLines:[],disableWordDiff:!1,compareMethod:s.DiffMethod.CHARS,styles:{},hideLineNumbers:!1,extraLinesSurroundingDiff:3,showDiffOnly:!0,useDarkTheme:!1,linesOffset:0},t.propTypes={oldValue:o.string.isRequired,newValue:o.string.isRequired,splitView:o.bool,disableWordDiff:o.bool,compareMethod:o.oneOf(Object.values(s.DiffMethod)),renderContent:o.func,onLineNumberClick:o.func,extraLinesSurroundingDiff:o.number,styles:o.object,hideLineNumbers:o.bool,showDiffOnly:o.bool,highlightLines:o.arrayOf(o.string),leftTitle:o.oneOfType([o.string,o.element]),rightTitle:o.oneOfType([o.string,o.element]),linesOffset:o.number},t}(i.Component);t.default=c},86967:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2961);t.default=function(e,t){var n,l,s,a,u,d,f;void 0===t&&(t=!1);var c=e.variables,p=void 0===c?{}:c,h=i(e,["variables"]),g={light:r({diffViewerBackground:"#fff",diffViewerColor:"212529",addedBackground:"#e6ffed",addedColor:"#24292e",removedBackground:"#ffeef0",removedColor:"#24292e",wordAddedBackground:"#acf2bd",wordRemovedBackground:"#fdb8c0",addedGutterBackground:"#cdffd8",removedGutterBackground:"#ffdce0",gutterBackground:"#f7f7f7",gutterBackgroundDark:"#f3f1f1",highlightBackground:"#fffbdd",highlightGutterBackground:"#fff5b1",codeFoldGutterBackground:"#dbedff",codeFoldBackground:"#f1f8ff",emptyLineBackground:"#fafbfc",gutterColor:"#212529",addedGutterColor:"#212529",removedGutterColor:"#212529",codeFoldContentColor:"#212529",diffViewerTitleBackground:"#fafbfc",diffViewerTitleColor:"#212529",diffViewerTitleBorderColor:"#eee"},p.light||{}),dark:r({diffViewerBackground:"#2e303c",diffViewerColor:"#FFF",addedBackground:"#044B53",addedColor:"white",removedBackground:"#632F34",removedColor:"white",wordAddedBackground:"#055d67",wordRemovedBackground:"#7d383f",addedGutterBackground:"#034148",removedGutterBackground:"#632b30",gutterBackground:"#2c2f3a",gutterBackgroundDark:"#262933",highlightBackground:"#2a3967",highlightGutterBackground:"#2d4077",codeFoldGutterBackground:"#21232b",codeFoldBackground:"#262831",emptyLineBackground:"#363946",gutterColor:"#464c67",addedGutterColor:"#8c8c8c",removedGutterColor:"#8c8c8c",codeFoldContentColor:"#555a7b",diffViewerTitleBackground:"#2f323e",diffViewerTitleColor:"#555a7b",diffViewerTitleBorderColor:"#353846"},p.dark||{})},v=t?g.dark:g.light,m=o.css({width:"100%",label:"content"}),y=o.css(((n={})["."+m]={width:"50%"},n.label="split-view",n)),b=o.css({width:"100%",background:v.diffViewerBackground,pre:{margin:0,whiteSpace:"pre-wrap",lineHeight:"25px"},label:"diff-container",borderCollapse:"collapse"}),w=o.css({color:v.codeFoldContentColor,label:"code-fold-content"}),k=o.css({color:v.diffViewerColor,label:"content-text"}),L=o.css(((l={background:v.diffViewerTitleBackground,padding:10,borderBottom:"1px solid "+v.diffViewerTitleBorderColor,label:"title-block",":last-child":{borderLeft:"1px solid "+v.diffViewerTitleBorderColor}})["."+k]={color:v.diffViewerTitleColor},l)),E=o.css({color:v.gutterColor,label:"line-number"}),x=o.css(((s={background:v.removedBackground,color:v.removedColor,pre:{color:v.removedColor}})["."+E]={color:v.removedGutterColor},s.label="diff-removed",s)),C=o.css(((a={background:v.addedBackground,color:v.addedColor,pre:{color:v.addedColor}})["."+E]={color:v.addedGutterColor},a.label="diff-added",a)),N=o.css({padding:2,display:"inline-flex",borderRadius:1,label:"word-diff"}),S=o.css({background:v.wordAddedBackground,label:"word-added"}),D=o.css({background:v.wordRemovedBackground,label:"word-removed"}),T=o.css({backgroundColor:v.codeFoldGutterBackground,label:"code-fold-gutter"}),A=o.css({backgroundColor:v.codeFoldBackground,height:40,fontSize:14,fontWeight:700,label:"code-fold",a:{textDecoration:"underline !important",cursor:"pointer",pre:{display:"inline"}}}),O=o.css({backgroundColor:v.emptyLineBackground,label:"empty-line"}),F=o.css(((u={width:25,paddingLeft:10,paddingRight:10,userSelect:"none",label:"marker"})["&."+C]={pre:{color:v.addedColor}},u["&."+x]={pre:{color:v.removedColor}},u)),B=o.css(((d={background:v.highlightBackground,label:"highlighted-line"})["."+S+", ."+D]={backgroundColor:"initial"},d)),_=o.css({label:"highlighted-gutter"}),P=o.css(((f={userSelect:"none",minWidth:50,padding:"0 10px",label:"gutter",textAlign:"right",background:v.gutterBackground,"&:hover":{cursor:"pointer",background:v.gutterBackgroundDark,pre:{opacity:1}},pre:{opacity:.5}})["&."+C]={background:v.addedGutterBackground},f["&."+x]={background:v.removedGutterBackground},f["&."+_]={background:v.highlightGutterBackground,"&:hover":{background:v.highlightGutterBackground}},f)),R=o.css({"&:hover":{background:v.gutterBackground,cursor:"initial"},label:"empty-gutter"}),j={diffContainer:b,diffRemoved:x,diffAdded:C,splitView:y,marker:F,highlightedGutter:_,highlightedLine:B,gutter:P,line:o.css({verticalAlign:"baseline",label:"line"}),wordDiff:N,wordAdded:S,wordRemoved:D,codeFoldGutter:T,codeFold:A,emptyGutter:R,emptyLine:O,lineNumber:E,contentText:k,content:m,codeFoldContent:w,titleBlock:L},V=Object.keys(h).reduce((function(e,t){var n;return r({},e,((n={})[t]=o.css(h[t]),n))}),{});return Object.keys(j).reduce((function(e,t){var n;return r({},e,((n={})[t]=V[t]?o.cx(j[t],V[t]):j[t],n))}),{})}},80022:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},15544:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},13692:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(61049);function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}},93189:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(12539),i=n(80022);function o(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}},61049:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{Z:function(){return r}})}}]);