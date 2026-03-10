(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))A(b);new MutationObserver(b=>{for(const S of b)if(S.type==="childList")for(const P of S.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&A(P)}).observe(document,{childList:!0,subtree:!0});function l(b){const S={};return b.integrity&&(S.integrity=b.integrity),b.referrerPolicy&&(S.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?S.credentials="include":b.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function A(b){if(b.ep)return;b.ep=!0;const S=l(b);fetch(b.href,S)}})();var Zn={exports:{}},Ut={},es={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function mm(){if(ed)return oe;ed=1;var s=Symbol.for("react.element"),v=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),P=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),O=Symbol.iterator;function F(f){return f===null||typeof f!="object"?null:(f=O&&f[O]||f["@@iterator"],typeof f=="function"?f:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,j={};function U(f,y,X){this.props=f,this.context=y,this.refs=j,this.updater=X||Q}U.prototype.isReactComponent={},U.prototype.setState=function(f,y){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,y,"setState")},U.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function J(){}J.prototype=U.prototype;function Z(f,y,X){this.props=f,this.context=y,this.refs=j,this.updater=X||Q}var ie=Z.prototype=new J;ie.constructor=Z,Y(ie,U.prototype),ie.isPureReactComponent=!0;var ge=Array.isArray,Oe=Object.prototype.hasOwnProperty,Re={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function Le(f,y,X){var ee,ae={},te=null,me=null;if(y!=null)for(ee in y.ref!==void 0&&(me=y.ref),y.key!==void 0&&(te=""+y.key),y)Oe.call(y,ee)&&!le.hasOwnProperty(ee)&&(ae[ee]=y[ee]);var ce=arguments.length-2;if(ce===1)ae.children=X;else if(1<ce){for(var pe=Array(ce),Ge=0;Ge<ce;Ge++)pe[Ge]=arguments[Ge+2];ae.children=pe}if(f&&f.defaultProps)for(ee in ce=f.defaultProps,ce)ae[ee]===void 0&&(ae[ee]=ce[ee]);return{$$typeof:s,type:f,key:te,ref:me,props:ae,_owner:Re.current}}function ao(f,y){return{$$typeof:s,type:f.type,key:y,ref:f.ref,props:f.props,_owner:f._owner}}function Ke(f){return typeof f=="object"&&f!==null&&f.$$typeof===s}function vo(f){var y={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(X){return y[X]})}var ve=/\/+/g;function Xe(f,y){return typeof f=="object"&&f!==null&&f.key!=null?vo(""+f.key):y.toString(36)}function to(f,y,X,ee,ae){var te=typeof f;(te==="undefined"||te==="boolean")&&(f=null);var me=!1;if(f===null)me=!0;else switch(te){case"string":case"number":me=!0;break;case"object":switch(f.$$typeof){case s:case v:me=!0}}if(me)return me=f,ae=ae(me),f=ee===""?"."+Xe(me,0):ee,ge(ae)?(X="",f!=null&&(X=f.replace(ve,"$&/")+"/"),to(ae,y,X,"",function(Ge){return Ge})):ae!=null&&(Ke(ae)&&(ae=ao(ae,X+(!ae.key||me&&me.key===ae.key?"":(""+ae.key).replace(ve,"$&/")+"/")+f)),y.push(ae)),1;if(me=0,ee=ee===""?".":ee+":",ge(f))for(var ce=0;ce<f.length;ce++){te=f[ce];var pe=ee+Xe(te,ce);me+=to(te,y,X,pe,ae)}else if(pe=F(f),typeof pe=="function")for(f=pe.call(f),ce=0;!(te=f.next()).done;)te=te.value,pe=ee+Xe(te,ce++),me+=to(te,y,X,pe,ae);else if(te==="object")throw y=String(f),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return me}function uo(f,y,X){if(f==null)return f;var ee=[],ae=0;return to(f,ee,"","",function(te){return y.call(X,te,ae++)}),ee}function Be(f){if(f._status===-1){var y=f._result;y=y(),y.then(function(X){(f._status===0||f._status===-1)&&(f._status=1,f._result=X)},function(X){(f._status===0||f._status===-1)&&(f._status=2,f._result=X)}),f._status===-1&&(f._status=0,f._result=y)}if(f._status===1)return f._result.default;throw f._result}var Se={current:null},w={transition:null},H={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:w,ReactCurrentOwner:Re};function N(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:uo,forEach:function(f,y,X){uo(f,function(){y.apply(this,arguments)},X)},count:function(f){var y=0;return uo(f,function(){y++}),y},toArray:function(f){return uo(f,function(y){return y})||[]},only:function(f){if(!Ke(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},oe.Component=U,oe.Fragment=l,oe.Profiler=b,oe.PureComponent=Z,oe.StrictMode=A,oe.Suspense=T,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,oe.act=N,oe.cloneElement=function(f,y,X){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var ee=Y({},f.props),ae=f.key,te=f.ref,me=f._owner;if(y!=null){if(y.ref!==void 0&&(te=y.ref,me=Re.current),y.key!==void 0&&(ae=""+y.key),f.type&&f.type.defaultProps)var ce=f.type.defaultProps;for(pe in y)Oe.call(y,pe)&&!le.hasOwnProperty(pe)&&(ee[pe]=y[pe]===void 0&&ce!==void 0?ce[pe]:y[pe])}var pe=arguments.length-2;if(pe===1)ee.children=X;else if(1<pe){ce=Array(pe);for(var Ge=0;Ge<pe;Ge++)ce[Ge]=arguments[Ge+2];ee.children=ce}return{$$typeof:s,type:f.type,key:ae,ref:te,props:ee,_owner:me}},oe.createContext=function(f){return f={$$typeof:P,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:S,_context:f},f.Consumer=f},oe.createElement=Le,oe.createFactory=function(f){var y=Le.bind(null,f);return y.type=f,y},oe.createRef=function(){return{current:null}},oe.forwardRef=function(f){return{$$typeof:R,render:f}},oe.isValidElement=Ke,oe.lazy=function(f){return{$$typeof:z,_payload:{_status:-1,_result:f},_init:Be}},oe.memo=function(f,y){return{$$typeof:D,type:f,compare:y===void 0?null:y}},oe.startTransition=function(f){var y=w.transition;w.transition={};try{f()}finally{w.transition=y}},oe.unstable_act=N,oe.useCallback=function(f,y){return Se.current.useCallback(f,y)},oe.useContext=function(f){return Se.current.useContext(f)},oe.useDebugValue=function(){},oe.useDeferredValue=function(f){return Se.current.useDeferredValue(f)},oe.useEffect=function(f,y){return Se.current.useEffect(f,y)},oe.useId=function(){return Se.current.useId()},oe.useImperativeHandle=function(f,y,X){return Se.current.useImperativeHandle(f,y,X)},oe.useInsertionEffect=function(f,y){return Se.current.useInsertionEffect(f,y)},oe.useLayoutEffect=function(f,y){return Se.current.useLayoutEffect(f,y)},oe.useMemo=function(f,y){return Se.current.useMemo(f,y)},oe.useReducer=function(f,y,X){return Se.current.useReducer(f,y,X)},oe.useRef=function(f){return Se.current.useRef(f)},oe.useState=function(f){return Se.current.useState(f)},oe.useSyncExternalStore=function(f,y,X){return Se.current.useSyncExternalStore(f,y,X)},oe.useTransition=function(){return Se.current.useTransition()},oe.version="18.3.1",oe}var od;function ss(){return od||(od=1,es.exports=mm()),es.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function pm(){if(ad)return Ut;ad=1;var s=ss(),v=Symbol.for("react.element"),l=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function P(R,T,D){var z,O={},F=null,Q=null;D!==void 0&&(F=""+D),T.key!==void 0&&(F=""+T.key),T.ref!==void 0&&(Q=T.ref);for(z in T)A.call(T,z)&&!S.hasOwnProperty(z)&&(O[z]=T[z]);if(R&&R.defaultProps)for(z in T=R.defaultProps,T)O[z]===void 0&&(O[z]=T[z]);return{$$typeof:v,type:R,key:F,ref:Q,props:O,_owner:b.current}}return Ut.Fragment=l,Ut.jsx=P,Ut.jsxs=P,Ut}var td;function fm(){return td||(td=1,Zn.exports=pm()),Zn.exports}var d=fm(),Xr={},os={exports:{}},lo={},as={exports:{}},ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function gm(){return rd||(rd=1,(function(s){function v(w,H){var N=w.length;w.push(H);e:for(;0<N;){var f=N-1>>>1,y=w[f];if(0<b(y,H))w[f]=H,w[N]=y,N=f;else break e}}function l(w){return w.length===0?null:w[0]}function A(w){if(w.length===0)return null;var H=w[0],N=w.pop();if(N!==H){w[0]=N;e:for(var f=0,y=w.length,X=y>>>1;f<X;){var ee=2*(f+1)-1,ae=w[ee],te=ee+1,me=w[te];if(0>b(ae,N))te<y&&0>b(me,ae)?(w[f]=me,w[te]=N,f=te):(w[f]=ae,w[ee]=N,f=ee);else if(te<y&&0>b(me,N))w[f]=me,w[te]=N,f=te;else break e}}return H}function b(w,H){var N=w.sortIndex-H.sortIndex;return N!==0?N:w.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var S=performance;s.unstable_now=function(){return S.now()}}else{var P=Date,R=P.now();s.unstable_now=function(){return P.now()-R}}var T=[],D=[],z=1,O=null,F=3,Q=!1,Y=!1,j=!1,U=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(w){for(var H=l(D);H!==null;){if(H.callback===null)A(D);else if(H.startTime<=w)A(D),H.sortIndex=H.expirationTime,v(T,H);else break;H=l(D)}}function ge(w){if(j=!1,ie(w),!Y)if(l(T)!==null)Y=!0,Be(Oe);else{var H=l(D);H!==null&&Se(ge,H.startTime-w)}}function Oe(w,H){Y=!1,j&&(j=!1,J(Le),Le=-1),Q=!0;var N=F;try{for(ie(H),O=l(T);O!==null&&(!(O.expirationTime>H)||w&&!vo());){var f=O.callback;if(typeof f=="function"){O.callback=null,F=O.priorityLevel;var y=f(O.expirationTime<=H);H=s.unstable_now(),typeof y=="function"?O.callback=y:O===l(T)&&A(T),ie(H)}else A(T);O=l(T)}if(O!==null)var X=!0;else{var ee=l(D);ee!==null&&Se(ge,ee.startTime-H),X=!1}return X}finally{O=null,F=N,Q=!1}}var Re=!1,le=null,Le=-1,ao=5,Ke=-1;function vo(){return!(s.unstable_now()-Ke<ao)}function ve(){if(le!==null){var w=s.unstable_now();Ke=w;var H=!0;try{H=le(!0,w)}finally{H?Xe():(Re=!1,le=null)}}else Re=!1}var Xe;if(typeof Z=="function")Xe=function(){Z(ve)};else if(typeof MessageChannel<"u"){var to=new MessageChannel,uo=to.port2;to.port1.onmessage=ve,Xe=function(){uo.postMessage(null)}}else Xe=function(){U(ve,0)};function Be(w){le=w,Re||(Re=!0,Xe())}function Se(w,H){Le=U(function(){w(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(w){w.callback=null},s.unstable_continueExecution=function(){Y||Q||(Y=!0,Be(Oe))},s.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ao=0<w?Math.floor(1e3/w):5},s.unstable_getCurrentPriorityLevel=function(){return F},s.unstable_getFirstCallbackNode=function(){return l(T)},s.unstable_next=function(w){switch(F){case 1:case 2:case 3:var H=3;break;default:H=F}var N=F;F=H;try{return w()}finally{F=N}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(w,H){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var N=F;F=w;try{return H()}finally{F=N}},s.unstable_scheduleCallback=function(w,H,N){var f=s.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?f+N:f):N=f,w){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=N+y,w={id:z++,callback:H,priorityLevel:w,startTime:N,expirationTime:y,sortIndex:-1},N>f?(w.sortIndex=N,v(D,w),l(T)===null&&w===l(D)&&(j?(J(Le),Le=-1):j=!0,Se(ge,N-f))):(w.sortIndex=y,v(T,w),Y||Q||(Y=!0,Be(Oe))),w},s.unstable_shouldYield=vo,s.unstable_wrapCallback=function(w){var H=F;return function(){var N=F;F=H;try{return w.apply(this,arguments)}finally{F=N}}}})(ts)),ts}var id;function vm(){return id||(id=1,as.exports=gm()),as.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function Cm(){if(nd)return lo;nd=1;var s=ss(),v=vm();function l(e){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A=new Set,b={};function S(e,o){P(e,o),P(e+"Capture",o)}function P(e,o){for(b[e]=o,e=0;e<o.length;e++)A.add(o[e])}var R=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,D=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},O={};function F(e){return T.call(O,e)?!0:T.call(z,e)?!1:D.test(e)?O[e]=!0:(z[e]=!0,!1)}function Q(e,o,a,t){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return t?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,o,a,t){if(o===null||typeof o>"u"||Q(e,o,a,t))return!0;if(t)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function j(e,o,a,t,r,i,n){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=t,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=o,this.sanitizeURL=i,this.removeEmptyString=n}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var o=e[0];U[o]=new j(o,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var o=e.replace(J,Z);U[o]=new j(o,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var o=e.replace(J,Z);U[o]=new j(o,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var o=e.replace(J,Z);U[o]=new j(o,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,o,a,t){var r=U.hasOwnProperty(o)?U[o]:null;(r!==null?r.type!==0:t||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(Y(o,a,r,t)&&(a=null),t||r===null?F(o)&&(a===null?e.removeAttribute(o):e.setAttribute(o,""+a)):r.mustUseProperty?e[r.propertyName]=a===null?r.type===3?!1:"":a:(o=r.attributeName,t=r.attributeNamespace,a===null?e.removeAttribute(o):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,t?e.setAttributeNS(t,o,a):e.setAttribute(o,a))))}var ge=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),Re=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),ao=Symbol.for("react.profiler"),Ke=Symbol.for("react.provider"),vo=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),w=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var N=Object.assign,f;function y(e){if(f===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);f=o&&o[1]||""}return`
`+f+e}var X=!1;function ee(e,o){if(!e||X)return"";X=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(h){var t=h}Reflect.construct(e,[],o)}else{try{o.call()}catch(h){t=h}e.call(o.prototype)}else{try{throw Error()}catch(h){t=h}e()}}catch(h){if(h&&t&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),i=t.stack.split(`
`),n=r.length-1,c=i.length-1;1<=n&&0<=c&&r[n]!==i[c];)c--;for(;1<=n&&0<=c;n--,c--)if(r[n]!==i[c]){if(n!==1||c!==1)do if(n--,c--,0>c||r[n]!==i[c]){var u=`
`+r[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=c);break}}}finally{X=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?y(e):""}function ae(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case Re:return"Portal";case ao:return"Profiler";case Le:return"StrictMode";case Xe:return"Suspense";case to:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vo:return(e.displayName||"Context")+".Consumer";case Ke:return(e._context.displayName||"Context")+".Provider";case ve:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uo:return o=e.displayName||null,o!==null?o:te(e.type)||"Memo";case Be:o=e._payload,e=e._init;try{return te(e(o))}catch{}}return null}function me(e){var o=e.type;switch(e.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=o.render,e=e.displayName||e.name||"",o.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(o);case 8:return o===Le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var o=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ge(e){var o=pe(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,o),t=""+e[o];if(!e.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,o,{configurable:!0,get:function(){return r.call(this)},set:function(n){t=""+n,i.call(this,n)}}),Object.defineProperty(e,o,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(n){t=""+n},stopTracking:function(){e._valueTracker=null,delete e[o]}}}}function re(e){e._valueTracker||(e._valueTracker=Ge(e))}function fe(e){if(!e)return!1;var o=e._valueTracker;if(!o)return!0;var a=o.getValue(),t="";return e&&(t=pe(e)?e.checked?"true":"false":e.value),e=t,e!==a?(o.setValue(e),!0):!1}function Ce(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function je(e,o){var a=o.checked;return N({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Ie(e,o){var a=o.defaultValue==null?"":o.defaultValue,t=o.checked!=null?o.checked:o.defaultChecked;a=ce(o.value!=null?o.value:a),e._wrapperState={initialChecked:t,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function de(e,o){o=o.checked,o!=null&&ie(e,"checked",o,!1)}function ni(e,o){de(e,o);var a=ce(o.value),t=o.type;if(a!=null)t==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}o.hasOwnProperty("value")?si(e,o.type,a):o.hasOwnProperty("defaultValue")&&si(e,o.type,ce(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(e.defaultChecked=!!o.defaultChecked)}function ls(e,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var t=o.type;if(!(t!=="submit"&&t!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+e._wrapperState.initialValue,a||o===e.value||(e.value=o),e.defaultValue=o}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function si(e,o,a){(o!=="number"||Ce(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var ot=Array.isArray;function Pa(e,o,a,t){if(e=e.options,o){o={};for(var r=0;r<a.length;r++)o["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=o.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&t&&(e[a].defaultSelected=!0)}else{for(a=""+ce(a),o=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,t&&(e[r].defaultSelected=!0);return}o!==null||e[r].disabled||(o=e[r])}o!==null&&(o.selected=!0)}}function ci(e,o){if(o.dangerouslySetInnerHTML!=null)throw Error(l(91));return N({},o,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(l(92));if(ot(a)){if(1<a.length)throw Error(l(93));a=a[0]}o=a}o==null&&(o=""),a=o}e._wrapperState={initialValue:ce(a)}}function us(e,o){var a=ce(o.value),t=ce(o.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),o.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),t!=null&&(e.defaultValue=""+t)}function ms(e){var o=e.textContent;o===e._wrapperState.initialValue&&o!==""&&o!==null&&(e.value=o)}function ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(e,o){return e==null||e==="http://www.w3.org/1999/xhtml"?ps(o):e==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vt,fs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,t,r){MSApp.execUnsafeLocalFunction(function(){return e(o,a,t,r)})}:e})(function(e,o){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=o;else{for(Vt=Vt||document.createElement("div"),Vt.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Vt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;o.firstChild;)e.appendChild(o.firstChild)}});function at(e,o){if(o){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=o;return}}e.textContent=o}var tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vd=["Webkit","ms","Moz","O"];Object.keys(tt).forEach(function(e){vd.forEach(function(o){o=o+e.charAt(0).toUpperCase()+e.substring(1),tt[o]=tt[e]})});function gs(e,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||tt.hasOwnProperty(e)&&tt[e]?(""+o).trim():o+"px"}function vs(e,o){e=e.style;for(var a in o)if(o.hasOwnProperty(a)){var t=a.indexOf("--")===0,r=gs(a,o[a],t);a==="float"&&(a="cssFloat"),t?e.setProperty(a,r):e[a]=r}}var Cd=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,o){if(o){if(Cd[e]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(l(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(l(61))}if(o.style!=null&&typeof o.style!="object")throw Error(l(62))}}function ui(e,o){if(e.indexOf("-")===-1)return typeof o.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function pi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,qa=null,Da=null;function Cs(e){if(e=Et(e)){if(typeof fi!="function")throw Error(l(280));var o=e.stateNode;o&&(o=mr(o),fi(e.stateNode,e.type,o))}}function hs(e){qa?Da?Da.push(e):Da=[e]:qa=e}function Ss(){if(qa){var e=qa,o=Da;if(Da=qa=null,Cs(e),o)for(e=0;e<o.length;e++)Cs(o[e])}}function bs(e,o){return e(o)}function As(){}var gi=!1;function Ts(e,o,a){if(gi)return e(o,a);gi=!0;try{return bs(e,o,a)}finally{gi=!1,(qa!==null||Da!==null)&&(As(),Ss())}}function rt(e,o){var a=e.stateNode;if(a===null)return null;var t=mr(a);if(t===null)return null;a=t[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,o,typeof a));return a}var vi=!1;if(R)try{var it={};Object.defineProperty(it,"passive",{get:function(){vi=!0}}),window.addEventListener("test",it,it),window.removeEventListener("test",it,it)}catch{vi=!1}function hd(e,o,a,t,r,i,n,c,u){var h=Array.prototype.slice.call(arguments,3);try{o.apply(a,h)}catch(E){this.onError(E)}}var nt=!1,Ht=null,Gt=!1,Ci=null,Sd={onError:function(e){nt=!0,Ht=e}};function bd(e,o,a,t,r,i,n,c,u){nt=!1,Ht=null,hd.apply(Sd,arguments)}function Ad(e,o,a,t,r,i,n,c,u){if(bd.apply(this,arguments),nt){if(nt){var h=Ht;nt=!1,Ht=null}else throw Error(l(198));Gt||(Gt=!0,Ci=h)}}function fa(e){var o=e,a=e;if(e.alternate)for(;o.return;)o=o.return;else{e=o;do o=e,(o.flags&4098)!==0&&(a=o.return),e=o.return;while(e)}return o.tag===3?a:null}function ys(e){if(e.tag===13){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function Is(e){if(fa(e)!==e)throw Error(l(188))}function Td(e){var o=e.alternate;if(!o){if(o=fa(e),o===null)throw Error(l(188));return o!==e?null:e}for(var a=e,t=o;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(t=r.return,t!==null){a=t;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return Is(r),e;if(i===t)return Is(r),o;i=i.sibling}throw Error(l(188))}if(a.return!==t.return)a=r,t=i;else{for(var n=!1,c=r.child;c;){if(c===a){n=!0,a=r,t=i;break}if(c===t){n=!0,t=r,a=i;break}c=c.sibling}if(!n){for(c=i.child;c;){if(c===a){n=!0,a=i,t=r;break}if(c===t){n=!0,t=i,a=r;break}c=c.sibling}if(!n)throw Error(l(189))}}if(a.alternate!==t)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:o}function Es(e){return e=Td(e),e!==null?xs(e):null}function xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var o=xs(e);if(o!==null)return o;e=e.sibling}return null}var Rs=v.unstable_scheduleCallback,Ps=v.unstable_cancelCallback,yd=v.unstable_shouldYield,Id=v.unstable_requestPaint,qe=v.unstable_now,Ed=v.unstable_getCurrentPriorityLevel,hi=v.unstable_ImmediatePriority,qs=v.unstable_UserBlockingPriority,Wt=v.unstable_NormalPriority,xd=v.unstable_LowPriority,Ds=v.unstable_IdlePriority,Qt=null,No=null;function Rd(e){if(No&&typeof No.onCommitFiberRoot=="function")try{No.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}var yo=Math.clz32?Math.clz32:Dd,Pd=Math.log,qd=Math.LN2;function Dd(e){return e>>>=0,e===0?32:31-(Pd(e)/qd|0)|0}var $t=64,Jt=4194304;function st(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kt(e,o){var a=e.pendingLanes;if(a===0)return 0;var t=0,r=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var c=n&~r;c!==0?t=st(c):(i&=n,i!==0&&(t=st(i)))}else n=a&~r,n!==0?t=st(n):i!==0&&(t=st(i));if(t===0)return 0;if(o!==0&&o!==t&&(o&r)===0&&(r=t&-t,i=o&-o,r>=i||r===16&&(i&4194240)!==0))return o;if((t&4)!==0&&(t|=a&16),o=e.entangledLanes,o!==0)for(e=e.entanglements,o&=t;0<o;)a=31-yo(o),r=1<<a,t|=e[a],o&=~r;return t}function Od(e,o){switch(e){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wd(e,o){for(var a=e.suspendedLanes,t=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-yo(i),c=1<<n,u=r[n];u===-1?((c&a)===0||(c&t)!==0)&&(r[n]=Od(c,o)):u<=o&&(e.expiredLanes|=c),i&=~c}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Os(){var e=$t;return $t<<=1,($t&4194240)===0&&($t=64),e}function bi(e){for(var o=[],a=0;31>a;a++)o.push(e);return o}function ct(e,o,a){e.pendingLanes|=o,o!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,o=31-yo(o),e[o]=a}function Nd(e,o){var a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<a;){var r=31-yo(a),i=1<<r;o[r]=0,t[r]=-1,e[r]=-1,a&=~i}}function Ai(e,o){var a=e.entangledLanes|=o;for(e=e.entanglements;a;){var t=31-yo(a),r=1<<t;r&o|e[t]&o&&(e[t]|=o),a&=~r}}var ue=0;function ws(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ns,Ti,ks,Ls,Fs,yi=!1,Xt=[],$o=null,Jo=null,Ko=null,lt=new Map,dt=new Map,Xo=[],kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ms(e,o){switch(e){case"focusin":case"focusout":$o=null;break;case"dragenter":case"dragleave":Jo=null;break;case"mouseover":case"mouseout":Ko=null;break;case"pointerover":case"pointerout":lt.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":dt.delete(o.pointerId)}}function ut(e,o,a,t,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:o,domEventName:a,eventSystemFlags:t,nativeEvent:i,targetContainers:[r]},o!==null&&(o=Et(o),o!==null&&Ti(o)),e):(e.eventSystemFlags|=t,o=e.targetContainers,r!==null&&o.indexOf(r)===-1&&o.push(r),e)}function Ld(e,o,a,t,r){switch(o){case"focusin":return $o=ut($o,e,o,a,t,r),!0;case"dragenter":return Jo=ut(Jo,e,o,a,t,r),!0;case"mouseover":return Ko=ut(Ko,e,o,a,t,r),!0;case"pointerover":var i=r.pointerId;return lt.set(i,ut(lt.get(i)||null,e,o,a,t,r)),!0;case"gotpointercapture":return i=r.pointerId,dt.set(i,ut(dt.get(i)||null,e,o,a,t,r)),!0}return!1}function zs(e){var o=ga(e.target);if(o!==null){var a=fa(o);if(a!==null){if(o=a.tag,o===13){if(o=ys(a),o!==null){e.blockedOn=o,Fs(e.priority,function(){ks(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yt(e){if(e.blockedOn!==null)return!1;for(var o=e.targetContainers;0<o.length;){var a=Ei(e.domEventName,e.eventSystemFlags,o[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var t=new a.constructor(a.type,a);mi=t,a.target.dispatchEvent(t),mi=null}else return o=Et(a),o!==null&&Ti(o),e.blockedOn=a,!1;o.shift()}return!0}function _s(e,o,a){Yt(e)&&a.delete(o)}function Fd(){yi=!1,$o!==null&&Yt($o)&&($o=null),Jo!==null&&Yt(Jo)&&(Jo=null),Ko!==null&&Yt(Ko)&&(Ko=null),lt.forEach(_s),dt.forEach(_s)}function mt(e,o){e.blockedOn===o&&(e.blockedOn=null,yi||(yi=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Fd)))}function pt(e){function o(r){return mt(r,e)}if(0<Xt.length){mt(Xt[0],e);for(var a=1;a<Xt.length;a++){var t=Xt[a];t.blockedOn===e&&(t.blockedOn=null)}}for($o!==null&&mt($o,e),Jo!==null&&mt(Jo,e),Ko!==null&&mt(Ko,e),lt.forEach(o),dt.forEach(o),a=0;a<Xo.length;a++)t=Xo[a],t.blockedOn===e&&(t.blockedOn=null);for(;0<Xo.length&&(a=Xo[0],a.blockedOn===null);)zs(a),a.blockedOn===null&&Xo.shift()}var Oa=ge.ReactCurrentBatchConfig,Zt=!0;function Md(e,o,a,t){var r=ue,i=Oa.transition;Oa.transition=null;try{ue=1,Ii(e,o,a,t)}finally{ue=r,Oa.transition=i}}function zd(e,o,a,t){var r=ue,i=Oa.transition;Oa.transition=null;try{ue=4,Ii(e,o,a,t)}finally{ue=r,Oa.transition=i}}function Ii(e,o,a,t){if(Zt){var r=Ei(e,o,a,t);if(r===null)ji(e,o,t,er,a),Ms(e,t);else if(Ld(r,e,o,a,t))t.stopPropagation();else if(Ms(e,t),o&4&&-1<kd.indexOf(e)){for(;r!==null;){var i=Et(r);if(i!==null&&Ns(i),i=Ei(e,o,a,t),i===null&&ji(e,o,t,er,a),i===r)break;r=i}r!==null&&t.stopPropagation()}else ji(e,o,t,null,a)}}var er=null;function Ei(e,o,a,t){if(er=null,e=pi(t),e=ga(e),e!==null)if(o=fa(e),o===null)e=null;else if(a=o.tag,a===13){if(e=ys(o),e!==null)return e;e=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;e=null}else o!==e&&(e=null);return er=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ed()){case hi:return 1;case qs:return 4;case Wt:case xd:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var Yo=null,xi=null,or=null;function Bs(){if(or)return or;var e,o=xi,a=o.length,t,r="value"in Yo?Yo.value:Yo.textContent,i=r.length;for(e=0;e<a&&o[e]===r[e];e++);var n=a-e;for(t=1;t<=n&&o[a-t]===r[i-t];t++);return or=r.slice(e,1<t?1-t:void 0)}function ar(e){var o=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&o===13&&(e=13)):e=o,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function js(){return!1}function mo(e){function o(a,t,r,i,n){this._reactName=a,this._targetInst=r,this.type=t,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tr:js,this.isPropagationStopped=js,this}return N(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),o}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=mo(wa),ft=N({},wa,{view:0,detail:0}),_d=mo(ft),Pi,qi,gt,rr=N({},ft,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gt&&(gt&&e.type==="mousemove"?(Pi=e.screenX-gt.screenX,qi=e.screenY-gt.screenY):qi=Pi=0,gt=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),Vs=mo(rr),Ud=N({},rr,{dataTransfer:0}),Bd=mo(Ud),jd=N({},ft,{relatedTarget:0}),Di=mo(jd),Vd=N({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=mo(Vd),Gd=N({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=mo(Gd),Qd=N({},wa,{data:0}),Hs=mo(Qd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xd(e){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(e):(e=Kd[e])?!!o[e]:!1}function Oi(){return Xd}var Yd=N({},ft,{key:function(e){if(e.key){var o=$d[e.key]||e.key;if(o!=="Unidentified")return o}return e.type==="keypress"?(e=ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oi,charCode:function(e){return e.type==="keypress"?ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=mo(Yd),eu=N({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=mo(eu),ou=N({},ft,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oi}),au=mo(ou),tu=N({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ru=mo(tu),iu=N({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nu=mo(iu),su=[9,13,27,32],wi=R&&"CompositionEvent"in window,vt=null;R&&"documentMode"in document&&(vt=document.documentMode);var cu=R&&"TextEvent"in window&&!vt,Ws=R&&(!wi||vt&&8<vt&&11>=vt),Qs=" ",$s=!1;function Js(e,o){switch(e){case"keyup":return su.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Na=!1;function lu(e,o){switch(e){case"compositionend":return Ks(o);case"keypress":return o.which!==32?null:($s=!0,Qs);case"textInput":return e=o.data,e===Qs&&$s?null:e;default:return null}}function du(e,o){if(Na)return e==="compositionend"||!wi&&Js(e,o)?(e=Bs(),or=xi=Yo=null,Na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ws&&o.locale!=="ko"?null:o.data;default:return null}}var uu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o==="input"?!!uu[e.type]:o==="textarea"}function Ys(e,o,a,t){hs(t),o=lr(o,"onChange"),0<o.length&&(a=new Ri("onChange","change",null,a,t),e.push({event:a,listeners:o}))}var Ct=null,ht=null;function mu(e){vc(e,0)}function ir(e){var o=za(e);if(fe(o))return e}function pu(e,o){if(e==="change")return o}var Zs=!1;if(R){var Ni;if(R){var ki="oninput"in document;if(!ki){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),ki=typeof ec.oninput=="function"}Ni=ki}else Ni=!1;Zs=Ni&&(!document.documentMode||9<document.documentMode)}function oc(){Ct&&(Ct.detachEvent("onpropertychange",ac),ht=Ct=null)}function ac(e){if(e.propertyName==="value"&&ir(ht)){var o=[];Ys(o,ht,e,pi(e)),Ts(mu,o)}}function fu(e,o,a){e==="focusin"?(oc(),Ct=o,ht=a,Ct.attachEvent("onpropertychange",ac)):e==="focusout"&&oc()}function gu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ir(ht)}function vu(e,o){if(e==="click")return ir(o)}function Cu(e,o){if(e==="input"||e==="change")return ir(o)}function hu(e,o){return e===o&&(e!==0||1/e===1/o)||e!==e&&o!==o}var Io=typeof Object.is=="function"?Object.is:hu;function St(e,o){if(Io(e,o))return!0;if(typeof e!="object"||e===null||typeof o!="object"||o===null)return!1;var a=Object.keys(e),t=Object.keys(o);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var r=a[t];if(!T.call(o,r)||!Io(e[r],o[r]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,o){var a=tc(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=o&&t>=o)return{node:a,offset:o-e};e=t}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tc(a)}}function ic(e,o){return e&&o?e===o?!0:e&&e.nodeType===3?!1:o&&o.nodeType===3?ic(e,o.parentNode):"contains"in e?e.contains(o):e.compareDocumentPosition?!!(e.compareDocumentPosition(o)&16):!1:!1}function nc(){for(var e=window,o=Ce();o instanceof e.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)e=o.contentWindow;else break;o=Ce(e.document)}return o}function Li(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o&&(o==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||o==="textarea"||e.contentEditable==="true")}function Su(e){var o=nc(),a=e.focusedElem,t=e.selectionRange;if(o!==a&&a&&a.ownerDocument&&ic(a.ownerDocument.documentElement,a)){if(t!==null&&Li(a)){if(o=t.start,e=t.end,e===void 0&&(e=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(e,a.value.length);else if(e=(o=a.ownerDocument||document)&&o.defaultView||window,e.getSelection){e=e.getSelection();var r=a.textContent.length,i=Math.min(t.start,r);t=t.end===void 0?i:Math.min(t.end,r),!e.extend&&i>t&&(r=t,t=i,i=r),r=rc(a,i);var n=rc(a,t);r&&n&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(o=o.createRange(),o.setStart(r.node,r.offset),e.removeAllRanges(),i>t?(e.addRange(o),e.extend(n.node,n.offset)):(o.setEnd(n.node,n.offset),e.addRange(o)))}}for(o=[],e=a;e=e.parentNode;)e.nodeType===1&&o.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)e=o[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bu=R&&"documentMode"in document&&11>=document.documentMode,ka=null,Fi=null,bt=null,Mi=!1;function sc(e,o,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mi||ka==null||ka!==Ce(t)||(t=ka,"selectionStart"in t&&Li(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),bt&&St(bt,t)||(bt=t,t=lr(Fi,"onSelect"),0<t.length&&(o=new Ri("onSelect","select",null,o,a),e.push({event:o,listeners:t}),o.target=ka)))}function nr(e,o){var a={};return a[e.toLowerCase()]=o.toLowerCase(),a["Webkit"+e]="webkit"+o,a["Moz"+e]="moz"+o,a}var La={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionend:nr("Transition","TransitionEnd")},zi={},cc={};R&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function sr(e){if(zi[e])return zi[e];if(!La[e])return e;var o=La[e],a;for(a in o)if(o.hasOwnProperty(a)&&a in cc)return zi[e]=o[a];return e}var lc=sr("animationend"),dc=sr("animationiteration"),uc=sr("animationstart"),mc=sr("transitionend"),pc=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zo(e,o){pc.set(e,o),S(o,[e])}for(var _i=0;_i<fc.length;_i++){var Ui=fc[_i],Au=Ui.toLowerCase(),Tu=Ui[0].toUpperCase()+Ui.slice(1);Zo(Au,"on"+Tu)}Zo(lc,"onAnimationEnd"),Zo(dc,"onAnimationIteration"),Zo(uc,"onAnimationStart"),Zo("dblclick","onDoubleClick"),Zo("focusin","onFocus"),Zo("focusout","onBlur"),Zo(mc,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yu=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function gc(e,o,a){var t=e.type||"unknown-event";e.currentTarget=a,Ad(t,o,void 0,e),e.currentTarget=null}function vc(e,o){o=(o&4)!==0;for(var a=0;a<e.length;a++){var t=e[a],r=t.event;t=t.listeners;e:{var i=void 0;if(o)for(var n=t.length-1;0<=n;n--){var c=t[n],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==i&&r.isPropagationStopped())break e;gc(r,c,h),i=u}else for(n=0;n<t.length;n++){if(c=t[n],u=c.instance,h=c.currentTarget,c=c.listener,u!==i&&r.isPropagationStopped())break e;gc(r,c,h),i=u}}}if(Gt)throw e=Ci,Gt=!1,Ci=null,e}function be(e,o){var a=o[$i];a===void 0&&(a=o[$i]=new Set);var t=e+"__bubble";a.has(t)||(Cc(o,e,2,!1),a.add(t))}function Bi(e,o,a){var t=0;o&&(t|=4),Cc(a,e,t,o)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Tt(e){if(!e[cr]){e[cr]=!0,A.forEach(function(a){a!=="selectionchange"&&(yu.has(a)||Bi(a,!1,e),Bi(a,!0,e))});var o=e.nodeType===9?e:e.ownerDocument;o===null||o[cr]||(o[cr]=!0,Bi("selectionchange",!1,o))}}function Cc(e,o,a,t){switch(Us(o)){case 1:var r=Md;break;case 4:r=zd;break;default:r=Ii}a=r.bind(null,o,a,e),r=void 0,!vi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(r=!0),t?r!==void 0?e.addEventListener(o,a,{capture:!0,passive:r}):e.addEventListener(o,a,!0):r!==void 0?e.addEventListener(o,a,{passive:r}):e.addEventListener(o,a,!1)}function ji(e,o,a,t,r){var i=t;if((o&1)===0&&(o&2)===0&&t!==null)e:for(;;){if(t===null)return;var n=t.tag;if(n===3||n===4){var c=t.stateNode.containerInfo;if(c===r||c.nodeType===8&&c.parentNode===r)break;if(n===4)for(n=t.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;n=n.return}for(;c!==null;){if(n=ga(c),n===null)return;if(u=n.tag,u===5||u===6){t=i=n;continue e}c=c.parentNode}}t=t.return}Ts(function(){var h=i,E=pi(a),x=[];e:{var I=pc.get(e);if(I!==void 0){var k=Ri,_=e;switch(e){case"keypress":if(ar(a)===0)break e;case"keydown":case"keyup":k=Zd;break;case"focusin":_="focus",k=Di;break;case"focusout":_="blur",k=Di;break;case"beforeblur":case"afterblur":k=Di;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=au;break;case lc:case dc:case uc:k=Hd;break;case mc:k=ru;break;case"scroll":k=_d;break;case"wheel":k=nu;break;case"copy":case"cut":case"paste":k=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Gs}var B=(o&4)!==0,De=!B&&e==="scroll",g=B?I!==null?I+"Capture":null:I;B=[];for(var p=h,C;p!==null;){C=p;var q=C.stateNode;if(C.tag===5&&q!==null&&(C=q,g!==null&&(q=rt(p,g),q!=null&&B.push(yt(p,q,C)))),De)break;p=p.return}0<B.length&&(I=new k(I,_,null,a,E),x.push({event:I,listeners:B}))}}if((o&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",I&&a!==mi&&(_=a.relatedTarget||a.fromElement)&&(ga(_)||_[_o]))break e;if((k||I)&&(I=E.window===E?E:(I=E.ownerDocument)?I.defaultView||I.parentWindow:window,k?(_=a.relatedTarget||a.toElement,k=h,_=_?ga(_):null,_!==null&&(De=fa(_),_!==De||_.tag!==5&&_.tag!==6)&&(_=null)):(k=null,_=h),k!==_)){if(B=Vs,q="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(B=Gs,q="onPointerLeave",g="onPointerEnter",p="pointer"),De=k==null?I:za(k),C=_==null?I:za(_),I=new B(q,p+"leave",k,a,E),I.target=De,I.relatedTarget=C,q=null,ga(E)===h&&(B=new B(g,p+"enter",_,a,E),B.target=C,B.relatedTarget=De,q=B),De=q,k&&_)o:{for(B=k,g=_,p=0,C=B;C;C=Fa(C))p++;for(C=0,q=g;q;q=Fa(q))C++;for(;0<p-C;)B=Fa(B),p--;for(;0<C-p;)g=Fa(g),C--;for(;p--;){if(B===g||g!==null&&B===g.alternate)break o;B=Fa(B),g=Fa(g)}B=null}else B=null;k!==null&&hc(x,I,k,B,!1),_!==null&&De!==null&&hc(x,De,_,B,!0)}}e:{if(I=h?za(h):window,k=I.nodeName&&I.nodeName.toLowerCase(),k==="select"||k==="input"&&I.type==="file")var V=pu;else if(Xs(I))if(Zs)V=Cu;else{V=gu;var G=fu}else(k=I.nodeName)&&k.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(V=vu);if(V&&(V=V(e,h))){Ys(x,V,a,E);break e}G&&G(e,I,h),e==="focusout"&&(G=I._wrapperState)&&G.controlled&&I.type==="number"&&si(I,"number",I.value)}switch(G=h?za(h):window,e){case"focusin":(Xs(G)||G.contentEditable==="true")&&(ka=G,Fi=h,bt=null);break;case"focusout":bt=Fi=ka=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,sc(x,a,E);break;case"selectionchange":if(bu)break;case"keydown":case"keyup":sc(x,a,E)}var W;if(wi)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Na?Js(e,a)&&($="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($="onCompositionStart");$&&(Ws&&a.locale!=="ko"&&(Na||$!=="onCompositionStart"?$==="onCompositionEnd"&&Na&&(W=Bs()):(Yo=E,xi="value"in Yo?Yo.value:Yo.textContent,Na=!0)),G=lr(h,$),0<G.length&&($=new Hs($,e,null,a,E),x.push({event:$,listeners:G}),W?$.data=W:(W=Ks(a),W!==null&&($.data=W)))),(W=cu?lu(e,a):du(e,a))&&(h=lr(h,"onBeforeInput"),0<h.length&&(E=new Hs("onBeforeInput","beforeinput",null,a,E),x.push({event:E,listeners:h}),E.data=W))}vc(x,o)})}function yt(e,o,a){return{instance:e,listener:o,currentTarget:a}}function lr(e,o){for(var a=o+"Capture",t=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=rt(e,a),i!=null&&t.unshift(yt(e,i,r)),i=rt(e,o),i!=null&&t.push(yt(e,i,r))),e=e.return}return t}function Fa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hc(e,o,a,t,r){for(var i=o._reactName,n=[];a!==null&&a!==t;){var c=a,u=c.alternate,h=c.stateNode;if(u!==null&&u===t)break;c.tag===5&&h!==null&&(c=h,r?(u=rt(a,i),u!=null&&n.unshift(yt(a,u,c))):r||(u=rt(a,i),u!=null&&n.push(yt(a,u,c)))),a=a.return}n.length!==0&&e.push({event:o,listeners:n})}var Iu=/\r\n?/g,Eu=/\u0000|\uFFFD/g;function Sc(e){return(typeof e=="string"?e:""+e).replace(Iu,`
`).replace(Eu,"")}function dr(e,o,a){if(o=Sc(o),Sc(e)!==o&&a)throw Error(l(425))}function ur(){}var Vi=null,Hi=null;function Gi(e,o){return e==="textarea"||e==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Wi=typeof setTimeout=="function"?setTimeout:void 0,xu=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,Ru=typeof queueMicrotask=="function"?queueMicrotask:typeof bc<"u"?function(e){return bc.resolve(null).then(e).catch(Pu)}:Wi;function Pu(e){setTimeout(function(){throw e})}function Qi(e,o){var a=o,t=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0){e.removeChild(r),pt(o);return}t--}else a!=="$"&&a!=="$?"&&a!=="$!"||t++;a=r}while(a);pt(o)}function ea(e){for(;e!=null;e=e.nextSibling){var o=e.nodeType;if(o===1||o===3)break;if(o===8){if(o=e.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return e}function Ac(e){e=e.previousSibling;for(var o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return e;o--}else a==="/$"&&o++}e=e.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),ko="__reactFiber$"+Ma,It="__reactProps$"+Ma,_o="__reactContainer$"+Ma,$i="__reactEvents$"+Ma,qu="__reactListeners$"+Ma,Du="__reactHandles$"+Ma;function ga(e){var o=e[ko];if(o)return o;for(var a=e.parentNode;a;){if(o=a[_o]||a[ko]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(e=Ac(e);e!==null;){if(a=e[ko])return a;e=Ac(e)}return o}e=a,a=e.parentNode}return null}function Et(e){return e=e[ko]||e[_o],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function za(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function mr(e){return e[It]||null}var Ji=[],_a=-1;function oa(e){return{current:e}}function Ae(e){0>_a||(e.current=Ji[_a],Ji[_a]=null,_a--)}function he(e,o){_a++,Ji[_a]=e.current,e.current=o}var aa={},We=oa(aa),ro=oa(!1),va=aa;function Ua(e,o){var a=e.type.contextTypes;if(!a)return aa;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===o)return t.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in a)r[i]=o[i];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=r),r}function io(e){return e=e.childContextTypes,e!=null}function pr(){Ae(ro),Ae(We)}function Tc(e,o,a){if(We.current!==aa)throw Error(l(168));he(We,o),he(ro,a)}function yc(e,o,a){var t=e.stateNode;if(o=o.childContextTypes,typeof t.getChildContext!="function")return a;t=t.getChildContext();for(var r in t)if(!(r in o))throw Error(l(108,me(e)||"Unknown",r));return N({},a,t)}function fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||aa,va=We.current,he(We,e),he(ro,ro.current),!0}function Ic(e,o,a){var t=e.stateNode;if(!t)throw Error(l(169));a?(e=yc(e,o,va),t.__reactInternalMemoizedMergedChildContext=e,Ae(ro),Ae(We),he(We,e)):Ae(ro),he(ro,a)}var Uo=null,gr=!1,Ki=!1;function Ec(e){Uo===null?Uo=[e]:Uo.push(e)}function Ou(e){gr=!0,Ec(e)}function ta(){if(!Ki&&Uo!==null){Ki=!0;var e=0,o=ue;try{var a=Uo;for(ue=1;e<a.length;e++){var t=a[e];do t=t(!0);while(t!==null)}Uo=null,gr=!1}catch(r){throw Uo!==null&&(Uo=Uo.slice(e+1)),Rs(hi,ta),r}finally{ue=o,Ki=!1}}return null}var Ba=[],ja=0,vr=null,Cr=0,Co=[],ho=0,Ca=null,Bo=1,jo="";function ha(e,o){Ba[ja++]=Cr,Ba[ja++]=vr,vr=e,Cr=o}function xc(e,o,a){Co[ho++]=Bo,Co[ho++]=jo,Co[ho++]=Ca,Ca=e;var t=Bo;e=jo;var r=32-yo(t)-1;t&=~(1<<r),a+=1;var i=32-yo(o)+r;if(30<i){var n=r-r%5;i=(t&(1<<n)-1).toString(32),t>>=n,r-=n,Bo=1<<32-yo(o)+r|a<<r|t,jo=i+e}else Bo=1<<i|a<<r|t,jo=e}function Xi(e){e.return!==null&&(ha(e,1),xc(e,1,0))}function Yi(e){for(;e===vr;)vr=Ba[--ja],Ba[ja]=null,Cr=Ba[--ja],Ba[ja]=null;for(;e===Ca;)Ca=Co[--ho],Co[ho]=null,jo=Co[--ho],Co[ho]=null,Bo=Co[--ho],Co[ho]=null}var po=null,fo=null,ye=!1,Eo=null;function Rc(e,o){var a=To(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=e,o=e.deletions,o===null?(e.deletions=[a],e.flags|=16):o.push(a)}function Pc(e,o){switch(e.tag){case 5:var a=e.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(e.stateNode=o,po=e,fo=ea(o.firstChild),!0):!1;case 6:return o=e.pendingProps===""||o.nodeType!==3?null:o,o!==null?(e.stateNode=o,po=e,fo=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=Ca!==null?{id:Bo,overflow:jo}:null,e.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=To(18,null,null,0),a.stateNode=o,a.return=e,e.child=a,po=e,fo=null,!0):!1;default:return!1}}function Zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function en(e){if(ye){var o=fo;if(o){var a=o;if(!Pc(e,o)){if(Zi(e))throw Error(l(418));o=ea(a.nextSibling);var t=po;o&&Pc(e,o)?Rc(t,a):(e.flags=e.flags&-4097|2,ye=!1,po=e)}}else{if(Zi(e))throw Error(l(418));e.flags=e.flags&-4097|2,ye=!1,po=e}}}function qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;po=e}function hr(e){if(e!==po)return!1;if(!ye)return qc(e),ye=!0,!1;var o;if((o=e.tag!==3)&&!(o=e.tag!==5)&&(o=e.type,o=o!=="head"&&o!=="body"&&!Gi(e.type,e.memoizedProps)),o&&(o=fo)){if(Zi(e))throw Dc(),Error(l(418));for(;o;)Rc(e,o),o=ea(o.nextSibling)}if(qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(o===0){fo=ea(e.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}e=e.nextSibling}fo=null}}else fo=po?ea(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=fo;e;)e=ea(e.nextSibling)}function Va(){fo=po=null,ye=!1}function on(e){Eo===null?Eo=[e]:Eo.push(e)}var wu=ge.ReactCurrentBatchConfig;function xt(e,o,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(l(309));var t=a.stateNode}if(!t)throw Error(l(147,e));var r=t,i=""+e;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===i?o.ref:(o=function(n){var c=r.refs;n===null?delete c[i]:c[i]=n},o._stringRef=i,o)}if(typeof e!="string")throw Error(l(284));if(!a._owner)throw Error(l(290,e))}return e}function Sr(e,o){throw e=Object.prototype.toString.call(o),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":e))}function Oc(e){var o=e._init;return o(e._payload)}function wc(e){function o(g,p){if(e){var C=g.deletions;C===null?(g.deletions=[p],g.flags|=16):C.push(p)}}function a(g,p){if(!e)return null;for(;p!==null;)o(g,p),p=p.sibling;return null}function t(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=ua(g,p),g.index=0,g.sibling=null,g}function i(g,p,C){return g.index=C,e?(C=g.alternate,C!==null?(C=C.index,C<p?(g.flags|=2,p):C):(g.flags|=2,p)):(g.flags|=1048576,p)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,p,C,q){return p===null||p.tag!==6?(p=Qn(C,g.mode,q),p.return=g,p):(p=r(p,C),p.return=g,p)}function u(g,p,C,q){var V=C.type;return V===le?E(g,p,C.props.children,q,C.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Be&&Oc(V)===p.type)?(q=r(p,C.props),q.ref=xt(g,p,C),q.return=g,q):(q=Vr(C.type,C.key,C.props,null,g.mode,q),q.ref=xt(g,p,C),q.return=g,q)}function h(g,p,C,q){return p===null||p.tag!==4||p.stateNode.containerInfo!==C.containerInfo||p.stateNode.implementation!==C.implementation?(p=$n(C,g.mode,q),p.return=g,p):(p=r(p,C.children||[]),p.return=g,p)}function E(g,p,C,q,V){return p===null||p.tag!==7?(p=xa(C,g.mode,q,V),p.return=g,p):(p=r(p,C),p.return=g,p)}function x(g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Qn(""+p,g.mode,C),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oe:return C=Vr(p.type,p.key,p.props,null,g.mode,C),C.ref=xt(g,null,p),C.return=g,C;case Re:return p=$n(p,g.mode,C),p.return=g,p;case Be:var q=p._init;return x(g,q(p._payload),C)}if(ot(p)||H(p))return p=xa(p,g.mode,C,null),p.return=g,p;Sr(g,p)}return null}function I(g,p,C,q){var V=p!==null?p.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return V!==null?null:c(g,p,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Oe:return C.key===V?u(g,p,C,q):null;case Re:return C.key===V?h(g,p,C,q):null;case Be:return V=C._init,I(g,p,V(C._payload),q)}if(ot(C)||H(C))return V!==null?null:E(g,p,C,q,null);Sr(g,C)}return null}function k(g,p,C,q,V){if(typeof q=="string"&&q!==""||typeof q=="number")return g=g.get(C)||null,c(p,g,""+q,V);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Oe:return g=g.get(q.key===null?C:q.key)||null,u(p,g,q,V);case Re:return g=g.get(q.key===null?C:q.key)||null,h(p,g,q,V);case Be:var G=q._init;return k(g,p,C,G(q._payload),V)}if(ot(q)||H(q))return g=g.get(C)||null,E(p,g,q,V,null);Sr(p,q)}return null}function _(g,p,C,q){for(var V=null,G=null,W=p,$=p=0,ze=null;W!==null&&$<C.length;$++){W.index>$?(ze=W,W=null):ze=W.sibling;var se=I(g,W,C[$],q);if(se===null){W===null&&(W=ze);break}e&&W&&se.alternate===null&&o(g,W),p=i(se,p,$),G===null?V=se:G.sibling=se,G=se,W=ze}if($===C.length)return a(g,W),ye&&ha(g,$),V;if(W===null){for(;$<C.length;$++)W=x(g,C[$],q),W!==null&&(p=i(W,p,$),G===null?V=W:G.sibling=W,G=W);return ye&&ha(g,$),V}for(W=t(g,W);$<C.length;$++)ze=k(W,g,$,C[$],q),ze!==null&&(e&&ze.alternate!==null&&W.delete(ze.key===null?$:ze.key),p=i(ze,p,$),G===null?V=ze:G.sibling=ze,G=ze);return e&&W.forEach(function(ma){return o(g,ma)}),ye&&ha(g,$),V}function B(g,p,C,q){var V=H(C);if(typeof V!="function")throw Error(l(150));if(C=V.call(C),C==null)throw Error(l(151));for(var G=V=null,W=p,$=p=0,ze=null,se=C.next();W!==null&&!se.done;$++,se=C.next()){W.index>$?(ze=W,W=null):ze=W.sibling;var ma=I(g,W,se.value,q);if(ma===null){W===null&&(W=ze);break}e&&W&&ma.alternate===null&&o(g,W),p=i(ma,p,$),G===null?V=ma:G.sibling=ma,G=ma,W=ze}if(se.done)return a(g,W),ye&&ha(g,$),V;if(W===null){for(;!se.done;$++,se=C.next())se=x(g,se.value,q),se!==null&&(p=i(se,p,$),G===null?V=se:G.sibling=se,G=se);return ye&&ha(g,$),V}for(W=t(g,W);!se.done;$++,se=C.next())se=k(W,g,$,se.value,q),se!==null&&(e&&se.alternate!==null&&W.delete(se.key===null?$:se.key),p=i(se,p,$),G===null?V=se:G.sibling=se,G=se);return e&&W.forEach(function(um){return o(g,um)}),ye&&ha(g,$),V}function De(g,p,C,q){if(typeof C=="object"&&C!==null&&C.type===le&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Oe:e:{for(var V=C.key,G=p;G!==null;){if(G.key===V){if(V=C.type,V===le){if(G.tag===7){a(g,G.sibling),p=r(G,C.props.children),p.return=g,g=p;break e}}else if(G.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Be&&Oc(V)===G.type){a(g,G.sibling),p=r(G,C.props),p.ref=xt(g,G,C),p.return=g,g=p;break e}a(g,G);break}else o(g,G);G=G.sibling}C.type===le?(p=xa(C.props.children,g.mode,q,C.key),p.return=g,g=p):(q=Vr(C.type,C.key,C.props,null,g.mode,q),q.ref=xt(g,p,C),q.return=g,g=q)}return n(g);case Re:e:{for(G=C.key;p!==null;){if(p.key===G)if(p.tag===4&&p.stateNode.containerInfo===C.containerInfo&&p.stateNode.implementation===C.implementation){a(g,p.sibling),p=r(p,C.children||[]),p.return=g,g=p;break e}else{a(g,p);break}else o(g,p);p=p.sibling}p=$n(C,g.mode,q),p.return=g,g=p}return n(g);case Be:return G=C._init,De(g,p,G(C._payload),q)}if(ot(C))return _(g,p,C,q);if(H(C))return B(g,p,C,q);Sr(g,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,p!==null&&p.tag===6?(a(g,p.sibling),p=r(p,C),p.return=g,g=p):(a(g,p),p=Qn(C,g.mode,q),p.return=g,g=p),n(g)):a(g,p)}return De}var Ha=wc(!0),Nc=wc(!1),br=oa(null),Ar=null,Ga=null,an=null;function tn(){an=Ga=Ar=null}function rn(e){var o=br.current;Ae(br),e._currentValue=o}function nn(e,o,a){for(;e!==null;){var t=e.alternate;if((e.childLanes&o)!==o?(e.childLanes|=o,t!==null&&(t.childLanes|=o)):t!==null&&(t.childLanes&o)!==o&&(t.childLanes|=o),e===a)break;e=e.return}}function Wa(e,o){Ar=e,an=Ga=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&o)!==0&&(no=!0),e.firstContext=null)}function So(e){var o=e._currentValue;if(an!==e)if(e={context:e,memoizedValue:o,next:null},Ga===null){if(Ar===null)throw Error(l(308));Ga=e,Ar.dependencies={lanes:0,firstContext:e}}else Ga=Ga.next=e;return o}var Sa=null;function sn(e){Sa===null?Sa=[e]:Sa.push(e)}function kc(e,o,a,t){var r=o.interleaved;return r===null?(a.next=a,sn(o)):(a.next=r.next,r.next=a),o.interleaved=a,Vo(e,t)}function Vo(e,o){e.lanes|=o;var a=e.alternate;for(a!==null&&(a.lanes|=o),a=e,e=e.return;e!==null;)e.childLanes|=o,a=e.alternate,a!==null&&(a.childLanes|=o),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ra=!1;function cn(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,o){e=e.updateQueue,o.updateQueue===e&&(o.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ho(e,o){return{eventTime:e,lane:o,tag:0,payload:null,callback:null,next:null}}function ia(e,o,a){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ne&2)!==0){var r=t.pending;return r===null?o.next=o:(o.next=r.next,r.next=o),t.pending=o,Vo(e,a)}return r=t.interleaved,r===null?(o.next=o,sn(t)):(o.next=r.next,r.next=o),t.interleaved=o,Vo(e,a)}function Tr(e,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var t=o.lanes;t&=e.pendingLanes,a|=t,o.lanes=a,Ai(e,a)}}function Fc(e,o){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?r=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?r=i=o:i=i.next=o}else r=i=o;a={baseState:t.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:t.shared,effects:t.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=o:e.next=o,a.lastBaseUpdate=o}function yr(e,o,a,t){var r=e.updateQueue;ra=!1;var i=r.firstBaseUpdate,n=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var u=c,h=u.next;u.next=null,n===null?i=h:n.next=h,n=u;var E=e.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==n&&(c===null?E.firstBaseUpdate=h:c.next=h,E.lastBaseUpdate=u))}if(i!==null){var x=r.baseState;n=0,E=h=u=null,c=i;do{var I=c.lane,k=c.eventTime;if((t&I)===I){E!==null&&(E=E.next={eventTime:k,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var _=e,B=c;switch(I=o,k=a,B.tag){case 1:if(_=B.payload,typeof _=="function"){x=_.call(k,x,I);break e}x=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=B.payload,I=typeof _=="function"?_.call(k,x,I):_,I==null)break e;x=N({},x,I);break e;case 2:ra=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,I=r.effects,I===null?r.effects=[c]:I.push(c))}else k={eventTime:k,lane:I,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(h=E=k,u=x):E=E.next=k,n|=I;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;I=c,c=I.next,I.next=null,r.lastBaseUpdate=I,r.shared.pending=null}}while(!0);if(E===null&&(u=x),r.baseState=u,r.firstBaseUpdate=h,r.lastBaseUpdate=E,o=r.shared.interleaved,o!==null){r=o;do n|=r.lane,r=r.next;while(r!==o)}else i===null&&(r.shared.lanes=0);Ta|=n,e.lanes=n,e.memoizedState=x}}function Mc(e,o,a){if(e=o.effects,o.effects=null,e!==null)for(o=0;o<e.length;o++){var t=e[o],r=t.callback;if(r!==null){if(t.callback=null,t=a,typeof r!="function")throw Error(l(191,r));r.call(t)}}}var Rt={},Lo=oa(Rt),Pt=oa(Rt),qt=oa(Rt);function ba(e){if(e===Rt)throw Error(l(174));return e}function ln(e,o){switch(he(qt,o),he(Pt,e),he(Lo,Rt),e=o.nodeType,e){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:li(null,"");break;default:e=e===8?o.parentNode:o,o=e.namespaceURI||null,e=e.tagName,o=li(o,e)}Ae(Lo),he(Lo,o)}function Qa(){Ae(Lo),Ae(Pt),Ae(qt)}function zc(e){ba(qt.current);var o=ba(Lo.current),a=li(o,e.type);o!==a&&(he(Pt,e),he(Lo,a))}function dn(e){Pt.current===e&&(Ae(Lo),Ae(Pt))}var Ee=oa(0);function Ir(e){for(var o=e;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var un=[];function mn(){for(var e=0;e<un.length;e++)un[e]._workInProgressVersionPrimary=null;un.length=0}var Er=ge.ReactCurrentDispatcher,pn=ge.ReactCurrentBatchConfig,Aa=0,xe=null,Ne=null,Fe=null,xr=!1,Dt=!1,Ot=0,Nu=0;function Qe(){throw Error(l(321))}function fn(e,o){if(o===null)return!1;for(var a=0;a<o.length&&a<e.length;a++)if(!Io(e[a],o[a]))return!1;return!0}function gn(e,o,a,t,r,i){if(Aa=i,xe=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Er.current=e===null||e.memoizedState===null?Mu:zu,e=a(t,r),Dt){i=0;do{if(Dt=!1,Ot=0,25<=i)throw Error(l(301));i+=1,Fe=Ne=null,o.updateQueue=null,Er.current=_u,e=a(t,r)}while(Dt)}if(Er.current=qr,o=Ne!==null&&Ne.next!==null,Aa=0,Fe=Ne=xe=null,xr=!1,o)throw Error(l(300));return e}function vn(){var e=Ot!==0;return Ot=0,e}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function bo(){if(Ne===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var o=Fe===null?xe.memoizedState:Fe.next;if(o!==null)Fe=o,Ne=e;else{if(e===null)throw Error(l(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function wt(e,o){return typeof o=="function"?o(e):o}function Cn(e){var o=bo(),a=o.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var t=Ne,r=t.baseQueue,i=a.pending;if(i!==null){if(r!==null){var n=r.next;r.next=i.next,i.next=n}t.baseQueue=r=i,a.pending=null}if(r!==null){i=r.next,t=t.baseState;var c=n=null,u=null,h=i;do{var E=h.lane;if((Aa&E)===E)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),t=h.hasEagerState?h.eagerState:e(t,h.action);else{var x={lane:E,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=x,n=t):u=u.next=x,xe.lanes|=E,Ta|=E}h=h.next}while(h!==null&&h!==i);u===null?n=t:u.next=c,Io(t,o.memoizedState)||(no=!0),o.memoizedState=t,o.baseState=n,o.baseQueue=u,a.lastRenderedState=t}if(e=a.interleaved,e!==null){r=e;do i=r.lane,xe.lanes|=i,Ta|=i,r=r.next;while(r!==e)}else r===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function hn(e){var o=bo(),a=o.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var t=a.dispatch,r=a.pending,i=o.memoizedState;if(r!==null){a.pending=null;var n=r=r.next;do i=e(i,n.action),n=n.next;while(n!==r);Io(i,o.memoizedState)||(no=!0),o.memoizedState=i,o.baseQueue===null&&(o.baseState=i),a.lastRenderedState=i}return[i,t]}function _c(){}function Uc(e,o){var a=xe,t=bo(),r=o(),i=!Io(t.memoizedState,r);if(i&&(t.memoizedState=r,no=!0),t=t.queue,Sn(Vc.bind(null,a,t,e),[e]),t.getSnapshot!==o||i||Fe!==null&&Fe.memoizedState.tag&1){if(a.flags|=2048,Nt(9,jc.bind(null,a,t,r,o),void 0,null),Me===null)throw Error(l(349));(Aa&30)!==0||Bc(a,o,r)}return r}function Bc(e,o,a){e.flags|=16384,e={getSnapshot:o,value:a},o=xe.updateQueue,o===null?(o={lastEffect:null,stores:null},xe.updateQueue=o,o.stores=[e]):(a=o.stores,a===null?o.stores=[e]:a.push(e))}function jc(e,o,a,t){o.value=a,o.getSnapshot=t,Hc(o)&&Gc(e)}function Vc(e,o,a){return a(function(){Hc(o)&&Gc(e)})}function Hc(e){var o=e.getSnapshot;e=e.value;try{var a=o();return!Io(e,a)}catch{return!0}}function Gc(e){var o=Vo(e,1);o!==null&&qo(o,e,1,-1)}function Wc(e){var o=Fo();return typeof e=="function"&&(e=e()),o.memoizedState=o.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wt,lastRenderedState:e},o.queue=e,e=e.dispatch=Fu.bind(null,xe,e),[o.memoizedState,e]}function Nt(e,o,a,t){return e={tag:e,create:o,destroy:a,deps:t,next:null},o=xe.updateQueue,o===null?(o={lastEffect:null,stores:null},xe.updateQueue=o,o.lastEffect=e.next=e):(a=o.lastEffect,a===null?o.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,o.lastEffect=e)),e}function Qc(){return bo().memoizedState}function Rr(e,o,a,t){var r=Fo();xe.flags|=e,r.memoizedState=Nt(1|o,a,void 0,t===void 0?null:t)}function Pr(e,o,a,t){var r=bo();t=t===void 0?null:t;var i=void 0;if(Ne!==null){var n=Ne.memoizedState;if(i=n.destroy,t!==null&&fn(t,n.deps)){r.memoizedState=Nt(o,a,i,t);return}}xe.flags|=e,r.memoizedState=Nt(1|o,a,i,t)}function $c(e,o){return Rr(8390656,8,e,o)}function Sn(e,o){return Pr(2048,8,e,o)}function Jc(e,o){return Pr(4,2,e,o)}function Kc(e,o){return Pr(4,4,e,o)}function Xc(e,o){if(typeof o=="function")return e=e(),o(e),function(){o(null)};if(o!=null)return e=e(),o.current=e,function(){o.current=null}}function Yc(e,o,a){return a=a!=null?a.concat([e]):null,Pr(4,4,Xc.bind(null,o,e),a)}function bn(){}function Zc(e,o){var a=bo();o=o===void 0?null:o;var t=a.memoizedState;return t!==null&&o!==null&&fn(o,t[1])?t[0]:(a.memoizedState=[e,o],e)}function el(e,o){var a=bo();o=o===void 0?null:o;var t=a.memoizedState;return t!==null&&o!==null&&fn(o,t[1])?t[0]:(e=e(),a.memoizedState=[e,o],e)}function ol(e,o,a){return(Aa&21)===0?(e.baseState&&(e.baseState=!1,no=!0),e.memoizedState=a):(Io(a,o)||(a=Os(),xe.lanes|=a,Ta|=a,e.baseState=!0),o)}function ku(e,o){var a=ue;ue=a!==0&&4>a?a:4,e(!0);var t=pn.transition;pn.transition={};try{e(!1),o()}finally{ue=a,pn.transition=t}}function al(){return bo().memoizedState}function Lu(e,o,a){var t=la(e);if(a={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null},tl(e))rl(o,a);else if(a=kc(e,o,a,t),a!==null){var r=Ze();qo(a,e,t,r),il(a,o,t)}}function Fu(e,o,a){var t=la(e),r={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null};if(tl(e))rl(o,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=o.lastRenderedReducer,i!==null))try{var n=o.lastRenderedState,c=i(n,a);if(r.hasEagerState=!0,r.eagerState=c,Io(c,n)){var u=o.interleaved;u===null?(r.next=r,sn(o)):(r.next=u.next,u.next=r),o.interleaved=r;return}}catch{}finally{}a=kc(e,o,r,t),a!==null&&(r=Ze(),qo(a,e,t,r),il(a,o,t))}}function tl(e){var o=e.alternate;return e===xe||o!==null&&o===xe}function rl(e,o){Dt=xr=!0;var a=e.pending;a===null?o.next=o:(o.next=a.next,a.next=o),e.pending=o}function il(e,o,a){if((a&4194240)!==0){var t=o.lanes;t&=e.pendingLanes,a|=t,o.lanes=a,Ai(e,a)}}var qr={readContext:So,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Mu={readContext:So,useCallback:function(e,o){return Fo().memoizedState=[e,o===void 0?null:o],e},useContext:So,useEffect:$c,useImperativeHandle:function(e,o,a){return a=a!=null?a.concat([e]):null,Rr(4194308,4,Xc.bind(null,o,e),a)},useLayoutEffect:function(e,o){return Rr(4194308,4,e,o)},useInsertionEffect:function(e,o){return Rr(4,2,e,o)},useMemo:function(e,o){var a=Fo();return o=o===void 0?null:o,e=e(),a.memoizedState=[e,o],e},useReducer:function(e,o,a){var t=Fo();return o=a!==void 0?a(o):o,t.memoizedState=t.baseState=o,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},t.queue=e,e=e.dispatch=Lu.bind(null,xe,e),[t.memoizedState,e]},useRef:function(e){var o=Fo();return e={current:e},o.memoizedState=e},useState:Wc,useDebugValue:bn,useDeferredValue:function(e){return Fo().memoizedState=e},useTransition:function(){var e=Wc(!1),o=e[0];return e=ku.bind(null,e[1]),Fo().memoizedState=e,[o,e]},useMutableSource:function(){},useSyncExternalStore:function(e,o,a){var t=xe,r=Fo();if(ye){if(a===void 0)throw Error(l(407));a=a()}else{if(a=o(),Me===null)throw Error(l(349));(Aa&30)!==0||Bc(t,o,a)}r.memoizedState=a;var i={value:a,getSnapshot:o};return r.queue=i,$c(Vc.bind(null,t,i,e),[e]),t.flags|=2048,Nt(9,jc.bind(null,t,i,a,o),void 0,null),a},useId:function(){var e=Fo(),o=Me.identifierPrefix;if(ye){var a=jo,t=Bo;a=(t&~(1<<32-yo(t)-1)).toString(32)+a,o=":"+o+"R"+a,a=Ot++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=Nu++,o=":"+o+"r"+a.toString(32)+":";return e.memoizedState=o},unstable_isNewReconciler:!1},zu={readContext:So,useCallback:Zc,useContext:So,useEffect:Sn,useImperativeHandle:Yc,useInsertionEffect:Jc,useLayoutEffect:Kc,useMemo:el,useReducer:Cn,useRef:Qc,useState:function(){return Cn(wt)},useDebugValue:bn,useDeferredValue:function(e){var o=bo();return ol(o,Ne.memoizedState,e)},useTransition:function(){var e=Cn(wt)[0],o=bo().memoizedState;return[e,o]},useMutableSource:_c,useSyncExternalStore:Uc,useId:al,unstable_isNewReconciler:!1},_u={readContext:So,useCallback:Zc,useContext:So,useEffect:Sn,useImperativeHandle:Yc,useInsertionEffect:Jc,useLayoutEffect:Kc,useMemo:el,useReducer:hn,useRef:Qc,useState:function(){return hn(wt)},useDebugValue:bn,useDeferredValue:function(e){var o=bo();return Ne===null?o.memoizedState=e:ol(o,Ne.memoizedState,e)},useTransition:function(){var e=hn(wt)[0],o=bo().memoizedState;return[e,o]},useMutableSource:_c,useSyncExternalStore:Uc,useId:al,unstable_isNewReconciler:!1};function xo(e,o){if(e&&e.defaultProps){o=N({},o),e=e.defaultProps;for(var a in e)o[a]===void 0&&(o[a]=e[a]);return o}return o}function An(e,o,a,t){o=e.memoizedState,a=a(t,o),a=a==null?o:N({},o,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Dr={isMounted:function(e){return(e=e._reactInternals)?fa(e)===e:!1},enqueueSetState:function(e,o,a){e=e._reactInternals;var t=Ze(),r=la(e),i=Ho(t,r);i.payload=o,a!=null&&(i.callback=a),o=ia(e,i,r),o!==null&&(qo(o,e,r,t),Tr(o,e,r))},enqueueReplaceState:function(e,o,a){e=e._reactInternals;var t=Ze(),r=la(e),i=Ho(t,r);i.tag=1,i.payload=o,a!=null&&(i.callback=a),o=ia(e,i,r),o!==null&&(qo(o,e,r,t),Tr(o,e,r))},enqueueForceUpdate:function(e,o){e=e._reactInternals;var a=Ze(),t=la(e),r=Ho(a,t);r.tag=2,o!=null&&(r.callback=o),o=ia(e,r,t),o!==null&&(qo(o,e,t,a),Tr(o,e,t))}};function nl(e,o,a,t,r,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,i,n):o.prototype&&o.prototype.isPureReactComponent?!St(a,t)||!St(r,i):!0}function sl(e,o,a){var t=!1,r=aa,i=o.contextType;return typeof i=="object"&&i!==null?i=So(i):(r=io(o)?va:We.current,t=o.contextTypes,i=(t=t!=null)?Ua(e,r):aa),o=new o(a,i),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Dr,e.stateNode=o,o._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),o}function cl(e,o,a,t){e=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,t),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,t),o.state!==e&&Dr.enqueueReplaceState(o,o.state,null)}function Tn(e,o,a,t){var r=e.stateNode;r.props=a,r.state=e.memoizedState,r.refs={},cn(e);var i=o.contextType;typeof i=="object"&&i!==null?r.context=So(i):(i=io(o)?va:We.current,r.context=Ua(e,i)),r.state=e.memoizedState,i=o.getDerivedStateFromProps,typeof i=="function"&&(An(e,o,i,a),r.state=e.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Dr.enqueueReplaceState(r,r.state,null),yr(e,a,r,t),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function $a(e,o){try{var a="",t=o;do a+=ae(t),t=t.return;while(t);var r=a}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:o,stack:r,digest:null}}function yn(e,o,a){return{value:e,source:null,stack:a??null,digest:o??null}}function In(e,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var Uu=typeof WeakMap=="function"?WeakMap:Map;function ll(e,o,a){a=Ho(-1,a),a.tag=3,a.payload={element:null};var t=o.value;return a.callback=function(){Mr||(Mr=!0,_n=t),In(e,o)},a}function dl(e,o,a){a=Ho(-1,a),a.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var r=o.value;a.payload=function(){return t(r)},a.callback=function(){In(e,o)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){In(e,o),typeof t!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var n=o.stack;this.componentDidCatch(o.value,{componentStack:n!==null?n:""})}),a}function ul(e,o,a){var t=e.pingCache;if(t===null){t=e.pingCache=new Uu;var r=new Set;t.set(o,r)}else r=t.get(o),r===void 0&&(r=new Set,t.set(o,r));r.has(a)||(r.add(a),e=em.bind(null,e,o,a),o.then(e,e))}function ml(e){do{var o;if((o=e.tag===13)&&(o=e.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return e;e=e.return}while(e!==null);return null}function pl(e,o,a,t,r){return(e.mode&1)===0?(e===o?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=Ho(-1,1),o.tag=2,ia(a,o,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var Bu=ge.ReactCurrentOwner,no=!1;function Ye(e,o,a,t){o.child=e===null?Nc(o,null,a,t):Ha(o,e.child,a,t)}function fl(e,o,a,t,r){a=a.render;var i=o.ref;return Wa(o,r),t=gn(e,o,a,t,i,r),a=vn(),e!==null&&!no?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~r,Go(e,o,r)):(ye&&a&&Xi(o),o.flags|=1,Ye(e,o,t,r),o.child)}function gl(e,o,a,t,r){if(e===null){var i=a.type;return typeof i=="function"&&!Wn(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=i,vl(e,o,i,t,r)):(e=Vr(a.type,null,t,o,o.mode,r),e.ref=o.ref,e.return=o,o.child=e)}if(i=e.child,(e.lanes&r)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:St,a(n,t)&&e.ref===o.ref)return Go(e,o,r)}return o.flags|=1,e=ua(i,t),e.ref=o.ref,e.return=o,o.child=e}function vl(e,o,a,t,r){if(e!==null){var i=e.memoizedProps;if(St(i,t)&&e.ref===o.ref)if(no=!1,o.pendingProps=t=i,(e.lanes&r)!==0)(e.flags&131072)!==0&&(no=!0);else return o.lanes=e.lanes,Go(e,o,r)}return En(e,o,a,t,r)}function Cl(e,o,a){var t=o.pendingProps,r=t.children,i=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ka,go),go|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:e,cachePool:null,transitions:null},o.updateQueue=null,he(Ka,go),go|=e,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=i!==null?i.baseLanes:a,he(Ka,go),go|=t}else i!==null?(t=i.baseLanes|a,o.memoizedState=null):t=a,he(Ka,go),go|=t;return Ye(e,o,r,a),o.child}function hl(e,o){var a=o.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function En(e,o,a,t,r){var i=io(a)?va:We.current;return i=Ua(o,i),Wa(o,r),a=gn(e,o,a,t,i,r),t=vn(),e!==null&&!no?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~r,Go(e,o,r)):(ye&&t&&Xi(o),o.flags|=1,Ye(e,o,a,r),o.child)}function Sl(e,o,a,t,r){if(io(a)){var i=!0;fr(o)}else i=!1;if(Wa(o,r),o.stateNode===null)wr(e,o),sl(o,a,t),Tn(o,a,t,r),t=!0;else if(e===null){var n=o.stateNode,c=o.memoizedProps;n.props=c;var u=n.context,h=a.contextType;typeof h=="object"&&h!==null?h=So(h):(h=io(a)?va:We.current,h=Ua(o,h));var E=a.getDerivedStateFromProps,x=typeof E=="function"||typeof n.getSnapshotBeforeUpdate=="function";x||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c!==t||u!==h)&&cl(o,n,t,h),ra=!1;var I=o.memoizedState;n.state=I,yr(o,t,n,r),u=o.memoizedState,c!==t||I!==u||ro.current||ra?(typeof E=="function"&&(An(o,a,E,t),u=o.memoizedState),(c=ra||nl(o,a,c,t,I,u,h))?(x||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(o.flags|=4194308)):(typeof n.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=t,o.memoizedState=u),n.props=t,n.state=u,n.context=h,t=c):(typeof n.componentDidMount=="function"&&(o.flags|=4194308),t=!1)}else{n=o.stateNode,Lc(e,o),c=o.memoizedProps,h=o.type===o.elementType?c:xo(o.type,c),n.props=h,x=o.pendingProps,I=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=So(u):(u=io(a)?va:We.current,u=Ua(o,u));var k=a.getDerivedStateFromProps;(E=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c!==x||I!==u)&&cl(o,n,t,u),ra=!1,I=o.memoizedState,n.state=I,yr(o,t,n,r);var _=o.memoizedState;c!==x||I!==_||ro.current||ra?(typeof k=="function"&&(An(o,a,k,t),_=o.memoizedState),(h=ra||nl(o,a,h,t,I,_,u)||!1)?(E||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(t,_,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(t,_,u)),typeof n.componentDidUpdate=="function"&&(o.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&I===e.memoizedState||(o.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&I===e.memoizedState||(o.flags|=1024),o.memoizedProps=t,o.memoizedState=_),n.props=t,n.state=_,n.context=u,t=h):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&I===e.memoizedState||(o.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&I===e.memoizedState||(o.flags|=1024),t=!1)}return xn(e,o,a,t,i,r)}function xn(e,o,a,t,r,i){hl(e,o);var n=(o.flags&128)!==0;if(!t&&!n)return r&&Ic(o,a,!1),Go(e,o,i);t=o.stateNode,Bu.current=o;var c=n&&typeof a.getDerivedStateFromError!="function"?null:t.render();return o.flags|=1,e!==null&&n?(o.child=Ha(o,e.child,null,i),o.child=Ha(o,null,c,i)):Ye(e,o,c,i),o.memoizedState=t.state,r&&Ic(o,a,!0),o.child}function bl(e){var o=e.stateNode;o.pendingContext?Tc(e,o.pendingContext,o.pendingContext!==o.context):o.context&&Tc(e,o.context,!1),ln(e,o.containerInfo)}function Al(e,o,a,t,r){return Va(),on(r),o.flags|=256,Ye(e,o,a,t),o.child}var Rn={dehydrated:null,treeContext:null,retryLane:0};function Pn(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tl(e,o,a){var t=o.pendingProps,r=Ee.current,i=!1,n=(o.flags&128)!==0,c;if((c=n)||(c=e!==null&&e.memoizedState===null?!1:(r&2)!==0),c?(i=!0,o.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),he(Ee,r&1),e===null)return en(o),e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((o.mode&1)===0?o.lanes=1:e.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(n=t.children,e=t.fallback,i?(t=o.mode,i=o.child,n={mode:"hidden",children:n},(t&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=Hr(n,t,0,null),e=xa(e,t,a,null),i.return=o,e.return=o,i.sibling=e,o.child=i,o.child.memoizedState=Pn(a),o.memoizedState=Rn,e):qn(o,n));if(r=e.memoizedState,r!==null&&(c=r.dehydrated,c!==null))return ju(e,o,n,t,c,r,a);if(i){i=t.fallback,n=o.mode,r=e.child,c=r.sibling;var u={mode:"hidden",children:t.children};return(n&1)===0&&o.child!==r?(t=o.child,t.childLanes=0,t.pendingProps=u,o.deletions=null):(t=ua(r,u),t.subtreeFlags=r.subtreeFlags&14680064),c!==null?i=ua(c,i):(i=xa(i,n,a,null),i.flags|=2),i.return=o,t.return=o,t.sibling=i,o.child=t,t=i,i=o.child,n=e.child.memoizedState,n=n===null?Pn(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,o.memoizedState=Rn,t}return i=e.child,e=i.sibling,t=ua(i,{mode:"visible",children:t.children}),(o.mode&1)===0&&(t.lanes=a),t.return=o,t.sibling=null,e!==null&&(a=o.deletions,a===null?(o.deletions=[e],o.flags|=16):a.push(e)),o.child=t,o.memoizedState=null,t}function qn(e,o){return o=Hr({mode:"visible",children:o},e.mode,0,null),o.return=e,e.child=o}function Or(e,o,a,t){return t!==null&&on(t),Ha(o,e.child,null,a),e=qn(o,o.pendingProps.children),e.flags|=2,o.memoizedState=null,e}function ju(e,o,a,t,r,i,n){if(a)return o.flags&256?(o.flags&=-257,t=yn(Error(l(422))),Or(e,o,n,t)):o.memoizedState!==null?(o.child=e.child,o.flags|=128,null):(i=t.fallback,r=o.mode,t=Hr({mode:"visible",children:t.children},r,0,null),i=xa(i,r,n,null),i.flags|=2,t.return=o,i.return=o,t.sibling=i,o.child=t,(o.mode&1)!==0&&Ha(o,e.child,null,n),o.child.memoizedState=Pn(n),o.memoizedState=Rn,i);if((o.mode&1)===0)return Or(e,o,n,null);if(r.data==="$!"){if(t=r.nextSibling&&r.nextSibling.dataset,t)var c=t.dgst;return t=c,i=Error(l(419)),t=yn(i,t,void 0),Or(e,o,n,t)}if(c=(n&e.childLanes)!==0,no||c){if(t=Me,t!==null){switch(n&-n){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(t.suspendedLanes|n))!==0?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Vo(e,r),qo(t,e,r,-1))}return Gn(),t=yn(Error(l(421))),Or(e,o,n,t)}return r.data==="$?"?(o.flags|=128,o.child=e.child,o=om.bind(null,e),r._reactRetry=o,null):(e=i.treeContext,fo=ea(r.nextSibling),po=o,ye=!0,Eo=null,e!==null&&(Co[ho++]=Bo,Co[ho++]=jo,Co[ho++]=Ca,Bo=e.id,jo=e.overflow,Ca=o),o=qn(o,t.children),o.flags|=4096,o)}function yl(e,o,a){e.lanes|=o;var t=e.alternate;t!==null&&(t.lanes|=o),nn(e.return,o,a)}function Dn(e,o,a,t,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:r}:(i.isBackwards=o,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=a,i.tailMode=r)}function Il(e,o,a){var t=o.pendingProps,r=t.revealOrder,i=t.tail;if(Ye(e,o,t.children,a),t=Ee.current,(t&2)!==0)t=t&1|2,o.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=o.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yl(e,a,o);else if(e.tag===19)yl(e,a,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break e;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(he(Ee,t),(o.mode&1)===0)o.memoizedState=null;else switch(r){case"forwards":for(a=o.child,r=null;a!==null;)e=a.alternate,e!==null&&Ir(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=o.child,o.child=null):(r=a.sibling,a.sibling=null),Dn(o,!1,r,a,i);break;case"backwards":for(a=null,r=o.child,o.child=null;r!==null;){if(e=r.alternate,e!==null&&Ir(e)===null){o.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Dn(o,!0,a,null,i);break;case"together":Dn(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function wr(e,o){(o.mode&1)===0&&e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2)}function Go(e,o,a){if(e!==null&&(o.dependencies=e.dependencies),Ta|=o.lanes,(a&o.childLanes)===0)return null;if(e!==null&&o.child!==e.child)throw Error(l(153));if(o.child!==null){for(e=o.child,a=ua(e,e.pendingProps),o.child=a,a.return=o;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=o;a.sibling=null}return o.child}function Vu(e,o,a){switch(o.tag){case 3:bl(o),Va();break;case 5:zc(o);break;case 1:io(o.type)&&fr(o);break;case 4:ln(o,o.stateNode.containerInfo);break;case 10:var t=o.type._context,r=o.memoizedProps.value;he(br,t._currentValue),t._currentValue=r;break;case 13:if(t=o.memoizedState,t!==null)return t.dehydrated!==null?(he(Ee,Ee.current&1),o.flags|=128,null):(a&o.child.childLanes)!==0?Tl(e,o,a):(he(Ee,Ee.current&1),e=Go(e,o,a),e!==null?e.sibling:null);he(Ee,Ee.current&1);break;case 19:if(t=(a&o.childLanes)!==0,(e.flags&128)!==0){if(t)return Il(e,o,a);o.flags|=128}if(r=o.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),he(Ee,Ee.current),t)break;return null;case 22:case 23:return o.lanes=0,Cl(e,o,a)}return Go(e,o,a)}var El,On,xl,Rl;El=function(e,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},On=function(){},xl=function(e,o,a,t){var r=e.memoizedProps;if(r!==t){e=o.stateNode,ba(Lo.current);var i=null;switch(a){case"input":r=je(e,r),t=je(e,t),i=[];break;case"select":r=N({},r,{value:void 0}),t=N({},t,{value:void 0}),i=[];break;case"textarea":r=ci(e,r),t=ci(e,t),i=[];break;default:typeof r.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=ur)}di(a,t);var n;a=null;for(h in r)if(!t.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var c=r[h];for(n in c)c.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(b.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in t){var u=t[h];if(c=r!=null?r[h]:void 0,t.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(n in c)!c.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&c[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(h,a)),a=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(b.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&be("scroll",e),i||c===u||(i=[])):(i=i||[]).push(h,u))}a&&(i=i||[]).push("style",a);var h=i;(o.updateQueue=h)&&(o.flags|=4)}},Rl=function(e,o,a,t){a!==t&&(o.flags|=4)};function kt(e,o){if(!ye)switch(e.tailMode){case"hidden":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?o||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function $e(e){var o=e.alternate!==null&&e.alternate.child===e.child,a=0,t=0;if(o)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,t|=r.subtreeFlags&14680064,t|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,t|=r.subtreeFlags,t|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=t,e.childLanes=a,o}function Hu(e,o,a){var t=o.pendingProps;switch(Yi(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(o),null;case 1:return io(o.type)&&pr(),$e(o),null;case 3:return t=o.stateNode,Qa(),Ae(ro),Ae(We),mn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(hr(o)?o.flags|=4:e===null||e.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Eo!==null&&(jn(Eo),Eo=null))),On(e,o),$e(o),null;case 5:dn(o);var r=ba(qt.current);if(a=o.type,e!==null&&o.stateNode!=null)xl(e,o,a,t,r),e.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!t){if(o.stateNode===null)throw Error(l(166));return $e(o),null}if(e=ba(Lo.current),hr(o)){t=o.stateNode,a=o.type;var i=o.memoizedProps;switch(t[ko]=o,t[It]=i,e=(o.mode&1)!==0,a){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(r=0;r<At.length;r++)be(At[r],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":Ie(t,i),be("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},be("invalid",t);break;case"textarea":ds(t,i),be("invalid",t)}di(a,i),r=null;for(var n in i)if(i.hasOwnProperty(n)){var c=i[n];n==="children"?typeof c=="string"?t.textContent!==c&&(i.suppressHydrationWarning!==!0&&dr(t.textContent,c,e),r=["children",c]):typeof c=="number"&&t.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&dr(t.textContent,c,e),r=["children",""+c]):b.hasOwnProperty(n)&&c!=null&&n==="onScroll"&&be("scroll",t)}switch(a){case"input":re(t),ls(t,i,!0);break;case"textarea":re(t),ms(t);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(t.onclick=ur)}t=r,o.updateQueue=t,t!==null&&(o.flags|=4)}else{n=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ps(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=n.createElement(a,{is:t.is}):(e=n.createElement(a),a==="select"&&(n=e,t.multiple?n.multiple=!0:t.size&&(n.size=t.size))):e=n.createElementNS(e,a),e[ko]=o,e[It]=t,El(e,o,!1,!1),o.stateNode=e;e:{switch(n=ui(a,t),a){case"dialog":be("cancel",e),be("close",e),r=t;break;case"iframe":case"object":case"embed":be("load",e),r=t;break;case"video":case"audio":for(r=0;r<At.length;r++)be(At[r],e);r=t;break;case"source":be("error",e),r=t;break;case"img":case"image":case"link":be("error",e),be("load",e),r=t;break;case"details":be("toggle",e),r=t;break;case"input":Ie(e,t),r=je(e,t),be("invalid",e);break;case"option":r=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},r=N({},t,{value:void 0}),be("invalid",e);break;case"textarea":ds(e,t),r=ci(e,t),be("invalid",e);break;default:r=t}di(a,r),c=r;for(i in c)if(c.hasOwnProperty(i)){var u=c[i];i==="style"?vs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fs(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&at(e,u):typeof u=="number"&&at(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(b.hasOwnProperty(i)?u!=null&&i==="onScroll"&&be("scroll",e):u!=null&&ie(e,i,u,n))}switch(a){case"input":re(e),ls(e,t,!1);break;case"textarea":re(e),ms(e);break;case"option":t.value!=null&&e.setAttribute("value",""+ce(t.value));break;case"select":e.multiple=!!t.multiple,i=t.value,i!=null?Pa(e,!!t.multiple,i,!1):t.defaultValue!=null&&Pa(e,!!t.multiple,t.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=ur)}switch(a){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return $e(o),null;case 6:if(e&&o.stateNode!=null)Rl(e,o,e.memoizedProps,t);else{if(typeof t!="string"&&o.stateNode===null)throw Error(l(166));if(a=ba(qt.current),ba(Lo.current),hr(o)){if(t=o.stateNode,a=o.memoizedProps,t[ko]=o,(i=t.nodeValue!==a)&&(e=po,e!==null))switch(e.tag){case 3:dr(t.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(t.nodeValue,a,(e.mode&1)!==0)}i&&(o.flags|=4)}else t=(a.nodeType===9?a:a.ownerDocument).createTextNode(t),t[ko]=o,o.stateNode=t}return $e(o),null;case 13:if(Ae(Ee),t=o.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&fo!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Dc(),Va(),o.flags|=98560,i=!1;else if(i=hr(o),t!==null&&t.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=o.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[ko]=o}else Va(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;$e(o),i=!1}else Eo!==null&&(jn(Eo),Eo=null),i=!0;if(!i)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=a,o):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(o.child.flags|=8192,(o.mode&1)!==0&&(e===null||(Ee.current&1)!==0?ke===0&&(ke=3):Gn())),o.updateQueue!==null&&(o.flags|=4),$e(o),null);case 4:return Qa(),On(e,o),e===null&&Tt(o.stateNode.containerInfo),$e(o),null;case 10:return rn(o.type._context),$e(o),null;case 17:return io(o.type)&&pr(),$e(o),null;case 19:if(Ae(Ee),i=o.memoizedState,i===null)return $e(o),null;if(t=(o.flags&128)!==0,n=i.rendering,n===null)if(t)kt(i,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=o.child;e!==null;){if(n=Ir(e),n!==null){for(o.flags|=128,kt(i,!1),t=n.updateQueue,t!==null&&(o.updateQueue=t,o.flags|=4),o.subtreeFlags=0,t=a,a=o.child;a!==null;)i=a,e=t,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return he(Ee,Ee.current&1|2),o.child}e=e.sibling}i.tail!==null&&qe()>Xa&&(o.flags|=128,t=!0,kt(i,!1),o.lanes=4194304)}else{if(!t)if(e=Ir(n),e!==null){if(o.flags|=128,t=!0,a=e.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),kt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!ye)return $e(o),null}else 2*qe()-i.renderingStartTime>Xa&&a!==1073741824&&(o.flags|=128,t=!0,kt(i,!1),o.lanes=4194304);i.isBackwards?(n.sibling=o.child,o.child=n):(a=i.last,a!==null?a.sibling=n:o.child=n,i.last=n)}return i.tail!==null?(o=i.tail,i.rendering=o,i.tail=o.sibling,i.renderingStartTime=qe(),o.sibling=null,a=Ee.current,he(Ee,t?a&1|2:a&1),o):($e(o),null);case 22:case 23:return Hn(),t=o.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(o.flags|=8192),t&&(o.mode&1)!==0?(go&1073741824)!==0&&($e(o),o.subtreeFlags&6&&(o.flags|=8192)):$e(o),null;case 24:return null;case 25:return null}throw Error(l(156,o.tag))}function Gu(e,o){switch(Yi(o),o.tag){case 1:return io(o.type)&&pr(),e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 3:return Qa(),Ae(ro),Ae(We),mn(),e=o.flags,(e&65536)!==0&&(e&128)===0?(o.flags=e&-65537|128,o):null;case 5:return dn(o),null;case 13:if(Ae(Ee),e=o.memoizedState,e!==null&&e.dehydrated!==null){if(o.alternate===null)throw Error(l(340));Va()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 19:return Ae(Ee),null;case 4:return Qa(),null;case 10:return rn(o.type._context),null;case 22:case 23:return Hn(),null;case 24:return null;default:return null}}var Nr=!1,Je=!1,Wu=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ja(e,o){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(t){Pe(e,o,t)}else a.current=null}function wn(e,o,a){try{a()}catch(t){Pe(e,o,t)}}var Pl=!1;function Qu(e,o){if(Vi=Zt,e=nc(),Li(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var r=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,c=-1,u=-1,h=0,E=0,x=e,I=null;o:for(;;){for(var k;x!==a||r!==0&&x.nodeType!==3||(c=n+r),x!==i||t!==0&&x.nodeType!==3||(u=n+t),x.nodeType===3&&(n+=x.nodeValue.length),(k=x.firstChild)!==null;)I=x,x=k;for(;;){if(x===e)break o;if(I===a&&++h===r&&(c=n),I===i&&++E===t&&(u=n),(k=x.nextSibling)!==null)break;x=I,I=x.parentNode}x=k}a=c===-1||u===-1?null:{start:c,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hi={focusedElem:e,selectionRange:a},Zt=!1,M=o;M!==null;)if(o=M,e=o.child,(o.subtreeFlags&1028)!==0&&e!==null)e.return=o,M=e;else for(;M!==null;){o=M;try{var _=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var B=_.memoizedProps,De=_.memoizedState,g=o.stateNode,p=g.getSnapshotBeforeUpdate(o.elementType===o.type?B:xo(o.type,B),De);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var C=o.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(q){Pe(o,o.return,q)}if(e=o.sibling,e!==null){e.return=o.return,M=e;break}M=o.return}return _=Pl,Pl=!1,_}function Lt(e,o,a){var t=o.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&wn(o,a,i)}r=r.next}while(r!==t)}}function kr(e,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var t=a.create;a.destroy=t()}a=a.next}while(a!==o)}}function Nn(e){var o=e.ref;if(o!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof o=="function"?o(e):o.current=e}}function ql(e){var o=e.alternate;o!==null&&(e.alternate=null,ql(o)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(o=e.stateNode,o!==null&&(delete o[ko],delete o[It],delete o[$i],delete o[qu],delete o[Du])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dl(e){return e.tag===5||e.tag===3||e.tag===4}function Ol(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kn(e,o,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(e,o):a.insertBefore(e,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(e,a)):(o=a,o.appendChild(e)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=ur));else if(t!==4&&(e=e.child,e!==null))for(kn(e,o,a),e=e.sibling;e!==null;)kn(e,o,a),e=e.sibling}function Ln(e,o,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,o?a.insertBefore(e,o):a.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Ln(e,o,a),e=e.sibling;e!==null;)Ln(e,o,a),e=e.sibling}var Ve=null,Ro=!1;function na(e,o,a){for(a=a.child;a!==null;)wl(e,o,a),a=a.sibling}function wl(e,o,a){if(No&&typeof No.onCommitFiberUnmount=="function")try{No.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 5:Je||Ja(a,o);case 6:var t=Ve,r=Ro;Ve=null,na(e,o,a),Ve=t,Ro=r,Ve!==null&&(Ro?(e=Ve,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):Ve.removeChild(a.stateNode));break;case 18:Ve!==null&&(Ro?(e=Ve,a=a.stateNode,e.nodeType===8?Qi(e.parentNode,a):e.nodeType===1&&Qi(e,a),pt(e)):Qi(Ve,a.stateNode));break;case 4:t=Ve,r=Ro,Ve=a.stateNode.containerInfo,Ro=!0,na(e,o,a),Ve=t,Ro=r;break;case 0:case 11:case 14:case 15:if(!Je&&(t=a.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){r=t=t.next;do{var i=r,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&wn(a,o,n),r=r.next}while(r!==t)}na(e,o,a);break;case 1:if(!Je&&(Ja(a,o),t=a.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=a.memoizedProps,t.state=a.memoizedState,t.componentWillUnmount()}catch(c){Pe(a,o,c)}na(e,o,a);break;case 21:na(e,o,a);break;case 22:a.mode&1?(Je=(t=Je)||a.memoizedState!==null,na(e,o,a),Je=t):na(e,o,a);break;default:na(e,o,a)}}function Nl(e){var o=e.updateQueue;if(o!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Wu),o.forEach(function(t){var r=am.bind(null,e,t);a.has(t)||(a.add(t),t.then(r,r))})}}function Po(e,o){var a=o.deletions;if(a!==null)for(var t=0;t<a.length;t++){var r=a[t];try{var i=e,n=o,c=n;e:for(;c!==null;){switch(c.tag){case 5:Ve=c.stateNode,Ro=!1;break e;case 3:Ve=c.stateNode.containerInfo,Ro=!0;break e;case 4:Ve=c.stateNode.containerInfo,Ro=!0;break e}c=c.return}if(Ve===null)throw Error(l(160));wl(i,n,r),Ve=null,Ro=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(h){Pe(r,o,h)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)kl(o,e),o=o.sibling}function kl(e,o){var a=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Po(o,e),Mo(e),t&4){try{Lt(3,e,e.return),kr(3,e)}catch(B){Pe(e,e.return,B)}try{Lt(5,e,e.return)}catch(B){Pe(e,e.return,B)}}break;case 1:Po(o,e),Mo(e),t&512&&a!==null&&Ja(a,a.return);break;case 5:if(Po(o,e),Mo(e),t&512&&a!==null&&Ja(a,a.return),e.flags&32){var r=e.stateNode;try{at(r,"")}catch(B){Pe(e,e.return,B)}}if(t&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&de(r,i),ui(c,n);var h=ui(c,i);for(n=0;n<u.length;n+=2){var E=u[n],x=u[n+1];E==="style"?vs(r,x):E==="dangerouslySetInnerHTML"?fs(r,x):E==="children"?at(r,x):ie(r,E,x,h)}switch(c){case"input":ni(r,i);break;case"textarea":us(r,i);break;case"select":var I=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Pa(r,!!i.multiple,k,!1):I!==!!i.multiple&&(i.defaultValue!=null?Pa(r,!!i.multiple,i.defaultValue,!0):Pa(r,!!i.multiple,i.multiple?[]:"",!1))}r[It]=i}catch(B){Pe(e,e.return,B)}}break;case 6:if(Po(o,e),Mo(e),t&4){if(e.stateNode===null)throw Error(l(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(B){Pe(e,e.return,B)}}break;case 3:if(Po(o,e),Mo(e),t&4&&a!==null&&a.memoizedState.isDehydrated)try{pt(o.containerInfo)}catch(B){Pe(e,e.return,B)}break;case 4:Po(o,e),Mo(e);break;case 13:Po(o,e),Mo(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(zn=qe())),t&4&&Nl(e);break;case 22:if(E=a!==null&&a.memoizedState!==null,e.mode&1?(Je=(h=Je)||E,Po(o,e),Je=h):Po(o,e),Mo(e),t&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!E&&(e.mode&1)!==0)for(M=e,E=e.child;E!==null;){for(x=M=E;M!==null;){switch(I=M,k=I.child,I.tag){case 0:case 11:case 14:case 15:Lt(4,I,I.return);break;case 1:Ja(I,I.return);var _=I.stateNode;if(typeof _.componentWillUnmount=="function"){t=I,a=I.return;try{o=t,_.props=o.memoizedProps,_.state=o.memoizedState,_.componentWillUnmount()}catch(B){Pe(t,a,B)}}break;case 5:Ja(I,I.return);break;case 22:if(I.memoizedState!==null){Ml(x);continue}}k!==null?(k.return=I,M=k):Ml(x)}E=E.sibling}e:for(E=null,x=e;;){if(x.tag===5){if(E===null){E=x;try{r=x.stateNode,h?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=x.stateNode,u=x.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=gs("display",n))}catch(B){Pe(e,e.return,B)}}}else if(x.tag===6){if(E===null)try{x.stateNode.nodeValue=h?"":x.memoizedProps}catch(B){Pe(e,e.return,B)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;E===x&&(E=null),x=x.return}E===x&&(E=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Po(o,e),Mo(e),t&4&&Nl(e);break;case 21:break;default:Po(o,e),Mo(e)}}function Mo(e){var o=e.flags;if(o&2){try{e:{for(var a=e.return;a!==null;){if(Dl(a)){var t=a;break e}a=a.return}throw Error(l(160))}switch(t.tag){case 5:var r=t.stateNode;t.flags&32&&(at(r,""),t.flags&=-33);var i=Ol(e);Ln(e,i,r);break;case 3:case 4:var n=t.stateNode.containerInfo,c=Ol(e);kn(e,c,n);break;default:throw Error(l(161))}}catch(u){Pe(e,e.return,u)}e.flags&=-3}o&4096&&(e.flags&=-4097)}function $u(e,o,a){M=e,Ll(e)}function Ll(e,o,a){for(var t=(e.mode&1)!==0;M!==null;){var r=M,i=r.child;if(r.tag===22&&t){var n=r.memoizedState!==null||Nr;if(!n){var c=r.alternate,u=c!==null&&c.memoizedState!==null||Je;c=Nr;var h=Je;if(Nr=n,(Je=u)&&!h)for(M=r;M!==null;)n=M,u=n.child,n.tag===22&&n.memoizedState!==null?zl(r):u!==null?(u.return=n,M=u):zl(r);for(;i!==null;)M=i,Ll(i),i=i.sibling;M=r,Nr=c,Je=h}Fl(e)}else(r.subtreeFlags&8772)!==0&&i!==null?(i.return=r,M=i):Fl(e)}}function Fl(e){for(;M!==null;){var o=M;if((o.flags&8772)!==0){var a=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Je||kr(5,o);break;case 1:var t=o.stateNode;if(o.flags&4&&!Je)if(a===null)t.componentDidMount();else{var r=o.elementType===o.type?a.memoizedProps:xo(o.type,a.memoizedProps);t.componentDidUpdate(r,a.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var i=o.updateQueue;i!==null&&Mc(o,i,t);break;case 3:var n=o.updateQueue;if(n!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}Mc(o,n,a)}break;case 5:var c=o.stateNode;if(a===null&&o.flags&4){a=c;var u=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var h=o.alternate;if(h!==null){var E=h.memoizedState;if(E!==null){var x=E.dehydrated;x!==null&&pt(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||o.flags&512&&Nn(o)}catch(I){Pe(o,o.return,I)}}if(o===e){M=null;break}if(a=o.sibling,a!==null){a.return=o.return,M=a;break}M=o.return}}function Ml(e){for(;M!==null;){var o=M;if(o===e){M=null;break}var a=o.sibling;if(a!==null){a.return=o.return,M=a;break}M=o.return}}function zl(e){for(;M!==null;){var o=M;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{kr(4,o)}catch(u){Pe(o,a,u)}break;case 1:var t=o.stateNode;if(typeof t.componentDidMount=="function"){var r=o.return;try{t.componentDidMount()}catch(u){Pe(o,r,u)}}var i=o.return;try{Nn(o)}catch(u){Pe(o,i,u)}break;case 5:var n=o.return;try{Nn(o)}catch(u){Pe(o,n,u)}}}catch(u){Pe(o,o.return,u)}if(o===e){M=null;break}var c=o.sibling;if(c!==null){c.return=o.return,M=c;break}M=o.return}}var Ju=Math.ceil,Lr=ge.ReactCurrentDispatcher,Fn=ge.ReactCurrentOwner,Ao=ge.ReactCurrentBatchConfig,ne=0,Me=null,we=null,He=0,go=0,Ka=oa(0),ke=0,Ft=null,Ta=0,Fr=0,Mn=0,Mt=null,so=null,zn=0,Xa=1/0,Wo=null,Mr=!1,_n=null,sa=null,zr=!1,ca=null,_r=0,zt=0,Un=null,Ur=-1,Br=0;function Ze(){return(ne&6)!==0?qe():Ur!==-1?Ur:Ur=qe()}function la(e){return(e.mode&1)===0?1:(ne&2)!==0&&He!==0?He&-He:wu.transition!==null?(Br===0&&(Br=Os()),Br):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e)}function qo(e,o,a,t){if(50<zt)throw zt=0,Un=null,Error(l(185));ct(e,a,t),((ne&2)===0||e!==Me)&&(e===Me&&((ne&2)===0&&(Fr|=a),ke===4&&da(e,He)),co(e,t),a===1&&ne===0&&(o.mode&1)===0&&(Xa=qe()+500,gr&&ta()))}function co(e,o){var a=e.callbackNode;wd(e,o);var t=Kt(e,e===Me?He:0);if(t===0)a!==null&&Ps(a),e.callbackNode=null,e.callbackPriority=0;else if(o=t&-t,e.callbackPriority!==o){if(a!=null&&Ps(a),o===1)e.tag===0?Ou(Ul.bind(null,e)):Ec(Ul.bind(null,e)),Ru(function(){(ne&6)===0&&ta()}),a=null;else{switch(ws(t)){case 1:a=hi;break;case 4:a=qs;break;case 16:a=Wt;break;case 536870912:a=Ds;break;default:a=Wt}a=$l(a,_l.bind(null,e))}e.callbackPriority=o,e.callbackNode=a}}function _l(e,o){if(Ur=-1,Br=0,(ne&6)!==0)throw Error(l(327));var a=e.callbackNode;if(Ya()&&e.callbackNode!==a)return null;var t=Kt(e,e===Me?He:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||o)o=jr(e,t);else{o=t;var r=ne;ne|=2;var i=jl();(Me!==e||He!==o)&&(Wo=null,Xa=qe()+500,Ia(e,o));do try{Yu();break}catch(c){Bl(e,c)}while(!0);tn(),Lr.current=i,ne=r,we!==null?o=0:(Me=null,He=0,o=ke)}if(o!==0){if(o===2&&(r=Si(e),r!==0&&(t=r,o=Bn(e,r))),o===1)throw a=Ft,Ia(e,0),da(e,t),co(e,qe()),a;if(o===6)da(e,t);else{if(r=e.current.alternate,(t&30)===0&&!Ku(r)&&(o=jr(e,t),o===2&&(i=Si(e),i!==0&&(t=i,o=Bn(e,i))),o===1))throw a=Ft,Ia(e,0),da(e,t),co(e,qe()),a;switch(e.finishedWork=r,e.finishedLanes=t,o){case 0:case 1:throw Error(l(345));case 2:Ea(e,so,Wo);break;case 3:if(da(e,t),(t&130023424)===t&&(o=zn+500-qe(),10<o)){if(Kt(e,0)!==0)break;if(r=e.suspendedLanes,(r&t)!==t){Ze(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Wi(Ea.bind(null,e,so,Wo),o);break}Ea(e,so,Wo);break;case 4:if(da(e,t),(t&4194240)===t)break;for(o=e.eventTimes,r=-1;0<t;){var n=31-yo(t);i=1<<n,n=o[n],n>r&&(r=n),t&=~i}if(t=r,t=qe()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Ju(t/1960))-t,10<t){e.timeoutHandle=Wi(Ea.bind(null,e,so,Wo),t);break}Ea(e,so,Wo);break;case 5:Ea(e,so,Wo);break;default:throw Error(l(329))}}}return co(e,qe()),e.callbackNode===a?_l.bind(null,e):null}function Bn(e,o){var a=Mt;return e.current.memoizedState.isDehydrated&&(Ia(e,o).flags|=256),e=jr(e,o),e!==2&&(o=so,so=a,o!==null&&jn(o)),e}function jn(e){so===null?so=e:so.push.apply(so,e)}function Ku(e){for(var o=e;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var t=0;t<a.length;t++){var r=a[t],i=r.getSnapshot;r=r.value;try{if(!Io(i(),r))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function da(e,o){for(o&=~Mn,o&=~Fr,e.suspendedLanes|=o,e.pingedLanes&=~o,e=e.expirationTimes;0<o;){var a=31-yo(o),t=1<<a;e[a]=-1,o&=~t}}function Ul(e){if((ne&6)!==0)throw Error(l(327));Ya();var o=Kt(e,0);if((o&1)===0)return co(e,qe()),null;var a=jr(e,o);if(e.tag!==0&&a===2){var t=Si(e);t!==0&&(o=t,a=Bn(e,t))}if(a===1)throw a=Ft,Ia(e,0),da(e,o),co(e,qe()),a;if(a===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=o,Ea(e,so,Wo),co(e,qe()),null}function Vn(e,o){var a=ne;ne|=1;try{return e(o)}finally{ne=a,ne===0&&(Xa=qe()+500,gr&&ta())}}function ya(e){ca!==null&&ca.tag===0&&(ne&6)===0&&Ya();var o=ne;ne|=1;var a=Ao.transition,t=ue;try{if(Ao.transition=null,ue=1,e)return e()}finally{ue=t,Ao.transition=a,ne=o,(ne&6)===0&&ta()}}function Hn(){go=Ka.current,Ae(Ka)}function Ia(e,o){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,xu(a)),we!==null)for(a=we.return;a!==null;){var t=a;switch(Yi(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&pr();break;case 3:Qa(),Ae(ro),Ae(We),mn();break;case 5:dn(t);break;case 4:Qa();break;case 13:Ae(Ee);break;case 19:Ae(Ee);break;case 10:rn(t.type._context);break;case 22:case 23:Hn()}a=a.return}if(Me=e,we=e=ua(e.current,null),He=go=o,ke=0,Ft=null,Mn=Fr=Ta=0,so=Mt=null,Sa!==null){for(o=0;o<Sa.length;o++)if(a=Sa[o],t=a.interleaved,t!==null){a.interleaved=null;var r=t.next,i=a.pending;if(i!==null){var n=i.next;i.next=r,t.next=n}a.pending=t}Sa=null}return e}function Bl(e,o){do{var a=we;try{if(tn(),Er.current=qr,xr){for(var t=xe.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}xr=!1}if(Aa=0,Fe=Ne=xe=null,Dt=!1,Ot=0,Fn.current=null,a===null||a.return===null){ke=1,Ft=o,we=null;break}e:{var i=e,n=a.return,c=a,u=o;if(o=He,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,E=c,x=E.tag;if((E.mode&1)===0&&(x===0||x===11||x===15)){var I=E.alternate;I?(E.updateQueue=I.updateQueue,E.memoizedState=I.memoizedState,E.lanes=I.lanes):(E.updateQueue=null,E.memoizedState=null)}var k=ml(n);if(k!==null){k.flags&=-257,pl(k,n,c,i,o),k.mode&1&&ul(i,h,o),o=k,u=h;var _=o.updateQueue;if(_===null){var B=new Set;B.add(u),o.updateQueue=B}else _.add(u);break e}else{if((o&1)===0){ul(i,h,o),Gn();break e}u=Error(l(426))}}else if(ye&&c.mode&1){var De=ml(n);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),pl(De,n,c,i,o),on($a(u,c));break e}}i=u=$a(u,c),ke!==4&&(ke=2),Mt===null?Mt=[i]:Mt.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,o&=-o,i.lanes|=o;var g=ll(i,u,o);Fc(i,g);break e;case 1:c=u;var p=i.type,C=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(sa===null||!sa.has(C)))){i.flags|=65536,o&=-o,i.lanes|=o;var q=dl(i,c,o);Fc(i,q);break e}}i=i.return}while(i!==null)}Hl(a)}catch(V){o=V,we===a&&a!==null&&(we=a=a.return);continue}break}while(!0)}function jl(){var e=Lr.current;return Lr.current=qr,e===null?qr:e}function Gn(){(ke===0||ke===3||ke===2)&&(ke=4),Me===null||(Ta&268435455)===0&&(Fr&268435455)===0||da(Me,He)}function jr(e,o){var a=ne;ne|=2;var t=jl();(Me!==e||He!==o)&&(Wo=null,Ia(e,o));do try{Xu();break}catch(r){Bl(e,r)}while(!0);if(tn(),ne=a,Lr.current=t,we!==null)throw Error(l(261));return Me=null,He=0,ke}function Xu(){for(;we!==null;)Vl(we)}function Yu(){for(;we!==null&&!yd();)Vl(we)}function Vl(e){var o=Ql(e.alternate,e,go);e.memoizedProps=e.pendingProps,o===null?Hl(e):we=o,Fn.current=null}function Hl(e){var o=e;do{var a=o.alternate;if(e=o.return,(o.flags&32768)===0){if(a=Hu(a,o,go),a!==null){we=a;return}}else{if(a=Gu(a,o),a!==null){a.flags&=32767,we=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}if(o=o.sibling,o!==null){we=o;return}we=o=e}while(o!==null);ke===0&&(ke=5)}function Ea(e,o,a){var t=ue,r=Ao.transition;try{Ao.transition=null,ue=1,Zu(e,o,a,t)}finally{Ao.transition=r,ue=t}return null}function Zu(e,o,a,t){do Ya();while(ca!==null);if((ne&6)!==0)throw Error(l(327));a=e.finishedWork;var r=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Nd(e,i),e===Me&&(we=Me=null,He=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zr||(zr=!0,$l(Wt,function(){return Ya(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=Ao.transition,Ao.transition=null;var n=ue;ue=1;var c=ne;ne|=4,Fn.current=null,Qu(e,a),kl(a,e),Su(Hi),Zt=!!Vi,Hi=Vi=null,e.current=a,$u(a),Id(),ne=c,ue=n,Ao.transition=i}else e.current=a;if(zr&&(zr=!1,ca=e,_r=r),i=e.pendingLanes,i===0&&(sa=null),Rd(a.stateNode),co(e,qe()),o!==null)for(t=e.onRecoverableError,a=0;a<o.length;a++)r=o[a],t(r.value,{componentStack:r.stack,digest:r.digest});if(Mr)throw Mr=!1,e=_n,_n=null,e;return(_r&1)!==0&&e.tag!==0&&Ya(),i=e.pendingLanes,(i&1)!==0?e===Un?zt++:(zt=0,Un=e):zt=0,ta(),null}function Ya(){if(ca!==null){var e=ws(_r),o=Ao.transition,a=ue;try{if(Ao.transition=null,ue=16>e?16:e,ca===null)var t=!1;else{if(e=ca,ca=null,_r=0,(ne&6)!==0)throw Error(l(331));var r=ne;for(ne|=4,M=e.current;M!==null;){var i=M,n=i.child;if((M.flags&16)!==0){var c=i.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for(M=h;M!==null;){var E=M;switch(E.tag){case 0:case 11:case 15:Lt(8,E,i)}var x=E.child;if(x!==null)x.return=E,M=x;else for(;M!==null;){E=M;var I=E.sibling,k=E.return;if(ql(E),E===h){M=null;break}if(I!==null){I.return=k,M=I;break}M=k}}}var _=i.alternate;if(_!==null){var B=_.child;if(B!==null){_.child=null;do{var De=B.sibling;B.sibling=null,B=De}while(B!==null)}}M=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,M=n;else e:for(;M!==null;){if(i=M,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Lt(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,M=g;break e}M=i.return}}var p=e.current;for(M=p;M!==null;){n=M;var C=n.child;if((n.subtreeFlags&2064)!==0&&C!==null)C.return=n,M=C;else e:for(n=p;M!==null;){if(c=M,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:kr(9,c)}}catch(V){Pe(c,c.return,V)}if(c===n){M=null;break e}var q=c.sibling;if(q!==null){q.return=c.return,M=q;break e}M=c.return}}if(ne=r,ta(),No&&typeof No.onPostCommitFiberRoot=="function")try{No.onPostCommitFiberRoot(Qt,e)}catch{}t=!0}return t}finally{ue=a,Ao.transition=o}}return!1}function Gl(e,o,a){o=$a(a,o),o=ll(e,o,1),e=ia(e,o,1),o=Ze(),e!==null&&(ct(e,1,o),co(e,o))}function Pe(e,o,a){if(e.tag===3)Gl(e,e,a);else for(;o!==null;){if(o.tag===3){Gl(o,e,a);break}else if(o.tag===1){var t=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(sa===null||!sa.has(t))){e=$a(a,e),e=dl(o,e,1),o=ia(o,e,1),e=Ze(),o!==null&&(ct(o,1,e),co(o,e));break}}o=o.return}}function em(e,o,a){var t=e.pingCache;t!==null&&t.delete(o),o=Ze(),e.pingedLanes|=e.suspendedLanes&a,Me===e&&(He&a)===a&&(ke===4||ke===3&&(He&130023424)===He&&500>qe()-zn?Ia(e,0):Mn|=a),co(e,o)}function Wl(e,o){o===0&&((e.mode&1)===0?o=1:(o=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var a=Ze();e=Vo(e,o),e!==null&&(ct(e,o,a),co(e,a))}function om(e){var o=e.memoizedState,a=0;o!==null&&(a=o.retryLane),Wl(e,a)}function am(e,o){var a=0;switch(e.tag){case 13:var t=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(l(314))}t!==null&&t.delete(o),Wl(e,a)}var Ql;Ql=function(e,o,a){if(e!==null)if(e.memoizedProps!==o.pendingProps||ro.current)no=!0;else{if((e.lanes&a)===0&&(o.flags&128)===0)return no=!1,Vu(e,o,a);no=(e.flags&131072)!==0}else no=!1,ye&&(o.flags&1048576)!==0&&xc(o,Cr,o.index);switch(o.lanes=0,o.tag){case 2:var t=o.type;wr(e,o),e=o.pendingProps;var r=Ua(o,We.current);Wa(o,a),r=gn(null,o,t,e,r,a);var i=vn();return o.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,io(t)?(i=!0,fr(o)):i=!1,o.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cn(o),r.updater=Dr,o.stateNode=r,r._reactInternals=o,Tn(o,t,e,a),o=xn(null,o,t,!0,i,a)):(o.tag=0,ye&&i&&Xi(o),Ye(null,o,r,a),o=o.child),o;case 16:t=o.elementType;e:{switch(wr(e,o),e=o.pendingProps,r=t._init,t=r(t._payload),o.type=t,r=o.tag=rm(t),e=xo(t,e),r){case 0:o=En(null,o,t,e,a);break e;case 1:o=Sl(null,o,t,e,a);break e;case 11:o=fl(null,o,t,e,a);break e;case 14:o=gl(null,o,t,xo(t.type,e),a);break e}throw Error(l(306,t,""))}return o;case 0:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:xo(t,r),En(e,o,t,r,a);case 1:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:xo(t,r),Sl(e,o,t,r,a);case 3:e:{if(bl(o),e===null)throw Error(l(387));t=o.pendingProps,i=o.memoizedState,r=i.element,Lc(e,o),yr(o,t,null,a);var n=o.memoizedState;if(t=n.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},o.updateQueue.baseState=i,o.memoizedState=i,o.flags&256){r=$a(Error(l(423)),o),o=Al(e,o,t,a,r);break e}else if(t!==r){r=$a(Error(l(424)),o),o=Al(e,o,t,a,r);break e}else for(fo=ea(o.stateNode.containerInfo.firstChild),po=o,ye=!0,Eo=null,a=Nc(o,null,t,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Va(),t===r){o=Go(e,o,a);break e}Ye(e,o,t,a)}o=o.child}return o;case 5:return zc(o),e===null&&en(o),t=o.type,r=o.pendingProps,i=e!==null?e.memoizedProps:null,n=r.children,Gi(t,r)?n=null:i!==null&&Gi(t,i)&&(o.flags|=32),hl(e,o),Ye(e,o,n,a),o.child;case 6:return e===null&&en(o),null;case 13:return Tl(e,o,a);case 4:return ln(o,o.stateNode.containerInfo),t=o.pendingProps,e===null?o.child=Ha(o,null,t,a):Ye(e,o,t,a),o.child;case 11:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:xo(t,r),fl(e,o,t,r,a);case 7:return Ye(e,o,o.pendingProps,a),o.child;case 8:return Ye(e,o,o.pendingProps.children,a),o.child;case 12:return Ye(e,o,o.pendingProps.children,a),o.child;case 10:e:{if(t=o.type._context,r=o.pendingProps,i=o.memoizedProps,n=r.value,he(br,t._currentValue),t._currentValue=n,i!==null)if(Io(i.value,n)){if(i.children===r.children&&!ro.current){o=Go(e,o,a);break e}}else for(i=o.child,i!==null&&(i.return=o);i!==null;){var c=i.dependencies;if(c!==null){n=i.child;for(var u=c.firstContext;u!==null;){if(u.context===t){if(i.tag===1){u=Ho(-1,a&-a),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var E=h.pending;E===null?u.next=u:(u.next=E.next,E.next=u),h.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),nn(i.return,a,o),c.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===o.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(l(341));n.lanes|=a,c=n.alternate,c!==null&&(c.lanes|=a),nn(n,a,o),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===o){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}Ye(e,o,r.children,a),o=o.child}return o;case 9:return r=o.type,t=o.pendingProps.children,Wa(o,a),r=So(r),t=t(r),o.flags|=1,Ye(e,o,t,a),o.child;case 14:return t=o.type,r=xo(t,o.pendingProps),r=xo(t.type,r),gl(e,o,t,r,a);case 15:return vl(e,o,o.type,o.pendingProps,a);case 17:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:xo(t,r),wr(e,o),o.tag=1,io(t)?(e=!0,fr(o)):e=!1,Wa(o,a),sl(o,t,r),Tn(o,t,r,a),xn(null,o,t,!0,e,a);case 19:return Il(e,o,a);case 22:return Cl(e,o,a)}throw Error(l(156,o.tag))};function $l(e,o){return Rs(e,o)}function tm(e,o,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function To(e,o,a,t){return new tm(e,o,a,t)}function Wn(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rm(e){if(typeof e=="function")return Wn(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ve)return 11;if(e===uo)return 14}return 2}function ua(e,o){var a=e.alternate;return a===null?(a=To(e.tag,o,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=o,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,o=e.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Vr(e,o,a,t,r,i){var n=2;if(t=e,typeof e=="function")Wn(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case le:return xa(a.children,r,i,o);case Le:n=8,r|=8;break;case ao:return e=To(12,a,o,r|2),e.elementType=ao,e.lanes=i,e;case Xe:return e=To(13,a,o,r),e.elementType=Xe,e.lanes=i,e;case to:return e=To(19,a,o,r),e.elementType=to,e.lanes=i,e;case Se:return Hr(a,r,i,o);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ke:n=10;break e;case vo:n=9;break e;case ve:n=11;break e;case uo:n=14;break e;case Be:n=16,t=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return o=To(n,a,o,r),o.elementType=e,o.type=t,o.lanes=i,o}function xa(e,o,a,t){return e=To(7,e,t,o),e.lanes=a,e}function Hr(e,o,a,t){return e=To(22,e,t,o),e.elementType=Se,e.lanes=a,e.stateNode={isHidden:!1},e}function Qn(e,o,a){return e=To(6,e,null,o),e.lanes=a,e}function $n(e,o,a){return o=To(4,e.children!==null?e.children:[],e.key,o),o.lanes=a,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function im(e,o,a,t,r){this.tag=o,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=t,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jn(e,o,a,t,r,i,n,c,u){return e=new im(e,o,a,c,u),o===1?(o=1,i===!0&&(o|=8)):o=0,i=To(3,null,null,o),e.current=i,i.stateNode=e,i.memoizedState={element:t,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},cn(i),e}function nm(e,o,a){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:t==null?null:""+t,children:e,containerInfo:o,implementation:a}}function Jl(e){if(!e)return aa;e=e._reactInternals;e:{if(fa(e)!==e||e.tag!==1)throw Error(l(170));var o=e;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(io(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(l(171))}if(e.tag===1){var a=e.type;if(io(a))return yc(e,a,o)}return o}function Kl(e,o,a,t,r,i,n,c,u){return e=Jn(a,t,!0,e,r,i,n,c,u),e.context=Jl(null),a=e.current,t=Ze(),r=la(a),i=Ho(t,r),i.callback=o??null,ia(a,i,r),e.current.lanes=r,ct(e,r,t),co(e,t),e}function Gr(e,o,a,t){var r=o.current,i=Ze(),n=la(r);return a=Jl(a),o.context===null?o.context=a:o.pendingContext=a,o=Ho(i,n),o.payload={element:e},t=t===void 0?null:t,t!==null&&(o.callback=t),e=ia(r,o,n),e!==null&&(qo(e,r,n,i),Tr(e,r,n)),n}function Wr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xl(e,o){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<o?a:o}}function Kn(e,o){Xl(e,o),(e=e.alternate)&&Xl(e,o)}function sm(){return null}var Yl=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xn(e){this._internalRoot=e}Qr.prototype.render=Xn.prototype.render=function(e){var o=this._internalRoot;if(o===null)throw Error(l(409));Gr(e,o,null,null)},Qr.prototype.unmount=Xn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var o=e.containerInfo;ya(function(){Gr(null,e,null,null)}),o[_o]=null}};function Qr(e){this._internalRoot=e}Qr.prototype.unstable_scheduleHydration=function(e){if(e){var o=Ls();e={blockedOn:null,target:e,priority:o};for(var a=0;a<Xo.length&&o!==0&&o<Xo[a].priority;a++);Xo.splice(a,0,e),a===0&&zs(e)}};function Yn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zl(){}function cm(e,o,a,t,r){if(r){if(typeof t=="function"){var i=t;t=function(){var h=Wr(n);i.call(h)}}var n=Kl(o,t,e,0,null,!1,!1,"",Zl);return e._reactRootContainer=n,e[_o]=n.current,Tt(e.nodeType===8?e.parentNode:e),ya(),n}for(;r=e.lastChild;)e.removeChild(r);if(typeof t=="function"){var c=t;t=function(){var h=Wr(u);c.call(h)}}var u=Jn(e,0,!1,null,null,!1,!1,"",Zl);return e._reactRootContainer=u,e[_o]=u.current,Tt(e.nodeType===8?e.parentNode:e),ya(function(){Gr(o,u,a,t)}),u}function Jr(e,o,a,t,r){var i=a._reactRootContainer;if(i){var n=i;if(typeof r=="function"){var c=r;r=function(){var u=Wr(n);c.call(u)}}Gr(o,n,e,r)}else n=cm(a,o,e,r,t);return Wr(n)}Ns=function(e){switch(e.tag){case 3:var o=e.stateNode;if(o.current.memoizedState.isDehydrated){var a=st(o.pendingLanes);a!==0&&(Ai(o,a|1),co(o,qe()),(ne&6)===0&&(Xa=qe()+500,ta()))}break;case 13:ya(function(){var t=Vo(e,1);if(t!==null){var r=Ze();qo(t,e,1,r)}}),Kn(e,1)}},Ti=function(e){if(e.tag===13){var o=Vo(e,134217728);if(o!==null){var a=Ze();qo(o,e,134217728,a)}Kn(e,134217728)}},ks=function(e){if(e.tag===13){var o=la(e),a=Vo(e,o);if(a!==null){var t=Ze();qo(a,e,o,t)}Kn(e,o)}},Ls=function(){return ue},Fs=function(e,o){var a=ue;try{return ue=e,o()}finally{ue=a}},fi=function(e,o,a){switch(o){case"input":if(ni(e,a),o=a.name,a.type==="radio"&&o!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var t=a[o];if(t!==e&&t.form===e.form){var r=mr(t);if(!r)throw Error(l(90));fe(t),ni(t,r)}}}break;case"textarea":us(e,a);break;case"select":o=a.value,o!=null&&Pa(e,!!a.multiple,o,!1)}},bs=Vn,As=ya;var lm={usingClientEntryPoint:!1,Events:[Et,za,mr,hs,Ss,Vn]},_t={findFiberByHostInstance:ga,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dm={bundleType:_t.bundleType,version:_t.version,rendererPackageName:_t.rendererPackageName,rendererConfig:_t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:_t.findFiberByHostInstance||sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{Qt=Kr.inject(dm),No=Kr}catch{}}return lo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm,lo.createPortal=function(e,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yn(o))throw Error(l(200));return nm(e,o,null,a)},lo.createRoot=function(e,o){if(!Yn(e))throw Error(l(299));var a=!1,t="",r=Yl;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(t=o.identifierPrefix),o.onRecoverableError!==void 0&&(r=o.onRecoverableError)),o=Jn(e,1,!1,null,null,a,!1,t,r),e[_o]=o.current,Tt(e.nodeType===8?e.parentNode:e),new Xn(o)},lo.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var o=e._reactInternals;if(o===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Es(o),e=e===null?null:e.stateNode,e},lo.flushSync=function(e){return ya(e)},lo.hydrate=function(e,o,a){if(!$r(o))throw Error(l(200));return Jr(null,e,o,!0,a)},lo.hydrateRoot=function(e,o,a){if(!Yn(e))throw Error(l(405));var t=a!=null&&a.hydratedSources||null,r=!1,i="",n=Yl;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),o=Kl(o,null,e,1,a??null,r,!1,i,n),e[_o]=o.current,Tt(e),t)for(e=0;e<t.length;e++)a=t[e],r=a._getVersion,r=r(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,r]:o.mutableSourceEagerHydrationData.push(a,r);return new Qr(o)},lo.render=function(e,o,a){if(!$r(o))throw Error(l(200));return Jr(null,e,o,!1,a)},lo.unmountComponentAtNode=function(e){if(!$r(e))throw Error(l(40));return e._reactRootContainer?(ya(function(){Jr(null,null,e,!1,function(){e._reactRootContainer=null,e[_o]=null})}),!0):!1},lo.unstable_batchedUpdates=Vn,lo.unstable_renderSubtreeIntoContainer=function(e,o,a,t){if(!$r(a))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Jr(e,o,a,!1,t)},lo.version="18.3.1-next-f1338f8080-20240426",lo}var sd;function hm(){if(sd)return os.exports;sd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(v){console.error(v)}}return s(),os.exports=Cm(),os.exports}var cd;function Sm(){if(cd)return Xr;cd=1;var s=hm();return Xr.createRoot=s.createRoot,Xr.hydrateRoot=s.hydrateRoot,Xr}var bm=Sm(),L=ss();const m={bg:"#0a0a0f",surface:"#080c14",surface2:"#0f172a",border:"#1e293b",text:"#e2e8f0",textMuted:"#64748b",textDim:"#334155",m1:"#00D4FF",m2:"#7C3AED",m3:"#059669",m4:"#F59E0B",m5:"#7C3AED",m6:"#059669",m7:"#DC2626",m8:"#F59E0B",m9:"#06B6D4",m10:"#8B5CF6",m11:"#10B981",m12:"#F59E0B",m13:"#EF4444",m14:"#8B5CF6",m15:"#0EA5E9",m16:"#10B981",m17:"#F59E0B",m18:"#6366F1",m19:"#EF4444",m20:"#10B981",success:"#10B981",error:"#EF4444",warning:"#F97316",xp:"#00D4FF"},Za={moduleGroup:{marginBottom:24},moduleTitle:{fontSize:14,fontWeight:700,color:m.text,marginBottom:10,display:"flex",alignItems:"center",gap:8},noteCard:{padding:"12px 16px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:8},noteTitle:{fontSize:13,fontWeight:600,color:m.text,marginBottom:6},noteText:{fontSize:13,lineHeight:1.6,color:m.textMuted,whiteSpace:"pre-wrap"},empty:{textAlign:"center",padding:"40px 0",color:m.textMuted,fontSize:14}};function Am({modules:s,notes:v}){return Object.values(v).some(A=>A&&A.trim())?d.jsx("div",{children:s.map(A=>{const b=A.topics.filter(S=>v[S.id]&&v[S.id].trim());return b.length===0?null:d.jsxs("div",{style:Za.moduleGroup,children:[d.jsxs("div",{style:Za.moduleTitle,children:[d.jsx("span",{children:A.icon}),d.jsx("span",{children:A.title})]}),b.map(S=>d.jsxs("div",{style:Za.noteCard,children:[d.jsx("div",{style:Za.noteTitle,children:S.title}),d.jsx("div",{style:Za.noteText,children:v[S.id]})]},S.id))]},A.id)})}):d.jsx("div",{style:Za.empty,children:"📝 Nenhuma anotação ainda. Comece a escrever nos tópicos!"})}function jt(s){if(s<60)return`${s}s`;const v=Math.floor(s/60);return v<60?`${v}min`:`${Math.floor(v/60)}h ${v%60}min`}const Te={section:{marginBottom:28},sectionTitle:{fontSize:14,fontWeight:700,color:m.text,marginBottom:12,display:"flex",alignItems:"center",gap:8},grid:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},topicCard:{padding:"10px 12px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,fontSize:12,lineHeight:1.4},topicTitle:{fontWeight:600,color:m.text,marginBottom:4},topicStatus:{fontSize:11,color:m.textMuted},moduleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:6},moduleLabel:{fontSize:13,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8},moduleValue:{fontSize:13,color:m.textMuted},xpRow:{display:"flex",justifyContent:"space-between",padding:"8px 14px",borderRadius:6,background:m.surface2,marginBottom:4,fontSize:13},xpLabel:{color:m.textMuted},xpValue:{color:m.xp,fontWeight:600}};function Tm({modules:s,completedTopics:v,checklists:l,quizzes:A,timers:b,xp:S}){let P=0,R=0,T=0;for(const D of s){D.topics.every(O=>v.includes(O.id))&&(T+=100);for(const O of D.topics){const F=l[O.id];F&&F.length>0&&F.every(Boolean)&&(P+=20);const Q=A[O.id];if(Q&&Q.submitted){const Y=Q.answers.reduce((j,U,J)=>j+(U===O.quiz[J].answer?1:0),0);R+=Y*10}}}return d.jsxs("div",{children:[s.map(D=>d.jsxs("div",{style:Te.section,children:[d.jsxs("div",{style:Te.sectionTitle,children:[d.jsx("span",{children:D.icon}),d.jsx("span",{children:D.title})]}),d.jsx("div",{style:Te.grid,children:D.topics.map(z=>{const O=v.includes(z.id);return d.jsxs("div",{style:{...Te.topicCard,borderColor:O?`${m.success}60`:m.border},children:[d.jsxs("div",{style:Te.topicTitle,children:[O?"✅":"○"," ",z.title]}),d.jsx("div",{style:Te.topicStatus,children:O?"Concluído":"Pendente"})]},z.id)})})]},D.id)),d.jsxs("div",{style:Te.section,children:[d.jsx("div",{style:Te.sectionTitle,children:"⏱ Tempo por Módulo"}),s.map(D=>d.jsxs("div",{style:Te.moduleRow,children:[d.jsxs("span",{style:Te.moduleLabel,children:[d.jsx("span",{children:D.icon})," ",D.title]}),d.jsx("span",{style:Te.moduleValue,children:jt(b[D.id]||0)})]},D.id))]}),d.jsxs("div",{style:Te.section,children:[d.jsx("div",{style:Te.sectionTitle,children:"⚡ Origem do XP"}),d.jsxs("div",{style:Te.xpRow,children:[d.jsx("span",{style:Te.xpLabel,children:"Checklists completos"}),d.jsxs("span",{style:Te.xpValue,children:[P," XP"]})]}),d.jsxs("div",{style:Te.xpRow,children:[d.jsx("span",{style:Te.xpLabel,children:"Respostas corretas no quiz"}),d.jsxs("span",{style:Te.xpValue,children:[R," XP"]})]}),d.jsxs("div",{style:Te.xpRow,children:[d.jsx("span",{style:Te.xpLabel,children:"Módulos completos"}),d.jsxs("span",{style:Te.xpValue,children:[T," XP"]})]}),d.jsxs("div",{style:{...Te.xpRow,borderTop:`1px solid ${m.border}`,marginTop:8,paddingTop:12},children:[d.jsx("span",{style:{...Te.xpLabel,fontWeight:700,color:m.text},children:"Total"}),d.jsxs("span",{style:{...Te.xpValue,fontSize:15},children:[S," XP"]})]})]})]})}const Ra={moduleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:8},label:{fontSize:14,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8},value:{fontSize:14,color:m.textMuted,fontWeight:600},totalRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px",borderRadius:6,background:`${m.m1}08`,border:`1px solid ${m.m1}30`,marginTop:16,marginBottom:8},totalLabel:{fontSize:15,fontWeight:700,color:m.text},totalValue:{fontSize:15,fontWeight:700,color:m.xp},avgRow:{padding:"10px 16px",borderRadius:6,background:m.surface2,fontSize:13,color:m.textMuted,textAlign:"center"}};function ym({modules:s,timers:v,completedCount:l}){const A=s.reduce((S,P)=>S+(v[P.id]||0),0),b=l>0?Math.round(A/l):0;return d.jsxs("div",{children:[s.map(S=>d.jsxs("div",{style:Ra.moduleRow,children:[d.jsxs("span",{style:Ra.label,children:[d.jsx("span",{children:S.icon})," ",S.title]}),d.jsx("span",{style:Ra.value,children:jt(v[S.id]||0)})]},S.id)),d.jsxs("div",{style:Ra.totalRow,children:[d.jsx("span",{style:Ra.totalLabel,children:"Tempo Total"}),d.jsx("span",{style:Ra.totalValue,children:jt(A)})]}),d.jsxs("div",{style:Ra.avgRow,children:["Média por tópico concluído:"," ",l>0?jt(b):"—"]})]})}const Qo={empty:{textAlign:"center",padding:"40px 0",color:m.textMuted,fontSize:14},questionCard:{padding:"16px",borderRadius:8,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:12},topicLabel:{fontSize:11,color:m.textMuted,marginBottom:8,textTransform:"uppercase",letterSpacing:.5},questionText:{fontSize:14,fontWeight:600,color:m.text,marginBottom:12,lineHeight:1.5},answerRow:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6,fontSize:13,lineHeight:1.4},wrongLabel:{color:m.error,fontWeight:600,flexShrink:0},correctLabel:{color:m.success,fontWeight:600,flexShrink:0},explanation:{marginTop:10,padding:"10px 12px",borderRadius:6,background:`${m.m1}08`,border:`1px solid ${m.m1}30`,fontSize:13,color:m.textMuted,lineHeight:1.5}};function Im({modules:s,quizzes:v}){const l=[];for(const A of s)for(const b of A.topics){const S=v[b.id];!S||!S.submitted||b.quiz.forEach((P,R)=>{S.answers[R]!==P.answer&&l.push({topicTitle:b.title,moduleIcon:A.icon,moduleName:A.title,question:P.question,givenAnswer:P.options[S.answers[R]],correctAnswer:P.options[P.answer],explanation:P.explanation})})}return l.length===0?d.jsx("div",{style:Qo.empty,children:"Nenhum erro para revisar 🎉"}):d.jsx("div",{children:l.map((A,b)=>d.jsxs("div",{style:Qo.questionCard,children:[d.jsxs("div",{style:Qo.topicLabel,children:[A.moduleIcon," ",A.moduleName," › ",A.topicTitle]}),d.jsx("div",{style:Qo.questionText,children:A.question}),d.jsxs("div",{style:Qo.answerRow,children:[d.jsx("span",{style:Qo.wrongLabel,children:"Sua resposta:"}),d.jsx("span",{style:{color:m.error},children:A.givenAnswer})]}),d.jsxs("div",{style:Qo.answerRow,children:[d.jsx("span",{style:Qo.correctLabel,children:"Correta:"}),d.jsx("span",{style:{color:m.success},children:A.correctAnswer})]}),d.jsx("div",{style:Qo.explanation,children:A.explanation})]},b))})}const Em=[{key:"progress",label:"📊 Progresso"},{key:"notes",label:"📝 Anotações"},{key:"review",label:"❌ Revisar"},{key:"time",label:"⏱ Tempo"}],Do={overlay:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center"},modal:{width:"90vw",maxWidth:780,maxHeight:"85vh",background:m.surface,borderRadius:12,border:`1px solid ${m.border}`,display:"flex",flexDirection:"column",overflow:"hidden"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",borderBottom:`1px solid ${m.border}`,flexShrink:0},title:{fontSize:18,fontWeight:700,color:m.text},closeBtn:{width:32,height:32,borderRadius:6,border:`1px solid ${m.border}`,background:"transparent",color:m.textMuted,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"},tabs:{display:"flex",gap:0,borderBottom:`1px solid ${m.border}`,flexShrink:0},tab:{flex:1,padding:"12px 16px",fontSize:13,fontWeight:600,color:m.textMuted,background:"transparent",border:"none",borderBottom:"2px solid transparent",cursor:"pointer",transition:"all 0.15s",textAlign:"center"},tabActive:{color:m.text,borderBottomColor:m.m1,background:`${m.m1}08`},body:{flex:1,overflowY:"auto",padding:24},footer:{padding:"12px 24px",borderTop:`1px solid ${m.border}`,display:"flex",justifyContent:"center",flexShrink:0},resetBtn:{padding:"8px 20px",borderRadius:6,border:`1px solid ${m.error}40`,background:"transparent",color:m.error,fontSize:13,fontWeight:600,cursor:"pointer",transition:"all 0.15s"}};function xm({modules:s,completedTopics:v,checklists:l,quizzes:A,notes:b,timers:S,xp:P,onClose:R,onReset:T}){const[D,z]=L.useState("progress"),O=v.length,F=()=>{window.confirm("Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.")&&T()};return d.jsx("div",{style:Do.overlay,onClick:R,children:d.jsxs("div",{style:Do.modal,onClick:Q=>Q.stopPropagation(),children:[d.jsxs("div",{style:Do.header,children:[d.jsx("div",{style:Do.title,children:"Dashboard"}),d.jsx("button",{style:Do.closeBtn,onClick:R,"aria-label":"Fechar dashboard",children:"✕"})]}),d.jsx("div",{style:Do.tabs,children:Em.map(Q=>d.jsx("button",{style:{...Do.tab,...D===Q.key?Do.tabActive:{}},onClick:()=>z(Q.key),children:Q.label},Q.key))}),d.jsxs("div",{style:Do.body,children:[D==="progress"&&d.jsx(Tm,{modules:s,completedTopics:v,checklists:l,quizzes:A,timers:S,xp:P}),D==="notes"&&d.jsx(Am,{modules:s,notes:b}),D==="review"&&d.jsx(Im,{modules:s,quizzes:A}),D==="time"&&d.jsx(ym,{modules:s,timers:S,completedCount:O})]}),d.jsx("div",{style:Do.footer,children:d.jsx("button",{style:Do.resetBtn,onClick:F,children:"🗑️ Resetar Progresso"})})]})})}const ld={container:{display:"flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:6,border:`1px solid ${m.border}`,fontSize:13,fontWeight:600,whiteSpace:"nowrap"},icon:{fontSize:14}};function Rm({seconds:s,moduleColor:v}){const l=jt(s||0);return d.jsxs("div",{style:{...ld.container,color:v||m.textMuted,borderColor:v?`${v}40`:m.border},children:[d.jsx("span",{style:ld.icon,children:"⏱"}),l]})}const Yr={container:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:m.textMuted,whiteSpace:"nowrap"},barOuter:{width:80,height:6,background:m.border,borderRadius:3,overflow:"hidden"},label:{fontWeight:600},pct:{color:m.text,fontWeight:700,fontSize:12}},dd={phase1:`linear-gradient(90deg, ${m.m1}, ${m.m2}, ${m.m3}, ${m.m4})`,phase2:`linear-gradient(90deg, ${m.m5}, ${m.m6}, ${m.m7}, ${m.m8})`,phase3:`linear-gradient(90deg, ${m.m9}, ${m.m10}, ${m.m11}, ${m.m12})`,phase4:`linear-gradient(90deg, ${m.m13}, ${m.m14}, ${m.m15}, ${m.m16})`,phase5:`linear-gradient(90deg, ${m.m17}, ${m.m18}, ${m.m19}, ${m.m20})`};function Pm({completedCount:s,totalTopics:v,currentPhase:l}){const A=v>0?Math.round(s/v*100):0,b=dd[l==null?void 0:l.id]||dd.phase1;return d.jsxs("div",{style:Yr.container,children:[d.jsxs("span",{style:Yr.label,children:[s," / ",v," tópicos"]}),d.jsx("div",{style:Yr.barOuter,children:d.jsx("div",{style:{height:"100%",width:`${A}%`,background:b,borderRadius:3,transition:"width 0.5s ease"}})}),d.jsxs("span",{style:Yr.pct,children:[A,"%"]})]})}const Zr={container:{display:"flex",alignItems:"center",gap:10,padding:"4px 12px",borderRadius:6,border:`1px solid ${m.border}`,fontSize:13,fontWeight:600,whiteSpace:"nowrap"},xpText:{color:m.xp},barOuter:{width:60,height:6,background:m.border,borderRadius:3,overflow:"hidden"},level:{fontSize:12,fontWeight:700,background:`linear-gradient(135deg, ${m.m1}, ${m.m2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};function qm({xp:s}){const v=Math.floor(s/500)+1,A=s%500/500*100;return d.jsxs("div",{style:Zr.container,children:[d.jsxs("span",{style:Zr.xpText,children:["⚡ ",s," XP"]}),d.jsx("div",{style:Zr.barOuter,children:d.jsx("div",{style:{height:"100%",width:`${A}%`,background:`linear-gradient(90deg, ${m.m1}, ${m.m2})`,borderRadius:3,transition:"width 0.5s ease"}})}),d.jsxs("span",{style:Zr.level,children:["LVL ",v]})]})}const ei={header:{position:"fixed",top:0,left:0,right:0,height:56,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",background:m.surface,borderBottom:`1px solid ${m.border}`},logo:{fontSize:18,fontWeight:700,letterSpacing:1,background:`linear-gradient(135deg, ${m.m1}, ${m.m2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",userSelect:"none"},center:{display:"flex",alignItems:"center"},right:{display:"flex",alignItems:"center",gap:12}};function Dm({timerSeconds:s,moduleColor:v,xp:l,completedCount:A,totalTopics:b,currentPhase:S,onDashboardOpen:P}){var R;return d.jsxs("header",{style:ei.header,children:[d.jsxs("div",{style:ei.logo,children:[".NET ",((R=S==null?void 0:S.title)==null?void 0:R.toUpperCase())||"FASE 1"]}),d.jsx("div",{style:ei.center,children:d.jsx(Pm,{completedCount:A,totalTopics:b,currentPhase:S})}),d.jsxs("div",{style:ei.right,children:[d.jsx(Rm,{seconds:s,moduleColor:v}),d.jsx(qm,{xp:l}),d.jsx("button",{onClick:P,"aria-label":"Abrir dashboard",style:{width:34,height:34,borderRadius:6,border:`1px solid ${m.border}`,background:"transparent",color:m.textMuted,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"},children:"📊"})]})]})}const Om={success:m.success,xp:m.xp,unlock:m.warning},ud={container:{position:"fixed",bottom:20,right:20,zIndex:300,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},toast:{pointerEvents:"auto",padding:"12px 20px",borderRadius:8,fontSize:14,fontWeight:600,color:m.text,background:m.surface2,border:`1px solid ${m.border}`,boxShadow:"0 4px 24px rgba(0,0,0,0.5)",animation:"slideIn 0.3s ease-out",cursor:"pointer",maxWidth:320,lineHeight:1.4}};function wm({toasts:s,onDismiss:v}){return!s||s.length===0?null:d.jsx("div",{style:ud.container,children:s.map(l=>d.jsx("div",{style:{...ud.toast,borderLeftWidth:4,borderLeftStyle:"solid",borderLeftColor:Om[l.type]||m.success},onClick:()=>v(l.id),children:l.message},l.id))})}function Nm(s,v,l){const A=l.findIndex(S=>S.id===s);if(A===0)return!0;const b=l[A-1];return v.includes(b.id)}function km(s,v,l){const A=v[s]||[],b=l[s]||{},S=A.length>0&&A.every(Boolean),P=b.submitted===!0;return S&&P}function zo(s){return s.flatMap(v=>v.topics)}function Lm(s,v){return v.find(l=>l.id===s)}function Fm(s,v){return v.find(l=>l.topics.some(A=>A.id===s))}function Mm({topic:s,isActive:v,isCompleted:l,isLocked:A,moduleColor:b,onClick:S}){const[P,R]=L.useState(!1),T=A?"🔒":l?"✅":v?"▶":"○",D={display:"flex",alignItems:"center",gap:8,padding:"6px 12px 6px 20px",fontSize:13,cursor:A?"not-allowed":"pointer",opacity:A?.4:1,color:v?m.text:l?m.success:m.textMuted,background:v?`${b}12`:P&&!A?`${m.text}08`:"transparent",borderRadius:4,transition:"background 0.15s, color 0.15s",userSelect:"none"},z=()=>{A||S(s.id)};return d.jsxs("div",{style:D,onClick:z,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),children:[d.jsx("span",{style:{fontSize:12,flexShrink:0},children:T}),d.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.title})]})}function zm({module:s,currentTopicId:v,completedTopics:l,allTopics:A,isTopicUnlocked:b,onTopicClick:S}){const[P,R]=L.useState(!0),[T,D]=L.useState(!1),z=s.topics.filter(J=>l.includes(J.id)).length,O=s.topics.length,F={display:"flex",alignItems:"center",gap:8,padding:"10px 12px",cursor:"pointer",userSelect:"none",borderLeft:`3px solid ${s.color}`,background:T?`${s.color}10`:"transparent",transition:"background 0.15s"},Q={fontSize:13,fontWeight:600,color:m.text,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},Y={fontSize:11,color:z===O?m.success:m.textMuted,flexShrink:0},j={fontSize:10,color:m.textMuted,transition:"transform 0.15s",transform:P?"rotate(90deg)":"rotate(0deg)",flexShrink:0},U={display:P?"flex":"none",flexDirection:"column",gap:2,paddingBottom:4};return d.jsxs("div",{children:[d.jsxs("div",{style:F,onClick:()=>R(!P),onMouseEnter:()=>D(!0),onMouseLeave:()=>D(!1),children:[d.jsx("span",{style:{fontSize:14},children:s.icon}),d.jsx("span",{style:Q,children:s.title}),z===O?d.jsx("span",{style:{fontSize:10,fontWeight:700,color:m.success,background:`${m.success}15`,padding:"2px 6px",borderRadius:4,letterSpacing:.5,flexShrink:0},children:"✓ COMPLETO"}):d.jsxs("span",{style:Y,children:[z,"/",O]}),d.jsx("span",{style:j,children:"▶"})]}),d.jsx("div",{style:U,children:s.topics.map(J=>d.jsx(Mm,{topic:J,isActive:J.id===v,isCompleted:l.includes(J.id),isLocked:!b(J.id,l,A),moduleColor:s.color,onClick:S},J.id))})]})}function _m({phase:s,phaseIndex:v,isUnlocked:l,currentTopicId:A,completedTopics:b,allTopicsForPhase:S,isTopicUnlocked:P,onTopicClick:R,justUnlocked:T}){const[D,z]=L.useState(l),[O,F]=L.useState(!1),Q=L.useRef(null),Y=s.data.flatMap(le=>le.topics),j=Y.filter(le=>b.includes(le.id)).length,U=Y.length,J=j===U&&U>0;L.useEffect(()=>{T&&Q.current&&(z(!0),Q.current.scrollIntoView({behavior:"smooth",block:"center"}))},[T]);const Z=()=>{l&&z(!D)},ie={display:"flex",alignItems:"center",gap:8,padding:"10px 12px",cursor:l?"pointer":"not-allowed",userSelect:"none",borderBottom:`1px solid ${m.border}`,background:O&&l?`${s.color}10`:"transparent",opacity:l?1:.5,transition:"background 0.15s, opacity 0.3s",animation:T?"phaseUnlock 1s ease":"none"},ge={fontSize:12,fontWeight:700,color:s.color,letterSpacing:.8,textTransform:"uppercase",flex:1},Oe=J?{fontSize:10,fontWeight:700,color:m.success,background:`${m.success}15`,padding:"2px 6px",borderRadius:4,letterSpacing:.5}:{fontSize:11,color:m.textMuted,fontWeight:600},Re={fontSize:10,color:m.textMuted,transition:"transform 0.15s",transform:D&&l?"rotate(90deg)":"rotate(0deg)",flexShrink:0};return d.jsxs("div",{children:[d.jsx("style",{children:`
        @keyframes phaseUnlock {
          0% { outline: 2px solid ${s.color}; outline-offset: -2px; }
          50% { outline: 2px solid ${s.color}80; outline-offset: 2px; }
          100% { outline: 2px solid transparent; outline-offset: -2px; }
        }
      `}),d.jsxs("div",{ref:Q,style:ie,onClick:Z,onMouseEnter:()=>F(!0),onMouseLeave:()=>F(!1),children:[d.jsx("span",{style:{fontSize:12},children:l?J?"✅":"▶":"🔒"}),d.jsx("span",{style:ge,children:s.title}),d.jsx("span",{style:Oe,children:J?"CONCLUÍDA":`${j}/${U}`}),l&&d.jsx("span",{style:Re,children:"▶"})]}),D&&l&&d.jsx("div",{children:s.data.map(le=>d.jsx(zm,{module:le,currentTopicId:A,completedTopics:b,allTopics:S,isTopicUnlocked:P,onTopicClick:R},le.id))})]})}const Um={sidebar:{width:220,minWidth:220,height:"calc(100vh - 56px)",overflowY:"auto",background:m.surface,borderRight:`1px solid ${m.border}`,display:"flex",flexDirection:"column"}};function Bm({allPhases:s,currentTopicId:v,completedTopics:l,allTopics:A,isTopicUnlocked:b,onTopicClick:S,justUnlockedPhase:P}){return d.jsx("aside",{style:Um.sidebar,children:s.map((R,T)=>{const D=T>0?s[T-1]:null,z=D?zo(D.data):[],O=T===0||z.every(F=>l.includes(F.id));return d.jsx(_m,{phase:R,phaseIndex:T,isUnlocked:O,currentTopicId:v,completedTopics:l,allTopicsForPhase:A,isTopicUnlocked:b,onTopicClick:S,justUnlocked:P===R.id},R.id)})})}const _e={container:{marginBottom:32,borderRadius:8,border:`1px solid ${m.border}`,overflow:"hidden",transition:"background 0.3s"},containerDone:{background:`${m.success}08`,borderColor:`${m.success}40`},header:{padding:"16px 20px 12px"},title:{fontSize:16,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8,marginBottom:12},progressRow:{display:"flex",alignItems:"center",gap:10,marginBottom:4},progressText:{fontSize:12,color:m.textMuted,whiteSpace:"nowrap"},progressBarOuter:{flex:1,height:4,background:m.border,borderRadius:2,overflow:"hidden"},list:{padding:"0 20px 16px",display:"flex",flexDirection:"column",gap:6},item:{display:"flex",alignItems:"flex-start",gap:10,padding:"8px 12px",borderRadius:6,background:m.surface2,cursor:"pointer",transition:"background 0.15s",userSelect:"none"},checkbox:{width:18,height:18,borderRadius:4,border:`2px solid ${m.textDim}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all 0.15s",cursor:"pointer"},checkboxChecked:{background:m.success,borderColor:m.success},checkmark:{color:"#fff",fontSize:11,fontWeight:700},itemText:{fontSize:14,lineHeight:1.5,color:m.text,transition:"all 0.15s"},itemTextChecked:{textDecoration:"line-through",color:m.textMuted},doneMessage:{padding:"12px 20px 16px",fontSize:14,color:m.success,fontWeight:600,display:"flex",alignItems:"center",gap:8}};function jm({items:s,topicId:v,checked:l,onChange:A}){const b=l||s.map(()=>!1),S=b.filter(Boolean).length,P=S===s.length&&s.length>0,R=s.length>0?S/s.length*100:0,T=P?{..._e.container,..._e.containerDone}:_e.container,D={height:"100%",width:`${R}%`,background:P?m.success:m.m1,borderRadius:2,transition:"width 0.3s ease"};return d.jsxs("div",{style:T,children:[d.jsxs("div",{style:_e.header,children:[d.jsxs("div",{style:_e.title,children:[d.jsx("span",{children:"✅"}),d.jsx("span",{children:"Pratique no VSCode"})]}),d.jsxs("div",{style:_e.progressRow,children:[d.jsxs("span",{style:_e.progressText,children:[S," / ",s.length," tarefas concluídas"]}),d.jsx("div",{style:_e.progressBarOuter,children:d.jsx("div",{style:D})})]})]}),d.jsx("div",{style:_e.list,children:s.map((z,O)=>{const F=b[O],Q=F?{..._e.checkbox,..._e.checkboxChecked}:_e.checkbox,Y=F?{..._e.itemText,..._e.itemTextChecked}:_e.itemText;return d.jsxs("div",{style:_e.item,onClick:()=>A(O,!F),children:[d.jsx("div",{style:Q,children:F&&d.jsx("span",{style:_e.checkmark,children:"✓"})}),d.jsx("span",{style:Y,children:z})]},`${v}-cl-${O}`)})}),P&&d.jsxs("div",{style:_e.doneMessage,children:[d.jsx("span",{children:"🎉"}),d.jsx("span",{children:"Parabéns! Todas as tarefas concluídas"})]})]})}const oo={keyword:"#c678dd",type:"#e5c07b",string:"#98c379",comment:"#5c6370",number:"#d19a66",method:"#61afef",attribute:"#56b6c2"},Vm=["abstract","as","async","await","base","bool","break","byte","case","catch","char","checked","class","const","continue","decimal","default","delegate","do","double","else","enum","event","explicit","extern","false","finally","fixed","float","for","foreach","goto","if","implicit","in","int","interface","internal","is","lock","long","namespace","new","null","object","operator","out","override","params","private","protected","public","readonly","record","ref","return","sbyte","sealed","short","sizeof","stackalloc","static","string","struct","switch","this","throw","true","try","typeof","uint","ulong","unchecked","unsafe","ushort","using","var","virtual","void","volatile","when","where","while","yield","init","required","get","set","value","partial","global","not","and","or","with"],Hm=["Console","String","Int32","Int64","Boolean","Decimal","Double","List","Dictionary","HashSet","Array","Task","IEnumerable","IList","ICollection","IDictionary","IDisposable","Exception","ArgumentException","InvalidOperationException","NullReferenceException","StringBuilder","Span","ReadOnlySpan","Memory","Func","Action","Predicate","EventHandler","IComparable","IEquatable","CancellationToken","CancellationTokenSource","HttpClient","ILogger","IRepository","IService"];function gd(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gm(s){return gd(s).split(`
`).map(b=>{if(b.trimStart().startsWith("//"))return`<span style="color:${oo.comment};font-style:italic">${b}</span>`;let S=b;S=S.replace(/(\$?&quot;(?:[^&]|&(?!quot;))*?&quot;|&quot;(?:[^&]|&(?!quot;))*?&quot;)/g,`<span style="color:${oo.string}">$1</span>`),S=S.replace(/(&#39;.&#39;|&#39;\\.'&#39;)/g,`<span style="color:${oo.string}">$1</span>`),S=S.replace(/(\[(?:Obsolete|Serializable|Flags|Test|Fact|Theory|HttpGet|HttpPost|Route|ApiController|Required)\])/g,`<span style="color:${oo.attribute}">$1</span>`),S=S.replace(/\b(\d+\.?\d*[fFdDmMlL]?)\b/g,`<span style="color:${oo.number}">$1</span>`);const P=new RegExp(`\\b(${Hm.join("|")})\\b`,"g");S=S.replace(P,`<span style="color:${oo.type}">$1</span>`);const R=new RegExp(`\\b(${Vm.join("|")})\\b`,"g");S=S.replace(R,`<span style="color:${oo.keyword}">$1</span>`);const T=S.indexOf("//");if(T>0){const D=S.substring(0,T),z=S.substring(T);(D.match(/<span/g)||[]).length===(D.match(/<\/span>/g)||[]).length&&(S=`${D}<span style="color:${oo.comment};font-style:italic">${z}</span>`)}return S}).join(`
`)}function Wm(s){return gd(s).split(`
`).map(b=>{if(b.trimStart().startsWith("#"))return`<span style="color:${oo.comment};font-style:italic">${b}</span>`;let S=b;return S=S.replace(/(&quot;[^&]*?&quot;)/g,`<span style="color:${oo.string}">$1</span>`),S=S.replace(/\b(git)\s+([\w-]+)/g,`<span style="color:${oo.keyword}">$1</span> <span style="color:${oo.method}">$2</span>`),S=S.replace(/\b(dotnet)\s+([\w-]+)/g,`<span style="color:${oo.keyword}">$1</span> <span style="color:${oo.method}">$2</span>`),S=S.replace(/(\s)(--?[\w-]+)/g,`$1<span style="color:${oo.attribute}">$2</span>`),S}).join(`
`)}function Qm(s,v){return v==="bash"?Wm(s):Gm(s)}const Oo={container:{marginBottom:32,borderRadius:8,overflow:"hidden",border:`1px solid ${m.border}`},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:m.surface,borderBottom:`1px solid ${m.border}`},language:{fontSize:12,fontWeight:600,color:m.textMuted,textTransform:"uppercase",letterSpacing:.5},copyBtn:{fontSize:12,fontWeight:600,padding:"4px 12px",borderRadius:4,border:`1px solid ${m.border}`,background:"transparent",color:m.textMuted,cursor:"pointer",transition:"all 0.15s",letterSpacing:.5},copyBtnCopied:{color:m.success,borderColor:m.success},codeWrap:{padding:"16px 20px",overflowX:"auto",background:"#060a10"},pre:{margin:0,fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace",fontSize:13,lineHeight:1.7,color:m.text,whiteSpace:"pre",tabSize:4},runWrap:{padding:"8px 16px",background:m.surface2,borderTop:`1px solid ${m.border}`,display:"flex",alignItems:"center",gap:8},runLabel:{fontSize:12,color:m.textDim,fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace"},runCmd:{fontSize:12,color:m.m1,fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace"}};function $m({code:s,language:v,runCommand:l}){const[A,b]=L.useState(!1),S=L.useCallback(()=>{navigator.clipboard.writeText(s).then(()=>{b(!0),setTimeout(()=>b(!1),2e3)})},[s]),P=Qm(s,v),R=A?{...Oo.copyBtn,...Oo.copyBtnCopied}:Oo.copyBtn;return d.jsxs("div",{style:Oo.container,children:[d.jsxs("div",{style:Oo.header,children:[d.jsx("span",{style:Oo.language,children:v}),d.jsx("button",{style:R,onClick:S,children:A?"✓ COPIADO":"COPIAR"})]}),d.jsx("div",{style:Oo.codeWrap,children:d.jsx("pre",{style:Oo.pre,dangerouslySetInnerHTML:{__html:P}})}),l&&d.jsxs("div",{style:Oo.runWrap,children:[d.jsx("span",{style:Oo.runLabel,children:"$"}),d.jsx("span",{style:Oo.runCmd,children:l})]})]})}const md={container:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 0",marginTop:32,borderTop:`1px solid ${m.border}`},indicator:{fontSize:13,color:m.textMuted}};function pd({children:s,disabled:v,onClick:l}){const[A,b]=L.useState(!1),S={fontSize:14,fontWeight:600,padding:"8px 20px",borderRadius:6,border:`1px solid ${v?m.textDim:m.m1}`,background:v?"transparent":A?`${m.m1}20`:"transparent",color:v?m.textDim:m.m1,cursor:v?"not-allowed":"pointer",opacity:v?.5:1,transition:"all 0.15s",minWidth:120,textAlign:"center"};return d.jsx("button",{style:S,disabled:v,onClick:l,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),title:v&&s.toString().includes("Próximo")?"Complete o checklist e o quiz para avançar":void 0,children:s})}function Jm({currentIndex:s,totalTopics:v,canAdvance:l,onPrevious:A,onNext:b}){const S=s===0,P=s===v-1;return d.jsxs("div",{style:md.container,children:[d.jsx(pd,{disabled:S,onClick:A,children:"← Anterior"}),d.jsxs("span",{style:md.indicator,children:["Tópico ",s+1," de ",v]}),d.jsx(pd,{disabled:P||!l,onClick:b,children:"Próximo →"})]})}const et={container:{marginBottom:32,borderRadius:8,border:`1px solid ${m.border}`,overflow:"hidden"},header:{padding:"16px 20px 0",display:"flex",alignItems:"center",justifyContent:"space-between"},title:{fontSize:16,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8},saveIndicator:{fontSize:12,transition:"opacity 0.3s"},body:{padding:"12px 20px 16px"},textarea:{width:"100%",minHeight:80,padding:"12px 14px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,color:m.text,fontSize:14,lineHeight:1.6,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif",resize:"vertical",outline:"none",transition:"border-color 0.15s",boxSizing:"border-box"}};function Km({topicId:s,value:v,onChange:l}){const[A,b]=L.useState(!1),[S,P]=L.useState(!1),R=L.useRef(null),T=O=>{const F=O.target.value;l(F),b(!0),P(!1),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{b(!1),P(!0),setTimeout(()=>P(!1),2e3)},1e3)};L.useEffect(()=>()=>{R.current&&clearTimeout(R.current)},[]);const D=A?"💾 Salvando...":S?"✓ Salvo":"",z=A?m.warning:m.success;return d.jsxs("div",{style:et.container,children:[d.jsxs("div",{style:et.header,children:[d.jsxs("div",{style:et.title,children:[d.jsx("span",{children:"📝"}),d.jsx("span",{children:"Minhas Anotações"})]}),d.jsx("span",{style:{...et.saveIndicator,color:z,opacity:A||S?1:0},children:D})]}),d.jsx("div",{style:et.body,children:d.jsx("textarea",{style:et.textarea,value:v||"",onChange:T,placeholder:"Anote suas dúvidas, insights ou observações sobre este tópico...",onFocus:O=>{O.target.style.borderColor=m.m1},onBlur:O=>{O.target.style.borderColor=m.border}})})]})}const Ue={container:{marginBottom:32,borderRadius:8,border:`1px solid ${m.border}`,overflow:"hidden"},header:{padding:"16px 20px 12px"},title:{fontSize:16,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8,marginBottom:4},question:{padding:"16px 20px",borderTop:`1px solid ${m.border}`},questionText:{fontSize:14,fontWeight:600,color:m.text,marginBottom:12,lineHeight:1.5},questionNumber:{color:m.m1,marginRight:8},options:{display:"flex",flexDirection:"column",gap:8},option:{padding:"10px 14px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,fontSize:14,color:m.text,cursor:"pointer",transition:"all 0.15s",textAlign:"left",lineHeight:1.4},optionSelected:{borderColor:m.m1,background:`${m.m1}10`},optionCorrect:{borderColor:m.success,background:`${m.success}15`,color:m.success},optionWrong:{borderColor:m.error,background:`${m.error}15`,color:m.error},optionDisabled:{cursor:"default",opacity:.7},explanation:{marginTop:12,padding:"10px 14px",borderRadius:6,background:`${m.m1}08`,border:`1px solid ${m.m1}30`,fontSize:13,lineHeight:1.6,color:m.textMuted},footer:{padding:"12px 20px 16px",borderTop:`1px solid ${m.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},submitBtn:{padding:"10px 24px",borderRadius:6,border:"none",fontWeight:600,fontSize:14,cursor:"pointer",transition:"all 0.15s"},score:{fontSize:14,fontWeight:600}};function Xm({questions:s,topicId:v,savedAnswers:l,savedSubmitted:A,onSubmit:b}){const[S,P]=L.useState(l||s.map(()=>-1)),[R,T]=L.useState(A||!1),D=S.every(j=>j!==-1),z=(j,U)=>{R||P(J=>{const Z=[...J];return Z[j]=U,Z})},O=()=>{if(!D||R)return;T(!0);const U=S.reduce((J,Z,ie)=>J+(Z===s[ie].answer?1:0),0)*10;b(S,U)},F=R?S.reduce((j,U,J)=>j+(U===s[J].answer?1:0),0):0,Q=(j,U)=>{const J=S[j]===U,Z=s[j].answer===U;if(!R)return J?{...Ue.option,...Ue.optionSelected}:Ue.option;let ie={...Ue.option,...Ue.optionDisabled};return Z?ie={...ie,...Ue.optionCorrect}:J&&!Z&&(ie={...ie,...Ue.optionWrong}),ie},Y={...Ue.submitBtn,background:D?m.m1:m.textDim,color:D?"#000":m.textMuted,cursor:D?"pointer":"not-allowed"};return d.jsxs("div",{style:Ue.container,children:[d.jsx("div",{style:Ue.header,children:d.jsxs("div",{style:Ue.title,children:[d.jsx("span",{children:"🧠"}),d.jsx("span",{children:"Teste seu Conhecimento"})]})}),s.map((j,U)=>d.jsxs("div",{style:Ue.question,children:[d.jsxs("div",{style:Ue.questionText,children:[d.jsxs("span",{style:Ue.questionNumber,children:[U+1,"."]}),j.q]}),d.jsx("div",{style:Ue.options,children:j.options.map((J,Z)=>d.jsx("button",{style:Q(U,Z),onClick:()=>z(U,Z),disabled:R,children:J},Z))}),R&&d.jsxs("div",{style:Ue.explanation,children:["💡 ",j.explanation]})]},`${v}-q-${U}`)),d.jsx("div",{style:Ue.footer,children:R?d.jsxs("span",{style:{...Ue.score,color:F===s.length?m.success:m.warning},children:[F," / ",s.length," corretas — +",F*10," ","XP"]}):d.jsx("button",{style:Y,onClick:O,disabled:!D,children:"Confirmar Respostas"})})]})}const oi={container:{marginBottom:32},sectionTitle:{fontSize:16,fontWeight:600,color:m.text,marginBottom:16,display:"flex",alignItems:"center",gap:8},paragraph:{fontSize:15,lineHeight:1.8,color:m.text,marginBottom:16,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif"},inlineCode:{fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace",fontSize:13,background:m.surface2,color:m.m1,padding:"2px 6px",borderRadius:4,border:`1px solid ${m.border}`}};function Ym(s){return s.split(/(`[^`]+`)/g).map((l,A)=>{if(l.startsWith("`")&&l.endsWith("`")){const b=l.slice(1,-1);return d.jsx("code",{style:oi.inlineCode,children:b},A)}return l})}function Zm({theory:s}){const v=s.split(`

`);return d.jsxs("div",{style:oi.container,children:[d.jsxs("div",{style:oi.sectionTitle,children:[d.jsx("span",{children:"📖"}),d.jsx("span",{children:"Teoria"})]}),v.map((l,A)=>d.jsx("p",{style:oi.paragraph,children:Ym(l)},A))]})}const pa={container:{marginBottom:24},breadcrumb:{display:"flex",alignItems:"center",gap:8,fontSize:14,color:m.textMuted,marginBottom:8},separator:{color:m.textDim},meta:{display:"flex",alignItems:"center",gap:16,marginBottom:8},weekTag:{fontSize:12,fontWeight:600,padding:"3px 10px",borderRadius:12,letterSpacing:.5},progressWrap:{display:"flex",alignItems:"center",gap:8,flex:1},progressText:{fontSize:12,color:m.textMuted,whiteSpace:"nowrap"},progressBarOuter:{flex:1,height:4,background:m.border,borderRadius:2,maxWidth:120,overflow:"hidden"}};function ep({topic:s,module:v,completedTopics:l}){const A=v.topics.filter(T=>l.includes(T.id)).length,b=v.topics.length,S=A/b*100,P={...pa.weekTag,background:`${v.color}20`,color:v.color},R={height:"100%",width:`${S}%`,background:v.color,borderRadius:2,transition:"width 0.3s ease"};return d.jsxs("div",{style:pa.container,children:[d.jsxs("div",{style:pa.breadcrumb,children:[d.jsx("span",{children:v.icon}),d.jsx("span",{style:{color:v.color},children:v.title}),d.jsx("span",{style:pa.separator,children:"›"}),d.jsx("span",{style:{color:m.text},children:s.title})]}),d.jsxs("div",{style:pa.meta,children:[d.jsx("span",{style:P,children:v.week}),d.jsxs("div",{style:pa.progressWrap,children:[d.jsxs("span",{style:pa.progressText,children:[A,"/",b," tópicos"]}),d.jsx("div",{style:pa.progressBarOuter,children:d.jsx("div",{style:R})})]})]})]})}function op({topic:s,module:v,completedTopics:l,currentIndex:A,totalTopics:b,canAdvance:S,onPrevious:P,onNext:R,checklist:T,onChecklistChange:D,quizAnswers:z,quizSubmitted:O,onQuizSubmit:F,notes:Q,onNotesChange:Y}){return d.jsxs("div",{children:[d.jsx(ep,{topic:s,module:v,completedTopics:l}),d.jsx(Zm,{theory:s.theory}),d.jsx($m,{code:s.code,language:s.codeLanguage,runCommand:s.runCommand}),d.jsx(jm,{items:s.checklist,topicId:s.id,checked:T,onChange:D}),d.jsx(Xm,{questions:s.quiz,topicId:s.id,savedAnswers:z,savedSubmitted:O,onSubmit:F}),d.jsx(Km,{topicId:s.id,value:Q,onChange:Y}),d.jsx(Jm,{currentIndex:A,totalTopics:b,canAdvance:S,onPrevious:P,onNext:R})]})}const K={currentTopic:"phase1:current_topic",completed:"phase1:completed_topics",xp:"phase1:xp",checklist:s=>`phase1:checklist_${s}`,quiz:s=>`phase1:quiz_${s}`,notes:s=>`phase1:notes_${s}`,timer:s=>`phase1:timer_${s}`,phase2Completed:"phase2:completed_topics",phase2Xp:"phase2:xp",phase2Unlocked:"phase2:unlocked",checklist2:s=>`phase2:checklist_${s}`,quiz2:s=>`phase2:quiz_${s}`,notes2:s=>`phase2:notes_${s}`,timer2:s=>`phase2:timer_${s}`,phase3Completed:"phase3:completed_topics",phase3Xp:"phase3:xp",phase3Unlocked:"phase3:unlocked",checklist3:s=>`phase3:checklist_${s}`,quiz3:s=>`phase3:quiz_${s}`,notes3:s=>`phase3:notes_${s}`,timer3:s=>`phase3:timer_${s}`,phase4Completed:"phase4:completed_topics",phase4Xp:"phase4:xp",phase4Unlocked:"phase4:unlocked",checklist4:s=>`phase4:checklist_${s}`,quiz4:s=>`phase4:quiz_${s}`,notes4:s=>`phase4:notes_${s}`,timer4:s=>`phase4:timer_${s}`,phase5Completed:"phase5:completed_topics",phase5Xp:"phase5:xp",phase5Unlocked:"phase5:unlocked",checklist5:s=>`phase5:checklist_${s}`,quiz5:s=>`phase5:quiz_${s}`,notes5:s=>`phase5:notes_${s}`,timer5:s=>`phase5:timer_${s}`},ai=s=>/^m[5-8]/.test(s),ti=s=>/^m(9|1[0-2])/.test(s),ri=s=>/^m1[3-6]/.test(s),ii=s=>/^m(17|18|19|20)/.test(s);function rs(s){return ii(s)?K.checklist5(s):ri(s)?K.checklist4(s):ti(s)?K.checklist3(s):ai(s)?K.checklist2(s):K.checklist(s)}function is(s){return ii(s)?K.quiz5(s):ri(s)?K.quiz4(s):ti(s)?K.quiz3(s):ai(s)?K.quiz2(s):K.quiz(s)}function ns(s){return ii(s)?K.notes5(s):ri(s)?K.notes4(s):ti(s)?K.notes3(s):ai(s)?K.notes2(s):K.notes(s)}function cs(s){return ii(s)?K.timer5(s):ri(s)?K.timer4(s):ti(s)?K.timer3(s):ai(s)?K.timer2(s):K.timer(s)}const ap={id:"m1",title:"C# Fundamentos",icon:"⚡",week:"Semana 1",color:"#00D4FF",topics:[{id:"m1t1",moduleId:"m1",title:"Tipos & Variáveis",theory:`Em C#, toda variável possui um tipo que define quais valores ela pode armazenar e quais operações são permitidas. O sistema de tipos do C# é dividido em duas categorias fundamentais: value types e reference types.

Value types (tipos de valor) armazenam o dado diretamente na stack. Incluem int, double, decimal, bool, char, structs e enums. Quando você atribui um value type a outra variável, uma cópia independente é criada. Isso significa que alterar uma não afeta a outra.

Reference types (tipos de referência) armazenam na stack apenas um ponteiro para o objeto real, que vive no heap. Incluem string, arrays, classes e interfaces. Quando você atribui um reference type a outra variável, ambas apontam para o mesmo objeto na memória.

A palavra-chave var permite que o compilador infira o tipo automaticamente com base no valor atribuído. Não é tipagem dinâmica — o tipo é definido em tempo de compilação e não muda depois. Use var quando o tipo é óbvio pelo contexto, como var lista = new List<string>().

Nullable types resolvem um problema comum em aplicações corporativas: representar a ausência de valor. Um int normal não pode ser null, mas int? sim. O operador ?? (null-coalescing) fornece um valor padrão quando a variável é null: int valor = numero ?? 0. Já o operador ?. (null-conditional) acessa membros somente se o objeto não for null, evitando NullReferenceException.

No ambiente corporativo, entender a diferença entre stack e heap é essencial para performance. Value types em loops são mais eficientes porque não geram pressão no garbage collector. Nullable types são onipresentes em dados vindos de banco de dados, onde campos podem ser NULL.`,code:`// Tipos & Variáveis em C# 12 / .NET 8
// Execute: dotnet new console -n TiposDemo && cd TiposDemo

// === VALUE TYPES (armazenados na stack) ===
int idade = 30;
double salario = 8500.50;
decimal preco = 29.99m;        // 'm' indica decimal (precisão financeira)
bool ativo = true;
char inicial = 'A';

// Cópia independente — alterar 'b' não muda 'a'
int a = 10;
int b = a;
b = 20;
Console.WriteLine($"a = {a}, b = {b}"); // a = 10, b = 20

// === REFERENCE TYPES (ponteiro na stack, objeto no heap) ===
string nome = "Maria";
int[] numeros = { 1, 2, 3 };

// Ambas apontam para o mesmo array
int[] copia = numeros;
copia[0] = 999;
Console.WriteLine($"numeros[0] = {numeros[0]}"); // 999 (mesma referência)

// === VAR — inferência de tipo em compilação ===
var contador = 0;              // int
var mensagem = "Olá";          // string
var itens = new List<string>(); // List<string>

// === NULLABLE TYPES ===
int? quantidade = null;        // pode ser null
Console.WriteLine(quantidade.HasValue); // False

// Operador ?? (null-coalescing) — valor padrão se null
int total = quantidade ?? 0;
Console.WriteLine($"Total: {total}"); // 0

// Operador ?. (null-conditional) — acesso seguro
string? texto = null;
int? tamanho = texto?.Length;  // null, sem exceção
Console.WriteLine($"Tamanho: {tamanho ?? 0}"); // 0

// === CONSTANTES ===
const double PI = 3.14159265;
// PI = 3.14; // Erro de compilação — const não pode mudar

Console.WriteLine("✅ Tipos & Variáveis concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n TiposDemo && cd TiposDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n TiposDemo","Declarar pelo menos 5 tipos de valor diferentes (int, double, decimal, bool, char)","Testar a diferença entre value type e reference type com arrays","Usar var para declarar 3 variáveis e verificar o tipo inferido","Criar uma variável nullable e usar os operadores ?? e ?."],quiz:[{q:"Qual a diferença fundamental entre value types e reference types em C#?",options:["Value types são armazenados na stack com cópia direta; reference types armazenam um ponteiro para o heap","Value types são mais lentos que reference types","Reference types não podem ser null","Não existe diferença — ambos funcionam da mesma forma"],answer:0,explanation:"Value types (int, struct, enum) vivem na stack e são copiados por valor. Reference types (class, string, array) armazenam na stack apenas uma referência ao objeto no heap. Isso afeta performance, comportamento de cópia e uso de memória."},{q:"Quando você deve usar decimal em vez de double?",options:["Sempre que precisar de números negativos","Quando trabalhar com cálculos financeiros que exigem precisão exata","Quando precisar de números muito grandes","Decimal e double são intercambiáveis"],answer:1,explanation:"O tipo decimal tem precisão de 28-29 dígitos e é ideal para cálculos financeiros onde erros de arredondamento de ponto flutuante são inaceitáveis. Double usa ponto flutuante IEEE 754 e pode ter pequenas imprecisões (ex: 0.1 + 0.2 != 0.3)."},{q:"O que o código a seguir imprime? int? x = null; Console.WriteLine(x ?? 42);",options:["null","Erro de compilação","42","0"],answer:2,explanation:"O operador ?? (null-coalescing) retorna o operando da esquerda se não for null, caso contrário retorna o da direita. Como x é null, o resultado é 42."}]},{id:"m1t2",moduleId:"m1",title:"Controle de Fluxo",theory:`Estruturas de controle de fluxo determinam quais blocos de código são executados e quantas vezes. Em C# moderno, essas estruturas vão muito além do básico if/else, incluindo switch expressions e pattern matching — recursos que tornam o código mais expressivo e seguro.

O if/else é a estrutura mais básica de decisão. Em C# 12, você pode combiná-lo com pattern matching para verificar tipos e extrair valores em uma única expressão: if (obj is string texto && texto.Length > 5). Isso elimina casts manuais e torna o código mais seguro.

O switch expression (introduzido no C# 8) substituiu o switch statement verboso por uma sintaxe concisa e funcional. Em vez de case/break, você usa setas (=>) e retorna valores diretamente. O compilador verifica se todos os casos foram cobertos, tornando o código mais robusto.

Loops em C# oferecem diferentes semânticas. O for é ideal quando você precisa do índice. O foreach é preferido para iterar coleções — é mais legível e funciona com qualquer IEnumerable<T>. O while executa enquanto a condição for verdadeira, e o do-while garante pelo menos uma execução.

Pattern matching é um dos recursos mais poderosos do C# moderno. Permite verificar tipos (is), combinar condições (and, or, not), verificar propriedades ({ Prop: value }) e fazer range checks (> 0 and < 100). Corporativamente, pattern matching reduz bugs ao forçar tratamento explícito de todos os cenários possíveis, especialmente quando combinado com switch expressions e o discard pattern _.`,code:`// Controle de Fluxo em C# 12 / .NET 8
// Execute: dotnet new console -n FluxoDemo && cd FluxoDemo

// === IF/ELSE com pattern matching ===
object dados = "C# é incrível";

if (dados is string texto && texto.Length > 5)
{
    Console.WriteLine($"String longa: {texto}");
}
else if (dados is int numero)
{
    Console.WriteLine($"Número: {numero}");
}

// === SWITCH EXPRESSION (C# 8+) — conciso e funcional ===
int statusCode = 404;

string mensagem = statusCode switch
{
    200 => "OK — Sucesso",
    301 => "Movido permanentemente",
    404 => "Não encontrado",
    500 => "Erro interno do servidor",
    >= 400 and < 500 => "Erro do cliente",
    _ => "Status desconhecido"  // _ = discard (default)
};
Console.WriteLine($"HTTP {statusCode}: {mensagem}");

// === PATTERN MATCHING avançado ===
decimal salario = 7500m;

string faixa = salario switch
{
    <= 0 => "Inválido",
    > 0 and <= 3000m => "Faixa 1 — Isento",
    > 3000m and <= 6000m => "Faixa 2 — 15%",
    > 6000m and <= 10000m => "Faixa 3 — 22.5%",
    _ => "Faixa 4 — 27.5%"
};
Console.WriteLine($"Salário R\${salario}: {faixa}");

// === FOR — quando precisa do índice ===
string[] linguagens = { "C#", "Python", "Java", "TypeScript" };
for (int i = 0; i < linguagens.Length; i++)
{
    Console.WriteLine($"  [{i}] {linguagens[i]}");
}

// === FOREACH — preferido para coleções ===
var notas = new List<double> { 8.5, 7.0, 9.2, 6.8 };
double soma = 0;
foreach (var nota in notas)
{
    soma += nota;
}
Console.WriteLine($"Média: {soma / notas.Count:F1}");

// === WHILE e DO-WHILE ===
int tentativas = 0;
while (tentativas < 3)
{
    Console.WriteLine($"  Tentativa {tentativas + 1}");
    tentativas++;
}

// do-while garante pelo menos 1 execução
int x = 10;
do
{
    Console.WriteLine($"  x = {x}");
    x--;
} while (x > 10); // Condição falsa, mas executa 1 vez

Console.WriteLine("✅ Controle de Fluxo concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n FluxoDemo && cd FluxoDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n FluxoDemo","Implementar um switch expression que classifique notas (A/B/C/D/F)","Usar pattern matching com is para verificar tipos de object","Criar um loop foreach que calcule a média de uma lista de números","Testar pattern matching com ranges (> X and < Y) em um switch"],quiz:[{q:"Qual a principal vantagem do switch expression sobre o switch statement tradicional?",options:["É mais rápido em tempo de execução","Retorna valores diretamente, é mais conciso e o compilador verifica cobertura de casos","Funciona apenas com strings","Não precisa de break em cada case"],answer:1,explanation:"O switch expression (=>) retorna valores diretamente como uma expressão, tem sintaxe muito mais concisa que case/break, e o compilador avisa se algum caso não foi coberto. Isso resulta em código mais seguro e legível."},{q:"Quando você deve preferir foreach sobre for?",options:["Sempre — for é obsoleto","Quando precisa modificar o índice durante a iteração","Quando itera coleções e não precisa do índice — é mais legível e seguro","foreach é mais lento, então nunca deve ser preferido"],answer:2,explanation:"foreach é preferido quando itera coleções sem necessidade do índice. É mais legível, menos propenso a erros de off-by-one e funciona com qualquer IEnumerable<T>. Use for quando precisar do índice ou modificar a coleção."},{q:"O que imprime? object v = 42; if (v is int n && n > 10) Console.Write(n * 2);",options:["Erro de compilação","42","84","Nada — a condição é falsa"],answer:2,explanation:'O pattern matching "v is int n" verifica se v é int e extrai o valor em n. Como 42 é int e 42 > 10, o código imprime n * 2 = 84.'}]},{id:"m1t3",moduleId:"m1",title:"Coleções",theory:`Coleções em C# são estruturas de dados que armazenam e organizam grupos de objetos. Escolher a coleção certa para cada cenário é uma habilidade essencial em desenvolvimento corporativo — a escolha errada pode causar problemas sérios de performance em produção.

Array é a coleção mais básica: tamanho fixo, acesso por índice O(1), ideal quando o tamanho é conhecido antecipadamente. Em APIs e protobuf, arrays são comuns por serem leves e rápidos.

List<T> é a coleção mais versátil e usada no dia a dia. Internamente é um array dinâmico que dobra de capacidade quando necessário. Acesso por índice é O(1), Add é O(1) amortizado, mas Insert(0, item) é O(n) porque desloca todos os elementos. Use List<T> como padrão quando precisa de uma coleção ordenada e redimensionável.

Dictionary<TKey, TValue> mapeia chaves únicas a valores com acesso O(1) via hash table. É a estrutura ideal para lookups rápidos — por exemplo, cache de usuários por ID, mapear códigos de erro a mensagens, ou indexar configurações por nome. A chave deve implementar GetHashCode() e Equals() corretamente.

HashSet<T> armazena elementos únicos sem ordem específica, com operações Add, Contains e Remove em O(1). É perfeito para verificar existência (ex: "este email já foi usado?"), eliminar duplicatas e operações de conjuntos (intersecção, união, diferença).

No contexto corporativo, a regra de ouro é: List<T> para listas ordenadas, Dictionary<K,V> para lookups por chave, HashSet<T> para unicidade e verificação rápida de pertencimento. Evite arrays quando o tamanho é dinâmico, e evite List<T> quando precisa de buscas frequentes por chave — Dictionary será ordens de magnitude mais rápido.`,code:`// Coleções em C# 12 / .NET 8
// Execute: dotnet new console -n ColecoesDemo && cd ColecoesDemo

// === ARRAY — tamanho fixo, acesso rápido por índice ===
string[] diasUteis = { "Seg", "Ter", "Qua", "Qui", "Sex" };
Console.WriteLine($"Primeiro dia: {diasUteis[0]}");
Console.WriteLine($"Total: {diasUteis.Length} dias");

// === LIST<T> — coleção dinâmica mais usada ===
var tarefas = new List<string>();
tarefas.Add("Revisar PR #142");
tarefas.Add("Deploy para staging");
tarefas.Add("Daily standup");
tarefas.Insert(0, "Café ☕");          // Insere no início

Console.WriteLine($"\\n📋 Tarefas ({tarefas.Count}):");
foreach (var tarefa in tarefas)
{
    Console.WriteLine($"  • {tarefa}");
}

tarefas.Remove("Café ☕");             // Remove por valor
tarefas.RemoveAt(0);                   // Remove por índice
Console.WriteLine($"Após remoções: {tarefas.Count} tarefas");

// === DICTIONARY<K,V> — lookup rápido por chave ===
var funcionarios = new Dictionary<int, string>
{
    { 101, "Ana Silva" },
    { 102, "Carlos Souza" },
    { 103, "Maria Oliveira" }
};

// Acesso por chave — O(1)
Console.WriteLine($"\\nID 102: {funcionarios[102]}");

// Verificar antes de acessar (evita KeyNotFoundException)
if (funcionarios.TryGetValue(999, out string? nome))
{
    Console.WriteLine(nome);
}
else
{
    Console.WriteLine("Funcionário 999 não encontrado");
}

// Adicionar / atualizar
funcionarios[104] = "João Santos";
funcionarios[101] = "Ana Silva Costa";  // Atualiza existente

// === HASHSET<T> — elementos únicos, busca O(1) ===
var emailsCadastrados = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
{
    "ana@empresa.com",
    "carlos@empresa.com"
};

// Contains é O(1) — muito mais rápido que List.Contains que é O(n)
bool existe = emailsCadastrados.Contains("ANA@empresa.com");
Console.WriteLine($"\\nana@empresa.com existe? {existe}"); // True (case-insensitive)

bool adicionou = emailsCadastrados.Add("ana@empresa.com");
Console.WriteLine($"Adicionou duplicata? {adicionou}"); // False

// Operações de conjunto
var emailsNovos = new HashSet<string> { "carlos@empresa.com", "julia@empresa.com" };
emailsCadastrados.UnionWith(emailsNovos);
Console.WriteLine($"Total emails: {emailsCadastrados.Count}"); // 3

// === QUANDO USAR CADA COLEÇÃO ===
// Array       → tamanho fixo conhecido, performance crítica
// List<T>     → coleção ordenada dinâmica (padrão do dia a dia)
// Dictionary  → lookup por chave (cache, mapeamentos)
// HashSet     → unicidade, verificação rápida de existência

Console.WriteLine("\\n✅ Coleções concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n ColecoesDemo && cd ColecoesDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n ColecoesDemo","Criar uma List<string> com operações Add, Remove, Insert e Count","Criar um Dictionary<int, string> e usar TryGetValue para acesso seguro","Criar um HashSet<string> e testar Contains e Add com duplicatas","Comparar a performance conceitual de List.Contains vs HashSet.Contains"],quiz:[{q:"Qual a diferença fundamental entre List<T> e Array em C#?",options:["Não há diferença — ambos funcionam da mesma forma","Array tem tamanho fixo definido na criação; List<T> é dinâmico e redimensiona automaticamente","List<T> é mais rápido que Array em todos os cenários","Array aceita tipos genéricos e List não"],answer:1,explanation:"Arrays têm tamanho fixo (new int[5] sempre terá 5 elementos). List<T> é um array dinâmico que redimensiona internamente quando necessário. Use Array quando o tamanho é conhecido; List<T> quando é dinâmico."},{q:"Quando HashSet<T> é preferível a List<T>?",options:["Quando precisa manter a ordem de inserção","Quando precisa de elementos únicos e verificação rápida de existência (O(1))","Quando precisa acessar por índice","HashSet é sempre mais lento que List"],answer:1,explanation:'HashSet<T> garante unicidade e tem Contains em O(1) via hash. List<T>.Contains é O(n). Use HashSet quando precisa verificar "este item já existe?" frequentemente.'},{q:"O que acontece ao executar: var d = new Dictionary<int,string>(); Console.Write(d[1]);",options:["Imprime null","Imprime string vazia","Lança KeyNotFoundException em tempo de execução","Erro de compilação"],answer:2,explanation:"Acessar uma chave inexistente com [] lança KeyNotFoundException. Use TryGetValue ou ContainsKey para verificar antes de acessar. Este é um erro comum em produção."}]},{id:"m1t4",moduleId:"m1",title:"Strings & Manipulação",theory:`Strings em C# são objetos imutáveis do tipo System.String — cada operação que "modifica" uma string na verdade cria uma nova instância na memória. Entender essa imutabilidade é crucial para performance em aplicações corporativas que processam texto intensivamente.

Interpolação de strings ($ antes das aspas) é a forma moderna e preferida de compor strings em C#. Substituiu a concatenação com + e String.Format(). Com C# 12, interpolação funciona até em strings raw (@$"...") e suporta expressões complexas dentro das chaves.

StringBuilder é essencial quando você precisa construir strings em loops ou concatenar muitas vezes. Como strings são imutáveis, concatenar em loop cria N objetos intermediários — StringBuilder mantém um buffer interno mutável e só gera a string final quando você chama ToString(). Em cenários corporativos (gerar relatórios, montar queries, log), StringBuilder pode ser 100x mais rápido.

Os métodos mais usados de string incluem: Trim() para remover espaços, Split() para separar por delimitador, Contains()/StartsWith()/EndsWith() para buscas, Replace() para substituições, ToUpper()/ToLower() para normalização, e Substring()/indexação por range [..] para extrair partes.

Span<T> e ReadOnlySpan<char> são tipos modernos que permitem trabalhar com fatias de strings sem criar cópias. Em aplicações de alta performance (parsers, processamento de logs), Span evita alocações desnecessárias no heap. O método AsSpan() converte uma string em ReadOnlySpan<char>, permitindo operações de fatiamento com custo zero de memória.

No dia a dia corporativo, a regra é: interpolação para compor strings simples, StringBuilder para loops e concatenações pesadas, e Span<T> quando performance é crítica e você quer evitar alocações.`,code:`// Strings & Manipulação em C# 12 / .NET 8
// Execute: dotnet new console -n StringsDemo && cd StringsDemo

// === INTERPOLAÇÃO DE STRINGS (forma moderna) ===
string nome = "Ana";
int idade = 28;
decimal salario = 8500.50m;

// Interpolação básica
Console.WriteLine($"Nome: {nome}, Idade: {idade}");

// Formatação dentro da interpolação
Console.WriteLine($"Salário: R\${salario:N2}");
Console.WriteLine($"Data: {DateTime.Now:dd/MM/yyyy}");
Console.WriteLine($"Pi: {Math.PI:F4}");

// Raw string literal (C# 11+) — sem escape
string json = $"""
    {{
        "nome": "{nome}",
        "idade": {idade}
    }}
    """;
Console.WriteLine(json);

// === MÉTODOS ESSENCIAIS ===
string email = "  Ana.Silva@Empresa.COM  ";

Console.WriteLine($"Trim: '{email.Trim()}'");
Console.WriteLine($"Lower: '{email.Trim().ToLower()}'");
Console.WriteLine($"Contains @: {email.Contains("@")}");
Console.WriteLine($"Starts: {email.Trim().StartsWith("Ana")}");
Console.WriteLine($"Replace: {email.Trim().Replace("COM", "com.br")}");

// Split — separar por delimitador
string csv = "C#;Python;Java;TypeScript";
string[] linguagens = csv.Split(';');
Console.WriteLine($"\\nLinguagens ({linguagens.Length}):");
foreach (var lang in linguagens)
{
    Console.WriteLine($"  • {lang}");
}

// Join — inverso do Split
string reunido = string.Join(" | ", linguagens);
Console.WriteLine($"Reunido: {reunido}");

// Substring e Range (C# 8+)
string codigo = "PRD-2026-00142";
string prefixo = codigo[..3];       // "PRD"
string ano = codigo[4..8];           // "2026"
string numero = codigo[9..];         // "00142"
Console.WriteLine($"\\nPrefixo={prefixo}, Ano={ano}, Num={numero}");

// === STRINGBUILDER — para concatenações pesadas ===
var sb = new System.Text.StringBuilder();
sb.AppendLine("=== Relatório ===");
for (int i = 1; i <= 5; i++)
{
    sb.AppendLine($"  Item {i}: R\${i * 150:N2}");
}
sb.AppendLine("=================");
Console.WriteLine(sb.ToString());

// === SPAN<T> — fatiamento sem alocação ===
string logLine = "2026-03-10 14:30:00 [INFO] Usuário logou";
ReadOnlySpan<char> span = logLine.AsSpan();

ReadOnlySpan<char> data = span[..10];      // "2026-03-10" (sem cópia!)
ReadOnlySpan<char> nivel = span[21..25];   // "INFO"
Console.WriteLine($"Data: {data}, Nível: {nivel}");

Console.WriteLine("\\n✅ Strings & Manipulação concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n StringsDemo && cd StringsDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n StringsDemo",'Usar interpolação com formatação ($"{valor:N2}") para exibir valores monetários',"Aplicar Trim, Split, Replace e Join em uma string de entrada","Criar um StringBuilder em loop e comparar resultado com concatenação simples","Testar fatiamento com range syntax (str[..3], str[4..8]) e Span"],quiz:[{q:'Por que strings em C# são chamadas de "imutáveis"?',options:["Porque não podem conter caracteres especiais","Porque cada operação cria uma nova string na memória em vez de modificar a original","Porque são armazenadas na stack","Porque não podem ser null"],answer:1,explanation:"Strings em C# são imutáveis — métodos como Replace, ToUpper, Trim retornam uma NOVA string. A original permanece inalterada. Isso impacta performance em loops, onde StringBuilder deve ser usado."},{q:"Quando usar StringBuilder em vez de concatenação com + ou interpolação?",options:["Sempre — StringBuilder é sempre mais rápido","Quando precisa fazer concatenações em loops ou montar strings grandes dinamicamente","Nunca — interpolação substituiu o StringBuilder","Apenas para strings maiores que 1000 caracteres"],answer:1,explanation:"StringBuilder é essencial em loops e concatenações intensivas. Cada + ou interpolação cria uma nova string imutável. Em loop de 1000 iterações, são 1000 objetos descartados vs 1 buffer do StringBuilder."},{q:'O que o código imprime? string s = "ABCDEF"; Console.Write(s[2..4]);',options:['"ABCD"','"CD"','"CDE"','"BC"'],answer:1,explanation:'A sintaxe de range [2..4] extrai caracteres dos índices 2 (inclusivo) ao 4 (exclusivo). Índice 2=C, índice 3=D. Resultado: "CD".'}]}]},tp={id:"m2",title:"POO em C#",icon:"🧱",week:"Semana 2",color:"#7C3AED",topics:[{id:"m2t1",moduleId:"m2",title:"Classes & Objetos",theory:`Programação Orientada a Objetos (POO) é o paradigma fundamental do C# e do desenvolvimento corporativo com .NET. Tudo gira em torno de classes — blueprints que definem a estrutura (campos/propriedades) e o comportamento (métodos) dos objetos.

Uma classe é como uma planta de uma casa: define os cômodos e medidas, mas não é a casa em si. O objeto é a instância concreta — a casa construída a partir da planta. Você pode construir múltiplas casas (objetos) a partir da mesma planta (classe).

Campos (fields) são variáveis internas da classe, geralmente privados. Propriedades (properties) são a interface pública para acessar/modificar dados com controle — podem ter lógica de validação no set, ou ser somente leitura. Em C# moderno, propriedades auto-implementadas (get; set;) são o padrão.

Construtores são métodos especiais chamados automaticamente ao criar um objeto com new. Permitem garantir que o objeto nasça em estado válido. C# 12 introduziu primary constructors para classes — parâmetros definidos na declaração da classe que ficam disponíveis em todo o corpo, eliminando boilerplate de constructor + campo.

Em código corporativo, classes bem projetadas seguem o princípio de responsabilidade única: cada classe faz uma coisa e faz bem. Uma classe Funcionario encapsula dados do funcionário e validações de negócio. Uma classe FolhaPagamento calcula salários. Separá-las facilita manutenção, testes e evolução.

Records (record class) são tipos de referência imutáveis que geram automaticamente Equals, GetHashCode e ToString. São ideais para DTOs (Data Transfer Objects) e value objects em Domain-Driven Design.`,code:`// Classes & Objetos em C# 12 / .NET 8
// Execute: dotnet new console -n ClassesDemo && cd ClassesDemo

// === CLASSE BÁSICA com campos, propriedades e construtor ===
class Funcionario
{
    // Propriedades auto-implementadas
    public int Id { get; init; }            // init = só no construtor
    public string Nome { get; set; }
    public string Cargo { get; set; }
    public decimal Salario { get; private set; }  // set privado

    // Construtor — garante estado válido ao criar
    public Funcionario(int id, string nome, string cargo, decimal salario)
    {
        Id = id;
        Nome = nome;
        Cargo = cargo;
        Salario = salario > 0 ? salario : throw new ArgumentException("Salário deve ser positivo");
    }

    // Método de negócio
    public void AplicarAumento(decimal percentual)
    {
        Salario += Salario * (percentual / 100);
    }

    // Override ToString para exibição
    public override string ToString()
        => $"[{Id}] {Nome} - {Cargo} (R\${Salario:N2})";
}

// === PRIMARY CONSTRUCTOR (C# 12) — elimina boilerplate ===
class Departamento(string nome, string gerente)
{
    // Parâmetros ficam disponíveis em todo o corpo
    private readonly List<Funcionario> _funcionarios = [];

    public string Nome => nome;
    public string Gerente => gerente;
    public int TotalFuncionarios => _funcionarios.Count;

    public void Adicionar(Funcionario func) => _funcionarios.Add(func);

    public void Listar()
    {
        Console.WriteLine($"\\n📁 {nome} (Gerente: {gerente})");
        foreach (var f in _funcionarios)
            Console.WriteLine($"  {f}");
    }
}

// === RECORD — imutável com Equals/GetHashCode/ToString automáticos ===
record Endereco(string Rua, string Cidade, string Estado, string CEP);

// === USO ===
var func1 = new Funcionario(1, "Ana Silva", "Dev Sênior", 12000m);
var func2 = new Funcionario(2, "Carlos Lima", "Dev Júnior", 5000m);

Console.WriteLine(func1);
func1.AplicarAumento(10); // +10%
Console.WriteLine($"Após aumento: {func1}");

var depto = new Departamento("Engenharia", "Maria Souza");
depto.Adicionar(func1);
depto.Adicionar(func2);
depto.Listar();

// Records — comparação por valor
var end1 = new Endereco("Rua A", "SP", "SP", "01000-000");
var end2 = new Endereco("Rua A", "SP", "SP", "01000-000");
Console.WriteLine($"\\nEndereços iguais? {end1 == end2}"); // True (compara valores)

Console.WriteLine("\\n✅ Classes & Objetos concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n ClassesDemo && cd ClassesDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n ClassesDemo","Criar uma classe Produto com propriedades Id, Nome, Preco e construtor validado","Usar primary constructor (C# 12) em pelo menos uma classe","Criar um record para representar dados imutáveis (ex: Endereco, Contato)","Instanciar objetos, chamar métodos e imprimir com ToString()"],quiz:[{q:"Qual a diferença entre um campo (field) e uma propriedade (property)?",options:["São a mesma coisa — nomes diferentes para o mesmo conceito","Campos são variáveis internas; propriedades expõem acesso controlado com get/set e podem ter validação","Propriedades são sempre públicas e campos sempre privados","Campos são mais rápidos e devem ser preferidos"],answer:1,explanation:"Campos são variáveis diretas da classe (geralmente privados). Propriedades são acessores (get/set) que controlam como dados são lidos/escritos, permitindo validação, lógica e encapsulamento."},{q:"O que o primary constructor (C# 12) resolve?",options:["Elimina a necessidade de classes","Remove boilerplate de construtor explícito — parâmetros ficam disponíveis em todo o corpo da classe","Substitui propriedades por campos","Permite criar objetos sem usar new"],answer:1,explanation:"Primary constructors em C# 12 permitem definir parâmetros na declaração da classe: class Pessoa(string nome, int idade). Os parâmetros ficam disponíveis em todo o corpo sem precisar declarar campos manualmente."},{q:"O que imprime? record Ponto(int X, int Y); var a = new Ponto(1, 2); var b = new Ponto(1, 2); Console.Write(a == b);",options:["False — são referências diferentes","True — records comparam por valor","Erro de compilação","Depende do .NET version"],answer:1,explanation:"Records geram automaticamente Equals e == que comparam por valor dos membros (X e Y). Mesmo sendo referências diferentes na memória, a == b retorna True porque os valores são iguais."}]},{id:"m2t2",moduleId:"m2",title:"Herança & Classes Abstratas",theory:`Herança é um dos pilares da POO que permite criar novas classes a partir de classes existentes, herdando suas características e comportamentos. A classe derivada (filha) recebe todos os membros públicos e protegidos da classe base (pai) e pode estendê-los ou modificá-los.

Em C#, uma classe pode herdar de apenas uma classe base (herança simples), mas pode implementar múltiplas interfaces. A sintaxe é class Filho : Pai. A palavra-chave base permite acessar membros da classe pai, especialmente útil em construtores para encadear inicialização.

Métodos virtuais (virtual) na classe base podem ser sobrescritos (override) nas classes derivadas. Um método Calcular() virtual na classe base Forma pode ter implementações específicas em Circulo e Retangulo. Sem virtual, o método não pode ser sobrescrito.

Classes abstratas (abstract) são blueprints incompletos — não podem ser instanciadas diretamente. Servem para definir um contrato: "toda classe derivada DEVE implementar esses métodos". Métodos abstratos não têm corpo na classe base, forçando as filhas a fornecerem a implementação.

Classes seladas (sealed) impedem herança — nenhuma outra classe pode herdar delas. Use sealed quando a classe não foi projetada para extensão e herdar dela poderia quebrar invariantes. Isso é uma boa prática de segurança e clareza de design.

No código corporativo, herança é mais usada em frameworks e bibliotecas do que em código de aplicação. A regra moderna é "prefira composição sobre herança" (composition over inheritance). Use herança quando existe genuinamente uma relação "é um" (Gerente É UM Funcionário) e composição quando é "tem um" (Departamento TEM Funcionários).`,code:`// Herança & Classes Abstratas em C# 12 / .NET 8
// Execute: dotnet new console -n HerancaDemo && cd HerancaDemo

// === CLASSE ABSTRATA — blueprint incompleto ===
abstract class Funcionario
{
    public string Nome { get; }
    public decimal SalarioBase { get; }

    // Construtor na classe abstrata — chamado pelas filhas
    protected Funcionario(string nome, decimal salarioBase)
    {
        Nome = nome;
        SalarioBase = salarioBase;
    }

    // Método abstrato — filhas DEVEM implementar
    public abstract decimal CalcularSalarioFinal();

    // Método virtual — filhas PODEM sobrescrever
    public virtual string ObterResumo()
        => $"{Nome} — Base: R\${SalarioBase:N2}";
}

// === HERANÇA — relação "é um" ===
class Desenvolvedor : Funcionario
{
    public string Linguagem { get; }

    // Construtor chama base() para inicializar a classe pai
    public Desenvolvedor(string nome, decimal salarioBase, string linguagem)
        : base(nome, salarioBase)
    {
        Linguagem = linguagem;
    }

    // Implementação obrigatória do método abstrato
    public override decimal CalcularSalarioFinal()
        => SalarioBase * 1.15m; // +15% benefício técnico

    // Sobrescrita opcional do método virtual
    public override string ObterResumo()
        => $"{base.ObterResumo()} | {Linguagem} | Final: R\${CalcularSalarioFinal():N2}";
}

class Gerente : Funcionario
{
    public int TamanhoEquipe { get; }

    public Gerente(string nome, decimal salarioBase, int tamanhoEquipe)
        : base(nome, salarioBase)
    {
        TamanhoEquipe = tamanhoEquipe;
    }

    public override decimal CalcularSalarioFinal()
        => SalarioBase + (TamanhoEquipe * 500m); // +R$500 por liderado

    public override string ObterResumo()
        => $"{base.ObterResumo()} | Equipe: {TamanhoEquipe} | Final: R\${CalcularSalarioFinal():N2}";
}

// === SEALED — impede herança ===
sealed class Estagiario : Funcionario
{
    public Estagiario(string nome, decimal bolsa) : base(nome, bolsa) { }

    public override decimal CalcularSalarioFinal() => SalarioBase;
}

// class EstagiarioSenior : Estagiario { } // ERRO: não pode herdar de sealed

// === POLIMORFISMO em ação ===
Funcionario[] equipe =
[
    new Desenvolvedor("Ana", 10000m, "C#"),
    new Gerente("Carlos", 12000m, 5),
    new Estagiario("Julia", 2000m),
    new Desenvolvedor("Pedro", 9500m, "Python"),
];

Console.WriteLine("👥 Folha de Pagamento:\\n");
decimal totalFolha = 0;
foreach (var func in equipe)
{
    Console.WriteLine($"  {func.ObterResumo()}");
    totalFolha += func.CalcularSalarioFinal();
}
Console.WriteLine($"\\n💰 Total da folha: R\${totalFolha:N2}");

Console.WriteLine("\\n✅ Herança & Classes Abstratas concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n HerancaDemo && cd HerancaDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n HerancaDemo","Criar uma classe abstrata com pelo menos um método abstrato e um virtual","Implementar 2 classes derivadas com override nos métodos","Criar um array da classe base e iterar com polimorfismo","Experimentar sealed em uma classe e verificar que herança é bloqueada"],quiz:[{q:"Qual a diferença entre uma classe abstrata e uma classe normal?",options:["Classes abstratas são mais rápidas","Classes abstratas não podem ser instanciadas diretamente e podem ter métodos sem implementação","Classes abstratas não podem ter construtores","Não existe diferença — são intercambiáveis"],answer:1,explanation:"Classes abstratas servem como contratos/blueprints. Não podem ser instanciadas (new MinhaAbstrata() é erro). Podem ter métodos abstratos (sem corpo, filhas DEVEM implementar) e métodos concretos (com corpo, opcionais para override)."},{q:"Quando usar sealed em uma classe?",options:["Sempre — impede erros de herança","Quando a classe não foi projetada para extensão e herdar dela poderia quebrar invariantes","Apenas em classes abstratas","sealed é deprecated no C# 12"],answer:1,explanation:"sealed impede que outras classes herdem da classe selada. Use quando herança poderia quebrar o design (ex: uma classe com lógica interna delicada) ou quando não faz sentido semântico estender."},{q:"O que acontece se uma classe herda de uma abstrata mas não implementa todos os métodos abstratos?",options:["Compila normalmente — os métodos ficam vazios","Erro de compilação — a classe derivada deve ser abstrata ou implementar todos os métodos","Erro em tempo de execução","Os métodos são automaticamente implementados como vazios"],answer:1,explanation:"Se uma classe herda métodos abstratos e não os implementa, deve ser declarada abstract também. Caso contrário, o compilador gera erro: a classe concreta deve implementar todos os membros abstratos."}]},{id:"m2t3",moduleId:"m2",title:"Interfaces & Polimorfismo",theory:`Interfaces definem um contrato que classes devem seguir — um conjunto de membros (métodos, propriedades, eventos) que a classe se compromete a implementar. Diferente de classes abstratas, interfaces não contêm estado (campos) e uma classe pode implementar múltiplas interfaces.

A interface é o mecanismo central de design em código corporativo. Frameworks como ASP.NET Core são construídos inteiramente sobre interfaces: ILogger para logging, IConfiguration para configuração, IHostedService para serviços em background. Isso permite trocar implementações sem alterar o código que as consome.

Polimorfismo é a capacidade de tratar objetos de tipos diferentes de forma uniforme através de uma interface comum. Um método ProcessarPagamento(IPagamento pagamento) pode receber CartaoCredito, Pix ou Boleto — todos implementam IPagamento. O código não precisa saber qual é o tipo concreto.

Implementação explícita de interface resolve conflitos quando uma classe implementa múltiplas interfaces com métodos de mesmo nome. Com implementação explícita, o método só é acessível através da referência da interface específica, não diretamente pelo objeto.

Default interface methods (C# 8+) permitem adicionar métodos com corpo na interface. Isso resolve o problema de evolução: adicionar um novo método a uma interface existente não quebra as classes que já a implementam.

No design corporativo, a regra é "programe para interfaces, não para implementações". Seus repositórios devem ser IRepository<T>, seus serviços IEmailService, seus loggers ILogger. Isso facilita testes unitários (mock), inversão de dependência e troca de implementações.`,code:`// Interfaces & Polimorfismo em C# 12 / .NET 8
// Execute: dotnet new console -n InterfacesDemo && cd InterfacesDemo

// === INTERFACE — contrato de comportamento ===
interface IPagamento
{
    string Tipo { get; }
    decimal Valor { get; }
    bool Processar();

    // Default method (C# 8+) — implementação padrão
    string ObterRecibo() => $"Recibo: {Tipo} — R\${Valor:N2}";
}

interface IAuditavel
{
    DateTime DataCriacao { get; }
    void Auditar();
}

// === CLASSE implementando MÚLTIPLAS interfaces ===
class PagamentoPix : IPagamento, IAuditavel
{
    public string Tipo => "PIX";
    public decimal Valor { get; }
    public string ChavePix { get; }
    public DateTime DataCriacao { get; } = DateTime.Now;

    public PagamentoPix(decimal valor, string chavePix)
    {
        Valor = valor;
        ChavePix = chavePix;
    }

    public bool Processar()
    {
        Console.WriteLine($"  ✅ PIX de R\${Valor:N2} para {ChavePix}");
        return true;
    }

    public void Auditar()
        => Console.WriteLine($"  📋 Auditoria: PIX criado em {DataCriacao:HH:mm:ss}");
}

class PagamentoCartao : IPagamento
{
    public string Tipo => "Cartão de Crédito";
    public decimal Valor { get; }
    public string Bandeira { get; }
    public int Parcelas { get; }

    public PagamentoCartao(decimal valor, string bandeira, int parcelas)
    {
        Valor = valor;
        Bandeira = bandeira;
        Parcelas = parcelas;
    }

    public bool Processar()
    {
        Console.WriteLine($"  ✅ {Bandeira} {Parcelas}x de R\${Valor / Parcelas:N2}");
        return true;
    }

    // Sobrescreve o default method
    public string ObterRecibo()
        => $"Recibo: {Bandeira} {Parcelas}x — Total R\${Valor:N2}";
}

class PagamentoBoleto : IPagamento
{
    public string Tipo => "Boleto";
    public decimal Valor { get; }
    public string CodigoBarras { get; }

    public PagamentoBoleto(decimal valor)
    {
        Valor = valor;
        CodigoBarras = $"23793.{Random.Shared.Next(10000, 99999)}";
    }

    public bool Processar()
    {
        Console.WriteLine($"  ✅ Boleto R\${Valor:N2} — Cód: {CodigoBarras}");
        return true;
    }
}

// === POLIMORFISMO — tratar diferentes tipos uniformemente ===
static class ProcessadorPagamentos
{
    public static void ProcessarTodos(IPagamento[] pagamentos)
    {
        Console.WriteLine("💳 Processando pagamentos:\\n");
        decimal total = 0;

        foreach (IPagamento pgto in pagamentos)
        {
            pgto.Processar();
            Console.WriteLine($"  {pgto.ObterRecibo()}\\n");
            total += pgto.Valor;

            // Verificar se também é auditável
            if (pgto is IAuditavel auditavel)
            {
                auditavel.Auditar();
            }
        }

        Console.WriteLine($"💰 Total processado: R\${total:N2}");
    }
}

// === USO ===
IPagamento[] pagamentos =
[
    new PagamentoPix(150.00m, "ana@email.com"),
    new PagamentoCartao(899.90m, "Visa", 3),
    new PagamentoBoleto(250.00m),
];

ProcessadorPagamentos.ProcessarTodos(pagamentos);

Console.WriteLine("\\n✅ Interfaces & Polimorfismo concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n InterfacesDemo && cd InterfacesDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n InterfacesDemo","Criar uma interface com pelo menos 2 métodos e 1 propriedade","Implementar a interface em 3 classes diferentes","Criar um método que recebe a interface como parâmetro (polimorfismo)","Testar implementação de múltiplas interfaces em uma classe"],quiz:[{q:"Qual a principal vantagem de programar contra interfaces?",options:["Interfaces são mais rápidas que classes","Permite trocar implementações sem alterar o código consumidor, facilitando testes e manutenção","Interfaces não precisam de testes","Interfaces compilam mais rápido"],answer:1,explanation:"Programar contra interfaces desacopla o código. Um IRepository<T> pode ser SqlRepository em produção e InMemoryRepository em testes. O código que consome não muda — isso é inversão de dependência."},{q:"Quando usar interface em vez de classe abstrata?",options:["Quando precisar de herança múltipla — uma classe pode implementar várias interfaces mas herdar de apenas uma classe","Quando precisar de campos privados compartilhados","Interfaces são sempre preferíveis a classes abstratas","Quando precisar de construtores na classe base"],answer:0,explanation:'Interfaces permitem "herança múltipla" de contratos: uma classe pode implementar ISerializable, IDisposable e IComparable. Com classes abstratas, só pode herdar de uma. Use interface para contratos; abstrata para compartilhar implementação.'},{q:'O que este código imprime? interface IAnimal { string Som(); } class Gato : IAnimal { public string Som() => "Miau"; } IAnimal a = new Gato(); Console.Write(a.Som());',options:["Erro de compilação","Miau","null","IAnimal"],answer:1,explanation:'IAnimal a = new Gato() é polimorfismo via interface. Ao chamar a.Som(), o runtime executa a implementação de Gato.Som() que retorna "Miau". A interface define o contrato, a classe fornece a implementação.'}]},{id:"m2t4",moduleId:"m2",title:"Encapsulamento",theory:`Encapsulamento é o princípio de POO que protege os dados internos de um objeto, expondo apenas o que é necessário através de uma interface controlada. Em C#, isso é implementado com modificadores de acesso e propriedades com validação.

Os modificadores de acesso em C# são: public (acessível de qualquer lugar), private (somente dentro da classe), protected (classe + derivadas), internal (dentro do assembly/projeto), protected internal (assembly + derivadas) e private protected (classe + derivadas no mesmo assembly).

Propriedades com validação no setter garantem que o objeto nunca entre em estado inválido. Em vez de um campo público decimal Preco, use uma propriedade que valide: se o valor for negativo, lance exceção. Isso centraliza a regra de negócio no único lugar correto.

Propriedades init-only (init ao invés de set) permitem atribuição apenas durante a inicialização — no construtor ou com object initializer. Após a criação, o valor não pode mudar. Isso cria objetos semi-imutáveis: mais seguros e previsíveis.

O padrão em código corporativo é: campos private, propriedades public com validação quando necessário, métodos public para comportamento. A regra de ouro é "torne tudo o mais restritivo possível e relaxe conforme necessário". Comece com private e só torne public o que for genuinamente necessário para consumidores externos.

Required members (C# 11+) forçam que propriedades sejam atribuídas na inicialização, combinando a flexibilidade de object initializers com a segurança de construtores obrigatórios. Use required quando a propriedade é essencial mas você não quer um construtor com muitos parâmetros.`,code:`// Encapsulamento em C# 12 / .NET 8
// Execute: dotnet new console -n EncapsulamentoDemo && cd EncapsulamentoDemo

// === MODIFICADORES DE ACESSO + VALIDAÇÃO ===
class ContaBancaria
{
    // Campo privado — acessível somente dentro da classe
    private decimal _saldo;
    private readonly List<string> _extrato = [];

    // Propriedades públicas com controle de acesso
    public string Titular { get; }            // somente leitura
    public string Numero { get; init; }       // init-only: define na criação, não muda depois
    public decimal Saldo => _saldo;           // calculada, sem set

    // Construtor valida e inicializa
    public ContaBancaria(string titular, string numero, decimal saldoInicial)
    {
        if (string.IsNullOrWhiteSpace(titular))
            throw new ArgumentException("Titular é obrigatório");
        if (saldoInicial < 0)
            throw new ArgumentException("Saldo inicial não pode ser negativo");

        Titular = titular;
        Numero = numero;
        _saldo = saldoInicial;
        _extrato.Add($"Abertura: +R\${saldoInicial:N2}");
    }

    // Métodos públicos controlam como o saldo muda
    public bool Depositar(decimal valor)
    {
        if (valor <= 0) return false;

        _saldo += valor;
        _extrato.Add($"Depósito: +R\${valor:N2}");
        return true;
    }

    public bool Sacar(decimal valor)
    {
        if (valor <= 0 || valor > _saldo) return false;

        _saldo -= valor;
        _extrato.Add($"Saque: -R\${valor:N2}");
        return true;
    }

    // Extrato é cópia — não expõe a lista interna
    public IReadOnlyList<string> ObterExtrato() => _extrato.AsReadOnly();
}

// === REQUIRED MEMBERS (C# 11+) ===
class Pedido
{
    public required string ClienteNome { get; init; }
    public required string Produto { get; init; }
    public required int Quantidade { get; init; }
    public decimal PrecoUnitario { get; init; }

    public decimal Total => Quantidade * PrecoUnitario;
}

// === PROPRIEDADE COM VALIDAÇÃO NO SETTER ===
class Produto
{
    public string Nome { get; set; }

    private decimal _preco;
    public decimal Preco
    {
        get => _preco;
        set
        {
            if (value < 0)
                throw new ArgumentException("Preço não pode ser negativo");
            _preco = value;
        }
    }

    private int _estoque;
    public int Estoque
    {
        get => _estoque;
        set => _estoque = value >= 0 ? value
            : throw new ArgumentException("Estoque não pode ser negativo");
    }

    public Produto(string nome, decimal preco, int estoque)
    {
        Nome = nome;
        Preco = preco;     // passa pela validação do setter
        Estoque = estoque;
    }
}

// === USO ===
// ContaBancaria — saldo protegido, só muda via Depositar/Sacar
var conta = new ContaBancaria("Ana Silva", "12345-6", 1000m);
conta.Depositar(500m);
conta.Sacar(200m);
// conta._saldo = 999999; // ERRO: campo privado, inacessível

Console.WriteLine($"🏦 Conta: {conta.Titular}");
Console.WriteLine($"   Saldo: R\${conta.Saldo:N2}");
Console.WriteLine("   Extrato:");
foreach (var linha in conta.ObterExtrato())
    Console.WriteLine($"     {linha}");

// Required members — compilador obriga preenchimento
var pedido = new Pedido
{
    ClienteNome = "Carlos",
    Produto = "Mouse Gamer",
    Quantidade = 2,
    PrecoUnitario = 89.90m
};
Console.WriteLine($"\\n📦 Pedido: {pedido.Quantidade}x {pedido.Produto} = R\${pedido.Total:N2}");

// Produto com validação
var produto = new Produto("Notebook", 4500m, 10);
// produto.Preco = -100; // Lançaria ArgumentException
Console.WriteLine($"\\n🏷️ {produto.Nome}: R\${produto.Preco:N2} ({produto.Estoque} em estoque)");

Console.WriteLine("\\n✅ Encapsulamento concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n EncapsulamentoDemo && cd EncapsulamentoDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n EncapsulamentoDemo","Criar uma classe com campos private e propriedades public com validação","Usar init-only properties em pelo menos uma propriedade","Criar uma classe com required members e testar object initializer","Verificar que dados privados não são acessíveis de fora da classe"],quiz:[{q:"Por que devemos preferir propriedades com validação em vez de campos públicos?",options:["Propriedades são mais rápidas que campos","Propriedades permitem controlar acesso e validar dados, impedindo que o objeto entre em estado inválido","Campos públicos não compilam em C# 12","Não há diferença prática"],answer:1,explanation:"Propriedades com validação no setter garantem que regras de negócio sejam respeitadas (ex: preço >= 0). Campos públicos permitem qualquer valor, podendo corromper o estado do objeto."},{q:"Qual a diferença entre init e set em uma propriedade?",options:["init é mais rápido que set","init permite atribuição apenas na inicialização (construtor ou object initializer); set permite a qualquer momento","set é somente leitura e init permite escrita","Não existe diferença"],answer:1,explanation:'init substitui set para criar propriedades semi-imutáveis. Após a construção do objeto, propriedades init não podem ser alteradas: obj.Nome = "X" gera erro se Nome usa init.'},{q:"O que acontece se você não fornecer uma propriedade required ao criar o objeto?",options:["A propriedade fica null","Usa valor default do tipo","Erro de compilação — required força atribuição na inicialização","Erro em tempo de execução"],answer:2,explanation:"required (C# 11+) faz o compilador exigir que a propriedade seja atribuída. Se faltar no object initializer ou construtor, é erro de compilação — não de runtime."}]}]},rp={id:"m3",title:"C# Intermediário",icon:"🚀",week:"Semana 3",color:"#059669",topics:[{id:"m3t1",moduleId:"m3",title:"Generics",theory:`Generics permitem criar classes, métodos e interfaces que funcionam com qualquer tipo, mantendo type-safety em tempo de compilação. Em vez de escrever RepositorioUsuario, RepositorioProduto, RepositorioPedido — você escreve Repository<T> uma única vez e usa com qualquer tipo.

O parâmetro de tipo T (ou TKey, TValue, etc.) é um placeholder que o compilador substitui pelo tipo real quando você usa. List<string>, Dictionary<int, Funcionario> — todos são versões especializadas de tipos genéricos. Sem generics, seria necessário usar object e fazer casts manuais, perdendo type-safety.

Classes genéricas são o caso mais comum: class Repository<T> define operações CRUD para qualquer entidade. Métodos genéricos permitem uma única operação funcionar com tipos variados: T Parse<T>(string text). Interfaces genéricas definem contratos tipados: IComparable<T>, IEnumerable<T>.

Constraints (where T : ...) restringem quais tipos podem ser usados como argumento genérico. As mais comuns são: where T : class (reference types), where T : struct (value types), where T : new() (deve ter construtor sem parâmetros), where T : IMinhaInterface (deve implementar interface), where T : BaseClass (deve herdar de classe).

No código corporativo .NET, generics são onipresentes: Repository<T>, ILogger<T>, IOptions<T>, IMapper<TSource, TDestination>. O padrão Repository genérico é provavelmente o uso mais emblemático: uma única classe que faz CRUD para qualquer entidade do domínio, eliminando duplicação massiva.

Covariância (out T) e contravariância (in T) em interfaces genéricas permitem flexibilidade na substituição de tipos: IEnumerable<Gato> pode ser usado onde IEnumerable<Animal> é esperado (covariância).`,code:`// Generics em C# 12 / .NET 8
// Execute: dotnet new console -n GenericsDemo && cd GenericsDemo

// === CLASSE GENÉRICA — funciona com qualquer tipo ===
class Repositorio<T> where T : class
{
    private readonly List<T> _items = [];

    public void Adicionar(T item)
    {
        _items.Add(item);
        Console.WriteLine($"  ✅ Adicionado: {item}");
    }

    public T? BuscarPor(Func<T, bool> predicado)
        => _items.FirstOrDefault(predicado);

    public List<T> Listar() => [.. _items];

    public int Total => _items.Count;
}

// === INTERFACE GENÉRICA COM CONSTRAINT ===
interface IEntidade
{
    int Id { get; }
    string Nome { get; }
}

interface IServico<T> where T : IEntidade
{
    void Salvar(T entidade);
    T? BuscarPorId(int id);
    List<T> ListarTodos();
}

// === IMPLEMENTAÇÕES ===
record Produto(int Id, string Nome, decimal Preco) : IEntidade;
record Cliente(int Id, string Nome, string Email) : IEntidade;

class Servico<T> : IServico<T> where T : IEntidade
{
    private readonly Repositorio<T> _repo = new();

    public void Salvar(T entidade) => _repo.Adicionar(entidade);

    public T? BuscarPorId(int id)
        => _repo.BuscarPor(e => e.Id == id);

    public List<T> ListarTodos() => _repo.Listar();
}

// === MÉTODO GENÉRICO — uma função para vários tipos ===
static class Util
{
    // Método genérico com constraint
    public static void ExibirInfo<T>(T entidade) where T : IEntidade
    {
        Console.WriteLine($"  📄 [{entidade.Id}] {entidade.Nome}");
    }

    // Método genérico que retorna o tipo
    public static T Maior<T>(T a, T b) where T : IComparable<T>
        => a.CompareTo(b) >= 0 ? a : b;
}

// === USO ===
Console.WriteLine("📦 Serviço de Produtos:");
var produtoService = new Servico<Produto>();
produtoService.Salvar(new Produto(1, "Mouse Gamer", 89.90m));
produtoService.Salvar(new Produto(2, "Teclado Mecânico", 299.90m));
produtoService.Salvar(new Produto(3, "Monitor 27"", 1599.90m));

var encontrado = produtoService.BuscarPorId(2);
Console.WriteLine($"  Encontrado: {encontrado}");

Console.WriteLine("\\n👤 Serviço de Clientes:");
var clienteService = new Servico<Cliente>();
clienteService.Salvar(new Cliente(1, "Ana Silva", "ana@corp.com"));
clienteService.Salvar(new Cliente(2, "Carlos Lima", "carlos@corp.com"));

// Método genérico
Console.WriteLine("\\n📋 Info de entidades:");
foreach (var p in produtoService.ListarTodos())
    Util.ExibirInfo(p);

// Genérico com IComparable
int maior = Util.Maior(42, 17);
string maiorStr = Util.Maior("Zebra", "Arara");
Console.WriteLine($"\\nMaior número: {maior}");
Console.WriteLine($"Maior string: {maiorStr}");

Console.WriteLine("\\n✅ Generics concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n GenericsDemo && cd GenericsDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n GenericsDemo","Criar uma classe genérica Repository<T> com métodos Add, Find e List","Usar a classe genérica com pelo menos 2 tipos diferentes","Criar um método genérico com constraint (where T : IComparable<T>)","Criar uma interface genérica e implementá-la em uma classe"],quiz:[{q:"Qual o principal benefício de Generics em C#?",options:["Código mais rápido em tempo de execução","Reutilização de código com type-safety — uma classe/método funciona com qualquer tipo sem perder verificação de tipos","Generics são mais simples que classes normais","Permitem herança múltipla"],answer:1,explanation:"Generics eliminam duplicação: em vez de RepositorioUsuario, RepositorioProduto etc., você escreve Repository<T> uma vez. O compilador garante type-safety — erros de tipo são pegos em compilação, não em runtime."},{q:'Para que serve a constraint "where T : new()"?',options:["T deve ser um tipo primitivo","T deve ter um construtor sem parâmetros, permitindo criar instâncias com new T()","T deve ser uma interface","T não pode ser null"],answer:1,explanation:"where T : new() garante que T tem construtor sem parâmetros. Isso permite usar new T() dentro do código genérico para criar instâncias. Sem essa constraint, new T() não compila."},{q:"O que este código faz? static T Max<T>(T a, T b) where T : IComparable<T> => a.CompareTo(b) >= 0 ? a : b;",options:["Compara duas strings","Retorna o maior entre dois valores de qualquer tipo que implemente IComparable<T>","Retorna sempre o primeiro argumento","Erro de compilação — generics não suportam comparação"],answer:1,explanation:'O método genérico aceita qualquer tipo que implemente IComparable<T> (int, string, DateTime...). CompareTo retorna >= 0 se a >= b. Funciona com Max(42, 17), Max("Zebra", "Arara"), etc.'}]},{id:"m3t2",moduleId:"m3",title:"Delegates & Func",theory:`Delegates são tipos que representam referências a métodos — permitem tratar funções como dados, passá-las como parâmetros, armazená-las em variáveis e combiná-las. São o fundamento da programação funcional em C# e a base de eventos, callbacks e LINQ.

Um delegate é como um contrato que define a assinatura (parâmetros e retorno) de um método. Qualquer método que corresponda à assinatura pode ser atribuído ao delegate. Delegates são type-safe — o compilador verifica que o método atribuído tem a assinatura correta.

Na prática, raramente você cria delegates customizados. O .NET fornece delegates genéricos prontos: Func<T, TResult> para funções que retornam valor (até 16 parâmetros), Action<T> para funções void (sem retorno), e Predicate<T> para funções que retornam bool (caso especial de Func<T, bool>).

Expressões lambda (=>) são a forma concisa de criar funções inline. x => x * 2 é uma função que recebe x e retorna x * 2. Substituíram delegates anônimos e são a forma padrão de escrever callbacks em C# moderno. Lambdas podem capturar variáveis do escopo externo (closures).

No código corporativo, delegates e lambdas são essenciais em: métodos de extensão LINQ (Where, Select, OrderBy todos recebem Func<T, TResult>), eventos de UI, middleware de ASP.NET Core, estratégias configuráveis (ex: calcular desconto com diferentes regras), e callbacks assíncronos.

Higher-order functions — funções que recebem ou retornam outras funções — são possíveis graças a delegates. Um método ProcessarPedidos(Func<Pedido, bool> filtro) aplica qualquer critério de filtragem, desacoplando a lógica de processamento da lógica de seleção.`,code:`// Delegates & Func em C# 12 / .NET 8
// Execute: dotnet new console -n DelegatesDemo && cd DelegatesDemo

// === DELEGATE CUSTOMIZADO (para entender o conceito) ===
delegate decimal CalculoImposto(decimal valor);

CalculoImposto calculoISS = valor => valor * 0.05m;   // 5%
CalculoImposto calculoICMS = valor => valor * 0.18m;  // 18%

decimal preco = 1000m;
Console.WriteLine($"ISS: R\${calculoISS(preco):N2}");
Console.WriteLine($"ICMS: R\${calculoICMS(preco):N2}");

// === FUNC<T, TResult> — delegate genérico com retorno ===
// Func<entrada, saída>
Func<string, string> normalizar = nome => nome.Trim().ToUpper();
Func<int, int, int> somar = (a, b) => a + b;
Func<decimal, decimal, decimal> aplicarDesconto =
    (preco, percentual) => preco - (preco * percentual / 100);

Console.WriteLine($"\\nNome: {normalizar("  ana silva  ")}");
Console.WriteLine($"Soma: {somar(10, 20)}");
Console.WriteLine($"Com desconto: R\${aplicarDesconto(500m, 15m):N2}");

// === ACTION<T> — delegate sem retorno (void) ===
Action<string> log = msg => Console.WriteLine($"  📋 LOG: {msg}");
Action<string, ConsoleColor> logColorido = (msg, cor) =>
{
    Console.ForegroundColor = cor;
    Console.WriteLine($"  {msg}");
    Console.ResetColor();
};

log("Sistema iniciado");
logColorido("Operação concluída!", ConsoleColor.Green);
logColorido("Atenção: recurso depreciado", ConsoleColor.Yellow);

// === PREDICATE<T> — delegate que retorna bool ===
Predicate<int> ehPar = n => n % 2 == 0;
Predicate<string> emailValido = e => e.Contains("@") && e.Contains(".");

Console.WriteLine($"\\n4 é par? {ehPar(4)}");
Console.WriteLine($"test@mail.com válido? {emailValido("test@mail.com")}");

// === HIGHER-ORDER FUNCTION — função que recebe função ===
static List<T> Filtrar<T>(List<T> itens, Func<T, bool> criterio)
{
    var resultado = new List<T>();
    foreach (var item in itens)
    {
        if (criterio(item))
            resultado.Add(item);
    }
    return resultado;
}

var numeros = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

var pares = Filtrar(numeros, n => n % 2 == 0);
var maioresQue5 = Filtrar(numeros, n => n > 5);
var primosSimples = Filtrar(numeros, n => n is 2 or 3 or 5 or 7);

Console.WriteLine($"\\nPares: {string.Join(", ", pares)}");
Console.WriteLine($"Maiores que 5: {string.Join(", ", maioresQue5)}");
Console.WriteLine($"Primos: {string.Join(", ", primosSimples)}");

// === NA PRÁTICA — estratégias configuráveis ===
record Produto(string Nome, decimal Preco, string Categoria);

var produtos = new List<Produto>
{
    new("Mouse", 89.90m, "Periféricos"),
    new("Monitor", 1599.90m, "Monitores"),
    new("Teclado", 299.90m, "Periféricos"),
    new("Webcam", 199.90m, "Acessórios"),
};

// A mesma função com diferentes critérios
var baratos = Filtrar(produtos, p => p.Preco < 200m);
var perifericos = Filtrar(produtos, p => p.Categoria == "Periféricos");

Console.WriteLine("\\n🏷️ Baratos (< R$200):");
baratos.ForEach(p => Console.WriteLine($"  {p.Nome}: R\${p.Preco:N2}"));

Console.WriteLine("\\n⌨️ Periféricos:");
perifericos.ForEach(p => Console.WriteLine($"  {p.Nome}: R\${p.Preco:N2}"));

Console.WriteLine("\\n✅ Delegates & Func concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n DelegatesDemo && cd DelegatesDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n DelegatesDemo","Criar e usar uma Func<T, TResult> com expressão lambda","Criar e usar uma Action<T> para logging","Implementar uma higher-order function que receba Func como parâmetro","Usar Predicate<T> para filtrar uma lista de objetos"],quiz:[{q:"Qual a diferença entre Func<T, TResult> e Action<T>?",options:["Func é mais rápido que Action","Func retorna um valor (último tipo genérico é o retorno); Action não retorna nada (void)","Action pode ter mais parâmetros que Func","São intercambiáveis"],answer:1,explanation:"Func<int, string> recebe int e retorna string. Action<int> recebe int e não retorna nada (void). O último tipo genérico de Func é sempre o tipo de retorno."},{q:"Qual delegate usar quando precisa de uma função que recebe string e retorna bool?",options:["Action<string>","Func<bool, string>","Func<string, bool> ou Predicate<string>","Delegate<string, bool>"],answer:2,explanation:"Func<string, bool> recebe string e retorna bool. Predicate<string> é equivalente (sempre retorna bool). Action<string> não retorna valor (void). Em Func, o último tipo genérico é sempre o retorno."},{q:"O que este código retorna? Func<int, int> dobro = x => x * 2; Console.Write(dobro(7));",options:["7","14","Erro de compilação","x * 2"],answer:1,explanation:"A lambda x => x * 2 cria uma função que recebe um int e retorna o dobro. dobro(7) passa 7 como x, retornando 7 * 2 = 14."}]},{id:"m3t3",moduleId:"m3",title:"LINQ Essencial",theory:`LINQ (Language Integrated Query) é um dos recursos mais poderosos e distintivos do C#. Permite consultar e transformar coleções de dados usando uma sintaxe declarativa e fluente — você descreve O QUE quer, não COMO buscar. LINQ funciona com arrays, listas, dicionários, banco de dados (Entity Framework) e até XML/JSON.

Os operadores mais essenciais do LINQ são: Where (filtrar elementos que satisfazem uma condição), Select (transformar/projetar cada elemento em outro formato), OrderBy/OrderByDescending (ordenar), GroupBy (agrupar por chave), FirstOrDefault (primeiro que satisfaz ou default), Any (existe algum que?) e All (todos satisfazem?).

LINQ usa lazy evaluation (avaliação preguiçosa) — a query não é executada quando é definida, mas quando os dados são consumidos (via foreach, ToList, Count, etc.). Isso permite compor queries complexas encadeando operadores sem criar coleções intermediárias. ToList() ou ToArray() forçam a execução imediata.

Method syntax (fluent) é a forma preferida: items.Where(x => x > 5).OrderBy(x => x). Também existe query syntax (SQL-like): from x in items where x > 5 orderby x select x. Ambas compilam para o mesmo código, mas method syntax é mais versátil e predominante no código corporativo.

Aggregate é o operador avançado que reduz uma coleção a um único valor usando uma função acumuladora. É o equivalente ao reduce() do JavaScript. Permite cálculos customizados que Count, Sum e Average não cobrem.

No dia a dia corporativo, LINQ substitui loops manuais em 90% dos casos. Em vez de criar uma lista temporária, iterar, verificar condição e adicionar — você escreve uma query declarativa e legível. Com Entity Framework, LINQ se traduz diretamente em SQL, tornando consultas a banco type-safe.`,code:`// LINQ Essencial em C# 12 / .NET 8
// Execute: dotnet new console -n LinqDemo && cd LinqDemo

// === DADOS DE EXEMPLO (simulando domínio corporativo) ===
record Funcionario(string Nome, string Departamento, decimal Salario, int AnosEmpresa);

var funcionarios = new List<Funcionario>
{
    new("Ana Silva", "Engenharia", 12000m, 5),
    new("Carlos Lima", "Engenharia", 9500m, 2),
    new("Maria Souza", "RH", 8000m, 7),
    new("João Santos", "Engenharia", 15000m, 10),
    new("Julia Alves", "Marketing", 7500m, 1),
    new("Pedro Costa", "RH", 6500m, 3),
    new("Fernanda Dias", "Marketing", 9000m, 4),
    new("Lucas Ferreira", "Engenharia", 11000m, 6),
};

// === WHERE — filtrar ===
var seniors = funcionarios.Where(f => f.AnosEmpresa >= 5);
Console.WriteLine("👴 Seniores (5+ anos):");
foreach (var f in seniors)
    Console.WriteLine($"  {f.Nome} — {f.AnosEmpresa} anos");

// === SELECT — transformar/projetar ===
var nomes = funcionarios.Select(f => f.Nome);
Console.WriteLine($"\\n📋 Nomes: {string.Join(", ", nomes)}");

// Projeção em tipo anônimo
var resumos = funcionarios.Select(f => new
{
    f.Nome,
    SalarioAnual = f.Salario * 12
});
Console.WriteLine("\\n💰 Salários anuais:");
foreach (var r in resumos)
    Console.WriteLine($"  {r.Nome}: R\${r.SalarioAnual:N2}");

// === ORDERBY / ORDERBYDESCENDING ===
var maisCaros = funcionarios
    .OrderByDescending(f => f.Salario)
    .Take(3);  // Top 3
Console.WriteLine("\\n🏆 Top 3 salários:");
foreach (var f in maisCaros)
    Console.WriteLine($"  {f.Nome}: R\${f.Salario:N2}");

// === GROUPBY — agrupar por chave ===
var porDepto = funcionarios.GroupBy(f => f.Departamento);
Console.WriteLine("\\n📁 Por departamento:");
foreach (var grupo in porDepto)
{
    var mediaSalario = grupo.Average(f => f.Salario);
    Console.WriteLine($"  {grupo.Key}: {grupo.Count()} pessoas, média R\${mediaSalario:N2}");
}

// === FIRSTORDEFAULT — primeiro que satisfaz ou null ===
var joao = funcionarios.FirstOrDefault(f => f.Nome.Contains("João"));
Console.WriteLine($"\\n🔍 Busca 'João': {joao?.Nome ?? "Não encontrado"}");

var inexistente = funcionarios.FirstOrDefault(f => f.Nome == "Zeus");
Console.WriteLine($"🔍 Busca 'Zeus': {inexistente?.Nome ?? "Não encontrado"}");

// === ANY / ALL — verificações booleanas ===
bool temEngenheiro = funcionarios.Any(f => f.Departamento == "Engenharia");
bool todosSeniors = funcionarios.All(f => f.AnosEmpresa >= 5);
Console.WriteLine($"\\nTem engenheiro? {temEngenheiro}");
Console.WriteLine($"Todos são seniores? {todosSeniors}");

// === AGGREGATE — reduzir a um valor (como reduce) ===
string todosNomes = funcionarios
    .Select(f => f.Nome.Split(' ')[0])
    .Aggregate((acumulador, nome) => $"{acumulador}, {nome}");
Console.WriteLine($"\\nPrimeiros nomes: {todosNomes}");

// === ENCADEAR operadores (composição de queries) ===
var relatorio = funcionarios
    .Where(f => f.Departamento == "Engenharia")
    .OrderBy(f => f.AnosEmpresa)
    .Select(f => $"{f.Nome} ({f.AnosEmpresa}a) — R\${f.Salario:N2}");

Console.WriteLine("\\n⚙️ Engenharia por senioridade:");
foreach (var linha in relatorio)
    Console.WriteLine($"  {linha}");

// === SUM / AVERAGE / MIN / MAX ===
decimal folhaTotal = funcionarios.Sum(f => f.Salario);
decimal mediaGeral = funcionarios.Average(f => f.Salario);
decimal maiorSalario = funcionarios.Max(f => f.Salario);
Console.WriteLine($"\\n📊 Folha total: R\${folhaTotal:N2}");
Console.WriteLine($"📊 Média salarial: R\${mediaGeral:N2}");
Console.WriteLine($"📊 Maior salário: R\${maiorSalario:N2}");

Console.WriteLine("\\n✅ LINQ Essencial concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n LinqDemo && cd LinqDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n LinqDemo","Criar uma lista de records e usar Where + Select para filtrar e projetar","Usar GroupBy para agrupar dados e calcular médias por grupo","Encadear 3+ operadores LINQ em uma query fluente","Testar FirstOrDefault com cenário existente e inexistente"],quiz:[{q:'O que significa "lazy evaluation" no contexto do LINQ?',options:["LINQ é lento e preguiçoso","A query só é executada quando os dados são consumidos (foreach, ToList, Count), não quando é definida","LINQ ignora elementos null","Cada operador cria uma cópia da coleção"],answer:1,explanation:"Lazy evaluation significa que var query = list.Where(...) não executa nada — apenas define a query. A execução acontece quando você itera (foreach), converte (ToList) ou agrega (Count, Sum). Isso permite compor queries eficientemente."},{q:"Qual operador LINQ usar para transformar cada elemento de uma coleção em outro formato?",options:["Where","GroupBy","Select","Aggregate"],answer:2,explanation:"Select projeta/transforma cada elemento: list.Select(x => new { x.Nome, x.Email }) cria uma nova coleção com objetos anônimos contendo apenas Nome e Email de cada item original."},{q:"O que retorna: new[] { 3, 1, 4, 1, 5 }.Where(n => n > 2).OrderBy(n => n).First()?",options:["1","3","5","Erro — coleção vazia"],answer:1,explanation:"Where(n => n > 2) filtra para {3, 4, 5}. OrderBy(n => n) ordena para {3, 4, 5}. First() retorna o primeiro: 3."}]},{id:"m3t4",moduleId:"m3",title:"async/await",theory:`Programação assíncrona com async/await é essencial em aplicações modernas. Quando seu código faz I/O (banco de dados, HTTP, arquivo), ele espera a resposta. Sem async, a thread fica bloqueada sem fazer nada. Com async/await, a thread é liberada para processar outras requisições enquanto aguarda o I/O.

Task<T> representa uma operação que eventualmente produzirá um valor do tipo T. Task (sem tipo) representa uma operação void assíncrona. Marcar um método com async permite usar await dentro dele, que "pausa" a execução até o Task completar, sem bloquear a thread.

O anti-pattern mais perigoso é async void — deve ser evitado SEMPRE (exceto em event handlers). Um método async void não pode ser aguardado, exceções não são capturadas pelo chamador e podem crashar a aplicação. Use async Task para métodos sem retorno.

CancellationToken permite cancelar operações assíncronas de forma cooperativa. O chamador cria um CancellationTokenSource e passa o token. A operação verifica periodicamente se o cancelamento foi solicitado. Em APIs, o framework passa o token automaticamente quando o cliente desconecta.

ConfigureAwait(false) é relevante em código de biblioteca: evita capturar o contexto de sincronização (UI thread, ASP.NET context), melhorando performance. Em código de aplicação (ASP.NET Core), geralmente não é necessário pois o framework não tem SynchronizationContext.

No código corporativo, a regra é: toda operação de I/O deve ser assíncrona. Repositórios, serviços HTTP, operações de arquivo — todos devem retornar Task<T>. O ASP.NET Core é fundamentalmente assíncrono: controllers que usam await liberam threads para processar mais requisições simultâneas.`,code:`// async/await em C# 12 / .NET 8
// Execute: dotnet new console -n AsyncDemo && cd AsyncDemo

// === MÉTODO ASSÍNCRONO BÁSICO ===
async Task<string> BuscarDadosAsync(string recurso)
{
    Console.WriteLine($"  ⏳ Buscando {recurso}...");
    await Task.Delay(1000); // Simula I/O (banco, HTTP, arquivo)
    return $"Dados de {recurso} carregados";
}

// === EXECUÇÃO SEQUENCIAL vs PARALELA ===
async Task DemoSequencial()
{
    Console.WriteLine("🔄 Sequencial (uma por vez):");
    var sw = System.Diagnostics.Stopwatch.StartNew();

    string r1 = await BuscarDadosAsync("Usuários");
    string r2 = await BuscarDadosAsync("Pedidos");
    string r3 = await BuscarDadosAsync("Produtos");

    sw.Stop();
    Console.WriteLine($"  {r1}\\n  {r2}\\n  {r3}");
    Console.WriteLine($"  ⏱️ Tempo: {sw.ElapsedMilliseconds}ms\\n");
}

async Task DemoParalelo()
{
    Console.WriteLine("⚡ Paralelo (todas ao mesmo tempo):");
    var sw = System.Diagnostics.Stopwatch.StartNew();

    // Inicia todas as tasks antes de aguardar
    Task<string> t1 = BuscarDadosAsync("Usuários");
    Task<string> t2 = BuscarDadosAsync("Pedidos");
    Task<string> t3 = BuscarDadosAsync("Produtos");

    // Aguarda todas completarem
    string[] resultados = await Task.WhenAll(t1, t2, t3);

    sw.Stop();
    foreach (var r in resultados)
        Console.WriteLine($"  {r}");
    Console.WriteLine($"  ⏱️ Tempo: {sw.ElapsedMilliseconds}ms\\n");
}

// === CANCELLATION TOKEN ===
async Task OperacaoLongaAsync(CancellationToken token)
{
    for (int i = 1; i <= 10; i++)
    {
        // Verifica cancelamento a cada iteração
        token.ThrowIfCancellationRequested();

        Console.WriteLine($"  Passo {i}/10...");
        await Task.Delay(300, token);
    }
    Console.WriteLine("  ✅ Operação concluída!");
}

async Task DemoCancelamento()
{
    Console.WriteLine("🚫 Cancelamento:");
    using var cts = new CancellationTokenSource();

    // Cancela após 1 segundo
    cts.CancelAfter(TimeSpan.FromSeconds(1));

    try
    {
        await OperacaoLongaAsync(cts.Token);
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("  ⚠️ Operação cancelada pelo token!\\n");
    }
}

// === ANTI-PATTERN: async void (NÃO FAÇA ISSO!) ===
// ❌ async void MetodoPerigoso() — exceções não capturáveis!
// ✅ async Task MetodoSeguro() — pode ser aguardado e exceções propagam

// === TRY/CATCH em código assíncrono ===
async Task<string> BuscarComFallbackAsync()
{
    try
    {
        // Simula falha
        await Task.Delay(100);
        throw new HttpRequestException("Servidor indisponível");
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"  ⚠️ Falha: {ex.Message}. Usando cache.");
        return "Dados do cache local";
    }
}

// === EXECUÇÃO ===
await DemoSequencial();
await DemoParalelo();
await DemoCancelamento();

Console.WriteLine("🔄 Fallback:");
string dados = await BuscarComFallbackAsync();
Console.WriteLine($"  Resultado: {dados}");

Console.WriteLine("\\n✅ async/await concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n AsyncDemo && cd AsyncDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n AsyncDemo","Criar um método async Task<T> que simule uma operação de I/O com Task.Delay","Comparar execução sequencial (await um por um) vs paralela (Task.WhenAll)","Implementar cancelamento com CancellationTokenSource e CancelAfter","Usar try/catch em método assíncrono para tratar falhas com fallback"],quiz:[{q:"Por que async void deve ser evitado?",options:["É mais lento que async Task","Exceções não podem ser capturadas pelo chamador, o método não pode ser aguardado e pode crashar a aplicação","Não compila no .NET 8","async void é a forma recomendada para métodos sem retorno"],answer:1,explanation:`async void é "fire-and-forget" perigoso: exceções não propagam para o chamador (crash), não pode ser await'ed, e o chamador não sabe quando terminou. Use async Task para void assíncronos.`},{q:"Qual a vantagem de Task.WhenAll sobre await sequencial?",options:["É mais fácil de ler","Executa operações independentes em paralelo, reduzindo tempo total para o tempo da operação mais lenta","Consome menos memória","É obrigatório em ASP.NET Core"],answer:1,explanation:"3 operações de 1s sequenciais = 3s total. Com Task.WhenAll, as 3 rodam em paralelo = ~1s total (tempo da mais lenta). Essencial quando as operações são independentes."},{q:'O que acontece ao executar? async void Falhar() { throw new Exception("ops"); } try { Falhar(); } catch { Console.Write("capturado"); }',options:['Imprime "capturado"',"A exceção não é capturada — async void não propaga exceções ao chamador, podendo crashar a aplicação","Erro de compilação",'Imprime "ops"'],answer:1,explanation:"async void é fire-and-forget: exceções não fluem para o chamador. O try/catch ao redor de Falhar() NÃO captura a exceção. Ela vai para o SynchronizationContext e pode derrubar a aplicação. Use async Task para permitir captura."}]}]},ip={id:"m4",title:"Git & GitFlow",icon:"🔀",week:"Semana 4",color:"#F59E0B",topics:[{id:"m4t1",moduleId:"m4",title:"Git Essencial",theory:`Git é o sistema de controle de versão mais usado no mundo. Ele rastreia cada alteração em cada arquivo do projeto, permitindo voltar a qualquer ponto no tempo, colaborar com outras pessoas sem conflitos e manter um histórico completo de todas as mudanças.

O fluxo básico do Git segue três áreas: Working Directory (seus arquivos locais), Staging Area (área de preparação, o "palco" onde você monta o próximo commit) e Repository (o histórico versionado com todos os commits).

git init cria um repositório Git vazio. git clone baixa um repositório remoto com todo o histórico. git status mostra o estado atual — quais arquivos foram modificados, adicionados ou removidos. É o comando que você mais vai usar no dia a dia.

git add move arquivos do Working Directory para a Staging Area. git add . adiciona tudo, mas git add arquivo.cs é mais preciso e profissional. git commit salva um snapshot do que está na Staging Area com uma mensagem descritiva. Cada commit é um ponto de restauração imutável.

git push envia seus commits locais para o repositório remoto (GitHub, Azure DevOps). git pull baixa os commits do remoto e integra com seu branch local — é um git fetch + git merge combinados.

git log mostra o histórico de commits. git log --oneline --graph mostra uma visualização condensada com branches. git diff mostra as diferenças entre arquivos não commitados.

O .gitignore é essencial em projetos .NET: lista padrões de arquivos que o Git deve ignorar. Pastas como bin/, obj/, .vs/ e arquivos como *.user não devem ser versionados — contêm builds e configurações locais que variam entre máquinas.`,code:`# Git Essencial — Comandos fundamentais
# Execute no terminal (PowerShell ou Bash)

# === CRIAR UM REPOSITÓRIO ===
mkdir MeuProjetoCSharp
cd MeuProjetoCSharp
git init
# Saída: Initialized empty Git repository in .../MeuProjetoCSharp/.git/

# === CONFIGURAÇÃO INICIAL (uma vez por máquina) ===
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --global init.defaultBranch main

# === CRIAR PROJETO .NET E ARQUIVO .gitignore ===
dotnet new console -n MeuProjetoCSharp
cd MeuProjetoCSharp
dotnet new gitignore
# Cria .gitignore com padrões para .NET (bin/, obj/, .vs/, *.user)

# === FLUXO BÁSICO: add → commit → push ===

# Ver status (quais arquivos mudaram)
git status
# Saída: Untracked files: Program.cs, MeuProjetoCSharp.csproj...

# Adicionar arquivos à staging area
git add .                              # Adiciona tudo
git add Program.cs                     # Ou arquivo específico

# Criar commit com mensagem descritiva
git commit -m "feat: criar projeto console inicial"

# === CONECTAR A UM REMOTO (GitHub/Azure DevOps) ===
git remote add origin https://github.com/usuario/repo.git
git push -u origin main               # -u define upstream (só na primeira vez)

# === COMANDOS DO DIA A DIA ===

# Baixar mudanças do remoto
git pull                               # fetch + merge

# Ver histórico
git log --oneline --graph --decorate
# Saída:
# * a1b2c3d (HEAD -> main) feat: adicionar classe Produto
# * e4f5g6h feat: criar projeto console inicial

# Ver diferenças não commitadas
git diff                               # Working dir vs staging
git diff --staged                      # Staging vs último commit

# Desfazer modificações (CUIDADO)
git checkout -- Program.cs             # Descarta mudanças no arquivo
git reset HEAD Program.cs              # Remove do staging (mantém mudanças)

# === CLONE — baixar repositório existente ===
git clone https://github.com/dotnet/runtime.git
# Baixa todo o repositório com histórico completo

# === .gitignore para .NET (já criado pelo dotnet new gitignore) ===
# Conteúdo típico inclui:
# bin/
# obj/
# .vs/
# *.user
# *.suo
# packages/`,codeLanguage:"bash",runCommand:"mkdir MeuProjetoCSharp && cd MeuProjetoCSharp && git init && dotnet new console && dotnet new gitignore",checklist:["Criar um repositório Git com git init em uma pasta nova","Configurar user.name e user.email com git config","Criar um projeto .NET, adicionar .gitignore e fazer o primeiro commit","Usar git status, git log --oneline e git diff para inspecionar o repositório","Fazer pelo menos 3 commits com mensagens descritivas e claras"],quiz:[{q:"Quais são as três áreas fundamentais do Git?",options:["Local, Remoto e Cloud","Working Directory, Staging Area e Repository","Add, Commit e Push","Branch, Merge e Rebase"],answer:1,explanation:'Working Directory = seus arquivos locais. Staging Area = "palco" preparando o próximo commit. Repository = histórico versionado. O fluxo é: editar → add (staging) → commit (repo).'},{q:"Qual comando usar para ver quais arquivos foram modificados mas não commitados?",options:["git log","git diff --all","git status","git show"],answer:2,explanation:"git status mostra o estado completo: arquivos modificados (vermelho), no staging (verde), untracked (novos). É o comando mais usado no workflow diário."},{q:"Qual o resultado da sequência: git add . → git reset HEAD Program.cs → git status?",options:["Todos os arquivos ficam no staging","Program.cs volta para 'Changes not staged', os demais permanecem no staging","Todos os arquivos voltam para não-staged","Program.cs é deletado do projeto"],answer:1,explanation:"git add . adiciona tudo ao staging. git reset HEAD Program.cs remove apenas Program.cs do staging (mantém as modificações no working directory). Os outros arquivos permanecem staged."}]},{id:"m4t2",moduleId:"m4",title:"Branches & Merge",theory:`Branches (ramificações) são o recurso que torna o Git poderoso para colaboração. Um branch é uma linha independente de desenvolvimento — você pode trabalhar em uma feature nova sem afetar o código principal, e depois integrar quando estiver pronto.

O branch main (ou master) é a linha principal do projeto — deve sempre estar em estado funcional. Em equipes corporativas, nunca se commita diretamente na main. Todo trabalho acontece em branches temporários que são integrados via merge ou pull request.

git branch lista branches existentes. git branch nome-branch cria um novo branch. git checkout nome-branch muda para o branch (move o HEAD). O atalho git checkout -b nome cria e muda em um comando. No Git moderno, git switch substitui checkout para troca de branches.

Merge integra as mudanças de um branch em outro. git merge feature-login traz todos os commits de feature-login para o branch atual. Existem dois tipos: fast-forward (quando não há commits divergentes — apenas "avança" o ponteiro) e merge commit (quando há divergência — cria um commit especial unindo as duas linhas).

Rebase reescreve o histórico: pega seus commits e os reaplicando sobre outro branch, criando um histórico linear sem merge commits. A regra de ouro é: NUNCA faça rebase em branches compartilhados (main, develop). Use rebase apenas em seus branches locais antes de integrar.

Conflitos acontecem quando dois branches modificam a mesma parte do mesmo arquivo. O Git marca o conflito no arquivo com <<<<<<, ====== e >>>>>>. Você resolve manualmente, faz add e commit. Em IDEs como VS Code, a resolução é visual e intuitiva.

A diferença prática: merge preserva o histórico como aconteceu (com bifurcações), rebase cria um histórico linear e limpo. Equipes corporativas geralmente usam merge para integrar branches e rebase para atualizar branches locais.`,code:`# Branches & Merge — Fluxo de trabalho com branches
# Execute no terminal dentro de um repositório Git existente

# === CRIAR E TROCAR DE BRANCH ===
git branch                             # Lista branches (* indica o atual)
git branch feature-login               # Cria branch
git checkout feature-login             # Muda para o branch
# OU em um comando:
git checkout -b feature-login          # Cria + muda
# Git moderno:
git switch -c feature-login            # Cria + muda (switch é mais claro)

# === TRABALHAR NO BRANCH ===
# Faça modificações no código...
git add .
git commit -m "feat: adicionar tela de login"
git add .
git commit -m "feat: validar credenciais do usuário"

# Ver branches e histórico
git log --oneline --graph --all
# * b1c2d3e (HEAD -> feature-login) feat: validar credenciais
# * a1b2c3d feat: adicionar tela de login
# * 9f8e7d6 (main) feat: criar projeto inicial

# === MERGE — integrar branch na main ===
git checkout main                      # Volta para main
git merge feature-login                # Traz commits de feature-login
# Saída: Fast-forward (ou merge commit se houve divergência)

# Apagar branch após merge (limpeza)
git branch -d feature-login            # -d = safe delete (só se já fez merge)

# === REBASE — reescrever histórico (APENAS em branches locais!) ===
git checkout feature-dashboard
# ...commits no seu branch...

# Antes de abrir PR, atualizar com a main
git fetch origin                       # Baixa atualizações do remoto
git rebase origin/main                 # Reaplica seus commits sobre a main atualizada

# Se houver conflitos durante rebase:
# 1. Edite os arquivos conflitantes
# 2. git add arquivo-resolvido.cs
# 3. git rebase --continue
# Para abortar: git rebase --abort

# === RESOLVER CONFLITO DE MERGE ===
git checkout main
git merge feature-api                  # Conflito!
# CONFLICT (content): Merge conflict in Program.cs

# O arquivo terá marcadores:
# <<<<<<< HEAD
# código da main
# =======
# código da feature-api
# >>>>>>> feature-api

# Resolva manualmente (escolha/combine o código correto), depois:
git add Program.cs
git commit -m "merge: resolver conflito em Program.cs"

# === MERGE vs REBASE — quando usar cada ===
# MERGE: integrar branches (preserva histórico real)
#   git checkout main && git merge feature-x
#
# REBASE: atualizar SEU branch local com a main (histórico linear)
#   git checkout meu-branch && git rebase main
#
# NUNCA: git rebase em branch compartilhado (main, develop)`,codeLanguage:"bash",runCommand:'git checkout -b feature-demo && echo "demo" > demo.txt && git add . && git commit -m "feat: branch demo"',checklist:["Criar um branch novo com git checkout -b feature-teste","Fazer 2+ commits no branch e verificar com git log --oneline --graph --all","Voltar para main e fazer merge do branch criado","Deletar o branch após merge com git branch -d","Simular e resolver um conflito de merge editando o mesmo arquivo em dois branches"],quiz:[{q:"Qual a diferença entre merge e rebase?",options:["Merge é mais rápido que rebase","Merge preserva o histórico como aconteceu (com merge commit); rebase reescreve criando histórico linear","Rebase é mais seguro que merge","Não há diferença — ambos fazem a mesma coisa"],answer:1,explanation:"Merge cria um commit especial unindo dois branches (preserva a bifurcação no histórico). Rebase reaplica commits sobre outro branch (histórico linear, sem bifurcações). Merge para integrar, rebase para atualizar branch local."},{q:"Por que nunca se deve fazer rebase em branches compartilhados como main?",options:["Rebase é lento em branches grandes","Rebase reescreve o histórico, causando conflitos para todos que estão trabalhando no branch","Rebase apaga commits permanentemente","O Git impede rebase na main"],answer:1,explanation:"Rebase altera os hashes dos commits (reescreve histórico). Se outros devs estão baseados nos commits originais, eles terão conflitos ao sincronizar. Regra: rebase apenas em branches locais privados."},{q:"O que acontece ao executar: git checkout -b feature-x && git commit --allow-empty -m 'test' && git checkout main && git branch -d feature-x?",options:["Erro: branch não pode ser deletado","Erro: git branch -d falha porque feature-x tem commits que não estão na main","Branch é deletado normalmente","O commit é perdido permanentemente"],answer:1,explanation:"git branch -d é safe delete: só deleta se todos os commits já foram integrados ao branch atual (main). feature-x tem um commit que main não tem, então -d falha. Use -D (force) apenas se realmente quiser descartar."}]},{id:"m4t3",moduleId:"m4",title:"GitFlow",theory:`GitFlow é uma estratégia de branching que organiza o fluxo de trabalho em equipes. Define branches com papéis específicos e regras claras de quando criar, integrar e deletar cada branch. É o workflow mais adotado em equipes corporativas .NET.

O branch main contém apenas código em produção — cada commit na main corresponde a uma release. O branch develop é a linha de desenvolvimento ativa — contém features prontas aguardando a próxima release. Toda a equipe sincroniza com develop.

Feature branches (feature/*) são criados a partir de develop para implementar funcionalidades. Cada feature tem seu branch: feature/login, feature/carrinho-compras. Ao terminar, o develop recebe o merge do feature via Pull Request revisado pela equipe.

Release branches (release/*) são criados a partir de develop quando há features suficientes para uma release. No release branch, apenas correções de bugs são permitidas — não features novas. Após testes e aprovação, o release é mesclado tanto na main (produção) quanto na develop (para manter sincronia).

Hotfix branches (hotfix/*) são criados a partir da main para corrigir bugs críticos em produção. São os únicos branches que nascem da main (além de release). Após a correção, o hotfix é mesclado na main E na develop, garantindo que o fix esteja em ambas as linhas.

Na prática com Azure DevOps ou GitHub: cada feature branch gera um Pull Request para develop, com code review obrigatório, CI/CD automático e aprovação de pelo menos um reviewer. Isso garante qualidade e rastreabilidade de todas as mudanças.`,code:`# GitFlow — Fluxo completo com comandos reais
# Execute no terminal dentro de um repositório Git

# === SETUP INICIAL ===
git checkout -b develop main           # Criar branch develop a partir da main

# === FEATURE BRANCH ===
# 1. Criar feature a partir de develop
git checkout develop
git pull origin develop                # Sincronizar com remoto
git checkout -b feature/cadastro-usuario

# 2. Trabalhar na feature (commits normais)
git add .
git commit -m "feat(usuario): criar model Usuario"
git add .
git commit -m "feat(usuario): implementar validação de email"
git add .
git commit -m "feat(usuario): adicionar endpoint POST /api/usuarios"

# 3. Atualizar feature com develop (opcional, antes de abrir PR)
git fetch origin
git rebase origin/develop              # Reaplica commits sobre develop atualizado

# 4. Push para remoto e abrir Pull Request
git push -u origin feature/cadastro-usuario
# Abra PR no GitHub: feature/cadastro-usuario → develop

# 5. Após aprovação e merge do PR no GitHub:
git checkout develop
git pull origin develop                # Atualiza develop local
git branch -d feature/cadastro-usuario # Limpa branch local

# === RELEASE BRANCH ===
# Quando develop acumula features suficientes para release
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# Ajustes de release (apenas bugfixes, versionamento, docs)
git add .
git commit -m "chore: atualizar versão para 1.0.0"
git add .
git commit -m "fix: corrigir validação de CPF no cadastro"

# Finalizar release — merge em main E develop
git checkout main
git merge --no-ff release/1.0.0        # --no-ff força merge commit
git tag -a v1.0.0 -m "Release 1.0.0"  # Tag de versão

git checkout develop
git merge --no-ff release/1.0.0        # Traz fixes para develop também
git branch -d release/1.0.0            # Limpa branch

git push origin main develop --tags    # Push de tudo + tags

# === HOTFIX BRANCH ===
# Bug crítico em produção! Hotfix a partir da main.
git checkout main
git checkout -b hotfix/corrigir-login

# Corrigir o bug
git add .
git commit -m "fix: corrigir token JWT expirado no login"

# Finalizar hotfix — merge em main E develop
git checkout main
git merge --no-ff hotfix/corrigir-login
git tag -a v1.0.1 -m "Hotfix: login JWT"

git checkout develop
git merge --no-ff hotfix/corrigir-login
git branch -d hotfix/corrigir-login

git push origin main develop --tags

# === RESUMO DO FLUXO ===
# main     ←── release/* ←── develop ←── feature/*
# main     ←── hotfix/*  ──→ develop (fix também vai para develop)
# feature → PR → develop → release → main (+ tag)`,codeLanguage:"bash",runCommand:'git checkout -b develop && echo "GitFlow setup" > .gitflow && git add . && git commit -m "chore: setup GitFlow"',checklist:["Criar branch develop a partir da main","Criar um feature branch (feature/minha-feature) a partir de develop e fazer commits","Fazer merge da feature em develop com --no-ff","Criar um release branch (release/1.0.0) e fazer merge na main + develop","Simular um hotfix criando branch hotfix/ a partir da main"],quiz:[{q:"De qual branch um feature branch deve ser criado no GitFlow?",options:["main","develop","release","Qualquer branch"],answer:1,explanation:"No GitFlow, features nascem de develop e voltam para develop (via PR). A main só recebe código via release ou hotfix. develop é a linha de integração da equipe."},{q:"Qual a diferença entre release e hotfix no GitFlow?",options:["Não há diferença — são intercambiáveis","Release prepara a próxima versão (nasce de develop); hotfix corrige bugs urgentes em produção (nasce de main)","Hotfix é para features urgentes","Release é criado automaticamente pelo CI/CD"],answer:1,explanation:"Release nasce de develop, faz ajustes finais e vai para main + develop. Hotfix nasce de main (produção com bug), corrige e vai para main + develop. Hotfix é emergencial; release é planejado."},{q:"Qual sequência de comandos finaliza corretamente um release 1.0.0 no GitFlow?",options:["git checkout develop && git merge release/1.0.0 && git branch -d release/1.0.0","git checkout main && git merge --no-ff release/1.0.0 && git tag v1.0.0 && git checkout develop && git merge --no-ff release/1.0.0","git push origin release/1.0.0 && git branch -d release/1.0.0","git rebase main release/1.0.0 && git tag v1.0.0"],answer:1,explanation:"Release é finalizado com merge em AMBOS main (produção) e develop (manter sincronia). --no-ff força merge commit para rastreabilidade. A tag v1.0.0 marca o release na main. A primeira opção só faz merge na develop."}]},{id:"m4t4",moduleId:"m4",title:"Boas Práticas Git",theory:`Boas práticas de Git são o que diferencia um desenvolvedor profissional. Mensagens de commit claras, histórico organizado e etiqueta de Pull Request fazem parte das habilidades essenciais em equipes corporativas.

Conventional Commits é um padrão de mensagens de commit que traz estrutura e significado. O formato é: tipo(escopo): descrição. Os tipos mais comuns são: feat (nova funcionalidade), fix (correção de bug), refactor (mudança interna sem afetar funcionalidade), docs (documentação), chore (manutenção, build, CI), test (testes), style (formatação).

Exemplos reais para projetos .NET: "feat(api): adicionar endpoint GET /api/produtos", "fix(auth): corrigir expiração do token JWT", "refactor(repository): extrair interface IRepository<T>", "chore(ci): configurar pipeline de build no Azure DevOps", "docs(readme): adicionar instruções de setup local".

A mensagem de commit ideal tem: título curto (até 72 caracteres) no imperativo ("adicionar", não "adicionado"), escopo opcional entre parênteses, corpo opcional com o PORQUÊ da mudança (não o quê — o diff mostra o quê), e referência ao ticket/issue quando aplicável.

Pull Requests (PRs) são o mecanismo de code review em equipes. Um bom PR tem: título seguindo conventional commits, descrição explicando o contexto e decisões, tamanho razoável (até ~400 linhas — PRs gigantes recebem reviews superficiais), screenshots para mudanças visuais, e referência ao ticket.

O .gitignore para projetos .NET deve excluir: bin/, obj/ (builds), .vs/ (configurações do Visual Studio), *.user (preferências pessoais), packages/ (restaurados pelo NuGet), e appsettings.Development.json (configurações locais com possíveis secrets).`,code:`# Boas Práticas Git — Conventional Commits e mais
# Referência de comandos e padrões

# === CONVENTIONAL COMMITS — formato ===
# tipo(escopo): descrição imperativa curta
#
# Tipos:
#   feat:     nova funcionalidade
#   fix:      correção de bug
#   refactor: mudança interna sem novo comportamento
#   docs:     documentação
#   chore:    build, CI/CD, manutenção
#   test:     adicionar ou corrigir testes
#   style:    formatação (sem mudança lógica)
#   perf:     melhoria de performance

# === EXEMPLOS REAIS para projetos .NET ===
git commit -m "feat(api): adicionar endpoint GET /api/produtos"
git commit -m "feat(auth): implementar login com JWT"
git commit -m "fix(pedido): corrigir cálculo de frete para SP"
git commit -m "refactor(repo): extrair interface IRepository<T>"
git commit -m "chore(ci): configurar GitHub Actions para build e test"
git commit -m "docs(readme): adicionar instruções de setup local"
git commit -m "test(usuario): adicionar testes unitários para validação"
git commit -m "perf(query): otimizar consulta de relatório mensal"

# === COMMIT COM CORPO (mensagem multi-linha) ===
git commit -m "fix(auth): corrigir token JWT expirado no refresh

O token de refresh não estava sendo validado corretamente
quando o relógio do servidor tinha drift > 30s.

Adicionada tolerância de 60s no ClockSkew do TokenValidationParameters.

Closes #142"

# === BREAKING CHANGE ===
git commit -m "feat(api)!: migrar para .NET 8 minimal API

BREAKING CHANGE: endpoints movidos de /api/v1/ para /api/v2/
Clientes devem atualizar a URL base."

# === CONFIGURAR TEMPLATE DE COMMIT ===
# Criar arquivo ~/.gitmessage:
# tipo(escopo): descrição imperativa
#
# Por quê? (explique o motivo, não o que mudou)
#
# Refs: #ticket

git config --global commit.template ~/.gitmessage

# === .gitignore COMPLETO para .NET ===
# (gerado por: dotnet new gitignore)
# Essenciais:
#   bin/
#   obj/
#   .vs/
#   *.user
#   *.suo
#   packages/
#   *.DotSettings.user
#   appsettings.Development.json  (pode conter secrets locais)

# === ALIAS ÚTEIS para o dia a dia ===
git config --global alias.st "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.last "log -1 HEAD --stat"

# Uso:
git st                                 # = git status
git lg                                 # = log visual bonito
git last                               # = último commit com stats

# === ETIQUETA DE PULL REQUEST ===
# ✅ BOM PR:
#   Título: "feat(pedido): implementar checkout com PIX"
#   Descrição: contexto, decisões, screenshots
#   Tamanho: ~200 linhas (fácil de revisar)
#   Reviewer: designado, não genérico
#
# ❌ MAU PR:
#   Título: "updates" ou "wip" ou "fix stuff"
#   Descrição: vazia
#   Tamanho: 2000+ linhas (ninguém vai revisar direito)
#   Commits: "fix", "fix2", "fix final", "agora vai"

# === LIMPAR HISTÓRICO ANTES DO PR ===
# Squash commits "wip" em um commit limpo
git rebase -i HEAD~3                   # Interativo nos últimos 3 commits
# No editor: marque "squash" nos commits que quer combinar
# Resultado: 3 commits viram 1 com mensagem limpa`,codeLanguage:"bash",runCommand:'git config --global alias.lg "log --oneline --graph --decorate --all" && git lg',checklist:["Configurar alias úteis: git st, git lg, git last","Fazer 3 commits usando Conventional Commits (feat, fix, refactor)","Fazer um commit com corpo multi-linha explicando o porquê da mudança","Verificar que o .gitignore do projeto exclui bin/, obj/ e .vs/","Praticar squash de commits com git rebase -i (em branch local)"],quiz:[{q:"Qual o formato correto de um Conventional Commit?",options:['"Adicionei o login" (passado, sem tipo)','"tipo(escopo): descrição imperativa" — ex: "feat(auth): implementar login JWT"','"FIX - corrigir bug #123"',"Qualquer formato é aceito"],answer:1,explanation:"Conventional Commits segue o padrão tipo(escopo): descrição. O tipo indica a natureza (feat, fix, refactor...), escopo é opcional, e a descrição é imperativa e curta. Ferramentas de CI/CD usam isso para gerar changelogs automaticamente."},{q:"Qual o tamanho ideal de um Pull Request para garantir review de qualidade?",options:["Quanto maior melhor — menos PRs para revisar","Até ~400 linhas — PRs grandes recebem reviews superficiais","Exatamente 1 arquivo por PR","Tamanho não importa"],answer:1,explanation:"Estudos mostram que reviews de PRs com mais de 400 linhas são significativamente menos eficazes. PRs menores recebem feedback mais detalhado, são integrados mais rápido e têm menor risco de bugs."},{q:"Para que serve o comando git rebase -i HEAD~3?",options:["Apaga os últimos 3 commits","Abre editor interativo para reorganizar, combinar (squash) ou editar os últimos 3 commits","Cria 3 branches novos","Reverte o repositório para 3 commits atrás"],answer:1,explanation:"rebase -i (interativo) abre um editor listando os commits. Você pode: pick (manter), squash (combinar com anterior), reword (editar mensagem), drop (remover). Ideal para limpar histórico antes de abrir PR."}]}]},np=[ap,tp,rp,ip],sp={id:"m5",title:"ASP.NET Core Web API",icon:"🌐",week:"Semana 5",color:"#7C3AED",topics:[{id:"m5t1",moduleId:"m5",title:"Estrutura de um Projeto Web API",theory:`ASP.NET Core é o framework web moderno da Microsoft, open-source e cross-platform. Diferente do antigo ASP.NET Framework (Windows-only, pesado, System.Web acoplado), o ASP.NET Core roda em Windows, Linux e macOS, é modular e extremamente performante — consistentemente entre os frameworks web mais rápidos do mundo em benchmarks do TechEmpower.

O ponto de entrada de toda aplicação ASP.NET Core é o Program.cs. Com o .NET 6+, o template usa top-level statements — sem classe Program, sem método Main explícito. O WebApplication.CreateBuilder(args) cria um builder que configura: servidor web (Kestrel por padrão), injeção de dependências, logging, configuração (appsettings.json + variáveis de ambiente) e o pipeline HTTP.

A estrutura de pastas padrão de um projeto Web API é: Program.cs (configuração e startup), Controllers/ (endpoints da API), Models/ (entidades e DTOs), appsettings.json (configuração por ambiente), Properties/launchSettings.json (configuração de desenvolvimento). Em projetos maiores, adiciona-se: Services/ (lógica de negócio), Repositories/ (acesso a dados), Middlewares/ (pipeline customizado).

Kestrel é o servidor web embutido do ASP.NET Core — leve, rápido e suficiente para produção. Em cenários corporativos, é comum usar Kestrel atrás de um reverse proxy (Nginx, IIS, Azure App Service) que gerencia TLS, load balancing e static files. A configuração de portas e certificados fica no appsettings ou launchSettings.

Swagger (OpenAPI) é habilitado por padrão no template webapi. Gera documentação interativa da API automaticamente, permitindo testar endpoints direto no navegador. Em equipes corporativas, o Swagger é essencial para comunicação entre frontend e backend — o contrato da API fica documentado e sempre atualizado.

Grandes empresas brasileiras como Nubank, iFood e Itaú migraram para .NET Core justamente pela performance, custo reduzido de infraestrutura (menos servidores) e capacidade de rodar em containers Docker/Kubernetes.`,code:`// Estrutura de um Projeto Web API — ASP.NET Core 8
// Execute: dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi

// ============================================
// 📄 Program.cs — ponto de entrada da aplicação
// ============================================
var builder = WebApplication.CreateBuilder(args);

// Registra serviços no container de DI
builder.Services.AddControllers();                // Habilita controllers
builder.Services.AddEndpointsApiExplorer();       // Metadata para Swagger
builder.Services.AddSwaggerGen(options =>          // Gera documentação OpenAPI
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "E-commerce API",
        Version = "v1",
        Description = "API de produtos e pedidos para o projeto de aprendizado"
    });
});

var app = builder.Build();

// Configura o pipeline HTTP (ordem importa!)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();                             // Serve o JSON OpenAPI
    app.UseSwaggerUI();                           // Serve a UI interativa
}

app.UseHttpsRedirection();                        // Redireciona HTTP → HTTPS
app.UseAuthorization();                           // Middleware de autorização
app.MapControllers();                             // Mapeia rotas dos controllers

app.Run();                                        // Inicia o servidor Kestrel

// ============================================
// 📄 Controllers/HealthController.cs
// ============================================
using Microsoft.AspNetCore.Mvc;

namespace EcommerceApi.Controllers;

/// <summary>
/// Endpoint de verificação de saúde da API.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    /// <summary>
    /// Verifica se a API está respondendo.
    /// </summary>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult Get()
    {
        return Ok(new
        {
            Status = "Healthy",
            Timestamp = DateTime.UtcNow,
            Version = "1.0.0"
        });
    }
}

// ============================================
// 📄 appsettings.json
// ============================================
// {
//   "Logging": {
//     "LogLevel": {
//       "Default": "Information",
//       "Microsoft.AspNetCore": "Warning"
//     }
//   },
//   "AllowedHosts": "*"
// }

// ============================================
// 📄 EcommerceApi.csproj (packages necessários)
// ============================================
// <Project Sdk="Microsoft.NET.Sdk.Web">
//   <PropertyGroup>
//     <TargetFramework>net8.0</TargetFramework>
//     <Nullable>enable</Nullable>
//     <ImplicitUsings>enable</ImplicitUsings>
//   </PropertyGroup>
//   <ItemGroup>
//     <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />
//   </ItemGroup>
// </Project>`,codeLanguage:"csharp",runCommand:"dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi && dotnet run",checklist:["Criar projeto: dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi","Rodar a API com dotnet run e acessar o Swagger em https://localhost:xxxx/swagger","Adicionar um controller HealthController com GET /api/health retornando 200 OK","Inspecionar o Program.cs e comentar cada linha explicando o que faz","Publicar localmente: dotnet publish -c Release e examinar a pasta bin/Release"],quiz:[{q:"Qual a principal diferença entre ASP.NET Core e o antigo ASP.NET Framework?",options:["ASP.NET Core é mais lento mas mais fácil de usar","ASP.NET Core é cross-platform, modular e open-source; o Framework é Windows-only e monolítico","Não há diferença — são nomes diferentes para a mesma coisa","ASP.NET Framework é mais moderno que o Core"],answer:1,explanation:"ASP.NET Core foi reescrito do zero: cross-platform (Windows, Linux, macOS), modular (sem System.Web), open-source e muito mais performante. O Framework é legado, Windows-only e não recebe mais features."},{q:"Qual é a função do WebApplication.CreateBuilder(args) no Program.cs?",options:["Apenas cria a pasta do projeto","Configura o servidor web, DI container, logging e carrega configurações (appsettings)","Compila o projeto automaticamente","Cria o banco de dados da aplicação"],answer:1,explanation:"CreateBuilder configura toda a infraestrutura: Kestrel (servidor), IServiceCollection (DI), IConfiguration (appsettings + env vars), ILoggerFactory (logging). É o bootstrap completo da aplicação."},{q:"O que este código produz? app.MapControllers(); app.Run();",options:["Cria os controllers automaticamente","Registra as rotas dos controllers no pipeline HTTP e inicia o servidor escutando requisições","Compila e testa os controllers","Gera a documentação Swagger"],answer:1,explanation:"MapControllers() escaneia os controllers e registra suas rotas no roteamento HTTP. app.Run() inicia o Kestrel escutando na porta configurada. Sem MapControllers, os endpoints não são acessíveis."}]},{id:"m5t2",moduleId:"m5",title:"Controllers, Actions e Rotas",theory:`Controllers são o coração de uma Web API — classes que agrupam endpoints (actions) relacionados. Cada método público de um controller é um action que responde a uma rota HTTP específica. A convenção REST mapeia verbos HTTP a operações: GET (consultar), POST (criar), PUT (substituir), PATCH (atualizar parcial), DELETE (remover).

Route attributes definem como URLs são mapeadas para actions. [Route("api/[controller]")] usa o nome do controller (sem o sufixo "Controller"). [HttpGet], [HttpPost("{id}")] mapeiam verbos e parâmetros de rota. [FromBody] indica que o parâmetro vem do corpo JSON da requisição, [FromRoute] da URL, [FromQuery] da querystring.

O retorno dos actions é fundamental para uma API profissional. IActionResult permite retornar qualquer status code. ActionResult<T> é genérico e documenta o tipo de retorno no Swagger automaticamente. Os status codes corretos são: 200 (OK, para GET/PUT), 201 (Created, após POST com Location header), 204 (NoContent, DELETE bem-sucedido), 400 (BadRequest, dados inválidos), 404 (NotFound, recurso inexistente), 409 (Conflict, duplicata).

Model binding é o mecanismo que converte dados da requisição HTTP em objetos C# automaticamente. O ASP.NET Core detecta de onde vem cada parâmetro (body, route, query, header) baseado em convenções: tipos complexos vêm do body, tipos simples da route/query. Você pode ser explícito com [FromBody], [FromRoute], [FromQuery].

DTOs (Data Transfer Objects) são records ou classes que definem o formato exato de request e response, separados das entidades do banco. CriarProdutoRequest tem apenas os campos necessários para criação, ProdutoResponse expõe apenas o que o cliente precisa ver. Nunca exponha entidades de banco diretamente na API.

[ProducesResponseType] documenta no Swagger quais status codes cada endpoint pode retornar. É obrigatório em APIs corporativas para que consumidores saibam exatamente o que esperar em cada cenário: sucesso, não encontrado, validação falhou.`,code:`// Controllers, Actions e Rotas — ASP.NET Core 8
// Adicione ao projeto EcommerceApi criado no tópico anterior

// ============================================
// 📄 Models/Produto.cs — Entidade
// ============================================
namespace EcommerceApi.Models;

public class Produto
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Descricao { get; set; }
    public decimal Preco { get; set; }
    public int Estoque { get; set; }
    public bool Ativo { get; set; } = true;
    public DateTime CriadoEm { get; set; } = DateTime.UtcNow;
}

// ============================================
// 📄 Models/DTOs/ProdutoDto.cs — DTOs separados
// ============================================
namespace EcommerceApi.Models.DTOs;

/// <summary>DTO para criação de produto.</summary>
public record CriarProdutoRequest(
    string Nome,
    string? Descricao,
    decimal Preco,
    int Estoque);

/// <summary>DTO para atualização completa.</summary>
public record AtualizarProdutoRequest(
    string Nome,
    string? Descricao,
    decimal Preco,
    int Estoque);

/// <summary>DTO de resposta — nunca expõe a entidade diretamente.</summary>
public record ProdutoResponse(
    int Id,
    string Nome,
    string? Descricao,
    decimal Preco,
    int Estoque,
    bool Ativo,
    DateTime CriadoEm);

// ============================================
// 📄 Controllers/ProdutosController.cs
// ============================================
using Microsoft.AspNetCore.Mvc;
using EcommerceApi.Models;
using EcommerceApi.Models.DTOs;

namespace EcommerceApi.Controllers;

/// <summary>
/// Gerencia produtos do e-commerce.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    // Em memória por enquanto — EF Core virá no Módulo 6
    private static readonly List<Produto> _produtos = [
        new() { Id = 1, Nome = "Mouse Gamer", Preco = 89.90m, Estoque = 50 },
        new() { Id = 2, Nome = "Teclado Mecânico", Preco = 299.90m, Estoque = 30 },
    ];
    private static int _nextId = 3;

    /// <summary>Lista produtos com paginação.</summary>
    [HttpGet]
    [ProducesResponseType(typeof(List<ProdutoResponse>), StatusCodes.Status200OK)]
    public ActionResult<List<ProdutoResponse>> Listar(
        [FromQuery] int pagina = 1,
        [FromQuery] int tamanhoPagina = 10)
    {
        List<ProdutoResponse> resultado = _produtos
            .Where(p => p.Ativo)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .Select(p => ToResponse(p))
            .ToList();

        return Ok(resultado);
    }

    /// <summary>Busca produto por ID.</summary>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(ProdutoResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProdutoResponse> BuscarPorId([FromRoute] int id)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();
        return Ok(ToResponse(produto));
    }

    /// <summary>Cria um novo produto.</summary>
    [HttpPost]
    [ProducesResponseType(typeof(ProdutoResponse), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<ProdutoResponse> Criar([FromBody] CriarProdutoRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Nome) || request.Preco <= 0)
            return BadRequest("Nome e preço positivo são obrigatórios.");

        Produto novo = new()
        {
            Id = _nextId++,
            Nome = request.Nome,
            Descricao = request.Descricao,
            Preco = request.Preco,
            Estoque = request.Estoque,
        };
        _produtos.Add(novo);

        // 201 Created com Location header apontando para GET /api/produtos/{id}
        return CreatedAtAction(nameof(BuscarPorId), new { id = novo.Id }, ToResponse(novo));
    }

    /// <summary>Atualiza produto completamente.</summary>
    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(ProdutoResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProdutoResponse> Atualizar(
        [FromRoute] int id, [FromBody] AtualizarProdutoRequest request)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();

        produto.Nome = request.Nome;
        produto.Descricao = request.Descricao;
        produto.Preco = request.Preco;
        produto.Estoque = request.Estoque;

        return Ok(ToResponse(produto));
    }

    /// <summary>Ativa ou desativa produto (ação parcial).</summary>
    [HttpPatch("{id:int}/ativar")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Ativar([FromRoute] int id, [FromQuery] bool ativo = true)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();

        produto.Ativo = ativo;
        return NoContent();   // 204 — sem corpo na resposta
    }

    /// <summary>Soft delete — desativa o produto.</summary>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Deletar([FromRoute] int id)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();

        produto.Ativo = false; // Soft delete — não remove do banco
        return NoContent();
    }

    // Converte entidade → DTO de resposta
    private static ProdutoResponse ToResponse(Produto p)
        => new(p.Id, p.Nome, p.Descricao, p.Preco, p.Estoque, p.Ativo, p.CriadoEm);
}`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Implementar todos os 6 endpoints do ProdutosController (GET, GET/id, POST, PUT, PATCH, DELETE)","Testar cada endpoint no Swagger verificando status codes corretos","Adicionar [ProducesResponseType] em todos os actions","Criar DTOs separados para Request (criar/atualizar) e Response (retorno)","Testar um endpoint com Postman ou Thunder Client no VS Code"],quiz:[{q:"Qual a diferença entre IActionResult e ActionResult<T>?",options:["Não há diferença prática","IActionResult retorna qualquer status code; ActionResult<T> também documenta o tipo de retorno no Swagger automaticamente","ActionResult<T> é mais lento que IActionResult","IActionResult só funciona com GET"],answer:1,explanation:"ActionResult<T> combina a flexibilidade de IActionResult (retornar NotFound, BadRequest etc.) com tipagem — o Swagger sabe que o retorno de sucesso é do tipo T. IActionResult não informa o tipo."},{q:"Qual status code HTTP usar quando um POST cria um recurso com sucesso?",options:["200 OK","201 Created com Location header apontando para o recurso criado","204 No Content","202 Accepted"],answer:1,explanation:"POST com criação deve retornar 201 Created com header Location contendo a URL do novo recurso. Em ASP.NET Core: CreatedAtAction(nameof(GetById), new { id }, response). 200 é para buscas, 204 para deletes."},{q:"O que [FromBody] indica em um parâmetro de action? public IActionResult Criar([FromBody] ProdutoDto dto)",options:["O parâmetro vem da querystring da URL","O parâmetro é deserializado do corpo JSON da requisição HTTP","O parâmetro é obrigatório","O parâmetro vem do header da requisição"],answer:1,explanation:"[FromBody] indica que o model binder deve deserializar o corpo da requisição (geralmente JSON) para o tipo do parâmetro. [FromRoute] vem da URL, [FromQuery] da querystring, [FromHeader] de headers."}]},{id:"m5t3",moduleId:"m5",title:"Middlewares e Pipeline HTTP",theory:`Middlewares são componentes que formam o pipeline de processamento de requisições HTTP no ASP.NET Core. Cada requisição passa por uma cadeia de middlewares sequencialmente antes de chegar ao endpoint, e a resposta volta pela mesma cadeia na ordem inversa. É um padrão "boneca russa" — cada middleware envolve o próximo.

A ordem dos middlewares no Program.cs é crucial e define o comportamento da aplicação. A regra geral é: middleware de exceções primeiro (captura erros de todos os seguintes), depois HTTPS redirection, CORS, autenticação, autorização, e por último o roteamento/endpoints. Alterar a ordem pode causar bugs sutis — por exemplo, UseAuthentication DEVE vir antes de UseAuthorization, senão a autorização roda sem saber quem é o usuário.

Cada middleware recebe o HttpContext e um delegate next que chama o próximo middleware. Pode: (1) executar lógica ANTES de chamar next (pré-processamento), (2) chamar await next(context) para passar ao próximo, (3) executar lógica DEPOIS (pós-processamento), ou (4) NÃO chamar next (curto-circuito — útil para caching, rate limiting).

Middlewares built-in cobrem as necessidades mais comuns: UseExceptionHandler (captura exceções não tratadas), UseHttpsRedirection, UseCors (Cross-Origin Resource Sharing), UseAuthentication, UseAuthorization, UseStaticFiles, UseResponseCaching. Esses são fornecidos pelo framework e bem testados.

Middleware customizado é implementado como uma classe com InvokeAsync(HttpContext, RequestDelegate) ou como inline com app.Use(). Classes são preferidas em produção por serem testáveis e reutilizáveis. Exemplos comuns: logging de requisições (método, path, tempo), rate limiting, correlação de IDs entre serviços.

A diferença entre middleware, filter e action: middleware opera no nível HTTP (todas as requisições passam), filter opera no nível MVC (só requisições que chegam nos controllers), action é a lógica de negócio do endpoint. Middleware para concerns transversais (logging, CORS), filter para concerns de controller (validação, auditoria), action para lógica específica do endpoint.`,code:`// Middlewares e Pipeline HTTP — ASP.NET Core 8
// Adicione ao projeto EcommerceApi

// ============================================
// 📄 Middlewares/RequestLoggingMiddleware.cs
// ============================================
using System.Diagnostics;

namespace EcommerceApi.Middlewares;

/// <summary>
/// Middleware que registra método, path, status code e tempo de cada requisição.
/// </summary>
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // PRÉ-PROCESSAMENTO — antes do endpoint
        Stopwatch sw = Stopwatch.StartNew();
        string method = context.Request.Method;
        string path = context.Request.Path;

        try
        {
            await _next(context); // Chama o próximo middleware
        }
        finally
        {
            // PÓS-PROCESSAMENTO — depois do endpoint
            sw.Stop();
            int statusCode = context.Response.StatusCode;
            _logger.LogInformation(
                "HTTP {Method} {Path} → {StatusCode} em {ElapsedMs}ms",
                method, path, statusCode, sw.ElapsedMilliseconds);
        }
    }
}

// ============================================
// 📄 Middlewares/ExceptionHandlingMiddleware.cs
// ============================================
using System.Net;
using System.Text.Json;

namespace EcommerceApi.Middlewares;

/// <summary>
/// Captura exceções não tratadas e retorna ProblemDetails (RFC 7807).
/// </summary>
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Exceção não tratada: {Message}", ex.Message);
            await HandleExceptionAsync(context, ex);
        }
    }

    private static async Task HandleExceptionAsync(HttpContext context, Exception ex)
    {
        context.Response.ContentType = "application/problem+json";
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        var problemDetails = new
        {
            type = "https://tools.ietf.org/html/rfc7807",
            title = "Erro interno do servidor",
            status = 500,
            detail = ex.Message,    // Em produção: mensagem genérica, sem stacktrace
            instance = context.Request.Path.Value
        };

        string json = JsonSerializer.Serialize(problemDetails);
        await context.Response.WriteAsync(json);
    }
}

// ============================================
// 📄 Program.cs — ordem CORRETA dos middlewares
// ============================================
using EcommerceApi.Middlewares;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 1️⃣ Exceções PRIMEIRO — captura erros de todos os middlewares abaixo
app.UseMiddleware<ExceptionHandlingMiddleware>();

// 2️⃣ Logging — registra todas as requisições
app.UseMiddleware<RequestLoggingMiddleware>();

// 3️⃣ Swagger (somente em dev)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 4️⃣ HTTPS redirect
app.UseHttpsRedirection();

// 5️⃣ Autenticação → Autorização (ordem obrigatória)
// app.UseAuthentication();  // Descomentar quando adicionar auth
app.UseAuthorization();

// 6️⃣ Endpoints
app.MapControllers();

app.Run();`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Implementar RequestLoggingMiddleware e registrar no Program.cs","Implementar ExceptionHandlingMiddleware retornando ProblemDetails","Testar o log aparecendo no console ao chamar qualquer endpoint","Forçar uma exception em um controller e verificar o retorno padronizado","Alterar a ordem dos middlewares e observar os efeitos no comportamento"],quiz:[{q:"Por que a ordem dos middlewares no Program.cs é importante?",options:["A ordem não importa — o ASP.NET Core reordena automaticamente","Cada middleware processa na ordem de registro (request) e na inversa (response), então a posição define o comportamento","A ordem só importa para performance","Apenas o último middleware registrado é executado"],answer:1,explanation:"Middlewares formam uma cadeia: request vai na ordem de registro, response volta na inversa. ExceptionHandler deve ser primeiro para capturar erros de todos. UseAuth antes de UseAuthorization é obrigatório."},{q:"Qual a diferença entre middleware e action filter?",options:["São a mesma coisa com nomes diferentes","Middleware opera em TODA requisição HTTP; filter opera apenas em requisições que chegam aos controllers MVC","Filters são mais rápidos que middlewares","Middleware só funciona em GET, filter em todos os verbos"],answer:1,explanation:"Middleware vê todas as requisições (incluindo static files, health checks). Filters (IActionFilter, IExceptionFilter) operam dentro do pipeline MVC — apenas requisições roteadas para controllers. Use middleware para logging/CORS, filter para validação/auditoria de actions."},{q:"O que acontece se UseAuthentication for registrado DEPOIS de UseAuthorization?",options:["Erro de compilação","A autorização roda sem identidade do usuário — todas as requisições autenticadas são tratadas como anônimas","Funciona normalmente — a ordem não importa para auth","O servidor não inicia"],answer:1,explanation:"UseAuthorization verifica permissões baseadas na identidade do usuário. Se UseAuthentication não rodou antes, o User está vazio/anônimo. O [Authorize] rejeita tudo ou comportamento é imprevisível."}]},{id:"m5t4",moduleId:"m5",title:"Minimal APIs e Filters",theory:`Minimal APIs foram introduzidas no .NET 6 como alternativa leve aos controllers. Em vez de criar uma classe controller com atributos, você mapeia endpoints diretamente no Program.cs com MapGet, MapPost, MapPut, MapDelete. O código fica mais conciso e ideal para microserviços, funções serverless e APIs simples.

A sintaxe é enxuta: app.MapGet("/api/produtos", () => Results.Ok(produtos)). Parâmetros de rota, query e body são inferidos automaticamente. Results é a classe helper que retorna status codes tipados: Results.Ok(), Results.NotFound(), Results.Created(), Results.BadRequest().

RouteGroupBuilder permite agrupar endpoints com prefixo comum, filters e metadata: var group = app.MapGroup("/api/produtos").WithTags("Produtos"). Isso organiza Minimal APIs em blocos lógicos, similar à organização de controllers mas sem classes.

EndpointFilter é o equivalente de ActionFilter para Minimal APIs. Implementa IEndpointFilter com InvokeAsync(EndpointFilterInvocationContext, EndpointFilterDelegate). Pode inspecionar/modificar parâmetros antes do endpoint e o resultado depois. Útil para validação, logging, rate limiting por endpoint.

Action Filters no MVC seguem a interface IActionFilter com OnActionExecuting (antes) e OnActionExecuted (depois). Há também IAsyncActionFilter para cenários assíncronos. Outros tipos de filter incluem: Resource Filters (antes/depois do model binding), Exception Filters (captura exceções do action), Result Filters (antes/depois de serializar a response). A ordem de execução é: Resource → Action → Exception → Result.

Quando usar cada modelo: Controllers para APIs grandes e complexas (organização por responsabilidade, herança de ControllerBase, model validation integrada). Minimal APIs para microserviços, endpoints simples, protótipos rápidos e serverless. Em projetos corporativos grandes, controllers são mais comuns pela estrutura organizacional; em microserviços, Minimal APIs vencem pela leveza.`,code:`// Minimal APIs e Filters — ASP.NET Core 8
// Comparativo com controllers no mesmo projeto

// ============================================
// 📄 Program.cs — Minimal API versão dos produtos
// ============================================
using EcommerceApi.Models;
using EcommerceApi.Models.DTOs;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Controllers continuam funcionando

// ========== MINIMAL API — mesmo recurso, sintaxe diferente ==========
List<Produto> produtos = [
    new() { Id = 1, Nome = "Monitor 27"", Preco = 1599.90m, Estoque = 15 },
    new() { Id = 2, Nome = "Webcam HD", Preco = 199.90m, Estoque = 40 },
];
int nextId = 3;

// RouteGroupBuilder — agrupa endpoints com prefixo e metadata
RouteGroupBuilder produtosGroup = app.MapGroup("/api/v2/produtos")
    .WithTags("Produtos (Minimal API)")
    .AddEndpointFilter<ValidarIdFilter>();  // Filter aplicado ao grupo inteiro

produtosGroup.MapGet("/", (int pagina = 1, int tamanhoPagina = 10) =>
{
    List<Produto> resultado = produtos
        .Where(p => p.Ativo)
        .Skip((pagina - 1) * tamanhoPagina)
        .Take(tamanhoPagina)
        .ToList();
    return Results.Ok(resultado);
})
.WithName("ListarProdutosMinimal")
.Produces<List<Produto>>(StatusCodes.Status200OK);

produtosGroup.MapGet("/{id:int}", (int id) =>
{
    Produto? produto = produtos.FirstOrDefault(p => p.Id == id);
    return produto is not null ? Results.Ok(produto) : Results.NotFound();
})
.WithName("BuscarProdutoMinimal")
.Produces<Produto>(StatusCodes.Status200OK)
.Produces(StatusCodes.Status404NotFound);

produtosGroup.MapPost("/", (CriarProdutoRequest request) =>
{
    Produto novo = new()
    {
        Id = nextId++,
        Nome = request.Nome,
        Descricao = request.Descricao,
        Preco = request.Preco,
        Estoque = request.Estoque,
    };
    produtos.Add(novo);
    return Results.Created($"/api/v2/produtos/{novo.Id}", novo);
})
.WithName("CriarProdutoMinimal")
.Produces<Produto>(StatusCodes.Status201Created);

produtosGroup.MapDelete("/{id:int}", (int id) =>
{
    Produto? produto = produtos.FirstOrDefault(p => p.Id == id);
    if (produto is null) return Results.NotFound();
    produto.Ativo = false;
    return Results.NoContent();
})
.WithName("DeletarProdutoMinimal");

app.Run();

// ============================================
// 📄 Filters/ValidarIdFilter.cs — EndpointFilter
// ============================================
/// <summary>
/// Valida que IDs na rota são positivos antes de chegar ao endpoint.
/// </summary>
public class ValidarIdFilter : IEndpointFilter
{
    public async ValueTask<object?> InvokeAsync(
        EndpointFilterInvocationContext context,
        EndpointFilterDelegate next)
    {
        // Verifica se há parâmetro "id" na rota
        if (context.HttpContext.Request.RouteValues.TryGetValue("id", out object? idValue)
            && int.TryParse(idValue?.ToString(), out int id)
            && id <= 0)
        {
            return Results.BadRequest("ID deve ser um número positivo.");
        }

        return await next(context); // Prossegue para o endpoint
    }
}

// ============================================
// 📄 Filters/AuditActionFilter.cs — ActionFilter para Controllers
// ============================================
using Microsoft.AspNetCore.Mvc.Filters;

namespace EcommerceApi.Filters;

/// <summary>
/// Registra auditoria de quem chamou o quê em controllers.
/// </summary>
public class AuditActionFilter : IActionFilter
{
    private readonly ILogger<AuditActionFilter> _logger;

    public AuditActionFilter(ILogger<AuditActionFilter> logger)
    {
        _logger = logger;
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        string controller = context.RouteData.Values["controller"]?.ToString() ?? "?";
        string action = context.RouteData.Values["action"]?.ToString() ?? "?";
        _logger.LogInformation("📋 AUDIT: {Controller}.{Action} iniciado", controller, action);
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        int statusCode = context.HttpContext.Response.StatusCode;
        _logger.LogInformation("📋 AUDIT: Finalizado com status {StatusCode}", statusCode);
    }
}

// Registrar no Program.cs:
// builder.Services.AddScoped<AuditActionFilter>();
// E aplicar no controller:
// [ServiceFilter(typeof(AuditActionFilter))]`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Reescrever o GET /api/produtos como Minimal API e comparar com o Controller","Criar um RouteGroupBuilder para agrupar os endpoints de produtos v2","Implementar um EndpointFilter que valida se o ID da rota é positivo","Aplicar o AuditActionFilter em um controller existente com [ServiceFilter]","Acessar o Swagger e comparar os dois grupos (Controller vs Minimal API)"],quiz:[{q:"Quando Minimal APIs são mais adequadas que Controllers?",options:["Sempre — Controllers são obsoletos","Para microserviços simples, funções serverless e APIs com poucos endpoints, onde a leveza é vantajosa","Minimal APIs são mais rápidas em todos os cenários","Nunca — Controllers são sempre melhores"],answer:1,explanation:"Minimal APIs eliminam boilerplate (sem classes, atributos, herança). Ideais para microserviços e APIs simples. Controllers são melhores para APIs grandes: organização por responsabilidade, model validation, filter pipeline completo."},{q:"O que é um EndpointFilter e como difere de um ActionFilter?",options:["São a mesma coisa com nomes diferentes","EndpointFilter funciona com Minimal APIs; ActionFilter funciona com Controllers MVC — ambos interceptam requisições antes/depois do endpoint","EndpointFilter é mais lento","ActionFilter funciona com ambos os modelos"],answer:1,explanation:"EndpointFilter (IEndpointFilter) é para Minimal APIs. ActionFilter (IActionFilter) é para controllers MVC. Ambos permitem lógica antes/depois do endpoint. Em Minimal APIs, ActionFilter não funciona — use EndpointFilter."},{q:'O que este código faz? app.MapGroup("/api/v2/tarefas").AddEndpointFilter<ValidarIdFilter>().MapGet("/{id}", handler);',options:["Cria um grupo em /api/v2/tarefas, aplica ValidarIdFilter em TODOS os endpoints do grupo, e mapeia GET /{id}","Define um controller chamado TarefasV2","Erro de compilação — MapGroup não existe","Aplica o filter apenas no MapGet"],answer:0,explanation:"MapGroup cria um prefixo (/api/v2/tarefas). AddEndpointFilter aplica o filter em todos os endpoints do grupo. MapGet adiciona o endpoint. Requisição GET /api/v2/tarefas/5 passa pelo ValidarIdFilter antes do handler."}]}]},cp={id:"m6",title:"Entity Framework Core",icon:"🗄️",week:"Semana 6",color:"#059669",topics:[{id:"m6t1",moduleId:"m6",title:"DbContext, DbSet e Code First",theory:`Entity Framework Core (EF Core) é o ORM (Object-Relational Mapper) oficial do .NET. Ele mapeia classes C# para tabelas do banco de dados, permitindo que você trabalhe com objetos em vez de escrever SQL manualmente. A abordagem Code First significa que você modela as classes primeiro e o EF Core gera o schema do banco a partir delas.

O DbContext é o coração do EF Core — ele representa uma sessão com o banco de dados. Funciona como Unit of Work: agrupa todas as operações de leitura e escrita em uma unidade, enviando ao banco apenas quando você chama SaveChangesAsync(). Internamente, o DbContext rastreia mudanças em todas as entidades carregadas (Change Tracking).

DbSet<T> representa uma coleção de entidades de um tipo T que corresponde a uma tabela no banco. context.Produtos é um DbSet<Produto> que mapeia para a tabela "Produtos". Você consulta com LINQ (Where, Select, Include) e o EF Core traduz em SQL. Adiciona com Add(), atualiza modificando propriedades e remove com Remove().

A connection string configura qual banco usar. Para SQL Server: "Server=localhost;Database=EcommerceDb;Trusted_Connection=true;TrustServerCertificate=true". Em produção, nunca hardcode — use appsettings.json, User Secrets ou variáveis de ambiente.

O DbContext é registrado no DI como Scoped (uma instância por requisição HTTP). Isso é crucial: Singleton causaria problemas de concorrência (DbContext não é thread-safe), Transient desperdiçaria o Change Tracking. Scoped garante que todas as operações de uma requisição compartilhem o mesmo contexto.

AsNoTracking() é uma otimização essencial para consultas somente leitura (GET). Sem tracking, o EF Core não guarda referências às entidades retornadas, reduzindo uso de memória e CPU. Use quando não pretende modificar os dados — relatórios, listagens, buscas.`,code:`// DbContext, DbSet e Code First — EF Core 8
// Execute: cd EcommerceApi && dotnet add package Microsoft.EntityFrameworkCore.SqlServer

// ============================================
// 📄 Models/Categoria.cs
// ============================================
namespace EcommerceApi.Models;

public class Categoria
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Descricao { get; set; }

    // Navegação — EF Core mapeia o relacionamento
    public List<Produto> Produtos { get; set; } = [];
}

// ============================================
// 📄 Models/Produto.cs (atualizado com FK)
// ============================================
namespace EcommerceApi.Models;

public class Produto
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Descricao { get; set; }
    public string SKU { get; set; } = string.Empty;
    public decimal Preco { get; set; }
    public int Estoque { get; set; }
    public bool Ativo { get; set; } = true;
    public DateTime CriadoEm { get; set; } = DateTime.UtcNow;

    // Chave estrangeira + navegação
    public int CategoriaId { get; set; }
    public Categoria Categoria { get; set; } = null!;
}

// ============================================
// 📄 Models/Pedido.cs
// ============================================
namespace EcommerceApi.Models;

public enum StatusPedido { Pendente, Confirmado, Enviado, Entregue, Cancelado }

public class Pedido
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public DateTime DataPedido { get; set; } = DateTime.UtcNow;
    public StatusPedido Status { get; set; } = StatusPedido.Pendente;
    public decimal Total { get; set; }

    public List<ItemPedido> Itens { get; set; } = [];
}

// ============================================
// 📄 Models/ItemPedido.cs
// ============================================
namespace EcommerceApi.Models;

public class ItemPedido
{
    public int Id { get; set; }
    public int PedidoId { get; set; }
    public int ProdutoId { get; set; }
    public int Quantidade { get; set; }
    public decimal PrecoUnitario { get; set; }

    // Navegações
    public Pedido Pedido { get; set; } = null!;
    public Produto Produto { get; set; } = null!;
}

// ============================================
// 📄 Data/EcommerceDbContext.cs
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Models;

namespace EcommerceApi.Data;

/// <summary>
/// Contexto do banco de dados — Unit of Work do EF Core.
/// </summary>
public class EcommerceDbContext : DbContext
{
    public EcommerceDbContext(DbContextOptions<EcommerceDbContext> options)
        : base(options) { }

    // Cada DbSet = uma tabela no banco
    public DbSet<Produto> Produtos => Set<Produto>();
    public DbSet<Categoria> Categorias => Set<Categoria>();
    public DbSet<Pedido> Pedidos => Set<Pedido>();
    public DbSet<ItemPedido> ItensPedido => Set<ItemPedido>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configurações via Fluent API virão no tópico 6.3
        base.OnModelCreating(modelBuilder);
    }
}

// ============================================
// 📄 Program.cs — registrar DbContext no DI
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Registra o DbContext como SCOPED (1 instância por requisição)
builder.Services.AddDbContext<EcommerceDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

// ... resto do Program.cs

// ============================================
// 📄 appsettings.json — connection string
// ============================================
// {
//   "ConnectionStrings": {
//     "DefaultConnection": "Server=localhost;Database=EcommerceDb;Trusted_Connection=true;TrustServerCertificate=true"
//   }
// }

// ============================================
// Exemplo de query com AsNoTracking (somente leitura)
// ============================================
// No controller ou serviço:
// List<Produto> produtos = await _context.Produtos
//     .AsNoTracking()         // Não rastreia mudanças — mais rápido para leitura
//     .Where(p => p.Ativo)
//     .ToListAsync();`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet add package Microsoft.EntityFrameworkCore.SqlServer && dotnet add package Microsoft.EntityFrameworkCore.Design",checklist:["Instalar: dotnet add package Microsoft.EntityFrameworkCore.SqlServer","Criar as 4 entidades (Produto, Categoria, Pedido, ItemPedido) com propriedades corretas","Criar o EcommerceDbContext com os 4 DbSets","Configurar a connection string no appsettings.json","Registrar o DbContext no Program.cs com AddDbContext e Scoped lifetime"],quiz:[{q:"Qual é a função do DbContext no Entity Framework Core?",options:["Apenas armazena a connection string","Representa uma sessão com o banco — gerencia Change Tracking, queries e SaveChanges como Unit of Work","Cria as tabelas automaticamente sem migrations","É um substituto do SQL Server"],answer:1,explanation:"O DbContext é o coração do EF Core: rastreia mudanças nas entidades (Change Tracking), traduz LINQ em SQL, e agrupa operações como Unit of Work. SaveChangesAsync() envia tudo ao banco numa transação."},{q:"Por que o DbContext deve ser registrado como Scoped e não Singleton?",options:["Scoped é mais rápido que Singleton","DbContext não é thread-safe — Singleton seria compartilhado entre requisições concorrentes, causando erros","O framework obriga Scoped — Singleton não compila","Não há diferença prática entre os dois"],answer:1,explanation:"DbContext usa Change Tracking que não é thread-safe. Singleton compartilharia a mesma instância entre requisições paralelas → erros de concorrência. Scoped cria uma instância por requisição, garantindo isolamento."},{q:"O que AsNoTracking() faz? var lista = context.Produtos.AsNoTracking().ToList();",options:["Remove os produtos do banco","Desabilita o Change Tracking para essa query — as entidades retornadas não são rastreadas, melhorando performance de leitura","Torna a query mais lenta mas mais segura","Impede que a lista seja modificada em memória"],answer:1,explanation:"AsNoTracking() diz ao EF Core para não rastrear as entidades retornadas. Sem tracking, o DbContext não guarda referências → menos memória e CPU. Use em consultas somente leitura (GET, relatórios)."}]},{id:"m6t2",moduleId:"m6",title:"Migrations",theory:`Migrations são o mecanismo do EF Core para evoluir o schema do banco de dados de forma versionada e rastreável. Cada migration é como um "commit" do banco — registra as alterações (criar tabela, adicionar coluna, criar índice) e pode ser revertida. Isso elimina scripts SQL manuais e garante que o banco esteja sempre sincronizado com o código.

A abordagem Code First significa: você altera as classes C# (adicionar propriedade, novo relacionamento) → cria uma migration que detecta as diferenças → aplica ao banco. O EF Core compara o modelo atual com o snapshot da última migration e gera o código necessário.

Os comandos essenciais via CLI (dotnet-ef): dotnet ef migrations add NomeMigration cria uma nova migration com Up (aplicar) e Down (reverter). dotnet ef database update aplica migrations pendentes ao banco. dotnet ef migrations remove desfaz a última migration não aplicada. dotnet ef migrations script gera o SQL completo para revisão do DBA antes de produção.

Em CI/CD corporativo, migrations nunca são aplicadas automaticamente em produção. O fluxo seguro é: dev cria a migration → code review → gera script SQL (dotnet ef migrations script) → DBA revisa → script é aplicado em homologação → testes → script aplicado em produção. Para rollback, dotnet ef database update NomeMigrationAnterior reverte até aquela versão.

Boas práticas: nomes descritivos (AddCategoriaTable, não Update1), uma migration por alteração lógica, nunca editar uma migration já aplicada, incluir migration no PR junto com o código que a necessita. Cuidado com migrations irreversíveis: DROP COLUMN, ALTER COLUMN que perde dados. Sempre faça backup antes de aplicar em produção.

O EF Core Design package (Microsoft.EntityFrameworkCore.Design) é necessário apenas no projeto de desenvolvimento — não vai para produção. Ele fornece as ferramentas CLI para gerar migrations.`,code:`// Migrations — EF Core 8
// Pré-requisito: dotnet tool install --global dotnet-ef

// ============================================
// 1️⃣ Criar primeira migration — schema inicial
// ============================================
// $ dotnet ef migrations add InitialCreate

// Arquivo gerado: Migrations/YYYYMMDDHHMMSS_InitialCreate.cs
using Microsoft.EntityFrameworkCore.Migrations;

public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Categorias",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Nome = table.Column<string>(maxLength: 100, nullable: false),
                Descricao = table.Column<string>(maxLength: 500, nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Categorias", x => x.Id);
            });

        migrationBuilder.CreateTable(
            name: "Produtos",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Nome = table.Column<string>(maxLength: 200, nullable: false),
                SKU = table.Column<string>(maxLength: 50, nullable: false),
                Preco = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                Estoque = table.Column<int>(nullable: false),
                Ativo = table.Column<bool>(nullable: false, defaultValue: true),
                CriadoEm = table.Column<DateTime>(nullable: false),
                CategoriaId = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Produtos", x => x.Id);
                table.ForeignKey("FK_Produtos_Categorias",
                    x => x.CategoriaId, "Categorias", "Id",
                    onDelete: ReferentialAction.Restrict);
            });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable("Produtos");
        migrationBuilder.DropTable("Categorias");
    }
}

// ============================================
// 2️⃣ Aplicar migration ao banco
// ============================================
// $ dotnet ef database update

// ============================================
// 3️⃣ Segunda migration — adicionar índice
// ============================================
// Altere a entidade ou configuração, depois:
// $ dotnet ef migrations add AddIndexToProductName

public partial class AddIndexToProductName : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateIndex(
            name: "IX_Produtos_Nome",
            table: "Produtos",
            column: "Nome");

        migrationBuilder.CreateIndex(
            name: "IX_Produtos_SKU",
            table: "Produtos",
            column: "SKU",
            unique: true);  // SKU deve ser único
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropIndex("IX_Produtos_Nome", "Produtos");
        migrationBuilder.DropIndex("IX_Produtos_SKU", "Produtos");
    }
}

// ============================================
// 4️⃣ Gerar script SQL para revisão do DBA
// ============================================
// $ dotnet ef migrations script --idempotent -o migration.sql
// --idempotent gera IF NOT EXISTS para cada operação (seguro re-executar)

// ============================================
// 5️⃣ Rollback — reverter uma migration
// ============================================
// Reverter para InitialCreate (desfaz AddIndexToProductName):
// $ dotnet ef database update InitialCreate
//
// Remover última migration não aplicada:
// $ dotnet ef migrations remove`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet tool install --global dotnet-ef && dotnet ef migrations add InitialCreate",checklist:["Instalar tools: dotnet tool install --global dotnet-ef","Criar primeira migration: dotnet ef migrations add InitialCreate","Aplicar ao banco: dotnet ef database update","Fazer uma alteração na entidade e criar segunda migration","Gerar script SQL: dotnet ef migrations script --idempotent"],quiz:[{q:"Qual a diferença entre dotnet ef migrations add e dotnet ef database update?",options:["São o mesmo comando com nomes diferentes","migrations add GERA o código da migration (ainda não tocou no banco); database update APLICA as migrations pendentes ao banco","migrations add aplica ao banco; database update gera o código","database update só funciona em produção"],answer:1,explanation:"migrations add compara o modelo C# atual com o snapshot e gera código Up/Down. Nada acontece no banco. database update executa os métodos Up de todas as migrations pendentes no banco real."},{q:"Como reverter uma migration aplicada ao banco de forma segura?",options:["Deletar o arquivo da migration","dotnet ef database update NomeDaMigrationAnterior — executa o Down de cada migration até o ponto desejado","Alterar o código e criar nova migration — não é possível reverter","Dropar o banco inteiro e recriar"],answer:1,explanation:"database update aceita o nome de uma migration como alvo. O EF Core executa os métodos Down na ordem inversa até chegar naquele ponto. Após reverter, use migrations remove para limpar."},{q:"O que o parâmetro --idempotent faz em dotnet ef migrations script --idempotent?",options:["Gera o script mais rápido","Gera SQL com verificações IF NOT EXISTS, tornando seguro executar o script múltiplas vezes sem erro","Remove migrations duplicadas","Aplica o script automaticamente ao banco"],answer:1,explanation:"--idempotent gera SQL que verifica se cada migration já foi aplicada antes de executar. Seguro para re-executar em produção — não tenta criar tabelas que já existem. Essencial para CI/CD."}]},{id:"m6t3",moduleId:"m6",title:"Fluent API e Relacionamentos",theory:`Fluent API é a forma mais poderosa e flexível de configurar o mapeamento entre classes C# e tabelas SQL no EF Core. Embora Data Annotations ([Required], [MaxLength]) sejam mais simples, Fluent API oferece tudo que Annotations fazem e mais: configuração de relacionamentos, índices compostos, conversores de valor, herança TPH/TPT e separação de concerns (configuração fora da entidade).

Em projetos corporativos, Fluent API ganha sempre. Data Annotations poluem as entidades com concerns de persistência (violando Clean Architecture). Com Fluent API, as entidades ficam limpas e a configuração fica em classes separadas implementando IEntityTypeConfiguration<T>.

Relacionamentos no EF Core são configurados com HasOne/WithMany (1:N), HasMany/WithMany (N:N), HasOne/WithOne (1:1). Cada relacionamento precisa definir explicitamente o comportamento de delete: Cascade (deleta filhos junto), Restrict (impede delete se tiver filhos), SetNull (coloca FK como null), NoAction (faz nada — pode violar FK).

Em produção, NUNCA use Cascade por padrão em tabelas importantes. Deletar uma Categoria não deveria deletar todos os Produtos automaticamente. Use Restrict — o sistema avisa que há produtos vinculados e o dev trata a situação no código. Cascade é aceitável apenas para entidades dependentes que não fazem sentido sem o pai (ex: ItemPedido sem Pedido).

Value Objects com OwnsOne permitem mapear objetos complexos como colunas da tabela pai. Um Endereco(Rua, Cidade, Estado, CEP) não precisa de tabela própria — OwnsOne cria colunas Endereco_Rua, Endereco_Cidade na tabela Cliente. Isso modela DDD corretamente sem over-engineering de tabelas.

ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly()) no OnModelCreating escaneia todas as classes IEntityTypeConfiguration no assembly e aplica automaticamente — sem precisar chamar cada uma manualmente.`,code:`// Fluent API e Relacionamentos — EF Core 8
// Organize em: Data/Configurations/

// ============================================
// 📄 Data/Configurations/ProdutoConfiguration.cs
// ============================================
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using EcommerceApi.Models;

namespace EcommerceApi.Data.Configurations;

public class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
{
    public void Configure(EntityTypeBuilder<Produto> builder)
    {
        builder.ToTable("Produtos");

        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id).ValueGeneratedOnAdd();

        builder.Property(p => p.Nome)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(p => p.SKU)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(p => p.Preco)
            .HasColumnType("decimal(18,2)")
            .IsRequired();

        builder.Property(p => p.Estoque)
            .IsRequired();

        builder.Property(p => p.Ativo)
            .HasDefaultValue(true);

        builder.Property(p => p.CriadoEm)
            .IsRequired();

        // Índice único no SKU — não permite duplicatas
        builder.HasIndex(p => p.SKU)
            .IsUnique()
            .HasDatabaseName("IX_Produtos_SKU");

        // Índice para buscas por nome
        builder.HasIndex(p => p.Nome)
            .HasDatabaseName("IX_Produtos_Nome");

        // Relacionamento: Produto pertence a 1 Categoria
        builder.HasOne(p => p.Categoria)
            .WithMany(c => c.Produtos)
            .HasForeignKey(p => p.CategoriaId)
            .OnDelete(DeleteBehavior.Restrict); // NÃO cascade — protege os produtos
    }
}

// ============================================
// 📄 Data/Configurations/CategoriaConfiguration.cs
// ============================================
public class CategoriaConfiguration : IEntityTypeConfiguration<Categoria>
{
    public void Configure(EntityTypeBuilder<Categoria> builder)
    {
        builder.ToTable("Categorias");
        builder.HasKey(c => c.Id);

        builder.Property(c => c.Nome)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(c => c.Descricao)
            .HasMaxLength(500);

        // Seed — dados iniciais
        builder.HasData(
            new Categoria { Id = 1, Nome = "Periféricos", Descricao = "Mouse, teclado, headset" },
            new Categoria { Id = 2, Nome = "Monitores", Descricao = "Monitores e displays" },
            new Categoria { Id = 3, Nome = "Componentes", Descricao = "Placa-mãe, memória, SSD" }
        );
    }
}

// ============================================
// 📄 Data/Configurations/PedidoConfiguration.cs
// ============================================
public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
{
    public void Configure(EntityTypeBuilder<Pedido> builder)
    {
        builder.ToTable("Pedidos");
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Total)
            .HasColumnType("decimal(18,2)");

        builder.Property(p => p.Status)
            .HasConversion<string>()           // Salva como texto no banco
            .HasMaxLength(20);

        // 1 Pedido tem N Itens — Cascade aqui faz sentido
        builder.HasMany(p => p.Itens)
            .WithOne(i => i.Pedido)
            .HasForeignKey(i => i.PedidoId)
            .OnDelete(DeleteBehavior.Cascade); // Deletar pedido → deleta itens
    }
}

// ============================================
// 📄 Models/Endereco.cs — Value Object (sem Id próprio)
// ============================================
namespace EcommerceApi.Models;

public class Endereco
{
    public string Rua { get; set; } = string.Empty;
    public string Cidade { get; set; } = string.Empty;
    public string Estado { get; set; } = string.Empty;
    public string CEP { get; set; } = string.Empty;
}

// ============================================
// 📄 Models/Cliente.cs — com Endereco como Value Object
// ============================================
namespace EcommerceApi.Models;

public class Cliente
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public Endereco Endereco { get; set; } = new();
    public List<Pedido> Pedidos { get; set; } = [];
}

// ============================================
// 📄 Data/Configurations/ClienteConfiguration.cs
// ============================================
public class ClienteConfiguration : IEntityTypeConfiguration<Cliente>
{
    public void Configure(EntityTypeBuilder<Cliente> builder)
    {
        builder.ToTable("Clientes");
        builder.HasKey(c => c.Id);

        builder.Property(c => c.Nome).IsRequired().HasMaxLength(200);
        builder.Property(c => c.Email).IsRequired().HasMaxLength(256);
        builder.HasIndex(c => c.Email).IsUnique();

        // OwnsOne: Endereco é mapeado como colunas na tabela Clientes
        // Cria: Endereco_Rua, Endereco_Cidade, Endereco_Estado, Endereco_CEP
        builder.OwnsOne(c => c.Endereco, e =>
        {
            e.Property(x => x.Rua).HasMaxLength(200).HasColumnName("Endereco_Rua");
            e.Property(x => x.Cidade).HasMaxLength(100).HasColumnName("Endereco_Cidade");
            e.Property(x => x.Estado).HasMaxLength(2).HasColumnName("Endereco_Estado");
            e.Property(x => x.CEP).HasMaxLength(9).HasColumnName("Endereco_CEP");
        });

        builder.HasMany(c => c.Pedidos)
            .WithOne()
            .HasForeignKey(p => p.ClienteId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}

// ============================================
// 📄 Data/EcommerceDbContext.cs (atualizado)
// ============================================
using System.Reflection;
using Microsoft.EntityFrameworkCore;

namespace EcommerceApi.Data;

public class EcommerceDbContext : DbContext
{
    public EcommerceDbContext(DbContextOptions<EcommerceDbContext> options)
        : base(options) { }

    public DbSet<Produto> Produtos => Set<Produto>();
    public DbSet<Categoria> Categorias => Set<Categoria>();
    public DbSet<Pedido> Pedidos => Set<Pedido>();
    public DbSet<ItemPedido> ItensPedido => Set<ItemPedido>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Aplica TODAS as configurações do assembly automaticamente
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(modelBuilder);
    }
}`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet ef migrations add AddFluentApiConfigurations && dotnet ef database update",checklist:["Criar a pasta Data/Configurations e implementar ProdutoConfiguration","Configurar o relacionamento Produto-Categoria com OnDelete Restrict","Adicionar unique constraint no campo SKU do produto","Atualizar OnModelCreating com ApplyConfigurationsFromAssembly","Criar migration após as configurações e verificar o SQL gerado"],quiz:[{q:"Por que usar Fluent API em vez de Data Annotations em projetos corporativos?",options:["Fluent API é mais rápido em runtime","Fluent API separa configuração de persistência das entidades, oferece mais recursos (índices, conversores, cascade) e não polui o domínio","Data Annotations são deprecadas no EF Core 8","Não há diferença — ambos fazem exatamente a mesma coisa"],answer:1,explanation:"Fluent API permite separar concerns: entidades ficam limpas (Clean Architecture), configurações ficam em classes IEntityTypeConfiguration<T>. Além disso, Fluent API oferece recursos que Annotations não cobrem: cascade delete, índices compostos, conversores."},{q:"Quando usar OnDelete Restrict em vez de Cascade?",options:["Sempre — Cascade é proibido","Quando deletar o pai NÃO deve deletar os filhos automaticamente — ex: deletar Categoria não deve apagar todos os Produtos","Restrict é mais rápido que Cascade","Apenas para tabelas com mais de 1000 registros"],answer:1,explanation:"Restrict impede o delete quando há filhos vinculados, forçando tratamento explícito no código. Cascade é perigoso para entidades importantes — pode deletar milhares de registros acidentalmente. Use Cascade apenas para dependentes como ItemPedido."},{q:"O que OwnsOne faz? builder.OwnsOne(c => c.Endereco, e => { e.Property(x => x.Rua).HasMaxLength(200); });",options:["Cria uma tabela separada para Endereco","Mapeia Endereco como colunas na tabela do pai (Endereco_Rua, Endereco_Cidade etc.) sem criar tabela própria","Cria um relacionamento 1:1 com tabela Enderecos","Converte Endereco em JSON no banco"],answer:1,explanation:"OwnsOne mapeia Value Objects como colunas na tabela pai (owned entity). Endereco não tem Id próprio nem tabela. Colunas Endereco_Rua, Endereco_Cidade são criadas na tabela Cliente. Ideal para DDD."}]},{id:"m6t4",moduleId:"m6",title:"Queries: LINQ com EF Core",theory:`A verdadeira magia do EF Core está em traduzir queries LINQ para SQL otimizado. Quando você escreve context.Produtos.Where(p => p.Ativo).OrderBy(p => p.Nome), o EF Core gera SELECT * FROM Produtos WHERE Ativo = 1 ORDER BY Nome. Entender como essa tradução funciona — e quando falha — é essencial para performance.

O problema N+1 é a armadilha mais comum com ORMs. Se você carrega 100 pedidos e acessa pedido.Cliente para cada um, o EF Core faz 1 query para os pedidos + 100 queries individuais para carregar cada cliente. A solução é Include (eager loading): context.Pedidos.Include(p => p.Cliente) gera um JOIN e traz tudo em 1 query.

Projeções com Select são mais eficientes que Include quando você não precisa de todas as colunas. Em vez de Include que traz a entidade inteira, Select(p => new { p.Nome, p.Preco }) gera SELECT Nome, Preco — sem colunas desnecessárias. Em APIs, SEMPRE projete para DTOs.

Paginação com Skip/Take é essencial em APIs com volume de dados. .Skip((pagina - 1) * tamanhoPagina).Take(tamanhoPagina) gera OFFSET/FETCH no SQL Server. Sempre combine com OrderBy para resultados determinísticos, e faça uma query Count separada para total de páginas.

GroupBy no EF Core traduz para GROUP BY no SQL, mas nem toda expressão é traduzível. Se o EF Core não conseguir traduzir, ele avalia no cliente (client-side evaluation) — carregando TUDO do banco para memória. Isso é silencioso e devastador para performance. Habilite warnings no log para detectar.

Para depurar, habilite logging de SQL: em appsettings.json, defina "Microsoft.EntityFrameworkCore.Database.Command": "Information". O EF Core loga cada SQL gerado no console, permitindo identificar queries ineficientes, N+1 e client-side evaluation em desenvolvimento.`,code:`// Queries LINQ com EF Core 8
// Exemplos de repositório com queries reais

// ============================================
// 📄 Repositories/ProdutoRepository.cs
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Data;
using EcommerceApi.Models;

namespace EcommerceApi.Repositories;

public class ProdutoRepository
{
    private readonly EcommerceDbContext _context;

    public ProdutoRepository(EcommerceDbContext context)
    {
        _context = context;
    }

    /// <summary>Listagem paginada com filtro opcional por nome.</summary>
    public async Task<(List<ProdutoResumoDto> Itens, int Total)> ListarPaginadoAsync(
        int pagina, int tamanhoPagina, string? filtroNome = null)
    {
        IQueryable<Produto> query = _context.Produtos
            .AsNoTracking()
            .Where(p => p.Ativo);

        // Filtro dinâmico — WHERE condicional
        if (!string.IsNullOrWhiteSpace(filtroNome))
        {
            query = query.Where(p => p.Nome.Contains(filtroNome));
        }

        // Count separado para total de páginas
        int total = await query.CountAsync();

        // Projeção para DTO — só traz campos necessários (não SELECT *)
        List<ProdutoResumoDto> itens = await query
            .OrderBy(p => p.Nome)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .Select(p => new ProdutoResumoDto(
                p.Id, p.Nome, p.Preco, p.Categoria.Nome))
            .ToListAsync();

        return (itens, total);
    }

    /// <summary>Busca com Include — traz produto + categoria em 1 query.</summary>
    public async Task<Produto?> BuscarComCategoriaAsync(int id)
    {
        return await _context.Produtos
            .Include(p => p.Categoria)     // JOIN com Categorias
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    /// <summary>Relatório de vendas agrupado por categoria.</summary>
    public async Task<List<VendasPorCategoriaDto>> RelatorioVendasAsync()
    {
        // GroupBy que traduz para SQL — não avalia no cliente
        return await _context.ItensPedido
            .AsNoTracking()
            .Include(i => i.Produto)
                .ThenInclude(p => p.Categoria)
            .GroupBy(i => i.Produto.Categoria.Nome)
            .Select(g => new VendasPorCategoriaDto(
                g.Key,
                g.Sum(i => i.Quantidade),
                g.Sum(i => i.Quantidade * i.PrecoUnitario)))
            .OrderByDescending(r => r.TotalVendas)
            .ToListAsync();
    }

    /// <summary>
    /// ❌ ANTI-PATTERN: N+1 Problem
    /// Cada pedido.Produto gera uma query separada!
    /// </summary>
    // var pedidos = await _context.Pedidos.ToListAsync();
    // foreach (var p in pedidos)
    //     Console.WriteLine(p.Itens.First().Produto.Nome); // N queries!

    /// <summary>
    /// ✅ CORRETO: Include resolve o N+1
    /// </summary>
    // var pedidos = await _context.Pedidos
    //     .Include(p => p.Itens)
    //         .ThenInclude(i => i.Produto)
    //     .ToListAsync();  // 1 query com JOINs
}

// DTOs para projeções
public record ProdutoResumoDto(int Id, string Nome, decimal Preco, string Categoria);
public record VendasPorCategoriaDto(string Categoria, int QuantidadeVendida, decimal TotalVendas);

// ============================================
// 📄 appsettings.Development.json — habilitar log de SQL
// ============================================
// {
//   "Logging": {
//     "LogLevel": {
//       "Default": "Information",
//       "Microsoft.EntityFrameworkCore.Database.Command": "Information"
//     }
//   }
// }
// Com isso, cada SQL gerado aparece no console durante desenvolvimento.`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Habilitar log de SQL no appsettings e ver as queries no console","Implementar ListarPaginadoAsync e verificar o OFFSET/FETCH no SQL gerado","Detectar um N+1 problem e corrigir adicionando Include","Criar uma projeção com Select que retorna apenas 3 campos (sem SELECT *)","Implementar um filtro dinâmico com Where condicional"],quiz:[{q:"O que é o problema N+1 no EF Core e como resolvê-lo?",options:["É um erro de compilação resolvido atualizando o EF Core","1 query para entidades pai + N queries para carregar cada filho; resolvido com Include (eager loading) que gera JOINs","Acontece quando o banco tem mais de N+1 tabelas","É um problema de paginação resolvido com Skip/Take"],answer:1,explanation:'N+1: carregar 100 pedidos (1 query) e acessar pedido.Cliente para cada (100 queries extras = 101 total). Include("Cliente") gera um JOIN e traz tudo em 1 query. Diferença pode ser segundos vs milissegundos.'},{q:"Por que projeções com Select são melhores que Include para APIs?",options:["Select é mais fácil de escrever","Select traz apenas as colunas necessárias (SELECT Nome, Preco); Include traz a entidade inteira com todas as colunas — menos tráfego e memória","Include não funciona com APIs","Select é obrigatório no EF Core 8"],answer:1,explanation:"Include carrega entidades completas (todas as colunas + tracking). Select projeta apenas os campos necessários, gerando SQL otimizado. Para APIs que retornam DTOs, projeção elimina dados desnecessários e evita tracking."},{q:"O que acontece com este LINQ se o EF Core não conseguir traduzir o GroupBy para SQL?",options:["Erro de compilação","O EF Core carrega TODOS os dados do banco para memória e faz o GroupBy no cliente (client-side evaluation) — devastador para performance","Retorna lista vazia","O banco faz o GroupBy normalmente"],answer:1,explanation:'Client-side evaluation é silencioso e perigoso: o EF Core baixa toda a tabela para memória e processa em C#. Pode consumir GB de RAM. Habilite LogLevel "Warning" para "Microsoft.EntityFrameworkCore.Query" para detectar.'}]}]},lp={id:"m7",title:"SQL Server Essencial",icon:"📊",week:"Semana 7",color:"#DC2626",topics:[{id:"m7t1",moduleId:"m7",title:"DDL: Criando Tabelas Profissionais",theory:`DDL (Data Definition Language) abrange os comandos que definem a estrutura do banco de dados: CREATE, ALTER, DROP. Em projetos corporativos com SQL Server, a modelagem de tabelas segue padrões rígidos: convenções de nomeação, tipos de dados corretos, constraints obrigatórias e índices planejados desde o início.

Toda tabela começa com uma PRIMARY KEY. No SQL Server, o padrão é IDENTITY(1,1) — auto-incremento a partir de 1, aumentando de 1 em 1. Para sistemas distribuídos, considere UNIQUEIDENTIFIER (GUID) com NEWSEQUENTIALID() que gera GUIDs sequenciais, evitando fragmentação no índice clustered.

Tipos de dados importam para performance e armazenamento. Use NVARCHAR(n) em vez de VARCHAR quando precisar de Unicode (nomes com acentos, emojis). DECIMAL(18,2) para valores monetários (FLOAT tem imprecisão). BIT para booleanos. DATETIME2 em vez de DATETIME (mais precisão, menor range = melhor).

Constraints garantem integridade dos dados no nível do banco, não apenas na aplicação. NOT NULL impede valores nulos. UNIQUE garante valores únicos (CPF, Email). CHECK valida regras de negócio (Preco > 0, Status IN ('Ativo','Inativo')). DEFAULT define valores padrão (GETUTCDATE() para data de criação).

Foreign Keys (FK) criam relacionamentos entre tabelas. Sempre defina ON DELETE e ON UPDATE explicitamente. Em produção corporativa, ON DELETE NO ACTION ou ON DELETE SET NULL são mais seguros que CASCADE. O DBA precisa entender o impacto de cada FK.

Ao alterar tabelas existentes com ALTER TABLE, sempre faça em etapas: adicione a coluna como nullable → migre dados → adicione constraint NOT NULL. Nunca faça ALTER TABLE ADD coluna NOT NULL sem DEFAULT em tabelas com dados — o SQL Server rejeita.`,code:`-- DDL: Criando Tabelas Profissionais — SQL Server
-- Execute no SQL Server Management Studio (SSMS) ou Azure Data Studio

-- ============================================
-- 1️⃣ Criar o banco de dados
-- ============================================
CREATE DATABASE EcommerceDb
ON PRIMARY (
    NAME = 'EcommerceDb_Data',
    FILENAME = 'C:\\SQLData\\EcommerceDb.mdf',
    SIZE = 100MB,
    FILEGROWTH = 50MB
)
LOG ON (
    NAME = 'EcommerceDb_Log',
    FILENAME = 'C:\\SQLData\\EcommerceDb.ldf',
    SIZE = 50MB,
    FILEGROWTH = 25MB
);
GO

USE EcommerceDb;
GO

-- ============================================
-- 2️⃣ Tabela Categorias — entidade pai
-- ============================================
CREATE TABLE dbo.Categorias (
    Id          INT IDENTITY(1,1)   NOT NULL,
    Nome        NVARCHAR(100)       NOT NULL,
    Descricao   NVARCHAR(500)       NULL,
    Ativo       BIT                 NOT NULL DEFAULT 1,
    CriadoEm   DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),

    CONSTRAINT PK_Categorias PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UQ_Categorias_Nome UNIQUE (Nome)
);
GO

-- ============================================
-- 3️⃣ Tabela Produtos — com FK para Categorias
-- ============================================
CREATE TABLE dbo.Produtos (
    Id          INT IDENTITY(1,1)   NOT NULL,
    Nome        NVARCHAR(200)       NOT NULL,
    SKU         NVARCHAR(50)        NOT NULL,
    Descricao   NVARCHAR(2000)      NULL,
    Preco       DECIMAL(18,2)       NOT NULL,
    Estoque     INT                 NOT NULL DEFAULT 0,
    Ativo       BIT                 NOT NULL DEFAULT 1,
    CriadoEm   DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),
    CategoriaId INT                 NOT NULL,

    -- Constraints
    CONSTRAINT PK_Produtos PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UQ_Produtos_SKU UNIQUE (SKU),
    CONSTRAINT CK_Produtos_Preco CHECK (Preco > 0),
    CONSTRAINT CK_Produtos_Estoque CHECK (Estoque >= 0),
    CONSTRAINT FK_Produtos_Categorias
        FOREIGN KEY (CategoriaId)
        REFERENCES dbo.Categorias(Id)
        ON DELETE NO ACTION        -- NÃO deleta produtos ao deletar categoria
        ON UPDATE CASCADE
);
GO

-- ============================================
-- 4️⃣ Tabela Clientes
-- ============================================
CREATE TABLE dbo.Clientes (
    Id          INT IDENTITY(1,1)   NOT NULL,
    Nome        NVARCHAR(200)       NOT NULL,
    Email       NVARCHAR(256)       NOT NULL,
    CPF         CHAR(11)            NOT NULL,
    Telefone    NVARCHAR(20)        NULL,
    Ativo       BIT                 NOT NULL DEFAULT 1,
    CriadoEm   DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),

    CONSTRAINT PK_Clientes PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UQ_Clientes_Email UNIQUE (Email),
    CONSTRAINT UQ_Clientes_CPF UNIQUE (CPF),
    CONSTRAINT CK_Clientes_CPF CHECK (LEN(CPF) = 11)
);
GO

-- ============================================
-- 5️⃣ ALTER TABLE — evoluindo tabela existente
-- ============================================
-- Etapa 1: adiciona coluna NULLABLE (seguro para tabela com dados)
ALTER TABLE dbo.Produtos
    ADD UltimaAtualizacao DATETIME2(3) NULL;
GO

-- Etapa 2: preenche dados existentes
UPDATE dbo.Produtos SET UltimaAtualizacao = CriadoEm;
GO

-- Etapa 3: adiciona constraint DEFAULT para registros futuros
ALTER TABLE dbo.Produtos
    ADD CONSTRAINT DF_Produtos_UltimaAtualizacao
    DEFAULT GETUTCDATE() FOR UltimaAtualizacao;
GO

-- ============================================
-- 5️⃣ Tabela Pedidos
-- ============================================
CREATE TABLE dbo.Pedidos (
    Id          INT IDENTITY(1,1)   NOT NULL,
    ClienteId   INT                 NOT NULL,
    DataPedido  DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),
    Status      NVARCHAR(20)        NOT NULL DEFAULT 'Pendente',
    Total       DECIMAL(18,2)       NOT NULL DEFAULT 0,

    CONSTRAINT PK_Pedidos PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT CK_Pedidos_Status CHECK (Status IN ('Pendente','Confirmado','Enviado','Entregue','Cancelado')),
    CONSTRAINT FK_Pedidos_Clientes
        FOREIGN KEY (ClienteId)
        REFERENCES dbo.Clientes(Id)
        ON DELETE NO ACTION
);
GO

-- ============================================
-- 6️⃣ Tabela ItensPedido
-- ============================================
CREATE TABLE dbo.ItensPedido (
    Id              INT IDENTITY(1,1)   NOT NULL,
    PedidoId        INT                 NOT NULL,
    ProdutoId       INT                 NOT NULL,
    Quantidade      INT                 NOT NULL,
    PrecoUnitario   DECIMAL(18,2)       NOT NULL,

    CONSTRAINT PK_ItensPedido PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT CK_ItensPedido_Qtd CHECK (Quantidade > 0),
    CONSTRAINT CK_ItensPedido_Preco CHECK (PrecoUnitario > 0),
    CONSTRAINT FK_ItensPedido_Pedidos
        FOREIGN KEY (PedidoId)
        REFERENCES dbo.Pedidos(Id)
        ON DELETE CASCADE,          -- Deletar pedido → deleta itens
    CONSTRAINT FK_ItensPedido_Produtos
        FOREIGN KEY (ProdutoId)
        REFERENCES dbo.Produtos(Id)
        ON DELETE NO ACTION
);
GO

CREATE NONCLUSTERED INDEX IX_ItensPedido_PedidoProduto
ON dbo.ItensPedido (PedidoId, ProdutoId);
GO

-- ============================================
-- 7️⃣ Dados iniciais (seed) — valores realistas
-- ============================================
INSERT INTO dbo.Categorias (Nome, Descricao) VALUES
    (N'Periféricos',  N'Mouse, teclado, headset e webcam'),
    (N'Monitores',    N'Monitores LCD, LED e ultrawide'),
    (N'Componentes',  N'Placa-mãe, memória, SSD e processador');
GO

INSERT INTO dbo.Produtos (Nome, SKU, Descricao, Preco, Estoque, CategoriaId) VALUES
    (N'Mouse Gamer Logitech G502',  'PER-MOU-001', N'Mouse óptico 25.600 DPI',   349.90, 120, 1),
    (N'Teclado Mecânico HyperX',    'PER-TEC-002', N'Switch Red, RGB, ABNT2',     459.90,  85, 1),
    (N'Webcam Logitech C920',       'PER-WEB-003', N'Full HD 1080p com microfone', 399.90,  60, 1),
    (N'Monitor LG 27" 4K',          'MON-LG-001',  N'IPS, 60Hz, HDR10',         1899.90,  25, 2),
    (N'Monitor Samsung 24" 144Hz',  'MON-SAM-002', N'VA, 1ms, FreeSync',         1199.90,  40, 2),
    (N'SSD NVMe 1TB Kingston',       'COM-SSD-001', N'PCIe 4.0, 7000MB/s leitura', 549.90,  200, 3),
    (N'Memória DDR5 16GB Corsair',   'COM-MEM-002', N'5600MHz, CL36',              389.90, 150, 3);
GO

INSERT INTO dbo.Clientes (Nome, Email, CPF, Telefone) VALUES
    (N'Maria Silva',    'maria.silva@email.com',    '12345678901', '11999001122'),
    (N'João Oliveira',  'joao.oliveira@email.com',  '98765432100', '21988334455'),
    (N'Ana Souza',      'ana.souza@email.com',      '45678912300', NULL);
GO

INSERT INTO dbo.Pedidos (ClienteId, Status, Total) VALUES
    (1, 'Entregue',   809.80),
    (1, 'Confirmado', 1899.90),
    (2, 'Pendente',   939.80);
GO

INSERT INTO dbo.ItensPedido (PedidoId, ProdutoId, Quantidade, PrecoUnitario) VALUES
    (1, 1, 1, 349.90),   -- Pedido 1: Mouse
    (1, 2, 1, 459.90),   -- Pedido 1: Teclado
    (2, 4, 1, 1899.90),  -- Pedido 2: Monitor 4K
    (3, 6, 1, 549.90),   -- Pedido 3: SSD
    (3, 7, 1, 389.90);   -- Pedido 3: Memória
GO`,codeLanguage:"sql",runCommand:"sqlcmd -S localhost -d EcommerceDb -i create_tables.sql",checklist:["Executar o script DDL completo e verificar 5 tabelas criadas (Categorias, Produtos, Clientes, Pedidos, ItensPedido)","Inserir os dados de seed e validar as constraints (tentar Preco negativo para ver CHECK)","Usar NVARCHAR em vez de VARCHAR para campos com acentos (Nome, Descricao)","Praticar ALTER TABLE em 3 etapas: add nullable → migrate → add default","Verificar estrutura de cada tabela com sp_help 'dbo.Produtos'"],quiz:[{q:"Por que usar DECIMAL(18,2) em vez de FLOAT para valores monetários no SQL Server?",options:["FLOAT é mais rápido e deveria ser usado sempre","DECIMAL é exato para valores decimais; FLOAT usa ponto flutuante com imprecisão (0.1 + 0.2 ≠ 0.3) — inaceitável para dinheiro","DECIMAL ocupa menos espaço que FLOAT","FLOAT não existe no SQL Server"],answer:1,explanation:"FLOAT usa representação binária de ponto flutuante (IEEE 754) com imprecisão inerente. DECIMAL armazena valores exatos. Para dinheiro, a imprecisão de FLOAT pode causar centavos a mais/menos em milhares de transações."},{q:"Como adicionar uma coluna NOT NULL a uma tabela que já possui dados?",options:["ALTER TABLE ADD coluna NOT NULL — funciona direto","Adicionar como NULL → UPDATE com valor padrão → ALTER COLUMN para NOT NULL (3 etapas)","Dropar e recriar a tabela","Não é possível — deve criar uma tabela nova"],answer:1,explanation:"Adicionar NOT NULL direto falha se a tabela tem dados (registros existentes teriam NULL). O processo seguro: add nullable → preencher dados → alter para NOT NULL. Ou adicionar com DEFAULT que preenche automaticamente."},{q:"O que acontece ao executar: DELETE FROM Categorias WHERE Id = 1; — se Produtos tem FK para Categorias com ON DELETE NO ACTION?",options:["Deleta a categoria e todos os produtos vinculados","O SQL Server retorna erro de violação de FK e impede o DELETE, pois existem produtos referenciando essa categoria","Deleta a categoria e os produtos ficam com CategoriaId = NULL","O DELETE é ignorado silenciosamente"],answer:1,explanation:"ON DELETE NO ACTION (ou RESTRICT) impede a exclusão do registro pai quando existem filhos referenciando. O SQL Server lança erro 547 (conflito de FK). O dev deve tratar: realocar produtos antes de deletar a categoria."}]},{id:"m7t2",moduleId:"m7",title:"JOINs e Subconsultas",theory:`JOINs são a principal operação relacional — combinam dados de 2 ou mais tabelas baseado em colunas relacionadas. No SQL Server, os 4 tipos de JOIN cobrem 99% dos cenários: INNER JOIN (interseção), LEFT JOIN (tudo da esquerda + matches da direita), RIGHT JOIN (tudo da direita + matches da esquerda), FULL JOIN (todos de ambas).

INNER JOIN é o mais usado: retorna apenas registros que existem em ambas as tabelas. SELECT p.Nome, c.Nome FROM Produtos p INNER JOIN Categorias c ON p.CategoriaId = c.Id — se um produto não tem categoria (CategoriaId = NULL), ele não aparece. Se uma categoria não tem produtos, ela não aparece.

LEFT JOIN retorna todos da tabela esquerda, mesmo sem correspondência na direita (colunas da direita ficam NULL). Essencial para relatórios: "listar todas as categorias e quantos produtos cada uma tem" — categorias sem produtos aparecem com COUNT = 0. Use LEFT JOIN quando a tabela principal precisa aparecer independente do relacionamento.

Subconsultas (subqueries) são queries dentro de queries. Existem 3 tipos: escalar (retorna 1 valor, usada em SELECT ou WHERE), tabela (retorna múltiplas linhas, usada com IN, EXISTS, ANY), correlacionada (referencia a query externa, executada para cada linha). EXISTS é geralmente mais performático que IN para listas grandes.

CROSS APPLY e OUTER APPLY são exclusivos do SQL Server e substituem subconsultas correlacionadas com sintaxe mais limpa e performance geralmente melhor. CROSS APPLY = INNER JOIN com subconsulta, OUTER APPLY = LEFT JOIN com subconsulta. São ideais para "top N por grupo".

Common Table Expressions (CTEs) com WITH reorganizam queries complexas em blocos nomeados. Recursivas CTEs permitem percorrer hierarquias (organograma, categorias pai-filho). ORDER BY dentro de subconsultas requer TOP ou OFFSET.`,code:`-- JOINs e Subconsultas — SQL Server
-- Cenário: e-commerce com Categorias, Produtos, Pedidos, ItensPedido

-- ============================================
-- 1️⃣ INNER JOIN — produtos com categoria
-- ============================================
SELECT
    p.Id,
    p.Nome        AS Produto,
    p.Preco,
    c.Nome        AS Categoria
FROM dbo.Produtos p
INNER JOIN dbo.Categorias c ON p.CategoriaId = c.Id
WHERE p.Ativo = 1
ORDER BY c.Nome, p.Nome;

-- ============================================
-- 2️⃣ LEFT JOIN — categorias COM e SEM produtos
-- ============================================
SELECT
    c.Nome                  AS Categoria,
    COUNT(p.Id)             AS TotalProdutos,
    ISNULL(AVG(p.Preco), 0) AS PrecoMedio
FROM dbo.Categorias c
LEFT JOIN dbo.Produtos p ON c.Id = p.CategoriaId AND p.Ativo = 1
GROUP BY c.Nome
ORDER BY TotalProdutos DESC;
-- Categorias sem produtos aparecem com TotalProdutos = 0

-- ============================================
-- 📌 GROUP BY com HAVING — filtrar APÓS agregação
-- ============================================
-- Categorias que faturaram mais de R$ 1.000
SELECT
    c.Nome                                    AS Categoria,
    SUM(ip.Quantidade * ip.PrecoUnitario)     AS Faturamento,
    COUNT(DISTINCT ped.Id)                    AS TotalPedidos
FROM dbo.Categorias c
INNER JOIN dbo.Produtos p ON c.Id = p.CategoriaId
INNER JOIN dbo.ItensPedido ip ON p.Id = ip.ProdutoId
INNER JOIN dbo.Pedidos ped ON ip.PedidoId = ped.Id
WHERE ped.Status <> 'Cancelado'
GROUP BY c.Nome
HAVING SUM(ip.Quantidade * ip.PrecoUnitario) > 1000  -- HAVING filtra grupos
ORDER BY Faturamento DESC;
-- WHERE filtra LINHAS antes do GROUP BY
-- HAVING filtra GRUPOS depois da agregação

-- ============================================
-- 3️⃣ Multi-JOIN — pedidos com itens e produtos
-- ============================================
SELECT
    ped.Id          AS PedidoId,
    ped.DataPedido,
    ped.Status,
    p.Nome          AS Produto,
    ip.Quantidade,
    ip.PrecoUnitario,
    (ip.Quantidade * ip.PrecoUnitario) AS Subtotal
FROM dbo.Pedidos ped
INNER JOIN dbo.ItensPedido ip ON ped.Id = ip.PedidoId
INNER JOIN dbo.Produtos p ON ip.ProdutoId = p.Id
WHERE ped.Status <> 'Cancelado'
ORDER BY ped.DataPedido DESC, p.Nome;

-- ============================================
-- 4️⃣ Subconsulta com EXISTS — mais rápido que IN
-- ============================================
-- Categorias que TÊM pelo menos 1 produto ativo
SELECT c.Nome, c.Descricao
FROM dbo.Categorias c
WHERE EXISTS (
    SELECT 1 FROM dbo.Produtos p
    WHERE p.CategoriaId = c.Id AND p.Ativo = 1
);

-- ============================================
-- 5️⃣ CTE — relatório de vendas por categoria
-- ============================================
WITH VendasPorCategoria AS (
    SELECT
        c.Nome AS Categoria,
        SUM(ip.Quantidade * ip.PrecoUnitario) AS TotalVendas,
        SUM(ip.Quantidade) AS UnidadesVendidas
    FROM dbo.ItensPedido ip
    INNER JOIN dbo.Produtos p ON ip.ProdutoId = p.Id
    INNER JOIN dbo.Categorias c ON p.CategoriaId = c.Id
    INNER JOIN dbo.Pedidos ped ON ip.PedidoId = ped.Id
    WHERE ped.Status IN ('Confirmado', 'Enviado', 'Entregue')
    GROUP BY c.Nome
)
SELECT
    Categoria,
    TotalVendas,
    UnidadesVendidas,
    RANK() OVER (ORDER BY TotalVendas DESC) AS Ranking
FROM VendasPorCategoria
ORDER BY TotalVendas DESC;

-- ============================================
-- 6️⃣ CROSS APPLY — top 3 produtos por categoria
-- ============================================
SELECT
    c.Nome       AS Categoria,
    t.Nome       AS Produto,
    t.Preco,
    t.Posicao
FROM dbo.Categorias c
CROSS APPLY (
    SELECT TOP 3
        p.Nome, p.Preco,
        ROW_NUMBER() OVER (ORDER BY p.Preco DESC) AS Posicao
    FROM dbo.Produtos p
    WHERE p.CategoriaId = c.Id AND p.Ativo = 1
) t
ORDER BY c.Nome, t.Posicao;`,codeLanguage:"sql",runCommand:"sqlcmd -S localhost -d EcommerceDb -i joins_queries.sql",checklist:["Escrever INNER JOIN entre Produtos e Categorias e conferir resultado","Usar LEFT JOIN para listar categorias sem produtos (COUNT = 0)","Fazer Multi-JOIN entre Pedidos, ItensPedido e Produtos","Substituir uma subconsulta IN por EXISTS e comparar o plano de execução","Criar um relatório com CTE e RANK() OVER para ranking de vendas"],quiz:[{q:"Qual a diferença fundamental entre INNER JOIN e LEFT JOIN?",options:["INNER JOIN é mais rápido; LEFT JOIN é mais lento","INNER JOIN retorna apenas registros com correspondência em ambas tabelas; LEFT JOIN retorna TODOS da tabela esquerda, preenchendo NULL onde não há correspondência na direita","LEFT JOIN é o mesmo que INNER JOIN com ORDER BY","INNER JOIN permite mais de 2 tabelas; LEFT JOIN não"],answer:1,explanation:"INNER JOIN = interseção (só matches). LEFT JOIN = tudo da esquerda + matches da direita (sem match = NULL). Exemplo: LEFT JOIN Categorias mostra categorias sem produtos (NULL nos campos de produto)."},{q:"Quando usar EXISTS em vez de IN para subconsultas?",options:["EXISTS sempre — IN é deprecado","EXISTS é geralmente mais eficiente para listas grandes porque para na primeira correspondência; IN materializa toda a subconsulta antes de comparar","IN é sempre mais rápido","São idênticos em todos os cenários"],answer:1,explanation:"EXISTS usa short-circuit: para de buscar ao encontrar o primeiro match. IN precisa materializar toda a lista. Para subconsultas que retornam milhares de linhas, EXISTS é significativamente mais rápido."},{q:"O que o CROSS APPLY faz neste trecho? SELECT c.Nome, t.Produto FROM Categorias c CROSS APPLY (SELECT TOP 3 ...) t",options:["Cria um produto cruzado (cartesiano) entre as tabelas","Executa a subconsulta para CADA linha de Categorias, retornando apenas categorias que têm resultados (como INNER JOIN com subconsulta correlacionada)","É o mesmo que INNER JOIN sem condição ON","Seleciona 3 categorias aleatórias"],answer:1,explanation:'CROSS APPLY executa a subconsulta para cada linha da tabela externa (como um loop). É exclusivo do SQL Server e ideal para "top N por grupo". OUTER APPLY = LEFT JOIN equivalente (inclui categorias sem resultados).'}]},{id:"m7t3",moduleId:"m7",title:"Índices e Performance",theory:`Índices são a ferramenta mais poderosa para otimizar queries no SQL Server. Sem índices, o SQL Server faz Table Scan — lê TODAS as linhas para encontrar as que satisfazem o WHERE. Com um índice adequado, faz Index Seek — vai direto aos dados, como um índice de livro. Em tabelas com milhões de registros, a diferença é de minutos vs milissegundos.

O SQL Server tem 2 tipos principais: Clustered Index (define a ordem física dos dados na tabela — só 1 por tabela, geralmente na PK) e Non-Clustered Index (cria uma estrutura B-Tree separada com ponteiros para os dados — até 999 por tabela). A analogia: Clustered = as páginas do livro em ordem, Non-Clustered = o índice remissivo no final.

Índices compostos (multi-coluna) seguem a regra "leftmost prefix": um índice em (CategoriaId, Nome, Preco) serve queries que filtram por CategoriaId, ou CategoriaId + Nome, ou os 3. Mas NÃO serve query que filtra apenas por Nome — a ordem das colunas importa.

INCLUDE adiciona colunas ao índice que não fazem parte da chave, mas são retornadas na query. Isso cria um Covering Index — o SQL Server responde a query inteiramente do índice, sem precisar buscar a tabela base (Key Lookup). Para queries frequentes, Covering Index é a otimização mais impactante.

Cuidado com over-indexing: cada índice consome espaço e torna INSERT/UPDATE/DELETE mais lentos (o SQL Server precisa atualizar todos os índices). A regra é: indexe colunas de WHERE, JOIN e ORDER BY. Monitore queries lentas com SET STATISTICS IO ON e analise o Execution Plan (Ctrl+M no SSMS).

Fragmentação ocorre quando dados são inseridos/atualizados e as páginas do índice se desorganizam. ALTER INDEX REBUILD reconstrói completamente (trava a tabela), REORGANIZE apenas rearranja (online, sem lock). Em produção, rotina de manutenção semanal com threshold: > 30% fragmentação = REBUILD, > 10% = REORGANIZE.`,code:`-- Índices e Performance — SQL Server
-- Execute no SSMS com "Include Actual Execution Plan" (Ctrl+M)

-- ============================================
-- 1️⃣ Ver índices existentes
-- ============================================
SELECT
    i.name           AS NomeIndice,
    i.type_desc      AS Tipo,
    STRING_AGG(c.name, ', ') WITHIN GROUP (ORDER BY ic.key_ordinal) AS Colunas
FROM sys.indexes i
INNER JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
INNER JOIN sys.columns c ON ic.object_id = c.object_id AND ic.column_id = c.column_id
WHERE i.object_id = OBJECT_ID('dbo.Produtos')
GROUP BY i.name, i.type_desc
ORDER BY i.type_desc;

-- ============================================
-- 2️⃣ Query SEM índice — Table/Index Scan
-- ============================================
-- Ativar estatísticas de IO para medir leituras
SET STATISTICS IO ON;

-- Sem índice em Nome → Scan (lê tudo)
SELECT * FROM dbo.Produtos
WHERE Nome LIKE 'Monitor%'
ORDER BY Preco DESC;
-- Exec Plan mostra: Clustered Index Scan (lento para tabela grande)

-- ============================================
-- 3️⃣ Criar índice simples — Non-Clustered
-- ============================================
CREATE NONCLUSTERED INDEX IX_Produtos_Nome
ON dbo.Produtos (Nome);

-- Mesma query agora usa Index Seek (rápido!)
SELECT * FROM dbo.Produtos
WHERE Nome LIKE 'Monitor%'
ORDER BY Preco DESC;
-- Exec Plan mostra: Index Seek + Key Lookup

-- ============================================
-- 4️⃣ Covering Index com INCLUDE — elimina Key Lookup
-- ============================================
DROP INDEX IX_Produtos_Nome ON dbo.Produtos;

-- INCLUDE: traz Preco e Estoque junto com o índice
CREATE NONCLUSTERED INDEX IX_Produtos_Nome_Cover
ON dbo.Produtos (Nome)
INCLUDE (Preco, Estoque, CategoriaId);

-- Agora a query é satisfeita 100% pelo índice (sem voltar à tabela)
SELECT Nome, Preco, Estoque
FROM dbo.Produtos
WHERE Nome LIKE 'Monitor%'
ORDER BY Preco DESC;
-- Exec Plan: Index Seek SEM Key Lookup = máxima performance

-- ============================================
-- 5️⃣ Índice composto — ordem das colunas importa
-- ============================================
CREATE NONCLUSTERED INDEX IX_Produtos_Categoria_Ativo
ON dbo.Produtos (CategoriaId, Ativo)
INCLUDE (Nome, Preco);

-- ✅ Usa o índice (leftmost prefix)
SELECT Nome, Preco FROM dbo.Produtos
WHERE CategoriaId = 1 AND Ativo = 1;

-- ❌ NÃO usa o índice (coluna Ativo não é a primeira)
SELECT Nome, Preco FROM dbo.Produtos
WHERE Ativo = 1;

-- ============================================
-- 6️⃣ Manutenção de índices
-- ============================================
-- Ver fragmentação
SELECT
    i.name,
    ps.avg_fragmentation_in_percent,
    ps.page_count
FROM sys.dm_db_index_physical_stats(
    DB_ID(), OBJECT_ID('dbo.Produtos'), NULL, NULL, 'LIMITED') ps
INNER JOIN sys.indexes i ON ps.object_id = i.object_id AND ps.index_id = i.index_id
WHERE ps.avg_fragmentation_in_percent > 5;

-- Manutenção baseada na fragmentação
-- > 30%: REBUILD (offline, mais rápido)
ALTER INDEX IX_Produtos_Nome_Cover ON dbo.Produtos REBUILD;

-- 10-30%: REORGANIZE (online, sem lock)
ALTER INDEX IX_Produtos_Categoria_Ativo ON dbo.Produtos REORGANIZE;

-- ============================================
-- 7️⃣ Identificar índices NÃO utilizados
-- ============================================
SELECT
    OBJECT_NAME(i.object_id)     AS Tabela,
    i.name                       AS Indice,
    i.type_desc                  AS Tipo,
    us.user_seeks,
    us.user_scans,
    us.user_lookups,
    us.user_updates              -- Custo: cada INSERT/UPDATE atualiza o índice
FROM sys.indexes i
LEFT JOIN sys.dm_db_index_usage_stats us
    ON i.object_id = us.object_id
    AND i.index_id = us.index_id
    AND us.database_id = DB_ID()
WHERE OBJECTPROPERTY(i.object_id, 'IsUserTable') = 1
  AND i.type_desc = 'NONCLUSTERED'
  AND (us.user_seeks + us.user_scans + us.user_lookups) = 0 -- Nunca usado!
ORDER BY us.user_updates DESC;
-- Índices com 0 leituras e muitas escritas são candidatos a remover`,codeLanguage:"sql",runCommand:"sqlcmd -S localhost -d EcommerceDb -i create_indexes.sql",checklist:["Ativar SET STATISTICS IO ON e analisar logical reads antes/depois do índice","Criar um índice Non-Clustered e verificar mudança de Scan para Seek no Execution Plan","Criar um Covering Index com INCLUDE e confirmar que eliminou o Key Lookup","Testar a regra leftmost prefix com índice composto","Consultar fragmentação com sys.dm_db_index_physical_stats"],quiz:[{q:"Qual é o propósito de um Covering Index (com INCLUDE) no SQL Server?",options:["Proteger os dados contra alterações indevidas","Incluir colunas extras no índice para que a query seja satisfeita inteiramente pelo índice, eliminando o Key Lookup à tabela base","Cobrir todas as tabelas do banco com um único índice","Substituir o Clustered Index"],answer:1,explanation:"Covering Index inclui (INCLUDE) colunas que a query precisa retornar mas não filtra. O SQL Server lê tudo do índice sem voltar à tabela (Key Lookup). É a otimização mais impactante para queries frequentes de leitura."},{q:"Em um índice composto (CategoriaId, Ativo, Nome), qual WHERE se beneficia do índice?",options:["WHERE Nome = ... — qualquer coluna do índice","WHERE CategoriaId = ... (ou CategoriaId + Ativo, ou os 3) — respeita a regra leftmost prefix","Todas as combinações possíveis das 3 colunas","Apenas quando as 3 colunas estão presentes no WHERE"],answer:1,explanation:"Regra leftmost prefix: o índice (A, B, C) serve queries com WHERE A, WHERE A+B, WHERE A+B+C. NÃO serve WHERE B ou WHERE C sozinhos. A ordem das colunas no índice é crucial."},{q:"O que este comando faz? ALTER INDEX IX_Produtos_Nome ON dbo.Produtos REBUILD;",options:["Deleta o índice completamente","Reconstrói o índice do zero, eliminando fragmentação — a tabela fica bloqueada durante a operação (use REBUILT WITH (ONLINE = ON) em Enterprise)","Apenas renomeia o índice","Adiciona novas colunas ao índice existente"],answer:1,explanation:"REBUILD reconstrói o índice completamente, zerando a fragmentação. Melhora performance de leitura. Porém, bloqueia a tabela (offline). Para Enterprise Edition, REBUILD WITH (ONLINE = ON) permite reconstruir sem lock."}]},{id:"m7t4",moduleId:"m7",title:"Stored Procedures e Transações",theory:`Stored Procedures (SPs) são blocos de T-SQL compilados e armazenados no banco de dados. Funcionam como "métodos" do banco: recebem parâmetros, executam lógica, retornam dados. Em projetos corporativos, SPs ainda são amplamente usadas em cenários de alta performance, operações em lote e integração com sistemas legados.

Vantagens reais de SPs: plano de execução pré-compilado e cacheado (sem custo de parsing a cada chamada), segurança granular (pode dar EXECUTE na SP sem dar SELECT nas tabelas), operações batch complexas que seriam ineficientes em LINQ, e encapsulamento de lógica no banco para integrações com múltiplos sistemas (não só .NET).

Transações garantem as propriedades ACID: Atomicidade (tudo ou nada), Consistência (dados válidos antes e depois), Isolamento (transações paralelas não interferem), Durabilidade (após COMMIT, dados persistem mesmo com crash). BEGIN TRANSACTION, COMMIT, ROLLBACK são os comandos essenciais.

O padrão TRY/CATCH no T-SQL é obrigatório em SPs: BEGIN TRY + BEGIN TRANSACTION dentro do TRY, COMMIT no final do TRY, BEGIN CATCH faz ROLLBACK e trata o erro. Nunca deixe uma SP sem tratamento de erro — uma exceção sem ROLLBACK pode deixar uma transação aberta, bloqueando a tabela.

OUTPUT parameters retornam valores escalares da SP. RETURN retorna um código de status (0 = sucesso). Para retornar conjuntos de dados (resultsets), use SELECT dentro da SP e o EF Core mapeia com FromSqlRaw. Combine os 3 conforme necessidade.

O EF Core 8 executa SPs com context.Database.ExecuteSqlRawAsync para comandos (INSERT/UPDATE/DELETE) e .FromSqlRaw para queries. Use parâmetros SqlParameter para prevenir SQL Injection — NUNCA concatene strings com entrada do usuário em SQL.`,code:`-- Stored Procedures e Transações — SQL Server
-- Cenário: operações de pedido no e-commerce

-- ============================================
-- 1️⃣ SP Simples — buscar produtos por categoria
-- ============================================
CREATE OR ALTER PROCEDURE dbo.sp_BuscarProdutosPorCategoria
    @CategoriaId INT,
    @ApenasAtivos BIT = 1  -- Parâmetro com valor default
AS
BEGIN
    SET NOCOUNT ON; -- Não retorna mensagem de contagem (performance)

    SELECT
        p.Id,
        p.Nome,
        p.SKU,
        p.Preco,
        p.Estoque,
        c.Nome AS Categoria
    FROM dbo.Produtos p
    INNER JOIN dbo.Categorias c ON p.CategoriaId = c.Id
    WHERE p.CategoriaId = @CategoriaId
      AND (@ApenasAtivos = 0 OR p.Ativo = 1)
    ORDER BY p.Nome;
END;
GO

-- Executar:
EXEC dbo.sp_BuscarProdutosPorCategoria @CategoriaId = 1;
EXEC dbo.sp_BuscarProdutosPorCategoria @CategoriaId = 2, @ApenasAtivos = 0;

-- ============================================
-- 2️⃣ SP com Transação — criar pedido completo
-- ============================================
CREATE OR ALTER PROCEDURE dbo.sp_CriarPedido
    @ClienteId  INT,
    @Itens      NVARCHAR(MAX),  -- JSON: [{"ProdutoId":1,"Qtd":2},...]
    @PedidoId   INT OUTPUT       -- Retorna o ID do pedido criado
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
        BEGIN TRANSACTION;

        -- 1. Cria o pedido
        INSERT INTO dbo.Pedidos (ClienteId, DataPedido, Status, Total)
        VALUES (@ClienteId, GETUTCDATE(), 'Pendente', 0);

        SET @PedidoId = SCOPE_IDENTITY();

        -- 2. Insere itens a partir do JSON
        INSERT INTO dbo.ItensPedido (PedidoId, ProdutoId, Quantidade, PrecoUnitario)
        SELECT
            @PedidoId,
            j.ProdutoId,
            j.Qtd,
            p.Preco
        FROM OPENJSON(@Itens) WITH (
            ProdutoId INT '$.ProdutoId',
            Qtd       INT '$.Qtd'
        ) j
        INNER JOIN dbo.Produtos p ON j.ProdutoId = p.Id;

        -- 3. Atualiza o estoque (decrementa)
        UPDATE p SET p.Estoque = p.Estoque - j.Qtd
        FROM dbo.Produtos p
        INNER JOIN OPENJSON(@Itens) WITH (
            ProdutoId INT '$.ProdutoId',
            Qtd       INT '$.Qtd'
        ) j ON p.Id = j.ProdutoId;

        -- 4. Verifica se algum estoque ficou negativo
        IF EXISTS (
            SELECT 1 FROM dbo.Produtos p
            INNER JOIN OPENJSON(@Itens) WITH (ProdutoId INT '$.ProdutoId') j
                ON p.Id = j.ProdutoId
            WHERE p.Estoque < 0
        )
        BEGIN
            -- Estoque insuficiente — ROLLBACK
            ;THROW 50001, 'Estoque insuficiente para um ou mais produtos.', 1;
        END;

        -- 5. Calcula o total do pedido
        UPDATE dbo.Pedidos
        SET Total = (
            SELECT SUM(Quantidade * PrecoUnitario)
            FROM dbo.ItensPedido WHERE PedidoId = @PedidoId
        )
        WHERE Id = @PedidoId;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;

        -- THROW sem parâmetros re-lança o erro original (melhor que RAISERROR)
        THROW;
    END CATCH;
END;
GO

-- ============================================
-- 3️⃣ Executar a SP com OUTPUT
-- ============================================
DECLARE @NovoPedidoId INT;
EXEC dbo.sp_CriarPedido
    @ClienteId = 1,
    @Itens = N'[{"ProdutoId":1,"Qtd":2},{"ProdutoId":3,"Qtd":1}]',
    @PedidoId = @NovoPedidoId OUTPUT;

SELECT @NovoPedidoId AS PedidoIdCriado;

-- ============================================
-- 4️⃣ View — relatório consolidado de pedidos
-- ============================================
CREATE OR ALTER VIEW dbo.VW_RelatorioPedidos AS
SELECT
    ped.Id            AS PedidoId,
    cli.Nome          AS Cliente,
    cli.Email,
    ped.DataPedido,
    ped.Status,
    COUNT(ip.Id)      AS TotalItens,
    SUM(ip.Quantidade * ip.PrecoUnitario) AS ValorTotal
FROM dbo.Pedidos ped
INNER JOIN dbo.Clientes cli ON ped.ClienteId = cli.Id
INNER JOIN dbo.ItensPedido ip ON ped.Id = ip.PedidoId
GROUP BY ped.Id, cli.Nome, cli.Email, ped.DataPedido, ped.Status;
GO

-- Consultar como tabela:
SELECT * FROM dbo.VW_RelatorioPedidos ORDER BY DataPedido DESC;

-- ============================================
-- 5️⃣ Chamar SP do EF Core 8
-- ============================================
// No C# — usando parâmetros para evitar SQL Injection
// var param = new SqlParameter("@CategoriaId", categoriaId);
// var produtos = await context.Produtos
//     .FromSqlRaw("EXEC dbo.sp_BuscarProdutosPorCategoria @CategoriaId", param)
//     .ToListAsync();`,codeLanguage:"sql",runCommand:"sqlcmd -S localhost -d EcommerceDb -i stored_procedures.sql",checklist:["Criar SP com parâmetros de entrada, valor default e SET NOCOUNT ON","Criar SP transacional com BEGIN TRY/CATCH + THROW para re-lançar erros","Usar SCOPE_IDENTITY() e OUTPUT para retornar o ID do pedido criado","Criar a View VW_RelatorioPedidos e consultá-la como uma tabela normal","Chamar a SP do EF Core com FromSqlRaw usando SqlParameter"],quiz:[{q:"Por que transações com TRY/CATCH são obrigatórias em SPs que modificam dados?",options:["É apenas uma boa prática opcional","Sem TRY/CATCH, um erro no meio da SP pode deixar a transação aberta (bloqueando tabelas) e os dados em estado inconsistente (parte das operações aplicada)","O SQL Server não permite SPs sem TRY/CATCH","TRY/CATCH melhora a performance da SP"],answer:1,explanation:"Sem TRY/CATCH, um erro após BEGIN TRANSACTION não faz ROLLBACK automático. A transação fica aberta, segurando locks nas tabelas. Dados ficam parcialmente escritos (inconsistentes). TRY/CATCH garante ROLLBACK no erro."},{q:"Qual a diferença entre SCOPE_IDENTITY() e @@IDENTITY?",options:["São idênticos","SCOPE_IDENTITY() retorna o último IDENTITY gerado no escopo atual; @@IDENTITY retorna o último IDENTITY de qualquer escopo (pode ser de um trigger) — use SCOPE_IDENTITY()","@@IDENTITY é mais seguro","SCOPE_IDENTITY() só funciona com INT"],answer:1,explanation:"SCOPE_IDENTITY() é limitado ao escopo atual (a SP ou batch). @@IDENTITY pode retornar um ID gerado por um trigger que executou INSERT em outra tabela. Sempre use SCOPE_IDENTITY() para evitar bugs sutis."},{q:"O que acontece ao executar esta SP se o estoque de um produto fica negativo? (veja sp_CriarPedido)",options:["O pedido é criado normalmente com estoque negativo","RAISERROR interrompe a execução, o fluxo vai para CATCH, ROLLBACK desfaz TODAS as operações (inserção do pedido, itens e update de estoque)","Apenas o UPDATE de estoque é revertido","O SQL Server ajusta o estoque para zero automaticamente"],answer:1,explanation:"RAISERROR com severity 16 lança um erro que vai para o CATCH. O CATCH verifica @@TRANCOUNT > 0 e faz ROLLBACK TRANSACTION, desfazendo TUDO desde o BEGIN TRANSACTION: inserts e updates. Dados ficam como estavam antes."}]}]},dp={id:"m8",title:"Injeção de Dependência",icon:"🔌",week:"Semana 8",color:"#F59E0B",topics:[{id:"m8t1",moduleId:"m8",title:"Container de DI do .NET",theory:`Injeção de Dependência (DI) é o padrão arquitetural mais importante do ASP.NET Core. O framework foi construído sobre DI — Controllers, middlewares, DbContext, logging: tudo é resolvido pelo container. Entender DI é obrigatório para qualquer desenvolvedor .NET corporativo.

O princípio é simples: em vez de uma classe criar suas próprias dependências (new ServicoEmail()), ela declara o que precisa no construtor. O container de DI se encarrega de criar e fornecer a instância correta. Isso segue o Princípio da Inversão de Dependência (o D do SOLID): dependa de abstrações (interfaces), não de implementações concretas.

O container nativo do .NET (Microsoft.Extensions.DependencyInjection) funciona em 2 etapas: registro (no Program.cs, você diz "quando alguém pedir IEmailService, entregue SmtpEmailService") e resolução (quando um controller precisa de IEmailService, o container cria SmtpEmailService e injeta no construtor automaticamente).

O registro usa IServiceCollection (builder.Services): AddTransient, AddScoped, AddSingleton. A resolução acontece automaticamente quando o ASP.NET Core instancia controllers, middlewares e o que estiver registrado no container. Não use new para serviços — deixe o container resolver.

Para cenários avançados, o container suporta: registrar múltiplas implementações para a mesma interface (IEnumerable<INotificador>), factories (AddScoped<IService>(sp => new Service(sp.GetRequiredService<IDep>()))), e decorators. Para cenários mais complexos, considere Scrutor (auto-scan de assemblies) ou containers alternativos como Autofac.

A convenção é criar Extension Methods para organizar o registro: builder.Services.AddInfrastructure(), builder.Services.AddApplication(). Isso mantém o Program.cs limpo e agrupa registros por camada ou feature.`,code:`// Container de DI do .NET — ASP.NET Core 8
// Registro e resolução de dependências

// ============================================
// 📄 Services/IEmailService.cs — Interface (abstração)
// ============================================
namespace EcommerceApi.Services;

public interface IEmailService
{
    Task EnviarAsync(string para, string assunto, string corpo);
}

// ============================================
// 📄 Services/SmtpEmailService.cs — Implementação
// ============================================
namespace EcommerceApi.Services;

public class SmtpEmailService : IEmailService
{
    private readonly ILogger<SmtpEmailService> _logger;

    // DI injeta ILogger automaticamente (já está registrado)
    public SmtpEmailService(ILogger<SmtpEmailService> logger)
    {
        _logger = logger;
    }

    public async Task EnviarAsync(string para, string assunto, string corpo)
    {
        // Em produção: configurar SMTP real
        _logger.LogInformation("Enviando email para {Para}: {Assunto}", para, assunto);
        await Task.Delay(100); // Simula envio
    }
}

// ============================================
// 📄 Services/INotificador.cs — Múltiplas implementações
// ============================================
namespace EcommerceApi.Services;

public interface INotificador
{
    Task NotificarAsync(string mensagem);
}

public class EmailNotificador : INotificador
{
    public Task NotificarAsync(string mensagem)
    {
        Console.WriteLine($"[EMAIL] {mensagem}");
        return Task.CompletedTask;
    }
}

public class SmsNotificador : INotificador
{
    public Task NotificarAsync(string mensagem)
    {
        Console.WriteLine($"[SMS] {mensagem}");
        return Task.CompletedTask;
    }
}

public class SlackNotificador : INotificador
{
    public Task NotificarAsync(string mensagem)
    {
        Console.WriteLine($"[SLACK] {mensagem}");
        return Task.CompletedTask;
    }
}

// ============================================
// 📄 Extensions/ServiceCollectionExtensions.cs
// ============================================
namespace EcommerceApi.Extensions;

public static class ServiceCollectionExtensions
{
    /// <summary>Registra todos os serviços da camada de infraestrutura.</summary>
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        // Registro simples: interface → implementação
        services.AddScoped<IEmailService, SmtpEmailService>();

        // Múltiplas implementações para mesma interface
        services.AddScoped<INotificador, EmailNotificador>();
        services.AddScoped<INotificador, SmsNotificador>();
        services.AddScoped<INotificador, SlackNotificador>();

        return services;
    }
}

// ============================================
// 📄 Program.cs — registro limpo
// ============================================
using EcommerceApi.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddInfrastructure();  // Extension method limpo

var app = builder.Build();
app.MapControllers();
app.Run();

// ============================================
// Fluxo de resolução completo (DI em ação):
// ============================================
// 1. Request chega → ASP.NET Core cria ProdutosController
// 2. ProdutosController precisa de IProdutoService → DI cria ProdutoService
// 3. ProdutoService precisa de IProdutoRepository → DI cria ProdutoRepository
// 4. ProdutoRepository precisa de EcommerceDbContext → DI cria DbContext
// ➡ Tudo encadeado automaticamente, sem um único "new" manual.

// ============================================
// 📄 Services/IProdutoService.cs — Interface de negócio
// ============================================
namespace EcommerceApi.Services;

public interface IProdutoService
{
    Task<List<ProdutoResponse>> ListarAtivosAsync();
    Task<ProdutoResponse?> BuscarPorIdAsync(int id);
    Task<ProdutoResponse> CriarAsync(CriarProdutoRequest request);
}

// ============================================
// 📄 Services/ProdutoService.cs — Implementação
// ============================================
namespace EcommerceApi.Services;

public class ProdutoService : IProdutoService
{
    private readonly IProdutoRepository _repo;

    public ProdutoService(IProdutoRepository repo) // DI injeta o repositório
    {
        _repo = repo;
    }

    public async Task<List<ProdutoResponse>> ListarAtivosAsync()
    {
        List<Produto> produtos = await _repo.BuscarAtivosComEstoqueAsync();
        return produtos.Select(p => new ProdutoResponse(p.Id, p.Nome, p.Preco)).ToList();
    }

    public async Task<ProdutoResponse?> BuscarPorIdAsync(int id)
    {
        Produto? p = await _repo.GetByIdAsync(id);
        return p is null ? null : new ProdutoResponse(p.Id, p.Nome, p.Preco);
    }

    public async Task<ProdutoResponse> CriarAsync(CriarProdutoRequest request)
    {
        Produto novo = new() { Nome = request.Nome, Preco = request.Preco };
        await _repo.AddAsync(novo);
        return new ProdutoResponse(novo.Id, novo.Nome, novo.Preco);
    }
}

// ============================================
// 📄 Controllers/ProdutosController.cs — Controller fino
// ============================================
using Microsoft.AspNetCore.Mvc;
using EcommerceApi.Services;

namespace EcommerceApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    private readonly IProdutoService _service;

    // Controller recebe SERVICE (não repository diretamente)
    public ProdutosController(IProdutoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> Listar()
        => Ok(await _service.ListarAtivosAsync());

    [HttpGet("{id:int}")]
    public async Task<IActionResult> BuscarPorId(int id)
    {
        var produto = await _service.BuscarPorIdAsync(id);
        return produto is not null ? Ok(produto) : NotFound();
    }
}

// Registrar tudo no Extension Method:
// services.AddScoped<IProdutoService, ProdutoService>();
// services.AddScoped<IProdutoRepository, ProdutoRepository>();`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Criar interface IEmailService e implementação SmtpEmailService","Registrar com AddScoped no Program.cs (ou via Extension Method)","Injetar no controller via construtor e verificar que funciona","Registrar múltiplas implementações de INotificador e receber via IEnumerable","Criar Extension Method para organizar registros por camada"],quiz:[{q:"Qual o princípio SOLID que fundamenta a Injeção de Dependência?",options:["Single Responsibility — cada classe faz uma coisa","Dependency Inversion — dependa de abstrações (interfaces), não de implementações concretas; classes declaram dependências no construtor em vez de criar com new","Open/Closed — aberto para extensão, fechado para modificação","Liskov Substitution — substituir tipo base pelo derivado"],answer:1,explanation:"O D do SOLID: Dependency Inversion Principle. Classes de alto nível não devem depender de classes de baixo nível — ambas dependem de abstrações. DI é o mecanismo que implementa esse princípio na prática."},{q:"Como receber todas as implementações de uma interface no construtor?",options:["Declarar cada implementação como parâmetro separado","Usar IEnumerable<INotificador> no construtor — o container injeta todas as implementações registradas daquela interface","Usar GetServices() dentro do construtor","Não é possível — apenas 1 implementação por interface"],answer:1,explanation:"Ao registrar múltiplas implementações (AddScoped<INotificador, EmailNotificador>(), AddScoped<INotificador, SmsNotificador>()), injete IEnumerable<INotificador> para receber todas. Útil para Strategy pattern e notificações multi-canal."},{q:"O que acontece se você tentar injetar IEmailService sem registrá-lo no container?",options:["O ASP.NET Core cria uma instância padrão automaticamente",'InvalidOperationException em runtime: "Unable to resolve service for type IEmailService" — o container não sabe qual implementação fornecer',"A propriedade fica null mas não dá erro","Erro de compilação"],answer:1,explanation:"O container DI do .NET só resolve tipos registrados explicitamente. Sem registro, ao tentar instanciar o controller que depende de IEmailService, lança InvalidOperationException. O erro aparece no primeiro request que ativa esse controller."}]},{id:"m8t2",moduleId:"m8",title:"Lifetimes: Transient, Scoped, Singleton",theory:`Lifetimes definem por quanto tempo o container mantém a instância de um serviço. Escolher o lifetime errado pode causar bugs sutis, memory leaks ou compartilhamento indevido de estado. No ASP.NET Core existem 3 lifetimes, e entender cada um é a diferença entre sistema estável e caos em produção.

Transient: nova instância TODA vez que alguém pede. Se 3 serviços dependem de IValidador, cada um recebe uma instância diferente. Use para serviços leves e sem estado (validadores, formatadores, factories). Cuidado: se o serviço aloca recursos (conexões, arquivos), Transient pode ser wasteful.

Scoped: uma instância por "escopo" — no ASP.NET Core, escopo = requisição HTTP. Todos os serviços dentro da mesma request recebem a mesma instância. DbContext DEVE ser Scoped: compartilha Change Tracking dentro da request, mas isola entre requests paralelas. Scoped é o lifetime mais usado em APIs.

Singleton: uma única instância para toda a aplicação. Criada na primeira resolução e reutilizada até o app parar. Use para serviços thread-safe e imutáveis: IConfiguration, IMemoryCache, HttpClient (via IHttpClientFactory). NUNCA registre serviço com estado mutável como Singleton em app multi-thread.

A regra de ouro sobre captive dependencies: um serviço de lifetime mais longo NÃO pode depender de um lifetime mais curto. Singleton não pode injetar Scoped (o Scoped ficaria "preso" como Singleton → bugs de concorrência). Scoped pode injetar Transient. Transient pode injetar ambos. O ASP.NET Core lança InvalidOperationException para captive Scoped em Singleton (em Development).

Para depurar lifetimes, o ValidateScopes está habilitado por padrão em Development. Ele detecta captive dependencies. Em Production é desabilitado por performance. Você pode forçar com builder.Host.UseDefaultServiceProvider(o => { o.ValidateScopes = true; o.ValidateOnBuild = true; }); — ValidateOnBuild verifica se TODOS os registros podem ser resolvidos antes do app iniciar.`,code:`// Lifetimes: Transient, Scoped, Singleton — ASP.NET Core 8

// ============================================
// 📄 Services/LifetimeDemo.cs — Demonstrando lifetimes
// ============================================
namespace EcommerceApi.Services;

/// <summary>
/// Cada serviço gera um ID único para demonstrar quando
/// novas instâncias são criadas vs reutilizadas.
/// </summary>
public interface IOperationTransient
{
    Guid OperationId { get; }
}

public interface IOperationScoped
{
    Guid OperationId { get; }
}

public interface IOperationSingleton
{
    Guid OperationId { get; }
}

public class Operation : IOperationTransient, IOperationScoped, IOperationSingleton
{
    public Guid OperationId { get; } = Guid.NewGuid();
}

// ============================================
// 📄 Registro no Program.cs
// ============================================
// builder.Services.AddTransient<IOperationTransient, Operation>();
// builder.Services.AddScoped<IOperationScoped, Operation>();
// builder.Services.AddSingleton<IOperationSingleton, Operation>();

// builder.Host.UseDefaultServiceProvider(options =>
// {
//     options.ValidateScopes = true;
//     options.ValidateOnBuild = true; // Valida todos os registros no startup
// });

// ============================================
// 📄 Controllers/LifetimeController.cs
// ============================================
using Microsoft.AspNetCore.Mvc;

namespace EcommerceApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LifetimeController : ControllerBase
{
    private readonly IOperationTransient _transient1;
    private readonly IOperationTransient _transient2;
    private readonly IOperationScoped _scoped1;
    private readonly IOperationScoped _scoped2;
    private readonly IOperationSingleton _singleton1;
    private readonly IOperationSingleton _singleton2;

    public LifetimeController(
        IOperationTransient transient1,
        IOperationTransient transient2,  // Diferente do transient1!
        IOperationScoped scoped1,
        IOperationScoped scoped2,        // IGUAL ao scoped1 (mesma request)
        IOperationSingleton singleton1,
        IOperationSingleton singleton2)  // IGUAL ao singleton1 (sempre)
    {
        _transient1 = transient1;
        _transient2 = transient2;
        _scoped1 = scoped1;
        _scoped2 = scoped2;
        _singleton1 = singleton1;
        _singleton2 = singleton2;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            Transient = new
            {
                Id1 = _transient1.OperationId,
                Id2 = _transient2.OperationId,
                Iguais = _transient1.OperationId == _transient2.OperationId
                // false — cada resolução = nova instância
            },
            Scoped = new
            {
                Id1 = _scoped1.OperationId,
                Id2 = _scoped2.OperationId,
                Iguais = _scoped1.OperationId == _scoped2.OperationId
                // true — mesma instância dentro da request
            },
            Singleton = new
            {
                Id1 = _singleton1.OperationId,
                Id2 = _singleton2.OperationId,
                Iguais = _singleton1.OperationId == _singleton2.OperationId
                // true — mesma instância SEMPRE (entre requests)
            }
        });
    }
}

// ============================================
// ❌ CAPTIVE DEPENDENCY — Singleton segura Scoped
// ============================================
// public class MeuSingleton
// {
//     private readonly IOperationScoped _scoped; // BUG!
//     public MeuSingleton(IOperationScoped scoped)
//     {
//         _scoped = scoped; // Scoped preso dentro de Singleton
//         // ValidateScopes detecta e lança InvalidOperationException em Dev
//     }
// }

// ============================================
// ✅ Tabela de Referência Rápida
// ============================================
// Lifetime    | Instância por...  | Usar para
// ------------|-------------------|----------------------------------
// Transient   | Cada resolução    | Leves, sem estado (validadores)
// Scoped      | Request HTTP      | DbContext, repositórios, UnitOfWork
// Singleton   | Aplicação inteira | Cache, config, HttpClientFactory`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Registrar 3 serviços com Transient, Scoped e Singleton","Criar endpoint que mostra os OperationIds e confirma qual é igual/diferente","Chamar o endpoint 2 vezes e verificar: Singleton mantém o ID, Scoped muda entre requests","Forçar um captive dependency (Singleton → Scoped) e ver o erro do ValidateScopes","Habilitar ValidateOnBuild e confirmar que todos os registros são resolvíveis no startup"],quiz:[{q:"Qual lifetime é obrigatório para o DbContext e por quê?",options:["Singleton — melhor performance por ter 1 instância","Scoped — 1 instância por request HTTP; garante que todas as operações da request compartilhem o Change Tracking sem conflito entre requests paralelas","Transient — cada repositório precisa de seu próprio DbContext","Qualquer lifetime funciona igualmente"],answer:1,explanation:"Scoped: dentro de uma request, todos os serviços compartilham o mesmo DbContext (mesmo Change Tracking, mesma transação implícita). Entre requests, instâncias separadas (thread-safety). Singleton = bugs de concorrência. Transient = Change Tracking fragmentado."},{q:"O que é uma captive dependency e qual o risco?",options:["Uma dependência que não foi registrada",'Quando um Singleton injeta um Scoped — o Scoped fica "preso" com lifetime de Singleton, sendo compartilhado entre requests paralelas, gerando bugs de concorrência',"Quando dois serviços dependem um do outro (circular)","Uma dependência que consome muita memória"],answer:1,explanation:'Captive dependency: lifetime mais longo captura lifetime mais curto. Ex: Singleton segura Scoped → o "Scoped" vive para sempre como Singleton, compartilhado entre threads. ValidateScopes detecta em Development e lança InvalidOperationException.'},{q:"No código, por que _transient1.OperationId != _transient2.OperationId mas _scoped1.OperationId == _scoped2.OperationId?",options:["É um bug no código","Transient cria nova instância a cada resolução (IDs diferentes); Scoped reutiliza a mesma instância dentro do escopo da request (IDs iguais)","Scoped copia o ID do primeiro Transient","A comparação de Guid sempre retorna true"],answer:1,explanation:"Cada AddTransient resolve para new Operation() — Guid.NewGuid() gera IDs diferentes. AddScoped resolve para a MESMA instância dentro do escopo da request HTTP — ambos apontam para o mesmo objeto, mesmo Guid."}]},{id:"m8t3",moduleId:"m8",title:"Repository Pattern com DI",theory:`Repository Pattern abstrai o acesso a dados atrás de uma interface, desacoplando a lógica de negócio do banco de dados. Combinado com DI, permite trocar a implementação (EF Core, Dapper, mock) sem alterar os controllers ou serviços que consomem. Em projetos corporativos, é o padrão mais adotado para organizar o acesso a dados.

A interface IRepository<T> define operações genéricas: GetByIdAsync, GetAllAsync, AddAsync, UpdateAsync, DeleteAsync. Implementações específicas (ProdutoRepository) adicionam queries particulares. O controller ou service depende da interface — nunca da implementação concreta. Isso facilita testes unitários com mocks.

Unit of Work complementa Repository: garante que múltiplas operações em repositórios diferentes sejam salvas em uma única transação. O DbContext do EF Core já é um Unit of Work nativo (SaveChangesAsync salva tudo), mas o padrão explícito com IUnitOfWork oferece controle fino e abstração do ORM.

O registro no DI segue a convenção: interfaces no projeto de domínio/aplicação, implementações no projeto de infraestrutura. builder.Services.AddScoped<IProdutoRepository, ProdutoRepository>(). Em projetos grandes, use Scrutor para auto-scan: services.Scan(s => s.FromAssemblyOf<ProdutoRepository>().AddClasses().AsImplementedInterfaces().WithScopedLifetime()).

Os service classes (ProdutoService, PedidoService) orquestram lógica de negócio usando repositórios. Controllers ficam finos: recebem request, chamam service, retornam response. Services ficam médios: validam, orquestram, delegam para repositórios. Repositórios ficam focados: apenas queries e persistência.

Cuidado com o "repository genérico puro" que apenas encapsula DbSet sem agregar valor. Se IRepository<T> só expõe IQueryable e força o consumidor a montar queries LINQ complexas, você apenas adicionou uma camada sem benefício. Repositories devem encapsular QUERIES COMPLEXAS com nomes semânticos: BuscarAtivosComEstoque(), RelatorioVendasMensal().`,code:`// Repository Pattern com DI — ASP.NET Core 8 + EF Core

// ============================================
// 📄 Repositories/IRepository.cs — Interface genérica
// ============================================
namespace EcommerceApi.Repositories;

public interface IRepository<T> where T : class
{
    Task<T?> GetByIdAsync(int id);
    Task<List<T>> GetAllAsync();
    Task AddAsync(T entity);
    void Update(T entity);
    void Delete(T entity);
}

// ============================================
// 📄 Repositories/IProdutoRepository.cs — Específica
// ============================================
using EcommerceApi.Models;

namespace EcommerceApi.Repositories;

public interface IProdutoRepository : IRepository<Produto>
{
    Task<List<Produto>> BuscarAtivosComEstoqueAsync();
    Task<List<Produto>> BuscarPorCategoriaAsync(int categoriaId);
    Task<(List<ProdutoResumoDto> Itens, int Total)> ListarPaginadoAsync(
        int pagina, int tamanhoPagina, string? filtro = null);
}

// ============================================
// 📄 Repositories/IUnitOfWork.cs — Transação única
// ============================================
namespace EcommerceApi.Repositories;

public interface IUnitOfWork : IDisposable
{
    IProdutoRepository Produtos { get; }
    ICategoriaRepository Categorias { get; }
    Task<int> SaveChangesAsync(CancellationToken ct = default);
}

// ============================================
// 📄 Repositories/ProdutoRepository.cs — Implementação
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Data;
using EcommerceApi.Models;

namespace EcommerceApi.Repositories;

public class ProdutoRepository : IProdutoRepository
{
    private readonly EcommerceDbContext _context;

    public ProdutoRepository(EcommerceDbContext context)
    {
        _context = context;
    }

    public async Task<Produto?> GetByIdAsync(int id)
        => await _context.Produtos.FindAsync(id);

    public async Task<List<Produto>> GetAllAsync()
        => await _context.Produtos.AsNoTracking().ToListAsync();

    public async Task AddAsync(Produto entity)
        => await _context.Produtos.AddAsync(entity);

    public void Update(Produto entity)
        => _context.Produtos.Update(entity);

    public void Delete(Produto entity)
        => _context.Produtos.Remove(entity);

    // Queries semânticas — encapsulam lógica de acesso a dados
    public async Task<List<Produto>> BuscarAtivosComEstoqueAsync()
    {
        return await _context.Produtos
            .AsNoTracking()
            .Where(p => p.Ativo && p.Estoque > 0)
            .Include(p => p.Categoria)
            .OrderBy(p => p.Nome)
            .ToListAsync();
    }

    public async Task<List<Produto>> BuscarPorCategoriaAsync(int categoriaId)
    {
        return await _context.Produtos
            .AsNoTracking()
            .Where(p => p.CategoriaId == categoriaId && p.Ativo)
            .OrderBy(p => p.Nome)
            .ToListAsync();
    }

    public async Task<(List<ProdutoResumoDto> Itens, int Total)> ListarPaginadoAsync(
        int pagina, int tamanhoPagina, string? filtro = null)
    {
        IQueryable<Produto> query = _context.Produtos
            .AsNoTracking()
            .Where(p => p.Ativo);

        if (!string.IsNullOrWhiteSpace(filtro))
            query = query.Where(p => p.Nome.Contains(filtro));

        int total = await query.CountAsync();

        List<ProdutoResumoDto> itens = await query
            .OrderBy(p => p.Nome)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .Select(p => new ProdutoResumoDto(p.Id, p.Nome, p.Preco, p.Categoria.Nome))
            .ToListAsync();

        return (itens, total);
    }
}

// ============================================
// 📄 UnitOfWork.cs — Implementação
// ============================================
using EcommerceApi.Data;

namespace EcommerceApi.Repositories;

public class UnitOfWork : IUnitOfWork
{
    private readonly EcommerceDbContext _context;

    public UnitOfWork(EcommerceDbContext context)
    {
        _context = context;
        Produtos = new ProdutoRepository(context);
        Categorias = new CategoriaRepository(context);
    }

    public IProdutoRepository Produtos { get; }
    public ICategoriaRepository Categorias { get; }

    public async Task<int> SaveChangesAsync(CancellationToken ct = default)
        => await _context.SaveChangesAsync(ct);

    public void Dispose() => _context.Dispose();
}

// ============================================
// 📄 Registro no DI — Extensions/RepositoryExtensions.cs
// ============================================
// public static IServiceCollection AddRepositories(this IServiceCollection services)
// {
//     services.AddScoped<IProdutoRepository, ProdutoRepository>();
//     services.AddScoped<ICategoriaRepository, CategoriaRepository>();
//     services.AddScoped<IUnitOfWork, UnitOfWork>();
//     return services;
// }`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Criar IRepository<T> genérico com operações CRUD","Criar IProdutoRepository com queries semânticas (BuscarAtivosComEstoqueAsync)","Implementar ProdutoRepository usando EF Core","Criar IUnitOfWork e implementação com SaveChangesAsync","Registrar no DI como Scoped e injetar em um controller"],quiz:[{q:"Qual o principal benefício do Repository Pattern combinado com DI?",options:["Performance — repositories são mais rápidos que DbContext direto","Desacoplamento — controllers dependem da interface (IProdutoRepository), não da implementação; permite trocar ORM ou usar mocks em testes sem alterar lógica de negócio","Segurança — repositories impedem SQL Injection","Repositories eliminam a necessidade de DbContext"],answer:1,explanation:"Repository + DI: o controller depende de IProdutoRepository. Em produção, o DI injeta ProdutoRepository (EF Core). Em testes, injeta MockProdutoRepository. Para trocar de EF Core para Dapper, crie nova implementação e mude o registro no DI."},{q:"Qual o problema de um repositório genérico que apenas expõe IQueryable<T>?",options:["IQueryable não funciona com EF Core","Expor IQueryable vaza a abstração — consumidores montam queries LINQ complexas, acoplando-se ao ORM; o repository não encapsula nada, é só uma camada extra sem valor","IQueryable é mais lento que List","Não há problema — é a melhor prática"],answer:1,explanation:"Repository deve encapsular queries complexas com nomes semânticos (BuscarAtivosComEstoque). Expor IQueryable força o consumidor a montar LINQ = acoplamento ao EF Core. Ao trocar para Dapper, precisaria reescrever todo consumidor que usa IQueryable."},{q:"O que acontece se em vez de IUnitOfWork.SaveChangesAsync() cada repository tiver seu próprio SaveChanges?",options:["Funciona da mesma forma","Cada Save cria uma transação separada — se o segundo falha após o primeiro ter sucesso, os dados ficam inconsistentes (metade salva, metade não)","O EF Core previne isso automaticamente","SaveChanges por repository é mais rápido"],answer:1,explanation:"Unit of Work agrupa operações em uma única transação: produtos.Add + categorias.Update + unitOfWork.SaveChangesAsync() = 1 transação. Com Save separado por repository, cada um é uma transação independente → inconsistência se um falha."}]},{id:"m8t4",moduleId:"m8",title:"Options Pattern e Configuração",theory:`Options Pattern é a forma padrão do ASP.NET Core para acessar configurações tipadas. Em vez de ler strings avulsas com Configuration["Smtp:Host"], você define uma classe fortemente tipada (SmtpSettings) e o framework popula automaticamente a partir do appsettings.json. Type-safety, IntelliSense e validação inclusos.

O registro usa builder.Services.Configure<SmtpSettings>(builder.Configuration.GetSection("Smtp")). O ASP.NET Core lê a seção "Smtp" do appsettings.json, mapeia para as propriedades de SmtpSettings e disponibiliza via DI. No serviço, injete IOptions<SmtpSettings> para acessar .Value.

IOptions<T> vs IOptionsSnapshot<T> vs IOptionsMonitor<T>: IOptions é Singleton (lê 1 vez no startup, nunca muda). IOptionsSnapshot é Scoped (relê a cada request — suporta hot reload). IOptionsMonitor é Singleton mas com callback OnChange (reage a mudanças em tempo real). Para APIs, IOptionsSnapshot é o mais seguro.

Validação com DataAnnotations + ValidateOnStart garante que configurações inválidas sejam detectadas no startup, não no primeiro request: builder.Services.AddOptions<SmtpSettings>().Bind(config.GetSection("Smtp")).ValidateDataAnnotations().ValidateOnStart(). Se [Required] Host estiver vazio, o app não inicia — fail fast.

Named Options permitem múltiplas instâncias da mesma configuração: builder.Services.Configure<ApiSettings>("GitHub", ...) e builder.Services.Configure<ApiSettings>("Jira", ...). No serviço, use IOptionsSnapshot<ApiSettings> e acesse com options.Get("GitHub"). Útil para integrar com múltiplas APIs externas.

O precedence de configuração no ASP.NET Core é: appsettings.json → appsettings.{Environment}.json → User Secrets (dev) → Environment Variables → Command Line. Variáveis de ambiente sobrescrevem appsettings, permitindo que a mesma imagem Docker funcione em dev, staging e prod apenas mudando env vars.`,code:`// Options Pattern e Configuração — ASP.NET Core 8

// ============================================
// 📄 Settings/SmtpSettings.cs — Classe de configuração
// ============================================
using System.ComponentModel.DataAnnotations;

namespace EcommerceApi.Settings;

public class SmtpSettings
{
    public const string SectionName = "Smtp";

    [Required(ErrorMessage = "Host SMTP é obrigatório")]
    public string Host { get; set; } = string.Empty;

    [Range(1, 65535, ErrorMessage = "Porta inválida")]
    public int Port { get; set; } = 587;

    [Required, EmailAddress]
    public string FromEmail { get; set; } = string.Empty;

    public string? FromName { get; set; }
    public string? Username { get; set; }
    public string? Password { get; set; }
    public bool UseSsl { get; set; } = true;
}

// ============================================
// 📄 Settings/DatabaseSettings.cs
// ============================================
namespace EcommerceApi.Settings;

public class DatabaseSettings
{
    public const string SectionName = "Database";

    [Required(ErrorMessage = "ConnectionString é obrigatória")]
    public string ConnectionString { get; set; } = string.Empty;

    [Range(1, 300)]
    public int CommandTimeoutSeconds { get; set; } = 30;

    public bool EnableSensitiveDataLogging { get; set; } = false;
}

// ============================================
// 📄 Settings/PaginacaoSettings.cs
// ============================================
namespace EcommerceApi.Settings;

public class PaginacaoSettings
{
    public const string SectionName = "Paginacao";

    [Range(1, 100)]
    public int TamanhoPadrao { get; set; } = 20;

    [Range(1, 500)]
    public int TamanhoMaximo { get; set; } = 100;
}

// ============================================
// 📄 appsettings.json — Configurações tipadas
// ============================================
// {
//   "Database": {
//     "ConnectionString": "Server=localhost;Database=EcommerceDb;Trusted_Connection=true",
//     "CommandTimeoutSeconds": 30,
//     "EnableSensitiveDataLogging": false
//   },
//   "Smtp": {
//     "Host": "smtp.empresa.com",
//     "Port": 587,
//     "FromEmail": "noreply@empresa.com",
//     "FromName": "E-commerce",
//     "UseSsl": true
//   },
//   "Paginacao": {
//     "TamanhoPadrao": 20,
//     "TamanhoMaximo": 100
//   }
// }

// ============================================
// 📄 appsettings.Development.json — sobrescreve apenas o necessário
// ============================================
// {
//   "Database": {
//     "EnableSensitiveDataLogging": true
//   }
// }

// ============================================
// 🔐 User Secrets — para dados sensíveis em DEV
// ============================================
// Inicializar User Secrets no projeto:
// $ dotnet user-secrets init
//
// Guardar a connection string (NÃO fica no appsettings):
// $ dotnet user-secrets set "Database:ConnectionString" "Server=localhost;Database=EcommerceDb;Trusted_Connection=true;TrustServerCertificate=true"
// $ dotnet user-secrets set "Smtp:Password" "senha-do-smtp-aqui"
//
// Listar secrets configurados:
// $ dotnet user-secrets list
//
// Precedência (menor → maior):
// appsettings.json < appsettings.Development.json < User Secrets < Env Vars < CLI

// ============================================
// 📄 Program.cs — Registro com validação no startup
// ============================================
using EcommerceApi.Settings;

var builder = WebApplication.CreateBuilder(args);

// Configure + Validação + ValidateOnStart = fail fast
builder.Services
    .AddOptions<DatabaseSettings>()
    .Bind(builder.Configuration.GetSection(DatabaseSettings.SectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services
    .AddOptions<SmtpSettings>()
    .Bind(builder.Configuration.GetSection(SmtpSettings.SectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart(); // Se Host vazio → app NÃO inicia

builder.Services
    .AddOptions<PaginacaoSettings>()
    .Bind(builder.Configuration.GetSection(PaginacaoSettings.SectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart();

// ... resto do Program.cs

// ============================================
// 📄 Services/SmtpEmailService.cs — Usando IOptions
// ============================================
using Microsoft.Extensions.Options;
using EcommerceApi.Settings;

namespace EcommerceApi.Services;

public class SmtpEmailService : IEmailService
{
    private readonly SmtpSettings _settings;
    private readonly ILogger<SmtpEmailService> _logger;

    // IOptionsSnapshot: relê config a cada request (suporta hot reload)
    public SmtpEmailService(
        IOptionsSnapshot<SmtpSettings> options,
        ILogger<SmtpEmailService> logger)
    {
        _settings = options.Value;
        _logger = logger;
    }

    public async Task EnviarAsync(string para, string assunto, string corpo)
    {
        _logger.LogInformation(
            "Enviando email via {Host}:{Port} de {From}",
            _settings.Host, _settings.Port, _settings.FromEmail);

        // Em produção: usar SmtpClient ou MailKit
        await Task.CompletedTask;
    }
}

// ============================================
// 📄 Repositories/ProdutoRepository.cs — usando PaginacaoSettings
// ============================================
// public class ProdutoRepository
// {
//     private readonly EcommerceDbContext _context;
//     private readonly PaginacaoSettings _paginacao;
//
//     public ProdutoRepository(
//         EcommerceDbContext context,
//         IOptions<PaginacaoSettings> paginacao)
//     {
//         _context = context;
//         _paginacao = paginacao.Value;
//     }
//
//     public async Task<List<Produto>> ListarPaginadoAsync(int pagina, int? tamanhoPagina)
//     {
//         int tamanho = Math.Min(
//             tamanhoPagina ?? _paginacao.TamanhoPadrao,
//             _paginacao.TamanhoMaximo);
//
//         return await _context.Produtos
//             .Skip((pagina - 1) * tamanho)
//             .Take(tamanho)
//             .ToListAsync();
//     }
// }

// ============================================
// 📄 Sobrescrevendo com variáveis de ambiente (Docker)
// ============================================
// No Docker Compose ou Kubernetes:
// environment:
//   - Database__ConnectionString=Server=db-prod;Database=EcommerceDb;...
//   - Smtp__Host=smtp.prod.empresa.com
//   - Smtp__Port=465
//
// __ (duplo underscore) = : (separador de seção)
// Env vars sobrescrevem appsettings.json automaticamente!`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Criar DatabaseSettings, SmtpSettings e PaginacaoSettings com DataAnnotations","Registrar com AddOptions + Bind + ValidateOnStart no Program.cs","Configurar User Secrets: dotnet user-secrets init && dotnet user-secrets set Database:ConnectionString ...","Injetar IOptions<PaginacaoSettings> no repositório e usar TamanhoPadrao/TamanhoMaximo","Sobrescrever configuração via variável de ambiente (Database__ConnectionString) e confirmar precedência"],quiz:[{q:"Qual a diferença entre IOptions<T>, IOptionsSnapshot<T> e IOptionsMonitor<T>?",options:["São idênticos — apenas aliases diferentes","IOptions = Singleton (lê 1 vez); IOptionsSnapshot = Scoped (relê a cada request, suporta hot reload); IOptionsMonitor = Singleton com callback OnChange para reagir a mudanças em tempo real","IOptionsMonitor é deprecado no .NET 8","IOptions suporta hot reload; IOptionsSnapshot não"],answer:1,explanation:"IOptions: Singleton, valor fixo no startup. IOptionsSnapshot: Scoped, relê config a cada request (hot reload). IOptionsMonitor: Singleton mas tem .CurrentValue que atualiza + callback OnChange. Para APIs, IOptionsSnapshot é o mais usado."},{q:"O que ValidateOnStart faz ao registrar Options?",options:["Valida apenas na primeira request","Executa as validações (DataAnnotations) no startup — se falhar, o app NÃO inicia; fail fast garante que configuração inválida seja detectada imediatamente","Valida o JSON do appsettings.json quanto à sintaxe","Desativa a validação em produção para performance"],answer:1,explanation:"ValidateOnStart roda as validações (DataAnnotations, custom) durante a inicialização da aplicação. Se [Required] Host está vazio, OptionsValidationException é lançada e o app para. Melhor descobrir no deploy do que no primeiro request."},{q:"Como variáveis de ambiente sobrescrevem appsettings.json? Ex: seção Smtp.Host",options:["Não é possível sobrescrever com env vars","Variável Smtp__Host (__ = separador de seção) sobrescreve Smtp:Host do appsettings.json; env vars têm precedência mais alta na hierarquia de configuração","Precisa de código especial para ler env vars","Env vars só funcionam no Linux"],answer:1,explanation:"ASP.NET Core lê configuração em ordem de precedência: appsettings.json → appsettings.{Env}.json → User Secrets → Env Vars → CLI. Env vars sobrescrevem appsettings. Separador de seção: __ (duplo underscore). Padrão para Docker/K8s."}]},{id:"m8proj",moduleId:"m8",title:"🛒 Projeto: API E-commerce Completa",theory:`Este é o projeto final da Fase 2, integrando TODOS os conceitos aprendidos nos módulos 5 a 8. Você vai construir uma API REST completa de e-commerce de verdade — não um tutorial simplificado, mas uma estrutura corporativa real com separação em camadas, boas práticas e código pronto para evolução.

A arquitetura segue Clean Architecture simplificada, organizada em 4 camadas: Domain (entidades e interfaces), Application (serviços e DTOs), Infrastructure (EF Core, repositórios, configurações) e API (controllers, middlewares, Program.cs). Cada camada é uma pasta dentro do projeto — em projetos maiores, seriam projetos separados (.csproj).

O projeto implementa: CRUD completo de Produtos e Pedidos com validação, Entity Framework Core com SQL Server e migrations reais, Repository Pattern com injeção de dependências, middlewares de logging e tratamento global de erros, Swagger com documentação XML, e configurações tipadas com Options Pattern.

O fluxo de um request é: HTTP → Middleware de logging → Middleware de exceção → Controller (fino) → Service (lógica de negócio) → Repository (acesso a dados) → DbContext (EF Core) → SQL Server. Cada camada tem responsabilidade única e é testável isoladamente graças ao DI.

Para controle de versão, usamos GitFlow: main (produção), develop (integração), feature/produtos, feature/pedidos, feature/middlewares. Cada feature branch contém um grupo de funcionalidades, com PR e code review antes do merge. O release final integra tudo.

Este projeto é o portfólio que demonstra domínio de: ASP.NET Core Web API, EF Core com SQL Server, padrões de projeto (Repository, Unit of Work, DI), boas práticas corporativas (logging, error handling, validation, Swagger). É exatamente o tipo de projeto que empresas esperam ver em candidatos .NET.`,code:`// 🛒 Projeto Final Fase 2: API E-commerce Completa
// Estrutura de pastas corporativa (Clean Architecture simplificada)

// ============================================
// 📁 Estrutura do projeto
// ============================================
// EcommerceApi/
// ├── Properties/
// │   └── launchSettings.json
// ├── Domain/                          ← Entidades e interfaces
// │   ├── Entities/
// │   │   ├── Produto.cs
// │   │   ├── Categoria.cs
// │   │   ├── Pedido.cs
// │   │   ├── ItemPedido.cs
// │   │   └── Cliente.cs
// │   └── Interfaces/
// │       ├── IRepository.cs
// │       ├── IProdutoRepository.cs
// │       ├── IPedidoRepository.cs
// │       └── IUnitOfWork.cs
// ├── Application/                     ← Lógica de negócio
// │   ├── DTOs/
// │   │   ├── ProdutoDto.cs
// │   │   └── PedidoDto.cs
// │   └── Services/
// │       ├── IProdutoService.cs
// │       ├── ProdutoService.cs
// │       ├── IPedidoService.cs
// │       └── PedidoService.cs
// ├── Infrastructure/                  ← Acesso a dados
// │   ├── Data/
// │   │   ├── EcommerceDbContext.cs
// │   │   └── Configurations/
// │   │       ├── ProdutoConfiguration.cs
// │   │       ├── CategoriaConfiguration.cs
// │   │       ├── PedidoConfiguration.cs
// │   │       └── ClienteConfiguration.cs
// │   ├── Repositories/
// │   │   ├── ProdutoRepository.cs
// │   │   ├── PedidoRepository.cs
// │   │   └── UnitOfWork.cs
// │   └── Extensions/
// │       └── ServiceCollectionExtensions.cs
// ├── API/                             ← Controllers e Middlewares
// │   ├── Controllers/
// │   │   ├── ProdutosController.cs
// │   │   ├── PedidosController.cs
// │   │   └── HealthController.cs
// │   └── Middlewares/
// │       ├── RequestLoggingMiddleware.cs
// │       └── ExceptionHandlingMiddleware.cs
// ├── Settings/
// │   ├── DatabaseSettings.cs
// │   ├── SmtpSettings.cs
// │   └── PaginacaoSettings.cs
// ├── Migrations/
// │   └── (geradas pelo EF Core)
// ├── Program.cs                       ← Composição raiz
// ├── appsettings.json
// ├── appsettings.Development.json
// └── EcommerceApi.csproj

// ============================================
// 📄 Program.cs — Composição raiz (integra tudo)
// ============================================
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Infrastructure.Data;
using EcommerceApi.Infrastructure.Extensions;
using EcommerceApi.API.Middlewares;
using EcommerceApi.Settings;

var builder = WebApplication.CreateBuilder(args);

// ── Configurações tipadas ──
builder.Services
    .AddOptions<DatabaseSettings>()
    .Bind(builder.Configuration.GetSection("Database"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services
    .AddOptions<PaginacaoSettings>()
    .Bind(builder.Configuration.GetSection("Paginacao"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

// ── EF Core + SQL Server ──
builder.Services.AddDbContext<EcommerceDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration["Database:ConnectionString"],
        sql => sql.CommandTimeout(30)));

// ── Repositórios + Serviços (Extension Method) ──
builder.Services.AddInfrastructure();
builder.Services.AddApplicationServices();

// ── Controllers + Swagger ──
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "E-commerce API",
        Version = "v1",
        Description = "API completa — Projeto Final Fase 2"
    });
    // Inclui comentários XML na documentação Swagger
    string xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    string xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    if (File.Exists(xmlPath))
        options.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

// ── Pipeline HTTP (ordem importa!) ──
app.UseMiddleware<ExceptionHandlingMiddleware>();  // 1. Captura exceções
app.UseMiddleware<RequestLoggingMiddleware>();      // 2. Loga requests

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();

// ============================================
// 📄 EcommerceApi.csproj — packages do projeto completo
// ============================================
// <Project Sdk="Microsoft.NET.Sdk.Web">
//   <PropertyGroup>
//     <TargetFramework>net8.0</TargetFramework>
//     <Nullable>enable</Nullable>
//     <ImplicitUsings>enable</ImplicitUsings>
//     <GenerateDocumentationFile>true</GenerateDocumentationFile>
//   </PropertyGroup>
//   <ItemGroup>
//     <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.10" />
//     <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="8.0.10" />
//     <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />
//   </ItemGroup>
// </Project>

// ============================================
// 📄 Extensions/ServiceCollectionExtensions.cs
// ============================================
// public static class ServiceCollectionExtensions
// {
//     public static IServiceCollection AddInfrastructure(this IServiceCollection services)
//     {
//         services.AddScoped<IProdutoRepository, ProdutoRepository>();
//         services.AddScoped<IPedidoRepository, PedidoRepository>();
//         services.AddScoped<IUnitOfWork, UnitOfWork>();
//         return services;
//     }
//
//     public static IServiceCollection AddApplicationServices(this IServiceCollection services)
//     {
//         services.AddScoped<IProdutoService, ProdutoService>();
//         services.AddScoped<IPedidoService, PedidoService>();
//         return services;
//     }
// }

// ============================================
// 🌿 GitFlow — branches do projeto
// ============================================
// $ git flow init
// $ git flow feature start produtos
// (implementa CRUD de Produtos + migrations)
// $ git flow feature finish produtos
//
// $ git flow feature start pedidos
// (implementa CRUD de Pedidos + validação de estoque)
// $ git flow feature finish pedidos
//
// $ git flow feature start middlewares
// (adiciona logging + error handling)
// $ git flow feature finish middlewares
//
// $ git flow release start v1.0.0
// (testes finais, ajustes de configuração)
// $ git flow release finish v1.0.0`,codeLanguage:"csharp",runCommand:"dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi && dotnet run",checklist:["Criar o projeto do zero seguindo a estrutura de pastas indicada (Domain, Application, Infrastructure, API)","Implementar CRUD completo de Produtos com DTOs, Service e Repository","Implementar endpoints de Pedidos com validação de estoque no Service","Rodar todas as migrations e verificar o banco no Azure Data Studio","Fazer o commit final com GitFlow: git flow release start v1.0.0 && git flow release finish v1.0.0"],quiz:[{q:"Em Clean Architecture, qual camada deve conter a lógica de negócio (validação de estoque, cálculo de total)?",options:["Controller — é o ponto de entrada do request","Application/Services — orquestra lógica de negócio, recebe DTOs e delega acesso a dados para os repositórios","Infrastructure/Repositories — onde ficam as queries","Domain/Entities — as entidades sabem tudo sobre si mesmas"],answer:1,explanation:"A camada Application contém os Services que orquestram a lógica de negócio. Controllers são finos (validam input e retornam response). Repositories são focados em persistência. Entities contêm regras do domínio (invariantes), mas a orquestração fica nos Services."},{q:"Por que usar Repository Pattern neste projeto se o EF Core já é um ORM completo?",options:["Repository é obrigatório — sem ele o EF Core não funciona","Repository abstrai o acesso a dados atrás de interfaces, permitindo: trocar ORM sem alterar Services, usar mocks em testes unitários, encapsular queries complexas com nomes semânticos","Para adicionar mais camadas e código — quanto mais camadas, melhor","Repository é mais rápido que usar DbContext diretamente"],answer:1,explanation:"Repository + DI: Services dependem de IProdutoRepository (abstração). Em produção: EF Core. Em testes: mock. Se trocar para Dapper, cria nova implementação sem alterar Services. Queries complexas ficam encapsuladas com nomes legíveis."},{q:"Como garantir que as migrations rodem em produção de forma segura?",options:["Chamar Database.Migrate() no Program.cs — aplica automaticamente","Gerar script SQL com dotnet ef migrations script --idempotent, revisar com DBA, fazer backup do banco e executar o script manualmente ou via pipeline CI/CD","Migrations são apenas para desenvolvimento — em produção cria tabelas manualmente","O EF Core aplica migrations automaticamente em produção"],answer:1,explanation:"Em produção NUNCA aplique migrations automaticamente. Gere o script SQL (--idempotent para re-executar com segurança), passe por code review + DBA review, faça backup, aplique em staging primeiro e depois em produção via pipeline CI/CD controlada."}]}]},up=[sp,cp,lp,dp],mp={id:"m10",title:"Princípios SOLID",icon:"🏛️",week:"Semana 10",color:"#8B5CF6",topics:[{id:"m10t1",moduleId:"m10",title:"S: Single Responsibility Principle",theory:`"Uma classe deve ter apenas um motivo para mudar" — Robert C. Martin. Mas atenção: SRP não significa "fazer só uma coisa". Significa ter apenas um ator (stakeholder) que pode pedir mudança naquela classe.

Exemplo concreto: a classe RelatorioFinanceiro que busca dados no banco, calcula métricas, formata em PDF e envia por email. Quatro razões para mudar: o DBA altera o schema, o analista muda as fórmulas, o designer quer outro layout de PDF, o TI muda o servidor de email. Quatro atores, quatro motivos — violação clara do SRP.

Como identificar violação: use o teste do "E também". Descreva a classe: "ContaService busca contas E calcula saldo E gera PDF do extrato E envia email E registra log de auditoria E valida CPF E aplica IOF." Cada "E" é uma responsabilidade que deveria ser uma classe separada.

Como corrigir: identifique os atores, separe em classes coesas. Cada classe responde a um único stakeholder. ContaRepository responde ao DBA. SaldoCalculator responde ao financeiro. ExtratoReportGenerator responde ao designer. NotificacaoService responde ao TI.

SRP é a base para os outros 4 princípios SOLID. Se uma classe tem múltiplas responsabilidades, é impossível aplicar OCP, LSP, ISP ou DIP corretamente — as responsabilidades estão entrelaçadas e qualquer extensão afeta tudo.

Em sistemas corporativos como os do Nubank, classes com mais de uma responsabilidade são rejeitadas no code review. A regra é simples: se um bug no cálculo de IOF pode quebrar o envio de email, algo está muito errado na arquitetura.

Relação com módulo coeso: módulos (pacotes, namespaces) também seguem SRP. O namespace Financeiro.Calculos contém apenas lógica de cálculo, nunca formatação ou envio de email.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — ContaService com 7 responsabilidades
// ══════════════════════════════════════════════
public class ContaService
{
    private readonly AppDbContext _db;

    public ContaService(AppDbContext db) => _db = db;

    // Responsabilidade 1: Busca e persistência
    public Conta? BuscarPorId(int id) => _db.Contas.Find(id);

    // Responsabilidade 2: Cálculo de saldo
    public decimal CalcularSaldo(int contaId)
    {
        var transacoes = _db.Transacoes
            .Where(t => t.ContaId == contaId).ToList();
        return transacoes.Sum(t =>
            t.Tipo == "credito" ? t.Valor : -t.Valor);
    }

    // Responsabilidade 3: Geração de relatório PDF
    public byte[] GerarExtratoPdf(int contaId, int mes)
    {
        var dados = CalcularSaldo(contaId);
        // 50 linhas de geração de PDF com iTextSharp...
        return new byte[0]; // simplificado
    }

    // Responsabilidade 4: Envio de email
    public void EnviarExtratoPorEmail(int contaId)
    {
        var pdf = GerarExtratoPdf(contaId, DateTime.Now.Month);
        var smtp = new SmtpClient("smtp.banco.com");
        // configuração SMTP, criação de mensagem...
        smtp.Send(new MailMessage());
    }

    // Responsabilidade 5: Log de auditoria
    public void RegistrarLog(string acao, int contaId)
    {
        File.AppendAllText("audit.log",
            $"[{DateTime.Now}] {acao} conta {contaId}\\n");
    }

    // Responsabilidade 6: Validação de documento
    public bool ValidarCpf(string cpf)
    {
        // algoritmo de validação de CPF...
        return cpf.Length == 11;
    }

    // Responsabilidade 7: Cálculo tributário
    public decimal AplicarIof(decimal valor, int dias)
    {
        decimal aliquota = dias <= 30 ? 0.0041m : 0.0082m;
        return valor * aliquota * dias;
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Cada classe com um único motivo para mudar
// ══════════════════════════════════════════════

// Ator: DBA / equipe de dados
public class ContaRepository : IContaRepository
{
    private readonly AppDbContext _db;
    public ContaRepository(AppDbContext db) => _db = db;

    public Conta? ObterPorId(int id) => _db.Contas.Find(id);
    public void Salvar(Conta conta) { _db.SaveChanges(); }
}

// Ator: equipe financeira / regras de negócio
public class SaldoCalculator
{
    private readonly ITransacaoRepository _transacoes;
    public SaldoCalculator(ITransacaoRepository transacoes)
        => _transacoes = transacoes;

    public decimal Calcular(int contaId)
    {
        var transacoes = _transacoes.ObterPorConta(contaId);
        return transacoes.Sum(t =>
            t.Tipo == "credito" ? t.Valor : -t.Valor);
    }
}

// Ator: equipe tributária
public class CalculadoraIof
{
    private const decimal ALIQUOTA_CURTO_PRAZO = 0.0041m;
    private const decimal ALIQUOTA_LONGO_PRAZO = 0.0082m;
    private const int LIMITE_DIAS_CURTO = 30;

    public decimal Calcular(decimal valor, int dias)
    {
        decimal aliquota = dias <= LIMITE_DIAS_CURTO
            ? ALIQUOTA_CURTO_PRAZO
            : ALIQUOTA_LONGO_PRAZO;
        return valor * aliquota * dias;
    }
}

// Ator: designer / equipe de relatórios
public class ExtratoReportGenerator
{
    private readonly SaldoCalculator _saldo;
    public ExtratoReportGenerator(SaldoCalculator saldo)
        => _saldo = saldo;

    public byte[] GerarPdf(int contaId, int mes)
    {
        var saldo = _saldo.Calcular(contaId);
        // Apenas geração de PDF — nenhuma lógica de negócio
        return Array.Empty<byte>();
    }
}

// Ator: TI / infraestrutura de comunicação
public class NotificacaoService : INotificacaoService
{
    private readonly IEmailSender _email;
    public NotificacaoService(IEmailSender email) => _email = email;

    public async Task EnviarExtrato(string destinatario, byte[] pdf)
    {
        await _email.EnviarAsync(destinatario, "Extrato Mensal", pdf);
    }
}

// Ator: compliance / auditoria
public class AuditoriaLogger : IAuditoriaLogger
{
    private readonly ILogger<AuditoriaLogger> _logger;
    public AuditoriaLogger(ILogger<AuditoriaLogger> logger)
        => _logger = logger;

    public void Registrar(string acao, int contaId)
    {
        _logger.LogInformation("[Auditoria] {Acao} conta {ContaId}", acao, contaId);
    }
}

// Ator: compliance / documentos
public static class ValidadorDocumento
{
    public static bool ValidarCpf(string cpf)
    {
        if (cpf.Length != 11) return false;
        // Algoritmo completo de validação...
        return true;
    }
}

// ══════════════════════════════════════════════
// Registro no DI — cada serviço independente
// ══════════════════════════════════════════════
// builder.Services.AddScoped<IContaRepository, ContaRepository>();
// builder.Services.AddScoped<SaldoCalculator>();
// builder.Services.AddScoped<CalculadoraIof>();
// builder.Services.AddScoped<ExtratoReportGenerator>();
// builder.Services.AddScoped<INotificacaoService, NotificacaoService>();
// builder.Services.AddScoped<IAuditoriaLogger, AuditoriaLogger>();`,checklist:["Analisar o ProdutoService do projeto Fase 2: quantos motivos para mudar?",'Listar as responsabilidades encontradas com a técnica "E também"',"Extrair ao menos uma responsabilidade para uma classe separada","Verificar que o controller ainda funciona após a separação","Criar um diagrama simples (em comentário de código) das responsabilidades"],quiz:[{question:'Segundo o SRP, o que define "uma responsabilidade"?',options:["Uma linha de código","Um grupo de funcionalidades que muda pela mesma razão e para o mesmo stakeholder — não é sobre tamanho","Um único método público","Uma única tabela do banco"],answer:1,explanation:"Responsabilidade no SRP é definida pelo ator (stakeholder) que pode pedir mudança. Se dois atores diferentes pedem mudanças na mesma classe, ela tem mais de uma responsabilidade."},{question:"Como identificar que uma classe viola o SRP?",options:["Quando ela tem mais de 200 linhas",'Quando sua descrição contém "E também" — ex: "Processa pagamento E envia email E gera relatório"',"Quando tem mais de 10 métodos","Quando usa muitas interfaces"],answer:1,explanation:'O teste do "E também" revela múltiplas responsabilidades. Cada "E" indica um ator diferente que pode pedir mudanças — e cada um deveria ter sua própria classe.'},{question:"Qual o benefício direto de aplicar SRP em um sistema financeiro?",options:["Código menor","Quando as regras de cálculo de IOF mudam, só a classe de cálculo precisa ser alterada e retestada — sem risco de quebrar o envio de email ou geração de PDF","Menos classes para gerenciar","Melhor performance"],answer:1,explanation:"Com SRP, mudanças são localizadas. Alterar a regra de IOF não pode quebrar email ou PDF porque estão em classes separadas — cada uma com seus próprios testes."}]},{id:"m10t2",moduleId:"m10",title:"O/L: Open/Closed + Liskov Substitution",theory:`OPEN/CLOSED PRINCIPLE (OCP): "Aberto para extensão, fechado para modificação." Você deve poder adicionar comportamento novo sem alterar código existente (e seus testes que já passam).

A violação clássica é o switch/if-else que cresce a cada requisição de negócio. Um sistema de descontos começa com 2 tipos e chega a 20, e cada novo tipo exige modificar a classe CalculadoraDesconto — correndo risco de quebrar os descontos que já funcionam. O OCP diz: crie uma nova classe para cada tipo, sem tocar nas existentes.

Como implementar OCP: interfaces + Strategy Pattern. Defina IEstrategiaDesconto com o método Calcular(Pedido). Cada tipo de desconto é uma classe que implementa essa interface. Para adicionar "Desconto de Aniversário", basta criar AniversarioDesconto — zero alteração no código existente.

Ferramentas para OCP: herança, interfaces, Strategy Pattern, Decorator, Chain of Responsibility. O DI container do ASP.NET Core facilita: registre todas as implementações e injete IEnumerable<IEstrategiaDesconto>.

LISKOV SUBSTITUTION PRINCIPLE (LSP): "Subtipos devem ser substituíveis por seus tipos base sem alterar a corretude do programa."

A violação mais traiçoeira: herança que compila mas quebra em runtime. O exemplo clássico: Quadrado herda de Retangulo. Ao alterar largura do Quadrado, a altura precisa mudar junto — quebrando o contrato de Retangulo onde largura e altura são independentes.

Regra prática: se a subclasse precisa lançar NotImplementedException para algum método herdado, LSP foi violado. A subclasse deve honrar TODOS os contratos da classe base.

Relação OCP + LSP: LSP é pré-condição para OCP funcionar com herança. Se uma subclasse não pode ser usada no lugar da classe base, a extensão está quebrada.

Como detectar violação de LSP: testes da classe base devem passar para TODAS as subclasses. Se o teste de Conta com Debitar() falha para ContaBloqueada, LSP foi violado.

Exemplo corporativo real: no iFood, cada tipo de entrega (expressa, agendada, retirada) implementa IEntregaStrategy — o sistema de pedidos nunca é modificado quando um novo tipo de entrega é criado.`,code:`// ══════════════════════════════════════════════
// ❌ OCP VIOLAÇÃO — if/else que cresce forever
// ══════════════════════════════════════════════
public class CalculadoraDesconto
{
    // Cada novo tipo de desconto MODIFICA esta classe ❌
    public decimal Calcular(Pedido pedido, string tipoDesconto)
    {
        if (tipoDesconto == "black_friday")
            return pedido.ValorTotal * 0.30m;
        else if (tipoDesconto == "cliente_vip")
            return pedido.ValorTotal * 0.20m;
        else if (tipoDesconto == "funcionario")
            return pedido.ValorTotal * 0.40m;
        else if (tipoDesconto == "aniversario")       // novo!
            return pedido.ValorTotal * 0.15m;
        else if (tipoDesconto == "primeira_compra")    // novo!
            return pedido.ValorTotal * 0.10m;
        // ... cada sprint adiciona mais um else if
        // Risco: qualquer erro aqui quebra TODOS os descontos
        else
            return 0m;
    }
}

// ══════════════════════════════════════════════
// ✅ OCP CORRETO — Strategy Pattern (aberto para extensão)
// ══════════════════════════════════════════════
public interface IEstrategiaDesconto
{
    string Tipo { get; }
    decimal Calcular(Pedido pedido);
}

// Cada desconto é uma classe isolada — pode ser testada independentemente
public class BlackFridayDesconto : IEstrategiaDesconto
{
    public string Tipo => "black_friday";
    public decimal Calcular(Pedido pedido)
        => pedido.ValorTotal * 0.30m;
}

public class ClienteVipDesconto : IEstrategiaDesconto
{
    public string Tipo => "cliente_vip";
    public decimal Calcular(Pedido pedido)
    {
        decimal desconto = pedido.ValorTotal * 0.20m;
        // VIP com mais de R\\$ 500 ganha 5% extra
        if (pedido.ValorTotal > 500m)
            desconto += pedido.ValorTotal * 0.05m;
        return desconto;
    }
}

public class FuncionarioDesconto : IEstrategiaDesconto
{
    public string Tipo => "funcionario";
    public decimal Calcular(Pedido pedido)
        => pedido.ValorTotal * 0.40m;
}

// Para adicionar novo desconto → nova classe, ZERO modificação ✅
public class AniversarioDesconto : IEstrategiaDesconto
{
    public string Tipo => "aniversario";
    public decimal Calcular(Pedido pedido)
        => pedido.ValorTotal * 0.15m;
}

// Orquestrador que NUNCA muda
public class ProcessadorDesconto
{
    private readonly Dictionary<string, IEstrategiaDesconto> _estrategias;

    public ProcessadorDesconto(IEnumerable<IEstrategiaDesconto> estrategias)
    {
        _estrategias = estrategias.ToDictionary(e => e.Tipo);
    }

    public decimal AplicarDesconto(Pedido pedido, string tipoDesconto)
    {
        if (_estrategias.TryGetValue(tipoDesconto, out var estrategia))
            return estrategia.Calcular(pedido);
        return 0m;
    }
}

// Registro no DI — cada estratégia registrada automaticamente
// builder.Services.AddScoped<IEstrategiaDesconto, BlackFridayDesconto>();
// builder.Services.AddScoped<IEstrategiaDesconto, ClienteVipDesconto>();
// builder.Services.AddScoped<IEstrategiaDesconto, FuncionarioDesconto>();
// builder.Services.AddScoped<IEstrategiaDesconto, AniversarioDesconto>();
// builder.Services.AddScoped<ProcessadorDesconto>();

// ══════════════════════════════════════════════
// ❌ LSP VIOLAÇÃO — ContaBloqueada quebra o contrato de Conta
// ══════════════════════════════════════════════
public class Conta
{
    public decimal Saldo { get; protected set; }

    public virtual void Debitar(decimal valor)
    {
        if (valor > Saldo) throw new SaldoInsuficienteException();
        Saldo -= valor;
    }

    public virtual void Creditar(decimal valor) => Saldo += valor;
}

// LSP violado: quem espera Conta pode receber ContaBloqueada
// e ter um comportamento inesperado (exceção onde não esperava)
public class ContaBloqueada : Conta
{
    public override void Debitar(decimal valor)
        => throw new InvalidOperationException("Conta bloqueada!");

    public override void Creditar(decimal valor)
        => throw new InvalidOperationException("Conta bloqueada!");
}

// ══════════════════════════════════════════════
// ✅ LSP CORRETO — segregar por capacidade
// ══════════════════════════════════════════════
public interface IContaLeitura
{
    decimal Saldo { get; }
    string Titular { get; }
}

public interface IContaDebitable : IContaLeitura
{
    void Debitar(decimal valor);
}

public interface IContaCreditavel : IContaLeitura
{
    void Creditar(decimal valor);
}

// Conta ativa implementa todas as operações
public class ContaAtiva : IContaDebitable, IContaCreditavel
{
    public decimal Saldo { get; private set; }
    public string Titular { get; init; } = "";

    public void Debitar(decimal valor)
    {
        if (valor > Saldo) throw new SaldoInsuficienteException();
        Saldo -= valor;
    }

    public void Creditar(decimal valor) => Saldo += valor;
}

// Conta bloqueada só permite leitura — sem surpresas
public class ContaBloqueada : IContaLeitura
{
    public decimal Saldo { get; init; }
    public string Titular { get; init; } = "";
    // Não implementa Debitar nem Creditar — LSP respeitado ✅
}

public class SaldoInsuficienteException : Exception
{
    public SaldoInsuficienteException()
        : base("Saldo insuficiente para esta operação.") { }
}`,checklist:["Encontrar um if/else ou switch que cresce no projeto Fase 2","Refatorar para Strategy Pattern com interface","Registrar as estratégias no DI container","Criar um teste que verifica que todas as estratégias respeitam o contrato","Verificar se há algum override que lança NotImplementedException (LSP violation)"],quiz:[{question:'O que significa "fechado para modificação" no OCP?',options:["O código tem acesso restrito","Não é possível adicionar novas funcionalidades","Código existente e testado não deve ser alterado para acomodar novos comportamentos — usa-se extensão (nova classe/interface) em vez de modificação","O arquivo está marcado como readonly"],answer:2,explanation:"OCP significa que código estável e testado permanece intacto. Novos comportamentos são adicionados via novas classes que implementam interfaces existentes — sem tocar no que já funciona."},{question:"Qual é o sinal clássico de violação do Liskov Substitution Principle?",options:["Classe com muitos métodos","Subclasse que herda método da classe base mas lança NotImplementedException ou UnsupportedOperationException","Herança com mais de 3 níveis","Classe abstrata sem implementação"],answer:1,explanation:"Se uma subclasse precisa lançar exceção para um método herdado, ela não pode substituir a classe base — violando LSP. A solução é segregar interfaces ou usar composição."},{question:"Qual padrão de design resolve naturalmente a violação do OCP em lógicas condicionais que crescem com o tempo?",options:["Singleton","Strategy Pattern — encapsula cada variação em uma classe própria que implementa uma interface comum","Factory Method","Observer Pattern"],answer:1,explanation:"Strategy Pattern encapsula cada algoritmo/variação em uma classe separada. Para adicionar um novo comportamento, cria-se uma nova classe sem modificar as existentes."}]},{id:"m10t3",moduleId:"m10",title:"I: Interface Segregation Principle",theory:`"Clientes não devem ser forçados a depender de interfaces que não usam." — Robert C. Martin.

O problema das interfaces "gordas": uma interface com 15 métodos força todas as classes que a implementam a ter todos os 15, mesmo que usem apenas 2. O resultado: implementações com NotImplementedException, métodos vazios, ou código morto — cada um um Code Smell grave.

Exemplo clássico: IAnimal com Voar(), Nadar(), Correr(), Escalar(). A classe Cachorro é forçada a implementar Voar() — mas cachorro não voa. O que fazer? throw new NotImplementedException()? Retornar null? Ambos são sinais de violação.

ISP em código corporativo: IRepository<T> com 15 métodos (Add, Update, Delete, GetById, GetAll, GetByFilter, GetPaged, Count, Exists, BulkInsert, BulkDelete, ExecuteSql, GetWithIncludes...) onde o RelatorioController usa apenas GetByPeriodo e Count. O controller depende de 15 métodos mas usa 2 — as outras 13 dependências são desnecessárias.

Solução: Role Interfaces — interfaces menores e focadas no papel do consumidor. Em vez de um ITransacaoRepository gigante, crie: ITransacaoReader (consultas), ITransacaoWriter (escrita), ITransacaoReporter (relatórios). Cada controller recebe apenas a interface que precisa.

Trade-off importante: não exagere na granularidade. Uma interface por método é tão ruim quanto uma interface com 50 métodos. O equilíbrio é agrupar por papel/ator. IReadRepository e IWriteRepository são úteis; ISingleMethodDoer não é.

Como registrar múltiplas interfaces no DI container: se TransacaoRepository implementa ITransacaoReader, ITransacaoWriter e ITransacaoReporter, registre cada interface separadamente apontando para a mesma instância com AddScoped.

Relação com LSP: interfaces gordas frequentemente causam violações de LSP — a classe é forçada a herdar comportamento que não suporta, e lança exceções para "se livrar" dos métodos.

Em sistemas como o PicPay, a separação IReadRepository/IWriteRepository permite até ter implementações diferentes: leitura do cache Redis, escrita no PostgreSQL — impossível com uma interface monolítica.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Interface gorda com 12 métodos
// ══════════════════════════════════════════════
public interface ITransacaoRepository
{
    Transacao? GetById(int id);
    List<Transacao> GetAll();
    List<Transacao> GetByContaId(int contaId);
    List<Transacao> GetByPeriodo(DateTime inicio, DateTime fim);
    List<Transacao> GetByCliente(int clienteId);
    void Add(Transacao t);
    void Update(Transacao t);
    void Delete(int id);
    void BulkInsert(List<Transacao> transacoes);
    decimal GetResumoMensal(int contaId, int mes);
    List<ClienteResumo> GetTopClientes(int top);
    int Count();
}

// RelatorioController usa apenas 3 dos 12 métodos ❌
public class RelatorioController : ControllerBase
{
    private readonly ITransacaoRepository _repo;  // 12 métodos inúteis

    public RelatorioController(ITransacaoRepository repo) => _repo = repo;

    [HttpGet("mensal/{contaId}")]
    public IActionResult ResumoMensal(int contaId, int mes)
        => Ok(_repo.GetResumoMensal(contaId, mes));

    [HttpGet("top-clientes")]
    public IActionResult TopClientes(int top = 10)
        => Ok(_repo.GetTopClientes(top));

    [HttpGet("total")]
    public IActionResult Total() => Ok(_repo.Count());
}

// ImportacaoService só escreve — mas depende de consultas ❌
public class ImportacaoService
{
    private readonly ITransacaoRepository _repo;
    public ImportacaoService(ITransacaoRepository repo) => _repo = repo;

    public void Importar(List<Transacao> lote) => _repo.BulkInsert(lote);
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Interfaces segregadas por papel
// ══════════════════════════════════════════════
public interface ITransacaoReader
{
    Transacao? GetById(int id);
    List<Transacao> GetByContaId(int contaId);
    List<Transacao> GetByPeriodo(DateTime inicio, DateTime fim);
    List<Transacao> GetByCliente(int clienteId);
    int Count();
}

public interface ITransacaoWriter
{
    void Add(Transacao t);
    void Update(Transacao t);
    void Delete(int id);
    void BulkInsert(List<Transacao> transacoes);
}

public interface ITransacaoReporter
{
    decimal GetResumoMensal(int contaId, int mes);
    List<ClienteResumo> GetTopClientes(int top);
}

// A implementação real implementa as 3 interfaces
public class TransacaoRepository
    : ITransacaoReader, ITransacaoWriter, ITransacaoReporter
{
    private readonly AppDbContext _db;
    public TransacaoRepository(AppDbContext db) => _db = db;

    // ITransacaoReader
    public Transacao? GetById(int id) => _db.Transacoes.Find(id);
    public List<Transacao> GetByContaId(int contaId)
        => _db.Transacoes.Where(t => t.ContaId == contaId).ToList();
    public List<Transacao> GetByPeriodo(DateTime inicio, DateTime fim)
        => _db.Transacoes.Where(t => t.Data >= inicio && t.Data <= fim).ToList();
    public List<Transacao> GetByCliente(int clienteId)
        => _db.Transacoes.Where(t => t.ClienteId == clienteId).ToList();
    public int Count() => _db.Transacoes.Count();

    // ITransacaoWriter
    public void Add(Transacao t) { _db.Transacoes.Add(t); _db.SaveChanges(); }
    public void Update(Transacao t) { _db.Transacoes.Update(t); _db.SaveChanges(); }
    public void Delete(int id)
    {
        var t = _db.Transacoes.Find(id);
        if (t is not null) { _db.Transacoes.Remove(t); _db.SaveChanges(); }
    }
    public void BulkInsert(List<Transacao> transacoes)
    {
        _db.Transacoes.AddRange(transacoes);
        _db.SaveChanges();
    }

    // ITransacaoReporter
    public decimal GetResumoMensal(int contaId, int mes)
        => _db.Transacoes
            .Where(t => t.ContaId == contaId && t.Data.Month == mes)
            .Sum(t => t.Tipo == "credito" ? t.Valor : -t.Valor);

    public List<ClienteResumo> GetTopClientes(int top)
        => _db.Transacoes
            .GroupBy(t => t.ClienteId)
            .Select(g => new ClienteResumo(g.Key, g.Sum(t => t.Valor)))
            .OrderByDescending(c => c.Total)
            .Take(top)
            .ToList();
}

// Agora cada controller recebe SÓ o que precisa ✅
public class RelatorioController : ControllerBase
{
    private readonly ITransacaoReporter _reporter;  // Só 2 métodos
    private readonly ITransacaoReader _reader;      // Só leitura

    public RelatorioController(
        ITransacaoReporter reporter,
        ITransacaoReader reader)
    {
        _reporter = reporter;
        _reader = reader;
    }

    [HttpGet("mensal/{contaId}")]
    public IActionResult ResumoMensal(int contaId, int mes)
        => Ok(_reporter.GetResumoMensal(contaId, mes));

    [HttpGet("top-clientes")]
    public IActionResult TopClientes(int top = 10)
        => Ok(_reporter.GetTopClientes(top));
}

// ImportacaoService recebe SÓ a escrita ✅
public class ImportacaoService
{
    private readonly ITransacaoWriter _writer;
    public ImportacaoService(ITransacaoWriter writer) => _writer = writer;

    public void Importar(List<Transacao> lote) => _writer.BulkInsert(lote);
}

// Registro no DI — mesma instância, interfaces diferentes
// builder.Services.AddScoped<TransacaoRepository>();
// builder.Services.AddScoped<ITransacaoReader>(sp =>
//     sp.GetRequiredService<TransacaoRepository>());
// builder.Services.AddScoped<ITransacaoWriter>(sp =>
//     sp.GetRequiredService<TransacaoRepository>());
// builder.Services.AddScoped<ITransacaoReporter>(sp =>
//     sp.GetRequiredService<TransacaoRepository>());

public record ClienteResumo(int ClienteId, decimal Total);`,checklist:["Auditar as interfaces do projeto Fase 2: alguma tem mais de 7 métodos?","Identificar quais métodos cada controller realmente usa do repository","Dividir o IRepository em IReadRepository e IWriteRepository","Atualizar os registros no DI container","Verificar que os testes existentes ainda compilam e passam"],quiz:[{question:"Qual o problema de uma interface com 15 métodos?",options:["Interfaces grandes são mais performáticas","Classes que implementam são forçadas a implementar métodos que não precisam, frequentemente com corpo vazio ou lançando NotImplementedException","O compilador não aceita interfaces grandes","Dificulta o uso de generics"],answer:1,explanation:"Interfaces gordas forçam implementações desnecessárias. Cada método não-usado é código morto que precisa ser mantido e pode esconder bugs."},{question:"Como ISP se relaciona com testabilidade?",options:["Não tem relação","Interfaces menores são mais fáceis de mockar em testes — você mocka apenas os métodos que o código sob teste realmente usa","Interfaces grandes facilitam mocks","Testes não dependem de interfaces"],answer:1,explanation:"Com interfaces segregadas, mocks de teste ficam simples: mocke 2-3 métodos ao invés de 15. O teste fica focado e sem setup desnecessário."},{question:"Qual o sinal mais claro de violação do ISP em uma implementação?",options:["Classe com muitos campos privados","Método implementado que retorna null, lança NotImplementedException ou tem corpo vazio — sinal de que a interface forçou uma implementação desnecessária","Método com muitos parâmetros","Classe sem construtor público"],answer:1,explanation:'Se uma implementação precisa "se livrar" de um método com null/exceção/vazio, a interface obrigou algo que não deveria — ela precisa ser segregada.'}]},{id:"m10t4",moduleId:"m10",title:"D: Dependency Inversion Principle",theory:`"Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações." — Robert C. Martin.

É crucial entender a diferença: DIP (Dependency Inversion Principle) é o PRINCÍPIO arquitetural; DI (Dependency Injection) é o MECANISMO de implementação. Você pode ter DI sem DIP — basta injetar classes concretas em vez de interfaces. DI sem abstração não inverte nada.

Violação clássica: new SqlConnection("...") dentro de um service. O service de alto nível (lógica de negócio) passa a depender diretamente de um detalhe de infraestrutura (SQL Server). Se mudar para PostgreSQL, MongoDB ou InMemory para testes, o service precisa mudar junto.

O mesmo vale para new SmtpClient(), new HttpClient() direto, new FileLogger(). Cada "new" de serviço/infraestrutura dentro de lógica de negócio é uma violação do DIP.

Com DIP, a direção das dependências se inverte: Domain define IContaRepository (a interface). Infrastructure implementa SqlContaRepository. Domain NÃO conhece Infrastructure — Infrastructure conhece Domain e implementa seus contratos. Isso é inversão de dependência.

DIP é o princípio mais transformador para testabilidade. Com interfaces no lugar de concretos, você cria InMemoryContaRepository para testes — sem banco de dados, sem Docker, execução em milissegundos. No Nubank, testes unitários rodam sem nenhuma dependência externa justamente por DIP.

Hexagonal Architecture (Ports & Adapters) é DIP em escala: Domain é o centro, Ports são as interfaces (abstrações), Adapters são as implementações concretas (SQL, HTTP, SMTP). As dependências sempre apontam para dentro — para o domínio.

O container de DI do ASP.NET Core (visto na Fase 2) é o mecanismo que conecta tudo: builder.Services.AddScoped<IContaRepository, SqlContaRepository>(). Em produção injeta SQL, em teste injeta InMemory. O service não sabe nem se importa qual implementação recebeu.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Service acoplado a infraestrutura
// ══════════════════════════════════════════════
public class ContaService
{
    // Cada "new" é uma violação de DIP
    public decimal ConsultarSaldo(int contaId)
    {
        // ❌ Depende diretamente de SQL Server
        using var conn = new SqlConnection(
            "Server=prod;Database=Banco;Trusted_Connection=true;");
        conn.Open();
        var cmd = new SqlCommand(
            "SELECT Saldo FROM Contas WHERE Id = @id", conn);
        cmd.Parameters.AddWithValue("@id", contaId);
        return (decimal)cmd.ExecuteScalar()!;
    }

    public void NotificarCliente(int contaId, string mensagem)
    {
        // ❌ Depende diretamente de SMTP
        var smtp = new SmtpClient("smtp.banco.com", 587);
        smtp.Credentials = new NetworkCredential("user", "pass");
        var email = BuscarEmail(contaId);
        smtp.Send("noreply@banco.com", email, "Notificação", mensagem);
    }

    public void RegistrarAuditoria(string acao)
    {
        // ❌ Depende diretamente do sistema de arquivos
        File.AppendAllText("C:\\\\logs\\\\audit.log",
            $"[{DateTime.Now}] {acao}\\n");
    }

    private string BuscarEmail(int contaId) => "cliente@email.com";
}

// Impossível testar sem banco SQL, servidor SMTP e disco!

// ══════════════════════════════════════════════
// ✅ DEPOIS — Service depende de abstrações
// ══════════════════════════════════════════════

// Abstrações (definidas no Domain — alto nível)
public interface IContaRepository
{
    Conta? ObterPorId(int id);
    decimal ObterSaldo(int contaId);
    void Salvar(Conta conta);
}

public interface INotificacaoService
{
    Task NotificarAsync(string destinatario, string assunto, string mensagem);
}

public interface IAuditoriaLogger
{
    void Registrar(string acao);
}

// Service depende APENAS de abstrações ✅
public class ContaService
{
    private readonly IContaRepository _contas;
    private readonly INotificacaoService _notificacao;
    private readonly IAuditoriaLogger _auditoria;

    public ContaService(
        IContaRepository contas,
        INotificacaoService notificacao,
        IAuditoriaLogger auditoria)
    {
        _contas = contas;
        _notificacao = notificacao;
        _auditoria = auditoria;
    }

    public decimal ConsultarSaldo(int contaId)
    {
        _auditoria.Registrar($"Consulta saldo conta {contaId}");
        return _contas.ObterSaldo(contaId);
    }

    public async Task NotificarCliente(int contaId, string mensagem)
    {
        var conta = _contas.ObterPorId(contaId);
        if (conta is null) return;
        await _notificacao.NotificarAsync(conta.Email, "Notificação", mensagem);
        _auditoria.Registrar($"Notificação enviada para conta {contaId}");
    }
}

// ══════════════════════════════════════════════
// Implementações reais (Infrastructure — baixo nível)
// ══════════════════════════════════════════════
public class SqlContaRepository : IContaRepository
{
    private readonly AppDbContext _db;
    public SqlContaRepository(AppDbContext db) => _db = db;

    public Conta? ObterPorId(int id) => _db.Contas.Find(id);
    public decimal ObterSaldo(int contaId)
        => _db.Contas.Where(c => c.Id == contaId)
               .Select(c => c.Saldo).FirstOrDefault();
    public void Salvar(Conta conta) => _db.SaveChanges();
}

public class SmtpNotificacaoService : INotificacaoService
{
    private readonly IConfiguration _config;
    public SmtpNotificacaoService(IConfiguration config) => _config = config;

    public async Task NotificarAsync(
        string destinatario, string assunto, string mensagem)
    {
        // Implementação real com SMTP
        await Task.CompletedTask;
    }
}

// ══════════════════════════════════════════════
// Implementação para TESTES (sem banco, sem email)
// ══════════════════════════════════════════════
public class InMemoryContaRepository : IContaRepository
{
    private readonly Dictionary<int, Conta> _contas = new();

    public void AdicionarParaTeste(Conta conta) => _contas[conta.Id] = conta;

    public Conta? ObterPorId(int id)
        => _contas.TryGetValue(id, out var c) ? c : null;
    public decimal ObterSaldo(int contaId)
        => _contas.TryGetValue(contaId, out var c) ? c.Saldo : 0;
    public void Salvar(Conta conta) => _contas[conta.Id] = conta;
}

public class FakeNotificacao : INotificacaoService
{
    public List<string> MensagensEnviadas { get; } = new();

    public Task NotificarAsync(string dest, string assunto, string msg)
    {
        MensagensEnviadas.Add($"{dest}: {assunto} - {msg}");
        return Task.CompletedTask;
    }
}

// ══════════════════════════════════════════════
// Teste unitário — sem banco e sem servidor SMTP!
// ══════════════════════════════════════════════
// [Fact]
// public async Task NotificarCliente_DeveEnviarMensagem()
// {
//     var repo = new InMemoryContaRepository();
//     repo.AdicionarParaTeste(new Conta
//         { Id = 1, Saldo = 1000m, Email = "joao@email.com" });
//
//     var fakeNotificacao = new FakeNotificacao();
//     var fakeAuditoria = new FakeAuditoria();
//
//     var service = new ContaService(repo, fakeNotificacao, fakeAuditoria);
//
//     await service.NotificarCliente(1, "Seu extrato está disponível");
//
//     Assert.Single(fakeNotificacao.MensagensEnviadas);
//     Assert.Contains("joao@email.com", fakeNotificacao.MensagensEnviadas[0]);
// }

// ══════════════════════════════════════════════
// Registro no DI — troca implementação por ambiente
// ══════════════════════════════════════════════
// PRODUÇÃO:
// builder.Services.AddScoped<IContaRepository, SqlContaRepository>();
// builder.Services.AddScoped<INotificacaoService, SmtpNotificacaoService>();
// builder.Services.AddScoped<IAuditoriaLogger, SerilogAuditoriaLogger>();

// TESTES:
// services.AddScoped<IContaRepository, InMemoryContaRepository>();
// services.AddScoped<INotificacaoService, FakeNotificacao>();
// services.AddScoped<IAuditoriaLogger, FakeAuditoria>();`,checklist:['Buscar "new" no ContaService ou ProdutoService — cada "new" de serviço é DIP violation',"Substituir instanciações diretas por injeção via construtor","Criar uma implementação InMemory de IContaRepository para testes","Verificar que o service funciona com a implementação real E com a InMemory","Escrever um teste unitário que usa a implementação InMemory"],quiz:[{question:"Qual a diferença entre Dependency Injection e Dependency Inversion Principle?",options:["São a mesma coisa","DIP é o princípio arquitetural (abstrações entre camadas); DI é o mecanismo de implementação (container que injeta as dependências). Você pode ter DI sem DIP se injetar classes concretas em vez de interfaces","DIP é mais moderno que DI","DI é só para testes"],answer:1,explanation:'DIP é a regra ("dependa de abstrações"), DI é a ferramenta ("container que injeta"). Sem abstrações (interfaces), DI apenas move o "new" para outro lugar sem inverter nada.'},{question:'Por que "new SqlConnection()" dentro de um service viola o DIP?',options:["Não viola — é uma boa prática","O service de alto nível passa a depender de um detalhe de infraestrutura (SQL Server) — se mudar para PostgreSQL ou MongoDB, o service precisa mudar junto","SqlConnection é selado (sealed)","Performance é reduzida"],answer:1,explanation:"O service de negócio fica acoplado ao SQL Server. Com DIP, o service depende de IContaRepository — e não sabe se por trás está SQL, Mongo ou InMemory."},{question:"Qual o benefício mais direto de aplicar DIP em um sistema financeiro?",options:["Código mais curto","Possibilidade de testar a lógica de negócio em isolamento, sem banco de dados, servidor de email ou dependências externas — usando implementações InMemory ou Mocks","Menos interfaces para manter","Maior performance das queries"],answer:1,explanation:"DIP permite testes em milissegundos, sem Docker, sem banco real. A lógica de negócio é testada em isolamento — exatamente como Nubank e PicPay fazem."}]}]},pp={id:"m11",title:"Domain-Driven Design",icon:"🏗️",week:"Semanas 11–12",color:"#10B981",topics:[{id:"m11t1",moduleId:"m11",title:"Linguagem Ubíqua e Bounded Contexts",theory:`Domain-Driven Design resolve um problema que todo sistema corporativo enfrenta: o código não fala a língua do negócio. Quando o analista financeiro diz "Fazer uma TED" e o desenvolvedor implementa ProcessTransaction(int userId, decimal amount, int typeId), surge um abismo de tradução que causa bugs, retrabalho e frustração.

LINGUAGEM UBÍQUA é o vocabulário compartilhado entre desenvolvedores e especialistas de negócio, refletido diretamente no código. Não "usuário" mas "Titular", "Beneficiário" ou "Correntista" — cada termo tem significado preciso no contexto. No Nubank, o time de engenharia fala exatamente os mesmos termos que o time de produto. Quando o PO diz "Conta bloqueada não pode realizar transações", o código diz if (conta.Status == StatusConta.Bloqueada) return Result.Failure("Conta bloqueada"). Zero tradução.

Como construir a Linguagem Ubíqua: sessões de Event Storming onde devs e negócio mapeiam eventos do domínio em post-its, glossário vivo mantido no repositório (Glossario.md), e a regra de ouro — se o nome no código é diferente do que o analista fala, o código está errado.

BOUNDED CONTEXT é uma fronteira explícita dentro da qual um modelo de domínio é válido. Em um banco digital real existem vários contextos: Contexto de Contas (Conta, Saldo, Limite, Extrato), Contexto de Pagamentos (Transacao, Beneficiario, TED, PIX), Contexto de Crédito (Proposta, Score, Limite, Parcela). Perceba: "Limite" significa coisas completamente diferentes em Contas (limite de saque diário) e Crédito (limite de crédito aprovado). São dois Bounded Contexts com modelos independentes.

Context Map define como os Bounded Contexts se comunicam — via Integration Events, APIs compartilhadas ou bancos separados. O anti-pattern mais destrutivo é o Big Ball of Mud: um modelo único que tenta representar todo o domínio, gerando classes god com dezenas de campos e métodos para situações completamente diferentes. Empresas como iFood e PicPay identificam Bounded Contexts no início de cada projeto novo — é o primeiro passo antes de escrever qualquer código.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Big Ball of Mud: um modelo para tudo
// ══════════════════════════════════════════════
// "Conta" tenta ser tudo para todos os contextos
public class Conta
{
    public int Id { get; set; }
    public string Nome { get; set; }            // Cadastro
    public decimal Saldo { get; set; }           // Financeiro
    public decimal LimiteCredito { get; set; }   // Crédito
    public decimal LimiteDiario { get; set; }    // Transações
    public string Agencia { get; set; }          // Pagamentos
    public string NumeroConta { get; set; }      // Pagamentos
    public int Score { get; set; }               // Crédito
    public string Status { get; set; }           // Tudo usa
    public List<object> Transacoes { get; set; } // God list
    public List<object> Propostas { get; set; }  // Crédito
    public List<object> Notificacoes { get; set; } // Marketing
    // 30+ campos... cada time adiciona o que precisa
}

// Serviço genérico que mistura todos os contextos
public class ContaService
{
    public void ProcessTransaction(int userId,
        decimal amount, int typeId) { /* ... */ }
    public void SendNotification(int userId,
        string msg) { /* ... */ }
    public decimal CalculateScore(int userId) { /* ... */ }
    // 50+ métodos de contextos diferentes
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Bounded Contexts separados
// ══════════════════════════════════════════════

// ── Contexto: Contas (Domain/Contas/) ──────────
namespace SistemaFinanceiro.Domain.Contas;

// Linguagem Ubíqua: Conta, Saldo, Titular, Extrato
public class Conta  // Aggregate Root neste contexto
{
    public ContaId Id { get; private set; }
    public Cpf TitularCpf { get; private set; }
    public Dinheiro Saldo { get; private set; }
    public StatusConta Status { get; private set; }

    public Result Depositar(Dinheiro valor)
    {
        if (Status == StatusConta.Bloqueada)
            return Result.Failure("Conta bloqueada");
        Saldo = Saldo.Somar(valor);
        return Result.Success();
    }
}

public enum StatusConta { Ativa, Bloqueada, Encerrada }

// ── Contexto: Pagamentos (Domain/Pagamentos/) ──
namespace SistemaFinanceiro.Domain.Pagamentos;

// "Conta" aqui é apenas dados bancários do destino
// Modelo COMPLETAMENTE diferente do contexto Contas
public record ContaBancaria(
    string Agencia,
    string Numero,
    string CodigoBanco,
    string NomeTitular
);

public class Transferencia
{
    public TransferenciaId Id { get; private set; }
    public ContaBancaria Origem { get; private set; }
    public ContaBancaria Destino { get; private set; }
    public Dinheiro Valor { get; private set; }
    public TipoTransferencia Tipo { get; private set; } // TED, PIX

    public static Transferencia Criar(
        ContaBancaria origem, ContaBancaria destino,
        Dinheiro valor, TipoTransferencia tipo) { /* ... */ }
}

public enum TipoTransferencia { TED, PIX, DOC }

// ── Contexto: Crédito (Domain/Credito/) ────────
namespace SistemaFinanceiro.Domain.Credito;

// "Limite" aqui é limite de crédito — nada a ver com
// o limite diário de saque do contexto Contas
public class PropostaCredito
{
    public PropostaId Id { get; private set; }
    public Cpf SolicitanteCpf { get; private set; }
    public Dinheiro LimiteSolicitado { get; private set; }
    public Score ScoreAtual { get; private set; }
    public StatusProposta Status { get; private set; }
}

// ── Linguagem Ubíqua em prática ────────────────
// ANTES: ProcessTransaction(int userId, decimal amount, int typeId)
// DEPOIS: cada contexto tem seu vocabulário preciso:

// Contexto Contas:
// conta.Depositar(new Dinheiro(500.00m, "BRL"))

// Contexto Pagamentos:
// Transferencia.Criar(origem, destino, valor, TipoTransferencia.PIX)

// Contexto Crédito:
// proposta.Avaliar(scoreAtual)`,checklist:["Criar um arquivo Glossario.md com 15+ termos do domínio financeiro (Conta, Transacao, Extrato, Titular, Saldo, etc.)","Identificar pelo menos 2 Bounded Contexts no projeto da Fase 2 e documentar onde cada um começa e termina","Criar a estrutura de pastas Domain/Contas/ e Domain/Pagamentos/ com modelos separados","Renomear 3 métodos do projeto para usar a Linguagem Ubíqua (ex: ProcessTransaction → RealizarTransferencia)","Validar que nenhum modelo de um contexto referencia diretamente modelos de outro contexto"],quiz:[{question:"O que é Linguagem Ubíqua no DDD?",options:["Um padrão de nomenclatura obrigatório para variáveis em inglês","O vocabulário compartilhado entre desenvolvedores e especialistas de negócio, refletido tanto nas conversas quanto no código — eliminando tradução entre o negócio e a implementação","Uma linguagem de programação específica para DDD","Comentários XML obrigatórios em todas as classes do domínio"],answer:1,explanation:"A Linguagem Ubíqua é o vocabulário que devs e negócio compartilham. Se o analista diz 'Titular' e o código diz 'User', existe um abismo de tradução que gera bugs. O código DEVE usar os mesmos termos que o negócio — quando o PO fala 'conta bloqueada', o código diz StatusConta.Bloqueada."},{question:"Por que 'Cliente' pode significar coisas diferentes em um mesmo sistema?",options:["Não pode — termos devem ser únicos em todo o sistema","Porque diferentes Bounded Contexts têm modelos diferentes para a mesma palavra — em Faturamento é quem paga, em Entrega é quem recebe, em Marketing é quem tem interesse","Por causa de bugs de naming no banco de dados","Porque o C# permite classes com mesmo nome em namespaces diferentes"],answer:1,explanation:"Cada Bounded Context é uma fronteira onde um modelo faz sentido. 'Limite' no contexto de Contas é o limite diário de saque; no contexto de Crédito é o limite de crédito aprovado. Forçar um modelo único para todos os contextos é o anti-pattern Big Ball of Mud."},{question:"Qual o anti-pattern oposto ao Bounded Context?",options:["Microserviços com muitos endpoints","Big Ball of Mud — um modelo único que tenta representar todo o domínio de uma vez, gerando classes god com dezenas de campos para situações completamente diferentes","Clean Architecture com muitas camadas","CQRS com Event Sourcing"],answer:1,explanation:"O Big Ball of Mud acontece quando uma classe Conta tem 30+ campos porque cada time adiciona o que precisa sem separar contextos. O resultado é uma god class impossível de manter, testar ou evoluir. Bounded Contexts resolvem isso criando modelos focados e independentes."}]},{id:"m11t2",moduleId:"m11",title:"Entities e Value Objects",theory:`A distinção mais fundamental do DDD — e a mais mal compreendida por desenvolvedores iniciantes. Entender quando usar Entity e quando usar Value Object determina a qualidade da sua modelagem de domínio.

ENTITY é um objeto definido por sua IDENTIDADE, não por seus atributos. Duas contas bancárias com o mesmo saldo são entidades DIFERENTES porque têm IDs diferentes. Se a Conta #1234 tem R$500 e a Conta #5678 também tem R$500, são objetos completamente distintos — trocar uma pela outra faria o cliente perder acesso à SUA conta. Entities têm ciclo de vida: nascem (Conta.Abrir()), mudam de estado (Depositar, Sacar), e podem ser encerradas. A identidade persiste através de todas as mudanças de atributos. Implementação: classe com Id imutável, Equals() baseado no Id, GetHashCode() baseado no Id. Exemplos clássicos: Conta, Transacao, Cliente, Pedido, Produto.

VALUE OBJECT é um objeto definido por seus ATRIBUTOS, sem identidade própria. Dois objetos Dinheiro(100, "BRL") são IGUAIS — trocar um pelo outro não faz absolutamente nenhuma diferença. Value Objects são imutáveis: nunca mudam — cria-se um novo em vez de alterar. Sem Id próprio, sem tabela separada no banco. Encapsulam lógica e validação que pertence ao conceito. Em C# moderno, usamos record (imutável por padrão, equality por valor). Exemplos: Dinheiro (valor + moeda), Cpf, Email, Endereco, Periodo, Percentual.

POR QUE VALUE OBJECTS IMPORTAM — Primitive Obsession é o Code Smell mais comum em sistemas financeiros. Usar decimal saldo em vez de Dinheiro(valor, moeda) permite somar reais com dólares sem erro de compilação. Usar string cpf em vez de Cpf cpf permite que "12345" passe como CPF válido. Value Objects ricos garantem que objetos inválidos NUNCA existem no sistema — a validação acontece na criação, antes de qualquer regra de negócio rodar. No Nubank e PicPay, Primitive Obsession é rejeitado no code review: se o conceito tem regras, ele merece sua própria classe.

A teoria das invariantes: um Value Object garante que, se ele existe, ele é válido. Nunca existirá um Cpf com menos de 11 dígitos, um Dinheiro com valor negativo sem operação explícita, ou um Email sem @. Isso elimina dezenas de verificações defensivas espalhadas pelo código.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Primitive Obsession: tudo é string/decimal
// ══════════════════════════════════════════════
public class ContaService
{
    public void AbrirConta(string cpf, string email,
        decimal saldoInicial, string moeda)
    {
        // Nenhuma validação do CPF — "abc" é aceito
        // Nenhuma validação do email — "xyz" é aceito
        // Pode somar R$ com US$ sem erro
        // Saldo negativo? Sem problema...
        var conta = new Conta
        {
            Cpf = cpf,          // string qualquer
            Email = email,      // string qualquer
            Saldo = saldoInicial, // decimal sem moeda
            Moeda = moeda       // "BRL"? "brl"? "Real"?
        };
    }

    public void Transferir(decimal valor, string moedaOrigem,
        decimal saldoDestino, string moedaDestino)
    {
        // BUG SILENCIOSO: soma R$ com US$ sem conversão!
        saldoDestino += valor; // Compilou? Sim. Correto? Não.
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Value Objects ricos + Entity com identidade
// ══════════════════════════════════════════════

// ── Value Object: Dinheiro ─────────────────────
public record Dinheiro
{
    public decimal Valor { get; }
    public string Moeda { get; }

    public Dinheiro(decimal valor, string moeda)
    {
        if (string.IsNullOrWhiteSpace(moeda))
            throw new DomainException("Moeda é obrigatória");
        if (moeda.Length != 3)
            throw new DomainException("Moeda deve ter 3 letras (ISO 4217)");

        Valor = valor;
        Moeda = moeda.ToUpperInvariant();
    }

    // Operações seguras — impede somar moedas diferentes
    public Dinheiro Somar(Dinheiro outro)
    {
        if (Moeda != outro.Moeda)
            throw new DomainException(
                $"Não é possível somar {Moeda} com {outro.Moeda}");
        return new Dinheiro(Valor + outro.Valor, Moeda);
    }

    public Dinheiro Subtrair(Dinheiro outro)
    {
        if (Moeda != outro.Moeda)
            throw new DomainException(
                $"Não é possível subtrair {Moeda} de {outro.Moeda}");
        return new Dinheiro(Valor - outro.Valor, Moeda);
    }

    public bool MaiorOuIgualA(Dinheiro outro) =>
        Moeda == outro.Moeda && Valor >= outro.Valor;

    public override string ToString() =>
        $"{Moeda} {Valor:N2}"; // "BRL 1.500,00"
}

// ── Value Object: Cpf ──────────────────────────
public record Cpf
{
    public string Numero { get; }

    public Cpf(string numero)
    {
        var limpo = new string(numero?.Where(char.IsDigit)
            .ToArray() ?? Array.Empty<char>());
        if (limpo.Length != 11)
            throw new DomainException("CPF deve ter 11 dígitos");
        if (!ValidarDigitos(limpo))
            throw new DomainException("CPF inválido");
        Numero = limpo;
    }

    private static bool ValidarDigitos(string cpf)
    {
        if (cpf.Distinct().Count() == 1) return false;
        var soma1 = 0;
        for (int i = 0; i < 9; i++)
            soma1 += (cpf[i] - '0') * (10 - i);
        var dig1 = 11 - (soma1 % 11);
        if (dig1 >= 10) dig1 = 0;
        if ((cpf[9] - '0') != dig1) return false;

        var soma2 = 0;
        for (int i = 0; i < 10; i++)
            soma2 += (cpf[i] - '0') * (11 - i);
        var dig2 = 11 - (soma2 % 11);
        if (dig2 >= 10) dig2 = 0;
        return (cpf[10] - '0') == dig2;
    }

    // Formatação: 000.000.000-00
    public string Formatado =>
        $"{Numero[..3]}.{Numero[3..6]}.{Numero[6..9]}-{Numero[9..]}";
    public override string ToString() => Formatado;
}

// ── Value Object: Email ────────────────────────
public record Email
{
    public string Endereco { get; }

    public Email(string endereco)
    {
        if (string.IsNullOrWhiteSpace(endereco) ||
            !endereco.Contains('@') ||
            !endereco.Contains('.'))
            throw new DomainException("Email inválido");
        Endereco = endereco.ToLowerInvariant().Trim();
    }

    public override string ToString() => Endereco;
}

// ── Value Object: Periodo ──────────────────────
public record Periodo
{
    public DateOnly Inicio { get; }
    public DateOnly Fim { get; }

    public Periodo(DateOnly inicio, DateOnly fim)
    {
        if (inicio > fim)
            throw new DomainException(
                "Data de início não pode ser posterior ao fim");
        Inicio = inicio;
        Fim = fim;
    }

    public int DuracaoEmDias =>
        Fim.DayNumber - Inicio.DayNumber;

    public bool Contem(DateOnly data) =>
        data >= Inicio && data <= Fim;
}

// ── Strongly-Typed Id ──────────────────────────
public record ContaId(Guid Valor)
{
    public static ContaId Novo() => new(Guid.NewGuid());
}

// ── Entity: Conta (identidade imutável) ────────
public class Conta
{
    public ContaId Id { get; private set; }
    public Cpf TitularCpf { get; private set; }
    public Email TitularEmail { get; private set; }
    public Dinheiro Saldo { get; private set; }
    public StatusConta Status { get; private set; }
    public DateTime AbertoEm { get; private set; }

    // Construtor privado — cria via Factory Method
    private Conta() { }

    // Factory Method: única forma de criar uma Conta
    public static Conta Abrir(Cpf titularCpf,
        Email titularEmail, Dinheiro saldoInicial)
    {
        if (saldoInicial.Valor < 0)
            throw new DomainException(
                "Saldo inicial não pode ser negativo");

        return new Conta
        {
            Id = ContaId.Novo(),
            TitularCpf = titularCpf,
            TitularEmail = titularEmail,
            Saldo = saldoInicial,
            Status = StatusConta.Ativa,
            AbertoEm = DateTime.UtcNow
        };
    }

    public Result Depositar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        Saldo = Saldo.Somar(valor);
        return Result.Success();
    }

    public Result Sacar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        if (!Saldo.MaiorOuIgualA(valor))
            return Result.Failure("Saldo insuficiente");
        Saldo = Saldo.Subtrair(valor);
        return Result.Success();
    }
}

// ── Igualdade: Entity vs Value Object ──────────
// Value Object: igualdade por atributos (record faz isso)
var dinheiro1 = new Dinheiro(100m, "BRL");
var dinheiro2 = new Dinheiro(100m, "BRL");
Console.WriteLine(dinheiro1 == dinheiro2); // TRUE ✅

// Entity: igualdade por identidade (Id)
var conta1 = Conta.Abrir(cpf, email, new Dinheiro(100m, "BRL"));
var conta2 = Conta.Abrir(cpf, email, new Dinheiro(100m, "BRL"));
Console.WriteLine(conta1.Id == conta2.Id); // FALSE ✅
// Mesmo titular, mesmo saldo — mas são contas DIFERENTES`,checklist:["Criar o Value Object Dinheiro como record com validação de moeda e operadores Somar/Subtrair seguros","Criar o Value Object Cpf com validação completa do dígito verificador — impossível criar um Cpf inválido","Criar a Entity Conta usando os Value Objects e Factory Method (Conta.Abrir())","Testar que dois Dinheiro(100, 'BRL') são iguais (==) e duas Contas diferentes não são, mesmo com mesmo saldo","Substituir pelo menos 3 usos de string/decimal primitivos no projeto por Value Objects ricos"],quiz:[{question:"Qual a diferença fundamental entre Entity e Value Object?",options:["Entity tem mais atributos e métodos que Value Object","Entity é definida por identidade (Id imutável); Value Object é definido por seus atributos — dois VOs com os mesmos atributos são iguais, independentemente de onde estão na memória","Value Object não pode ser persistido no banco de dados","Entity é sempre mais complexa e tem mais responsabilidades"],answer:1,explanation:"Entity tem identidade única: duas Contas com mesmo saldo são entidades DIFERENTES. Value Object é definido por atributos: dois Dinheiro(100, 'BRL') são IGUAIS e intercambiáveis. Usar record em C# para VOs garante equality por valor automaticamente."},{question:"Por que Value Objects devem ser imutáveis?",options:["Para melhor performance e uso de memória","Para garantir consistência — se um VO pudesse ser modificado, objetos que o referenciam teriam seus dados alterados sem saber, quebrando invariantes do sistema","É um requisito obrigatório do compilador C# para records","Para facilitar a serialização JSON no ASP.NET Core"],answer:1,explanation:"Se o Dinheiro do saldo da Conta pudesse ser mutado externamente, a Conta perderia o controle de seu próprio estado. Imutabilidade garante que a Conta é a única responsável por alterar seu saldo via Depositar() e Sacar(). Por isso usamos record em C# — imutável por padrão."},{question:"Por que criar um Value Object Cpf em vez de usar string?",options:["Records são mais modernos e performáticos que strings","O VO garante que nenhum CPF inválido existe no sistema — a validação acontece na criação, antes de qualquer regra de negócio rodar","String não pode ser armazenada em colunas do SQL Server","O compilador exige types customizados para validação"],answer:1,explanation:"Com string cpf, o valor '12345' ou 'abc' passariam sem erro. Com o VO Cpf, a validação do dígito verificador ocorre no construtor — se o objeto existe, ele é válido. Isso elimina dezenas de 'if (cpf.Length != 11)' espalhados pelo código. Primitive Obsession é o Code Smell mais comum em sistemas financeiros."}]},{id:"m11t3",moduleId:"m11",title:"Aggregates, Repositories e Domain Services",theory:`Aggregates, Repositories e Domain Services são os padrões táticos do DDD — eles traduzem os conceitos estratégicos (Bounded Contexts, Entities, Value Objects) em código que funciona de verdade em produção.

AGGREGATE é um cluster de Entities e Value Objects tratados como uma unidade de consistência. Uma única Entity é o Aggregate Root — o único ponto de entrada para todo o cluster. Regra de ouro: toda mudança dentro de um Aggregate acontece PELO Root. Ninguém acessa uma Entity filha diretamente.

Exemplo concreto: Pedido é o Aggregate Root; ItensPedido são Entities dentro do Aggregate. Para adicionar um item, você chama pedido.AdicionarItem(), nunca itemPedido.Save(). O Root garante que as regras de negócio são respeitadas (ex: limite máximo de itens, valor mínimo). Outro exemplo: Conta é o Aggregate Root; Transacoes são Entities filhas — você chama conta.Depositar(), jamais transacao.Save().

Boundaries de transação: um Aggregate = uma transação de banco. Se dois Aggregates precisam ser consistentes ao mesmo tempo, algo está errado no seu design — provavelmente devem ser um só Aggregate ou usar eventual consistency com Domain Events. Referências entre Aggregates são apenas por Id (ContaId, PedidoId), nunca por referência de objeto — isso garante que Aggregates são independentes.

Anti-pattern: God Aggregate com 20 Entities filhas. Se salvar o Aggregate carrega 500 registros do banco, ele é grande demais. Pergunta-chave: "O que PRECISA ser consistente ao mesmo tempo?" — apenas esses elementos formam o Aggregate.

REPOSITORY é uma abstração de coleção para Aggregates. IContaRepository lida com Conta (Aggregate Root) — nunca com Transacao isoladamente. Um Repository por Aggregate Root. A interface fica no Domain; a implementação fica na Infrastructure. O Domain NUNCA referencia a Infrastructure — apenas a interface (inversão de dependência do SOLID).

DOMAIN SERVICE contém operações de domínio que não pertencem naturalmente a nenhuma Entity. Transferência entre duas Contas: Debitar pertence à ContaOrigem, Creditar pertence à ContaDestino, mas coordenar a transferência não pertence a nenhuma das duas. Domain Service é puro: tem regras de negócio, mas não tem estado, não acessa banco, não envia email. Application Service é diferente: orquestra (chama Repositories, dispara eventos, gerencia transações).`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Sem Aggregates: acesso direto a tudo
// ══════════════════════════════════════════════
public class TransacaoService
{
    private readonly AppDbContext _db;

    // Acessa Transacao diretamente, sem passar pela Conta
    public void CriarTransacao(int contaId, decimal valor,
        string tipo)
    {
        // Ninguém garante regras da Conta!
        var transacao = new Transacao
        {
            ContaId = contaId,
            Valor = valor,
            Tipo = tipo,
            Data = DateTime.Now
        };
        _db.Transacoes.Add(transacao); // Salva direto
        _db.SaveChanges();

        // BUG: Saldo da conta não foi atualizado!
        // BUG: Conta bloqueada pode ter transação!
        // BUG: Pode criar débito maior que o saldo!
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Aggregate Root protege invariantes
// ══════════════════════════════════════════════

// ── Aggregate Root: Conta ──────────────────────
public class Conta // Aggregate Root
{
    public ContaId Id { get; private set; }
    public Cpf TitularCpf { get; private set; }
    public Dinheiro Saldo { get; private set; }
    public StatusConta Status { get; private set; }

    // Coleção PRIVADA — só o Root gerencia
    private readonly List<Transacao> _transacoes = new();
    public IReadOnlyList<Transacao> Transacoes =>
        _transacoes.AsReadOnly();

    // Factory Method
    public static Conta Abrir(Cpf titularCpf,
        Dinheiro saldoInicial)
    {
        return new Conta
        {
            Id = ContaId.Novo(),
            TitularCpf = titularCpf,
            Saldo = saldoInicial,
            Status = StatusConta.Ativa
        };
    }

    // Toda operação passa pelo Root — regras garantidas
    public Result Depositar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");

        Saldo = Saldo.Somar(valor);
        _transacoes.Add(Transacao.CriarCredito(
            Id, valor, "Depósito"));
        return Result.Success();
    }

    public Result Sacar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        if (!Saldo.MaiorOuIgualA(valor))
            return Result.Failure("Saldo insuficiente");

        Saldo = Saldo.Subtrair(valor);
        _transacoes.Add(Transacao.CriarDebito(
            Id, valor, "Saque"));
        return Result.Success();
    }

    public Result Bloquear(string motivo)
    {
        if (Status == StatusConta.Encerrada)
            return Result.Failure("Conta encerrada");
        Status = StatusConta.Bloqueada;
        return Result.Success();
    }
}

// ── Entity filha: Transacao (dentro do Aggregate) ──
public class Transacao // Entity — não é Aggregate Root
{
    public TransacaoId Id { get; private set; }
    public ContaId ContaId { get; private set; }
    public Dinheiro Valor { get; private set; }
    public TipoTransacao Tipo { get; private set; }
    public string Descricao { get; private set; }
    public DateTime RealizadaEm { get; private set; }

    // Factory Methods — sem construtor público
    public static Transacao CriarCredito(ContaId contaId,
        Dinheiro valor, string descricao)
    {
        return new Transacao
        {
            Id = new TransacaoId(Guid.NewGuid()),
            ContaId = contaId,
            Valor = valor,
            Tipo = TipoTransacao.Credito,
            Descricao = descricao,
            RealizadaEm = DateTime.UtcNow
        };
    }

    public static Transacao CriarDebito(ContaId contaId,
        Dinheiro valor, string descricao)
    {
        return new Transacao
        {
            Id = new TransacaoId(Guid.NewGuid()),
            ContaId = contaId,
            Valor = valor,
            Tipo = TipoTransacao.Debito,
            Descricao = descricao,
            RealizadaEm = DateTime.UtcNow
        };
    }
}

// ── Repository: interface no Domain ────────────
namespace SistemaFinanceiro.Domain.Repositories;

// Um Repository POR Aggregate Root — nunca para Entity filha
public interface IContaRepository
{
    Task<Conta?> GetByIdAsync(ContaId id);
    Task<Conta?> GetByCpfAsync(Cpf cpf);
    Task<IReadOnlyList<Conta>> GetAtivasAsync();
    Task AddAsync(Conta conta);
    Task SaveChangesAsync();
    // NÃO existe GetTransacaoById — Transacao só via Conta
}

// ── Repository: implementação na Infrastructure ──
namespace SistemaFinanceiro.Infrastructure.Persistence;

public class ContaEfRepository : IContaRepository
{
    private readonly FinanceiroDbContext _db;

    public ContaEfRepository(FinanceiroDbContext db)
        => _db = db;

    public async Task<Conta?> GetByIdAsync(ContaId id) =>
        await _db.Contas
            .Include(c => c.Transacoes)
            .FirstOrDefaultAsync(c => c.Id == id);

    public async Task<Conta?> GetByCpfAsync(Cpf cpf) =>
        await _db.Contas
            .FirstOrDefaultAsync(c => c.TitularCpf == cpf);

    public async Task<IReadOnlyList<Conta>> GetAtivasAsync() =>
        await _db.Contas
            .Where(c => c.Status == StatusConta.Ativa)
            .ToListAsync();

    public async Task AddAsync(Conta conta) =>
        await _db.Contas.AddAsync(conta);

    public async Task SaveChangesAsync() =>
        await _db.SaveChangesAsync();
}

// ── Domain Service: TransferenciaService ───────
namespace SistemaFinanceiro.Domain.Services;

// Domain Service: regra de negócio que envolve DOIS Aggregates
// Sem estado, sem I/O, sem banco — puro
public class TransferenciaService
{
    public Result Executar(Conta origem, Conta destino,
        Dinheiro valor)
    {
        // Validação: mesma conta
        if (origem.Id == destino.Id)
            return Result.Failure(
                "Não é possível transferir para a mesma conta");

        // Debitar da origem (Root valida regras)
        var resultadoSaque = origem.Sacar(valor);
        if (!resultadoSaque.IsSuccess)
            return resultadoSaque;

        // Creditar no destino (Root valida regras)
        var resultadoDeposito = destino.Depositar(valor);
        if (!resultadoDeposito.IsSuccess)
        {
            // Rollback: devolver valor à origem
            origem.Depositar(valor);
            return resultadoDeposito;
        }

        return Result.Success();
    }
    // Note: TransferenciaService NÃO salva no banco
    // Quem salva é o Application Service (Use Case)
}`,checklist:["Definir os Aggregates do sistema financeiro: Conta como Root com Transacoes como Entities filhas","Criar IContaRepository com interface no projeto Domain/ — sem referência a EF Core ou Infrastructure","Implementar ContaEfRepository em Infrastructure/Persistence/ usando EF Core","Criar TransferenciaService como Domain Service puro (sem banco, sem email, sem estado)","Verificar que Domain/ não tem nenhuma referência a Infrastructure/ (dotnet list reference)"],quiz:[{question:"Por que acessar uma Entity filha diretamente (sem passar pelo Aggregate Root) é problemático?",options:["É mais lento por causa do carregamento lazy do EF Core","Viola os invariantes do Aggregate — o Root é responsável por garantir a consistência do cluster; acesso direto bypassa as regras de negócio","Não compila em C# quando a Entity é interna","O Entity Framework Core não suporta queries diretas em Entities filhas"],answer:1,explanation:"Se alguém cria uma Transacao diretamente no banco sem passar pela Conta, as regras (saldo suficiente, conta ativa, limite diário) são bypassadas. O Aggregate Root existe para garantir que TODAS as invariantes são respeitadas em TODAS as operações."},{question:"Quantos Repositories devem existir para um Aggregate com 3 Entities filhas?",options:["3 — um Repository para cada Entity do cluster","1 — apenas para o Aggregate Root, pois Entities filhas só existem dentro do contexto do Aggregate e não são gerenciadas independentemente","Depende do tamanho de cada Entity filha","1 por tabela do banco de dados"],answer:1,explanation:"Repository existe apenas para Aggregate Roots. Transacao é uma Entity filha de Conta — não deve ter ITransacaoRepository. Para buscar transações de uma conta, você carrega a Conta inteira (com Include) e acessa conta.Transacoes. Isso garante que as invariantes do Aggregate são sempre respeitadas."},{question:"Qual a diferença entre Domain Service e Application Service?",options:["Domain Service é mais rápido por não acessar banco de dados","Domain Service contém regras de negócio puras (sem I/O, sem banco, sem email); Application Service orquestra — chama Repositories, inicia transações, dispara eventos de integração","Application Service é da camada de apresentação (Controllers)","São a mesma coisa, apenas nomenclatura diferente por equipe"],answer:1,explanation:"TransferenciaService (Domain) sabe que não pode transferir para a mesma conta e valida saldos — regra de negócio pura. RealizarTransferenciaUseCase (Application) busca as Contas no Repository, chama o TransferenciaService, salva no banco e publica Domain Events — orquestração."}]},{id:"m11t4",moduleId:"m11",title:"Domain Events e Application Layer",theory:`Domain Events e a Application Layer completam a arquitetura DDD. Juntos, eles conectam as regras de negócio do Domain com o mundo externo (banco de dados, APIs, notificações) de forma desacoplada e testável.

DOMAIN EVENTS representam algo que ACONTECEU no domínio. Nomenclatura sempre no passado: ContaAberta, TransacaoRealizada, LimiteExcedido, ContaBloqueada. Não são comandos (AbrirConta) nem intenções — são fatos imutáveis. Quando uma Conta realiza um saque, ela registra o evento TransacaoRealizada. A Conta não sabe (e não deve saber) que existe um NotificacaoService ou um AuditoriaLogger — ela apenas registra o fato.

Vantagem: desacoplamento total. A Conta não depende de email, SMS, push notification, log ou cache — ela registra eventos e segue sua vida. Outros componentes se inscrevem para reagir a esses eventos. Adicionar um novo efeito colateral (ex: atualizar dashboard em tempo real) não requer alterar a Conta — basta criar um novo handler.

Implementação simples: uma lista de eventos no Aggregate, publicados APÓS o SaveChanges. Por quê após? Porque publicar antes poderia disparar notificações para uma operação que ainda vai falhar no banco. MediatR é a biblioteca mais usada no .NET para publicação de Domain Events (INotification + INotificationHandler).

Domain Events vs Integration Events: Domain Event é intra-processo (dentro da mesma aplicação, mesmo banco); Integration Event é inter-serviço (vai para RabbitMQ, Kafka — assunto de microsserviços, Fase 8).

APPLICATION LAYER é o orquestrador entre a API e o Domain. Cada Use Case (Application Service) corresponde a um caso de uso de negócio: AbrirContaUseCase, RealizarTransferenciaUseCase, GerarExtratoUseCase. Responsabilidades: buscar Aggregates via Repository, chamar Domain Services, publicar Domain Events, iniciar e commitar transações, mapear Domain → DTO para a API. O que a Application Layer NÃO faz: regras de negócio (Domain), acesso direto ao banco (Infrastructure), validação de formato (FluentValidation na API).

CLEAN ARCHITECTURE — a direção das dependências: Domain ← Application ← Infrastructure ← API. Domain não depende de ninguém. API depende de todos. Isso garante que o core do negócio é testável sem banco, sem HTTP, sem framework. Empresas como Nubank e iFood seguem esse padrão rigorosamente — o Domain é o ativo mais valioso da empresa.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Efeitos colaterais acoplados no Service
// ══════════════════════════════════════════════
public class ContaService
{
    private readonly AppDbContext _db;
    private readonly SmtpClient _smtp;
    private readonly ILogger _logger;
    private readonly CacheService _cache;

    // Cada novo efeito colateral = mais dependência aqui
    public void Depositar(int contaId, decimal valor)
    {
        var conta = _db.Contas.Find(contaId);
        conta.Saldo += valor;
        _db.SaveChanges();

        // Efeitos colaterais ACOPLADOS ao Service
        _smtp.Send(conta.Email, "Depósito realizado");
        _logger.LogInformation("Depósito: {Id}", contaId);
        _cache.Invalidar($"saldo:{contaId}");
        // Quer adicionar push notification? Muda AQUI
        // Quer adicionar webhook? Muda AQUI
        // Quer adicionar auditoria? Muda AQUI
        // Classe vira God Service com 20 dependências
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Domain Events + Application Layer
// ══════════════════════════════════════════════

// ── Interface base para Domain Events ──────────
namespace SistemaFinanceiro.Domain.Shared;

public interface IDomainEvent
{
    DateTime OcorridoEm { get; }
}

// ── Domain Events (fatos imutáveis) ────────────
namespace SistemaFinanceiro.Domain.Events;

public record ContaAbertaEvent(
    ContaId ContaId,
    Cpf TitularCpf,
    Dinheiro SaldoInicial,
    DateTime OcorridoEm
) : IDomainEvent;

public record TransacaoRealizadaEvent(
    ContaId ContaId,
    Dinheiro Valor,
    TipoTransacao Tipo,
    string Descricao,
    DateTime OcorridoEm
) : IDomainEvent;

public record ContaBloqueadaEvent(
    ContaId ContaId,
    string Motivo,
    DateTime OcorridoEm
) : IDomainEvent;

// ── Aggregate com lista de eventos ─────────────
public class Conta
{
    // ... propriedades e Value Objects do tópico 11.2 ...

    // Lista INTERNA de eventos pendentes
    private readonly List<IDomainEvent> _eventos = new();
    public IReadOnlyList<IDomainEvent> Eventos =>
        _eventos.AsReadOnly();
    public void LimparEventos() => _eventos.Clear();

    public static Conta Abrir(Cpf titularCpf,
        Dinheiro saldoInicial)
    {
        var conta = new Conta
        {
            Id = ContaId.Novo(),
            TitularCpf = titularCpf,
            Saldo = saldoInicial,
            Status = StatusConta.Ativa
        };
        // Registra o fato: conta foi aberta
        conta._eventos.Add(new ContaAbertaEvent(
            conta.Id, titularCpf, saldoInicial,
            DateTime.UtcNow));
        return conta;
    }

    public Result Depositar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        Saldo = Saldo.Somar(valor);
        // Registra o fato: transação realizada
        _eventos.Add(new TransacaoRealizadaEvent(
            Id, valor, TipoTransacao.Credito,
            "Depósito", DateTime.UtcNow));
        return Result.Success();
    }

    public Result Bloquear(string motivo)
    {
        if (Status == StatusConta.Encerrada)
            return Result.Failure("Conta encerrada");
        Status = StatusConta.Bloqueada;
        _eventos.Add(new ContaBloqueadaEvent(
            Id, motivo, DateTime.UtcNow));
        return Result.Success();
    }
}

// ── Use Case: Application Layer ────────────────
namespace SistemaFinanceiro.Application.UseCases;

// Um Use Case por caso de uso de negócio
public class RealizarTransferenciaUseCase
{
    private readonly IContaRepository _contaRepo;
    private readonly TransferenciaService _transferencia;
    private readonly IPublisher _publisher;

    public RealizarTransferenciaUseCase(
        IContaRepository contaRepo,
        TransferenciaService transferencia,
        IPublisher publisher)
    {
        _contaRepo = contaRepo;
        _transferencia = transferencia;
        _publisher = publisher;
    }

    public async Task<Result> ExecuteAsync(
        RealizarTransferenciaCommand cmd)
    {
        // 1. Buscar Aggregates via Repository
        var origem = await _contaRepo
            .GetByIdAsync(cmd.ContaOrigemId);
        if (origem is null)
            return Result.Failure("Conta origem não encontrada");

        var destino = await _contaRepo
            .GetByIdAsync(cmd.ContaDestinoId);
        if (destino is null)
            return Result.Failure("Conta destino não encontrada");

        // 2. Chamar Domain Service (regras de negócio)
        var resultado = _transferencia
            .Executar(origem, destino, cmd.Valor);
        if (!resultado.IsSuccess)
            return resultado;

        // 3. Persistir (Infrastructure via interface)
        await _contaRepo.SaveChangesAsync();

        // 4. Publicar Domain Events APÓS SaveChanges
        foreach (var evento in origem.Eventos)
            await _publisher.Publish(evento);
        foreach (var evento in destino.Eventos)
            await _publisher.Publish(evento);

        origem.LimparEventos();
        destino.LimparEventos();

        return Result.Success();
    }
}

// ── Command (input do Use Case) ────────────────
public record RealizarTransferenciaCommand(
    ContaId ContaOrigemId,
    ContaId ContaDestinoId,
    Dinheiro Valor
);

// ── Handlers dos Domain Events ─────────────────
// Cada handler é independente — adicionar novo = 0 mudanças
using MediatR;

public class EnviarNotificacaoHandler
    : INotificationHandler<TransacaoRealizadaEvent>
{
    private readonly INotificacaoService _notificacao;

    public EnviarNotificacaoHandler(
        INotificacaoService notificacao)
        => _notificacao = notificacao;

    public async Task Handle(
        TransacaoRealizadaEvent evt,
        CancellationToken ct)
    {
        await _notificacao.EnviarAsync(evt.ContaId,
            $"Transação de {evt.Valor} realizada");
    }
}

public class RegistrarAuditoriaHandler
    : INotificationHandler<TransacaoRealizadaEvent>
{
    private readonly IAuditoriaLogger _auditoria;

    public RegistrarAuditoriaHandler(
        IAuditoriaLogger auditoria)
        => _auditoria = auditoria;

    public async Task Handle(
        TransacaoRealizadaEvent evt,
        CancellationToken ct)
    {
        await _auditoria.RegistrarAsync(
            $"Conta {evt.ContaId}: {evt.Tipo} de {evt.Valor}");
    }
}

// ── Clean Architecture: direção das dependências ─
// Domain/      → não depende de ninguém
// Application/ → depende de Domain/
// Infrastructure/ → depende de Domain/ e Application/
// API/         → depende de todos
//
// Domain.csproj:    ZERO referências externas
// Application.csproj: <ProjectReference Domain.csproj />
// Infrastructure.csproj: <ProjectReference Domain.csproj />
//                        <ProjectReference Application.csproj />
// API.csproj: <ProjectReference Application.csproj />
//             <ProjectReference Infrastructure.csproj />`,checklist:["Criar a interface IDomainEvent e adicionar lista de eventos na Entity Conta (Aggregate Root)","Implementar ContaAbertaEvent e TransacaoRealizadaEvent como records imutáveis","Instalar MediatR (dotnet add package MediatR) e criar o Use Case RealizarTransferenciaUseCase","Criar um Handler que loga o evento TransacaoRealizada no console (simulando notificação)","Verificar que Domain Events são publicados APÓS SaveChanges — nunca antes"],quiz:[{question:"Por que Domain Events são nomeados no passado (TransacaoRealizada e não RealizarTransacao)?",options:["É apenas convenção sem motivo técnico real","Porque representam algo que JÁ aconteceu no domínio — um fato imutável, não uma intenção ou comando","Para diferir da nomenclatura de Controllers no ASP.NET","É exigência da biblioteca MediatR para publicação"],answer:1,explanation:"Domain Events são fatos: TransacaoRealizada, ContaAberta, LimiteExcedido. Comandos são intenções: RealizarTransacao, AbrirConta. Essa distinção é fundamental — você não pode 'desfazer' um evento, mas pode rejeitar um comando. O Domain registra eventos após a regra de negócio executar com sucesso."},{question:"Qual a responsabilidade de um Use Case na Application Layer?",options:["Conter as regras de negócio validando saldo, limites e status da conta","Orquestrar — buscar Aggregates, chamar Domain Services, salvar via Repository e publicar Domain Events. Sem regras de negócio (Domain) e sem acesso direto ao banco (Infrastructure)","Substituir os Controllers da API e receber requisições HTTP","Validar os dados de entrada usando FluentValidation"],answer:1,explanation:"O Use Case é um orquestrador: busca Conta no Repository (I/O), chama TransferenciaService.Executar() (regra de negócio no Domain), salva com SaveChanges (I/O), e publica eventos (notificação). Ele NÃO contém regras de negócio — isso é responsabilidade do Domain."},{question:"Por que os Domain Events são publicados APÓS o SaveChanges e não antes?",options:["Por convenção do MediatR e padrão de nomenclatura","Para garantir que os efeitos colaterais (notificação, auditoria) só acontecem se a transação foi commitada com sucesso — publicar antes poderia disparar ações para uma operação que ainda vai falhar","Por limitação técnica do Entity Framework Core com transações","Não importa a ordem — é apenas preferência do desenvolvedor"],answer:1,explanation:"Se o SaveChanges falha (erro de concorrência, constraint violation), os eventos nunca devem ser disparados. Imagine enviar 'Transferência de R$10.000 realizada' ao cliente quando o banco rollback a operação. Publicar APÓS o commit garante que só notificamos sobre fatos que realmente persistiram."}]}]},fp={id:"m12",title:"FluentValidation",icon:"✅",week:"Semana 12",color:"#F59E0B",topics:[{id:"m12t1",moduleId:"m12",title:"Validators e Regras Básicas",theory:`Por que FluentValidation em vez de Data Annotations? Data Annotations ([Required], [MaxLength]) poluem o modelo com atributos de validação, não suportam lógica condicional complexa, são difíceis de testar isoladamente e misturam responsabilidades (o modelo sabe como se validar — violação de SRP). FluentValidation resolve tudo isso: validação como classe separada, fluent API legível, testável independentemente e com suporte a regras complexas e mensagens em português.

A base: AbstractValidator<T>. Todo validator herda dessa classe e define regras no construtor. Regras básicas mais usadas: NotEmpty (campo obrigatório), NotNull, MaximumLength/MinimumLength (tamanho de strings), GreaterThan/LessThan (valores numéricos), InclusiveBetween (faixas), Must (lógica customizada inline), EmailAddress (formato de email), Matches (regex).

Mensagens customizadas: cada regra pode ter .WithMessage("CPF inválido: {PropertyValue}"). Placeholders como {PropertyName} e {PropertyValue} são preenchidos automaticamente. Em projetos corporativos brasileiros, mensagens DEVEM estar em português — o usuário final não lê inglês.

Severidades: Error (padrão, bloqueia a operação), Warning (alerta sem bloquear) e Info (informativo). No sistema financeiro, "Saldo baixo" pode ser Warning enquanto "CPF inválido" é Error.

Instalação: dotnet add package FluentValidation.AspNetCore (versão 11.x para .NET 8). O pacote .AspNetCore já inclui integração com DI e pipeline do ASP.NET. Empresas como Nubank e PicPay padronizaram FluentValidation em todos os projetos .NET — Data Annotations virtual não existem em projetos sérios.

A grande vantagem para testes: um validator é testável SEM subir a API. Basta instanciar, chamar .Validate() e verificar o resultado. Zero infraestrutura necessária.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Data Annotations poluindo o modelo
// ══════════════════════════════════════════════
public class CriarContaRequest
{
    [Required(ErrorMessage = "CPF is required")]
    [StringLength(11, MinimumLength = 11)]
    public string Cpf { get; set; }

    [Required]
    [MinLength(3)]
    [MaxLength(100)]
    public string Nome { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Range(0, double.MaxValue)]
    public decimal SaldoInicial { get; set; }

    // Problemas:
    // 1. Mensagens em inglês misturadas com português
    // 2. Validação de CPF algorítmica? Impossível aqui
    // 3. Para testar, precisa subir o controller inteiro
    // 4. Modelo mistura dados + regras (viola SRP)
    // 5. Lógica condicional? Gambiarra + atributos custom
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — FluentValidation: limpo e testável
// ══════════════════════════════════════════════
using FluentValidation;

// Modelo LIMPO — sem atributos de validação
public record CriarContaRequest(
    string Cpf,
    string Nome,
    string Email,
    decimal SaldoInicial
);

// Validator SEPARADO — classe própria, SRP respeitado
public class CriarContaRequestValidator
    : AbstractValidator<CriarContaRequest>
{
    public CriarContaRequestValidator()
    {
        RuleFor(x => x.Cpf)
            .NotEmpty()
                .WithMessage("CPF é obrigatório")
            .Length(11)
                .WithMessage("CPF deve ter 11 dígitos")
            .Must(ValidarCpf)
                .WithMessage("CPF inválido: {PropertyValue}");

        RuleFor(x => x.Nome)
            .NotEmpty()
                .WithMessage("Nome é obrigatório")
            .MinimumLength(3)
                .WithMessage("Nome deve ter no mínimo 3 caracteres")
            .MaximumLength(100)
                .WithMessage("Nome deve ter no máximo 100 caracteres");

        RuleFor(x => x.Email)
            .NotEmpty()
                .WithMessage("Email é obrigatório")
            .EmailAddress()
                .WithMessage("Formato de email inválido");

        RuleFor(x => x.SaldoInicial)
            .GreaterThanOrEqualTo(0)
                .WithMessage("Saldo inicial não pode ser negativo");
    }

    private static bool ValidarCpf(string cpf)
    {
        if (string.IsNullOrWhiteSpace(cpf)) return false;
        var limpo = new string(cpf.Where(char.IsDigit).ToArray());
        if (limpo.Length != 11) return false;
        if (limpo.Distinct().Count() == 1) return false;
        // Validação dos dígitos verificadores
        var soma1 = 0;
        for (int i = 0; i < 9; i++)
            soma1 += (limpo[i] - '0') * (10 - i);
        var dig1 = 11 - (soma1 % 11);
        if (dig1 >= 10) dig1 = 0;
        if ((limpo[9] - '0') != dig1) return false;
        var soma2 = 0;
        for (int i = 0; i < 10; i++)
            soma2 += (limpo[i] - '0') * (11 - i);
        var dig2 = 11 - (soma2 % 11);
        if (dig2 >= 10) dig2 = 0;
        return (limpo[10] - '0') == dig2;
    }
}

// Validator de Transferência
public class RealizarTransferenciaRequestValidator
    : AbstractValidator<RealizarTransferenciaRequest>
{
    public RealizarTransferenciaRequestValidator()
    {
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor deve ser positivo")
            .LessThanOrEqualTo(50_000m)
                .WithMessage("Valor máximo por transferência: R\\$50.000");

        RuleFor(x => x.ContaDestinoId)
            .NotEmpty()
                .WithMessage("Conta destino é obrigatória");
    }
}

// ── Teste unitário do Validator (SEM ASP.NET) ──
using FluentAssertions;

[Fact]
public void CriarConta_CpfInvalido_DeveRetornarErro()
{
    var validator = new CriarContaRequestValidator();
    var request = new CriarContaRequest(
        Cpf: "12345",  // CPF inválido
        Nome: "João Silva",
        Email: "joao@email.com",
        SaldoInicial: 100m
    );

    var result = validator.Validate(request);

    result.IsValid.Should().BeFalse();
    result.Errors.Should().Contain(e =>
        e.PropertyName == "Cpf");
}

[Fact]
public void CriarConta_DadosValidos_DevePassar()
{
    var validator = new CriarContaRequestValidator();
    var request = new CriarContaRequest(
        Cpf: "52998224725", // CPF válido
        Nome: "Maria Santos",
        Email: "maria@email.com",
        SaldoInicial: 500m
    );

    var result = validator.Validate(request);

    result.IsValid.Should().BeTrue();
}`,checklist:["Instalar FluentValidation.AspNetCore no projeto API (dotnet add package FluentValidation.AspNetCore)","Criar CriarContaRequestValidator com regras NotEmpty, Length, Must(ValidarCpf) e mensagens em português","Criar RealizarTransferenciaRequestValidator com regras de valor positivo e limite máximo","Testar os validators isoladamente (sem subir a API) — instanciar, Validate(), verificar resultado","Verificar que todas as mensagens de erro estão em português e são descritivas para o usuário final"],quiz:[{question:"Qual a principal vantagem do FluentValidation sobre Data Annotations?",options:["FluentValidation é mais rápido em runtime","FluentValidation separa a lógica de validação do modelo (SRP), suporta regras complexas e condicionais, e é testável isoladamente sem subir a API","Data Annotations não funciona com .NET 8","FluentValidation gera documentação automática no Swagger"],answer:1,explanation:"Data Annotations polui o modelo com atributos, não suporta lógica condicional (When/Unless) e exige subir o controller para testar. FluentValidation cria classes separadas (SRP), suporta Must(), When(), MustAsync() e é testável com new Validator().Validate()."},{question:"Como testar um Validator sem subir a API ASP.NET?",options:["Não é possível — validators dependem do pipeline HTTP","Instanciando diretamente: new CriarContaRequestValidator(), chamando .Validate(request) e verificando result.IsValid e result.Errors","Usando HttpClient para fazer POST no endpoint","Mockando o AbstractValidator<T> com Moq"],answer:1,explanation:"Essa é a grande vantagem: var validator = new CriarContaRequestValidator(); var result = validator.Validate(request); — zero infraestrutura. Testa todas as regras em milissegundos, sem banco, sem HTTP, sem DI container."},{question:'O que .WithMessage("CPF inválido: {PropertyValue}") faz no FluentValidation?',options:["Lança uma exceção com essa mensagem","Define uma mensagem de erro customizada onde {PropertyValue} é substituído pelo valor real enviado — ex: 'CPF inválido: 12345'","Gera um log com essa mensagem","Exibe um alerta no console do servidor"],answer:1,explanation:"WithMessage personaliza a mensagem de erro retornada ao cliente. Placeholders como {PropertyValue} (valor enviado), {PropertyName} (nome da propriedade) e {ComparisonValue} (valor de comparação) são preenchidos automaticamente pelo FluentValidation."}]},{id:"m12t2",moduleId:"m12",title:"Regras Customizadas e Condicionais",theory:`FluentValidation brilha em validações complexas que Data Annotations simplesmente não consegue expressar. Must(), Custom(), MustAsync(), When(), Unless(), RuleForEach() e SetValidator() são as ferramentas que transformam validação de "campo obrigatório" em lógica de negócio real.

Must() é a regra customizada inline mais usada. Recebe uma função que retorna bool: .Must(cpf => ValidarDigitosCpf(cpf)). Perfeito para validações que cabem em uma linha. Custom() é para regras mais complexas que precisam adicionar múltiplas mensagens de erro manualmente.

MustAsync() é essencial em sistemas reais: validações que precisam consultar o banco de dados. Exemplo: verificar se o CPF já está cadastrado. MustAsync((cpf, ct) => !repositorio.CpfExisteAsync(cpf, ct)). O CancellationToken é importante para não bloquear threads em consultas demoradas.

Regras condicionais: When() aplica uma regra apenas se uma condição for verdadeira. Exemplo: "Banco destino é obrigatório APENAS quando o tipo é TED" — When(x => x.Tipo == TipoTransferencia.Ted, () => RuleFor(...)). Unless() é o inverso: aplica a regra exceto quando a condição for verdadeira.

Dependência entre propriedades: RuleFor(x => x.DataFim).GreaterThan(x => x.DataInicio) garante que data fim é maior que data início. FluentValidation suporta referências cruzadas nativamente.

RuleForEach() valida cada item de uma coleção individualmente. Se um pedido tem uma lista de itens, cada item precisa de valor positivo e quantidade mínima. SetValidator() compõe validators: o PedidoValidator usa new ItemPedidoValidator() para cada item da lista.

Cascade mode controla o comportamento quando uma regra falha: StopOnFirstFailure para a validação da propriedade no primeiro erro (útil quando regras dependem umas das outras); Continue valida todas as regras e retorna todos os erros de uma vez (melhor UX — mostra todos os problemas).`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Validação com if/else espaguete
// ══════════════════════════════════════════════
public class TransacaoService
{
    public IActionResult Criar(TransacaoRequest req)
    {
        var erros = new List<string>();
        if (req.Valor <= 0)
            erros.Add("Valor inválido");
        if (req.Tipo == "TED" && string.IsNullOrEmpty(req.BancoDestino))
            erros.Add("Banco destino obrigatório para TED");
        if (req.Parcelas != null)
        {
            foreach (var p in req.Parcelas)
            {
                if (p.Valor <= 0) erros.Add("Parcela inválida");
                if (p.DataVencimento < DateTime.Today)
                    erros.Add("Data de parcela no passado");
            }
        }
        if (req.DataVencimento.HasValue &&
            req.DataEmissao.HasValue &&
            req.DataVencimento < req.DataEmissao)
            erros.Add("Datas inconsistentes");
        // 50 linhas de if/else... inmantenível
        if (erros.Any()) return BadRequest(erros);
        // ...
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — FluentValidation: limpo e expressivo
// ══════════════════════════════════════════════

// ── Validator de Parcela (será composto) ───────
public class ParcelaValidator
    : AbstractValidator<ParcelaRequest>
{
    public ParcelaValidator()
    {
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor da parcela deve ser positivo");

        RuleFor(x => x.DataVencimento)
            .GreaterThanOrEqualTo(DateOnly.FromDateTime(DateTime.Today))
                .WithMessage("Data de vencimento não pode ser no passado");

        RuleFor(x => x.Numero)
            .GreaterThan(0)
                .WithMessage("Número da parcela deve ser positivo");
    }
}

// ── Validator principal com regras condicionais ─
public class TransacaoRequestValidator
    : AbstractValidator<TransacaoRequest>
{
    private readonly IContaRepository _contaRepo;

    // Injeção de dependência no Validator (para MustAsync)
    public TransacaoRequestValidator(
        IContaRepository contaRepo)
    {
        _contaRepo = contaRepo;

        // Regra básica
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor deve ser positivo")
            .LessThanOrEqualTo(100_000m)
                .WithMessage("Valor máximo: R\\$100.000");

        // Regra CONDICIONAL: banco destino só para TED
        When(x => x.Tipo == TipoTransferencia.Ted, () =>
        {
            RuleFor(x => x.BancoDestino)
                .NotEmpty()
                    .WithMessage("Banco destino é obrigatório para TED");

            RuleFor(x => x.AgenciaDestino)
                .NotEmpty()
                    .WithMessage("Agência destino é obrigatória para TED");
        });

        // Dependência entre propriedades
        RuleFor(x => x.DataVencimento)
            .GreaterThan(x => x.DataEmissao)
                .WithMessage("Data de vencimento deve ser posterior à emissão")
            .When(x => x.DataVencimento.HasValue
                     && x.DataEmissao.HasValue);

        // RuleForEach: valida cada parcela com SetValidator
        RuleForEach(x => x.Parcelas)
            .SetValidator(new ParcelaValidator())
            .When(x => x.Parcelas != null
                     && x.Parcelas.Any());

        // MustAsync: validação assíncrona com banco
        RuleFor(x => x.ContaOrigemId)
            .MustAsync(ContaExisteAsync)
                .WithMessage("Conta de origem não encontrada");

        // Must com lógica customizada inline
        RuleFor(x => x.Descricao)
            .Must(desc => !desc?.Contains("teste",
                StringComparison.OrdinalIgnoreCase) ?? true)
                .WithMessage("Descrição não pode conter 'teste' em produção")
            .When(x => !string.IsNullOrEmpty(x.Descricao));
    }

    // Método assíncrono para validação com banco
    private async Task<bool> ContaExisteAsync(
        Guid contaId, CancellationToken ct)
    {
        var conta = await _contaRepo.GetByIdAsync(
            new ContaId(contaId));
        return conta is not null;
    }
}

// ── Validator composto com Cascade Mode ────────
public class ExtratoFiltroValidator
    : AbstractValidator<ExtratoFiltroRequest>
{
    public ExtratoFiltroValidator()
    {
        // StopOnFirstFailure: se NotEmpty falhar,
        // não tenta GreaterThan (evita NullReference)
        RuleLevelCascadeMode = CascadeMode.Stop;

        RuleFor(x => x.ContaId)
            .NotEmpty()
                .WithMessage("Conta é obrigatória");

        // When: valida datas apenas se ambas preenchidas
        When(x => x.DataInicio.HasValue, () =>
        {
            RuleFor(x => x.DataFim)
                .NotNull()
                    .WithMessage("Informe data fim quando data início é preenchida")
                .GreaterThanOrEqualTo(x => x.DataInicio!.Value)
                    .WithMessage("Data fim deve ser >= data início");
        });

        // Unless: limite obrigatório EXCETO para admin
        RuleFor(x => x.Limite)
            .InclusiveBetween(1, 1000)
                .WithMessage("Limite deve estar entre 1 e 1.000")
            .Unless(x => x.IsAdmin);
    }
}`,checklist:["Criar uma regra com Must() que valida CPF pelo algoritmo de dígitos verificadores","Usar When() para aplicar regra de banco destino apenas quando tipo é TED","Criar MustAsync() que verifica se a conta existe no banco via IContaRepository","Usar RuleForEach() com SetValidator() para validar lista de parcelas","Testar isoladamente cada caminho condicional (When/Unless) com dados específicos"],quiz:[{question:"Qual a diferença entre Must() e MustAsync() no FluentValidation?",options:["Must é mais rápido e MustAsync é mais lento","Must() executa validação síncrona (cálculos, regex); MustAsync() executa validação assíncrona (consultas ao banco, APIs externas) sem bloquear threads","MustAsync só funciona com Entity Framework Core","Não há diferença prática — são alias para o mesmo método"],answer:1,explanation:"Must(cpf => ValidarDigitos(cpf)) é síncrono — perfeito para cálculos locais. MustAsync((id, ct) => repo.ExisteAsync(id, ct)) é assíncrono — necessário quando a validação depende de I/O (banco, API). Sem async, a thread ficaria bloqueada esperando o banco responder."},{question:"Quando usar When() no FluentValidation?",options:["Sempre, em todas as regras, como boa prática","Quando uma regra só deve ser aplicada se uma condição específica for verdadeira — ex: banco destino obrigatório apenas quando tipo é TED","Apenas para validações assíncronas","Para substituir o operador ternário em C#"],answer:1,explanation:"When(x => x.Tipo == TED, () => RuleFor(x => x.Banco).NotEmpty()) significa: 'valide banco destino APENAS se tipo for TED'. Para PIX, a regra é ignorada. Unless() é o inverso: aplica a regra EXCETO quando a condição é verdadeira."},{question:"O que RuleForEach() faz no FluentValidation?",options:["Repete a mesma regra várias vezes para um único campo","Aplica um validator a cada item de uma coleção individualmente — cada parcela de um pedido é validada pelo ParcelaValidator","Executa todas as regras em paralelo","Valida apenas o primeiro item da coleção"],answer:1,explanation:"RuleForEach(x => x.Parcelas).SetValidator(new ParcelaValidator()) aplica todas as regras do ParcelaValidator em CADA parcela da lista. Se a parcela #3 tem valor negativo, o erro especifica exatamente qual parcela falhou. Perfeito para validar listas de itens de pedido, parcelas, etc."}]},{id:"m12t3",moduleId:"m12",title:"Integração com ASP.NET Core e DI",theory:`Integrar FluentValidation com ASP.NET Core e DI é o que transforma validators de "classes avulsas" em uma pipeline de validação automática — onde NENHUM request mal-formado chega ao controller.

Registro automático: builder.Services.AddValidatorsFromAssemblyContaining<CriarContaRequestValidator>() escaneia o assembly inteiro e registra TODOS os validators encontrados no DI container. Chega de registrar um por um. Quando você cria um novo validator, ele já funciona automaticamente.

Customizar a resposta de erro 400: por padrão, ASP.NET retorna um formato genérico. Em projetos corporativos, usamos ProblemDetails (RFC 7807) com lista de erros estruturada — campo, mensagem, severidade. Isso padroniza a resposta para qualquer frontend ou client API.

ValidationBehavior com MediatR Pipeline: o padrão mais elegante. Cria-se um IPipelineBehavior<TRequest, TResponse> que intercepta TODOS os commands antes deles chegarem no handler. Se o request tem um validator registrado, ele é executado automaticamente. O handler NUNCA recebe dados inválidos. Zero código de validação nos controllers ou use cases.

Onde validar: esta é a fronteira clara. FluentValidation na API valida "o request faz sentido técnico?" — formato do CPF, email válido, valor positivo. O Domain valida "a operação é permitida pelo negócio?" — saldo suficiente, conta ativa, limite não excedido. Nunca misture as duas — se o FluentValidation está verificando saldo, algo está errado na arquitetura.

Erro 400 vs 422: 400 Bad Request é para dados malformados (CPF com 5 dígitos); 422 Unprocessable Entity é para dados bem-formados mas semanticamente inválidos (saldo insuficiente). FluentValidation retorna 400; o Domain retorna erros que o middleware mapeia para 422.

Injetar serviços: use o construtor do validator para receber interfaces do DI. TransacaoRequestValidator(IContaRepository repo) permite MustAsync que consulta o banco. O DI container resolve automaticamente quando o validator é usado.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Validação manual em cada controller
// ══════════════════════════════════════════════
[ApiController]
[Route("api/[controller]")]
public class ContasController : ControllerBase
{
    [HttpPost]
    public IActionResult Criar([FromBody] CriarContaRequest req)
    {
        // Validação manual duplicada em cada endpoint
        var validator = new CriarContaRequestValidator();
        var result = validator.Validate(req);
        if (!result.IsValid)
        {
            var erros = result.Errors
                .Select(e => e.ErrorMessage).ToList();
            return BadRequest(erros); // Formato inconsistente
        }
        // ... lógica
    }

    [HttpPost("transferir")]
    public IActionResult Transferir(
        [FromBody] TransferenciaRequest req)
    {
        // Mesma validação manual... copiar e colar
        var validator = new TransferenciaRequestValidator();
        var result = validator.Validate(req);
        if (!result.IsValid)
            return BadRequest(result.Errors
                .Select(e => e.ErrorMessage));
        // ... lógica
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Pipeline automática com DI
// ══════════════════════════════════════════════

// ── Program.cs: registro centralizado ──────────
var builder = WebApplication.CreateBuilder(args);

// Registra TODOS os validators do assembly automaticamente
builder.Services.AddValidatorsFromAssemblyContaining
    <CriarContaRequestValidator>();

// Registra MediatR + Pipeline Behaviors
builder.Services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssemblyContaining<Program>();
    // Adiciona validação automática na pipeline
    cfg.AddBehavior(
        typeof(IPipelineBehavior<,>),
        typeof(ValidationBehavior<,>));
});

// Desabilita validação automática do ModelState
// (FluentValidation substitui completamente)
builder.Services.Configure<ApiBehaviorOptions>(opt =>
    opt.SuppressModelStateInvalidModelFilter = true);

var app = builder.Build();

// Middleware global de tratamento de erros
app.UseMiddleware<ExceptionHandlingMiddleware>();

app.MapControllers();
app.Run();

// ── ValidationBehavior: pipeline MediatR ───────
using FluentValidation;
using MediatR;

public class ValidationBehavior<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>>
        _validators;

    public ValidationBehavior(
        IEnumerable<IValidator<TRequest>> validators)
        => _validators = validators;

    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken ct)
    {
        if (!_validators.Any())
            return await next(); // Sem validator = passa

        var context = new ValidationContext<TRequest>(request);

        // Executa TODOS os validators em paralelo
        var failures = (await Task.WhenAll(
            _validators.Select(v =>
                v.ValidateAsync(context, ct))))
            .SelectMany(r => r.Errors)
            .Where(f => f != null)
            .ToList();

        if (failures.Count > 0)
            throw new ValidationException(failures);

        return await next(); // Tudo válido — segue
    }
}

// ── Middleware: ProblemDetails padronizado ──────
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionHandlingMiddleware(RequestDelegate next)
        => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (ValidationException ex)
        {
            context.Response.StatusCode = 400;
            context.Response.ContentType = "application/json";

            var problemDetails = new
            {
                type = "https://tools.ietf.org/html/rfc7807",
                title = "Erro de validação",
                status = 400,
                errors = ex.Errors.Select(e => new
                {
                    campo = e.PropertyName,
                    mensagem = e.ErrorMessage,
                    valorEnviado = e.AttemptedValue
                })
            };

            await context.Response.WriteAsJsonAsync(
                problemDetails);
        }
    }
}

// ── Controller LIMPO: zero validação manual ────
[ApiController]
[Route("api/[controller]")]
public class ContasController : ControllerBase
{
    private readonly IMediator _mediator;

    public ContasController(IMediator mediator)
        => _mediator = mediator;

    [HttpPost]
    public async Task<IActionResult> Criar(
        [FromBody] CriarContaCommand cmd)
    {
        // ValidationBehavior valida antes de chegar aqui
        var resultado = await _mediator.Send(cmd);
        return Ok(resultado);
        // Se o request é inválido, o middleware retorna 400
        // O controller NÃO sabe que validação existe
    }
}`,checklist:["Registrar validators com AddValidatorsFromAssemblyContaining no Program.cs","Customizar resposta de 400 para retornar ProblemDetails (RFC 7807) com lista de erros estruturada","Criar o ValidationBehavior<TRequest, TResponse> para o MediatR pipeline","Testar que o endpoint retorna 400 com mensagens em português ao enviar dados inválidos","Injetar IContaRepository em um validator via construtor para validação assíncrona com MustAsync"],quiz:[{question:"Qual a vantagem de AddValidatorsFromAssemblyContaining sobre registrar validators manualmente?",options:["É mais rápido em runtime","Escaneia o assembly inteiro e registra automaticamente TODOS os validators encontrados — ao criar um novo validator, ele já funciona sem precisar registrar no Program.cs","Registra apenas validators de um namespace específico","Funciona apenas com MediatR"],answer:1,explanation:"Com registro manual, cada novo validator exige uma linha no Program.cs — fácil esquecer. AddValidatorsFromAssemblyContaining encontra todos os AbstractValidator<T> automaticamente. O time cria o validator e ele já funciona na próxima requisição."},{question:"Qual a diferença entre erro 400 e erro 422 em uma API?",options:["400 é para GET e 422 é para POST","400 Bad Request é para dados malformados (CPF com 5 dígitos); 422 Unprocessable Entity é para dados bem-formados mas semanticamente inválidos (saldo insuficiente)","São sinônimos — ambos indicam erro do cliente","422 é mais moderno e substitui o 400"],answer:1,explanation:"FluentValidation retorna 400: 'CPF deve ter 11 dígitos' (formato inválido). O Domain retorna erros mapeados para 422: 'Saldo insuficiente para transferência' (o request é válido tecnicamente, mas o negócio não permite). Essa distinção ajuda o frontend a tratar erros de forma diferente."},{question:"Por que usar ValidationBehavior no pipeline do MediatR em vez de validar no controller?",options:["É mais rápido que validar no controller","Centraliza a validação: TODOS os commands passam pelo behavior automaticamente — zero duplicação, zero esquecimento, e o controller/handler nunca recebe dados inválidos","O MediatR exige que a validação seja feita no pipeline","Controllers não suportam FluentValidation diretamente"],answer:1,explanation:"Sem o behavior, cada controller repete var result = validator.Validate(req). Com o behavior, a validação é automática: se existe um validator para aquele request, ele é executado antes do handler. O handler pode confiar que os dados são válidos. DRY na prática."}]},{id:"m12t4",moduleId:"m12",title:"Validação em Camadas (Domain + Application)",theory:`A arquitetura de validação corporativa em 3 camadas é o que separa um projeto amador de um projeto pronto para produção. Cada camada valida o que lhe compete, com responsabilidades claras e sem sobreposição.

CAMADA 1 — API (FluentValidation): Valida formato, tipos, tamanhos. "O campo CPF tem 11 dígitos?" "O email tem formato válido?" "O valor é positivo?" Não sabe se o CPF é matematicamente válido ou se a conta existe. Retorna 400 Bad Request. É a primeira linha de defesa — barra requests óbviamente inválidos antes de qualquer processamento.

CAMADA 2 — Domain (invariantes dos Aggregates e Value Objects): Valida regras de negócio puras. "O CPF é matematicamente válido?" (Value Object Cpf). "Saldo é suficiente para o saque?" (Aggregate Conta). "Conta está ativa?" (invariante do Aggregate). Retorna Result<T, DomainError> — NUNCA lança exceção para fluxo de controle. Exceções são para situações inesperadas (banco caiu, rede falhou); erros de negócio são esperados e tratáveis.

CAMADA 3 — Application (validação de contexto e estado): Valida regras que dependem de estado externo. "Esta conta existe no banco?" "O CPF está em lista negra?" "O limite já foi aprovado?". Retorna Result<T, ApplicationError>. Fica entre a API e o Domain.

RESULT PATTERN: a alternativa elegante a exceções para erros esperados. Em vez de throw new SaldoInsuficienteException(), retorna Result.Failure("Saldo insuficiente"). O caller decide o que fazer — mapear para HTTP 422, exibir mensagem, logar, etc. Exceções devem ser para o inesperado (NullReferenceException, TimeoutException).

Mapeamento de erros para HTTP Status Codes: ValidationError → 400 Bad Request (dados malformados); ApplicationError.NaoEncontrado → 404 Not Found (recurso não existe); DomainError.SaldoInsuficiente → 422 Unprocessable Entity (regra de negócio violada); DomainError.ContaBloqueada → 403 Forbidden (operação não permitida). Cada tipo de erro tem seu status code — o middleware mapeia automaticamente.

Essa arquitetura garante que NENHUMA regra de negócio vaza para a camada de API e NENHUMA validação de formato polui o Domain. Empresas como iFood e Nubank seguem esse padrão rigorosamente — é a base para sistemas que escalam sem virar espaguete.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Tudo misturado no Controller
// ══════════════════════════════════════════════
[HttpPost("transferir")]
public IActionResult Transferir(TransferenciaRequest req)
{
    // Validação de formato + regra de negócio + estado
    // TUDO no mesmo lugar — impossível testar separado
    if (req.Valor <= 0) return BadRequest("Valor inválido");
    var conta = _db.Contas.Find(req.ContaOrigemId);
    if (conta == null) return NotFound("Conta não existe");
    if (conta.Status != "Ativa")
        throw new Exception("Conta bloqueada"); // Exceção!
    if (conta.Saldo < req.Valor)
        throw new Exception("Saldo insuficiente"); // Exceção!
    // ... mistura 3 camadas de validação em 10 linhas
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Validação em 3 camadas separadas
// ══════════════════════════════════════════════

// ── Result Pattern (Domain/Shared/) ────────────
namespace SistemaFinanceiro.Domain.Shared;

public class Result
{
    public bool IsSuccess { get; }
    public string Error { get; }
    public bool IsFailure => !IsSuccess;

    protected Result(bool isSuccess, string error)
    {
        IsSuccess = isSuccess;
        Error = error;
    }

    public static Result Success() => new(true, string.Empty);
    public static Result Failure(string error) => new(false, error);
}

public class Result<T> : Result
{
    public T Value { get; }

    private Result(T value, bool isSuccess, string error)
        : base(isSuccess, error)
        => Value = value;

    public static Result<T> Success(T value) =>
        new(value, true, string.Empty);
    public new static Result<T> Failure(string error) =>
        new(default!, false, error);
}

// ── Tipos de erro por camada ───────────────────
public enum TipoErro
{
    Validacao,    // 400 — FluentValidation
    NaoEncontrado, // 404 — Application
    RegraDeNegocio, // 422 — Domain
    NaoPermitido  // 403 — Domain
}

public record ErroAplicacao(TipoErro Tipo, string Mensagem);

// ── CAMADA 1: API — FluentValidation (400) ─────
// Valida FORMATO — não sabe regras de negócio
public class TransferenciaCommandValidator
    : AbstractValidator<RealizarTransferenciaCommand>
{
    public TransferenciaCommandValidator()
    {
        RuleFor(x => x.ContaOrigemId)
            .NotEmpty()
                .WithMessage("Conta origem é obrigatória");
        RuleFor(x => x.ContaDestinoId)
            .NotEmpty()
                .WithMessage("Conta destino é obrigatória");
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor deve ser positivo");
        // NÃO valida saldo, NÃO valida status da conta
        // Isso é responsabilidade do Domain
    }
}

// ── CAMADA 2: Domain — Invariantes (422/403) ───
// Valida REGRAS DE NEGÓCIO — retorna Result, não exceção
public class Conta // Aggregate Root
{
    public Result Sacar(Dinheiro valor)
    {
        if (Status == StatusConta.Bloqueada)
            return Result.Failure("Conta bloqueada");
            // → mapeado para 403 Forbidden

        if (Status == StatusConta.Encerrada)
            return Result.Failure("Conta encerrada");
            // → mapeado para 403 Forbidden

        if (!Saldo.MaiorOuIgualA(valor))
            return Result.Failure("Saldo insuficiente");
            // → mapeado para 422 Unprocessable Entity

        Saldo = Saldo.Subtrair(valor);
        return Result.Success();
    }
}

// ── CAMADA 3: Application — Contexto (404) ─────
// Valida ESTADO — busca no banco, verifica existência
public class RealizarTransferenciaUseCase
{
    private readonly IContaRepository _contaRepo;
    private readonly TransferenciaService _transferencia;

    public async Task<Result> ExecuteAsync(
        RealizarTransferenciaCommand cmd)
    {
        // Validação de estado (Application)
        var origem = await _contaRepo
            .GetByIdAsync(cmd.ContaOrigemId);
        if (origem is null)
            return Result.Failure("Conta origem não encontrada");
            // → mapeado para 404 Not Found

        var destino = await _contaRepo
            .GetByIdAsync(cmd.ContaDestinoId);
        if (destino is null)
            return Result.Failure("Conta destino não encontrada");
            // → mapeado para 404 Not Found

        // Regra de negócio (Domain)
        var resultado = _transferencia
            .Executar(origem, destino, cmd.Valor);
        if (resultado.IsFailure)
            return resultado; // Status mapeado pelo middleware

        await _contaRepo.SaveChangesAsync();
        return Result.Success();
    }
}

// ── Middleware: mapeamento erro → HTTP Status ──
// POST /api/contas/transferencia
// Fluxo completo:
//   → FluentValidation (400 se formato inválido)
//   → Use Case → Repository (404 se conta não existe)
//   → Domain Service → Aggregate (422 se saldo insuficiente)
//   → SaveChanges → Domain Events publicados
//   → 200 OK com TransferenciaId
//
// Mapeamento de erros:
//   ValidationException      → 400 Bad Request
//   "não encontrada"         → 404 Not Found
//   "Saldo insuficiente"     → 422 Unprocessable Entity
//   "Conta bloqueada"        → 403 Forbidden
//   Exception inesperada     → 500 Internal Server Error`,checklist:["Implementar o Result<T> pattern no projeto Domain/Shared/ — nunca usar exceções para erros de negócio esperados","Garantir que o FluentValidation valida APENAS formato (CPF 11 dígitos, valor positivo) e NENHUMA regra de negócio","Verificar que o Domain retorna Result.Failure() em vez de throw para saldo insuficiente, conta bloqueada etc.","Criar middleware que mapeia cada tipo de erro para o HTTP Status Code correto (400, 403, 404, 422)","Testar os 4 cenários de erro: dados inválidos (400), recurso não encontrado (404), regra violada (422), operação proibida (403)"],quiz:[{question:"Qual a diferença entre usar Result Pattern e lançar exceções para erros de negócio?",options:["Não há diferença — são estilos diferentes para o mesmo resultado","Result Pattern representa erros ESPERADOS (saldo insuficiente é previsível); exceções são para erros INESPERADOS (banco caiu). Result é mais performático e expressa no tipo de retorno que a operação pode falhar","Exceções são mais rápidas que Result Pattern","Result Pattern é obrigatório no .NET 8"],answer:1,explanation:"Saldo insuficiente NÃO é excepcional — é um cenário perfeitamente normal. Usar throw new SaldoInsuficienteException() é como usar exceção para fluxo de controle, que é um anti-pattern. Result<T> expressa na assinatura do método que a operação pode falhar, forçando o caller a tratar o resultado."},{question:"Qual camada é responsável por validar se o saldo é suficiente para um saque?",options:["API (FluentValidation) — validação deve ser feita o mais cedo possível","Domain (invariantes do Aggregate Conta) — regras de negócio são responsabilidade exclusiva do Domain","Application (Use Case) — valida antes de chamar o Domain","Infrastructure (Repository) — verifica no banco de dados"],answer:1,explanation:"FluentValidation valida formato: 'valor é positivo?'. Application valida estado: 'conta existe?'. Domain valida negócio: 'saldo é suficiente?'. Se o FluentValidation verifica saldo, regra de negócio vazou para a API. Se o controller verifica status da conta, a camada de apresentação faz trabalho do Domain."},{question:"Como erros de cada camada são mapeados para HTTP Status Codes?",options:["Todos retornam 500 Internal Server Error","ValidationError → 400 Bad Request; NaoEncontrado → 404 Not Found; Regra de negócio → 422 Unprocessable Entity; Operação proibida → 403 Forbidden","Erros de validação retornam 200 com campo 'success: false'","Cada controller decide qual status code usar"],answer:1,explanation:"O middleware mapeia automaticamente: FluentValidation falhou → 400 (dados malformados). Repository não encontrou → 404 (recurso não existe). Domain rejeitou → 422 (dados válidos mas negócio não permite). Conta bloqueada → 403 (operação proibida). Isso padroniza a API inteira."}]},{id:"m12proj",moduleId:"m12",title:"🏦 Projeto: Sistema Financeiro DDD",theory:`Este é o projeto que une TUDO da Fase 3: Clean Code (nomes descritivos, funções pequenas), SOLID (cada classe com uma responsabilidade, interfaces segregadas, dependências invertidas), DDD (Bounded Contexts, Entities, Value Objects, Aggregates, Domain Events) e FluentValidation (validação em 3 camadas).

ARQUITETURA DO PROJETO — 4 projetos separados seguindo Clean Architecture:

SistemaFinanceiro.Domain/ — O coração do sistema. ZERO dependências externas. Contém: Entities (Conta, Transacao), Value Objects (Dinheiro, Cpf, Email, Periodo), Aggregates (Conta como Root com Transacoes), Domain Events (ContaAberta, TransacaoRealizada, LimiteExcedido), Domain Services (TransferenciaService), Interfaces de Repository (IContaRepository), e Shared (Result<T>, IDomainEvent). O Domain.csproj não referencia EF Core, ASP.NET ou qualquer pacote de infraestrutura.

SistemaFinanceiro.Application/ — O orquestrador. Depende APENAS do Domain. Contém: Use Cases (AbrirContaUseCase, RealizarTransferenciaUseCase, GerarExtratoUseCase, BloquearContaUseCase, DepositarUseCase), Commands e Queries (records imutáveis), Validators (FluentValidation dos Commands), e Behaviors (ValidationBehavior, LoggingBehavior). MediatR coordena commands → handlers.

SistemaFinanceiro.Infrastructure/ — Os detalhes técnicos. Depende do Domain e Application. Contém: Persistence (FinanceiroDbContext com EF Core, ContaConfiguration com Fluent API, Repositories concretos), Migrations, e Event Handlers (EnviarNotificacaoHandler, RegistrarAuditoriaHandler).

SistemaFinanceiro.API/ — A interface HTTP. Depende de Application e Infrastructure. Contém: Controllers (ContasController, TransacoesController), Middlewares (ExceptionHandlingMiddleware), e Program.cs com registro de todos os serviços.

CASOS DE USO: 1) Abrir Conta — valida CPF + cria Aggregate + persiste + evento ContaAberta. 2) Depositar — busca Conta + Depositar() + salva + evento TransacaoRealizada. 3) Transferir — busca origem e destino + TransferenciaService + salva + eventos. 4) Consultar Extrato — busca Transações por Período com filtros LINQ. 5) Bloquear Conta — muda status + evento ContaBloqueada.

GITFLOW: feature/domain-entities, feature/conta-usecase-abrir, feature/conta-usecase-transferencia, feature/extrato-query, feature/validacao-fluent, release/v1.0.0-sistema-financeiro.`,code:`// ══════════════════════════════════════════════
// 🏦 SISTEMA FINANCEIRO DDD — ESTRUTURA COMPLETA
// ══════════════════════════════════════════════

// ── Estrutura de pastas ────────────────────────
// SistemaFinanceiro/
// ├── SistemaFinanceiro.sln
// ├── src/
// │   ├── SistemaFinanceiro.Domain/        ← ZERO deps externas
// │   │   ├── Domain.csproj
// │   │   ├── Entities/
// │   │   │   ├── Conta.cs
// │   │   │   └── Transacao.cs
// │   │   ├── ValueObjects/
// │   │   │   ├── Dinheiro.cs
// │   │   │   ├── Cpf.cs
// │   │   │   ├── Email.cs
// │   │   │   ├── Periodo.cs
// │   │   │   └── ContaId.cs
// │   │   ├── Events/
// │   │   │   ├── IDomainEvent.cs
// │   │   │   ├── ContaAbertaEvent.cs
// │   │   │   ├── TransacaoRealizadaEvent.cs
// │   │   │   └── ContaBloqueadaEvent.cs
// │   │   ├── Services/
// │   │   │   └── TransferenciaService.cs
// │   │   ├── Repositories/
// │   │   │   └── IContaRepository.cs
// │   │   └── Shared/
// │   │       ├── Result.cs
// │   │       └── DomainException.cs
// │   │
// │   ├── SistemaFinanceiro.Application/   ← depende do Domain
// │   │   ├── Application.csproj
// │   │   ├── UseCases/
// │   │   │   ├── AbrirContaUseCase.cs
// │   │   │   ├── DepositarUseCase.cs
// │   │   │   ├── RealizarTransferenciaUseCase.cs
// │   │   │   ├── GerarExtratoUseCase.cs
// │   │   │   └── BloquearContaUseCase.cs
// │   │   ├── Commands/
// │   │   │   ├── AbrirContaCommand.cs
// │   │   │   ├── DepositarCommand.cs
// │   │   │   ├── RealizarTransferenciaCommand.cs
// │   │   │   └── BloquearContaCommand.cs
// │   │   ├── Queries/
// │   │   │   └── GerarExtratoQuery.cs
// │   │   ├── Validators/
// │   │   │   ├── AbrirContaCommandValidator.cs
// │   │   │   ├── DepositarCommandValidator.cs
// │   │   │   ├── TransferenciaCommandValidator.cs
// │   │   │   └── ExtratoQueryValidator.cs
// │   │   └── Behaviors/
// │   │       ├── ValidationBehavior.cs
// │   │       └── LoggingBehavior.cs
// │   │
// │   ├── SistemaFinanceiro.Infrastructure/ ← depende do Domain + App
// │   │   ├── Infrastructure.csproj
// │   │   ├── Persistence/
// │   │   │   ├── FinanceiroDbContext.cs
// │   │   │   ├── Repositories/
// │   │   │   │   └── ContaEfRepository.cs
// │   │   │   └── Configurations/
// │   │   │       ├── ContaConfiguration.cs
// │   │   │       └── TransacaoConfiguration.cs
// │   │   ├── Migrations/
// │   │   └── EventHandlers/
// │   │       ├── EnviarNotificacaoHandler.cs
// │   │       └── RegistrarAuditoriaHandler.cs
// │   │
// │   └── SistemaFinanceiro.API/           ← depende de App + Infra
// │       ├── API.csproj
// │       ├── Controllers/
// │       │   ├── ContasController.cs
// │       │   └── TransacoesController.cs
// │       ├── Middlewares/
// │       │   └── ExceptionHandlingMiddleware.cs
// │       └── Program.cs

// ── Domain.csproj: ZERO referências externas ───
// <Project Sdk="Microsoft.NET.Sdk">
//   <PropertyGroup>
//     <TargetFramework>net8.0</TargetFramework>
//   </PropertyGroup>
//   <!-- SEM PackageReference! Sem EF Core, sem ASP.NET -->
// </Project>

// ── Application.csproj ─────────────────────────
// <PackageReference Include="MediatR" Version="12.*" />
// <PackageReference Include="FluentValidation" Version="11.*" />
// <ProjectReference Include="../Domain/Domain.csproj" />

// ── Infrastructure.csproj ──────────────────────
// <PackageReference Include="Microsoft.EntityFrameworkCore
//     .SqlServer" Version="8.0.*" />
// <ProjectReference Include="../Domain/Domain.csproj" />
// <ProjectReference Include="../Application/Application.csproj" />

// ── API.csproj ─────────────────────────────────
// <PackageReference Include="FluentValidation
//     .AspNetCore" Version="11.*" />
// <PackageReference Include="MediatR.Extensions
//     .Microsoft.DependencyInjection" Version="12.*" />
// <ProjectReference Include="../Application/Application.csproj" />
// <ProjectReference Include="../Infrastructure
//     /Infrastructure.csproj" />

// ── Program.cs (API) — Registro completo de DI ──
using SistemaFinanceiro.Application.Behaviors;
using SistemaFinanceiro.Application.Validators;
using SistemaFinanceiro.Domain.Repositories;
using SistemaFinanceiro.Domain.Services;
using SistemaFinanceiro.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);

// EF Core
builder.Services.AddDbContext<FinanceiroDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration
        .GetConnectionString("DefaultConnection")));

// Repositories
builder.Services
    .AddScoped<IContaRepository, ContaEfRepository>();

// Domain Services
builder.Services.AddScoped<TransferenciaService>();

// MediatR + Behaviors
builder.Services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssemblyContaining
        <AbrirContaUseCase>();
    cfg.AddBehavior(typeof(IPipelineBehavior<,>),
        typeof(ValidationBehavior<,>));
    cfg.AddBehavior(typeof(IPipelineBehavior<,>),
        typeof(LoggingBehavior<,>));
});

// FluentValidation
builder.Services.AddValidatorsFromAssemblyContaining
    <AbrirContaCommandValidator>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();
app.Run();

// ── ContasController ───────────────────────────
[ApiController]
[Route("api/[controller]")]
public class ContasController : ControllerBase
{
    private readonly IMediator _mediator;

    public ContasController(IMediator mediator)
        => _mediator = mediator;

    /// <summary>Abre uma nova conta bancária</summary>
    [HttpPost]
    [ProducesResponseType(typeof(ContaId), 201)]
    [ProducesResponseType(typeof(ProblemDetails), 400)]
    public async Task<IActionResult> Abrir(
        [FromBody] AbrirContaCommand cmd)
    {
        var resultado = await _mediator.Send(cmd);
        if (resultado.IsFailure)
            return UnprocessableEntity(resultado.Error);
        return CreatedAtAction(
            nameof(ObterPorId),
            new { id = resultado.Value },
            resultado.Value);
    }

    /// <summary>Deposita valor em uma conta</summary>
    [HttpPost("{id:guid}/depositar")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    [ProducesResponseType(422)]
    public async Task<IActionResult> Depositar(
        Guid id, [FromBody] DepositarCommand cmd)
    {
        var resultado = await _mediator.Send(
            cmd with { ContaId = new ContaId(id) });
        if (resultado.IsFailure)
            return UnprocessableEntity(resultado.Error);
        return Ok();
    }

    /// <summary>Realiza transferência entre contas</summary>
    [HttpPost("transferir")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    [ProducesResponseType(422)]
    public async Task<IActionResult> Transferir(
        [FromBody] RealizarTransferenciaCommand cmd)
    {
        var resultado = await _mediator.Send(cmd);
        if (resultado.IsFailure)
            return UnprocessableEntity(resultado.Error);
        return Ok();
    }

    /// <summary>Consulta extrato por período</summary>
    [HttpGet("{id:guid}/extrato")]
    [ProducesResponseType(typeof(ExtratoResponse), 200)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Extrato(
        Guid id, [FromQuery] GerarExtratoQuery query)
    {
        var resultado = await _mediator.Send(
            query with { ContaId = new ContaId(id) });
        if (resultado.IsFailure)
            return NotFound(resultado.Error);
        return Ok(resultado.Value);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> ObterPorId(Guid id)
    {
        // ... busca conta por ID
        return Ok();
    }
}

// ── GitFlow do Projeto ─────────────────────────
// git checkout -b feature/domain-entities
// git commit -m "feat(domain): Conta, Dinheiro, Cpf Value Objects"
//
// git checkout -b feature/conta-usecase-abrir
// git commit -m "feat(app): AbrirContaUseCase + validator"
//
// git checkout -b feature/conta-usecase-transferencia
// git commit -m "feat(app): RealizarTransferenciaUseCase + TransferenciaService"
//
// git checkout -b feature/extrato-query
// git commit -m "feat(app): GerarExtratoUseCase com filtro por período"
//
// git checkout -b feature/validacao-fluent
// git commit -m "feat(app): validators FluentValidation + ValidationBehavior"
//
// git checkout develop
// git merge feature/domain-entities feature/conta-usecase-abrir ...
// git checkout -b release/v1.0.0-sistema-financeiro
// git merge release/v1.0.0 into main
// git tag v1.0.0`,checklist:["Criar a solução com 4 projetos: dotnet new sln + Domain, Application, Infrastructure, API","Implementar todos os 5 casos de uso: Abrir Conta, Depositar, Transferir, Extrato, Bloquear","Garantir que Domain.csproj tem ZERO referências a EF Core, ASP.NET ou qualquer pacote de infraestrutura","Criar migration inicial e aplicar no SQL Server (docker run -e SA_PASSWORD=... mcr.microsoft.com/mssql/server)","Completar o GitFlow: criar feature branches por caso de uso, merge em develop, e release/v1.0.0 em main"],quiz:[{question:"Por que o Domain.csproj não deve ter referência a pacotes como EF Core?",options:["Para reduzir o tamanho do build","Para garantir Dependency Inversion: o Domain define interfaces (IContaRepository) e o Infrastructure implementa com EF Core — se trocar para Dapper ou MongoDB, o Domain não muda nada","EF Core não é compatível com projects separados","É uma regra do .NET 8 para class libraries"],answer:1,explanation:"Domain é o ativo mais valioso — regras de negócio puras. Se o Domain referencia EF Core, trocar de banco exige alterar regras de negócio. Com DIP, Domain define IContaRepository (abstração) e Infrastructure implementa ContaEfRepository (detalhe). Trocar para MongoDB = nova implementação, Domain intacto."},{question:"Qual a direção correta das dependências na Clean Architecture?",options:["API → Infrastructure → Application → Domain (de fora para dentro, cada camada depende da anterior)","Domain ← Application ← Infrastructure ← API (Domain no centro sem dependências; camadas externas dependem das internas)","Todas as camadas dependem umas das outras circularmente","Domain → Application → Infrastructure → API (de dentro para fora)"],answer:1,explanation:"Domain não depende de ninguém: ZERO referências externas. Application depende do Domain. Infrastructure depende do Domain + Application. API depende de Application + Infrastructure. As setas de dependência sempre apontam para DENTRO — Domain é o centro intocável."},{question:"Por que criar uma feature branch por caso de uso no GitFlow?",options:["Para gerar mais commits no histórico","Cada feature branch representa uma unidade de trabalho independente que pode ser revisada, testada e integrada separadamente — se a transferência tem bug, não bloqueia o deploy da abertura de conta","O Git exige branches separadas para cada arquivo","Para evitar conflitos de merge automaticamente"],answer:1,explanation:"feature/conta-usecase-abrir pode ser mergeada e deployada enquanto feature/conta-usecase-transferencia ainda está em review. Cada branch tem seu PR, seus testes, seu review. Se algo der errado, faz revert de uma branch sem afetar as outras. É assim que times de 50+ devs trabalham no iFood."}]}]},gp={id:"m9",title:"Clean Code",icon:"✨",week:"Semana 9",color:"#06B6D4",topics:[{id:"m9t1",moduleId:"m9",title:"Nomes que Revelam Intenção",theory:`Clean Code começa pela escolha dos nomes. Robert C. Martin diz: "o nome de uma variável, função ou classe deve responder três perguntas — por que existe, o que faz e como é usada." Se o nome precisar de um comentário para ser entendido, ele está errado.

Nomes crípticos são o anti-pattern mais comum em código de iniciante. Variáveis como d, x, temp, data, flag não comunicam nada. Compare: d vs diasAteVencimento, lst vs transacoesPendentes, v vs valorTotalComDesconto. O compilador aceita qualquer nome, mas o custo cognitivo de ler código mal nomeado se acumula exponencialmente em equipes grandes.

Funções devem ser verbos que descrevem a ação: calcularJuros(), validarCPF(), enviarNotificacao(). Anti-patterns clássicos: proc(), doStuff(), handle(), execute() — nomes genéricos que escondem o que realmente acontece. Se você não consegue nomear a função sem usar palavras vagas, provavelmente ela faz coisas demais.

Classes devem ser substantivos específicos do domínio: ContaCorrente, ProcessadorPagamento, HistoricoTransacao. Anti-patterns: Manager, Processor, Handler, Helper — são sinais de que o desenvolvedor não soube nomear porque a classe tem responsabilidades demais. ContaManager pode ser dividida em ContaService, ContaFactory e ContaRepository.

Booleanos devem ser perguntas naturais: estaAtivo, temSaldo, foiAprovado, podeSacar. Lê-se naturalmente: if (clienteEstaAtivo && contaTemSaldo). Evite: flag, status, check — não comunicam o significado.

Constantes eliminam "números mágicos": 86400 não diz nada, SEGUNDOS_POR_DIA é autoexplicativo. 0.15 vira TAXA_IOF, 30 vira DIAS_PARA_VENCIMENTO. O custo é zero e o ganho é imenso.

Em projetos bilíngues (realidade corporativa brasileira), a convenção é: termos técnicos e infraestrutura em inglês (Controller, Repository, Service), termos do domínio de negócio em português (Conta, Transacao, Extrato, Boleto). Empresas como Nubank e PicPay seguem essa abordagem — o code review fica mais natural quando o domínio fala a língua do negócio.

Regra de ouro: se você precisa de um comentário para explicar o nome, o nome está errado. Renomear é a refatoração mais barata e mais poderosa que existe.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Código bancário mal nomeado
// ══════════════════════════════════════════════
public class Manager  // Nome genérico — faz o quê?
{
    // O que é "d"? O que é "lst"? O que é "v"?
    public decimal proc(int d, List<object> lst)
    {
        decimal v = 0;      // v de quê?
        bool fl = false;    // flag de quê?
        decimal r = 0;      // resultado de quê?

        foreach (var item in lst)
        {
            var x = (decimal)item;  // x é o quê?
            if (x > 0)
            {
                v += x;     // somando... créditos? débitos?
                fl = true;  // marcando... o quê?
            }
            else
            {
                r += x;     // acumulando... o quê?
            }
        }

        // Ninguém sabe o que d * 0.001 significa
        return v + r - (d * 0.001m);
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Mesmo código, nomes que revelam intenção
// ══════════════════════════════════════════════
public class CalculadoraSaldo  // Nome diz exatamente o que a classe faz
{
    private const decimal TAXA_MANUTENCAO_DIARIA = 0.001m;

    public decimal CalcularSaldoAposTransacoes(
        int diasEmAberto,
        List<Transacao> transacoes)
    {
        decimal totalCreditos = 0m;
        decimal totalDebitos = 0m;
        bool possuiMovimentacao = false;

        foreach (var transacao in transacoes)
        {
            if (transacao.Valor > 0)
            {
                totalCreditos += transacao.Valor;
                possuiMovimentacao = true;
            }
            else
            {
                totalDebitos += transacao.Valor;  // já é negativo
            }
        }

        decimal taxaManutencao = diasEmAberto * TAXA_MANUTENCAO_DIARIA;
        decimal saldoFinal = totalCreditos + totalDebitos - taxaManutencao;

        return saldoFinal;
    }
}

// ══════════════════════════════════════════════
// Booleanos — perguntas naturais
// ══════════════════════════════════════════════
bool clienteEstaAtivo = true;         // ✅ if (clienteEstaAtivo)
bool contaTemSaldo = saldo > 0;       // ✅ if (contaTemSaldo)
bool transacaoFoiAprovada = true;     // ✅ if (transacaoFoiAprovada)
bool podeSacar = saldo >= valorSaque; // ✅ if (podeSacar)

// bool flag = true;    ❌ flag de quê?
// bool status = false; ❌ status de quê?
// bool check = true;   ❌ check do quê?

// ══════════════════════════════════════════════
// Constantes — eliminar números mágicos
// ══════════════════════════════════════════════
// ❌ O que significa 86400? E 0.15? E 30?
// if (segundos > 86400) ...
// var imposto = valor * 0.15;
// if (dias > 30) ...

// ✅ Constantes nomeadas
const int SEGUNDOS_POR_DIA = 86_400;
const decimal TAXA_IOF = 0.15m;
const int DIAS_PARA_VENCIMENTO = 30;

// ══════════════════════════════════════════════
// Classes — domínio em português, técnico em inglês
// ══════════════════════════════════════════════
// ❌ Anti-patterns de nomenclatura
// ContaManager, DataProcessor, TransacaoHandler, UtilHelper

// ✅ Nomes específicos que revelam responsabilidade
public class ContaCorrente { }         // Entidade do domínio
public class ProcessadorPagamento { }  // Ação clara
public class HistoricoTransacao { }    // Conceito de negócio
public class ValidadorCpf { }          // Responsabilidade única

// ══════════════════════════════════════════════
// Console App para demonstrar a diferença
// ══════════════════════════════════════════════
// dotnet new console -n CleanNaming && cd CleanNaming

var transacoes = new List<Transacao>
{
    new("Salário", 5000m),
    new("Aluguel", -1500m),
    new("Supermercado", -800m),
    new("Freelance", 2000m)
};

var calculadora = new CalculadoraSaldo();
decimal saldoFinal = calculadora
    .CalcularSaldoAposTransacoes(diasEmAberto: 15, transacoes);

Console.WriteLine($"Saldo final: R\\$ {saldoFinal:F2}");
// Saída: Saldo final: R$ 4699.99

public record Transacao(string Descricao, decimal Valor);`,checklist:["Abrir o projeto E-commerce da Fase 2 e buscar por variáveis com menos de 4 letras","Renomear pelo menos 5 variáveis/métodos ruins encontrados","Criar um arquivo Glossario.md com os termos do domínio financeiro em português","Praticar: escrever 10 nomes ruins e refatorar para nomes descritivos","Usar Find & Replace no VSCode para renomear com segurança (F2 no C#)"],quiz:[{question:'Qual o problema principal de nomear uma variável "d" ou "data"?',options:["Ocupa menos memória","É tecnicamente válido mas sem contexto dificulta leitura","Causa erro de compilação","Não funciona com LINQ"],answer:1,explanation:"Nomes sem contexto são legais para o compilador mas custam tempo cognitivo de todos que leem o código depois — incluindo você mesmo em 3 meses."},{question:"Qual o melhor nome para uma variável booleana que indica se um cliente pagou?",options:["pagamento","status","clientePagou","isPay"],answer:2,explanation:'Booleanos devem ser perguntas — clientePagou lê naturalmente como "if (clientePagou)" que é autoexplicativo. "status" é vago demais, "pagamento" parece um objeto, "isPay" mistura idiomas.'},{question:'Por que "Manager", "Processor" e "Handler" são considerados anti-patterns de nomenclatura?',options:["São palavras reservadas do C#","Indicam que a classe provavelmente tem responsabilidades demais e o desenvolvedor não soube nomear bem","Não funcionam como nome de classe","São nomes muito longos"],answer:1,explanation:"Quando não se consegue dar um nome específico à classe é sinal de que ela faz coisas demais. ContaManager pode ser ContaService, ContaFactory ou ContaRepository — cada um com responsabilidade clara."}]},{id:"m9t2",moduleId:"m9",title:"Funções Pequenas e Responsabilidade Única",theory:`A regra fundamental de funções em Clean Code: uma função deve fazer UMA coisa, fazê-la bem e fazer SOMENTE aquela coisa. Se a descrição da função contém "e", ela faz coisas demais.

O tamanho ideal de uma função é de 5 a 20 linhas. Acima de 30, quase certamente deve ser dividida. Funções longas são o Code Smell mais comum em código corporativo — métodos de 100+ linhas são comuns em sistemas legados e custam caro para manter.

Níveis de abstração: uma função não deve misturar decisões de alto nível (ProcessarPagamento, ValidarPedido) com detalhes de baixo nível (string.Split(',')[2].Trim(), Convert.ToDecimal). Se você está lendo uma função e precisa alternar entre "o que o sistema faz" e "como formata strings", os níveis de abstração estão misturados.

Command Query Separation (CQS): funções que mudam estado (Commands) NÃO retornam valor; funções que retornam dados (Queries) NÃO mudam estado. Exemplo: AtualizarSaldo() é Command (void), ObterSaldo() é Query (retorna decimal). Misturar os dois gera bugs sutis — uma função que retorna o saldo E debita o valor é imprevisível.

Parâmetros: 0-2 é ideal, 3 é aceitável, 4 ou mais indica que você precisa de uma classe (Parameter Object). Exemplo: CriarPedido(int clienteId, string endereco, decimal valor, string cupom, bool expresso, DateTime entrega) deve virar CriarPedido(DadosPedido dados).

Flag parameters são o pior anti-pattern: EnviarEmail(Cliente c, bool isUrgente) indica que a função faz duas coisas diferentes. Divida em EnviarEmailUrgente() e EnviarEmailNormal().

Extract Method é a refatoração mais usada no dia a dia: selecione o trecho, F1 no VSCode ou Ctrl+R+M no Visual Studio, e extraia para uma função com nome descritivo. Em Pull Requests corporativos, funções gigantes são motivo de rejeição — times do iFood e Nubank têm regras explícitas sobre tamanho máximo de métodos.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Método de 80 linhas que faz tudo
// ══════════════════════════════════════════════
public class TransacaoService
{
    private readonly AppDbContext _db;

    public TransacaoService(AppDbContext db) => _db = db;

    // Este método: valida, busca, calcula, atualiza, notifica e loga
    // 6 responsabilidades em uma única função!
    public string ProcessarTransacao(
        int contaId, decimal valor, string tipo,
        bool enviarEmail, string descricao, int usuarioId) // 6 parâmetros!
    {
        // Validação (responsabilidade 1)
        if (valor <= 0)
            return "Valor inválido";
        if (string.IsNullOrEmpty(tipo))
            return "Tipo obrigatório";
        if (tipo != "credito" && tipo != "debito")
            return "Tipo deve ser credito ou debito";

        // Busca no banco (responsabilidade 2)
        var conta = _db.Contas.Find(contaId);
        if (conta == null)
            return "Conta não encontrada";

        // Regra de negócio (responsabilidade 3)
        if (tipo == "debito" && conta.Saldo < valor)
            return "Saldo insuficiente";

        if (tipo == "debito")
            conta.Saldo -= valor;
        else
            conta.Saldo += valor;

        // Gera extrato (responsabilidade 4)
        var extrato = new Extrato
        {
            ContaId = contaId,
            Valor = valor,
            Tipo = tipo,
            Descricao = descricao,
            Data = DateTime.Now,
            SaldoAnterior = conta.Saldo + (tipo == "debito" ? valor : -valor),
            SaldoAtual = conta.Saldo
        };
        _db.Extratos.Add(extrato);
        _db.SaveChanges();

        // Notificação (responsabilidade 5)
        if (enviarEmail) // Flag parameter!
        {
            var smtp = new SmtpClient("smtp.empresa.com");
            var msg = new MailMessage(
                "noreply@banco.com",
                conta.Email,
                "Transação realizada",
                $"Valor: R\\$ {valor:F2}");
            smtp.Send(msg);
        }

        // Auditoria (responsabilidade 6)
        Console.WriteLine(
            $"[{DateTime.Now}] User {usuarioId}: " +
            $"{tipo} R\\$ {valor} na conta {contaId}");

        return "OK";
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Orquestrador de 10 linhas + funções focadas
// ══════════════════════════════════════════════
public class TransacaoService
{
    private readonly IContaRepository _contas;
    private readonly IExtratoService _extratos;
    private readonly INotificacaoService _notificacao;
    private readonly IAuditoriaLogger _auditoria;

    public TransacaoService(
        IContaRepository contas,
        IExtratoService extratos,
        INotificacaoService notificacao,
        IAuditoriaLogger auditoria)
    {
        _contas = contas;
        _extratos = extratos;
        _notificacao = notificacao;
        _auditoria = auditoria;
    }

    // Orquestrador: 8 linhas, um nível de abstração
    public Result<string> ProcessarTransacao(DadosTransacao dados)
    {
        var validacao = ValidarTransacao(dados);
        if (!validacao.Sucesso) return validacao;

        var conta = _contas.ObterPorId(dados.ContaId);
        if (conta is null) return Result<string>.Erro("Conta não encontrada");

        AplicarMovimentacao(conta, dados);
        _extratos.GerarRegistro(conta, dados);
        _notificacao.NotificarCliente(conta, dados);
        _auditoria.Registrar(dados);

        return Result<string>.Ok("Transação processada");
    }

    // Query: retorna resultado, não muda estado
    private Result<string> ValidarTransacao(DadosTransacao dados)
    {
        if (dados.Valor <= 0)
            return Result<string>.Erro("Valor inválido");
        if (string.IsNullOrEmpty(dados.Tipo))
            return Result<string>.Erro("Tipo obrigatório");
        return Result<string>.Ok("Válido");
    }

    // Command: muda estado, não retorna dados
    private void AplicarMovimentacao(Conta conta, DadosTransacao dados)
    {
        if (dados.Tipo == "debito")
            conta.Debitar(dados.Valor);
        else
            conta.Creditar(dados.Valor);
    }
}

// Parameter Object — substitui 6 parâmetros
public record DadosTransacao(
    int ContaId,
    decimal Valor,
    string Tipo,
    string Descricao,
    int UsuarioId);

// Result pattern — Command/Query limpo
public record Result<T>(bool Sucesso, T Dados, string Mensagem)
{
    public static Result<T> Ok(T dados) => new(true, dados, "");
    public static Result<T> Erro(string msg) => new(false, default!, msg);
}`,checklist:["Encontrar no projeto Fase 2 uma função/método com mais de 30 linhas","Identificar os diferentes níveis de abstração dentro dela","Aplicar Extract Method para dividir em funções menores (F1 no VSCode = refatorar)","Verificar se alguma função tem parâmetro booleano — refatorar para dois métodos","Reescrever um método do zero aplicando CQS consciente"],quiz:[{question:'O que significa "níveis de abstração" em uma função?',options:["O número de loops aninhados","Misturar decisões de alto nível (o quê fazer) com detalhes de baixo nível (como fazer) na mesma função","A quantidade de parâmetros","O número de linhas"],answer:1,explanation:"Níveis de abstração se referem à mistura de lógica de negócio (alto nível) com detalhes de implementação (baixo nível) na mesma função, dificultando compreensão e manutenção."},{question:"Qual o problema de um parâmetro booleano em uma função como EnviarEmail(Cliente c, bool isUrgente)?",options:["Boolean não pode ser parâmetro em C#","Indica que a função na verdade faz duas coisas diferentes e deveria ser dividida em duas","Parâmetros booleanos são mais lentos","Apenas questão de estilo"],answer:1,explanation:"Flag parameters indicam que a função tem dois comportamentos diferentes controlados por um booleano. Dividir em EnviarEmailUrgente() e EnviarEmailNormal() é mais claro e testável."},{question:"O que é Command Query Separation (CQS)?",options:["Uma biblioteca do .NET","Funções que modificam estado não devem retornar dados; funções que retornam dados não devem modificar estado","O padrão CQRS para microserviços","Separar comandos SQL de queries"],answer:1,explanation:"CQS é o princípio de que Commands (mudam estado) e Queries (retornam dados) devem ser separados. Isso torna o código previsível — uma Query pode ser chamada várias vezes sem efeito colateral."}]},{id:"m9t3",moduleId:"m9",title:"Comentários: Quando Escrever e Quando Deletar",theory:`A verdade dura sobre comentários: a maioria é sinal de código que precisou ser explicado porque não estava claro o suficiente. Comentários não são inerentemente bons — são um mal necessário quando o código sozinho não consegue se expressar.

Comentários que DEVEM ser deletados imediatamente:
• Explicações do óbvio: "// incrementa o contador" antes de contador++ não adiciona nada, é ruído.
• Código comentado: use Git para isso. Código comentado cria confusão — "devo reativar isso?" — e fica desatualizado rapidamente.
• Histórico de alterações: "// 2024-01-15 João: alterou cálculo" — o git log já faz isso melhor.
• Traduções literais: "// busca o produto" antes de db.Produtos.Find(id) — o código já diz isso.

Comentários que DEVEM existir:
• Decisões de negócio não óbvias: "// Preço não pode ser alterado retroativamente em pedidos faturados — regra fiscal SEFAZ" — isso o código não consegue expressar sozinho.
• Avisos de armadilhas: "// CUIDADO: API do banco limita a 100 req/min — usar throttle" — previne bugs futuros.
• TODO com responsável e data: "// TODO(@maria, 2024-03): migrar para nova API de pagamento v3" — rastreável.
• Documentação XML (///) para APIs públicas: obrigatória em endpoints — gera documentação automática no Swagger.

Comentários que enganam são PIORES que nenhum: um comentário desatualizado que contradiz o código induz bugs. O desenvolvedor confia no comentário, não lê o código, e introduz regressões. Comentários mentem — código não.

Em ASP.NET Core, comentários XML (///) em controllers são essenciais — o Swagger os consome para gerar documentação interativa. Times corporativos como iFood e PicPay exigem /// em todos os endpoints públicos para que o frontend e parceiros entendam a API sem precisar ler o código.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Controller com comentários ruins
// ══════════════════════════════════════════════
[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    private readonly AppDbContext _db;

    public ProdutosController(AppDbContext db)
    {
        _db = db; // injeta o contexto
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        // busca o produto no banco
        var produto = _db.Produtos.Find(id);

        // verifica se é nulo
        if (produto == null)
        {
            // retorna 404
            return NotFound();
        }

        // retorna o produto
        return Ok(produto);
    }

    [HttpPut("{id}")]
    public IActionResult Atualizar(int id, ProdutoDto dto)
    {
        var produto = _db.Produtos.Find(id);
        if (produto == null) return NotFound();

        // var preco_antigo = produto.Preco;  // código antigo
        // produto.Preco = dto.Preco;         // comentado "por segurança"
        // _db.SaveChanges();                 // talvez reativar depois?

        produto.Nome = dto.Nome;
        produto.Preco = dto.Preco;
        // atualiza o produto com os novos dados
        _db.SaveChanges();

        // retorna 204
        return NoContent();
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Sem comentários ruins + XML docs + decisão de negócio
// ══════════════════════════════════════════════
[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    private readonly AppDbContext _db;

    public ProdutosController(AppDbContext db) => _db = db;

    /// <summary>
    /// Obtém um produto pelo ID.
    /// </summary>
    /// <param name="id">ID único do produto.</param>
    /// <returns>O produto encontrado ou 404.</returns>
    /// <response code="200">Produto encontrado.</response>
    /// <response code="404">Produto não existe.</response>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(Produto), 200)]
    [ProducesResponseType(404)]
    public IActionResult ObterPorId(int id)
    {
        var produto = _db.Produtos.Find(id);
        return produto is not null ? Ok(produto) : NotFound();
    }

    /// <summary>
    /// Atualiza nome e preço de um produto.
    /// </summary>
    /// <remarks>
    /// Preço só pode ser alterado em produtos sem pedidos faturados.
    /// Regra fiscal: SEFAZ exige rastreabilidade de preços em NF-e emitidas.
    /// </remarks>
    /// <param name="id">ID do produto.</param>
    /// <param name="dto">Dados atualizados.</param>
    /// <response code="204">Atualizado com sucesso.</response>
    /// <response code="400">Produto possui pedidos faturados.</response>
    /// <response code="404">Produto não encontrado.</response>
    [HttpPut("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult Atualizar(int id, ProdutoDto dto)
    {
        var produto = _db.Produtos
            .Include(p => p.ItensPedido)
            .FirstOrDefault(p => p.Id == id);

        if (produto is null) return NotFound();

        // Decisão de negócio: preço congelado após faturamento (regra SEFAZ)
        bool possuiPedidosFaturados = produto.ItensPedido
            .Any(i => i.Pedido.Status == "Faturado");

        if (possuiPedidosFaturados && dto.Preco != produto.Preco)
            return BadRequest("Preço não pode ser alterado — produto já faturado.");

        produto.Nome = dto.Nome;
        produto.Preco = dto.Preco;
        _db.SaveChanges();

        return NoContent();
    }

    /// <summary>
    /// Lista produtos com paginação.
    /// </summary>
    /// <param name="pagina">Número da página (1-based).</param>
    /// <param name="tamanhoPagina">Itens por página (máx: 50).</param>
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Produto>), 200)]
    public IActionResult Listar(int pagina = 1, int tamanhoPagina = 10)
    {
        // CUIDADO: sem limite máximo, um cliente pode pedir 1 milhão de registros
        tamanhoPagina = Math.Min(tamanhoPagina, 50);

        var produtos = _db.Produtos
            .OrderBy(p => p.Nome)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .ToList();

        return Ok(produtos);
    }
}`,checklist:["Abrir um arquivo do projeto Fase 2 e deletar comentários que explicam o óbvio","Encontrar código comentado e deletar (ele está no git history)","Adicionar /// em pelo menos 3 endpoints da API de e-commerce","Verificar se o Swagger gerou a documentação dos /// corretamente","Escrever um comentário de decisão de negócio real em um ponto não óbvio"],quiz:[{question:'Quando um comentário "// incrementa contador" antes de "contador++" é problemático?',options:["Nunca — comentários sempre ajudam","Quando o código já se explica sozinho, pois o comentário não adiciona informação e vira ruído de manutenção","Só quando está em inglês","Só em métodos públicos"],answer:1,explanation:"Comentários que apenas repetem o que o código diz são ruído visual. Eles precisam ser mantidos em sincronia com o código e raramente são, criando confusão."},{question:"Qual o uso mais valioso de comentários em código corporativo?",options:["Explicar cada linha para facilitar leitura","Documentar decisões de negócio não óbvias e avisos de armadilhas técnicas que o nome do método não consegue expressar","Descrever o que cada variável armazena","Histórico de quem alterou"],answer:1,explanation:"Decisões de negócio (regras fiscais, limites de API) e armadilhas técnicas são informações que o código não consegue expressar sozinho — são os únicos comentários realmente valiosos."},{question:"O que acontece com código comentado que fica no repositório por meses?",options:["É automaticamente deletado pelo compilador","Fica desatualizado em relação ao restante do código, cria confusão sobre se deve ser reativado e polui a leitura — o Git já guarda o histórico","Fica oculto do Sonar","Melhora performance"],answer:1,explanation:'Código comentado é lixo visual que gera dúvida: "devo reativar?". O Git guarda tudo — se precisar do código antigo, use git log ou git blame.'}]},{id:"m9t4",moduleId:"m9",title:"Refatoração: Técnicas e Quando Aplicar",theory:`Refatoração é mudar a estrutura interna do código SEM mudar seu comportamento externo. Código que funciona mas é difícil de manter custa caro — cada mudança é lenta, arriscada e gera bugs colaterais.

O Triângulo da Refatoração: escreva testes → refatore → verifique que os testes ainda passam. Sem testes, refatorar é caminhar vendado — você pode introduzir bugs silenciosos que só aparecem em produção semanas depois.

Técnicas essenciais de refatoração:

Extract Method — a mais usada. Selecione um bloco de código, extraia para uma função com nome descritivo. No VSCode: selecione o trecho → F1 → "Extract Method". No Visual Studio: Ctrl+R+M.

Rename — trivial mas poderosa. F2 no VSCode renomeia a variável/método/classe em todos os usos. Custo zero, ganho imenso em legibilidade.

Replace Magic Number with Constant — 0.15 vira TAXA_IOF, 30 vira DIAS_VENCIMENTO, 1000 vira LIMITE_SAQUE_DIARIO. O nome da constante documenta a intenção.

Introduce Parameter Object — 5+ parâmetros de uma função viram uma classe/record. CriarPedido(cliente, endereco, valor, cupom, expresso) vira CriarPedido(DadosPedido dados).

Replace Conditional with Polymorphism — if/else gigante com 10 condições vira classes polimórficas. Cada tipo implementa sua própria lógica. Veremos mais em SOLID (Módulo 10).

Move Method — quando um método usa mais dados de outra classe do que da própria, ele está no lugar errado. Mova-o.

Code Smells (cheiros de código ruim) são sinais de que refatoração é necessária:
• Long Method: método com 50+ linhas
• Large Class: classe com 500+ linhas ou 20+ métodos
• Long Parameter List: função com 4+ parâmetros
• Divergent Change: uma classe precisa mudar por razões diferentes
• Shotgun Surgery: uma mudança requer alteração em 10 classes
• Feature Envy: método que usa mais dados de outra classe
• Data Clumps: mesmos 3-4 dados aparecem juntos em vários lugares
• Primitive Obsession: CPF como string em vez de Value Object

Quando NÃO refatorar: prazo curtíssimo de produção (entregue, depois refatore), sem cobertura de testes (escreva testes primeiro), código legado que ninguém entende (risco de quebra silenciosa).

A regra do escoteiro (Boy Scout Rule): sempre deixe o código um pouco melhor do que encontrou. Não precisa refatorar tudo — melhorar um nome, extrair um método, já é progresso.`,code:`// ══════════════════════════════════════════════
// ❌ ANTES — Classe com TODOS os Code Smells
// ══════════════════════════════════════════════
public class ContaService
{
    private readonly AppDbContext _db;

    public ContaService(AppDbContext db) => _db = db;

    // Long Method (70+ linhas) + Magic Numbers + Feature Envy
    public string CalcularExtratoMensal(
        int contaId, int mes, int ano,     // Long Parameter List
        bool incluirTaxas, string formato,  // Flag parameter + tipo string
        decimal limiteAlerta)               // 6 parâmetros!
    {
        var conta = _db.Contas.Find(contaId);
        var transacoes = _db.Transacoes
            .Where(t => t.ContaId == contaId
                     && t.Data.Month == mes
                     && t.Data.Year == ano)
            .ToList();

        decimal totalCreditos = 0;
        decimal totalDebitos = 0;
        decimal taxaTotal = 0;

        foreach (var t in transacoes)
        {
            if (t.Tipo == "credito")
            {
                totalCreditos += t.Valor;
            }
            else
            {
                totalDebitos += t.Valor;

                // Magic Numbers! O que é 0.15, 30 e 1000?
                if (t.Valor > 1000)
                    taxaTotal += t.Valor * 0.15m;
                else
                    taxaTotal += t.Valor * 0.038m;
            }

            // Feature Envy: usa mais dados de Transacao que de ContaService
            if (t.Data.DayOfWeek == DayOfWeek.Sunday)
                taxaTotal += t.Valor * 0.02m;

            if (t.Descricao?.Contains("internacional") == true)
                taxaTotal += t.Valor * 0.064m;
        }

        // Mais magic numbers
        decimal taxaManutencao = incluirTaxas ? 30m : 0m;
        decimal saldoFinal = totalCreditos - totalDebitos
                           - taxaTotal - taxaManutencao;

        if (saldoFinal < limiteAlerta)
            Console.WriteLine("ALERTA: saldo baixo!");

        // Formatação misturada com lógica de negócio
        if (formato == "csv")
            return $"{contaId},{mes}/{ano},{totalCreditos},{totalDebitos},{saldoFinal}";
        else
            return $"Conta {contaId} | {mes}/{ano} | Saldo: R\\$ {saldoFinal:F2}";
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Refatoração passo a passo
// ══════════════════════════════════════════════

// Passo 1: Replace Magic Numbers com constantes
public static class TaxasFinanceiras
{
    public const decimal TAXA_OPERACAO_ALTA = 0.15m;
    public const decimal TAXA_OPERACAO_NORMAL = 0.038m;
    public const decimal TAXA_DOMINGO = 0.02m;
    public const decimal TAXA_INTERNACIONAL = 0.064m;
    public const decimal TAXA_MANUTENCAO_MENSAL = 30m;
    public const decimal LIMITE_OPERACAO_ALTA = 1000m;
}

// Passo 2: Introduce Parameter Object
public record FiltroExtrato(
    int ContaId,
    int Mes,
    int Ano,
    bool IncluirTaxas = true);

// Passo 3: Move Method — taxa pertence à Transacao
public class Transacao
{
    public int Id { get; set; }
    public int ContaId { get; set; }
    public string Tipo { get; set; } = "";
    public decimal Valor { get; set; }
    public DateTime Data { get; set; }
    public string? Descricao { get; set; }

    // Método movido para onde os dados estão (elimina Feature Envy)
    public decimal CalcularTaxa()
    {
        decimal taxa = Valor > TaxasFinanceiras.LIMITE_OPERACAO_ALTA
            ? Valor * TaxasFinanceiras.TAXA_OPERACAO_ALTA
            : Valor * TaxasFinanceiras.TAXA_OPERACAO_NORMAL;

        if (Data.DayOfWeek == DayOfWeek.Sunday)
            taxa += Valor * TaxasFinanceiras.TAXA_DOMINGO;

        if (Descricao?.Contains("internacional") == true)
            taxa += Valor * TaxasFinanceiras.TAXA_INTERNACIONAL;

        return taxa;
    }
}

// Passo 4: Extract Methods — cada um faz UMA coisa
public class ContaService
{
    private readonly IContaRepository _contas;
    private readonly ITransacaoRepository _transacoes;

    public ContaService(
        IContaRepository contas,
        ITransacaoRepository transacoes)
    {
        _contas = contas;
        _transacoes = transacoes;
    }

    public ResumoExtrato GerarExtrato(FiltroExtrato filtro)
    {
        var transacoes = _transacoes
            .ObterPorPeriodo(filtro.ContaId, filtro.Mes, filtro.Ano);

        decimal totalCreditos = CalcularTotalCreditos(transacoes);
        decimal totalDebitos = CalcularTotalDebitos(transacoes);
        decimal totalTaxas = CalcularTotalTaxas(transacoes, filtro.IncluirTaxas);

        return new ResumoExtrato(
            totalCreditos, totalDebitos, totalTaxas,
            SaldoFinal: totalCreditos - totalDebitos - totalTaxas);
    }

    private decimal CalcularTotalCreditos(List<Transacao> transacoes)
        => transacoes.Where(t => t.Tipo == "credito").Sum(t => t.Valor);

    private decimal CalcularTotalDebitos(List<Transacao> transacoes)
        => transacoes.Where(t => t.Tipo == "debito").Sum(t => t.Valor);

    private decimal CalcularTotalTaxas(List<Transacao> transacoes, bool incluir)
    {
        if (!incluir) return 0m;
        return transacoes
            .Where(t => t.Tipo == "debito")
            .Sum(t => t.CalcularTaxa())
            + TaxasFinanceiras.TAXA_MANUTENCAO_MENSAL;
    }
}

public record ResumoExtrato(
    decimal TotalCreditos,
    decimal TotalDebitos,
    decimal TotalTaxas,
    decimal SaldoFinal);`,checklist:["Identificar 3 Code Smells no projeto da Fase 2 usando a lista do tópico","Aplicar Extract Method em um método longo (F1 no Rider ou Ctrl+R+M no VS)","Substituir pelo menos 3 magic numbers por constantes nomeadas","Criar um record para agrupar parâmetros de um método com 4+ params","Rodar os testes após cada refatoração para garantir que nada quebrou"],quiz:[{question:"Qual a definição correta de refatoração?",options:["Reescrever o código do zero para adicionar novas funcionalidades","Alterar a estrutura interna do código sem modificar seu comportamento externo observável","Corrigir bugs sem alterar a arquitetura","Otimizar performance do código"],answer:1,explanation:"Refatoração é exclusivamente sobre estrutura interna — o comportamento externo deve permanecer idêntico. Alterações de funcionalidade ou bugs são outras atividades."},{question:'O que é "Primitive Obsession" como Code Smell?',options:["Usar tipos primitivos (string, int) onde uma classe ou record expressaria melhor o conceito — ex: CPF como string em vez de um Value Object Cpf","Código que usa muitos loops primitivos","Excesso de if/else","Usar int em vez de long"],answer:0,explanation:"Primitive Obsession é usar string para CPF, email, telefone quando um Value Object com validação embutida expressaria melhor a intenção e garantiria a consistência."},{question:"Por que refatorar sem testes automatizados é arriscado?",options:["Testes não são necessários para refatorar","Sem testes não há como verificar que o comportamento externo não mudou — você pode introduzir bugs silenciosos que só aparecem em produção","Refatoração só é válida com 100% de cobertura","O compilador garante que o comportamento não mudou"],answer:1,explanation:"Testes são a rede de segurança da refatoração. Sem eles, qualquer mudança estrutural pode alterar o comportamento sem que ninguém perceba até explodir em produção."}]}]},vp=[gp,mp,pp,fp],Cp={id:"m13",title:"Testes de Unidade com xUnit",icon:"🧪",week:"Semana 13",color:"#EF4444",topics:[{id:"m13t1",moduleId:"m13",title:"Por que Testar? Anatomia de um Teste",theory:`Sem testes, refatorar é jogar roleta russa. Com testes, é cirurgia com raio-x. Esse é o argumento real — não "é bom praticar", mas consequências concretas e mensuráveis. A Microsoft publicou um estudo mostrando que o custo de corrigir um bug em produção é até 100x maior do que corrigir durante o desenvolvimento. Testes de unidade são a primeira linha de defesa.

Tipos de teste e seus objetivos: testes de unidade verificam uma unidade isolada (método, classe) sem dependências externas; testes de integração verificam como componentes trabalham juntos (API + banco); testes end-to-end verificam o fluxo completo do usuário; smoke tests verificam que o sistema sobe sem erros; regression tests garantem que correções não quebraram funcionalidades anteriores.

A anatomia canônica de todo bom teste segue o padrão AAA: Arrange (preparar os dados e dependências), Act (executar a ação sendo testada), Assert (verificar o resultado). Esse padrão é universal — funciona em qualquer linguagem e framework.

Um bom teste tem cinco características: nome descritivo no formato Metodo_Cenario_ResultadoEsperado, um único motivo para falhar, determinismo (mesmo resultado sempre — não depende de hora, dados aleatórios ou estado externo), independência (não depende de outros testes), e rapidez (milissegundos, não segundos).

O que NÃO é um bom teste: testar implementação em vez de comportamento (verificar chamadas internas em vez de resultado), teste que sempre passa (não testa nada), teste que depende de ordem de execução (frágil e não determinístico).

A nomenclatura corporativa padrão é Metodo_Cenario_ResultadoEsperado. Exemplos: Sacar_SaldoInsuficiente_RetornaFalha, Depositar_ValorPositivo_AumentaSaldo, CriarCpf_NumeroInvalido_LancaExcecao. Quando o teste falha no CI/CD, o nome te diz exatamente o que quebrou sem precisar ler o código.

Por que xUnit sobre NUnit e MSTest: xUnit instancia uma nova classe para cada método [Fact], garantindo isolamento nativo. Não tem [SetUp]/[TestInitialize] — usa construtor e IDisposable, que são mais explícitos. Suporta paralelismo nativo e teoria de dados ([Theory]). É o framework mais usado em projetos .NET modernos e o padrão do time do ASP.NET Core.`,code:`// ══════════════════════════════════════════════
// Criando o projeto de testes do zero
// ══════════════════════════════════════════════
// No terminal:
// dotnet new xunit -n SistemaFinanceiro.Tests
// cd SistemaFinanceiro.Tests
// dotnet add reference ../SistemaFinanceiro.Domain
// dotnet add package FluentAssertions

// ══════════════════════════════════════════════
// 4 primeiros testes no padrão AAA comentado
// ══════════════════════════════════════════════
using FluentAssertions;
using SistemaFinanceiro.Domain;

namespace SistemaFinanceiro.Tests.Domain;

public class DinheiroTests
{
    // Teste 1 — Value Object: criação inválida
    [Fact]
    public void Criar_ValorNegativo_LancaException()
    {
        // Arrange — nada a preparar, argumento inline

        // Act
        var act = () => new Dinheiro(-100, "BRL");

        // Assert
        act.Should().Throw<DomainException>()
           .WithMessage("*valor*negativo*");
    }

    // Teste 2 — Value Object: igualdade (record)
    [Fact]
    public void Dinheiro_MesmoValorMesmaMoeda_SaoIguais()
    {
        // Arrange & Act
        var d1 = Dinheiro.BRL(100);
        var d2 = Dinheiro.BRL(100);

        // Assert
        d1.Should().Be(d2); // record equality automática
    }
}

public class ContaTests
{
    // Teste 3 — comportamento da Entity Conta
    [Fact]
    public void Depositar_ValorPositivo_AumentaSaldo()
    {
        // Arrange
        var conta = Conta.Abrir(new Cpf("529.982.247-25"), Dinheiro.BRL(0));
        var deposito = Dinheiro.BRL(100);

        // Act
        conta.Depositar(deposito);

        // Assert
        conta.Saldo.Should().Be(Dinheiro.BRL(100));
    }

    // Teste 4 — falha de negócio com Result Pattern
    [Fact]
    public void Sacar_SaldoInsuficiente_RetornaFalha()
    {
        // Arrange
        var conta = Conta.Abrir(new Cpf("529.982.247-25"), Dinheiro.BRL(50));

        // Act
        var resultado = conta.Sacar(Dinheiro.BRL(100));

        // Assert
        resultado.IsSuccess.Should().BeFalse();
        resultado.Error.Should().Contain("saldo insuficiente");
    }
}

// ══════════════════════════════════════════════
// Rodando os testes:
// dotnet test --logger "console;verbosity=detailed"
// ══════════════════════════════════════════════`,checklist:["Criar o projeto SistemaFinanceiro.Tests com dotnet new xunit","Adicionar referência ao projeto Domain com dotnet add reference","Instalar FluentAssertions: dotnet add package FluentAssertions","Implementar os 4 testes do exemplo e rodar dotnet test","Escrever mais 3 testes para o Value Object Cpf (válido, inválido, formatação)"],quiz:[{question:'O que significa um teste ser "determinístico"?',options:["Roda mais rápido com mais CPU","Sempre produz o mesmo resultado nas mesmas condições — não depende de hora do dia, dados aleatórios não semeados, ordem de outros testes ou estado externo","Tem exatamente 3 assertions","Usa apenas tipos primitivos"],answer:1,explanation:"Testes não-determinísticos são piores que nenhum teste — você não confia neles e passa a ignorar as falhas, que é exatamente o oposto do objetivo."},{question:'Por que nomear um teste "Sacar_SaldoInsuficiente_RetornaFalha" é melhor que "TestarSaque"?',options:["É mais curto","O nome documenta o comportamento: qual método, qual cenário e qual resultado esperado — quando falhar, você sabe exatamente o que quebrou sem ler o código","xUnit exige esse padrão","TestarSaque não compila"],answer:1,explanation:"Testes são documentação viva. Um nome descritivo faz o relatório de falha ser autoexplicativo em um pipeline de CI/CD."},{question:"Qual a principal diferença entre xUnit e NUnit/MSTest?",options:["xUnit é mais antigo","xUnit instancia uma nova classe de teste para cada método [Fact] — isolamento nativo. Não tem [SetUp]/[TestInitialize] encorajando uso de construtor e IDisposable, que são mais explícitos","xUnit só roda no .NET 8","xUnit não suporta testes assíncronos"],answer:1,explanation:"O isolamento por instância garante que um teste nunca polui o estado de outro. Isso elimina uma classe inteira de bugs flaky em suites grandes."}]},{id:"m13t2",moduleId:"m13",title:"xUnit: Facts, Theories e Data-Driven",theory:`[Fact] testa um único cenário com dados fixos. [Theory] testa o mesmo comportamento com múltiplos conjuntos de dados — é a arma contra duplicação de testes. Se você tem 10 cenários para a mesma regra de negócio, escreva 1 [Theory] com 10 datasets, não 10 [Facts] quase idênticos.

[InlineData] é a forma mais simples: dados inline diretamente no atributo. Funciona para tipos primitivos (string, int, decimal, bool). Limitação: não aceita objetos complexos porque atributos em C# só aceitam constantes de compile-time.

[MemberData] resolve a limitação do InlineData: aponta para uma propriedade estática que retorna IEnumerable<object[]>. Permite dados complexos — objetos de domínio, listas, tipos customizados. É a escolha para cenários mais elaborados como testar múltiplas combinações de Dinheiro, Conta e Transacao.

[ClassData] vai um passo além: dados de uma classe separada que implementa IEnumerable<object[]>. Útil quando os mesmos dados de teste são reutilizados entre múltiplas classes de teste.

[Fact(Skip = "motivo")] pula o teste com justificativa — útil para testes temporariamente quebrados. [Fact(DisplayName = "nome legível")] define um nome amigável no Test Explorer. Cuidado: Skip não deve virar lixeira de testes abandonados.

Testes assíncronos funcionam nativamente: [Fact] com async Task. O xUnit aguarda o Task completar antes de assertar. Não precisa de .Result ou .GetAwaiter().GetResult() — esses bloqueiam a thread e podem causar deadlocks.

ITestOutputHelper é a forma correta de logar dentro de testes. Console.WriteLine não funciona em xUnit — o output é capturado por teste via ITestOutputHelper injetado no construtor.

ClassFixture compartilha estado entre testes da mesma classe (ex: um recurso custoso). CollectionFixture compartilha entre múltiplas classes. Mais detalhes no Módulo 15.`,code:`// ══════════════════════════════════════════════
// Theory com InlineData — testando CPF
// ══════════════════════════════════════════════
[Theory]
[InlineData("529.982.247-25", true)]    // CPF válido
[InlineData("000.000.000-00", false)]    // todos zeros
[InlineData("111.111.111-11", false)]    // todos iguais
[InlineData("123.456.789-09", false)]    // sequencial inválido
[InlineData("", false)]                  // vazio
public void Cpf_Validar_RetornaResultadoCorreto(
    string numero, bool esperado)
{
    // Act
    var resultado = Cpf.EhValido(numero);

    // Assert
    resultado.Should().Be(esperado);
}

// ══════════════════════════════════════════════
// Theory com MemberData — cenários de Dinheiro
// ══════════════════════════════════════════════
public static IEnumerable<object[]> CenariosTransferencia =>
    new List<object[]>
    {
        //  saldoInicial       valorSaque        sucesso  saldoFinal
        new object[] { Dinheiro.BRL(1000), Dinheiro.BRL(500),  true,  Dinheiro.BRL(500) },
        new object[] { Dinheiro.BRL(100),  Dinheiro.BRL(200),  false, Dinheiro.BRL(100) },
        new object[] { Dinheiro.BRL(0),    Dinheiro.BRL(1),    false, Dinheiro.BRL(0)   },
        new object[] { Dinheiro.BRL(500),  Dinheiro.BRL(500),  true,  Dinheiro.BRL(0)   },
    };

[Theory]
[MemberData(nameof(CenariosTransferencia))]
public void Sacar_Cenarios_RetornaResultadoCorreto(
    Dinheiro saldoInicial, Dinheiro valorSaque,
    bool sucesso, Dinheiro saldoFinal)
{
    // Arrange
    var conta = Conta.Abrir(CpfValido, saldoInicial);

    // Act
    var resultado = conta.Sacar(valorSaque);

    // Assert
    resultado.IsSuccess.Should().Be(sucesso);
    if (sucesso) conta.Saldo.Should().Be(saldoFinal);
}

// ══════════════════════════════════════════════
// Teste assíncrono com ITestOutputHelper
// ══════════════════════════════════════════════
public class ContaUseCaseTests
{
    private readonly ITestOutputHelper _output;

    public ContaUseCaseTests(ITestOutputHelper output)
        => _output = output;

    [Fact]
    public async Task BuscarConta_IdExistente_RetornaConta()
    {
        // Arrange
        var repo = new InMemoryContaRepository();
        var conta = Conta.Abrir(new Cpf("529.982.247-25"), Dinheiro.BRL(500));
        await repo.AddAsync(conta);

        // Act
        var resultado = await repo.GetByIdAsync(conta.Id);

        // Assert
        resultado.Should().NotBeNull();
        _output.WriteLine($"Conta encontrada: {resultado!.Id}");
    }
}

// ══════════════════════════════════════════════
// Rodando testes filtrados:
// dotnet test --filter "FullyQualifiedName~Cpf"
// dotnet test --filter "DisplayName~Saldo"
// ══════════════════════════════════════════════`,checklist:["Converter 3 testes [Fact] duplicados em 1 [Theory] com [InlineData]","Criar um [Theory] com [MemberData] para os cenários de Dinheiro","Escrever um teste assíncrono para um UseCase do Sistema Financeiro","Usar ITestOutputHelper para logar o saldo calculado no teste",'Rodar dotnet test --filter "FullyQualifiedName~Cpf" para filtrar testes'],quiz:[{question:"Quando usar [Theory] em vez de múltiplos [Fact]?",options:["Sempre — Theory é mais moderno","Quando o mesmo comportamento precisa ser verificado com múltiplos conjuntos de entrada/saída — evita duplicação de código de teste","Apenas para testes de performance","Quando o teste é assíncrono"],answer:1,explanation:"Theory elimina duplicação: 10 cenários em 1 método em vez de 10 métodos quase idênticos. Cada dataset aparece como um teste separado no relatório."},{question:"Qual a vantagem de [MemberData] sobre [InlineData]?",options:["InlineData é mais lento","MemberData permite dados complexos (objetos, listas, tipos customizados) que não podem ser expressos como atributos (que só aceitam constantes em compile time)","MemberData roda em paralelo","InlineData não funciona com strings"],answer:1,explanation:"Atributos em C# só aceitam constantes de compilação. MemberData aponta para uma propriedade estática que pode construir objetos complexos em runtime."},{question:"Como rodar apenas os testes de um namespace específico no terminal?",options:["dotnet test --class Namespace",'dotnet test --filter "FullyQualifiedName~NomeDoNamespace" — o filtro aceita expressões como ~contém, =igual, !não',"dotnet test --namespace X","Não é possível filtrar por namespace"],answer:1,explanation:"O filtro --filter é poderoso: ~contém, =exato, !=diferente. Aceita FullyQualifiedName, DisplayName e Trait para filtrar por diferentes critérios."}]},{id:"m13t3",moduleId:"m13",title:"FluentAssertions: Assertions Expressivas",theory:`FluentAssertions transforma mensagens de erro genéricas em diagnósticos precisos. Compare a mensagem de falha: Assert.Equal(100, valor) diz "Expected: 100, Actual: -50". valor.Should().Be(100) diz "Expected valor to be 100, but found -50". A segunda identifica a variável, o esperado e o real com contexto.

Assertions de igualdade: Be() usa Equals() do objeto (ideal para Value Objects/records), NotBe() para desigualdade, BeEquivalentTo() faz comparação profunda de propriedades (deep equality) — ideal para DTOs e objetos anônimos sem override de Equals.

Assertions de coleções são onde FluentAssertions brilha: HaveCount(n) verifica tamanho, Contain(predicate) verifica presença, BeEmpty() e NotBeEmpty(), AllSatisfy(predicate) verifica todos os elementos, ContainSingle(predicate) verifica exatamente um elemento que satisfaz a condição — mais preciso que Contain porque falha se houver zero ou mais de um.

Assertions de exceção: Throw<T>() e ThrowAsync<T>() para métodos assíncronos, NotThrow(), WithMessage("*parcial*") com wildcard, And.WithInnerException<T>() para exceções encadeadas.

Assertions de string: StartWith(), EndWith(), Contain(), MatchRegex(), BeNullOrEmpty(). Todas suportam "because {motivo}" como parâmetro para documentar a razão da assertion — "because conta recém-aberta não tem número".

Assertions numéricas: BeGreaterThan(), BeInRange(), BeApproximately(expected, precision) — essencial para cálculos de juros e arredondamento monetário onde igualdade exata pode falhar por diferenças de ponto flutuante.

Assertions compostas com And: valor.Should().BePositive().And.BeLessThan(1000) — encadeia múltiplas verificações na mesma expressão fluent.

Custom assertions permitem estender FluentAssertions para o domínio financeiro: conta.Should().TerSaldoSuficientePara(Dinheiro.BRL(100)). Cria-se uma classe ContaAssertions que herda de ReferenceTypeAssertions — eleva a legibilidade dos testes ao nível da Linguagem Ubíqua do DDD.`,code:`// ══════════════════════════════════════════════
// Demonstração por CATEGORIA no contexto financeiro
// ══════════════════════════════════════════════
using FluentAssertions;

// ── Igualdade — Value Objects ──
[Fact]
public void Saldo_AposDeposito_DeveSerValorEsperado()
{
    // Arrange
    var conta = Conta.Abrir(CpfValido, Dinheiro.BRL(400));

    // Act
    conta.Depositar(Dinheiro.BRL(100));

    // Assert
    conta.Saldo.Should().Be(Dinheiro.BRL(500));
    conta.Saldo.Should().NotBe(Dinheiro.BRL(0));
}

// ── Exceções com mensagem ──
[Fact]
public void Dinheiro_ValorNegativo_LancaDomainException()
{
    // Act
    var act = () => new Dinheiro(-1, "BRL");

    // Assert
    act.Should().Throw<DomainException>()
       .WithMessage("*valor*")
       .And.Message.Should().Contain("negativo");
}

// ── Coleções — Transações ──
[Fact]
public void Extrato_ContaComMovimentacao_DeveConterTransacoes()
{
    // Arrange
    var conta = CriarContaComMovimentacao();

    // Act
    var transacoes = conta.ObterExtrato();

    // Assert
    transacoes.Should().HaveCount(3);
    transacoes.Should().Contain(t => t.Tipo == TipoTransacao.Debito);
    transacoes.Should().AllSatisfy(t =>
        t.Valor.Quantia.Should().BeGreaterThan(0));
    transacoes.Should().ContainSingle(t => t.Id == transacaoEspecifica);
}

// ── Result Pattern ──
[Fact]
public void Transferir_DadosValidos_RetornaSucesso()
{
    // Arrange & Act
    var resultado = conta.Transferir(Dinheiro.BRL(100), destino);

    // Assert
    resultado.IsSuccess.Should().BeTrue(
        because: "transferência com saldo suficiente deve funcionar");
    resultado.Error.Should().BeNullOrEmpty();
}

// ── String assertions ──
[Fact]
public void Conta_NumeroCriado_DeveSerFormatoCorreto()
{
    // Assert
    conta.Numero.Should().MatchRegex(@"^\\d{5}-\\d{1}$");
}

// ── Numéricas com tolerância (juros) ──
[Fact]
public void CalcularJuros_30Dias_DeveRetornarValorAproximado()
{
    // Act
    var juros = calculadora.Calcular(Dinheiro.BRL(1000), 30);

    // Assert — arredondamento pode variar em centavos
    juros.Quantia.Should().BeApproximately(15.32m, precision: 0.01m);
}

// ══════════════════════════════════════════════
// Custom Assertion para o domínio financeiro
// ══════════════════════════════════════════════
public class ContaAssertions
    : ReferenceTypeAssertions<Conta, ContaAssertions>
{
    public ContaAssertions(Conta subject) : base(subject) { }

    protected override string Identifier => "conta";

    public AndConstraint<ContaAssertions> TerSaldoPositivo(
        string because = "", params object[] becauseArgs)
    {
        Subject.Saldo.Quantia.Should().BeGreaterThan(0,
            because, becauseArgs);
        return new AndConstraint<ContaAssertions>(this);
    }

    public AndConstraint<ContaAssertions> TerSaldoSuficientePara(
        Dinheiro valor, string because = "", params object[] becauseArgs)
    {
        Subject.Saldo.Quantia.Should().BeGreaterThanOrEqualTo(
            valor.Quantia, because, becauseArgs);
        return new AndConstraint<ContaAssertions>(this);
    }
}

// Extension method para sintaxe fluent
public static class ContaAssertionsExtensions
{
    public static ContaAssertions Should(this Conta conta)
        => new ContaAssertions(conta);
}

// Uso nos testes: conta.Should().TerSaldoPositivo();`,checklist:["Substituir todos os Assert.Equal/Assert.True por FluentAssertions equivalentes","Escrever um teste que verifica uma coleção de transações com AllSatisfy","Escrever um teste de exceção com WithMessage para uma DomainException","Usar BeApproximately para testar um cálculo de juros com arredondamento","Criar uma custom assertion: ContaAssertions com TerSaldoPositivo()"],quiz:[{question:'Por que "valor.Should().BeGreaterThan(0)" é melhor que "Assert.True(valor > 0)"?',options:["FluentAssertions é mais rápido",'A mensagem de falha diz "Expected valor to be greater than 0, but found -50" — muito mais informativo que "Expected: True, But was: False"',"Assert.True não compila","É apenas preferência de sintaxe sem diferença"],answer:1,explanation:"Quando um teste falha no CI/CD, a mensagem precisa diagnosticar o problema sem abrir o código. FluentAssertions gera mensagens com contexto completo."},{question:"Quando usar BeEquivalentTo em vez de Be?",options:["São idênticos","BeEquivalentTo faz comparação profunda de propriedades (deep equality) — ideal para DTOs e objetos sem override de Equals. Be usa Equals() do objeto","BeEquivalentTo é para strings, Be é para números","BeEquivalentTo é mais lento e deve ser evitado"],answer:1,explanation:"Records já têm Equals automático (use Be). DTOs e classes sem Equals precisam de BeEquivalentTo para comparar propriedade por propriedade."},{question:"Como verificar que uma lista contém exatamente um elemento que satisfaz uma condição?",options:["list.Should().Contain(x => x.Ativo)","list.Should().ContainSingle(x => x.Ativo) — falha se houver zero ou mais de um elemento","list.Should().HaveCount(1)","list.Count.Should().Be(1)"],answer:1,explanation:"ContainSingle é mais preciso: verifica tanto a condição quanto que exatamente um elemento a satisfaz. HaveCount(1) não verifica a condição."}]},{id:"m13t4",moduleId:"m13",title:"Cobertura de Código: O que Medir e Ignorar",theory:`Cobertura não é qualidade — 100% de cobertura com assertions fracas é pior que 70% com assertions sólidas. A métrica certa é "confidence" (confiança para refatorar), não "coverage" (linhas executadas). Um teste que executa código mas não verifica nada conta como cobertura mas não como qualidade.

Line Coverage conta se uma linha foi executada durante os testes. Branch Coverage verifica se TODOS os caminhos de uma condição (if-true E if-false) foram testados. Path Coverage combina todos os caminhos possíveis — mais rigoroso. Na prática, Branch Coverage é o melhor equilíbrio entre rigor e praticidade.

O que vale a pena cobrir: Domain (Value Objects, Entities, Domain Services) — 90%+; Application (Use Cases com lógica de fluxo) — 80%+; regras de negócio complexas com múltiplos caminhos. São as camadas onde bugs custam mais caro e onde testes são mais baratos de escrever.

O que NÃO vale a pena cobrir: getters/setters triviais, Program.cs (configuração de DI), migrations do EF Core, DTOs sem lógica, mapeamentos automáticos (AutoMapper profiles). Esses artefatos têm baixo risco de regressão e alto custo de teste.

Gerando relatório de cobertura no .NET: coverlet.collector coleta os dados durante dotnet test. O formato cobertura (Cobertura XML) é o mais compatível. reportgenerator transforma o XML em HTML navegável com drill-down por namespace, classe e método.

[ExcludeFromCodeCoverage] é o atributo para excluir intencionalmente do relatório. Use em Program.cs, Migrations e classes de infraestrutura. Documente o motivo — exclusão sem justificativa é suspeita em code review.

Meta de 80% como gatilho: não como fim em si, mas como sintoma de uma suite saudável. O pipeline de CI pode ser configurado para falhar se a cobertura cair abaixo de 80% — dotnet test /p:Threshold=80. Isso previne que PRs reduzam a cobertura sem justificativa. Na Fase 7 (SonarCloud), esse threshold vira um Quality Gate automatizado.`,code:`// ══════════════════════════════════════════════
// Configuração completa para cobertura
// ══════════════════════════════════════════════

// 1. Instalar coverlet no projeto de testes:
// dotnet add package coverlet.collector

// 2. Directory.Build.props para todos os projetos de teste:
// <PropertyGroup>
//   <CollectCoverage>true</CollectCoverage>
//   <CoverletOutputFormat>cobertura</CoverletOutputFormat>
//   <Exclude>[*.Tests]*</Exclude>
//   <ExcludeByAttribute>ExcludeFromCodeCoverage</ExcludeByAttribute>
// </PropertyGroup>

// ══════════════════════════════════════════════
// Como excluir Program.cs e infraestrutura
// ══════════════════════════════════════════════
using System.Diagnostics.CodeAnalysis;

// No topo do Program.cs:
[assembly: ExcludeFromCodeCoverage]

// Em classes de infraestrutura específicas:
[ExcludeFromCodeCoverage]
public class ContaEfRepository : IContaRepository
{
    // Coberto por testes de integração, não unitários
}

// ══════════════════════════════════════════════
// Script para gerar relatório HTML completo
// ══════════════════════════════════════════════
// Passo 1: Rodar testes com cobertura
// dotnet test /p:CollectCoverage=true
//   /p:CoverletOutputFormat=cobertura
//   /p:CoverletOutput=./coverage/

// Passo 2: Instalar reportgenerator (uma vez)
// dotnet tool install -g dotnet-reportgenerator-globaltool

// Passo 3: Gerar HTML
// reportgenerator
//   -reports:"**/coverage.cobertura.xml"
//   -targetdir:"coveragereport"
//   -reporttypes:Html

// Passo 4: Abrir o relatório
// start coveragereport/index.html

// ══════════════════════════════════════════════
// Rodando com threshold obrigatório (CI/CD)
// ══════════════════════════════════════════════
// dotnet test --collect:"XPlat Code Coverage"
//   /p:Threshold=80
//   /p:ThresholdType=branch
//   /p:ThresholdStat=total
// Se cobertura < 80% -> exit code != 0 -> pipeline falha`,checklist:["Instalar coverlet.collector no projeto de testes","Rodar dotnet test com coleta de cobertura","Instalar e executar reportgenerator para HTML","Abrir o relatório e identificar as branches não cobertas","Adicionar [ExcludeFromCodeCoverage] no Program.cs e nas Migrations"],quiz:[{question:"Por que 100% de cobertura não significa que o código está bem testado?",options:["Significa sim — quanto mais cobertura melhor","Cobertura mede quais linhas foram executadas, não se as assertions verificam os comportamentos corretos — um teste que executa o código mas não verifica nada conta como cobertura","100% é impossível de alcançar","Apenas Branch Coverage importa"],answer:1,explanation:"Cobertura sem assertions sólidas gera falsa confiança. O time acha que está seguro, mas os testes não detectariam regressões reais."},{question:"Qual parte do código-fonte tem mais retorno no investimento em testes?",options:["Program.cs e configuração de DI","Domain e Application — Value Objects, Entities e Use Cases que têm comportamento real a verificar. Infrastructure e DTOs têm pouco retorno","Controllers — são o ponto de entrada","Migrations — garantem o schema do banco"],answer:1,explanation:"Regras de negócio no Domain são puras e fáceis de testar. Application orquestra fluxos. Ambas têm alta probabilidade de conter bugs que custam caro."},{question:"Qual a diferença entre Line Coverage e Branch Coverage?",options:["São iguais","Line Coverage conta se uma linha foi executada. Branch Coverage verifica se TODOS os caminhos de uma condição foram testados (if-true E if-false) — mais rigoroso","Branch Coverage é mais rápido de calcular","Line Coverage é obsoleto"],answer:1,explanation:"Um if sem else pode ter 100% de Line Coverage testando só o caminho true. Branch Coverage exige que ambos os caminhos sejam testados."}]}]},hp={id:"m14",title:"Mocks e Isolamento com Moq",icon:"🎭",week:"Semana 13-14",color:"#8B5CF6",topics:[{id:"m14t1",moduleId:"m14",title:"Doubles de Teste: Stub, Mock, Fake, Spy",theory:`O vocabulário preciso que diferencia um desenvolvedor pleno de um sênior. Todos são "test doubles" — substitutos de dependências reais nos testes. O conceito vem do livro "xUnit Test Patterns" de Gerard Meszaros e é cobrado em entrevistas em empresas como Nubank, iFood e PicPay.

Dummy: passado mas nunca usado — satisfaz uma assinatura de método sem importar o valor. Exemplo: um ILogger<T> que o Use Case exige no construtor mas o teste não verifica logs.

Stub: retorna respostas pré-configuradas sem verificar se foi chamado. Quando usar: simular retorno de repositório (conta existe, conta não existe). O stub diz "quando perguntarem, responda isso" mas não se importa se perguntaram ou não.

Fake: implementação funcional simplificada. Um InMemoryRepository que usa Dictionary<TKey, TValue> é o exemplo clássico. Quando usar: quando o Stub fica complexo demais com múltiplas operações de leitura/escrita — o Fake mantém estado real sem o custo do banco.

Mock: verifica interações — foi chamado? Com quais argumentos? Quantas vezes? Quando usar: verificar que um serviço de notificação foi disparado após uma transferência.

Spy: Mock que ainda chama o código real — raro e arriscado. Quando usar: quase nunca em código novo, mais comum em testes de código legado onde não se pode alterar a implementação.

Armadilha clássica: mockar tudo vs mockar nada. A regra prática é: mock de saídas (email, SMS, eventos externos), stub de entradas (repositório, dados de configuração), fake para repositórios com lógica complexa.

Sobrespecificação é o maior perigo: verificar detalhes internos (quantas vezes um método privado foi chamado, ordem exata dos parâmetros internos) acopla o teste à implementação. Quando você refatora o código interno sem mudar o comportamento externo, o teste quebraria — isso é fragilidade, não segurança.`,code:`// ══════════════════════════════════════════════
// Stub manual — sem Moq ainda
// ══════════════════════════════════════════════
class ContaRepositoryStub : IContaRepository
{
    private readonly Conta? _contaParaRetornar;

    public ContaRepositoryStub(Conta? conta)
        => _contaParaRetornar = conta;

    public Task<Conta?> GetByIdAsync(ContaId id)
        => Task.FromResult(_contaParaRetornar);

    // Stub só implementa o necessário — o resto lança
    public Task AddAsync(Conta conta)
        => throw new NotImplementedException();
    public Task SaveChangesAsync()
        => Task.CompletedTask;
}

// Uso no teste com Stub:
[Fact]
public async Task Execute_ContaExiste_RetornaConta()
{
    // Arrange
    var contaEsperada = Conta.Abrir(CpfValido, Dinheiro.BRL(500));
    var stub = new ContaRepositoryStub(contaEsperada);
    // usando Stub pois não verifico chamadas, só o retorno

    // Act
    var resultado = await stub.GetByIdAsync(contaEsperada.Id);

    // Assert
    resultado.Should().NotBeNull();
    resultado!.Saldo.Should().Be(Dinheiro.BRL(500));
}

// ══════════════════════════════════════════════
// Fake — InMemoryContaRepository funcional
// ══════════════════════════════════════════════
class InMemoryContaRepository : IContaRepository
{
    private readonly Dictionary<ContaId, Conta> _store = new();

    public Task<Conta?> GetByIdAsync(ContaId id)
        => Task.FromResult(_store.GetValueOrDefault(id));

    public Task AddAsync(Conta conta)
    {
        _store[conta.Id] = conta;
        return Task.CompletedTask;
    }

    public Task SaveChangesAsync()
        => Task.CompletedTask;
}

// Uso no teste com Fake — mantém estado real:
[Fact]
public async Task AddEGetById_ContaValida_RetornaMesmaConta()
{
    // Arrange
    var fake = new InMemoryContaRepository();
    var conta = Conta.Abrir(CpfValido, Dinheiro.BRL(1000));

    // Act
    await fake.AddAsync(conta);
    var resultado = await fake.GetByIdAsync(conta.Id);

    // Assert
    resultado.Should().Be(conta);
}`,checklist:["Criar o InMemoryContaRepository para usar nos testes do UseCase","Escrever um teste com Stub manual que retorna conta específica","Escrever o mesmo teste com Fake (InMemory) e comparar complexidade","Identificar no Sistema Financeiro: quais dependências são stub e quais são mock?",'Documentar em comentário de teste: "// usando Stub pois não verifico chamadas"'],quiz:[{question:"Qual a diferença entre Stub e Mock?",options:["São sinônimos","Stub retorna respostas pré-configuradas sem verificar se foi chamado; Mock verifica interações — se foi chamado, com quais argumentos e quantas vezes","Mock é mais rápido que Stub","Stub só funciona com interfaces"],answer:1,explanation:"Stub configura entrada (o que retornar), Mock verifica saída (o que foi chamado). A confusão entre os dois é um dos erros mais comuns em entrevistas."},{question:"Quando um InMemoryRepository é preferível a um Mock de repositório?",options:["Nunca — Mock é sempre melhor","Quando a lógica do teste envolve múltiplas operações de leitura/escrita onde um Mock ficaria complexo e frágil — InMemory mantém estado real e o teste fica mais legível","InMemory só funciona com SQL","Mock de repositório não é possível"],answer:1,explanation:"Um Fake com Dictionary é simples, mantém estado e não precisa de Setup para cada operação. Ideal quando o teste interage com o repositório de várias formas."},{question:'O que significa "sobrespecificação" em testes com mocks?',options:["Criar mocks demais","Verificar detalhes de implementação que tornam o teste frágil — ele falha quando a implementação muda, mesmo que o comportamento externo continue correto","Ter mais asserts que o necessário","Usar Mock quando Stub bastaria"],answer:1,explanation:"Um teste que verifica quantas vezes SaveChanges foi chamado internamente quebra quando você otimiza o batch de commits — mesmo que o resultado final seja idêntico."}]},{id:"m14t2",moduleId:"m14",title:"Moq: Setup, Returns, Verify e Callbacks",theory:`Moq elimina o boilerplate de criar classes Stub/Fake manualmente. Em vez de criar uma ContaRepositoryStub para cada cenário, configura-se o Mock<IContaRepository> em 3 linhas.

Instalação: dotnet add package Moq. Mock<T> cria um double de qualquer interface ou classe com métodos virtual. O .Object retorna a instância que implementa a interface.

Setup().Returns() configura o retorno para uma chamada específica. Setup().ReturnsAsync() para métodos assíncronos — não precisa de Task.FromResult manual. Setup().Throws<T>() simula exceção lançada pela dependência (banco fora do ar, timeout).

It.IsAny<T>() aceita qualquer argumento — útil quando o valor específico não importa para o teste. Cuidado: usar IsAny em tudo é sobrespecificação às avessas — mascara bugs onde o argumento errado foi passado. It.Is<T>(predicate) verifica que a chamada ocorreu com argumento que satisfaz a condição — mais preciso sem ser frágil.

Verify() verifica APÓS o Act que uma chamada específica ocorreu. Times.Once, Times.Never, Times.Exactly(n), Times.AtLeastOnce. VerifyNoOtherCalls() garante que nenhuma chamada não configurada aconteceu.

Callbacks com .Callback() executam código quando o mock é chamado — útil para capturar argumentos ou simular efeitos colaterais controlados.

MockBehavior.Strict vs Loose (padrão): Strict falha em qualquer chamada não configurada com Setup — garante que o teste documenta TODAS as interações. Loose retorna default(T) para chamadas não configuradas. Na prática, Strict é útil para garantir que nenhuma interação inesperada ocorra com serviços externos (email, pagamento).`,code:`// ══════════════════════════════════════════════
// Setup completo para o UseCase de Transferência
// ══════════════════════════════════════════════
using Moq;
using FluentAssertions;

[Fact]
public async Task Execute_TransferenciaValida_NotificaOrigem()
{
    // Arrange
    var mockContaRepo = new Mock<IContaRepository>();
    var mockNotificacao = new Mock<INotificacaoService>();

    var contaOrigem = Conta.Abrir(cpfOrigem, Dinheiro.BRL(1000));
    var contaDestino = Conta.Abrir(cpfDestino, Dinheiro.BRL(0));

    mockContaRepo
        .Setup(r => r.GetByIdAsync(contaOrigem.Id))
        .ReturnsAsync(contaOrigem);

    mockContaRepo
        .Setup(r => r.GetByIdAsync(contaDestino.Id))
        .ReturnsAsync(contaDestino);

    mockContaRepo
        .Setup(r => r.SaveChangesAsync())
        .Returns(Task.CompletedTask);

    var useCase = new RealizarTransferenciaUseCase(
        mockContaRepo.Object, mockNotificacao.Object);

    var command = new RealizarTransferenciaCommand(
        contaOrigem.Id, contaDestino.Id, Dinheiro.BRL(300));

    // Act
    var resultado = await useCase.ExecuteAsync(command);

    // Assert — comportamento
    resultado.IsSuccess.Should().BeTrue();

    // Assert — interações (o que o Mock é para)
    mockNotificacao.Verify(
        n => n.NotificarAsync(
            It.Is<ContaId>(id => id == contaOrigem.Id)),
        Times.Once,
        "Notificação deveria ter sido disparada para conta de origem"
    );

    mockContaRepo.Verify(
        r => r.SaveChangesAsync(), Times.Once);
}

// ══════════════════════════════════════════════
// Simulando exceção da dependência
// ══════════════════════════════════════════════
[Fact]
public async Task Execute_RepositorioFalha_RetornaErro()
{
    // Arrange
    var mockRepo = new Mock<IContaRepository>();
    mockRepo
        .Setup(r => r.GetByIdAsync(It.IsAny<ContaId>()))
        .ThrowsAsync(new TimeoutException("Banco indisponível"));

    var sut = new RealizarTransferenciaUseCase(
        mockRepo.Object, Mock.Of<INotificacaoService>());

    // Act
    var resultado = await sut.ExecuteAsync(command);

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("indisponível");
}

// ══════════════════════════════════════════════
// Callback para capturar argumentos
// ══════════════════════════════════════════════
[Fact]
public async Task Execute_Transferencia_SalvaContasAlteradas()
{
    // Arrange
    Conta? contaSalva = null;
    mockRepo
        .Setup(r => r.UpdateAsync(It.IsAny<Conta>()))
        .Callback<Conta>(c => contaSalva = c)
        .Returns(Task.CompletedTask);

    // Act
    await useCase.ExecuteAsync(command);

    // Assert — via callback capturado
    contaSalva.Should().NotBeNull();
    contaSalva!.Saldo.Should().Be(Dinheiro.BRL(700));
}`,checklist:["Instalar Moq: dotnet add package Moq","Reescrever os testes do UseCase de Transferência usando Mock<IContaRepository>","Usar It.Is<> para verificar que SaveChanges foi chamado após a transferência","Testar o cenário onde o repositório lança exceção (Setup().ThrowsAsync<>)","Comparar: mesmo teste com Stub manual vs com Moq — qual é mais claro?"],quiz:[{question:"Qual a diferença entre Setup().Returns() e Verify()?",options:["São a mesma operação","Setup().Returns() configura o que o mock retorna quando chamado (comportamento); Verify() verifica após o Act que uma chamada específica ocorreu (assertion de interação)","Returns() é para interfaces, Verify() é para classes","Verify() pode substituir Returns()"],answer:1,explanation:"Setup é Arrange (preparação), Verify é Assert (verificação). Setup diz 'quando chamarem, retorne isto'. Verify diz 'confirme que chamaram aquilo'."},{question:"Quando usar It.IsAny<T>() e quando usar It.Is<T>(predicate)?",options:["Sempre usar IsAny para simplicidade","It.IsAny<T>() quando o valor não importa para o teste. It.Is<T>(pred) quando precisa verificar que a chamada ocorreu com argumento específico","It.Is<T> só funciona com tipos primitivos","Usar apenas It.IsAny<T> no Arrange e It.Is<T> no Verify"],answer:1,explanation:"IsAny é conveniente mas pode mascarar bugs. Se o teste precisa garantir que o repositório recebeu a conta certa, use It.Is para ser preciso sem ser frágil."},{question:"O que é MockBehavior.Strict e quando é útil?",options:["Desabilita o mock","Qualquer chamada não configurada com Setup() lança exceção — garante que o teste documenta TODAS as interações esperadas. Útil para detectar chamadas inesperadas","Só funciona com classes abstratas","É o comportamento padrão do Moq"],answer:1,explanation:"Strict é útil para serviços externos críticos (pagamento, notificação) onde uma chamada inesperada indica bug. Para repositórios internos, Loose geralmente basta."}]},{id:"m14t3",moduleId:"m14",title:"Testando Domain Services e Use Cases",theory:`A estratégia de teste por camada define o que testar em cada uma e com quais ferramentas.

Domain (Value Objects, Entities): testes puros, sem Mock, sem Moq. Apenas cria objetos de domínio, chama métodos, assert no resultado. São os mais rápidos e os mais valiosos — Dinheiro, Cpf, Conta são records/classes puras sem dependência de infraestrutura.

Domain Services: quase sempre puros — se precisar de Mock para testar um Domain Service, revise o design. TransferenciaService recebe duas Contas e transfere — zero I/O, zero Mock necessário.

Application (Use Cases): aqui Moq brilha. Use Cases orquestram: buscam dados no repositório, executam lógica de domínio, persistem, disparam eventos. Testar os 3 caminhos obrigatórios: sucesso (happy path), falha de validação de negócio (saldo insuficiente, conta bloqueada), e exceção inesperada (banco fora do ar, timeout).

Infrastructure: testes de integração com banco real — TestContainers no Módulo 15. Não mocke o banco para testar o repositório — isso testa o mock, não o repositório.

Controllers: WebApplicationFactory no Módulo 15. Não teste controllers isolados com Mock de HttpContext — é frágil e não testa routing/serialização.

Padrão de organização espelhando o projeto:
SistemaFinanceiro.Tests/Domain/ para ContaTests, DinheiroTests, CpfTests.
SistemaFinanceiro.Tests/Application/ para AbrirContaUseCaseTests, RealizarTransferenciaUseCaseTests.
Quando criar Conta real (Domain tests) vs quando mockar IContaRepository (Application tests): se testa regra do domínio, use objetos reais; se testa orquestração do Use Case, mock as dependências.`,code:`// ══════════════════════════════════════════════
// 3 testes completos para RealizarTransferenciaUseCase
// ══════════════════════════════════════════════

// Cenário 1 — sucesso (happy path)
[Fact]
public async Task Execute_TransferenciaValida_DebitaOrigemCreditaDestino()
{
    // Arrange
    var contaOrigem = Conta.Abrir(CpfFixture.Valido(), Dinheiro.BRL(500));
    var contaDestino = Conta.Abrir(CpfFixture.Outro(), Dinheiro.BRL(0));

    var repo = new Mock<IContaRepository>();
    repo.Setup(r => r.GetByIdAsync(contaOrigem.Id))
        .ReturnsAsync(contaOrigem);
    repo.Setup(r => r.GetByIdAsync(contaDestino.Id))
        .ReturnsAsync(contaDestino);
    repo.Setup(r => r.SaveChangesAsync())
        .Returns(Task.CompletedTask);

    var sut = new RealizarTransferenciaUseCase(
        repo.Object, Mock.Of<INotificacaoService>());

    var cmd = new RealizarTransferenciaCommand(
        contaOrigem.Id, contaDestino.Id, Dinheiro.BRL(300));

    // Act
    var resultado = await sut.ExecuteAsync(cmd);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
    contaOrigem.Saldo.Should().Be(Dinheiro.BRL(200));
    contaDestino.Saldo.Should().Be(Dinheiro.BRL(300));
    repo.Verify(r => r.SaveChangesAsync(), Times.Once);
}

// Cenário 2 — falha de negócio
[Fact]
public async Task Execute_SaldoInsuficiente_RetornaFalha()
{
    // Arrange
    var contaOrigem = Conta.Abrir(CpfFixture.Valido(), Dinheiro.BRL(50));
    var contaDestino = Conta.Abrir(CpfFixture.Outro(), Dinheiro.BRL(0));

    var repo = new Mock<IContaRepository>();
    repo.Setup(r => r.GetByIdAsync(contaOrigem.Id))
        .ReturnsAsync(contaOrigem);
    repo.Setup(r => r.GetByIdAsync(contaDestino.Id))
        .ReturnsAsync(contaDestino);

    var sut = new RealizarTransferenciaUseCase(
        repo.Object, Mock.Of<INotificacaoService>());

    var cmd = new RealizarTransferenciaCommand(
        contaOrigem.Id, contaDestino.Id, Dinheiro.BRL(100));

    // Act
    var resultado = await sut.ExecuteAsync(cmd);

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("saldo");
    repo.Verify(r => r.SaveChangesAsync(), Times.Never);
}

// Cenário 3 — conta não encontrada
[Fact]
public async Task Execute_ContaOrigemNaoEncontrada_RetornaFalha()
{
    // Arrange
    var repo = new Mock<IContaRepository>();
    repo.Setup(r => r.GetByIdAsync(It.IsAny<ContaId>()))
        .ReturnsAsync((Conta?)null);

    var sut = new RealizarTransferenciaUseCase(
        repo.Object, Mock.Of<INotificacaoService>());

    var cmd = new RealizarTransferenciaCommand(
        ContaId.Novo(), ContaId.Novo(), Dinheiro.BRL(100));

    // Act
    var resultado = await sut.ExecuteAsync(cmd);

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("não encontrada");
}`,checklist:["Criar a estrutura de pastas Domain/ e Application/ dentro do projeto de testes","Implementar os 3 cenários do UseCase de Transferência","Garantir que os testes de Domain (ContaTests) não usam nenhum Mock","Criar pelo menos 5 testes para o Value Object Dinheiro (somas, subtrações, moedas)","Rodar dotnet test e garantir 100% de pass nos testes de unidade"],quiz:[{question:"Por que testes de Domain (Value Objects, Entities) não precisam de Moq?",options:["Domain é mais simples","Objetos de domínio bem modelados com DDD não têm dependências externas — são funções puras que recebem entrada e produzem saída, tornando os testes diretos","Moq não funciona com records","Domain não tem métodos testáveis"],answer:1,explanation:"DDD bem aplicado resulta em Domain puro — sem I/O, sem banco, sem rede. Isso torna os testes de domínio os mais rápidos e valiosos da suite."},{question:"Qual dos 3 cenários de um Use Case é mais frequentemente esquecido?",options:["O cenário de sucesso","O cenário de exceção inesperada (repositório fora do ar, timeout) — desenvolvedores testam sucesso e falha de negócio mas esquecem da infraestrutura falhando","O cenário de falha de validação","Todos são igualmente esquecidos"],answer:1,explanation:"Em produção, bancos caem, serviços externos retornam timeout. O teste de exceção garante que o sistema degrada graciosamente nesses cenários."},{question:"Como organizar os arquivos de teste para espelhar a estrutura do projeto?",options:["Tudo em uma pasta Tests/","Espelhar a estrutura de namespaces — Domain/, Application/, Integration/ dentro do projeto de testes, facilitando encontrar o teste de qualquer classe","Organizar por tipo de teste (UnitTests/, IntegrationTests/)","Não há padrão estabelecido"],answer:1,explanation:"Espelhar o projeto de produção cria uma relação 1:1 — ao ver ContaService.cs, você sabe que o teste está em Application/ContaServiceTests.cs."}]},{id:"m14t4",moduleId:"m14",title:"AutoFixture e Builder Pattern para Dados de Teste",theory:`O problema: criar objetos de domínio nos testes é verboso e frágil. Quando uma Entity ganha um novo campo obrigatório, 50 testes quebram porque cada um cria o objeto manualmente. Essa é a dor que AutoFixture e o Builder Pattern resolvem.

AutoFixture gera dados de teste aleatórios automaticamente. Instalação: dotnet add package AutoFixture e AutoFixture.Xunit2. [AutoData] injeta dados gerados automaticamente em [Theory]. Customização via Fixture.Customize<T>() controla a geração para tipos complexos. AutoFixture com Moq: AutoMoqCustomization cria mocks automaticamente para dependências de interface.

Builder Pattern para objetos de domínio: ContaBuilder é uma fluent API específica que cria Contas em testes. Em vez de new Conta(cpf, saldo, status, ...) em cada teste, escreve-se new ContaBuilder().ComSaldo(500).Build(). Vantagem sobre AutoFixture: usa a Linguagem Ubíqua do domínio ("conta com saldo positivo", "conta bloqueada"), é mais legível e resiliente a mudanças de construtor.

Quando usar cada um: AutoFixture para dados cujos valores específicos não influenciam o comportamento testado — gera aleatoriamente, deixando explícito que o teste não se importa. Builder para objetos cujos valores importam para o cenário — ComSaldo(500) comunica que o saldo é relevante para o teste.

ObjectMother Pattern: coleção de factory methods estáticos que criam objetos com configurações nomeadas e reutilizáveis. ContaFixtures.ComSaldoPositivo(), ContaFixtures.Bloqueada(), ContaFixtures.Zerada(). Reduz duplicação e documenta os cenários de teste com nomes do domínio.

Regra de ouro: se o valor importa para o teste, seja explícito (Builder). Se não importa, deixe o framework gerar (AutoFixture). Se o cenário é reutilizado em muitos testes, extraia para ObjectMother.`,code:`// ══════════════════════════════════════════════
// Builder Pattern — fluent e legível
// ══════════════════════════════════════════════
public class ContaBuilder
{
    private Cpf _cpf = new Cpf("529.982.247-25");
    private Dinheiro _saldo = Dinheiro.BRL(1000);
    private StatusConta _status = StatusConta.Ativa;

    public ContaBuilder ComSaldo(decimal valor)
    {
        _saldo = Dinheiro.BRL(valor);
        return this;
    }

    public ContaBuilder Bloqueada()
    {
        _status = StatusConta.Bloqueada;
        return this;
    }

    public ContaBuilder ComCpf(string cpf)
    {
        _cpf = new Cpf(cpf);
        return this;
    }

    public Conta Build()
    {
        var conta = Conta.Abrir(_cpf, _saldo);
        if (_status == StatusConta.Bloqueada)
            conta.Bloquear();
        return conta;
    }
}

// Uso nos testes:
[Fact]
public void Sacar_ContaBloqueada_RetornaFalha()
{
    // Arrange — builder deixa o cenário explícito
    var conta = new ContaBuilder()
        .ComSaldo(500)
        .Bloqueada()
        .Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(100));

    // Assert
    resultado.IsSuccess.Should().BeFalse();
}

// ══════════════════════════════════════════════
// ObjectMother — cenários reutilizáveis
// ══════════════════════════════════════════════
public static class ContaFixtures
{
    public static Conta ComSaldoPositivo()
        => new ContaBuilder().ComSaldo(1000).Build();

    public static Conta Zerada()
        => new ContaBuilder().ComSaldo(0).Build();

    public static Conta Bloqueada()
        => new ContaBuilder().Bloqueada().Build();

    // CPFs válidos para testes
    public static class CpfFixture
    {
        public static Cpf Valido() => new Cpf("529.982.247-25");
        public static Cpf Outro()  => new Cpf("418.236.780-90");
    }
}

// ══════════════════════════════════════════════
// AutoFixture com [AutoData]
// ══════════════════════════════════════════════
using AutoFixture.Xunit2;

[Theory, AutoData]
public void AlgumTeste_DadosIrrelevantes_Comportamento(
    string nomeQualquer, int valorQualquer)
{
    // AutoFixture gerou os valores — o teste não se importa
    nomeQualquer.Should().NotBeNullOrEmpty();
    valorQualquer.Should().BeOfType(typeof(int));
}

// AutoFixture com Moq automático:
// dotnet add package AutoFixture.AutoMoq
// var fixture = new Fixture().Customize(
//     new AutoMoqCustomization());
// var useCase = fixture.Create<RealizarTransferenciaUseCase>();
// Todas as dependências de interface já são mocks criados`,checklist:["Instalar AutoFixture e AutoFixture.Xunit2","Criar ContaBuilder com pelo menos 4 métodos fluentes","Criar ContaFixtures com 3 objetos pré-construídos","Refatorar 5 testes para usar ContaBuilder em vez de criação manual","Usar [AutoData] em um teste onde os dados de entrada não importam"],quiz:[{question:"Qual a vantagem do Builder Pattern sobre criar objetos de domínio diretamente?",options:["Builder é mais rápido","Centraliza a criação — quando o construtor da Entity muda, só o Builder precisa ser atualizado, não todos os 50 testes","Builder gera dados aleatórios automaticamente","Builder é necessário para usar Moq"],answer:1,explanation:"Resiliência a mudanças: novo campo obrigatório no construtor de Conta? Atualize o Builder e todos os testes continuam passando."},{question:"Quando AutoFixture é preferível ao Builder Pattern?",options:["Sempre — AutoFixture é mais moderno","Para dados cujos valores não influenciam o comportamento testado — AutoFixture os gera aleatoriamente, tornando explícito que o teste não se importa com eles","Para objetos de domínio complexos","Para dados de banco de dados"],answer:1,explanation:"AutoFixture comunica intenção: valores aleatórios = irrelevantes para o teste. Builder comunica: valores específicos = relevantes para o cenário."},{question:"O que é o ObjectMother Pattern?",options:["Um pattern para criar bancos de dados de teste","Uma coleção de factory methods estáticos que criam objetos com configurações nomeadas e reutilizáveis — reduz duplicação e documenta os cenários","Um tipo especial de Mock","O mesmo que Builder Pattern"],answer:1,explanation:"ContaFixtures.Bloqueada() é mais legível que new ContaBuilder().Bloqueada().Build() quando usado repetidamente. ObjectMother e Builder se complementam."}]}]},Sp={id:"m15",title:"Testes de Integração",icon:"🔗",week:"Semana 14-15",color:"#0EA5E9",topics:[{id:"m15t1",moduleId:"m15",title:"WebApplicationFactory e TestServer",theory:`A diferença fundamental entre teste de unidade e integração: unidade testa uma peça isolada com dependências falsas, integração testa como componentes trabalham JUNTOS com dependências reais ou próximas do real. Ambos são necessários — sem um deles, há buracos na cobertura.

WebApplicationFactory<TProgram> é a ferramenta que sobe a aplicação ASP.NET Core inteira em memória. Sem abrir uma porta de rede real, sem precisar de um servidor separado rodando. CreateClient() retorna um HttpClient que faz requisições ao servidor in-memory — rápido, isolado, sem conflitos de porta.

Por que é poderoso: testa os middlewares, o routing, a configuração de DI, a serialização JSON e os controllers — tudo junto, em um teste que roda em milissegundos. Se uma rota estiver errada, se um middleware bloquear o request, se o DI não resolver uma dependência, o teste pega.

Customização da factory: sobrescrever o DI container para trocar o banco real por InMemory. ConfigureTestServices() permite registrar mocks ou fakes especificamente para os testes sem alterar o Program.cs de produção.

IClassFixture<WebApplicationFactory<Program>> compartilha uma única instância da factory entre todos os testes da mesma classe — performance. Subir a aplicação é custoso, mesmo in-memory.

Quando usar WebApplicationFactory: testar a camada HTTP completa sem banco real (use InMemory aqui). Quando NÃO usar: quando precisa de banco real com constraints FK, transações e índices — aí é TestContainers (próximo tópico).

Dica prática: crie uma classe base customizada que herda de WebApplicationFactory e configure nela tudo que os testes compartilham: troca de DbContext, seed de dados, helpers de autenticação JWT.`,code:`// ══════════════════════════════════════════════
// WebApplicationFactory customizada
// ══════════════════════════════════════════════
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

public class SistemaFinanceiroWebFactory
    : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(
        IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            // Remove o DbContext real (SQL Server)
            services.RemoveAll<DbContextOptions<FinanceiroDbContext>>();

            // Adiciona InMemory para testes rápidos
            services.AddDbContext<FinanceiroDbContext>(opt =>
                opt.UseInMemoryDatabase(
                    $"TestDb_{Guid.NewGuid()}"));
        });
    }
}

// ══════════════════════════════════════════════
// Testes de integração do ContasController
// ══════════════════════════════════════════════
public class ContasControllerIntegrationTests
    : IClassFixture<SistemaFinanceiroWebFactory>
{
    private readonly HttpClient _client;

    public ContasControllerIntegrationTests(
        SistemaFinanceiroWebFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task POST_AbrirConta_DadosValidos_Retorna201()
    {
        // Arrange
        var request = new
        {
            Cpf = "529.982.247-25",
            Nome = "João Silva",
            Email = "joao@email.com",
            SaldoInicial = 0
        };

        // Act
        var response = await _client.PostAsJsonAsync(
            "/api/contas", request);

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.Created);
        var body = await response.Content
            .ReadFromJsonAsync<AbrirContaResponse>();
        body!.ContaId.Should().NotBeEmpty();
    }

    [Fact]
    public async Task POST_AbrirConta_CpfInvalido_Retorna400()
    {
        // Arrange
        var request = new { Cpf = "000.000.000-00" };

        // Act
        var response = await _client.PostAsJsonAsync(
            "/api/contas", request);

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task GET_Extrato_ContaNaoExiste_Retorna404()
    {
        // Act
        var response = await _client.GetAsync(
            $"/api/contas/{Guid.NewGuid()}/extrato");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.NotFound);
    }
}`,checklist:["Criar projeto: dotnet new xunit -n SistemaFinanceiro.IntegrationTests","Implementar SistemaFinanceiroWebFactory com InMemory database","Criar os 3 testes do ContasController (201, 400, 404)","Adicionar referência ao projeto da API com dotnet add reference","Rodar dotnet test e verificar que os testes sobem a aplicação corretamente"],quiz:[{question:"Qual a vantagem de WebApplicationFactory sobre chamar a API com HttpClient real?",options:["WebApplicationFactory é mais rápida porque usa TCP real","WebApplicationFactory sobe a aplicação em memória sem porta de rede — mais rápido, sem conflito de portas, sem precisar da API rodando, ideal para CI/CD","WebApplicationFactory só funciona com InMemory database","Não há vantagem — preferir HttpClient real"],answer:1,explanation:"Em memória = sem servidor separado, sem porta TCP, sem firewall. O pipeline de CI roda os testes sem configurar nada — basta dotnet test."},{question:"Para que serve ConfigureTestServices na factory customizada?",options:["Para adicionar mais testes","Para sobrescrever registros do DI container para testes — trocar SQL Server por InMemory, substituir serviço de email por mock, injetar seed de dados","Para configurar o servidor HTTP","Para desabilitar middlewares"],answer:1,explanation:"ConfigureTestServices roda DEPOIS do Program.cs — sobrescreve qualquer registro sem modificar o código de produção. Inversão de dependência em ação."},{question:"Por que usar IClassFixture<WebApplicationFactory> em vez de criar uma factory por teste?",options:["IClassFixture não funciona com WebApplicationFactory","Subir a aplicação é custoso — IClassFixture compartilha uma única instância entre todos os testes da classe, reduzindo o tempo total da suite","Para garantir que os testes rodam em série","É apenas convenção sem impacto"],answer:1,explanation:"Uma factory = um boot da aplicação. 20 testes com IClassFixture = 1 boot. 20 testes sem = 20 boots. A diferença é perceptível em suites grandes."}]},{id:"m15t2",moduleId:"m15",title:"TestContainers: Banco Real em Testes",theory:`O problema do InMemory: comportamento DIFERENTE do SQL Server real. InMemory não suporta transações complexas, não verifica foreign keys, não respeita índices únicos, não executa triggers. Um teste que passa com InMemory pode falhar espetacularmente em produção.

TestContainers resolve esse gap: sobe um container Docker real durante os testes e o destrói ao final — sem configuração manual, sem banco de desenvolvimento contaminado, sem "funciona na minha máquina".

PRÉ-REQUISITO: Docker instalado e rodando. Verifique com docker --version. Para acelerar o primeiro teste, faça docker pull mcr.microsoft.com/mssql/server:2022-latest antecipadamente.

Instalação: dotnet add package Testcontainers e Testcontainers.MsSql. MsSqlContainer configura um SQL Server 2022 com senha e mapeamento de porta automáticos.

Integração com xUnit: IAsyncLifetime define InitializeAsync() (subir container, aplicar migrations) e DisposeAsync() (destruir container). O container sobe em ~10 segundos — trade-off consciente entre fidelidade e velocidade.

IClassFixture<SqlServerFixture> compartilha o container entre todos os testes da classe — evita subir N containers para N testes. ICollectionFixture compartilha entre múltiplas classes.

Migrations em teste: após o container subir, aplica-se ctx.Database.MigrateAsync() para criar o schema completo. O teste roda contra o schema real com constraints reais — fidelidade máxima.

Custo de tempo: ~10s para subir o container + ~5s para migrations. Esse custo é pago UMA VEZ graças ao IClassFixture. Os testes individuais rodam em milissegundos depois.`,code:`// ══════════════════════════════════════════════
// PRÉ-REQUISITO:
// docker pull mcr.microsoft.com/mssql/server:2022-latest
// ══════════════════════════════════════════════

// Fixture com TestContainers
using Testcontainers.MsSql;

public class SqlServerFixture : IAsyncLifetime
{
    private readonly MsSqlContainer _container =
        new MsSqlBuilder()
            .WithImage(
                "mcr.microsoft.com/mssql/server:2022-latest")
            .WithPassword("Senha@123TestContainers")
            .Build();

    public string ConnectionString
        => _container.GetConnectionString();

    public async Task InitializeAsync()
    {
        await _container.StartAsync();

        // Aplicar migrations no banco do container
        var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
            .UseSqlServer(ConnectionString).Options;

        await using var ctx = new FinanceiroDbContext(options);
        await ctx.Database.MigrateAsync();
    }

    public Task DisposeAsync()
        => _container.DisposeAsync().AsTask();
}

// ══════════════════════════════════════════════
// Teste usando SQL Server real via container
// ══════════════════════════════════════════════
public class ContaRepositoryIntegrationTests
    : IClassFixture<SqlServerFixture>
{
    private readonly FinanceiroDbContext _context;

    public ContaRepositoryIntegrationTests(
        SqlServerFixture fixture)
    {
        var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
            .UseSqlServer(fixture.ConnectionString).Options;
        _context = new FinanceiroDbContext(options);
    }

    [Fact]
    public async Task AddAsync_ContaValida_PersistidaComId()
    {
        // Arrange
        var repo = new ContaEfRepository(_context);
        var conta = Conta.Abrir(
            new Cpf("529.982.247-25"), Dinheiro.BRL(500));

        // Act
        await repo.AddAsync(conta);
        await repo.SaveChangesAsync();

        // Assert — busca do banco REAL, não do InMemory
        var contaSalva = await repo.GetByIdAsync(conta.Id);
        contaSalva.Should().NotBeNull();
        contaSalva!.Saldo.Should().Be(Dinheiro.BRL(500));
    }

    [Fact]
    public async Task AddAsync_CpfDuplicado_LancaDbException()
    {
        // Arrange
        var repo = new ContaEfRepository(_context);
        var cpf = new Cpf("529.982.247-25");
        var conta1 = Conta.Abrir(cpf, Dinheiro.BRL(100));
        var conta2 = Conta.Abrir(cpf, Dinheiro.BRL(200));

        await repo.AddAsync(conta1);
        await repo.SaveChangesAsync();

        // Act
        await repo.AddAsync(conta2);
        var act = () => repo.SaveChangesAsync();

        // Assert — constraint de unicidade do SQL Server real
        await act.Should().ThrowAsync<DbUpdateException>();
    }
}`,checklist:["Verificar Docker instalado: docker --version","Instalar Testcontainers.MsSql no projeto de integração","Criar SqlServerFixture com IAsyncLifetime","Implementar o teste de AddAsync com banco real","Verificar no Docker Desktop que o container sobe e destrói durante os testes"],quiz:[{question:"Por que TestContainers é superior ao InMemory database para testes de integração?",options:["InMemory é mais rápido e suficiente","TestContainers usa SQL Server real — suporta transações, constraints FK, índices e comportamentos que InMemory não emula, tornando testes mais fidedignos","TestContainers é open source e InMemory não","InMemory não funciona com EF Core"],answer:1,explanation:"Um índice único que InMemory ignora pode causar dados duplicados em produção. TestContainers detectaria o problema durante os testes."},{question:"Por que usar IClassFixture com TestContainers?",options:["IClassFixture é obrigatório com Docker","Subir um container leva ~10s — compartilhar via IClassFixture significa subir UMA VEZ para toda a classe de testes, não uma vez por teste","Para garantir isolamento entre testes","TestContainers não funciona sem IClassFixture"],answer:1,explanation:"10s × 20 testes = 200s. IClassFixture: 10s + 20 × ~50ms = 11s. A diferença entre suite viável e suite que ninguém executa."},{question:"Como garantir que testes de integração não contaminam uns aos outros no mesmo container?",options:["Não é possível — os testes interferem","Usar transactions e rollback por teste (BeginTransaction no setup, Dispose faz Rollback) OU limpar as tabelas no setup de cada teste","Criar um container por teste","Usar IsolationLevel.Serializable"],answer:1,explanation:"Transaction rollback no Dispose é a técnica mais limpa: o teste cria/modifica dados dentro da transaction, e o Rollback desfaz tudo sem custo de DELETE."}]},{id:"m15t3",moduleId:"m15",title:"Testando a API End-to-End (HTTP Real)",theory:`Testes end-to-end completos combinam WebApplicationFactory + TestContainers: a stack completa roda em um teste. HTTP request vai pelo controller, passa pelo Use Case, chega no repositório, persiste no SQL Server real do container. Alta fidelidade — se esse teste passa, o fluxo funciona em produção.

Por que é poderoso e custoso: fidelidade máxima (testa tudo integrado), mas lento (container + rede), difícil de isolar falhas (quando falha, pode ser qualquer camada), e manutenção alta (mudança de contrato quebra o teste).

Autenticação em testes: para endpoints protegidos com [Authorize], gere um JWT válido no teste usando os mesmos parâmetros do appsettings mas com chave de teste. Crie um helper GerarTokenTeste(role) na factory.

Gerenciar estado entre testes: cada teste deve ser independente — sem dados herdados de testes anteriores. Estratégias: seed por teste (cria dados no Arrange, limpa no Dispose), rollback por transaction, ou banco exclusivo por classe.

Testes de cenários negativos: 400 (validação — CPF inválido), 404 (recurso não existe), 422 (regra de negócio violada — saldo insuficiente), 500 (erro interno). Cada status code tem uma causa real e específica.

HttpClient extensions simplificam: PostAsJsonAsync() serializa o body, ReadFromJsonAsync<T>() deserializa tipado, GetFromJsonAsync<T>() combina GET + deserialização.

Testes de contrato: verificar que a resposta JSON tem exatamente a estrutura esperada pelo consumidor. Crítico quando múltiplos times (web, mobile, parceiros) consomem a mesma API e dependem dos campos retornados.`,code:`// ══════════════════════════════════════════════
// Factory completa: WebApplicationFactory + TestContainers
// ══════════════════════════════════════════════
public class IntegrationTestFactory
    : WebApplicationFactory<Program>, IAsyncLifetime
{
    private readonly MsSqlContainer _sqlContainer =
        new MsSqlBuilder()
            .WithImage(
                "mcr.microsoft.com/mssql/server:2022-latest")
            .WithPassword("Senha@Test123!")
            .Build();

    protected override void ConfigureWebHost(
        IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            services.RemoveAll<
                DbContextOptions<FinanceiroDbContext>>();
            services.AddDbContext<FinanceiroDbContext>(opt =>
                opt.UseSqlServer(
                    _sqlContainer.GetConnectionString()));
        });
    }

    public async Task InitializeAsync()
    {
        await _sqlContainer.StartAsync();
        // Aplicar migrations e seed inicial
        using var scope = Services.CreateScope();
        var ctx = scope.ServiceProvider
            .GetRequiredService<FinanceiroDbContext>();
        await ctx.Database.MigrateAsync();
    }

    public new async Task DisposeAsync()
        => await _sqlContainer.DisposeAsync();
}

// ══════════════════════════════════════════════
// Teste E2E: fluxo completo de transferência
// ══════════════════════════════════════════════
public class TransferenciaE2ETests
    : IClassFixture<IntegrationTestFactory>
{
    private readonly HttpClient _client;

    public TransferenciaE2ETests(
        IntegrationTestFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task FluxoCompleto_AbrirContasETransferir()
    {
        // Arrange — criar conta origem via API
        var respOrigem = await _client.PostAsJsonAsync(
            "/api/contas", new
            {
                Cpf = "529.982.247-25",
                SaldoInicial = 500
            });
        var contaOrigem = await respOrigem.Content
            .ReadFromJsonAsync<AbrirContaResponse>();

        // Criar conta destino via API
        var respDestino = await _client.PostAsJsonAsync(
            "/api/contas", new
            {
                Cpf = "418.236.780-90",
                SaldoInicial = 0
            });
        var contaDestino = await respDestino.Content
            .ReadFromJsonAsync<AbrirContaResponse>();

        // Act — realizar transferência via API
        var transferencia = await _client.PostAsJsonAsync(
            "/api/transferencias", new
            {
                ContaOrigemId = contaOrigem!.ContaId,
                ContaDestinoId = contaDestino!.ContaId,
                Valor = 300
            });

        // Assert
        transferencia.StatusCode.Should()
            .Be(HttpStatusCode.OK);

        // Verificar saldos via GET
        var extratoOrigem = await _client
            .GetFromJsonAsync<ExtratoResponse>(
                $"/api/contas/{contaOrigem.ContaId}/extrato");
        extratoOrigem!.SaldoAtual.Should().Be(200);

        var extratoDestino = await _client
            .GetFromJsonAsync<ExtratoResponse>(
                $"/api/contas/{contaDestino.ContaId}/extrato");
        extratoDestino!.SaldoAtual.Should().Be(300);
    }

    [Fact]
    public async Task Transferir_SaldoInsuficiente_Retorna422()
    {
        // Arrange — conta com saldo baixo
        var resp = await _client.PostAsJsonAsync(
            "/api/contas", new
            {
                Cpf = "529.982.247-25",
                SaldoInicial = 10
            });
        var conta = await resp.Content
            .ReadFromJsonAsync<AbrirContaResponse>();

        // Act
        var transferencia = await _client.PostAsJsonAsync(
            "/api/transferencias", new
            {
                ContaOrigemId = conta!.ContaId,
                ContaDestinoId = Guid.NewGuid(),
                Valor = 1000
            });

        // Assert
        transferencia.StatusCode.Should()
            .Be(HttpStatusCode.UnprocessableEntity);
    }
}`,checklist:["Criar IntegrationTestFactory combinando WebApplicationFactory + TestContainers","Implementar helper GerarTokenTeste para endpoints com [Authorize]","Testar o fluxo completo: criar conta, depositar, transferir, checar extrato","Testar todos os cenários de erro (400, 404, 422) com dados reais","Medir tempo do teste end-to-end e documentar no comentário"],quiz:[{question:"Qual a diferença entre teste com WebApplicationFactory+InMemory e com WebApplicationFactory+TestContainers?",options:["Não há diferença","InMemory é mais rápido e suficiente para maioria; TestContainers usa banco real para capturar comportamentos específicos que InMemory não reproduz","TestContainers não funciona com WebApplicationFactory","InMemory não suporta testes assíncronos"],answer:1,explanation:"Use InMemory para testes de controllers/routing rápidos. TestContainers quando precisa validar constraints FK, transações ou queries específicas do SQL Server."},{question:"Por que cada teste de integração deve ser independente de estado?",options:["É apenas convenção sem impacto real","Testes que dependem de ordem ou dados de outros testes são frágeis — falham aleatoriamente dependendo da ordem de execução (especialmente em paralelo)","xUnit não suporta estado compartilhado","Para melhor performance"],answer:1,explanation:"Testes interdependentes são o segundo maior causador de suites flaky. xUnit roda classes em paralelo — ordem não é garantida."},{question:"O que são testes de contrato de API?",options:["Testes que verificam performance","Testes que verificam que a resposta JSON tem exatamente a estrutura e campos esperados pelo consumidor — crítico quando múltiplos times consomem a mesma API","Testes que verificam autenticação","Testes de carga da API"],answer:1,explanation:"Se o time mobile espera um campo 'saldoAtual' e o backend renomeia para 'saldo', o teste de contrato falha antes do deploy — evitando incidentes."}]},{id:"m15t4",moduleId:"m15",title:"Fixtures, Collections e Gerenciamento de Estado",theory:`Ciclo de vida em xUnit: o construtor é chamado uma vez POR TESTE (isolamento nativo), IDisposable.Dispose() limpa após cada teste, IAsyncLifetime.InitializeAsync()/DisposeAsync() para setup/cleanup assíncrono.

IClassFixture<T>: estado compartilhado dentro de UMA classe de teste. T é criado uma vez antes do primeiro teste da classe e destruído após o último. Uso típico: WebApplicationFactory, DbContext, container Docker.

ICollectionFixture + [Collection("nome")]: estado compartilhado entre MÚLTIPLAS classes. Define-se uma CollectionDefinition que implementa ICollectionFixture<T>, e cada classe marca com [Collection("nome")]. Uso típico: um container Docker único para todos os testes de integração.

Quando usar cada: Constructor/Dispose para setup leve por teste (sem I/O, criação de objetos simples). IClassFixture para setup custoso compartilhado na mesma classe (banco, factory, container). ICollectionFixture para recurso único entre múltiplas classes (container SQL Server).

Paralelismo em xUnit: classes rodam em paralelo por padrão, métodos de uma mesma classe rodam em série. [Collection] força serialização entre classes da mesma collection. [assembly: CollectionBehavior(DisableTestParallelization = true)] desabilita paralelismo global — último recurso.

Isolamento de dados: rollback via TransactionScope (cada teste abre transaction, Dispose faz Rollback — zero cleanup manual), cleanup explícito (DELETE nos dados no Dispose), ou dados únicos por teste (Guid no nome para evitar colisão).

Ordered tests: raramente recomendado. Se a ordem importa, os testes provavelmente estão acoplados. Exceção: testes de integração de fluxo sequencial onde a própria ordem é o que está sendo testado.`,code:`// ══════════════════════════════════════════════
// Collection Fixture — container único para todos
// ══════════════════════════════════════════════

// 1. Definir a collection
[CollectionDefinition("IntegracaoCollection")]
public class IntegracaoCollectionDefinition
    : ICollectionFixture<IntegrationTestFactory>
{ }

// 2. Classe 1 que usa a collection
[Collection("IntegracaoCollection")]
public class ContasIntegrationTests
{
    private readonly HttpClient _client;

    public ContasIntegrationTests(
        IntegrationTestFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task POST_AbrirConta_Retorna201()
    {
        // ... mesmo container já iniciado
    }
}

// 3. Classe 2 que usa o MESMO container
[Collection("IntegracaoCollection")]
public class TransferenciasIntegrationTests
{
    private readonly HttpClient _client;

    public TransferenciasIntegrationTests(
        IntegrationTestFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task POST_Transferir_Retorna200()
    {
        // ... mesmo container da classe anterior
    }
}

// ══════════════════════════════════════════════
// Isolamento com TransactionScope por teste
// ══════════════════════════════════════════════
public class IsolatedDbTest : IAsyncLifetime
{
    private readonly FinanceiroDbContext _context;
    private IDbContextTransaction? _transaction;

    public IsolatedDbTest(SqlServerFixture fixture)
    {
        var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
            .UseSqlServer(fixture.ConnectionString).Options;
        _context = new FinanceiroDbContext(options);
    }

    public async Task InitializeAsync()
    {
        // Abre transaction ANTES de cada teste
        _transaction = await _context.Database
            .BeginTransactionAsync();
    }

    public async Task DisposeAsync()
    {
        // Rollback APÓS cada teste — desfaz tudo
        if (_transaction != null)
            await _transaction.RollbackAsync();
    }

    [Fact]
    public async Task CriarConta_Isolado_NaoAfetaOutrosTestes()
    {
        // Arrange
        var repo = new ContaEfRepository(_context);
        var conta = Conta.Abrir(CpfValido, Dinheiro.BRL(500));

        // Act
        await repo.AddAsync(conta);
        await _context.SaveChangesAsync();

        // Assert
        var salva = await repo.GetByIdAsync(conta.Id);
        salva.Should().NotBeNull();

        // Após o teste: RollbackAsync desfaz o INSERT
    }
}`,checklist:["Criar IntegracaoCollectionDefinition para compartilhar o container","Mover testes de integração para a mesma [Collection]","Implementar isolamento por TransactionScope rollback em um teste",'Medir o tempo total da suite com dotnet test --logger "console;verbosity=normal"',"Identificar quais testes rodam em paralelo e quais em série"],quiz:[{question:"Qual a diferença entre IClassFixture e ICollectionFixture?",options:["São sinônimos","IClassFixture compartilha estado dentro de UMA classe; ICollectionFixture compartilha entre MÚLTIPLAS classes marcadas com [Collection] — útil para container Docker único","ICollectionFixture é mais rápido","IClassFixture só funciona com mocks"],answer:1,explanation:"IClassFixture = escopo de classe. ICollectionFixture = escopo de collection (múltiplas classes). Um container Docker é recurso caro demais para criar por classe."},{question:"Por que usar TransactionScope rollback em testes de integração?",options:["Para melhorar a performance dos testes","Para garantir que cada teste começa com banco limpo — a transaction é revertida no Dispose sem precisar deletar dados explicitamente","TransactionScope é obrigatório com TestContainers","Para testar rollback de transações no código de produção"],answer:1,explanation:"Rollback é mais limpo e rápido que DELETE. O banco volta ao estado exato de antes do teste sem SQL de cleanup e sem risco de esquecer uma tabela."},{question:"O que acontece quando duas classes de teste sem [Collection] rodam simultaneamente?",options:["Rodam em série por padrão","Rodam em paralelo — se compartilham estado (banco, variável estática), podem interferir entre si causando falhas intermitentes difíceis de reproduzir","O xUnit detecta conflitos automaticamente","Apenas métodos rodam em paralelo"],answer:1,explanation:"Paralelismo default do xUnit é por classe. Sem [Collection], duas classes que escrevem no mesmo banco podem causar deadlocks e dados fantasma."}]}]},bp={id:"m16",title:"TDD e BDD na Prática",icon:"🔄",week:"Semana 15",color:"#10B981",topics:[{id:"m16t1",moduleId:"m16",title:"TDD: Red-Green-Refactor na Prática",theory:`TDD não é sobre testes — é sobre design. Os testes são o subproduto.

O ciclo obrigatório: RED (escreve teste que falha) → GREEN (código mínimo que faz passar) → REFACTOR (limpa sem quebrar) → repete. Esse ciclo é a unidade atômica do TDD. Não existe Green sem Red anterior. Não existe Refactor sem Green anterior.

Por que Red primeiro? Força pensar na interface pública ANTES da implementação. Você define como a classe será USADA antes de definir como funciona por dentro. Isso naturalmente leva a APIs limpas e fáceis de consumir.

O "código mínimo" no Green: return true; é válido se faz o teste passar. Parece absurdo, mas é intencional — a próxima iteração adicionará um novo teste que FORÇARÁ a implementação real. Cada teste é uma especificação incremental do comportamento.

Benefícios reais e mensuráveis: design emergente (a interface nasce do uso, não da imaginação), cobertura automática (100% do código foi escrito PARA um teste), refatoração segura (a suite de testes é a rede de segurança), especificação executável (os testes documentam o comportamento), feedback em SEGUNDOS não em dias (ciclo < 5 minutos).

Quando TDD é difícil: código legado sem testes (precisa de refatoração segura primeiro — "Working Effectively with Legacy Code"), infraestrutura pura (UI, banco, configuração), e domínios completamente desconhecidos (spike/protótipo descartável antes).

Outside-in (London School): começa pelos testes de alto nível (Controller, UseCase) usando mocks nas camadas inferiores, descendo. Inside-out (Chicago School): começa pelas unidades menores (Value Objects, Entities) subindo. Ambas são válidas — escolha por contexto.

TDD no dia a dia corporativo: muitas empresas fazem "kata time" — 30 minutos de prática de TDD antes de iniciar código de produção, até o ciclo ficar automático.`,code:`// ══════════════════════════════════════════════
// TDD COMPLETO: Implementando Conta.Sacar()
// ══════════════════════════════════════════════

// ─── PASSO 1 — RED: teste que NÃO COMPILA ───
[Fact]
public void Sacar_SaldoSuficiente_DebitaSaldo()
{
    // Arrange
    var conta = new ContaBuilder().ComSaldo(500).Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(200));
    // ↑ NÃO COMPILA — Sacar() ainda não existe

    // Assert
    resultado.IsSuccess.Should().BeTrue();
    conta.Saldo.Should().Be(Dinheiro.BRL(300));
}
// dotnet test → FALHA (não compila) ← Red esperado ✗

// ─── PASSO 2 — GREEN: código MÍNIMO ───
// Na classe Conta:
public Result Sacar(Dinheiro valor)
{
    _saldo -= valor;  // implementação mínima
    return Result.Success();
}
// dotnet test → VERDE ✓

// ─── PASSO 3 — RED: novo teste que revela gap ───
[Fact]
public void Sacar_SaldoInsuficiente_RetornaFalha()
{
    // Arrange
    var conta = new ContaBuilder().ComSaldo(100).Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(500));

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("insuficiente");
}
// dotnet test → FALHA ← Red esperado ✗
// (implementação atual não valida saldo)

// ─── PASSO 4 — GREEN: adiciona a validação ───
public Result Sacar(Dinheiro valor)
{
    if (_saldo < valor)
        return Result.Failure("Saldo insuficiente");

    _saldo -= valor;
    return Result.Success();
}
// dotnet test → VERDE ✓ (ambos os testes passam)

// ─── PASSO 5 — REFACTOR: melhorar sem quebrar ───
public Result Sacar(Dinheiro valor)
{
    if (!TemSaldoSuficientePara(valor))
        return Result.Failure(
            $"Saldo insuficiente. Disponível: {_saldo}");

    _saldo -= valor;
    AddDomainEvent(new SaqueRealizadoEvent(Id, valor));
    return Result.Success();
}

private bool TemSaldoSuficientePara(Dinheiro valor)
    => _saldo >= valor;
// dotnet test → VERDE ✓ (refatorou sem quebrar)

// ─── PASSO 6 — RED: próxima iteração ───
[Fact]
public void Sacar_ContaBloqueada_RetornaFalha()
{
    // Arrange
    var conta = new ContaBuilder()
        .ComSaldo(1000).Bloqueada().Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(100));

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("bloqueada");
}
// dotnet test → FALHA ← Red (conta bloqueada não tratada)
// Ciclo continua...`,checklist:["Implementar uma funcionalidade nova usando TDD puro (teste antes do código)","Praticar: escrever o teste que não compila, rodar, depois implementar o mínimo","Fazer pelo menos 5 iterações Red-Green-Refactor para a funcionalidade","Verificar que 100% dos testes passam após cada Refactor","Cronometrar: cada ciclo deve levar menos de 5 minutos"],quiz:[{question:"Por que no TDD o teste deve FALHAR antes de escrever o código de produção?",options:["É apenas ritual sem propósito técnico","Garante que o teste realmente testa algo — se já passa antes da implementação, ele não está verificando o comportamento correto. Red confirma que o teste detectaria uma regressão","xUnit exige que testes falhem primeiro","Para documentar o bug antes da correção"],answer:1,explanation:"Um teste que já passa sem implementação é inútil — não protege contra nada. Red prova que o teste é capaz de detectar a AUSÊNCIA do comportamento."},{question:"O que significa 'código mínimo que faz o teste passar' no Green?",options:["Escrever a solução completa e otimizada de uma vez","Escrever apenas o suficiente para o teste atual passar — mesmo return true hardcoded. O próximo teste forçará a implementação real, mantendo o foco incremental e o design emergente","Escrever apenas comentários e TODOs","Implementar sem tratamento de erro"],answer:1,explanation:"O Green mínimo parece 'trapaça' mas é estratégia: cada teste adicionado no Red restringe o espaço de soluções possíveis até que só a implementação correta sobreviva."},{question:"Qual a diferença entre TDD Outside-in (London) e Inside-out (Chicago)?",options:["São nomes diferentes para a mesma abordagem","Outside-in começa pelos testes de alto nível (Controller/UseCase) usando mocks nas camadas inferiores, descendo. Inside-out começa pelas unidades menores (Value Objects) subindo para camadas mais altas","Outside-in usa xUnit e Inside-out usa NUnit","London School não usa mocks"],answer:1,explanation:"London School (Outside-in) usa muitos mocks e é boa para descobrir interfaces. Chicago (Inside-out) é mais simples e funciona bem com DDD onde o domínio é bem conhecido."}]},{id:"m16t2",moduleId:"m16",title:"Design Emergente via TDD",theory:`O benefício menos óbvio do TDD — e possivelmente o mais valioso: ele FORÇA interfaces limpas. Se você não consegue testar sem subir um banco, a dependência está errada. Se o setup do teste tem 25 linhas, a classe tem responsabilidades demais.

"Código difícil de testar é código mal projetado" — essa frase resume a relação entre TDD e SOLID. Os testes são um ESPELHO do design. Um espelho que não mente.

Como TDD revela problemas de design em tempo real:
- Setup com muitos mocks → classe tem dependências demais → viola SRP
- Parâmetros demais no construtor → classe faz coisas demais → viola SRP
- Mock de método concreto impossível → acoplamento a implementação → viola DIP
- Teste precisa de estado global → hidden dependency → viola DIP
- Cenários de teste explodem exponencialmente → lógica condicional complexa → viola OCP

O custo do mock setup é um DIAGNÓSTICO: se criar o teste exige 20 linhas de setup com 7 mocks, a classe sob teste tem 7 dependências. Isso é um code smell. A solução não é aceitar o setup longo — é refatorar a classe.

Regra prática: se o Arrange tem mais de 15 linhas, o código de produção tem um problema de design. Os testes estão te dizendo isso — escute.

"Listening to the tests" (ouvir os testes): o feedback dos testes sobre o design é frequentemente mais valioso que a verificação do comportamento em si. Testes difíceis de escrever indicam acoplamento, responsabilidades excessivas ou dependências incorretas.

TDD e SOLID se reforçam mutuamente: testar com injeção de dependência natural leva ao DIP; testar unidades isoladas leva ao SRP; testar comportamento extensível leva ao OCP.

Quando NÃO deixar o design emergir via TDD: domínios completamente desconhecidos onde você ainda não sabe qual é a interface correta. Nesses casos, um spike (protótipo descartável) é melhor que TDD cego. Explore primeiro, depois reimplemente com TDD e clareza.`,code:`// ══════════════════════════════════════════════
// ANTES: Setup longo = classe com design ruim
// ══════════════════════════════════════════════

// ❌ ANTI-PATTERN: 7 dependências = 7 mocks = SRP violado
[Fact]
public async Task Processar_PedidoValido_Sucesso()
{
    // Arrange — 25+ linhas de setup revelam o problema
    var mockContaRepo = new Mock<IContaRepository>();
    var mockNotificacao = new Mock<INotificacaoService>();
    var mockEmail = new Mock<IEmailService>();
    var mockSms = new Mock<ISmsService>();
    var mockAuditoria = new Mock<IAuditoriaService>();
    var mockEstoque = new Mock<IEstoqueService>();
    var mockAntifraude = new Mock<IAntiFraudeService>();

    // ... 20 linhas configurando cada mock ...
    mockContaRepo.Setup(r => r.GetByIdAsync(It.IsAny<ContaId>()))
        .ReturnsAsync(conta);
    mockEstoque.Setup(e => e.VerificarDisponibilidade(It.IsAny<ProdutoId>()))
        .ReturnsAsync(true);
    mockAntifraude.Setup(a => a.ValidarTransacao(It.IsAny<Transacao>()))
        .ReturnsAsync(ResultadoFraude.Aprovado);

    var sut = new ProcessarPedidoService(
        mockContaRepo.Object, mockNotificacao.Object,
        mockEmail.Object, mockSms.Object,
        mockAuditoria.Object, mockEstoque.Object,
        mockAntifraude.Object); // 7 dependências!

    // Act
    var resultado = await sut.ProcessarAsync(pedido);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
}
// DIAGNÓSTICO: ProcessarPedidoService viola SRP — faz demais

// ══════════════════════════════════════════════
// DEPOIS: Design emergido via TDD — classes menores
// ══════════════════════════════════════════════

// ✅ ValidarPedidoService — 2 dependências, setup de 5 linhas
[Fact]
public async Task Validar_PedidoComEstoque_Aprovado()
{
    // Arrange — setup limpo e focado
    var mockEstoque = new Mock<IEstoqueService>();
    var mockAntifraude = new Mock<IAntiFraudeService>();
    mockEstoque.Setup(e => e.VerificarDisponibilidade(produtoId))
        .ReturnsAsync(true);
    mockAntifraude.Setup(a => a.ValidarTransacao(transacao))
        .ReturnsAsync(ResultadoFraude.Aprovado);

    var sut = new ValidarPedidoService(
        mockEstoque.Object, mockAntifraude.Object);

    // Act
    var resultado = await sut.ValidarAsync(pedido);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
}

// ✅ NotificarClienteService — 2 dependências
[Fact]
public async Task Notificar_PedidoAprovado_EnviaEmailESms()
{
    // Arrange
    var mockEmail = new Mock<IEmailService>();
    var mockSms = new Mock<ISmsService>();
    var sut = new NotificarClienteService(
        mockEmail.Object, mockSms.Object);

    // Act
    await sut.NotificarAsync(pedido, ResultadoPedido.Aprovado);

    // Assert
    mockEmail.Verify(e => e.EnviarAsync(
        It.IsAny<string>(), It.IsAny<string>()), Times.Once);
    mockSms.Verify(s => s.EnviarAsync(
        It.IsAny<string>(), It.IsAny<string>()), Times.Once);
}

// Resultado: 3 classes com 2 dependências cada
// em vez de 1 classe com 7 dependências
// Arrange de cada teste: 5-8 linhas (antes: 25+)`,checklist:["Encontrar um teste no projeto com Arrange maior que 15 linhas","Identificar qual princípio SOLID está sendo violado pela classe testada","Refatorar a classe dividindo responsabilidades em classes menores","Verificar que o Arrange de cada novo teste cabe em 8 linhas","Documentar no comentário: 'Refatorei X porque o teste revelou Y'"],quiz:[{question:"O que um setup longo de mock em um teste revela sobre o design?",options:["Que o teste é complexo — mas a classe está bem projetada","Que a classe sob teste tem dependências demais, provavelmente violando o SRP — o teste está dando feedback sobre o design: simplifique a classe dividindo responsabilidades","Que Moq está sendo mal utilizado","Que o teste precisa de mais [Theory] em vez de [Fact]"],answer:1,explanation:"7 mocks = 7 dependências = 7 razões para mudar. SRP diz: uma classe deve ter UMA razão para mudar. O setup longo é o diagnóstico — a refatoração é o tratamento."},{question:"O que significa 'listening to the tests' no contexto de TDD?",options:["Escutar o output de erros dos testes no terminal","Usar a dificuldade de escrever testes como feedback sobre a qualidade do design — testes difíceis indicam acoplamento excessivo, muitas responsabilidades ou dependências incorretas","Usar logs dentro dos testes para debugar","Ler a documentação dos frameworks de teste"],answer:1,explanation:"O teste que mais dá trabalho para escrever é o que mais revela sobre o design. Se criar o mock setup é doloroso, imagine manter a classe em produção."},{question:"Quando um spike (protótipo descartável) é melhor que TDD?",options:["Nunca — TDD deve ser usado sempre sem exceção","Quando o domínio é desconhecido e você não sabe qual é a interface correta — explorar com código descartável primeiro, aprender o domínio, depois reimplementar com TDD e clareza","Quando o prazo está curto e não há tempo para testes","Para todo código de infraestrutura"],answer:1,explanation:"TDD funciona melhor quando você sabe O QUE testar. Se o domínio é novo, um spike rápido revela as interfaces certas — depois TDD reimplementa com segurança."}]},{id:"m16t3",moduleId:"m16",title:"BDD com SpecFlow: Gherkin e Given-When-Then",theory:`BDD (Behavior-Driven Development) vs TDD: TDD guia o design do código; BDD alinha o comportamento do sistema com as necessidades do NEGÓCIO usando linguagem natural. TDD fala a língua do desenvolvedor; BDD fala a língua do Product Owner.

Gherkin: linguagem de especificação legível por não-técnicos. Qualquer pessoa que entenda o domínio (analista de negócio, QA, PO, gerente) consegue ler e validar um arquivo .feature sem saber programar.

Palavras-chave do Gherkin: Feature (descreve a funcionalidade), Scenario (um caso de uso específico), Given (pré-condição), When (ação), Then (resultado esperado), And/But (passos adicionais). Scenario Outline + Examples: parametrização — equivalente ao [Theory] do xUnit.

SpecFlow: a ferramenta .NET que conecta Gherkin com código C#. Instalação: dotnet add package SpecFlow.xUnit e dotnet add package SpecFlow.Tools.MsBuild.Generation. O SpecFlow gera um teste xUnit para cada Scenario automaticamente.

Step Definitions: classes C# com métodos decorados por [Given], [When], [Then]. Cada regex nos atributos casa com uma linha do Gherkin. O SpecFlow injeta os parâmetros capturados (R\\$ 1000,00 → decimal 1000).

Living Documentation: os cenários Gherkin são simultaneamente especificação (o que o sistema deve fazer), documentação (como funciona), e teste (prova que funciona). Quando o Gherkin roda como teste e passa, a documentação está ATUALIZADA por definição.

Quando BDD faz sentido: projetos com analistas de negócio, QAs e POs que participam ativamente da definição dos cenários. O Gherkin é a PONTE entre técnico e negócio. Quando NÃO faz sentido: time puramente técnico sem stakeholders revisando cenários — o overhead do Gherkin não agrega valor sem colaboração entre papéis.

Scenario Outline com Examples é o equivalente do [Theory] com [InlineData] — testa o mesmo fluxo com dados diferentes. A tabela Examples documenta os cenários de forma visual e organizada.`,code:`// ══════════════════════════════════════════════
// Arquivo: Features/Transferencia.feature
// ══════════════════════════════════════════════
// Feature: Transferência entre contas
//   Para movimentar dinheiro entre contas
//   Como titular de uma conta
//   Eu quero realizar transferências
//
//   Scenario: Transferência com saldo suficiente
//     Given que tenho uma conta com saldo de R$ 1000,00
//     And existe uma conta destino com saldo de R$ 0,00
//     When realizo uma transferência de R$ 300,00
//     Then minha conta deve ter saldo de R$ 700,00
//     And a conta destino deve ter saldo de R$ 300,00
//
//   Scenario: Transferência com saldo insuficiente
//     Given que tenho uma conta com saldo de R$ 100,00
//     When tento transferir R$ 500,00
//     Then a operação deve ser recusada
//     And minha conta deve manter saldo de R$ 100,00
//
//   Scenario Outline: Validação de valor
//     Given que tenho uma conta com saldo de R$ <saldo>
//     When tento transferir R$ <valor>
//     Then a operação deve <resultado>
//
//     Examples:
//       | saldo  | valor  | resultado     |
//       | 500    | 300    | ser aprovada  |
//       | 100    | 500    | ser recusada  |
//       | 1000   | 0      | ser recusada  |

// ══════════════════════════════════════════════
// Step Definitions em C#
// ══════════════════════════════════════════════
using TechTalk.SpecFlow;

[Binding]
public class TransferenciaSteps
{
    private Conta _contaOrigem = null!;
    private Conta _contaDestino = null!;
    private Result _resultado = null!;

    [Given(@"que tenho uma conta com saldo de R\\$ (.*)")]
    public void DadoQueMinhaContaTemSaldo(decimal saldo)
    {
        _contaOrigem = new ContaBuilder()
            .ComSaldo(saldo).Build();
    }

    [Given(@"existe uma conta destino com saldo de R\\$ (.*)")]
    public void DadoQueExisteContaDestinoComSaldo(decimal saldo)
    {
        _contaDestino = new ContaBuilder()
            .ComCpf("418.236.780-90")
            .ComSaldo(saldo).Build();
    }

    [When(@"realizo uma transferência de R\\$ (.*)")]
    public void QuandoRealizoTransferencia(decimal valor)
    {
        _resultado = _contaOrigem.Transferir(
            Dinheiro.BRL(valor), _contaDestino);
    }

    [When(@"tento transferir R\\$ (.*)")]
    public void QuandoTentoTransferir(decimal valor)
    {
        _contaDestino ??= new ContaBuilder()
            .ComCpf("418.236.780-90").Build();
        _resultado = _contaOrigem.Transferir(
            Dinheiro.BRL(valor), _contaDestino);
    }

    [Then(@"minha conta deve ter saldo de R\\$ (.*)")]
    public void EntaoMinhaContaDeveTerSaldo(decimal esperado)
    {
        _contaOrigem.Saldo.Should()
            .Be(Dinheiro.BRL(esperado));
    }

    [Then(@"a conta destino deve ter saldo de R\\$ (.*)")]
    public void EntaoContaDestinoDeveTerSaldo(decimal esperado)
    {
        _contaDestino.Saldo.Should()
            .Be(Dinheiro.BRL(esperado));
    }

    [Then(@"a operação deve ser recusada")]
    public void EntaoOperacaoDeveSerRecusada()
    {
        _resultado.IsSuccess.Should().BeFalse();
    }

    [Then(@"a operação deve ser aprovada")]
    public void EntaoOperacaoDeveSerAprovada()
    {
        _resultado.IsSuccess.Should().BeTrue();
    }

    [Then(@"minha conta deve manter saldo de R\\$ (.*)")]
    public void EntaoContaDeveManterSaldo(decimal esperado)
    {
        _contaOrigem.Saldo.Should()
            .Be(Dinheiro.BRL(esperado));
    }
}`,checklist:["Instalar SpecFlow.xUnit e SpecFlow.Tools.MsBuild.Generation no projeto","Criar Transferencia.feature com os 3 cenários do exemplo","Implementar todas as Step Definitions com FluentAssertions","Adicionar cenário: transferência de conta bloqueada deve ser recusada","Verificar que os cenários aparecem como testes no Test Explorer"],quiz:[{question:"Qual a principal vantagem do Gherkin sobre testes escritos em C# puro?",options:["Gherkin compila mais rápido que C#","Gherkin é legível por analistas de negócio, QAs e POs — permite que não-desenvolvedores escrevam e revisem cenários de teste, criando documentação viva alinhada com o negócio","C# não suporta testes legíveis com nomes descritivos","Gherkin tem melhor cobertura de código"],answer:1,explanation:"O PO pode ler 'Given que tenho conta com R$ 1000' e validar se o cenário está certo. Não precisa ler C# para isso. Essa ponte é o valor real do BDD."},{question:"O que é 'living documentation' no contexto de BDD?",options:["Um arquivo README atualizado manualmente pelo time","Os arquivos .feature que descrevem o comportamento em Gherkin — são especificação executável e documentação viva. Se o teste passa, a documentação está atualizada por definição","Um dashboard de cobertura de testes gerado automaticamente","Comentários XML nos controllers que geram Swagger"],answer:1,explanation:"Documentação que desatualiza é inútil. Feature files que RODAM como testes nunca desatualizam — se o comportamento mudar, o teste falha e a feature é atualizada."},{question:"Quando BDD com SpecFlow NÃO é a melhor escolha?",options:["Nunca — BDD deve ser usado em todos os projetos","Quando o time é puramente técnico sem analistas de negócio ou QAs revisando cenários — o overhead do Gherkin não agrega valor sem colaboração entre papéis distintos","Quando o projeto é grande demais","Quando já existem testes de unidade com boa cobertura"],answer:1,explanation:"BDD sem a ponte entre técnico e negócio é apenas overhead burocrático. Se o time inteiro lê C# fluentemente, xUnit com bons nomes é mais direto."}]},{id:"m16t4",moduleId:"m16",title:"Pirâmide de Testes: Estratégia Corporativa",theory:`A Pirâmide de Testes de Mike Cohn: base larga de testes de unidade, meio de integração, pico de end-to-end. Cada camada tem propósito, custo e velocidade diferentes. Entender a pirâmide é entender ONDE investir o esforço de teste para máximo retorno.

UNIDADE (base — 70% dos testes):
Velocidade: < 1ms por teste. Roda centenas em segundos. Foco: lógica de negócio isolada — Value Objects, Entities, Domain Services. Custo de manutenção: baixo se testar COMPORTAMENTO, não implementação. Meta de cobertura: Domain 90%+, Application 80%+.

INTEGRAÇÃO (meio — 20% dos testes):
Velocidade: 100ms a 10s por teste (TestContainers). Foco: componentes integrados — Repository + DB, Controller + UseCase + DB. Custo de manutenção: médio. Meta: fluxos principais e constraints de banco.

E2E (topo — 10% dos testes):
Velocidade: 1s a 30s por teste (stack completa). Foco: fluxos CRÍTICOS de negócio — apenas o happy path dos casos de uso mais importantes. Custo de manutenção: ALTO — quebram com mudanças de UI, contrato ou infraestrutura. NÃO teste cada cenário de erro com E2E — cubra erros com integração ou unitários.

Anti-patterns clássicos:
- Pirâmide invertida (sorotório): muitos E2E, poucos unitários → suite lenta, cara, difícil de diagnosticar falhas.
- Sorvete: muitos E2E manuais no topo, nada automatizado no meio → não escala.
- Cone de sorvete: muitos testes manuais, pouca automação → insustentável.

Alternativa moderna — Troféu de Testes (Testing Library): base de testes estáticos (TypeScript, linters), meio largo de integração, topo fino de E2E. Popular no frontend, influenciando backend.

Meta de cobertura por camada para projeto corporativo:
- Domain: 90%+ branch coverage (sem dependências, teste trivial)
- Application: 80%+ branch coverage (com mocks)
- Infrastructure: 60%+ (testes de integração com DB)
- Controllers/API: happy paths E2E + casos de erro por integração

Pipeline CI/CD (preview Fase 7): dotnet test /p:Threshold=80 /p:ThresholdType=branch /p:ThresholdStat=total — se a cobertura cair abaixo de 80%, o build FALHA. Ninguém faz merge sem atingir o threshold.

A pirâmide é uma diretriz de investimento, não uma regra rígida. O objetivo é maximizar CONFIANÇA por minuto de teste. Unitários dão confiança barata. E2E dão confiança cara.`,code:`// ══════════════════════════════════════════════
// Estrutura completa do projeto de testes
// seguindo a Pirâmide de Testes
// ══════════════════════════════════════════════

// SistemaFinanceiro.sln
// │
// ├── src/
// │   ├── SistemaFinanceiro.Domain/
// │   ├── SistemaFinanceiro.Application/
// │   ├── SistemaFinanceiro.Infrastructure/
// │   └── SistemaFinanceiro.API/
// │
// └── tests/
//     ├── SistemaFinanceiro.Domain.Tests/       ← BASE (70%)
//     │   ├── ContaTests.cs         (15+ testes)
//     │   ├── DinheiroTests.cs      (10+ testes)
//     │   ├── CpfTests.cs           (8+ testes)
//     │   └── TransferenciaServiceTests.cs
//     │
//     ├── SistemaFinanceiro.Application.Tests/  ← MEIO (20%)
//     │   ├── AbrirContaUseCaseTests.cs
//     │   ├── RealizarTransferenciaUseCaseTests.cs
//     │   └── GerarExtratoUseCaseTests.cs
//     │
//     ├── SistemaFinanceiro.IntegrationTests/   ← MEIO-ALTO
//     │   ├── ContaRepositoryTests.cs
//     │   └── TransferenciaIntegrationTests.cs
//     │
//     ├── SistemaFinanceiro.E2ETests/           ← TOPO (10%)
//     │   └── FluxoTransferenciaE2ETests.cs
//     │
//     └── SistemaFinanceiro.BDD/                ← CROSS
//         └── Features/Transferencia.feature

// ══════════════════════════════════════════════
// Comando para rodar com threshold obrigatório
// ══════════════════════════════════════════════

// Rodar TODOS os testes com cobertura:
// dotnet test --collect:"XPlat Code Coverage"
//   /p:Threshold=80
//   /p:ThresholdType=branch
//   /p:ThresholdStat=total

// Gerar relatório HTML:
// dotnet tool install -g dotnet-reportgenerator-globaltool
// reportgenerator
//   -reports:"**/coverage.cobertura.xml"
//   -targetdir:"coveragereport"
//   -reporttypes:Html

// ══════════════════════════════════════════════
// Exemplo: rodando testes por camada
// ══════════════════════════════════════════════

// Apenas Domain (rápido, sem Docker):
// dotnet test SistemaFinanceiro.Domain.Tests
//   --logger "console;verbosity=normal"

// Apenas Application (rápido, com mocks):
// dotnet test SistemaFinanceiro.Application.Tests

// Integração (requer Docker):
// dotnet test SistemaFinanceiro.IntegrationTests

// E2E (requer Docker + stack completa):
// dotnet test SistemaFinanceiro.E2ETests

// TUDO junto com cobertura:
// dotnet test SistemaFinanceiro.sln
//   /p:CollectCoverage=true
//   /p:CoverletOutputFormat=cobertura
//   /p:Threshold=80`,checklist:["Auditar o projeto: qual a distribuição atual de testes por camada?","Calcular o ratio unitários/integração/E2E e comparar com a pirâmide ideal","Identificar os 3 fluxos críticos de negócio que DEVEM ter teste E2E","Configurar threshold de 80% de branch coverage no dotnet test","Criar script run-tests.sh com os comandos de teste separados por camada"],quiz:[{question:"Por que a pirâmide de testes tem a base larga de testes de unidade?",options:["Porque são mais fáceis de escrever que integração","Testes de unidade são mais rápidos (< 1ms), baratos de manter e precisos para isolar falhas. Uma pirâmide invertida (muitos E2E, poucos unitários) resulta em suite lenta, cara e difícil de diagnosticar","Unitários automaticamente geram maior cobertura","xUnit só executa testes de unidade eficientemente"],answer:1,explanation:"1000 testes de unidade rodam em 2 segundos. 1000 E2E rodam em 30 minutos. O feedback de unidade é instantâneo; E2E é slow — e quando falha, não aponta onde."},{question:"O que é a 'pirâmide invertida' e por que é problemática?",options:["Uma pirâmide com mais testes de integração que unitários","Muitos testes E2E e poucos unitários — a suite é lenta, os testes quebram por qualquer mudança de infra e é difícil isolar onde está o bug quando falha","Uma pirâmide com foco em testes de performance","Usar mais Moq que FluentAssertions nos testes"],answer:1,explanation:"Suite E2E heavy: 30 minutos para rodar, falha por timeout de banco, log diz 'assertion failed' sem indicar se o bug é no controller, use case ou query."},{question:"Qual tipo de cenário deve ter teste E2E (e não apenas unitário)?",options:["Todos os cenários de negócio para cobertura completa","Apenas os fluxos críticos (happy path dos casos de uso mais importantes) — E2E é caro demais para cobrir todos os cenários. Erros são melhor cobertos por integração ou unitários","Apenas cenários de erro e edge cases","Cenários que envolvem banco de dados"],answer:1,explanation:"E2E do happy path de transferência: cria contas, transfere, verifica saldos. Cenários de erro (saldo insuficiente, CPF inválido) são cobertos por unitários — mais rápido e preciso."}]},{id:"m16proj",moduleId:"m16",title:"🧪 Projeto: Suite de Testes do Sistema Financeiro",theory:`Este é o projeto integrador da Fase 4: construir a suite COMPLETA de testes do Sistema Financeiro da Fase 3, aplicando os 4 módulos de forma integrada. Não é um exercício isolado — é a prova de que você domina cada técnica e sabe quando usar cada uma.

ESTRUTURA DO PROJETO DE TESTES:

SistemaFinanceiro.Domain.Tests/ (pirâmide base — 70%)
  ContaTests.cs — 15+ testes: Abrir, Depositar, Sacar, Transferir, estados, limites
  DinheiroTests.cs — 10+ testes: criação, soma, subtração, comparação, moedas
  CpfTests.cs — 8+ testes com [Theory]: válido, inválido, zeros, sequencial, formatação
  TransferenciaServiceTests.cs — Domain Service puro, sem Mock

SistemaFinanceiro.Application.Tests/ (pirâmide meio — 20%)
  AbrirContaUseCaseTests.cs — 3 cenários: sucesso, CPF duplicado, validação
  RealizarTransferenciaUseCaseTests.cs — 4 cenários: sucesso, saldo insuficiente, conta inexistente, conta bloqueada
  GerarExtratoUseCaseTests.cs — 2 cenários: com transações, sem transações

SistemaFinanceiro.IntegrationTests/ (pirâmide meio-alto)
  ContaRepositoryTests.cs — TestContainers SQL Server, CRUD real, constraints FK
  TransferenciaIntegrationTests.cs — WebApplicationFactory + TestContainers, fluxo HTTP completo

SistemaFinanceiro.BDD/ (cross-camada)
  Features/Transferencia.feature — 3 cenários Gherkin com Step Definitions
  Features/AberturaConta.feature — 2 cenários de abertura de conta

META DE COBERTURA:
  Domain: 90%+ branch coverage (objetos puros, sem desculpa)
  Application: 80%+ branch coverage (com Moq)
  Total: 80%+ (threshold no dotnet test — build falha se cair abaixo)

RELATÓRIO FINAL:
  Gerar relatório HTML com reportgenerator. Documentar os pontos NÃO cobertos com justificativa:
  "Program.cs excluído — apenas configuração de DI"
  "Migrations excluídas — geradas automaticamente pelo EF Core"
  Decisão consciente é diferente de negligência.

GITFLOW DO PROJETO:
  feature/testes-domain → primeiro PR (testes mais simples)
  feature/testes-application → segundo PR (adiciona Moq)
  feature/testes-integracao → terceiro PR (adiciona Docker)
  feature/testes-bdd → quarto PR (adiciona SpecFlow)
  release/v2.0.0-com-testes → merge final no main`,code:`// ══════════════════════════════════════════════
// Script completo: run-tests.sh
// Executa toda a suite e gera relatório
// ══════════════════════════════════════════════

// #!/bin/bash
// set -e  # para na primeira falha
//
// echo "🧪 [1/4] Testes de Domínio..."
// dotnet test SistemaFinanceiro.Domain.Tests \\
//   /p:CollectCoverage=true \\
//   /p:CoverletOutputFormat=cobertura \\
//   /p:CoverletOutput=./coverage/domain.xml
//
// echo "🧪 [2/4] Testes de Aplicação..."
// dotnet test SistemaFinanceiro.Application.Tests \\
//   /p:CollectCoverage=true \\
//   /p:CoverletOutputFormat=cobertura \\
//   /p:CoverletOutput=./coverage/application.xml
//
// echo "🐳 [3/4] Testes de Integração (Docker)..."
// dotnet test SistemaFinanceiro.IntegrationTests
//
// echo "📋 [4/4] Testes BDD..."
// dotnet test SistemaFinanceiro.BDD
//
// echo "📊 Gerando relatório de cobertura..."
// reportgenerator \\
//   -reports:"./coverage/*.xml" \\
//   -targetdir:"./coveragereport" \\
//   -reporttypes:Html
//
// echo "✅ Relatório: ./coveragereport/index.html"
// echo "🎯 Verifique: Domain 90%+ | App 80%+ | Total 80%+"

// ══════════════════════════════════════════════
// Exemplo de teste por camada — resumo integrado
// ══════════════════════════════════════════════

// DOMAIN — puro, sem dependência
[Fact]
public void Depositar_ValorPositivo_AumentaSaldo()
{
    // Arrange
    var conta = new ContaBuilder().ComSaldo(500).Build();

    // Act
    conta.Depositar(Dinheiro.BRL(200));

    // Assert
    conta.Saldo.Should().Be(Dinheiro.BRL(700));
}

// APPLICATION — com Moq
[Fact]
public async Task Execute_TransferenciaValida_Sucesso()
{
    // Arrange
    var mockRepo = new Mock<IContaRepository>();
    mockRepo.Setup(r => r.GetByIdAsync(origemId))
        .ReturnsAsync(contaOrigem);
    mockRepo.Setup(r => r.GetByIdAsync(destinoId))
        .ReturnsAsync(contaDestino);
    var sut = new RealizarTransferenciaUseCase(
        mockRepo.Object, Mock.Of<INotificacaoService>());

    // Act
    var resultado = await sut.ExecuteAsync(command);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
    mockRepo.Verify(r => r.SaveChangesAsync(), Times.Once);
}

// INTEGRAÇÃO — WebApplicationFactory + TestContainers
[Fact]
public async Task POST_AbrirConta_Retorna201()
{
    // Arrange
    var request = new { Cpf = "529.982.247-25", SaldoInicial = 0 };

    // Act
    var response = await _client.PostAsJsonAsync(
        "/api/contas", request);

    // Assert
    response.StatusCode.Should().Be(HttpStatusCode.Created);
}`,checklist:["Criar os 4 projetos de teste com a estrutura descrita","Implementar os 15+ testes de Domain passando no dotnet test","Implementar os 9 testes de Application com Moq passando","Implementar 3 testes de Integração com TestContainers","Criar 3 cenários BDD em Gherkin com Step Definitions completas","Rodar o script run-tests.sh e verificar 80%+ de cobertura total","Fazer merge do release/v2.0.0-com-testes no main via GitFlow"],quiz:[{question:"Por que separar Domain.Tests de Application.Tests em projetos diferentes?",options:["É apenas organização — um projeto único seria igualmente eficiente","Projetos separados têm dependências separadas — Domain.Tests não precisa de Moq (domain é puro); Application.Tests precisa. Separar mantém cada projeto com dependências mínimas e propósito claro","xUnit não funciona em um único projeto grande","Para rodar testes em paralelo entre projetos"],answer:1,explanation:"Domain.Tests com zero referência a Moq PROVA que o domínio é puro. Se alguém adicionar Mock<> num teste de domínio, está errado — e a ausência do pacote impede."},{question:"Qual a ordem correta de implementar os testes no projeto final?",options:["E2E primeiro para garantir que os fluxos funcionam","Domain Tests primeiro (mais simples, sem dependências), depois Application (com Moq), depois Integration (com TestContainers) — seguindo a pirâmide de baixo para cima, validando cada camada incrementalmente","Qualquer ordem é igualmente eficiente","Integration Tests primeiro para garantir que o banco funciona"],answer:1,explanation:"Bottom-up: Domain passa? Application usa o Domain testado. Integration usa a Application testada. Cada camada confia na anterior. Top-down força debugging em múltiplas camadas."},{question:"Por que documentar os pontos NÃO cobertos do relatório de cobertura?",options:["Para justificar nota baixa de cobertura ao tech lead","Para mostrar decisão consciente — nem toda linha precisa ser testada. Excluir Program.cs e Migrations é intencional, não negligência. Documentar torna a decisão rastreável e revisável em code review","xUnit exige essa documentação para funcionar","Para o SonarCloud aceitar o relatório automaticamente"],answer:1,explanation:"80% com justificativa > 100% com testes inúteis. 'Program.cs excluído — DI config' mostra que você sabe o que vale e o que não vale testar."}]}]},Ap=[Cp,hp,Sp,bp],Tp={id:"m17",title:"JWT e Tokens",color:m.m17,week:"Semana 16",topics:[{id:"m17t1",moduleId:"m17",title:"Como JWT funciona: Header, Payload, Signature",theory:`O problema que JWT resolve: como provar identidade sem consultar o banco a cada request.

Sessões vs Tokens: por que sessões não escalam horizontalmente — sticky sessions, estado no servidor — e como JWT resolve isso com estado no cliente.

HEADER (algoritmo + tipo):
{ "alg": "HS256", "typ": "JWT" }
Base64Url encoded — não é criptografia, é encoding.
HS256 (HMAC-SHA256, chave simétrica) vs RS256 (RSA, chave assimétrica).
RS256 é superior em microsserviços: apenas o emissor tem a chave privada; qualquer serviço valida com a chave pública — pública por design.

PAYLOAD (claims):
Registradas: sub, iss, aud, exp, iat, jti.
Customizadas: role, email, contaId, tenantId.
NUNCA colocar: senha, dados bancários, PII sensível.
O payload é PÚBLICO — qualquer um com o token pode ler. JWT é assinado (autenticidade), não criptografado (confidencialidade).

SIGNATURE (prova de integridade):
HMACSHA256(base64url(header) + "." + base64url(payload), secretKey)
Prova que o token não foi adulterado — mas não oculta o conteúdo.
JWE (JSON Web Encryption) para quando o payload precisa ser cifrado.

Onde armazenar no cliente:
• localStorage → vulnerável a XSS
• httpOnly cookie → imune a XSS, vulnerável a CSRF
• Memory/state → seguro, perde no refresh da página
• Recomendação corporativa: httpOnly + Secure cookie para Refresh Token, memory para Access Token.`,code:`// Decodificando manualmente um JWT (apenas para entender a estrutura)
string jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
             ".eyJzdWIiOiJ1c3VhcmlvLTEyMyIsInJvbGUiOiJDb3JyZW50aXN0YSIsImV4cCI6MTcxMjAwMDAwMH0" +
             ".assinatura";

string[] partes = jwt.Split('.');
string headerJson  = Encoding.UTF8.GetString(Convert.FromBase64String(PadBase64(partes[0])));
string payloadJson = Encoding.UTF8.GetString(Convert.FromBase64String(PadBase64(partes[1])));
// Output — Header:  {"alg":"HS256","typ":"JWT"}
// Output — Payload: {"sub":"usuario-123","role":"Correntista","exp":1712000000}

// Claims corretas para o Sistema Financeiro
var claims = new[]
{
  new Claim(JwtRegisteredClaimNames.Sub,   usuario.Id.ToString()),
  new Claim(JwtRegisteredClaimNames.Email, usuario.Email),
  new Claim(JwtRegisteredClaimNames.Jti,   Guid.NewGuid().ToString()),
  new Claim(ClaimTypes.Role,               usuario.Role.ToString()),
  new Claim("contaId",                     usuario.ContaId.ToString()),
  // NUNCA: new Claim("senha", usuario.Senha) — payload é público!
};`,checklist:["Acessar jwt.io e decodificar o token do exemplo — ver header e payload","Tentar alterar o payload no jwt.io sem a chave — verificar que a assinatura quebra","Criar um console app que decodifica qualquer JWT e exibe cada parte","Identificar quais claims fazem sentido para o Sistema Financeiro","Responder: por que o token pode ser lido mas não forjado?"],quiz:[{question:"Por que o payload do JWT pode ser lido por qualquer pessoa com o token?",options:["Porque JWT usa criptografia fraca","O payload é Base64Url encoded — não criptografado. A assinatura garante integridade (não foi adulterado), mas não confidencialidade (não oculta o conteúdo). Por isso nunca colocar dados sensíveis no payload","Porque o algoritmo HS256 é fraco","O servidor permite leitura pública"],answer:1},{question:"Qual a principal vantagem do RS256 sobre HS256 em arquiteturas de microsserviços?",options:["HS256 é mais lento","Com RS256, apenas o serviço emissor tem a chave privada de assinatura. Qualquer microsserviço valida o token usando a chave pública sem precisar compartilhar segredos. Com HS256, todos os serviços precisariam conhecer a mesma chave simétrica","RS256 gera tokens menores","HS256 não suporta microsserviços"],answer:1},{question:"Por que armazenar o Access Token em httpOnly cookie é mais seguro que localStorage?",options:["Cookies são mais rápidos de ler","httpOnly cookies não são acessíveis via JavaScript, tornando-os imunes a ataques XSS que roubam tokens do localStorage. A desvantagem é a necessidade de proteção CSRF","Cookies persistem após fechar o browser","localStorage tem limite de tamanho"],answer:1}]},{id:"m17t2",moduleId:"m17",title:"Emitindo e validando JWT no ASP.NET Core",theory:`Pacotes: Microsoft.AspNetCore.Authentication.JwtBearer e System.IdentityModel.Tokens.Jwt.

Configuração em Program.cs:
AddAuthentication + AddJwtBearer → TokenValidationParameters.
app.UseAuthentication() ANTES de app.UseAuthorization() — a ordem é crítica.
Inverter a ordem: UseAuthorization roda sem saber quem é o usuário — todos os [Authorize] falham silenciosamente com 401.

TokenValidationParameters — cada campo importa:
• ValidateIssuerSigningKey: true — sempre. Nunca false em produção.
• ValidateIssuer + ValidateAudience: true — verifica origem e destinatário.
• ValidateLifetime: true — rejeita expirados.
• ClockSkew: TimeSpan.Zero — padrão é 5 min de tolerância. Em sistemas financeiros: zero. Tolerância é janela de ataque.
• ValidAlgorithms: fixar o algoritmo esperado — previne algorithm confusion.
• RequireExpirationTime: true — rejeita tokens sem campo exp.

JwtSecurityTokenHandler + SecurityTokenDescriptor: emissão.
AccessToken: 15–60 minutos. Nunca mais de 24 horas.
RefreshToken: 7–30 dias. Hasheado no banco.

Ler claims no controller:
User.FindFirstValue(JwtRegisteredClaimNames.Sub) → userId
User.IsInRole("Correntista") → verificar role
User.FindFirstValue("contaId") → claim customizada`,code:`// ⚠️ ANTI-PATTERN — NUNCA FAÇA ISSO:
private const string Secret = "minha-chave-hardcoded"; // segredo no código!

// ✅ CORRETO: buscar da configuração (User Secrets / variável de ambiente)
private string SecretKey => _config["Jwt:SecretKey"]
  ?? throw new InvalidOperationException("Jwt:SecretKey não configurado");

// TokenService — emissão
public string GerarAccessToken(ApplicationUser usuario, IList<string> roles)
{
  var key     = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
  var creds   = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
  var expires = DateTime.UtcNow.AddMinutes(
    _config.GetValue<int>("Jwt:AccessTokenExpirationMinutes", 60));

  var claims = new List<Claim>
  {
    new(JwtRegisteredClaimNames.Sub,   usuario.Id),
    new(JwtRegisteredClaimNames.Email, usuario.Email),
    new(JwtRegisteredClaimNames.Jti,   Guid.NewGuid().ToString()),
  };
  claims.AddRange(roles.Select(r => new Claim(ClaimTypes.Role, r)));
  if (usuario.ContaId.HasValue)
    claims.Add(new("contaId", usuario.ContaId.Value.ToString()));

  var token = new JwtSecurityToken(
    issuer:   _config["Jwt:Issuer"],
    audience: _config["Jwt:Audience"],
    claims:   claims,
    expires:  expires,
    signingCredentials: creds);

  return new JwtSecurityTokenHandler().WriteToken(token);
}

// Program.cs — configuração segura completa
builder.Services
  .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options =>
  {
    options.TokenValidationParameters = new TokenValidationParameters
    {
      ValidateIssuerSigningKey = true,
      IssuerSigningKey         = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]!)),
      ValidAlgorithms          = [SecurityAlgorithms.HmacSha256],
      ValidateIssuer           = true,
      ValidIssuer              = builder.Configuration["Jwt:Issuer"],
      ValidateAudience         = true,
      ValidAudience            = builder.Configuration["Jwt:Audience"],
      ValidateLifetime         = true,
      ClockSkew                = TimeSpan.Zero,
      RequireExpirationTime    = true,
    };
  });`,checklist:["Instalar Microsoft.AspNetCore.Authentication.JwtBearer","Configurar AddJwtBearer com todos os parâmetros de segurança","Criar o TokenService que gera o AccessToken","Usar dotnet user-secrets para armazenar Jwt:SecretKey localmente","Testar no Swagger: gerar token no /auth/login e usar no cadeado"],quiz:[{question:"Por que a ordem app.UseAuthentication() antes de app.UseAuthorization() é crítica?",options:["É apenas convenção de organização","Authentication identifica quem é o usuário; Authorization decide o que ele pode fazer. Se invertida, o middleware de autorização roda sem contexto de identidade — todos os [Authorize] falham com 401 sem nenhuma mensagem de erro clara","A ordem é irrelevante no .NET 8","Authorization não depende de Authentication"],answer:1},{question:"Por que configurar ClockSkew como TimeSpan.Zero em um sistema financeiro?",options:["Zero é o padrão do ASP.NET Core","O padrão de 5 minutos aceita tokens expirados há até 5 minutos — em transações financeiras isso é uma janela de ataque onde um token roubado ainda funciona. Zero força rejeição imediata","ClockSkew afeta apenas a performance","TimeSpan.Zero desabilita a validação"],answer:1},{question:"Para que serve RequireExpirationTime = true?",options:["Para melhorar performance","Rejeita tokens que não contêm o campo exp no payload — sem exp, o token nunca expira e qualquer token vazado vira uma backdoor permanente","Exige que o token tenha sido emitido há menos de X tempo","É equivalente a ValidateLifetime"],answer:1}]},{id:"m17t3",moduleId:"m17",title:"Refresh Token: rotação, revogação e armazenamento seguro",theory:`Por que o Access Token tem vida curta: se vazado, o dano é limitado pelo tempo.
O problema da UX: logar a cada 60 minutos é inaceitável.
A solução: Refresh Token — longa duração, troca por novo Access Token.

FLUXO COMPLETO:
1. Login → { accessToken (60min), refreshToken (30 dias) }
2. Request: cliente envia Access Token no header Authorization: Bearer
3. 401 Unauthorized → Access Token expirou
4. POST /auth/refresh com o Refresh Token → novo par de tokens
5. Cliente usa o novo Access Token

ROTAÇÃO OBRIGATÓRIA:
Cada uso do Refresh Token invalida o token usado e gera um novo.
Se o token original aparecer novamente após rotação → comprometimento detectado.
Resposta: revogar TODA a família de tokens do usuário.

ARMAZENAMENTO SEGURO:
Anti-pattern: token em texto puro no banco → banco vazado = tokens válidos.
Correto: armazenar o HASH SHA256 do token.
Campos: UserId, TokenHash, ExpiresAt, IsRevoked, CreatedAt, DeviceInfo, ReplacedByTokenId.

QUANDO REVOGAR TUDO:
Troca de senha, suspeita de comprometimento (replay detectado), logout de "todos os dispositivos" solicitado pelo usuário.`,code:`// Entity RefreshToken com hash e rotação
public class RefreshToken
{
  public Guid    Id                { get; private set; } = Guid.NewGuid();
  public Guid    UserId            { get; private set; }
  public string  TokenHash         { get; private set; } = null!;
  public string  DeviceInfo        { get; private set; } = null!;
  public DateTime ExpiresAt        { get; private set; }
  public DateTime CreatedAt        { get; private set; } = DateTime.UtcNow;
  public bool    IsRevoked         { get; private set; }
  public Guid?   ReplacedByTokenId { get; private set; }

  public static (RefreshToken entity, string rawToken) Criar(Guid userId, string deviceInfo)
  {
    var rawToken  = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
    var tokenHash = ComputeHash(rawToken);
    var entity    = new RefreshToken
    {
      UserId     = userId,
      TokenHash  = tokenHash,
      DeviceInfo = deviceInfo,
      ExpiresAt  = DateTime.UtcNow.AddDays(30),
    };
    return (entity, rawToken); // rawToken vai para o cliente; entity para o banco
  }

  public void Revogar(Guid? replacedById = null)
  {
    IsRevoked         = true;
    ReplacedByTokenId = replacedById;
  }

  public static string ComputeHash(string token) =>
    Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(token)));
}

// Endpoint de refresh com rotação e detecção de replay
[AllowAnonymous]
[HttpPost("refresh")]
public async Task<IActionResult> Refresh([FromBody] RefreshRequest req)
{
  var tokenHash   = RefreshToken.ComputeHash(req.RefreshToken);
  var storedToken = await _rtRepo.GetByHashAsync(tokenHash);

  if (storedToken is null || storedToken.ExpiresAt < DateTime.UtcNow)
    return Unauthorized("Refresh token inválido ou expirado");

  if (storedToken.IsRevoked)
  {
    // Token revogado e tentativa de reutilização → possível comprometimento
    await _rtRepo.RevogarTodosDoUsuarioAsync(storedToken.UserId);
    return Unauthorized("Token comprometido detectado — faça login novamente");
  }

  var usuario               = await _userManager.FindByIdAsync(storedToken.UserId.ToString());
  var roles                 = await _userManager.GetRolesAsync(usuario!);
  var (novoEntity, novoRaw) = RefreshToken.Criar(usuario!.Id.ToGuid(), req.DeviceInfo ?? "unknown");

  storedToken.Revogar(novoEntity.Id);
  await _rtRepo.AddAsync(novoEntity);
  await _rtRepo.SaveChangesAsync();

  return Ok(new
  {
    AccessToken  = _tokenService.GerarAccessToken(usuario, roles),
    RefreshToken = novoRaw,
  });
}`,checklist:["Criar a tabela RefreshTokens com migration do EF Core","Implementar RefreshToken.Criar() com RandomNumberGenerator (nunca Guid/Random)","Implementar o endpoint POST /auth/refresh com rotação e detecção de replay","Testar: usar o mesmo refresh token duas vezes — o segundo deve retornar 401","Implementar POST /auth/logout que revoga o refresh token atual"],quiz:[{question:"Por que armazenar o hash SHA256 do Refresh Token em vez do token em si?",options:["SHA256 economiza espaço","Se o banco vazar, o atacante tem apenas hashes — sem o token original não consegue se autenticar. É o mesmo princípio do hashing de senhas: comprometer o banco não compromete os tokens","O hash é mais fácil de comparar","JWT exige tokens hasheados"],answer:1},{question:"O que é 'rotação de Refresh Token' e por que detectar replay é importante?",options:["Trocar o algoritmo de hash periodicamente","Cada uso invalida o token antigo e gera um novo. Se o token original aparecer de novo após rotação, alguém o roubou antes da rotação e tentou usar — todos os tokens do usuário devem ser revogados imediatamente como resposta","Renovar o Access Token antes de expirar","Trocar a chave JWT periodicamente"],answer:1},{question:"Por que usar RandomNumberGenerator.GetBytes() em vez de Guid.NewGuid() para gerar Refresh Token?",options:["Guid é mais legível","RandomNumberGenerator é um CSPRNG (gerador criptograficamente seguro) com 512 bits de entropia. Guid tem apenas 122 bits e parte dos bits são previsíveis. Tokens de segurança precisam de máxima imprevisibilidade","Guid não pode ser convertido para string","RandomNumberGenerator é mais rápido"],answer:1}]},{id:"m17t4",moduleId:"m17",title:"Armadilhas de JWT: alg:none, expiração, leakage",theory:`As vulnerabilidades mais comuns encontradas em auditorias de sistemas financeiros. Cada uma com o ataque e a defesa em código .NET.

ATAQUE 1 — Algorithm None:
Trocar header de {"alg":"HS256"} para {"alg":"none"} e remover a assinatura.
Bibliotecas antigas aceitavam tokens sem assinatura se alg:none.
Defesa: ValidAlgorithms = [SecurityAlgorithms.HmacSha256] — nunca aceitar "none".

ATAQUE 2 — Algorithm Confusion (RS256 → HS256):
Servidor usa RS256. Atacante pega a chave pública (pública por design), usa como segredo HMAC do HS256 e gera tokens "válidos".
Defesa: fixar explicitamente o algoritmo. Nunca aceitar mais de um.

ATAQUE 3 — Token sem expiração:
Tokens sem exp são válidos para sempre — backdoor permanente.
Defesa: ValidateLifetime = true + RequireExpirationTime = true.

ATAQUE 4 — Secret previsível ou fraca:
"secret", "password", "jwt-secret" — crackeáveis por dicionário em segundos.
Com a chave, qualquer pessoa gera tokens admin válidos.
Defesa: 256+ bits gerados por CSPRNG, armazenados em Azure Key Vault / Secrets Manager.

ATAQUE 5 — Dados sensíveis no payload:
Payload é base64 — qualquer um com o token lê.
Encontrado em auditorias: cpf, saldo, senha em texto puro no payload.
Defesa: apenas identificadores no payload (userId, role), nunca dados de negócio.

ATAQUE 6 — Token em URL / query string:
Query string aparece em access logs, browser history, headers Referer.
Defesa: NUNCA aceitar token em query string. Apenas header Authorization: Bearer.`,code:`// ❌ CONFIGURAÇÃO INSEGURA que aceita todos os ataques acima:
options.TokenValidationParameters = new TokenValidationParameters
{
  ValidateIssuerSigningKey = false, // aceita token sem assinatura (alg:none!)
  ValidateLifetime         = false, // aceita tokens expirados
  // sem ValidAlgorithms — aceita qualquer algoritmo
};

// ✅ CONFIGURAÇÃO SEGURA que fecha todos os vetores:
options.TokenValidationParameters = new TokenValidationParameters
{
  ValidateIssuerSigningKey = true,
  IssuerSigningKey         = new SymmetricSecurityKey(keyBytes),
  ValidAlgorithms          = [SecurityAlgorithms.HmacSha256], // fixar algoritmo
  ValidateIssuer           = true,
  ValidIssuer              = config["Jwt:Issuer"],
  ValidateAudience         = true,
  ValidAudience            = config["Jwt:Audience"],
  ValidateLifetime         = true,
  ClockSkew                = TimeSpan.Zero,
  RequireExpirationTime    = true,
};

// Gerando secret segura (32 bytes = 256 bits)
var bytes = new byte[32];
RandomNumberGenerator.Fill(bytes);
string secret = Convert.ToBase64String(bytes);
// Exemplo: "xK9mP2vQ8nL3jR7wT1yU5bH6cF4dE0aG+iZ2nS="`,checklist:["Verificar: ValidateIssuerSigningKey, ValidateLifetime e RequireExpirationTime são true?","Adicionar ValidAlgorithms explicitamente à configuração JWT","Tentar gerar um JWT com alg:none no jwt.io e verificar que a API rejeita (401)","Auditar o payload dos tokens: há algum dado sensível indevido?","Verificar que Jwt:SecretKey tem 32+ chars e foi gerada por CSPRNG"],quiz:[{question:"O que é o ataque 'algorithm confusion' em JWT?",options:["Trocar HS256 por RS256 na configuração do servidor","O atacante modifica o header do token para trocar o algoritmo (ex: RS256 → HS256) e usa a chave pública do servidor como segredo HMAC — bibliotecas vulneráveis aceitam o token forjado como válido","Usar SHA512 em vez de SHA256","Alterar o campo exp do token"],answer:1},{question:"Por que nunca aceitar JWT passado via query string (?token=...)?",options:["Query strings têm limite de tamanho para JWT","Query strings aparecem em access logs do servidor, browser history, cabeçalhos Referer e URLs compartilhadas — expondo o token a sistemas que não deveriam tê-lo","JwtBearer não suporta query string por padrão","Query strings são bloqueadas por CORS"],answer:1},{question:"Um JWT sem o campo exp no payload: o que RequireExpirationTime = true faz?",options:["Aceita e usa a data de emissão como validade padrão","Rejeita o token com erro de validação — token sem exp nunca expira e representa risco permanente. RequireExpirationTime = true torna exp obrigatório","Usa ClockSkew como expiração padrão","É equivalente a ValidateLifetime"],answer:1}]}]},yp={id:"m18",title:"ASP.NET Identity",color:m.m18,week:"Semana 16-17",topics:[{id:"m18t1",moduleId:"m18",title:"Identity: UserManager, RoleManager e configuração",theory:`ASP.NET Identity: sistema completo de gerenciamento de usuários integrado ao ASP.NET Core — hashing de senha, lockout, validação de e-mail, roles, claims.
Instalação: dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore

IdentityUser: classe base (Id, UserName, Email, PasswordHash, LockoutEnd...).
Customizar: ApplicationUser : IdentityUser com campos adicionais (NomeCompleto, ContaId).
IdentityRole: roles (Admin, Correntista, Gerente).

UserManager<TUser>: operações sobre usuários —
  CreateAsync, FindByEmailAsync, CheckPasswordAsync, AddToRoleAsync,
  GetRolesAsync, AccessFailedAsync, LockoutEnabledAsync.
RoleManager<TRole>: gerenciar roles — CreateAsync, RoleExistsAsync.
SignInManager<TUser>: fluxo de login — PasswordSignInAsync (retorna
  SignInResult: Succeeded / LockedOut / NotAllowed / TwoFactorRequired).

IdentityOptions relevantes:
• Password: RequiredLength (8), RequireDigit, RequireNonAlphanumeric, RequireUppercase
• Lockout: MaxFailedAccessAttempts (5), DefaultLockoutTimeSpan (15min)
• User: RequireUniqueEmail (true)
• SignIn: RequireConfirmedEmail (false em dev, true em produção)`,code:`// ApplicationUser customizado para o Sistema Financeiro
public class ApplicationUser : IdentityUser
{
  public string   NomeCompleto { get; set; } = null!;
  public Guid?    ContaId      { get; set; }   // vínculo com Aggregate Conta (Fase 3)
  public DateTime CreatedAt    { get; set; } = DateTime.UtcNow;
  public bool     IsActive     { get; set; } = true;
}

// Program.cs — configuração completa do Identity
builder.Services
  .AddIdentity<ApplicationUser, IdentityRole>(options =>
  {
    options.Password.RequiredLength         = 8;
    options.Password.RequireDigit           = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase       = true;
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.DefaultLockoutTimeSpan  = TimeSpan.FromMinutes(15);
    options.Lockout.AllowedForNewUsers      = true;
    options.User.RequireUniqueEmail         = true;
    options.SignIn.RequireConfirmedEmail     = false; // dev: false, produção: true
  })
  .AddEntityFrameworkStores<FinanceiroDbContext>()
  .AddDefaultTokenProviders();

// Seed de roles no startup
async Task SeedRolesAsync(IServiceProvider services)
{
  var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
  foreach (var role in new[] { "Admin", "Gerente", "Correntista" })
    if (!await roleManager.RoleExistsAsync(role))
      await roleManager.CreateAsync(new IdentityRole(role));
}`,checklist:["Instalar Microsoft.AspNetCore.Identity.EntityFrameworkCore","Criar ApplicationUser com ContaId e NomeCompleto","Configurar Identity com políticas de senha e lockout","Criar migration para as tabelas Identity (AspNetUsers, AspNetRoles, etc.)","Implementar seed de roles no startup"],quiz:[{question:"Por que usar UserManager.CheckPasswordAsync() em vez de comparar hashes manualmente?",options:["UserManager é apenas conveniência de código","CheckPasswordAsync usa o IPasswordHasher registrado (BCrypt ou PBKDF2) e protege contra timing attacks com comparação em tempo constante — implementação manual é vulnerável a vazamento de tempo","CheckPasswordAsync é mais rápido","Comparação manual não compila com Identity"],answer:1},{question:"O que ocorre quando MaxFailedAccessAttempts é atingido?",options:["O usuário é permanentemente deletado","A conta é bloqueada por DefaultLockoutTimeSpan — SignInManager.PasswordSignInAsync retorna SignInResult.LockedOut. Isso limita brute-force sem impactar usuários legítimos permanentemente","A senha é resetada automaticamente","Um e-mail de aviso é enviado"],answer:1},{question:"Por que RequireConfirmedEmail = true é importante em produção financeira?",options:["Para melhorar o SEO","Garante que o e-mail existe e pertence ao usuário antes de criar acesso ao sistema — previne cadastros com e-mails falsos, contas para spam e ataques com identidades fictícias","É exigência da LGPD","Melhora a performance do Identity"],answer:1}]},{id:"m18t2",moduleId:"m18",title:"Senhas: BCrypt, hashing, salting e políticas",theory:`O ataque que este tópico previne: vazamento do banco de dados.
Com senhas em texto puro → todas as contas comprometidas.
Com BCrypt → as senhas levam anos para quebrar.

ANTI-PATTERNS encontrados em vazamentos reais:
• Texto puro: "senha123" armazenado diretamente — catastrófico
• MD5/SHA1/SHA256: rápidos por design — GPUs modernas: 100 bilhões hash/s
• Hash sem salt: vulnerável a rainbow tables (tabela pré-computada)
• Salt previsível: email+senha como salt não protege contra ataques direcionados

BCRYPT — por que é o padrão:
• Slow by design: work factor ajustável (2^n iterações)
• Salt automático: incluído no resultado do hash ($2a$12$<salt><hash>)
• Resistente a GPU e ASICs: design paralelo-hostil
• Work factor 10 (padrão) ≈ 100ms. Work factor 12 ≈ 400ms
• Para sistemas financeiros: work factor 12 mínimo

Identity usa PBKDF2 por padrão — adequado, mas BCrypt é mais testado.
Como trocar: implementar IPasswordHasher<ApplicationUser>.`,code:`// ❌ ANTI-PATTERNS — O QUE NUNCA FAZER:
usuario.Senha = request.Senha;  // texto puro — catastrófico
usuario.SenhaHash = MD5.HashData(Encoding.UTF8.GetBytes(request.Senha))
  .Select(b => b.ToString("x2")).Aggregate(string.Concat); // MD5 sem salt

// ✅ BCRYPT CORRETAMENTE:
// Hash no registro
string hash = BCrypt.Net.BCrypt.HashPassword(request.Senha, workFactor: 12);
// Exemplo: "$2a$12$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"

// Verificação no login — BCrypt extrai o salt do hash automaticamente
bool senhaCorreta = BCrypt.Net.BCrypt.Verify(request.Senha, usuario.SenhaHash);

// Customizando IPasswordHasher do Identity para BCrypt
public class BcryptPasswordHasher : IPasswordHasher<ApplicationUser>
{
  public string HashPassword(ApplicationUser user, string password)
    => BCrypt.Net.BCrypt.HashPassword(password, workFactor: 12);

  public PasswordVerificationResult VerifyHashedPassword(
    ApplicationUser user, string hashedPassword, string providedPassword)
  {
    bool valid = BCrypt.Net.BCrypt.Verify(providedPassword, hashedPassword);
    return valid ? PasswordVerificationResult.Success : PasswordVerificationResult.Failed;
  }
}
// Registrar: services.AddScoped<IPasswordHasher<ApplicationUser>, BcryptPasswordHasher>();`,checklist:["Instalar BCrypt.Net-Next: dotnet add package BCrypt.Net-Next","Implementar BcryptPasswordHasher e registrar no DI",'Verificar no banco após registro: SenhaHash começa com "$2a$12$"?',"Criar um teste comparando velocidade de verificação BCrypt vs SHA256","Implementar rota de troca de senha que invalida todos os Refresh Tokens"],quiz:[{question:"Por que MD5 e SHA256 não são adequados para hashing de senhas?",options:["São algoritmos mais antigos e inseguros","São projetados para throughput (rápidos) — não para segurança de senha. GPUs modernas testam bilhões de hashes por segundo, tornando força bruta viável. BCrypt é slow by design, tornando ataques impraticáveis","Geram hashes de tamanho inadequado","MD5 foi depreciado no .NET 8"],answer:1},{question:"O que o work factor do BCrypt controla?",options:["O tamanho do hash gerado","O número de iterações (2^n) — work factor 12 significa 4096 iterações. Aumentar em 1 dobra o tempo de processamento. Deve ser ajustado conforme o hardware evolui (a cada ~2 anos)","O comprimento do salt","A compatibilidade com outros sistemas"],answer:1},{question:"Por que BCrypt não requer armazenar o salt separadamente?",options:["BCrypt não usa salt",'O salt é incorporado no hash resultado — o formato "$2a$12$<salt><hash>" contém tudo. Ao verificar, BCrypt extrai o salt automaticamente do hash armazenado',"O Identity gerencia o salt em tabela separada","O salt é derivado do userId"],answer:1}]},{id:"m18t3",moduleId:"m18",title:"Registro, login e confirmação de e-mail",theory:`FLUXO DE REGISTRO (sistema financeiro):
1. FluentValidation valida o request
2. Verificar e-mail não cadastrado (FindByEmailAsync)
3. CreateAsync com a senha (Identity faz o hash)
4. AddToRoleAsync(user, "Correntista")
5. Criar Conta no domínio (Fase 3) e vincular ContaId
6. GenerateEmailConfirmationTokenAsync → enviar link por e-mail
7. Retornar 201 Created com { userId } — SEM token ainda

FLUXO DE LOGIN:
1. FindByEmailAsync
2. Verificar EmailConfirmed (se RequireConfirmedEmail = true)
3. CheckPasswordSignInAsync com lockoutOnFailure: true
4. Verificar SignInResult: Succeeded / LockedOut / NotAllowed
5. Gerar AccessToken + RefreshToken
6. Salvar hash do RefreshToken no banco
7. Retornar 200 com { accessToken, refreshToken, expiresIn }

REGRA DE OURO — mensagem genérica:
"E-mail ou senha inválidos" em vez de "E-mail não encontrado" ou "Senha incorreta".
Evita enumeração de usuários — atacante não confirma se e-mail existe.

LOGOUT:
Revogar o RefreshToken atual pelo hash enviado no body.
Retornar 204 No Content.`,code:`[AllowAnonymous]
[HttpPost("register")]
public async Task<IActionResult> Register([FromBody] RegisterRequest req)
{
  var user = new ApplicationUser
  {
    UserName     = req.Email,
    Email        = req.Email,
    NomeCompleto = req.NomeCompleto,
  };

  var result = await _userManager.CreateAsync(user, req.Senha);
  if (!result.Succeeded)
    return BadRequest(result.Errors.Select(e => e.Description));

  await _userManager.AddToRoleAsync(user, "Correntista");

  // Criar Conta no domínio (Fase 3)
  var conta = Conta.Abrir(new Cpf(req.Cpf), Dinheiro.BRL(0));
  await _contaRepo.AddAsync(conta);
  user.ContaId = conta.Id.Value;
  await _userManager.UpdateAsync(user);
  await _contaRepo.SaveChangesAsync();

  // Confirmação de e-mail
  var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
  var link  = Url.Action("ConfirmEmail", "Auth",
    new { userId = user.Id, token }, Request.Scheme);
  await _emailService.EnviarConfirmacaoAsync(user.Email!, link!);

  return CreatedAtAction(nameof(GetMe), new { id = user.Id }, new { user.Id });
}

[AllowAnonymous]
[HttpPost("login")]
public async Task<IActionResult> Login([FromBody] LoginRequest req)
{
  var user = await _userManager.FindByEmailAsync(req.Email);

  // Mensagem genérica — nunca revelar se o e-mail existe
  if (user is null || !user.IsActive)
    return Unauthorized("E-mail ou senha inválidos");

  var signIn = await _signInManager.CheckPasswordSignInAsync(
    user, req.Senha, lockoutOnFailure: true);

  if (signIn.IsLockedOut)
    return StatusCode(429, "Conta bloqueada. Tente em 15 minutos.");

  if (!signIn.Succeeded)
    return Unauthorized("E-mail ou senha inválidos");

  var roles             = await _userManager.GetRolesAsync(user);
  var (rtEntity, rtRaw) = RefreshToken.Criar(Guid.Parse(user.Id), req.DeviceInfo ?? "unknown");
  await _rtRepo.AddAsync(rtEntity);
  await _rtRepo.SaveChangesAsync();

  return Ok(new
  {
    AccessToken  = _tokenService.GerarAccessToken(user, roles),
    RefreshToken = rtRaw,
    ExpiresIn    = 3600,
    TokenType    = "Bearer"
  });
}`,checklist:["Implementar POST /auth/register com criação de ApplicationUser + Conta","Implementar GET /auth/confirm-email","Implementar POST /auth/login com lockout e mensagem genérica de erro","Testar: 5 tentativas com senha errada → conta bloqueada (429)","Verificar: 'E-mail não encontrado' nunca aparece na resposta"],quiz:[{question:"Por que retornar 'E-mail ou senha inválidos' em vez de mensagens específicas?",options:["Para simplificar o código","Mensagens específicas permitem enumeração de usuários — o atacante confirma quais e-mails estão cadastrados. A mensagem genérica não vaza informação sobre a existência do usuário","É exigência da LGPD","Mensagens específicas consomem mais CPU"],answer:1},{question:"Por que POST /auth/register retorna 201 sem token de acesso?",options:["Seria mais prático retornar o token","O registro deve ser confirmado por e-mail antes de conceder acesso (se RequireConfirmedEmail = true) — retornar token antes da confirmação permitiria uso de e-mails falsos","Identity não permite gerar token no register","201 é o código para POST"],answer:1},{question:"Por que usar CheckPasswordSignInAsync com lockoutOnFailure: true?",options:["É a única forma de verificar senha","Incrementa automaticamente o contador de tentativas e bloqueia após MaxFailedAccessAttempts — o Identity gerencia o lockout sem código adicional","lockoutOnFailure: false é o padrão e é mais seguro","Apenas SignInManager pode verificar senhas"],answer:1}]},{id:"m18t4",moduleId:"m18",title:"Claims, Roles e perfis de acesso",theory:`Autenticação = quem é você (JWT válido).
Autorização = o que você pode fazer (roles e claims).

ROLES vs CLAIMS:
Roles: categorias (Admin, Gerente, Correntista). Simples. [Authorize(Roles="Admin")].
Claims: pares chave-valor com contexto: "contaId", "departamento", "nivelAprovacao".
Roles para perfis. Claims para contexto específico de negócio.

PERFIS DO SISTEMA FINANCEIRO:
• Correntista: apenas a própria conta (verificar contaId no token vs url)
• Gerente: contas da agência, aprova transferências acima de R$ 10.000
• Admin: acesso total, gerencia usuários

Claims no token vs banco:
Estáticas (role, email) → no token. Dinâmicas (saldo) → no banco (token desatualiza).

Customizar geração de claims com IUserClaimsPrincipalFactory<ApplicationUser>.`,code:`// Claims no JWT — TokenService
var claims = new List<Claim>
{
  new(JwtRegisteredClaimNames.Sub,   usuario.Id),
  new(JwtRegisteredClaimNames.Email, usuario.Email!),
  new(JwtRegisteredClaimNames.Jti,   Guid.NewGuid().ToString()),
};
claims.AddRange(roles.Select(r => new Claim(ClaimTypes.Role, r)));
if (usuario.ContaId.HasValue)
  claims.Add(new("contaId", usuario.ContaId.Value.ToString()));

// Controller usando claims para controle de acesso por recurso
[Authorize]
[HttpGet("contas/{contaId}/extrato")]
public async Task<IActionResult> GetExtrato(Guid contaId)
{
  var contaIdDoToken = User.FindFirstValue("contaId");
  var isAdmin        = User.IsInRole("Admin");
  var isGerente      = User.IsInRole("Gerente");

  // Correntista só acessa a própria conta
  if (!isAdmin && !isGerente && contaIdDoToken != contaId.ToString())
    return Forbid(); // 403 — autenticado mas não autorizado para este recurso

  var extrato = await _extratoService.GetByContaIdAsync(contaId);
  return Ok(extrato);
}

// Factory customizada — ContaId como claim automática
public class AppUserClaimsPrincipalFactory
  : UserClaimsPrincipalFactory<ApplicationUser, IdentityRole>
{
  protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user)
  {
    var identity = await base.GenerateClaimsAsync(user);
    if (user.ContaId.HasValue)
      identity.AddClaim(new Claim("contaId", user.ContaId.Value.ToString()));
    identity.AddClaim(new Claim("nomeCompleto", user.NomeCompleto));
    return identity;
  }
}`,checklist:["Criar os 3 roles via seed no startup","Adicionar ContaId como claim customizada no TokenService","Verificar controle de acesso: Correntista tentando conta alheia → 403",'Criar endpoint [Authorize(Roles = "Admin")] para gerenciar usuários',"Registrar AppUserClaimsPrincipalFactory no DI"],quiz:[{question:"Quando usar roles e quando usar claims para controle de acesso?",options:["Sempre usar claims — são mais modernas","Roles para categorias de usuário (perfis do sistema). Claims para contexto de negócio específico — qual conta acessa, qual departamento, qual limite aprovável. Claims capturam granularidade que roles não conseguem","Roles são legado — substituídas por claims","São equivalentes"],answer:1},{question:"Por que não colocar o saldo da conta como claim no JWT?",options:["Claims têm limite de tamanho","O JWT tem vida de 60 minutos — o saldo ficaria desatualizado rapidamente. Claims devem ser dados estáticos. Dados dinâmicos precisam ser buscados no banco por request","Claims numéricas não são suportadas","Por causa do LGPD"],answer:1},{question:"Qual HTTP status code correto para usuário autenticado sem permissão para o recurso?",options:["401 Unauthorized","403 Forbidden — autenticado com sucesso mas sem permissão para aquele recurso específico. 401 indica falha de autenticação; 403 indica autenticação OK mas autorização negada","404 Not Found — para esconder a existência do recurso","422 Unprocessable Entity"],answer:1}]}]},Ip={id:"m19",title:"Autorização e Políticas",color:m.m19,week:"Semana 17",topics:[{id:"m19t1",moduleId:"m19",title:"[Authorize]: roles, claims e políticas",theory:`Níveis de autorização no ASP.NET Core:
1. [Authorize] — qualquer autenticado
2. [Authorize(Roles = "Admin")] — role específica
3. [Authorize(Roles = "Admin,Gerente")] — qualquer role (OR)
4. Múltiplos [Authorize] empilhados — TODAS as condições (AND)
5. [Authorize(Policy = "NomeDaPolicy")] — lógica arbitrária

[AllowAnonymous]: substitui qualquer [Authorize] — acesso público garantido.

CONVENÇÃO MAIS SEGURA — SetFallbackPolicy:
Todos os endpoints protegidos por padrão no Program.cs.
Endpoints públicos recebem [AllowAnonymous] explicitamente.
Isso evita esquecer [Authorize] em endpoints sensíveis — o erro mais comum.

IAuthorizationService: verificações programáticas dentro de serviços.`,code:`// Todos os níveis em prática
[Authorize]
[HttpGet("me")]
public IActionResult GetMe() => Ok(User.Identity!.Name);

[Authorize(Roles = "Admin")]
[HttpDelete("usuarios/{id}")]
public async Task<IActionResult> DeleteUsuario(string id) { ... }

[Authorize(Roles = "Admin,Gerente")]
[HttpGet("relatorios/consolidado")]
public IActionResult GetRelatorio() { ... }

// AND: Admin E EmailConfirmado
[Authorize(Roles = "Admin")]
[Authorize(Policy = "EmailConfirmado")]
[HttpPost("configuracoes")]
public IActionResult UpdateConfig() { ... }

// Fallback global no Program.cs — todos protegidos por padrão
builder.Services.AddAuthorizationBuilder()
  .SetFallbackPolicy(new AuthorizationPolicyBuilder()
    .RequireAuthenticatedUser()
    .Build());

// Endpoints públicos exigem [AllowAnonymous] explícito
[AllowAnonymous]
[HttpPost("auth/login")]
public async Task<IActionResult> Login() { ... }`,checklist:["Adicionar SetFallbackPolicy no Program.cs","Verificar que todos os endpoints de auth usam [AllowAnonymous]","Testar: endpoint sem [AllowAnonymous] retorna 401 sem token?",'Criar endpoint [Authorize(Roles = "Admin,Gerente")] para relatórios',"Testar que Correntista recebe 403 em endpoint de Gerente"],quiz:[{question:"O que SetFallbackPolicy com RequireAuthenticatedUser faz?",options:["Define a política padrão apenas para controllers com [ApiController]","Torna todos os endpoints protegidos por padrão — qualquer endpoint sem [AllowAnonymous] exige autenticação. Previne esquecer [Authorize] em endpoints sensíveis","Desabilita a autenticação anônima","Afeta apenas a página inicial"],answer:1},{question:"Como fazer um endpoint exigir DUAS condições simultaneamente (AND)?",options:["Separar com vírgula em um único [Authorize]",'Aplicar múltiplos atributos [Authorize] empilhados — cada um cria uma camada independente que TODAS devem ser satisfeitas. [Authorize(Roles="A,B")] é OR; dois [Authorize] empilhados é AND','Usar [Authorize(Policy = "AeB")] com lógica OR',"Não é possível nativo no ASP.NET Core"],answer:1},{question:"Qual a diferença entre 401 e 403 em resposta de autorização?",options:["São equivalentes","401 Unauthorized: não autenticado ou token inválido. 403 Forbidden: autenticado com sucesso mas sem permissão para o recurso. Retornar 401 quando deveria ser 403 vaza informação sobre a proteção","401 é para APIs REST e 403 para web apps","403 indica erro de servidor"],answer:1}]},{id:"m19t2",moduleId:"m19",title:"Policy-based authorization com requirements",theory:`Quando roles não bastam: "Gerentes aprovam transferências apenas da própria agência" não é expressável com roles simples.

Policy-based: lógica de autorização como classes testáveis com DI.
IAuthorizationRequirement: marcador — define o que precisa ser verdade.
IAuthorizationHandler: implementa como verificar a condição.
AuthorizationPolicy: combina requirements em uma política nomeada.

Registro: AddAuthorization(options => options.AddPolicy(...)) no Program.cs.
Handler no DI: AddScoped<IAuthorizationHandler, MeuHandler>().
[Authorize(Policy = "NomeDaPolicy")] no controller.

Vantagem sobre roles: classes com DI — podem acessar banco, configurações, contexto.
São testáveis isoladamente sem subir o controller.`,code:`// Requirement: transferências acima de R$ 10.000 exigem role Gerente
public class LimiteTransferenciaRequirement : IAuthorizationRequirement
{
  public decimal LimiteCorrentista { get; } = 10_000m;
}

public class LimiteTransferenciaHandler
  : AuthorizationHandler<LimiteTransferenciaRequirement>
{
  private readonly IHttpContextAccessor _httpContextAccessor;

  public LimiteTransferenciaHandler(IHttpContextAccessor accessor)
    => _httpContextAccessor = accessor;

  protected override Task HandleRequirementAsync(
    AuthorizationHandlerContext context,
    LimiteTransferenciaRequirement requirement)
  {
    var isGerente = context.User.IsInRole("Gerente");
    var isAdmin   = context.User.IsInRole("Admin");

    // Gerente e Admin passam sempre; Correntista tem limite
    if (isGerente || isAdmin)
      context.Succeed(requirement);
    // Caso contrário, verificar o valor no handler real

    return Task.CompletedTask;
  }
}

// Program.cs
builder.Services.AddAuthorization(options =>
  options.AddPolicy("LimiteTransferencia",
    p => p.Requirements.Add(new LimiteTransferenciaRequirement())));
builder.Services.AddScoped<IAuthorizationHandler, LimiteTransferenciaHandler>();

[Authorize]
[Authorize(Policy = "LimiteTransferencia")]
[HttpPost("transferencias")]
public async Task<IActionResult> Transferir([FromBody] TransferenciaRequest req) { ... }`,checklist:["Criar LimiteTransferenciaRequirement e Handler separados","Registrar handler como Scoped no DI","Testar: Correntista com valor > R$10.000 recebe 403","Testar: Gerente com qualquer valor recebe 200","Escrever teste unitário do handler isolado (sem controller)"],quiz:[{question:"Por que Policy-based authorization é superior a Role-based para lógica de negócio?",options:["Policies são mais rápidas","Policies são classes com DI — acessam banco, configurações, contexto da request. Roles são flags simples. Além disso, policies são testáveis isoladamente como classes normais","Policies substituem completamente as Roles","Roles são legado e foram depreciadas"],answer:1},{question:"Qual a diferença entre context.Succeed() e context.Fail() em um handler?",options:["São equivalentes","Succeed() indica que o requirement foi satisfeito. Fail() marca explicitamente como falha — outros handlers não podem sobrescrever. Se nenhum handler chamar Succeed(), o requirement falha e o acesso é negado","Succeed() retorna 200","Fail() lança exceção"],answer:1},{question:"Como testar um AuthorizationHandler em isolamento?",options:["Não é possível — handlers precisam da aplicação","Instanciar o handler, criar AuthorizationHandlerContext com claims simuladas e verificar se Succeed ou Fail foi chamado — sem subir controller ou WebApplicationFactory","Usar apenas testes de integração para handlers","Mockar IAuthorizationService"],answer:1}]},{id:"m19t3",moduleId:"m19",title:"Resource-based authorization",theory:`O problema que roles e policies simples não resolvem:
"Este Correntista pode ver ESTA conta específica?"
A verificação precisa do recurso concreto.

IAuthorizationService.AuthorizeAsync(user, resource, "NomeDaPolicy").
IAuthorizationHandler<TRequirement, TResource>: handler tipado que recebe requirement E recurso.

Quando usar: verificar propriedade de recurso, estado do recurso, combinação de dados do usuário com dados do recurso.

Padrão: buscar o recurso → verificar autorização → processar ou 403.`,code:`// Requirement e Handler para propriedade de conta
public record ContaProprietarioRequirement : IAuthorizationRequirement;

public class ContaProprietarioHandler
  : AuthorizationHandler<ContaProprietarioRequirement, Conta>
{
  protected override Task HandleRequirementAsync(
    AuthorizationHandlerContext context,
    ContaProprietarioRequirement requirement,
    Conta conta)
  {
    var contaIdDoToken = context.User.FindFirstValue("contaId");
    var isAdmin        = context.User.IsInRole("Admin");
    var isGerente      = context.User.IsInRole("Gerente");

    if (isAdmin || isGerente || contaIdDoToken == conta.Id.Value.ToString())
      context.Succeed(requirement);

    return Task.CompletedTask;
  }
}

// Controller com resource-based authorization
[Authorize]
[HttpGet("{contaId}/extrato")]
public async Task<IActionResult> GetExtrato(Guid contaId)
{
  var conta = await _contaRepo.GetByIdAsync(new ContaId(contaId));
  if (conta is null) return NotFound();

  var auth = await _authorizationService.AuthorizeAsync(
    User, conta, "ContaProprietario");

  if (!auth.Succeeded) return Forbid();

  var extrato = await _extratoService.GetAsync(contaId);
  return Ok(extrato);
}`,checklist:["Criar ContaProprietarioHandler tipado com Conta como resource","Injetar IAuthorizationService no ContasController","Implementar o fluxo: buscar → autorizar → processar","Testar: Correntista A não pode ver extrato da Conta B (403)","Testar: Admin pode ver qualquer extrato (200)"],quiz:[{question:"Por que resource-based authorization precisa buscar o recurso antes de autorizar?",options:["Por cache de performance","A verificação depende de atributos do recurso (a quem pertence? qual o status?) que só estão disponíveis após buscar. Role-based verifica apenas o token; resource-based verifica token + recurso","IAuthorizationService exige o objeto como parâmetro sempre","É apenas uma convenção de código"],answer:1},{question:"Qual a ordem correta no controller para resource-based authorization?",options:["Autorizar → buscar → processar","Buscar o recurso (para saber se existe) → verificar autorização → processar apenas se autorizado. Buscar antes permite retornar 404 adequado antes de tentar autorizar","Processar → autorizar → retornar","A ordem não importa para o resultado"],answer:1},{question:"Por que o handler é tipado como AuthorizationHandler<TRequirement, TResource>?",options:["Para melhor performance","Type safety — o handler recebe o recurso como o tipo correto sem casting manual. O erro de tipo é visível em compile time, não em runtime","Apenas convenção sem impacto técnico","Para compatibilidade com EF Core"],answer:1}]},{id:"m19t4",moduleId:"m19",title:"CORS: configuração segura e armadilhas",theory:`CORS: restrição do browser que impede sites maliciosos de fazer requests autenticadas para sua API usando as credenciais do usuário.

ARMADILHA CRÍTICA:
AllowAnyOrigin() + AllowCredentials() = INVÁLIDO pela spec CORS.
O browser BLOQUEIA respostas com Access-Control-Allow-Origin: * e Access-Control-Allow-Credentials: true combinados. Para credentials, a origem DEVE ser explícita — nunca wildcard.

Funcionamento:
Requests com credenciais (Authorization header, cookies): browser envia preflight OPTIONS antes do request real. O servidor responde com os headers CORS permitidos.

Preflight sem token: se UseAuthentication rodar antes de UseCors, o preflight (sem token) recebe 401 e o browser interpreta como CORS bloqueado.
Por isso: app.UseCors() ANTES de app.UseAuthentication().

CORS não é segurança server-side: ferramentas como curl ignoram CORS.
CORS nunca substitui autenticação e autorização.`,code:`// ❌ ANTI-PATTERNS:
builder.Services.AddCors(o => o.AddPolicy("Inseguro", p =>
  p.AllowAnyOrigin()      // INVÁLIDO com AllowCredentials
   .AllowAnyMethod()
   .AllowAnyHeader()
   .AllowCredentials())); // combinação proibida pela spec CORS

// ✅ CONFIGURAÇÃO CORRETA — Desenvolvimento
builder.Services.AddCors(options =>
  options.AddPolicy("Development", policy =>
    policy
      .WithOrigins("https://localhost:3000", "https://localhost:5173")
      .WithMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
      .WithHeaders("Authorization", "Content-Type")
      .AllowCredentials() // OK com origens explícitas
      .SetPreflightMaxAge(TimeSpan.FromMinutes(10))));

// ✅ CONFIGURAÇÃO CORRETA — Produção
builder.Services.AddCors(options =>
  options.AddPolicy("Production", policy =>
    policy
      .WithOrigins(
        "https://app.sistemafinanceiro.com.br",
        "https://mobile.sistemafinanceiro.com.br")
      .WithMethods("GET", "POST", "PUT", "DELETE")
      .WithHeaders("Authorization", "Content-Type")
      .AllowCredentials()));

// app.UseCors() ANTES de UseAuthentication
app.UseCors(app.Environment.IsDevelopment() ? "Development" : "Production");
app.UseAuthentication();
app.UseAuthorization();`,checklist:["Criar policies separadas: Development e Production","Verificar: AllowAnyOrigin e AllowCredentials NÃO estão juntas","Verificar que app.UseCors() está ANTES de app.UseAuthentication()","Testar no browser: request de localhost:3000 para a API funciona?","Verificar que origem não listada recebe erro de CORS no browser"],quiz:[{question:"Por que AllowAnyOrigin() + AllowCredentials() não funciona?",options:["É limitação do ASP.NET Core","A spec CORS proíbe Access-Control-Allow-Origin: * combinado com Access-Control-Allow-Credentials: true. O browser bloqueia a resposta por segurança. Para credenciais, a origem deve ser explícita","É uma configuração válida mas não recomendada","Apenas para requests HTTP, não HTTPS"],answer:1},{question:"CORS impede que um atacante com curl acesse sua API sem autenticação?",options:["Sim — CORS bloqueia todos acessos não autorizados","Não — CORS é aplicado pelo browser para proteger o usuário. Ferramentas como curl, Postman e código server-side ignoram CORS completamente. CORS nunca substitui autenticação e autorização","Depende da configuração AllowCredentials","CORS bloqueia IPs não listados nas origens"],answer:1},{question:"Por que app.UseCors() deve vir antes de app.UseAuthentication()?",options:["É apenas convenção","Preflight requests (OPTIONS) chegam sem token de autenticação. Se UseAuthentication rodar antes de UseCors, o preflight recebe 401 antes de ter chance de retornar os headers CORS — o browser interpreta como CORS bloqueado","UseCors depende do Identity para funcionar","A ordem não impacta o comportamento"],answer:1}]}]},Ep={id:"m20",title:"Segurança na Prática",color:m.m20,week:"Semana 17",topics:[{id:"m20t1",moduleId:"m20",title:"HTTPS, HSTS e segredos fora do código",theory:`HTTPS obrigatório para APIs com autenticação: sem HTTPS, tokens JWT viajam em texto puro — interceptáveis por qualquer observador na rede.
app.UseHttpsRedirection(): redireciona HTTP → HTTPS automaticamente.

HSTS (HTTP Strict Transport Security):
Instrui o browser a NUNCA usar HTTP para o domínio por um período.
app.UseHsts() — apenas em produção (dev usa HTTP localmente).
Por que não em dev: browser memorizaria localhost como HTTPS-only e quebraria outros projetos HTTP na mesma porta.

GERENCIAMENTO DE SEGREDOS:
Anti-pattern: segredos no código ou no appsettings.json versionado → comprometimento imediato se o repositório for público ou clonado.

Desenvolvimento: dotnet user-secrets (fora do repositório)
  dotnet user-secrets init
  dotnet user-secrets set "Jwt:SecretKey" "valor-seguro"
  Armazenado em ~/.microsoft/usersecrets/ — não vai para o git.

Produção: variáveis de ambiente + gerenciadores de segredo:
Azure Key Vault, AWS Secrets Manager, HashiCorp Vault.
Rotação automática, auditoria de acesso, versionamento, revogação sem redeploy.

.gitignore obrigatório: appsettings.Production.json, *.pfx, .env, secrets.json.

Se um segredo for comitado acidentalmente: considerá-lo COMPROMETIDO e rotacioná-lo imediatamente. git rm não apaga o histórico.`,code:`// Program.cs — segurança de transporte
if (!app.Environment.IsDevelopment())
  app.UseHsts();           // apenas produção
app.UseHttpsRedirection(); // sempre

// User Secrets — fluxo completo
// 1. Inicializar (uma vez por projeto)
// dotnet user-secrets init

// 2. Armazenar segredos
// dotnet user-secrets set "Jwt:SecretKey" "$(openssl rand -base64 32)"
// dotnet user-secrets set "ConnectionStrings:Default" "Server=..."

// 3. Acessar no código (Configuration já inclui User Secrets em Development)
var secretKey = configuration["Jwt:SecretKey"]
  ?? throw new InvalidOperationException(
    "Jwt:SecretKey não configurado. Use: dotnet user-secrets set 'Jwt:SecretKey' '<valor>'");

// Gerar secret segura (32 bytes = 256 bits)
var bytes = new byte[32];
RandomNumberGenerator.Fill(bytes);
string secret = Convert.ToBase64String(bytes);
// Exemplo: "xK9mP2vQ8nL3jR7wT1yU5bH6cF4dE0aG+iZ2nS="`,checklist:["Configurar UseHttpsRedirection() e UseHsts() no Program.cs","Mover Jwt:SecretKey para User Secrets","Mover ConnectionString para User Secrets","Verificar .gitignore: appsettings.Production.json está listado?","Verificar histórico: git log --all -- appsettings.json — há segredos?"],quiz:[{question:"Por que HSTS é configurado apenas em produção e não em desenvolvimento?",options:["Desenvolvimento não precisa de HTTPS","Em desenvolvimento, HTTPS usa certificados auto-assinados. Se HSTS fosse ativado, o browser memorizaria localhost como HTTPS-only e quebraria outros projetos HTTP na mesma porta","HSTS não funciona com certificados Let's Encrypt","É limitação do Kestrel"],answer:1},{question:"O que acontece se um segredo for acidentalmente comitado no git?",options:["Pode ser resolvido com git rm","O segredo deve ser considerado COMPROMETIDO e rotacionado imediatamente — o git preserva o histórico completo e ferramentas como truffleHog fazem scan automático em repositórios","Apenas o branch main importa","git rebase resolve o problema"],answer:1},{question:"Qual a principal vantagem de Azure Key Vault sobre variáveis de ambiente?",options:["Variáveis são mais seguras","Gerenciadores oferecem: rotação automática, auditoria de acesso (quem acessou quando), versionamento de segredos e revogação sem redeploy — variáveis de ambiente têm nenhuma dessas capacidades","São equivalentes em segurança","Variáveis são sempre suficientes"],answer:1}]},{id:"m20t2",moduleId:"m20",title:"Rate Limiting e proteção contra brute-force",theory:`Brute-force em auth: sem limitação, 1 milhão de tentativas de senha é trivial.

DUAS CAMADAS COMPLEMENTARES:
1. Identity Lockout (Módulo 18): bloqueia a CONTA após N falhas.
   Limitação: não protege contra ataques distribuídos (muitos IPs, poucas tentativas por IP) ou ataques a muitas contas simultaneamente.
2. Rate Limiting por IP: limita o ENDPOINT independente da conta.

.NET 8 tem Rate Limiting nativo (System.Threading.RateLimiting).
Algoritmos:
• Fixed Window: N requests por janela fixa — bursty no início da janela
• Sliding Window: N requests em janela deslizante — distribuição suave
• Token Bucket: acumula tokens, consome 1 por request — bursts controlados
• Concurrency Limiter: N requests simultâneos

Configuração recomendada para auth:
• POST /auth/login:    5 tentativas/minuto por IP → Fixed Window
• POST /auth/register: 3 cadastros/hora por IP → Sliding Window
• POST /auth/refresh:  10 por minuto por IP → Fixed Window

Response: 429 Too Many Requests + header Retry-After.`,code:`// Program.cs — Rate Limiting nativo do .NET 8
builder.Services.AddRateLimiter(options =>
{
  options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
  options.OnRejected = async (ctx, ct) =>
  {
    ctx.HttpContext.Response.Headers.RetryAfter = "60";
    await ctx.HttpContext.Response.WriteAsync("Muitas tentativas. Aguarde 60 segundos.", ct);
  };

  // Login: 5 tentativas por minuto por IP
  options.AddPolicy("LoginPolicy", ctx =>
    RateLimitPartition.GetFixedWindowLimiter(
      partitionKey: ctx.Connection.RemoteIpAddress?.ToString() ?? "unknown",
      factory: _ => new FixedWindowRateLimiterOptions
      {
        PermitLimit = 5,
        Window      = TimeSpan.FromMinutes(1),
        QueueLimit  = 0
      }));

  // Registro: 3 por hora por IP
  options.AddPolicy("RegisterPolicy", ctx =>
    RateLimitPartition.GetSlidingWindowLimiter(
      partitionKey: ctx.Connection.RemoteIpAddress?.ToString() ?? "unknown",
      factory: _ => new SlidingWindowRateLimiterOptions
      {
        PermitLimit       = 3,
        Window            = TimeSpan.FromHours(1),
        SegmentsPerWindow = 4,
        QueueLimit        = 0
      }));
});

app.UseRateLimiter(); // antes de UseAuthentication

// Nos endpoints
[AllowAnonymous]
[EnableRateLimiting("LoginPolicy")]
[HttpPost("login")]
public async Task<IActionResult> Login(...) { ... }

[AllowAnonymous]
[EnableRateLimiting("RegisterPolicy")]
[HttpPost("register")]
public async Task<IActionResult> Register(...) { ... }`,checklist:["Adicionar builder.Services.AddRateLimiter no Program.cs","Criar LoginPolicy (5/min) e RegisterPolicy (3/hora)","Adicionar [EnableRateLimiting] nos endpoints de auth","Testar: 6 POSTs consecutivos para /auth/login → o 6º retorna 429","Verificar que o header Retry-After está presente na resposta 429"],quiz:[{question:"Por que Rate Limiting é necessário mesmo com Identity Lockout configurado?",options:["Rate Limiting substitui o Lockout","Lockout bloqueia contas individualmente. Um atacante pode tentar N vezes em N contas diferentes sem acionar lockout em nenhuma. Rate Limiting por IP limita o volume total de tentativas independente de qual conta está sendo atacada","São configurações equivalentes e redundantes","Rate Limiting é mais efetivo para brute-force direto"],answer:1},{question:"Qual a diferença entre Fixed Window e Sliding Window?",options:["São algoritmos idênticos com nomes diferentes","Fixed Window reseta o contador em intervalos fixos — permite burst no início de cada janela. Sliding Window calcula em qualquer janela deslizante — distribui o tráfego mais uniformemente e é mais justo para o cliente legítimo","Fixed Window é mais seguro","Sliding Window usa mais memória e deve ser evitado"],answer:1},{question:"Qual o HTTP status correto quando rate limit é excedido?",options:["403 Forbidden","429 Too Many Requests — com header Retry-After indicando quando o cliente pode tentar novamente. 403 indicaria falta de permissão, não limite de taxa","503 Service Unavailable","400 Bad Request"],answer:1}]},{id:"m20t3",moduleId:"m20",title:"OWASP Top 10 para APIs .NET",theory:`OWASP API Security Top 10 — vulnerabilidades mais críticas de APIs REST. Cada uma com o ataque E a defesa em código .NET corporativo.

API1 — BOLA (Broken Object Level Authorization):
O mais comum. Acessar recurso de outro usuário por ID manipulado.
Ataque: GET /api/contas/123 sendo usuário da conta 456.
Defesa: resource-based authorization (Tópico 19.3).

API2 — Broken Authentication:
JWT sem expiração, secrets fracos, Refresh Token sem rotação.
Defesa: Módulos 17 e 18 já cobrem todos esses vetores.

API3 — Broken Object Property Level Authorization:
Retornar campos sensíveis que o usuário não deveria ver.
Ataque: GET /usuarios/123 retornando PasswordHash, RefreshTokenHash.
Defesa: DTOs de response — nunca retornar Entity ou IdentityUser diretamente.

API4 — Unrestricted Resource Consumption:
Sem rate limiting ou limite de tamanho do body.
Defesa: Rate Limiting (20.2) + options.Limits.MaxRequestBodySize.

API5 — Broken Function Level Authorization:
Endpoints admin acessíveis por falta de [Authorize].
Defesa: SetFallbackPolicy (19.1).

API6 — Unrestricted Access to Sensitive Business Flows:
Automatizar compras, enviar spam em massa.
Defesa: Rate Limiting por usuário + análise comportamental.

API7 — SSRF (Server Side Request Forgery):
API faz request para URL fornecida pelo usuário.
Ataque: passar http://169.254.169.254/metadata (endpoint de metadados cloud).
Defesa: allowlist de URLs externas + nunca aceitar URLs do usuário diretamente.

API8 — Security Misconfiguration:
CORS * em produção, stack trace exposto, HTTP sem redirect, debug em prod.
Defesa: UseExceptionHandler (não UseDeveloperExceptionPage) em produção.

API9 — Improper Inventory Management:
APIs v1 legadas sem autenticação ainda ativas.
Defesa: deprecation policy explícita, versionamento de API, monitoramento.

API10 — Unsafe Consumption of APIs:
Confiar em dados de APIs externas sem validação.
Defesa: validar tudo que vem de terceiros (FluentValidation — Fase 3).`,code:`// API3 — nunca retornar Entity diretamente
// ❌ ANTI-PATTERN:
return Ok(usuario); // expõe PasswordHash, SecurityStamp, RefreshTokens...

// ✅ CORRETO: DTO com apenas o necessário
public record UsuarioResponse(
  string Id, string NomeCompleto, string Email, string Role, DateTime CreatedAt);
return Ok(new UsuarioResponse(
  usuario.Id, usuario.NomeCompleto, usuario.Email!, role, usuario.CreatedAt));

// API8 — Exception handler em produção (sem stack trace)
if (app.Environment.IsDevelopment())
  app.UseDeveloperExceptionPage();
else
  app.UseExceptionHandler("/error");

[AllowAnonymous]
[Route("/error")]
[ApiExplorerSettings(IgnoreApi = true)]
public IActionResult HandleError() =>
  Problem("Ocorreu um erro interno. Por favor, tente novamente.");

// API4 — limite de tamanho do body
builder.WebHost.ConfigureKestrel(options =>
  options.Limits.MaxRequestBodySize = 1 * 1024 * 1024); // 1 MB`,checklist:["Auditar todos os endpoints: algum retorna Entity diretamente? Criar DTOs.","Testar BOLA: trocar contaId na URL → deve retornar 403","Confirmar que UseDeveloperExceptionPage NÃO roda em produção","Configurar MaxRequestBodySize no Kestrel","Escanear com OWASP ZAP (gratuito) em ambiente de staging"],quiz:[{question:"O que é BOLA (Broken Object Level Authorization)?",options:["Quando o JWT está expirado","Usuário autenticado acessa recursos de outro usuário manipulando o ID na URL ou body. A API não verifica se o recurso pertence ao requisitante — é a vulnerabilidade mais comum em APIs REST","Quando a API não tem autenticação","Quando o CORS está mal configurado"],answer:1},{question:"Por que nunca retornar uma Entity ou IdentityUser diretamente na response?",options:["Entities são mais lentas para serializar","Entities contêm campos internos sensíveis (PasswordHash, SecurityStamp, tokens) que não devem ser expostos. DTOs garantem controle explícito sobre o que é retornado","O ASP.NET Core não consegue serializar Entities do Identity","É apenas prática de arquitetura sem impacto de segurança"],answer:1},{question:"O que é Security Misconfiguration (API8)?",options:["Um bug no algoritmo de criptografia","Configurações padrão inseguras ou esquecidas: CORS AllowAnyOrigin, stack trace em produção, debug habilitado, HTTP sem redirect, segredos no appsettings versionado","Uso incorreto de JWT","Falta de testes automatizados"],answer:1}]},{id:"m20t4",moduleId:"m20",title:"Testando segurança: testes de autenticação com xUnit",theory:`Fechando o ciclo: segurança sem testes é segurança não verificada.
Testes de autenticação garantem que nenhum refactor futuro abre uma brecha.

CATEGORIAS DE TESTES DE SEGURANÇA:
1. Acesso negado: endpoint sem token → 401. Role errada → 403. Conta alheia → 403.
2. Token inválido: expirado → 401. Assinatura alterada → 401. alg:none → 401.
3. Rate limiting: N+1 requests → 429 com Retry-After.
4. Rotação de refresh token: mesmo token duas vezes → segundo retorna 401.

JwtTestHelper: gera tokens com claims arbitrárias para testes.
Chave de teste específica — nunca a chave de produção no repositório.`,code:`// JwtTestHelper — tokens de teste com claims customizadas
public static class JwtTestHelper
{
  private const string TestSecret = "test-secret-for-tests-only-256bits-here!!";

  public static string GerarToken(
    string userId = "user-test-123", string role = "Correntista",
    string? contaId = null, int expiresInMinutes = 60)
  {
    var key    = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(TestSecret));
    var creds  = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    var claims = new List<Claim>
    {
      new(JwtRegisteredClaimNames.Sub, userId),
      new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
      new(ClaimTypes.Role,             role),
    };
    if (contaId is not null)
      claims.Add(new("contaId", contaId));

    var token = new JwtSecurityToken(
      issuer:   "SistemaFinanceiro",
      audience: "SistemaFinanceiro.Clients",
      claims:   claims,
      expires:  DateTime.UtcNow.AddMinutes(expiresInMinutes),
      signingCredentials: creds);

    return new JwtSecurityTokenHandler().WriteToken(token);
  }

  public static string GerarTokenExpirado() => GerarToken(expiresInMinutes: -1);
  public static string GerarTokenAdmin()     => GerarToken(role: "Admin");
}

// Testes de segurança
public class AuthorizationSecurityTests : IClassFixture<IntegrationTestFactory>
{
  [Fact]
  public async Task GetExtrato_SemToken_Retorna401()
  {
    var response = await _client.GetAsync($"/api/contas/{_contaA}/extrato");
    response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
  }

  [Fact]
  public async Task GetExtrato_TokenExpirado_Retorna401()
  {
    _client.DefaultRequestHeaders.Authorization =
      new AuthenticationHeaderValue("Bearer", JwtTestHelper.GerarTokenExpirado());
    var response = await _client.GetAsync($"/api/contas/{_contaA}/extrato");
    response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
  }

  [Fact]
  public async Task GetExtrato_CorrentistaTentandoContaAjena_Retorna403()
  {
    _client.DefaultRequestHeaders.Authorization =
      new AuthenticationHeaderValue("Bearer",
        JwtTestHelper.GerarToken(contaId: _contaA.ToString()));
    var response = await _client.GetAsync($"/api/contas/{_contaB}/extrato");
    response.StatusCode.Should().Be(HttpStatusCode.Forbidden);
  }

  [Fact]
  public async Task Login_AposRateLimit_Retorna429ComRetryAfter()
  {
    for (int i = 0; i < 5; i++)
      await _client.PostAsJsonAsync("/auth/login",
        new { Email = "x@x.com", Senha = "senhaerrada" });

    var response = await _client.PostAsJsonAsync("/auth/login",
      new { Email = "x@x.com", Senha = "senhaerrada" });

    response.StatusCode.Should().Be(HttpStatusCode.TooManyRequests);
    response.Headers.Should().ContainKey("Retry-After");
  }

  [Fact]
  public async Task Refresh_MesmoTokenDuasVezes_SegundoRetorna401()
  {
    var primeiro = await _client.PostAsJsonAsync("/auth/refresh",
      new { RefreshToken = _refreshTokenValido });
    primeiro.StatusCode.Should().Be(HttpStatusCode.OK);

    var segundo = await _client.PostAsJsonAsync("/auth/refresh",
      new { RefreshToken = _refreshTokenValido });
    segundo.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
  }
}`,checklist:["Criar JwtTestHelper com GerarToken, GerarTokenExpirado, GerarTokenAdmin","Implementar os 5 testes de segurança do exemplo","Adicionar teste de BOLA: conta alheia → 403","Verificar que testes de segurança fazem parte do CI (rodam no pipeline)","Criar teste que verifica stack trace não aparece em respostas de erro"],quiz:[{question:"Por que testes de segurança automatizados são essenciais para sistemas financeiros?",options:["São opcionais — auditoria manual é suficiente","Garantem que nenhuma mudança futura introduz regressão de segurança sem detecção. Uma brecha em produção em sistema financeiro causa perdas financeiras e responsabilidade legal","Testes de segurança só funcionam com ferramentas especializadas","São equivalentes à revisão manual de código"],answer:1},{question:"Por que usar chave JWT específica nos testes em vez da chave de produção?",options:["Para simplificar o código de teste","A chave de produção não deve estar no repositório de código. Uma chave de teste específica permite que os testes rodem sem acesso a segredos de produção, mantendo separação de ambientes","A chave de produção não funciona em testes","São equivalentes em segurança"],answer:1},{question:"O que deve ser verificado em um teste de rotação de Refresh Token?",options:["Apenas que o novo token funciona","Que o token original foi revogado (segundo uso retorna 401) E que o novo token funciona (primeiro uso OK). Verificar ambos garante atomicidade — o antigo não pode ser reutilizado após o novo ser emitido","Apenas que o usuário continua autenticado","A expiração do novo token"],answer:1}]},{id:"m20proj",moduleId:"m20",title:"🔐 Projeto: Auth Service Completo",theory:`Auth Service completo integrando todos os módulos da Fase 5 e protegendo os endpoints do Sistema Financeiro da Fase 3.

ENDPOINTS IMPLEMENTADOS:
POST /auth/register        — cadastro com FluentValidation, criação de Conta, e-mail
GET  /auth/confirm-email   — confirmação de e-mail via token
POST /auth/login           — retorna AccessToken + RefreshToken (lockout + rate limit)
POST /auth/refresh         — rotação de Refresh Token com detecção de replay
POST /auth/logout          — revogação do Refresh Token atual
GET  /auth/me              — dados do usuário autenticado (via claims)
POST /auth/change-password — troca senha + revoga todos os Refresh Tokens

PROTEÇÃO DO SISTEMA FINANCEIRO:
GET  /api/contas/{id}            → [Authorize] + ContaProprietario policy
GET  /api/contas/{id}/extrato    → resource-based authorization
POST /api/contas/{id}/depositar  → [Authorize(Roles="Correntista,Gerente")]
POST /api/transferencias         → [Authorize] + LimiteTransferencia policy
GET  /api/relatorios/consolidado → [Authorize(Roles="Gerente,Admin")]
DELETE /api/usuarios/{id}        → [Authorize(Roles="Admin")]

SEGURANÇA DA INFRAESTRUTURA:
• Rate Limiting em todos os /auth/* endpoints
• CORS: policies separadas para Development e Production
• HTTPS + HSTS habilitados (HSTS apenas em produção)
• User Secrets para todos os segredos em desenvolvimento
• Exception handler genérico em produção
• Logs de auditoria: login, logout, troca de senha, tentativas falhas

ORDEM DOS MIDDLEWARES (crítica):
UseHttpsRedirection → UseHsts → UseCors → UseRateLimiter
→ UseAuthentication → UseAuthorization → MapControllers`,code:`// Program.cs final — ordem completa de middlewares
var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddControllers();
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options => { ... })
  .AddEntityFrameworkStores<FinanceiroDbContext>()
  .AddDefaultTokenProviders();
builder.Services
  .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options => { /* configuração segura do Módulo 17.2 */ });
builder.Services.AddAuthorization(options =>
{
  options.AddPolicy("ContaProprietario",   p => p.Requirements.Add(new ContaProprietarioRequirement()));
  options.AddPolicy("LimiteTransferencia", p => p.Requirements.Add(new LimiteTransferenciaRequirement()));
  options.SetFallbackPolicy(new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build());
});
builder.Services.AddRateLimiter(options => { /* Módulo 20.2 */ });
builder.Services.AddCors(options => { /* Módulo 19.4 */ });
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IAuthorizationHandler, ContaProprietarioHandler>();
builder.Services.AddScoped<IAuthorizationHandler, LimiteTransferenciaHandler>();

var app = builder.Build();

// Middleware pipeline — ordem crítica
if (!app.Environment.IsDevelopment()) app.UseHsts();
app.UseHttpsRedirection();
app.UseCors(app.Environment.IsDevelopment() ? "Development" : "Production");
app.UseRateLimiter();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

// GitFlow
// feature/auth-jwt-tokens
// feature/auth-identity-setup
// feature/auth-endpoints
// feature/auth-protect-financial
// feature/auth-security-tests
// release/v3.0.0-auth-service`,checklist:["Implementar todos os 7 endpoints de /auth/*","Proteger todos os 6 endpoints do Sistema Financeiro com policies corretas","Testar o fluxo completo: registro → confirmação → login → uso → refresh → logout","Executar todos os testes de segurança do Tópico 20.4: 100% pass","Rodar dotnet test com cobertura — auth deve ter 75%+ cobertura","Criar release/v3.0.0-auth-service via GitFlow"],quiz:[{question:"Qual a ordem correta dos middlewares de segurança no pipeline ASP.NET Core?",options:["Qualquer ordem funciona","UseCors → UseRateLimiter → UseAuthentication → UseAuthorization. CORS antes porque preflight não tem token. Rate Limiter antes de Authentication para bloquear antes de processar o token. Authentication antes de Authorization para identificar antes de autorizar","UseAuthorization → UseAuthentication → UseCors","UseAuthentication → UseCors → UseRateLimiter"],answer:1},{question:"Por que change-password deve revogar todos os Refresh Tokens do usuário?",options:["Para simplificar o código","Se a senha foi comprometida (motivo provável da troca), os Refresh Tokens emitidos antes podem estar comprometidos. Revogar todos força reautenticação em todos os dispositivos, eliminando qualquer acesso indevido pendente","É exigência do ASP.NET Identity","Os Refresh Tokens expiram automaticamente"],answer:1},{question:"Por que registrar logs de auditoria em um sistema financeiro?",options:["Para debug de erros técnicos","Para rastrear acessos suspeitos e atender requisitos regulatórios — sistemas financeiros devem responder 'quem acessou o quê e quando' em uma auditoria. LGPD e regulações do Banco Central exigem rastreabilidade","Os logs são opcionais em sistemas internos","Para melhorar a performance"],answer:1}]}]},xp=[Tp,yp,Ip,Ep],eo=[{id:"phase1",title:"Fase 1",subtitle:"C# Fundamentos & Git",data:np,color:"#00D4FF",weeks:"Semanas 1–4"},{id:"phase2",title:"Fase 2",subtitle:"Web API & Banco de Dados",data:up,color:"#7C3AED",weeks:"Semanas 5–8"},{id:"phase3",title:"Fase 3",subtitle:"Qualidade & Arquitetura",data:vp,color:"#10B981",weeks:"Semanas 9–12"},{id:"phase4",title:"Fase 4",subtitle:"Testes Automatizados",data:Ap,color:"#EF4444",weeks:"Semanas 13–15"},{id:"phase5",title:"Fase 5",subtitle:"Segurança & Autenticação",data:xp,color:"#F59E0B",weeks:"Semanas 16–17"}];function wo(s){var v;try{const l=(v=window.storage)==null?void 0:v.getItem(s);return l!=null?JSON.parse(l):void 0}catch{return}}function Rp(s,v){var l;try{(l=window.storage)==null||l.setItem(s,JSON.stringify(v))}catch{}}const Pp=["m1t1","m1t2","m1t3","m1t4","m2t1","m2t2","m2t3","m2t4","m3t1","m3t2","m3t3","m3t4","m4t1","m4t2","m4t3","m4t4"],qp=["m5t1","m5t2","m5t3","m5t4","m6t1","m6t2","m6t3","m6t4","m7t1","m7t2","m7t3","m7t4","m8t1","m8t2","m8t3","m8t4","m8proj"],Dp=["m9t1","m9t2","m9t3","m9t4","m10t1","m10t2","m10t3","m10t4","m11t1","m11t2","m11t3","m11t4","m12t1","m12t2","m12t3","m12t4","m12proj"],Op=["m13t1","m13t2","m13t3","m13t4","m14t1","m14t2","m14t3","m14t4","m15t1","m15t2","m15t3","m15t4","m16t1","m16t2","m16t3","m16t4","m16proj"],wp=["m17t1","m17t2","m17t3","m17t4","m18t1","m18t2","m18t3","m18t4","m19t1","m19t2","m19t3","m19t4","m20t1","m20t2","m20t3","m20t4","m20proj"],Np=["m1","m2","m3","m4"],kp=["m5","m6","m7","m8"],Lp=["m9","m10","m11","m12"],Fp=["m13","m14","m15","m16"],Mp=["m17","m18","m19","m20"];function zp(){const[s,v]=L.useState(!0),[l,A]=L.useState(null),b=L.useRef(!1);return L.useEffect(()=>{if(b.current)return;b.current=!0;const S=wo(K.currentTopic)??null,P=wo(K.xp)??0,R=wo(K.completed)??[],T=wo(K.phase2Completed)??[],D=wo(K.phase3Completed)??[],z=wo(K.phase4Completed)??[],O=wo(K.phase5Completed)??[],F=[...R,...T,...D,...z,...O],Q={},Y={},j={},U={},J=[...Pp,...qp,...Dp,...Op,...wp],Z=[...Np,...kp,...Lp,...Fp,...Mp];for(const ie of J){const ge=wo(rs(ie));ge!==void 0&&(Q[ie]=ge);const Oe=wo(is(ie));Oe!==void 0&&(Y[ie]=Oe);const Re=wo(ns(ie));Re!==void 0&&(j[ie]=Re)}for(const ie of Z){const ge=wo(cs(ie));ge!==void 0&&(U[ie]=ge)}A({currentTopic:S,completed:F,xp:P,checklists:Q,quizzes:Y,notes:j,timers:U}),v(!1)},[]),{loading:s,initialState:l,saveItem:Rp,STORAGE:K}}const _p=5e3;function Up(s,v,l){const[A,b]=L.useState(v||{}),S=L.useRef(null),P=L.useRef(!0),R=L.useRef(s),T=L.useRef(A);T.current=A,R.current=s;const D=L.useCallback(()=>{S.current&&clearInterval(S.current),R.current&&(S.current=setInterval(()=>{!P.current||!R.current||b(z=>({...z,[R.current]:(z[R.current]||0)+5}))},_p))},[]);return L.useEffect(()=>{if(!s){S.current&&clearInterval(S.current);return}return D(),()=>{S.current&&clearInterval(S.current)}},[s,D]),L.useEffect(()=>{const z=()=>{P.current=document.visibilityState==="visible"};return document.addEventListener("visibilitychange",z),()=>{document.removeEventListener("visibilitychange",z)}},[]),L.useEffect(()=>{s&&l(cs(s),A[s]||0)},[A,s,l]),A}const fd=3,Bp=3e3;function jp(){const[s,v]=L.useState([]),l=L.useRef(1),A=L.useCallback((S,P="success")=>{const R=l.current++;v(T=>{const D=[...T,{id:R,message:S,type:P}];return D.length>fd?D.slice(-fd):D}),setTimeout(()=>{v(T=>T.filter(D=>D.id!==R))},Bp)},[]),b=L.useCallback(S=>{v(P=>P.filter(R=>R.id!==S))},[]);return{toasts:s,addToast:A,removeToast:b}}function Vp(s,v,l){const[A,b]=L.useState(s||0),S=L.useRef({checklists:new Set,quizzes:new Set,modules:new Set}),P=L.useCallback((O,F)=>{b(Q=>{const Y=Q+O;return v(K.xp,Y),Y}),F&&l&&l(F,"xp")},[v,l]),R=L.useCallback(O=>{S.current.checklists.has(O)||(S.current.checklists.add(O),P(20,"+20 XP — Checklist completo!"))},[P]),T=L.useCallback((O,F)=>{if(S.current.quizzes.has(O))return;S.current.quizzes.add(O);const Q=F*10;Q>0&&P(Q,`+${Q} XP — Quiz concluído!`)},[P]),D=L.useCallback((O,F)=>{S.current.modules.has(O)||(S.current.modules.add(O),P(100,`🎉 Módulo ${F} Concluído! +100 XP`))},[P]),z=L.useCallback((O,F,Q,Y)=>{for(const j of O){const U=Q[j];U&&U.length>0&&U.every(Boolean)&&S.current.checklists.add(j);const J=F[j];J&&J.submitted&&S.current.quizzes.add(j)}for(const j of Y)j.topics.every(J=>O.includes(J.id))&&S.current.modules.add(j.id)},[]);return{xp:A,awardChecklistXP:R,awardQuizXP:T,awardModuleXP:D,initAwarded:z}}const Bt={layout:{display:"flex",marginTop:56,height:"calc(100vh - 56px)",background:m.bg,color:m.text,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif"},main:{flex:1,height:"calc(100vh - 56px)",overflowY:"auto",padding:32},mainInner:{maxWidth:820,margin:"0 auto"},placeholder:{display:"flex",alignItems:"center",justifyContent:"center",height:"60vh",color:m.textMuted,fontSize:16},loading:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:m.bg,color:m.textMuted,fontSize:16,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif"}};function Hp(){var pe,Ge;const{loading:s,initialState:v,saveItem:l}=zp(),{toasts:A,addToast:b,removeToast:S}=jp(),P=L.useMemo(()=>eo.flatMap(re=>re.data),[]),R=L.useMemo(()=>zo(P),[P]),[T,D]=L.useState(null),[z,O]=L.useState([]),[F,Q]=L.useState({}),[Y,j]=L.useState({}),[U,J]=L.useState({}),[Z,ie]=L.useState(!1),[ge,Oe]=L.useState(!1),[Re,le]=L.useState(null),Le=L.useRef(!1),ao=L.useRef(!1),Ke=L.useRef(!1),vo=L.useRef(!1),ve=T?Fm(T,P):null,Xe=L.useMemo(()=>{if(!T)return eo[0];for(const re of eo)if(re.data.some(fe=>fe.topics.some(Ce=>Ce.id===T)))return re;return eo[0]},[T]),{xp:to,awardChecklistXP:uo,awardQuizXP:Be,awardModuleXP:Se,initAwarded:w}=Vp((v==null?void 0:v.xp)||0,l,b),H=Up((ve==null?void 0:ve.id)||null,(v==null?void 0:v.timers)||{},l);L.useEffect(()=>{if(s||Z||!v)return;D(v.currentTopic),O(v.completed),Q(v.checklists),j(v.quizzes),J(v.notes),w(v.completed,v.quizzes,v.checklists,P);const re=zo(eo[0].data);Le.current=re.every(Ie=>v.completed.includes(Ie.id));const fe=zo(eo[1].data);ao.current=fe.every(Ie=>v.completed.includes(Ie.id));const Ce=zo(eo[2].data);Ke.current=Ce.every(Ie=>v.completed.includes(Ie.id));const je=zo(eo[3].data);vo.current=je.every(Ie=>v.completed.includes(Ie.id)),ie(!0)},[s,Z,v,w,P]),L.useEffect(()=>{Z&&l(K.currentTopic,T)},[T,Z,l]),L.useEffect(()=>{if(!Z)return;const re=z.filter(de=>/^m[1-4]/.test(de)),fe=z.filter(de=>/^m[5-8]/.test(de)),Ce=z.filter(de=>/^m(9|1[0-2])/.test(de)),je=z.filter(de=>/^m1[3-6]/.test(de)),Ie=z.filter(de=>/^m(17|18|19|20)/.test(de));l(K.completed,re),l(K.phase2Completed,fe),l(K.phase3Completed,Ce),l(K.phase4Completed,je),l(K.phase5Completed,Ie)},[z,Z,l]),L.useEffect(()=>{if(Z)for(const[re,fe]of Object.entries(F))l(rs(re),fe)},[F,Z,l]),L.useEffect(()=>{if(Z)for(const[re,fe]of Object.entries(Y))l(is(re),fe)},[Y,Z,l]),L.useEffect(()=>{if(Z)for(const[re,fe]of Object.entries(U))l(ns(re),fe)},[U,Z,l]);const N=T?Lm(T,R):null,f=N?R.findIndex(re=>re.id===N.id):-1,y=T?km(T,F,Y):!1,X=L.useCallback((re,fe)=>{!T||!N||Q(Ce=>{const Ie=[...Ce[T]||N.checklist.map(()=>!1)];return Ie[re]=fe,Ie.every(Boolean)&&uo(T),{...Ce,[T]:Ie}})},[T,N,uo]),ee=L.useCallback((re,fe)=>{if(!T)return;const Ce=N.quiz.reduce((je,Ie,de)=>je+(re[de]===Ie.answer?1:0),0);j(je=>({...je,[T]:{answers:re,submitted:!0}})),Be(T,Ce)},[T,N,Be]),ae=L.useCallback(re=>{T&&J(fe=>({...fe,[T]:re}))},[T]),te=L.useCallback(()=>{f>0&&D(R[f-1].id)},[f,R]),me=L.useCallback(()=>{if(f<R.length-1&&y){const re=R[f+1].id;O(fe=>{if(fe.includes(T))return fe;const Ce=[...fe,T];return ve&&ve.topics.every(de=>de.id===T||Ce.includes(de.id))&&Se(ve.id,ve.title),Le.current||zo(eo[0].data).every(de=>de.id===T||Ce.includes(de.id))&&(Le.current=!0,b("🎉 Fase 2 Desbloqueada! Web API & Banco de Dados","unlock"),le("phase2"),setTimeout(()=>le(null),2e3)),!ao.current&&Le.current&&zo(eo[1].data).every(de=>de.id===T||Ce.includes(de.id))&&(ao.current=!0,b("🎉 Fase 3 Desbloqueada! Qualidade & Arquitetura","unlock"),le("phase3"),setTimeout(()=>le(null),2e3)),!Ke.current&&ao.current&&zo(eo[2].data).every(de=>de.id===T||Ce.includes(de.id))&&(Ke.current=!0,b("🎉 Fase 4 Desbloqueada! Testes Automatizados","unlock"),le("phase4"),setTimeout(()=>le(null),2e3)),!vo.current&&Ke.current&&zo(eo[3].data).every(de=>de.id===T||Ce.includes(de.id))&&(vo.current=!0,b("🎉 Fase 5 Desbloqueada! Segurança & Autenticação","unlock"),le("phase5"),setTimeout(()=>le(null),2e3)),b("🔓 Novo tópico desbloqueado","unlock"),Ce}),D(re)}},[f,R,y,T,ve,Se,b]),ce=L.useCallback(()=>{D(null),O([]),Q({}),j({}),J({}),Oe(!1),Le.current=!1,ao.current=!1,Ke.current=!1,vo.current=!1,l(K.currentTopic,null),l(K.completed,[]),l(K.phase2Completed,[]),l(K.phase3Completed,[]),l(K.phase4Completed,[]),l(K.phase5Completed,[]),l(K.xp,0);for(const re of eo)for(const fe of re.data)for(const Ce of fe.topics)l(rs(Ce.id),void 0),l(is(Ce.id),void 0),l(ns(Ce.id),void 0);for(const re of eo)for(const fe of re.data)l(cs(fe.id),void 0);b("Progresso resetado com sucesso","success")},[l,b]);return s||!Z?d.jsx("div",{style:Bt.loading,children:"Carregando progresso..."}):d.jsxs(d.Fragment,{children:[d.jsx(Dm,{timerSeconds:ve&&H[ve.id]||0,moduleColor:ve==null?void 0:ve.color,xp:to,completedCount:z.length,totalTopics:R.length,currentPhase:Xe,onDashboardOpen:()=>Oe(!0)}),d.jsxs("div",{style:Bt.layout,children:[d.jsx(Bm,{allPhases:eo,currentTopicId:T,completedTopics:z,allTopics:R,isTopicUnlocked:Nm,onTopicClick:D,justUnlockedPhase:Re}),d.jsx("main",{style:Bt.main,children:d.jsx("div",{style:Bt.mainInner,children:N&&ve?d.jsx(op,{topic:N,module:ve,completedTopics:z,currentIndex:f,totalTopics:R.length,canAdvance:y,onPrevious:te,onNext:me,checklist:F[T],onChecklistChange:X,quizAnswers:(pe=Y[T])==null?void 0:pe.answers,quizSubmitted:(Ge=Y[T])==null?void 0:Ge.submitted,onQuizSubmit:ee,notes:U[T],onNotesChange:ae},T):d.jsx("div",{style:Bt.placeholder,children:"Selecione um tópico para começar"})})})]}),d.jsx(wm,{toasts:A,onDismiss:S}),ge&&d.jsx(xm,{modules:P,completedTopics:z,checklists:F,quizzes:Y,notes:U,timers:H,xp:to,onClose:()=>Oe(!1),onReset:ce})]})}bm.createRoot(document.getElementById("root")).render(d.jsx(Hp,{}));
