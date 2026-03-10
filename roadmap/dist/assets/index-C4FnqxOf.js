(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))y(E);new MutationObserver(E=>{for(const S of E)if(S.type==="childList")for(const R of S.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&y(R)}).observe(document,{childList:!0,subtree:!0});function c(E){const S={};return E.integrity&&(S.integrity=E.integrity),E.referrerPolicy&&(S.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?S.credentials="include":E.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function y(E){if(E.ep)return;E.ep=!0;const S=c(E);fetch(E.href,S)}})();var Ki={exports:{}},_t={},Yi={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function dm(){if(Jc)return ae;Jc=1;var l=Symbol.for("react.element"),C=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),R=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.iterator;function k(f){return f===null||typeof f!="object"?null:(f=w&&f[w]||f["@@iterator"],typeof f=="function"?f:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,W={};function U(f,I,J){this.props=f,this.context=I,this.refs=W,this.updater=J||K}U.prototype.isReactComponent={},U.prototype.setState=function(f,I){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,I,"setState")},U.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function G(){}G.prototype=U.prototype;function X(f,I,J){this.props=f,this.context=I,this.refs=W,this.updater=J||K}var ue=X.prototype=new G;ue.constructor=X,Z(ue,U.prototype),ue.isPureReactComponent=!0;var ye=Array.isArray,Fe=Object.prototype.hasOwnProperty,Re={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function Oe(f,I,J){var ee,te={},re=null,le=null;if(I!=null)for(ee in I.ref!==void 0&&(le=I.ref),I.key!==void 0&&(re=""+I.key),I)Fe.call(I,ee)&&!me.hasOwnProperty(ee)&&(te[ee]=I[ee]);var ie=arguments.length-2;if(ie===1)te.children=J;else if(1<ie){for(var V=Array(ie),oe=0;oe<ie;oe++)V[oe]=arguments[oe+2];te.children=V}if(f&&f.defaultProps)for(ee in ie=f.defaultProps,ie)te[ee]===void 0&&(te[ee]=ie[ee]);return{$$typeof:l,type:f,key:re,ref:le,props:te,_owner:Re.current}}function ro(f,I){return{$$typeof:l,type:f.type,key:I,ref:f.ref,props:f.props,_owner:f._owner}}function ge(f){return typeof f=="object"&&f!==null&&f.$$typeof===l}function Lo(f){var I={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(J){return I[J]})}var no=/\/+/g;function Ue(f,I){return typeof f=="object"&&f!==null&&f.key!=null?Lo(""+f.key):I.toString(36)}function Ye(f,I,J,ee,te){var re=typeof f;(re==="undefined"||re==="boolean")&&(f=null);var le=!1;if(f===null)le=!0;else switch(re){case"string":case"number":le=!0;break;case"object":switch(f.$$typeof){case l:case C:le=!0}}if(le)return le=f,te=te(le),f=ee===""?"."+Ue(le,0):ee,ye(te)?(J="",f!=null&&(J=f.replace(no,"$&/")+"/"),Ye(te,I,J,"",function(oe){return oe})):te!=null&&(ge(te)&&(te=ro(te,J+(!te.key||le&&le.key===te.key?"":(""+te.key).replace(no,"$&/")+"/")+f)),I.push(te)),1;if(le=0,ee=ee===""?".":ee+":",ye(f))for(var ie=0;ie<f.length;ie++){re=f[ie];var V=ee+Ue(re,ie);le+=Ye(re,I,J,V,te)}else if(V=k(f),typeof V=="function")for(f=V.call(f),ie=0;!(re=f.next()).done;)re=re.value,V=ee+Ue(re,ie++),le+=Ye(re,I,J,V,te);else if(re==="object")throw I=String(f),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return le}function io(f,I,J){if(f==null)return f;var ee=[],te=0;return Ye(f,ee,"","",function(re){return I.call(J,re,te++)}),ee}function _e(f){if(f._status===-1){var I=f._result;I=I(),I.then(function(J){(f._status===0||f._status===-1)&&(f._status=1,f._result=J)},function(J){(f._status===0||f._status===-1)&&(f._status=2,f._result=J)}),f._status===-1&&(f._status=0,f._result=I)}if(f._status===1)return f._result.default;throw f._result}var ve={current:null},D={transition:null},H={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:D,ReactCurrentOwner:Re};function L(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:io,forEach:function(f,I,J){io(f,function(){I.apply(this,arguments)},J)},count:function(f){var I=0;return io(f,function(){I++}),I},toArray:function(f){return io(f,function(I){return I})||[]},only:function(f){if(!ge(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},ae.Component=U,ae.Fragment=c,ae.Profiler=E,ae.PureComponent=X,ae.StrictMode=y,ae.Suspense=b,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,ae.act=L,ae.cloneElement=function(f,I,J){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var ee=Z({},f.props),te=f.key,re=f.ref,le=f._owner;if(I!=null){if(I.ref!==void 0&&(re=I.ref,le=Re.current),I.key!==void 0&&(te=""+I.key),f.type&&f.type.defaultProps)var ie=f.type.defaultProps;for(V in I)Fe.call(I,V)&&!me.hasOwnProperty(V)&&(ee[V]=I[V]===void 0&&ie!==void 0?ie[V]:I[V])}var V=arguments.length-2;if(V===1)ee.children=J;else if(1<V){ie=Array(V);for(var oe=0;oe<V;oe++)ie[oe]=arguments[oe+2];ee.children=ie}return{$$typeof:l,type:f.type,key:te,ref:re,props:ee,_owner:le}},ae.createContext=function(f){return f={$$typeof:R,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:S,_context:f},f.Consumer=f},ae.createElement=Oe,ae.createFactory=function(f){var I=Oe.bind(null,f);return I.type=f,I},ae.createRef=function(){return{current:null}},ae.forwardRef=function(f){return{$$typeof:A,render:f}},ae.isValidElement=ge,ae.lazy=function(f){return{$$typeof:z,_payload:{_status:-1,_result:f},_init:_e}},ae.memo=function(f,I){return{$$typeof:O,type:f,compare:I===void 0?null:I}},ae.startTransition=function(f){var I=D.transition;D.transition={};try{f()}finally{D.transition=I}},ae.unstable_act=L,ae.useCallback=function(f,I){return ve.current.useCallback(f,I)},ae.useContext=function(f){return ve.current.useContext(f)},ae.useDebugValue=function(){},ae.useDeferredValue=function(f){return ve.current.useDeferredValue(f)},ae.useEffect=function(f,I){return ve.current.useEffect(f,I)},ae.useId=function(){return ve.current.useId()},ae.useImperativeHandle=function(f,I,J){return ve.current.useImperativeHandle(f,I,J)},ae.useInsertionEffect=function(f,I){return ve.current.useInsertionEffect(f,I)},ae.useLayoutEffect=function(f,I){return ve.current.useLayoutEffect(f,I)},ae.useMemo=function(f,I){return ve.current.useMemo(f,I)},ae.useReducer=function(f,I,J){return ve.current.useReducer(f,I,J)},ae.useRef=function(f){return ve.current.useRef(f)},ae.useState=function(f){return ve.current.useState(f)},ae.useSyncExternalStore=function(f,I,J){return ve.current.useSyncExternalStore(f,I,J)},ae.useTransition=function(){return ve.current.useTransition()},ae.version="18.3.1",ae}var Zc;function ts(){return Zc||(Zc=1,Yi.exports=dm()),Yi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function um(){if(ed)return _t;ed=1;var l=ts(),C=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,E=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function R(A,b,O){var z,w={},k=null,K=null;O!==void 0&&(k=""+O),b.key!==void 0&&(k=""+b.key),b.ref!==void 0&&(K=b.ref);for(z in b)y.call(b,z)&&!S.hasOwnProperty(z)&&(w[z]=b[z]);if(A&&A.defaultProps)for(z in b=A.defaultProps,b)w[z]===void 0&&(w[z]=b[z]);return{$$typeof:C,type:A,key:k,ref:K,props:w,_owner:E.current}}return _t.Fragment=c,_t.jsx=R,_t.jsxs=R,_t}var od;function mm(){return od||(od=1,Ki.exports=um()),Ki.exports}var d=mm(),Kr={},Xi={exports:{}},to={},Ji={exports:{}},Zi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function pm(){return ad||(ad=1,(function(l){function C(D,H){var L=D.length;D.push(H);e:for(;0<L;){var f=L-1>>>1,I=D[f];if(0<E(I,H))D[f]=H,D[L]=I,L=f;else break e}}function c(D){return D.length===0?null:D[0]}function y(D){if(D.length===0)return null;var H=D[0],L=D.pop();if(L!==H){D[0]=L;e:for(var f=0,I=D.length,J=I>>>1;f<J;){var ee=2*(f+1)-1,te=D[ee],re=ee+1,le=D[re];if(0>E(te,L))re<I&&0>E(le,te)?(D[f]=le,D[re]=L,f=re):(D[f]=te,D[ee]=L,f=ee);else if(re<I&&0>E(le,L))D[f]=le,D[re]=L,f=re;else break e}}return H}function E(D,H){var L=D.sortIndex-H.sortIndex;return L!==0?L:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var S=performance;l.unstable_now=function(){return S.now()}}else{var R=Date,A=R.now();l.unstable_now=function(){return R.now()-A}}var b=[],O=[],z=1,w=null,k=3,K=!1,Z=!1,W=!1,U=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(D){for(var H=c(O);H!==null;){if(H.callback===null)y(O);else if(H.startTime<=D)y(O),H.sortIndex=H.expirationTime,C(b,H);else break;H=c(O)}}function ye(D){if(W=!1,ue(D),!Z)if(c(b)!==null)Z=!0,_e(Fe);else{var H=c(O);H!==null&&ve(ye,H.startTime-D)}}function Fe(D,H){Z=!1,W&&(W=!1,G(Oe),Oe=-1),K=!0;var L=k;try{for(ue(H),w=c(b);w!==null&&(!(w.expirationTime>H)||D&&!Lo());){var f=w.callback;if(typeof f=="function"){w.callback=null,k=w.priorityLevel;var I=f(w.expirationTime<=H);H=l.unstable_now(),typeof I=="function"?w.callback=I:w===c(b)&&y(b),ue(H)}else y(b);w=c(b)}if(w!==null)var J=!0;else{var ee=c(O);ee!==null&&ve(ye,ee.startTime-H),J=!1}return J}finally{w=null,k=L,K=!1}}var Re=!1,me=null,Oe=-1,ro=5,ge=-1;function Lo(){return!(l.unstable_now()-ge<ro)}function no(){if(me!==null){var D=l.unstable_now();ge=D;var H=!0;try{H=me(!0,D)}finally{H?Ue():(Re=!1,me=null)}}else Re=!1}var Ue;if(typeof X=="function")Ue=function(){X(no)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,io=Ye.port2;Ye.port1.onmessage=no,Ue=function(){io.postMessage(null)}}else Ue=function(){U(no,0)};function _e(D){me=D,Re||(Re=!0,Ue())}function ve(D,H){Oe=U(function(){D(l.unstable_now())},H)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_continueExecution=function(){Z||K||(Z=!0,_e(Fe))},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ro=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_getFirstCallbackNode=function(){return c(b)},l.unstable_next=function(D){switch(k){case 1:case 2:case 3:var H=3;break;default:H=k}var L=k;k=H;try{return D()}finally{k=L}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var L=k;k=D;try{return H()}finally{k=L}},l.unstable_scheduleCallback=function(D,H,L){var f=l.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?f+L:f):L=f,D){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=L+I,D={id:z++,callback:H,priorityLevel:D,startTime:L,expirationTime:I,sortIndex:-1},L>f?(D.sortIndex=L,C(O,D),c(b)===null&&D===c(O)&&(W?(G(Oe),Oe=-1):W=!0,ve(ye,L-f))):(D.sortIndex=I,C(b,D),Z||K||(Z=!0,_e(Fe))),D},l.unstable_shouldYield=Lo,l.unstable_wrapCallback=function(D){var H=k;return function(){var L=k;k=H;try{return D.apply(this,arguments)}finally{k=L}}}})(Zi)),Zi}var td;function fm(){return td||(td=1,Ji.exports=pm()),Ji.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function gm(){if(rd)return to;rd=1;var l=ts(),C=fm();function c(e){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,E={};function S(e,o){R(e,o),R(e+"Capture",o)}function R(e,o){for(E[e]=o,e=0;e<o.length;e++)y.add(o[e])}var A=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},w={};function k(e){return b.call(w,e)?!0:b.call(z,e)?!1:O.test(e)?w[e]=!0:(z[e]=!0,!1)}function K(e,o,a,t){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return t?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z(e,o,a,t){if(o===null||typeof o>"u"||K(e,o,a,t))return!0;if(t)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function W(e,o,a,t,r,n,i){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=t,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=o,this.sanitizeURL=n,this.removeEmptyString=i}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var o=e[0];U[o]=new W(o,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var o=e.replace(G,X);U[o]=new W(o,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var o=e.replace(G,X);U[o]=new W(o,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var o=e.replace(G,X);U[o]=new W(o,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ue(e,o,a,t){var r=U.hasOwnProperty(o)?U[o]:null;(r!==null?r.type!==0:t||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(Z(o,a,r,t)&&(a=null),t||r===null?k(o)&&(a===null?e.removeAttribute(o):e.setAttribute(o,""+a)):r.mustUseProperty?e[r.propertyName]=a===null?r.type===3?!1:"":a:(o=r.attributeName,t=r.attributeNamespace,a===null?e.removeAttribute(o):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,t?e.setAttributeNS(t,o,a):e.setAttribute(o,a))))}var ye=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fe=Symbol.for("react.element"),Re=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),ro=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),Lo=Symbol.for("react.context"),no=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),io=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),D=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,f;function I(e){if(f===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);f=o&&o[1]||""}return`
`+f+e}var J=!1;function ee(e,o){if(!e||J)return"";J=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(h){var t=h}Reflect.construct(e,[],o)}else{try{o.call()}catch(h){t=h}e.call(o.prototype)}else{try{throw Error()}catch(h){t=h}e()}}catch(h){if(h&&t&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),n=t.stack.split(`
`),i=r.length-1,s=n.length-1;1<=i&&0<=s&&r[i]!==n[s];)s--;for(;1<=i&&0<=s;i--,s--)if(r[i]!==n[s]){if(i!==1||s!==1)do if(i--,s--,0>s||r[i]!==n[s]){var u=`
`+r[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{J=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?I(e):""}function te(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case Re:return"Portal";case ro:return"Profiler";case Oe:return"StrictMode";case Ue:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lo:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case no:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case io:return o=e.displayName||null,o!==null?o:re(e.type)||"Memo";case _e:o=e._payload,e=e._init;try{return re(e(o))}catch{}}return null}function le(e){var o=e.type;switch(e.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=o.render,e=e.displayName||e.name||"",o.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(o);case 8:return o===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function V(e){var o=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function oe(e){var o=V(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,o),t=""+e[o];if(!e.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,n=a.set;return Object.defineProperty(e,o,{configurable:!0,get:function(){return r.call(this)},set:function(i){t=""+i,n.call(this,i)}}),Object.defineProperty(e,o,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[o]}}}}function pe(e){e._valueTracker||(e._valueTracker=oe(e))}function Be(e){if(!e)return!1;var o=e._valueTracker;if(!o)return!0;var a=o.getValue(),t="";return e&&(t=V(e)?e.checked?"true":"false":e.value),e=t,e!==a?(o.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xe(e,o){var a=o.checked;return L({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function ns(e,o){var a=o.defaultValue==null?"":o.defaultValue,t=o.checked!=null?o.checked:o.defaultChecked;a=ie(o.value!=null?o.value:a),e._wrapperState={initialChecked:t,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function is(e,o){o=o.checked,o!=null&&ue(e,"checked",o,!1)}function an(e,o){is(e,o);var a=ie(o.value),t=o.type;if(a!=null)t==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}o.hasOwnProperty("value")?tn(e,o.type,a):o.hasOwnProperty("defaultValue")&&tn(e,o.type,ie(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(e.defaultChecked=!!o.defaultChecked)}function ss(e,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var t=o.type;if(!(t!=="submit"&&t!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+e._wrapperState.initialValue,a||o===e.value||(e.value=o),e.defaultValue=o}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function tn(e,o,a){(o!=="number"||so(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Za=Array.isArray;function xa(e,o,a,t){if(e=e.options,o){o={};for(var r=0;r<a.length;r++)o["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=o.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&t&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),o=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,t&&(e[r].defaultSelected=!0);return}o!==null||e[r].disabled||(o=e[r])}o!==null&&(o.selected=!0)}}function rn(e,o){if(o.dangerouslySetInnerHTML!=null)throw Error(c(91));return L({},o,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ls(e,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(c(92));if(Za(a)){if(1<a.length)throw Error(c(93));a=a[0]}o=a}o==null&&(o=""),a=o}e._wrapperState={initialValue:ie(a)}}function cs(e,o){var a=ie(o.value),t=ie(o.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),o.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),t!=null&&(e.defaultValue=""+t)}function ds(e){var o=e.textContent;o===e._wrapperState.initialValue&&o!==""&&o!==null&&(e.value=o)}function us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nn(e,o){return e==null||e==="http://www.w3.org/1999/xhtml"?us(o):e==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ut,ms=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,t,r){MSApp.execUnsafeLocalFunction(function(){return e(o,a,t,r)})}:e})(function(e,o){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=o;else{for(Ut=Ut||document.createElement("div"),Ut.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ut.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;o.firstChild;)e.appendChild(o.firstChild)}});function et(e,o){if(o){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=o;return}}e.textContent=o}var ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fd=["Webkit","ms","Moz","O"];Object.keys(ot).forEach(function(e){fd.forEach(function(o){o=o+e.charAt(0).toUpperCase()+e.substring(1),ot[o]=ot[e]})});function ps(e,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||ot.hasOwnProperty(e)&&ot[e]?(""+o).trim():o+"px"}function fs(e,o){e=e.style;for(var a in o)if(o.hasOwnProperty(a)){var t=a.indexOf("--")===0,r=ps(a,o[a],t);a==="float"&&(a="cssFloat"),t?e.setProperty(a,r):e[a]=r}}var gd=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sn(e,o){if(o){if(gd[e]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(c(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(c(61))}if(o.style!=null&&typeof o.style!="object")throw Error(c(62))}}function ln(e,o){if(e.indexOf("-")===-1)return typeof o.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cn=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,Pa=null,Aa=null;function gs(e){if(e=It(e)){if(typeof un!="function")throw Error(c(280));var o=e.stateNode;o&&(o=dr(o),un(e.stateNode,e.type,o))}}function vs(e){Pa?Aa?Aa.push(e):Aa=[e]:Pa=e}function Cs(){if(Pa){var e=Pa,o=Aa;if(Aa=Pa=null,gs(e),o)for(e=0;e<o.length;e++)gs(o[e])}}function hs(e,o){return e(o)}function Ss(){}var mn=!1;function Es(e,o,a){if(mn)return e(o,a);mn=!0;try{return hs(e,o,a)}finally{mn=!1,(Pa!==null||Aa!==null)&&(Ss(),Cs())}}function at(e,o){var a=e.stateNode;if(a===null)return null;var t=dr(a);if(t===null)return null;a=t[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,o,typeof a));return a}var pn=!1;if(A)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){pn=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{pn=!1}function vd(e,o,a,t,r,n,i,s,u){var h=Array.prototype.slice.call(arguments,3);try{o.apply(a,h)}catch(x){this.onError(x)}}var rt=!1,Bt=null,Wt=!1,fn=null,Cd={onError:function(e){rt=!0,Bt=e}};function hd(e,o,a,t,r,n,i,s,u){rt=!1,Bt=null,vd.apply(Cd,arguments)}function Sd(e,o,a,t,r,n,i,s,u){if(hd.apply(this,arguments),rt){if(rt){var h=Bt;rt=!1,Bt=null}else throw Error(c(198));Wt||(Wt=!0,fn=h)}}function ua(e){var o=e,a=e;if(e.alternate)for(;o.return;)o=o.return;else{e=o;do o=e,(o.flags&4098)!==0&&(a=o.return),e=o.return;while(e)}return o.tag===3?a:null}function ys(e){if(e.tag===13){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function bs(e){if(ua(e)!==e)throw Error(c(188))}function Ed(e){var o=e.alternate;if(!o){if(o=ua(e),o===null)throw Error(c(188));return o!==e?null:e}for(var a=e,t=o;;){var r=a.return;if(r===null)break;var n=r.alternate;if(n===null){if(t=r.return,t!==null){a=t;continue}break}if(r.child===n.child){for(n=r.child;n;){if(n===a)return bs(r),e;if(n===t)return bs(r),o;n=n.sibling}throw Error(c(188))}if(a.return!==t.return)a=r,t=n;else{for(var i=!1,s=r.child;s;){if(s===a){i=!0,a=r,t=n;break}if(s===t){i=!0,t=r,a=n;break}s=s.sibling}if(!i){for(s=n.child;s;){if(s===a){i=!0,a=n,t=r;break}if(s===t){i=!0,t=n,a=r;break}s=s.sibling}if(!i)throw Error(c(189))}}if(a.alternate!==t)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:o}function Is(e){return e=Ed(e),e!==null?Ts(e):null}function Ts(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var o=Ts(e);if(o!==null)return o;e=e.sibling}return null}var xs=C.unstable_scheduleCallback,Ps=C.unstable_cancelCallback,yd=C.unstable_shouldYield,bd=C.unstable_requestPaint,xe=C.unstable_now,Id=C.unstable_getCurrentPriorityLevel,gn=C.unstable_ImmediatePriority,As=C.unstable_UserBlockingPriority,Ht=C.unstable_NormalPriority,Td=C.unstable_LowPriority,Rs=C.unstable_IdlePriority,Vt=null,No=null;function xd(e){if(No&&typeof No.onCommitFiberRoot=="function")try{No.onCommitFiberRoot(Vt,e,void 0,(e.current.flags&128)===128)}catch{}}var So=Math.clz32?Math.clz32:Rd,Pd=Math.log,Ad=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Pd(e)/Ad|0)|0}var Gt=64,$t=4194304;function nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qt(e,o){var a=e.pendingLanes;if(a===0)return 0;var t=0,r=e.suspendedLanes,n=e.pingedLanes,i=a&268435455;if(i!==0){var s=i&~r;s!==0?t=nt(s):(n&=i,n!==0&&(t=nt(n)))}else i=a&~r,i!==0?t=nt(i):n!==0&&(t=nt(n));if(t===0)return 0;if(o!==0&&o!==t&&(o&r)===0&&(r=t&-t,n=o&-o,r>=n||r===16&&(n&4194240)!==0))return o;if((t&4)!==0&&(t|=a&16),o=e.entangledLanes,o!==0)for(e=e.entanglements,o&=t;0<o;)a=31-So(o),r=1<<a,t|=e[a],o&=~r;return t}function Nd(e,o){switch(e){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dd(e,o){for(var a=e.suspendedLanes,t=e.pingedLanes,r=e.expirationTimes,n=e.pendingLanes;0<n;){var i=31-So(n),s=1<<i,u=r[i];u===-1?((s&a)===0||(s&t)!==0)&&(r[i]=Nd(s,o)):u<=o&&(e.expiredLanes|=s),n&=~s}}function vn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ns(){var e=Gt;return Gt<<=1,(Gt&4194240)===0&&(Gt=64),e}function Cn(e){for(var o=[],a=0;31>a;a++)o.push(e);return o}function it(e,o,a){e.pendingLanes|=o,o!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,o=31-So(o),e[o]=a}function Od(e,o){var a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<a;){var r=31-So(a),n=1<<r;o[r]=0,t[r]=-1,e[r]=-1,a&=~n}}function hn(e,o){var a=e.entangledLanes|=o;for(e=e.entanglements;a;){var t=31-So(a),r=1<<t;r&o|e[t]&o&&(e[t]|=o),a&=~r}}var ce=0;function Ds(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Os,Sn,ws,qs,Ls,En=!1,Kt=[],Vo=null,Go=null,$o=null,st=new Map,lt=new Map,Qo=[],wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ks(e,o){switch(e){case"focusin":case"focusout":Vo=null;break;case"dragenter":case"dragleave":Go=null;break;case"mouseover":case"mouseout":$o=null;break;case"pointerover":case"pointerout":st.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":lt.delete(o.pointerId)}}function ct(e,o,a,t,r,n){return e===null||e.nativeEvent!==n?(e={blockedOn:o,domEventName:a,eventSystemFlags:t,nativeEvent:n,targetContainers:[r]},o!==null&&(o=It(o),o!==null&&Sn(o)),e):(e.eventSystemFlags|=t,o=e.targetContainers,r!==null&&o.indexOf(r)===-1&&o.push(r),e)}function qd(e,o,a,t,r){switch(o){case"focusin":return Vo=ct(Vo,e,o,a,t,r),!0;case"dragenter":return Go=ct(Go,e,o,a,t,r),!0;case"mouseover":return $o=ct($o,e,o,a,t,r),!0;case"pointerover":var n=r.pointerId;return st.set(n,ct(st.get(n)||null,e,o,a,t,r)),!0;case"gotpointercapture":return n=r.pointerId,lt.set(n,ct(lt.get(n)||null,e,o,a,t,r)),!0}return!1}function Ms(e){var o=ma(e.target);if(o!==null){var a=ua(o);if(a!==null){if(o=a.tag,o===13){if(o=ys(a),o!==null){e.blockedOn=o,Ls(e.priority,function(){ws(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yt(e){if(e.blockedOn!==null)return!1;for(var o=e.targetContainers;0<o.length;){var a=bn(e.domEventName,e.eventSystemFlags,o[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var t=new a.constructor(a.type,a);cn=t,a.target.dispatchEvent(t),cn=null}else return o=It(a),o!==null&&Sn(o),e.blockedOn=a,!1;o.shift()}return!0}function Fs(e,o,a){Yt(e)&&a.delete(o)}function Ld(){En=!1,Vo!==null&&Yt(Vo)&&(Vo=null),Go!==null&&Yt(Go)&&(Go=null),$o!==null&&Yt($o)&&($o=null),st.forEach(Fs),lt.forEach(Fs)}function dt(e,o){e.blockedOn===o&&(e.blockedOn=null,En||(En=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,Ld)))}function ut(e){function o(r){return dt(r,e)}if(0<Kt.length){dt(Kt[0],e);for(var a=1;a<Kt.length;a++){var t=Kt[a];t.blockedOn===e&&(t.blockedOn=null)}}for(Vo!==null&&dt(Vo,e),Go!==null&&dt(Go,e),$o!==null&&dt($o,e),st.forEach(o),lt.forEach(o),a=0;a<Qo.length;a++)t=Qo[a],t.blockedOn===e&&(t.blockedOn=null);for(;0<Qo.length&&(a=Qo[0],a.blockedOn===null);)Ms(a),a.blockedOn===null&&Qo.shift()}var Ra=ye.ReactCurrentBatchConfig,Xt=!0;function kd(e,o,a,t){var r=ce,n=Ra.transition;Ra.transition=null;try{ce=1,yn(e,o,a,t)}finally{ce=r,Ra.transition=n}}function Md(e,o,a,t){var r=ce,n=Ra.transition;Ra.transition=null;try{ce=4,yn(e,o,a,t)}finally{ce=r,Ra.transition=n}}function yn(e,o,a,t){if(Xt){var r=bn(e,o,a,t);if(r===null)zn(e,o,t,Jt,a),ks(e,t);else if(qd(r,e,o,a,t))t.stopPropagation();else if(ks(e,t),o&4&&-1<wd.indexOf(e)){for(;r!==null;){var n=It(r);if(n!==null&&Os(n),n=bn(e,o,a,t),n===null&&zn(e,o,t,Jt,a),n===r)break;r=n}r!==null&&t.stopPropagation()}else zn(e,o,t,null,a)}}var Jt=null;function bn(e,o,a,t){if(Jt=null,e=dn(t),e=ma(e),e!==null)if(o=ua(e),o===null)e=null;else if(a=o.tag,a===13){if(e=ys(o),e!==null)return e;e=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;e=null}else o!==e&&(e=null);return Jt=e,null}function _s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case gn:return 1;case As:return 4;case Ht:case Td:return 16;case Rs:return 536870912;default:return 16}default:return 16}}var Ko=null,In=null,Zt=null;function zs(){if(Zt)return Zt;var e,o=In,a=o.length,t,r="value"in Ko?Ko.value:Ko.textContent,n=r.length;for(e=0;e<a&&o[e]===r[e];e++);var i=a-e;for(t=1;t<=i&&o[a-t]===r[n-t];t++);return Zt=r.slice(e,1<t?1-t:void 0)}function er(e){var o=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&o===13&&(e=13)):e=o,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function js(){return!1}function lo(e){function o(a,t,r,n,i){this._reactName=a,this._targetInst=r,this.type=t,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(n):n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?or:js,this.isPropagationStopped=js,this}return L(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),o}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tn=lo(Na),mt=L({},Na,{view:0,detail:0}),Fd=lo(mt),xn,Pn,pt,ar=L({},mt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(xn=e.screenX-pt.screenX,Pn=e.screenY-pt.screenY):Pn=xn=0,pt=e),xn)},movementY:function(e){return"movementY"in e?e.movementY:Pn}}),Us=lo(ar),_d=L({},ar,{dataTransfer:0}),zd=lo(_d),jd=L({},mt,{relatedTarget:0}),An=lo(jd),Ud=L({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=lo(Ud),Wd=L({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hd=lo(Wd),Vd=L({},Na,{data:0}),Bs=lo(Vd),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(e){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(e):(e=Qd[e])?!!o[e]:!1}function Rn(){return Kd}var Yd=L({},mt,{key:function(e){if(e.key){var o=Gd[e.key]||e.key;if(o!=="Unidentified")return o}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xd=lo(Yd),Jd=L({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ws=lo(Jd),Zd=L({},mt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn}),eu=lo(Zd),ou=L({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),au=lo(ou),tu=L({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ru=lo(tu),nu=[9,13,27,32],Nn=A&&"CompositionEvent"in window,ft=null;A&&"documentMode"in document&&(ft=document.documentMode);var iu=A&&"TextEvent"in window&&!ft,Hs=A&&(!Nn||ft&&8<ft&&11>=ft),Vs=" ",Gs=!1;function $s(e,o){switch(e){case"keyup":return nu.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Da=!1;function su(e,o){switch(e){case"compositionend":return Qs(o);case"keypress":return o.which!==32?null:(Gs=!0,Vs);case"textInput":return e=o.data,e===Vs&&Gs?null:e;default:return null}}function lu(e,o){if(Da)return e==="compositionend"||!Nn&&$s(e,o)?(e=zs(),Zt=In=Ko=null,Da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Hs&&o.locale!=="ko"?null:o.data;default:return null}}var cu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ks(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o==="input"?!!cu[e.type]:o==="textarea"}function Ys(e,o,a,t){vs(t),o=sr(o,"onChange"),0<o.length&&(a=new Tn("onChange","change",null,a,t),e.push({event:a,listeners:o}))}var gt=null,vt=null;function du(e){fl(e,0)}function tr(e){var o=ka(e);if(Be(o))return e}function uu(e,o){if(e==="change")return o}var Xs=!1;if(A){var Dn;if(A){var On="oninput"in document;if(!On){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),On=typeof Js.oninput=="function"}Dn=On}else Dn=!1;Xs=Dn&&(!document.documentMode||9<document.documentMode)}function Zs(){gt&&(gt.detachEvent("onpropertychange",el),vt=gt=null)}function el(e){if(e.propertyName==="value"&&tr(vt)){var o=[];Ys(o,vt,e,dn(e)),Es(du,o)}}function mu(e,o,a){e==="focusin"?(Zs(),gt=o,vt=a,gt.attachEvent("onpropertychange",el)):e==="focusout"&&Zs()}function pu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tr(vt)}function fu(e,o){if(e==="click")return tr(o)}function gu(e,o){if(e==="input"||e==="change")return tr(o)}function vu(e,o){return e===o&&(e!==0||1/e===1/o)||e!==e&&o!==o}var Eo=typeof Object.is=="function"?Object.is:vu;function Ct(e,o){if(Eo(e,o))return!0;if(typeof e!="object"||e===null||typeof o!="object"||o===null)return!1;var a=Object.keys(e),t=Object.keys(o);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var r=a[t];if(!b.call(o,r)||!Eo(e[r],o[r]))return!1}return!0}function ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function al(e,o){var a=ol(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=o&&t>=o)return{node:a,offset:o-e};e=t}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ol(a)}}function tl(e,o){return e&&o?e===o?!0:e&&e.nodeType===3?!1:o&&o.nodeType===3?tl(e,o.parentNode):"contains"in e?e.contains(o):e.compareDocumentPosition?!!(e.compareDocumentPosition(o)&16):!1:!1}function rl(){for(var e=window,o=so();o instanceof e.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)e=o.contentWindow;else break;o=so(e.document)}return o}function wn(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o&&(o==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||o==="textarea"||e.contentEditable==="true")}function Cu(e){var o=rl(),a=e.focusedElem,t=e.selectionRange;if(o!==a&&a&&a.ownerDocument&&tl(a.ownerDocument.documentElement,a)){if(t!==null&&wn(a)){if(o=t.start,e=t.end,e===void 0&&(e=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(e,a.value.length);else if(e=(o=a.ownerDocument||document)&&o.defaultView||window,e.getSelection){e=e.getSelection();var r=a.textContent.length,n=Math.min(t.start,r);t=t.end===void 0?n:Math.min(t.end,r),!e.extend&&n>t&&(r=t,t=n,n=r),r=al(a,n);var i=al(a,t);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(o=o.createRange(),o.setStart(r.node,r.offset),e.removeAllRanges(),n>t?(e.addRange(o),e.extend(i.node,i.offset)):(o.setEnd(i.node,i.offset),e.addRange(o)))}}for(o=[],e=a;e=e.parentNode;)e.nodeType===1&&o.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)e=o[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hu=A&&"documentMode"in document&&11>=document.documentMode,Oa=null,qn=null,ht=null,Ln=!1;function nl(e,o,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ln||Oa==null||Oa!==so(t)||(t=Oa,"selectionStart"in t&&wn(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ht&&Ct(ht,t)||(ht=t,t=sr(qn,"onSelect"),0<t.length&&(o=new Tn("onSelect","select",null,o,a),e.push({event:o,listeners:t}),o.target=Oa)))}function rr(e,o){var a={};return a[e.toLowerCase()]=o.toLowerCase(),a["Webkit"+e]="webkit"+o,a["Moz"+e]="moz"+o,a}var wa={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionend:rr("Transition","TransitionEnd")},kn={},il={};A&&(il=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function nr(e){if(kn[e])return kn[e];if(!wa[e])return e;var o=wa[e],a;for(a in o)if(o.hasOwnProperty(a)&&a in il)return kn[e]=o[a];return e}var sl=nr("animationend"),ll=nr("animationiteration"),cl=nr("animationstart"),dl=nr("transitionend"),ul=new Map,ml="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yo(e,o){ul.set(e,o),S(o,[e])}for(var Mn=0;Mn<ml.length;Mn++){var Fn=ml[Mn],Su=Fn.toLowerCase(),Eu=Fn[0].toUpperCase()+Fn.slice(1);Yo(Su,"on"+Eu)}Yo(sl,"onAnimationEnd"),Yo(ll,"onAnimationIteration"),Yo(cl,"onAnimationStart"),Yo("dblclick","onDoubleClick"),Yo("focusin","onFocus"),Yo("focusout","onBlur"),Yo(dl,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var St="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yu=new Set("cancel close invalid load scroll toggle".split(" ").concat(St));function pl(e,o,a){var t=e.type||"unknown-event";e.currentTarget=a,Sd(t,o,void 0,e),e.currentTarget=null}function fl(e,o){o=(o&4)!==0;for(var a=0;a<e.length;a++){var t=e[a],r=t.event;t=t.listeners;e:{var n=void 0;if(o)for(var i=t.length-1;0<=i;i--){var s=t[i],u=s.instance,h=s.currentTarget;if(s=s.listener,u!==n&&r.isPropagationStopped())break e;pl(r,s,h),n=u}else for(i=0;i<t.length;i++){if(s=t[i],u=s.instance,h=s.currentTarget,s=s.listener,u!==n&&r.isPropagationStopped())break e;pl(r,s,h),n=u}}}if(Wt)throw e=fn,Wt=!1,fn=null,e}function Ce(e,o){var a=o[Vn];a===void 0&&(a=o[Vn]=new Set);var t=e+"__bubble";a.has(t)||(gl(o,e,2,!1),a.add(t))}function _n(e,o,a){var t=0;o&&(t|=4),gl(a,e,t,o)}var ir="_reactListening"+Math.random().toString(36).slice(2);function Et(e){if(!e[ir]){e[ir]=!0,y.forEach(function(a){a!=="selectionchange"&&(yu.has(a)||_n(a,!1,e),_n(a,!0,e))});var o=e.nodeType===9?e:e.ownerDocument;o===null||o[ir]||(o[ir]=!0,_n("selectionchange",!1,o))}}function gl(e,o,a,t){switch(_s(o)){case 1:var r=kd;break;case 4:r=Md;break;default:r=yn}a=r.bind(null,o,a,e),r=void 0,!pn||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(r=!0),t?r!==void 0?e.addEventListener(o,a,{capture:!0,passive:r}):e.addEventListener(o,a,!0):r!==void 0?e.addEventListener(o,a,{passive:r}):e.addEventListener(o,a,!1)}function zn(e,o,a,t,r){var n=t;if((o&1)===0&&(o&2)===0&&t!==null)e:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var s=t.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(i===4)for(i=t.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;i=i.return}for(;s!==null;){if(i=ma(s),i===null)return;if(u=i.tag,u===5||u===6){t=n=i;continue e}s=s.parentNode}}t=t.return}Es(function(){var h=n,x=dn(a),P=[];e:{var T=ul.get(e);if(T!==void 0){var q=Tn,_=e;switch(e){case"keypress":if(er(a)===0)break e;case"keydown":case"keyup":q=Xd;break;case"focusin":_="focus",q=An;break;case"focusout":_="blur",q=An;break;case"beforeblur":case"afterblur":q=An;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=eu;break;case sl:case ll:case cl:q=Bd;break;case dl:q=au;break;case"scroll":q=Fd;break;case"wheel":q=ru;break;case"copy":case"cut":case"paste":q=Hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Ws}var j=(o&4)!==0,Pe=!j&&e==="scroll",g=j?T!==null?T+"Capture":null:T;j=[];for(var p=h,v;p!==null;){v=p;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,g!==null&&(N=at(p,g),N!=null&&j.push(yt(p,N,v)))),Pe)break;p=p.return}0<j.length&&(T=new q(T,_,null,a,x),P.push({event:T,listeners:j}))}}if((o&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",T&&a!==cn&&(_=a.relatedTarget||a.fromElement)&&(ma(_)||_[ko]))break e;if((q||T)&&(T=x.window===x?x:(T=x.ownerDocument)?T.defaultView||T.parentWindow:window,q?(_=a.relatedTarget||a.toElement,q=h,_=_?ma(_):null,_!==null&&(Pe=ua(_),_!==Pe||_.tag!==5&&_.tag!==6)&&(_=null)):(q=null,_=h),q!==_)){if(j=Us,N="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=Ws,N="onPointerLeave",g="onPointerEnter",p="pointer"),Pe=q==null?T:ka(q),v=_==null?T:ka(_),T=new j(N,p+"leave",q,a,x),T.target=Pe,T.relatedTarget=v,N=null,ma(x)===h&&(j=new j(g,p+"enter",_,a,x),j.target=v,j.relatedTarget=Pe,N=j),Pe=N,q&&_)o:{for(j=q,g=_,p=0,v=j;v;v=qa(v))p++;for(v=0,N=g;N;N=qa(N))v++;for(;0<p-v;)j=qa(j),p--;for(;0<v-p;)g=qa(g),v--;for(;p--;){if(j===g||g!==null&&j===g.alternate)break o;j=qa(j),g=qa(g)}j=null}else j=null;q!==null&&vl(P,T,q,j,!1),_!==null&&Pe!==null&&vl(P,Pe,_,j,!0)}}e:{if(T=h?ka(h):window,q=T.nodeName&&T.nodeName.toLowerCase(),q==="select"||q==="input"&&T.type==="file")var B=uu;else if(Ks(T))if(Xs)B=gu;else{B=pu;var $=mu}else(q=T.nodeName)&&q.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(B=fu);if(B&&(B=B(e,h))){Ys(P,B,a,x);break e}$&&$(e,T,h),e==="focusout"&&($=T._wrapperState)&&$.controlled&&T.type==="number"&&tn(T,"number",T.value)}switch($=h?ka(h):window,e){case"focusin":(Ks($)||$.contentEditable==="true")&&(Oa=$,qn=h,ht=null);break;case"focusout":ht=qn=Oa=null;break;case"mousedown":Ln=!0;break;case"contextmenu":case"mouseup":case"dragend":Ln=!1,nl(P,a,x);break;case"selectionchange":if(hu)break;case"keydown":case"keyup":nl(P,a,x)}var Q;if(Nn)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Da?$s(e,a)&&(Y="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Y="onCompositionStart");Y&&(Hs&&a.locale!=="ko"&&(Da||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Da&&(Q=zs()):(Ko=x,In="value"in Ko?Ko.value:Ko.textContent,Da=!0)),$=sr(h,Y),0<$.length&&(Y=new Bs(Y,e,null,a,x),P.push({event:Y,listeners:$}),Q?Y.data=Q:(Q=Qs(a),Q!==null&&(Y.data=Q)))),(Q=iu?su(e,a):lu(e,a))&&(h=sr(h,"onBeforeInput"),0<h.length&&(x=new Bs("onBeforeInput","beforeinput",null,a,x),P.push({event:x,listeners:h}),x.data=Q))}fl(P,o)})}function yt(e,o,a){return{instance:e,listener:o,currentTarget:a}}function sr(e,o){for(var a=o+"Capture",t=[];e!==null;){var r=e,n=r.stateNode;r.tag===5&&n!==null&&(r=n,n=at(e,a),n!=null&&t.unshift(yt(e,n,r)),n=at(e,o),n!=null&&t.push(yt(e,n,r))),e=e.return}return t}function qa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vl(e,o,a,t,r){for(var n=o._reactName,i=[];a!==null&&a!==t;){var s=a,u=s.alternate,h=s.stateNode;if(u!==null&&u===t)break;s.tag===5&&h!==null&&(s=h,r?(u=at(a,n),u!=null&&i.unshift(yt(a,u,s))):r||(u=at(a,n),u!=null&&i.push(yt(a,u,s)))),a=a.return}i.length!==0&&e.push({event:o,listeners:i})}var bu=/\r\n?/g,Iu=/\u0000|\uFFFD/g;function Cl(e){return(typeof e=="string"?e:""+e).replace(bu,`
`).replace(Iu,"")}function lr(e,o,a){if(o=Cl(o),Cl(e)!==o&&a)throw Error(c(425))}function cr(){}var jn=null,Un=null;function Bn(e,o){return e==="textarea"||e==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Wn=typeof setTimeout=="function"?setTimeout:void 0,Tu=typeof clearTimeout=="function"?clearTimeout:void 0,hl=typeof Promise=="function"?Promise:void 0,xu=typeof queueMicrotask=="function"?queueMicrotask:typeof hl<"u"?function(e){return hl.resolve(null).then(e).catch(Pu)}:Wn;function Pu(e){setTimeout(function(){throw e})}function Hn(e,o){var a=o,t=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0){e.removeChild(r),ut(o);return}t--}else a!=="$"&&a!=="$?"&&a!=="$!"||t++;a=r}while(a);ut(o)}function Xo(e){for(;e!=null;e=e.nextSibling){var o=e.nodeType;if(o===1||o===3)break;if(o===8){if(o=e.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return e}function Sl(e){e=e.previousSibling;for(var o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return e;o--}else a==="/$"&&o++}e=e.previousSibling}return null}var La=Math.random().toString(36).slice(2),Do="__reactFiber$"+La,bt="__reactProps$"+La,ko="__reactContainer$"+La,Vn="__reactEvents$"+La,Au="__reactListeners$"+La,Ru="__reactHandles$"+La;function ma(e){var o=e[Do];if(o)return o;for(var a=e.parentNode;a;){if(o=a[ko]||a[Do]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(e=Sl(e);e!==null;){if(a=e[Do])return a;e=Sl(e)}return o}e=a,a=e.parentNode}return null}function It(e){return e=e[Do]||e[ko],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ka(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function dr(e){return e[bt]||null}var Gn=[],Ma=-1;function Jo(e){return{current:e}}function he(e){0>Ma||(e.current=Gn[Ma],Gn[Ma]=null,Ma--)}function fe(e,o){Ma++,Gn[Ma]=e.current,e.current=o}var Zo={},We=Jo(Zo),Je=Jo(!1),pa=Zo;function Fa(e,o){var a=e.type.contextTypes;if(!a)return Zo;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===o)return t.__reactInternalMemoizedMaskedChildContext;var r={},n;for(n in a)r[n]=o[n];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ze(e){return e=e.childContextTypes,e!=null}function ur(){he(Je),he(We)}function El(e,o,a){if(We.current!==Zo)throw Error(c(168));fe(We,o),fe(Je,a)}function yl(e,o,a){var t=e.stateNode;if(o=o.childContextTypes,typeof t.getChildContext!="function")return a;t=t.getChildContext();for(var r in t)if(!(r in o))throw Error(c(108,le(e)||"Unknown",r));return L({},a,t)}function mr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zo,pa=We.current,fe(We,e),fe(Je,Je.current),!0}function bl(e,o,a){var t=e.stateNode;if(!t)throw Error(c(169));a?(e=yl(e,o,pa),t.__reactInternalMemoizedMergedChildContext=e,he(Je),he(We),fe(We,e)):he(Je),fe(Je,a)}var Mo=null,pr=!1,$n=!1;function Il(e){Mo===null?Mo=[e]:Mo.push(e)}function Nu(e){pr=!0,Il(e)}function ea(){if(!$n&&Mo!==null){$n=!0;var e=0,o=ce;try{var a=Mo;for(ce=1;e<a.length;e++){var t=a[e];do t=t(!0);while(t!==null)}Mo=null,pr=!1}catch(r){throw Mo!==null&&(Mo=Mo.slice(e+1)),xs(gn,ea),r}finally{ce=o,$n=!1}}return null}var _a=[],za=0,fr=null,gr=0,po=[],fo=0,fa=null,Fo=1,_o="";function ga(e,o){_a[za++]=gr,_a[za++]=fr,fr=e,gr=o}function Tl(e,o,a){po[fo++]=Fo,po[fo++]=_o,po[fo++]=fa,fa=e;var t=Fo;e=_o;var r=32-So(t)-1;t&=~(1<<r),a+=1;var n=32-So(o)+r;if(30<n){var i=r-r%5;n=(t&(1<<i)-1).toString(32),t>>=i,r-=i,Fo=1<<32-So(o)+r|a<<r|t,_o=n+e}else Fo=1<<n|a<<r|t,_o=e}function Qn(e){e.return!==null&&(ga(e,1),Tl(e,1,0))}function Kn(e){for(;e===fr;)fr=_a[--za],_a[za]=null,gr=_a[--za],_a[za]=null;for(;e===fa;)fa=po[--fo],po[fo]=null,_o=po[--fo],po[fo]=null,Fo=po[--fo],po[fo]=null}var co=null,uo=null,Ee=!1,yo=null;function xl(e,o){var a=ho(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=e,o=e.deletions,o===null?(e.deletions=[a],e.flags|=16):o.push(a)}function Pl(e,o){switch(e.tag){case 5:var a=e.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(e.stateNode=o,co=e,uo=Xo(o.firstChild),!0):!1;case 6:return o=e.pendingProps===""||o.nodeType!==3?null:o,o!==null?(e.stateNode=o,co=e,uo=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=fa!==null?{id:Fo,overflow:_o}:null,e.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=ho(18,null,null,0),a.stateNode=o,a.return=e,e.child=a,co=e,uo=null,!0):!1;default:return!1}}function Yn(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xn(e){if(Ee){var o=uo;if(o){var a=o;if(!Pl(e,o)){if(Yn(e))throw Error(c(418));o=Xo(a.nextSibling);var t=co;o&&Pl(e,o)?xl(t,a):(e.flags=e.flags&-4097|2,Ee=!1,co=e)}}else{if(Yn(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ee=!1,co=e}}}function Al(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;co=e}function vr(e){if(e!==co)return!1;if(!Ee)return Al(e),Ee=!0,!1;var o;if((o=e.tag!==3)&&!(o=e.tag!==5)&&(o=e.type,o=o!=="head"&&o!=="body"&&!Bn(e.type,e.memoizedProps)),o&&(o=uo)){if(Yn(e))throw Rl(),Error(c(418));for(;o;)xl(e,o),o=Xo(o.nextSibling)}if(Al(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(o===0){uo=Xo(e.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}e=e.nextSibling}uo=null}}else uo=co?Xo(e.stateNode.nextSibling):null;return!0}function Rl(){for(var e=uo;e;)e=Xo(e.nextSibling)}function ja(){uo=co=null,Ee=!1}function Jn(e){yo===null?yo=[e]:yo.push(e)}var Du=ye.ReactCurrentBatchConfig;function Tt(e,o,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(c(309));var t=a.stateNode}if(!t)throw Error(c(147,e));var r=t,n=""+e;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===n?o.ref:(o=function(i){var s=r.refs;i===null?delete s[n]:s[n]=i},o._stringRef=n,o)}if(typeof e!="string")throw Error(c(284));if(!a._owner)throw Error(c(290,e))}return e}function Cr(e,o){throw e=Object.prototype.toString.call(o),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":e))}function Nl(e){var o=e._init;return o(e._payload)}function Dl(e){function o(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function a(g,p){if(!e)return null;for(;p!==null;)o(g,p),p=p.sibling;return null}function t(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=la(g,p),g.index=0,g.sibling=null,g}function n(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,v,N){return p===null||p.tag!==6?(p=Wi(v,g.mode,N),p.return=g,p):(p=r(p,v),p.return=g,p)}function u(g,p,v,N){var B=v.type;return B===me?x(g,p,v.props.children,N,v.key):p!==null&&(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_e&&Nl(B)===p.type)?(N=r(p,v.props),N.ref=Tt(g,p,v),N.return=g,N):(N=Ur(v.type,v.key,v.props,null,g.mode,N),N.ref=Tt(g,p,v),N.return=g,N)}function h(g,p,v,N){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Hi(v,g.mode,N),p.return=g,p):(p=r(p,v.children||[]),p.return=g,p)}function x(g,p,v,N,B){return p===null||p.tag!==7?(p=Ia(v,g.mode,N,B),p.return=g,p):(p=r(p,v),p.return=g,p)}function P(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Wi(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fe:return v=Ur(p.type,p.key,p.props,null,g.mode,v),v.ref=Tt(g,null,p),v.return=g,v;case Re:return p=Hi(p,g.mode,v),p.return=g,p;case _e:var N=p._init;return P(g,N(p._payload),v)}if(Za(p)||H(p))return p=Ia(p,g.mode,v,null),p.return=g,p;Cr(g,p)}return null}function T(g,p,v,N){var B=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return B!==null?null:s(g,p,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fe:return v.key===B?u(g,p,v,N):null;case Re:return v.key===B?h(g,p,v,N):null;case _e:return B=v._init,T(g,p,B(v._payload),N)}if(Za(v)||H(v))return B!==null?null:x(g,p,v,N,null);Cr(g,v)}return null}function q(g,p,v,N,B){if(typeof N=="string"&&N!==""||typeof N=="number")return g=g.get(v)||null,s(p,g,""+N,B);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Fe:return g=g.get(N.key===null?v:N.key)||null,u(p,g,N,B);case Re:return g=g.get(N.key===null?v:N.key)||null,h(p,g,N,B);case _e:var $=N._init;return q(g,p,v,$(N._payload),B)}if(Za(N)||H(N))return g=g.get(v)||null,x(p,g,N,B,null);Cr(p,N)}return null}function _(g,p,v,N){for(var B=null,$=null,Q=p,Y=p=0,Le=null;Q!==null&&Y<v.length;Y++){Q.index>Y?(Le=Q,Q=null):Le=Q.sibling;var se=T(g,Q,v[Y],N);if(se===null){Q===null&&(Q=Le);break}e&&Q&&se.alternate===null&&o(g,Q),p=n(se,p,Y),$===null?B=se:$.sibling=se,$=se,Q=Le}if(Y===v.length)return a(g,Q),Ee&&ga(g,Y),B;if(Q===null){for(;Y<v.length;Y++)Q=P(g,v[Y],N),Q!==null&&(p=n(Q,p,Y),$===null?B=Q:$.sibling=Q,$=Q);return Ee&&ga(g,Y),B}for(Q=t(g,Q);Y<v.length;Y++)Le=q(Q,g,Y,v[Y],N),Le!==null&&(e&&Le.alternate!==null&&Q.delete(Le.key===null?Y:Le.key),p=n(Le,p,Y),$===null?B=Le:$.sibling=Le,$=Le);return e&&Q.forEach(function(ca){return o(g,ca)}),Ee&&ga(g,Y),B}function j(g,p,v,N){var B=H(v);if(typeof B!="function")throw Error(c(150));if(v=B.call(v),v==null)throw Error(c(151));for(var $=B=null,Q=p,Y=p=0,Le=null,se=v.next();Q!==null&&!se.done;Y++,se=v.next()){Q.index>Y?(Le=Q,Q=null):Le=Q.sibling;var ca=T(g,Q,se.value,N);if(ca===null){Q===null&&(Q=Le);break}e&&Q&&ca.alternate===null&&o(g,Q),p=n(ca,p,Y),$===null?B=ca:$.sibling=ca,$=ca,Q=Le}if(se.done)return a(g,Q),Ee&&ga(g,Y),B;if(Q===null){for(;!se.done;Y++,se=v.next())se=P(g,se.value,N),se!==null&&(p=n(se,p,Y),$===null?B=se:$.sibling=se,$=se);return Ee&&ga(g,Y),B}for(Q=t(g,Q);!se.done;Y++,se=v.next())se=q(Q,g,Y,se.value,N),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?Y:se.key),p=n(se,p,Y),$===null?B=se:$.sibling=se,$=se);return e&&Q.forEach(function(cm){return o(g,cm)}),Ee&&ga(g,Y),B}function Pe(g,p,v,N){if(typeof v=="object"&&v!==null&&v.type===me&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fe:e:{for(var B=v.key,$=p;$!==null;){if($.key===B){if(B=v.type,B===me){if($.tag===7){a(g,$.sibling),p=r($,v.props.children),p.return=g,g=p;break e}}else if($.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_e&&Nl(B)===$.type){a(g,$.sibling),p=r($,v.props),p.ref=Tt(g,$,v),p.return=g,g=p;break e}a(g,$);break}else o(g,$);$=$.sibling}v.type===me?(p=Ia(v.props.children,g.mode,N,v.key),p.return=g,g=p):(N=Ur(v.type,v.key,v.props,null,g.mode,N),N.ref=Tt(g,p,v),N.return=g,g=N)}return i(g);case Re:e:{for($=v.key;p!==null;){if(p.key===$)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){a(g,p.sibling),p=r(p,v.children||[]),p.return=g,g=p;break e}else{a(g,p);break}else o(g,p);p=p.sibling}p=Hi(v,g.mode,N),p.return=g,g=p}return i(g);case _e:return $=v._init,Pe(g,p,$(v._payload),N)}if(Za(v))return _(g,p,v,N);if(H(v))return j(g,p,v,N);Cr(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(a(g,p.sibling),p=r(p,v),p.return=g,g=p):(a(g,p),p=Wi(v,g.mode,N),p.return=g,g=p),i(g)):a(g,p)}return Pe}var Ua=Dl(!0),Ol=Dl(!1),hr=Jo(null),Sr=null,Ba=null,Zn=null;function ei(){Zn=Ba=Sr=null}function oi(e){var o=hr.current;he(hr),e._currentValue=o}function ai(e,o,a){for(;e!==null;){var t=e.alternate;if((e.childLanes&o)!==o?(e.childLanes|=o,t!==null&&(t.childLanes|=o)):t!==null&&(t.childLanes&o)!==o&&(t.childLanes|=o),e===a)break;e=e.return}}function Wa(e,o){Sr=e,Zn=Ba=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&o)!==0&&(eo=!0),e.firstContext=null)}function go(e){var o=e._currentValue;if(Zn!==e)if(e={context:e,memoizedValue:o,next:null},Ba===null){if(Sr===null)throw Error(c(308));Ba=e,Sr.dependencies={lanes:0,firstContext:e}}else Ba=Ba.next=e;return o}var va=null;function ti(e){va===null?va=[e]:va.push(e)}function wl(e,o,a,t){var r=o.interleaved;return r===null?(a.next=a,ti(o)):(a.next=r.next,r.next=a),o.interleaved=a,zo(e,t)}function zo(e,o){e.lanes|=o;var a=e.alternate;for(a!==null&&(a.lanes|=o),a=e,e=e.return;e!==null;)e.childLanes|=o,a=e.alternate,a!==null&&(a.childLanes|=o),a=e,e=e.return;return a.tag===3?a.stateNode:null}var oa=!1;function ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ql(e,o){e=e.updateQueue,o.updateQueue===e&&(o.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jo(e,o){return{eventTime:e,lane:o,tag:0,payload:null,callback:null,next:null}}function aa(e,o,a){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ne&2)!==0){var r=t.pending;return r===null?o.next=o:(o.next=r.next,r.next=o),t.pending=o,zo(e,a)}return r=t.interleaved,r===null?(o.next=o,ti(t)):(o.next=r.next,r.next=o),t.interleaved=o,zo(e,a)}function Er(e,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var t=o.lanes;t&=e.pendingLanes,a|=t,o.lanes=a,hn(e,a)}}function Ll(e,o){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var r=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var i={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};n===null?r=n=i:n=n.next=i,a=a.next}while(a!==null);n===null?r=n=o:n=n.next=o}else r=n=o;a={baseState:t.baseState,firstBaseUpdate:r,lastBaseUpdate:n,shared:t.shared,effects:t.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=o:e.next=o,a.lastBaseUpdate=o}function yr(e,o,a,t){var r=e.updateQueue;oa=!1;var n=r.firstBaseUpdate,i=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var u=s,h=u.next;u.next=null,i===null?n=h:i.next=h,i=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==i&&(s===null?x.firstBaseUpdate=h:s.next=h,x.lastBaseUpdate=u))}if(n!==null){var P=r.baseState;i=0,x=h=u=null,s=n;do{var T=s.lane,q=s.eventTime;if((t&T)===T){x!==null&&(x=x.next={eventTime:q,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,j=s;switch(T=o,q=a,j.tag){case 1:if(_=j.payload,typeof _=="function"){P=_.call(q,P,T);break e}P=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=j.payload,T=typeof _=="function"?_.call(q,P,T):_,T==null)break e;P=L({},P,T);break e;case 2:oa=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,T=r.effects,T===null?r.effects=[s]:T.push(s))}else q={eventTime:q,lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(h=x=q,u=P):x=x.next=q,i|=T;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;T=s,s=T.next,T.next=null,r.lastBaseUpdate=T,r.shared.pending=null}}while(!0);if(x===null&&(u=P),r.baseState=u,r.firstBaseUpdate=h,r.lastBaseUpdate=x,o=r.shared.interleaved,o!==null){r=o;do i|=r.lane,r=r.next;while(r!==o)}else n===null&&(r.shared.lanes=0);Sa|=i,e.lanes=i,e.memoizedState=P}}function kl(e,o,a){if(e=o.effects,o.effects=null,e!==null)for(o=0;o<e.length;o++){var t=e[o],r=t.callback;if(r!==null){if(t.callback=null,t=a,typeof r!="function")throw Error(c(191,r));r.call(t)}}}var xt={},Oo=Jo(xt),Pt=Jo(xt),At=Jo(xt);function Ca(e){if(e===xt)throw Error(c(174));return e}function ni(e,o){switch(fe(At,o),fe(Pt,e),fe(Oo,xt),e=o.nodeType,e){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:nn(null,"");break;default:e=e===8?o.parentNode:o,o=e.namespaceURI||null,e=e.tagName,o=nn(o,e)}he(Oo),fe(Oo,o)}function Ha(){he(Oo),he(Pt),he(At)}function Ml(e){Ca(At.current);var o=Ca(Oo.current),a=nn(o,e.type);o!==a&&(fe(Pt,e),fe(Oo,a))}function ii(e){Pt.current===e&&(he(Oo),he(Pt))}var be=Jo(0);function br(e){for(var o=e;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var si=[];function li(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var Ir=ye.ReactCurrentDispatcher,ci=ye.ReactCurrentBatchConfig,ha=0,Ie=null,Ne=null,we=null,Tr=!1,Rt=!1,Nt=0,Ou=0;function He(){throw Error(c(321))}function di(e,o){if(o===null)return!1;for(var a=0;a<o.length&&a<e.length;a++)if(!Eo(e[a],o[a]))return!1;return!0}function ui(e,o,a,t,r,n){if(ha=n,Ie=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Ir.current=e===null||e.memoizedState===null?ku:Mu,e=a(t,r),Rt){n=0;do{if(Rt=!1,Nt=0,25<=n)throw Error(c(301));n+=1,we=Ne=null,o.updateQueue=null,Ir.current=Fu,e=a(t,r)}while(Rt)}if(Ir.current=Ar,o=Ne!==null&&Ne.next!==null,ha=0,we=Ne=Ie=null,Tr=!1,o)throw Error(c(300));return e}function mi(){var e=Nt!==0;return Nt=0,e}function wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?Ie.memoizedState=we=e:we=we.next=e,we}function vo(){if(Ne===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var o=we===null?Ie.memoizedState:we.next;if(o!==null)we=o,Ne=e;else{if(e===null)throw Error(c(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},we===null?Ie.memoizedState=we=e:we=we.next=e}return we}function Dt(e,o){return typeof o=="function"?o(e):o}function pi(e){var o=vo(),a=o.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var t=Ne,r=t.baseQueue,n=a.pending;if(n!==null){if(r!==null){var i=r.next;r.next=n.next,n.next=i}t.baseQueue=r=n,a.pending=null}if(r!==null){n=r.next,t=t.baseState;var s=i=null,u=null,h=n;do{var x=h.lane;if((ha&x)===x)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),t=h.hasEagerState?h.eagerState:e(t,h.action);else{var P={lane:x,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(s=u=P,i=t):u=u.next=P,Ie.lanes|=x,Sa|=x}h=h.next}while(h!==null&&h!==n);u===null?i=t:u.next=s,Eo(t,o.memoizedState)||(eo=!0),o.memoizedState=t,o.baseState=i,o.baseQueue=u,a.lastRenderedState=t}if(e=a.interleaved,e!==null){r=e;do n=r.lane,Ie.lanes|=n,Sa|=n,r=r.next;while(r!==e)}else r===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function fi(e){var o=vo(),a=o.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var t=a.dispatch,r=a.pending,n=o.memoizedState;if(r!==null){a.pending=null;var i=r=r.next;do n=e(n,i.action),i=i.next;while(i!==r);Eo(n,o.memoizedState)||(eo=!0),o.memoizedState=n,o.baseQueue===null&&(o.baseState=n),a.lastRenderedState=n}return[n,t]}function Fl(){}function _l(e,o){var a=Ie,t=vo(),r=o(),n=!Eo(t.memoizedState,r);if(n&&(t.memoizedState=r,eo=!0),t=t.queue,gi(Ul.bind(null,a,t,e),[e]),t.getSnapshot!==o||n||we!==null&&we.memoizedState.tag&1){if(a.flags|=2048,Ot(9,jl.bind(null,a,t,r,o),void 0,null),qe===null)throw Error(c(349));(ha&30)!==0||zl(a,o,r)}return r}function zl(e,o,a){e.flags|=16384,e={getSnapshot:o,value:a},o=Ie.updateQueue,o===null?(o={lastEffect:null,stores:null},Ie.updateQueue=o,o.stores=[e]):(a=o.stores,a===null?o.stores=[e]:a.push(e))}function jl(e,o,a,t){o.value=a,o.getSnapshot=t,Bl(o)&&Wl(e)}function Ul(e,o,a){return a(function(){Bl(o)&&Wl(e)})}function Bl(e){var o=e.getSnapshot;e=e.value;try{var a=o();return!Eo(e,a)}catch{return!0}}function Wl(e){var o=zo(e,1);o!==null&&xo(o,e,1,-1)}function Hl(e){var o=wo();return typeof e=="function"&&(e=e()),o.memoizedState=o.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:e},o.queue=e,e=e.dispatch=Lu.bind(null,Ie,e),[o.memoizedState,e]}function Ot(e,o,a,t){return e={tag:e,create:o,destroy:a,deps:t,next:null},o=Ie.updateQueue,o===null?(o={lastEffect:null,stores:null},Ie.updateQueue=o,o.lastEffect=e.next=e):(a=o.lastEffect,a===null?o.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,o.lastEffect=e)),e}function Vl(){return vo().memoizedState}function xr(e,o,a,t){var r=wo();Ie.flags|=e,r.memoizedState=Ot(1|o,a,void 0,t===void 0?null:t)}function Pr(e,o,a,t){var r=vo();t=t===void 0?null:t;var n=void 0;if(Ne!==null){var i=Ne.memoizedState;if(n=i.destroy,t!==null&&di(t,i.deps)){r.memoizedState=Ot(o,a,n,t);return}}Ie.flags|=e,r.memoizedState=Ot(1|o,a,n,t)}function Gl(e,o){return xr(8390656,8,e,o)}function gi(e,o){return Pr(2048,8,e,o)}function $l(e,o){return Pr(4,2,e,o)}function Ql(e,o){return Pr(4,4,e,o)}function Kl(e,o){if(typeof o=="function")return e=e(),o(e),function(){o(null)};if(o!=null)return e=e(),o.current=e,function(){o.current=null}}function Yl(e,o,a){return a=a!=null?a.concat([e]):null,Pr(4,4,Kl.bind(null,o,e),a)}function vi(){}function Xl(e,o){var a=vo();o=o===void 0?null:o;var t=a.memoizedState;return t!==null&&o!==null&&di(o,t[1])?t[0]:(a.memoizedState=[e,o],e)}function Jl(e,o){var a=vo();o=o===void 0?null:o;var t=a.memoizedState;return t!==null&&o!==null&&di(o,t[1])?t[0]:(e=e(),a.memoizedState=[e,o],e)}function Zl(e,o,a){return(ha&21)===0?(e.baseState&&(e.baseState=!1,eo=!0),e.memoizedState=a):(Eo(a,o)||(a=Ns(),Ie.lanes|=a,Sa|=a,e.baseState=!0),o)}function wu(e,o){var a=ce;ce=a!==0&&4>a?a:4,e(!0);var t=ci.transition;ci.transition={};try{e(!1),o()}finally{ce=a,ci.transition=t}}function ec(){return vo().memoizedState}function qu(e,o,a){var t=ia(e);if(a={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null},oc(e))ac(o,a);else if(a=wl(e,o,a,t),a!==null){var r=Qe();xo(a,e,t,r),tc(a,o,t)}}function Lu(e,o,a){var t=ia(e),r={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null};if(oc(e))ac(o,r);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=o.lastRenderedReducer,n!==null))try{var i=o.lastRenderedState,s=n(i,a);if(r.hasEagerState=!0,r.eagerState=s,Eo(s,i)){var u=o.interleaved;u===null?(r.next=r,ti(o)):(r.next=u.next,u.next=r),o.interleaved=r;return}}catch{}finally{}a=wl(e,o,r,t),a!==null&&(r=Qe(),xo(a,e,t,r),tc(a,o,t))}}function oc(e){var o=e.alternate;return e===Ie||o!==null&&o===Ie}function ac(e,o){Rt=Tr=!0;var a=e.pending;a===null?o.next=o:(o.next=a.next,a.next=o),e.pending=o}function tc(e,o,a){if((a&4194240)!==0){var t=o.lanes;t&=e.pendingLanes,a|=t,o.lanes=a,hn(e,a)}}var Ar={readContext:go,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},ku={readContext:go,useCallback:function(e,o){return wo().memoizedState=[e,o===void 0?null:o],e},useContext:go,useEffect:Gl,useImperativeHandle:function(e,o,a){return a=a!=null?a.concat([e]):null,xr(4194308,4,Kl.bind(null,o,e),a)},useLayoutEffect:function(e,o){return xr(4194308,4,e,o)},useInsertionEffect:function(e,o){return xr(4,2,e,o)},useMemo:function(e,o){var a=wo();return o=o===void 0?null:o,e=e(),a.memoizedState=[e,o],e},useReducer:function(e,o,a){var t=wo();return o=a!==void 0?a(o):o,t.memoizedState=t.baseState=o,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},t.queue=e,e=e.dispatch=qu.bind(null,Ie,e),[t.memoizedState,e]},useRef:function(e){var o=wo();return e={current:e},o.memoizedState=e},useState:Hl,useDebugValue:vi,useDeferredValue:function(e){return wo().memoizedState=e},useTransition:function(){var e=Hl(!1),o=e[0];return e=wu.bind(null,e[1]),wo().memoizedState=e,[o,e]},useMutableSource:function(){},useSyncExternalStore:function(e,o,a){var t=Ie,r=wo();if(Ee){if(a===void 0)throw Error(c(407));a=a()}else{if(a=o(),qe===null)throw Error(c(349));(ha&30)!==0||zl(t,o,a)}r.memoizedState=a;var n={value:a,getSnapshot:o};return r.queue=n,Gl(Ul.bind(null,t,n,e),[e]),t.flags|=2048,Ot(9,jl.bind(null,t,n,a,o),void 0,null),a},useId:function(){var e=wo(),o=qe.identifierPrefix;if(Ee){var a=_o,t=Fo;a=(t&~(1<<32-So(t)-1)).toString(32)+a,o=":"+o+"R"+a,a=Nt++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=Ou++,o=":"+o+"r"+a.toString(32)+":";return e.memoizedState=o},unstable_isNewReconciler:!1},Mu={readContext:go,useCallback:Xl,useContext:go,useEffect:gi,useImperativeHandle:Yl,useInsertionEffect:$l,useLayoutEffect:Ql,useMemo:Jl,useReducer:pi,useRef:Vl,useState:function(){return pi(Dt)},useDebugValue:vi,useDeferredValue:function(e){var o=vo();return Zl(o,Ne.memoizedState,e)},useTransition:function(){var e=pi(Dt)[0],o=vo().memoizedState;return[e,o]},useMutableSource:Fl,useSyncExternalStore:_l,useId:ec,unstable_isNewReconciler:!1},Fu={readContext:go,useCallback:Xl,useContext:go,useEffect:gi,useImperativeHandle:Yl,useInsertionEffect:$l,useLayoutEffect:Ql,useMemo:Jl,useReducer:fi,useRef:Vl,useState:function(){return fi(Dt)},useDebugValue:vi,useDeferredValue:function(e){var o=vo();return Ne===null?o.memoizedState=e:Zl(o,Ne.memoizedState,e)},useTransition:function(){var e=fi(Dt)[0],o=vo().memoizedState;return[e,o]},useMutableSource:Fl,useSyncExternalStore:_l,useId:ec,unstable_isNewReconciler:!1};function bo(e,o){if(e&&e.defaultProps){o=L({},o),e=e.defaultProps;for(var a in e)o[a]===void 0&&(o[a]=e[a]);return o}return o}function Ci(e,o,a,t){o=e.memoizedState,a=a(t,o),a=a==null?o:L({},o,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rr={isMounted:function(e){return(e=e._reactInternals)?ua(e)===e:!1},enqueueSetState:function(e,o,a){e=e._reactInternals;var t=Qe(),r=ia(e),n=jo(t,r);n.payload=o,a!=null&&(n.callback=a),o=aa(e,n,r),o!==null&&(xo(o,e,r,t),Er(o,e,r))},enqueueReplaceState:function(e,o,a){e=e._reactInternals;var t=Qe(),r=ia(e),n=jo(t,r);n.tag=1,n.payload=o,a!=null&&(n.callback=a),o=aa(e,n,r),o!==null&&(xo(o,e,r,t),Er(o,e,r))},enqueueForceUpdate:function(e,o){e=e._reactInternals;var a=Qe(),t=ia(e),r=jo(a,t);r.tag=2,o!=null&&(r.callback=o),o=aa(e,r,t),o!==null&&(xo(o,e,t,a),Er(o,e,t))}};function rc(e,o,a,t,r,n,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,n,i):o.prototype&&o.prototype.isPureReactComponent?!Ct(a,t)||!Ct(r,n):!0}function nc(e,o,a){var t=!1,r=Zo,n=o.contextType;return typeof n=="object"&&n!==null?n=go(n):(r=Ze(o)?pa:We.current,t=o.contextTypes,n=(t=t!=null)?Fa(e,r):Zo),o=new o(a,n),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Rr,e.stateNode=o,o._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=n),o}function ic(e,o,a,t){e=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,t),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,t),o.state!==e&&Rr.enqueueReplaceState(o,o.state,null)}function hi(e,o,a,t){var r=e.stateNode;r.props=a,r.state=e.memoizedState,r.refs={},ri(e);var n=o.contextType;typeof n=="object"&&n!==null?r.context=go(n):(n=Ze(o)?pa:We.current,r.context=Fa(e,n)),r.state=e.memoizedState,n=o.getDerivedStateFromProps,typeof n=="function"&&(Ci(e,o,n,a),r.state=e.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Rr.enqueueReplaceState(r,r.state,null),yr(e,a,r,t),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Va(e,o){try{var a="",t=o;do a+=te(t),t=t.return;while(t);var r=a}catch(n){r=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:o,stack:r,digest:null}}function Si(e,o,a){return{value:e,source:null,stack:a??null,digest:o??null}}function Ei(e,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var _u=typeof WeakMap=="function"?WeakMap:Map;function sc(e,o,a){a=jo(-1,a),a.tag=3,a.payload={element:null};var t=o.value;return a.callback=function(){kr||(kr=!0,ki=t),Ei(e,o)},a}function lc(e,o,a){a=jo(-1,a),a.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var r=o.value;a.payload=function(){return t(r)},a.callback=function(){Ei(e,o)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(a.callback=function(){Ei(e,o),typeof t!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})}),a}function cc(e,o,a){var t=e.pingCache;if(t===null){t=e.pingCache=new _u;var r=new Set;t.set(o,r)}else r=t.get(o),r===void 0&&(r=new Set,t.set(o,r));r.has(a)||(r.add(a),e=Ju.bind(null,e,o,a),o.then(e,e))}function dc(e){do{var o;if((o=e.tag===13)&&(o=e.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return e;e=e.return}while(e!==null);return null}function uc(e,o,a,t,r){return(e.mode&1)===0?(e===o?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=jo(-1,1),o.tag=2,aa(a,o,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var zu=ye.ReactCurrentOwner,eo=!1;function $e(e,o,a,t){o.child=e===null?Ol(o,null,a,t):Ua(o,e.child,a,t)}function mc(e,o,a,t,r){a=a.render;var n=o.ref;return Wa(o,r),t=ui(e,o,a,t,n,r),a=mi(),e!==null&&!eo?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~r,Uo(e,o,r)):(Ee&&a&&Qn(o),o.flags|=1,$e(e,o,t,r),o.child)}function pc(e,o,a,t,r){if(e===null){var n=a.type;return typeof n=="function"&&!Bi(n)&&n.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=n,fc(e,o,n,t,r)):(e=Ur(a.type,null,t,o,o.mode,r),e.ref=o.ref,e.return=o,o.child=e)}if(n=e.child,(e.lanes&r)===0){var i=n.memoizedProps;if(a=a.compare,a=a!==null?a:Ct,a(i,t)&&e.ref===o.ref)return Uo(e,o,r)}return o.flags|=1,e=la(n,t),e.ref=o.ref,e.return=o,o.child=e}function fc(e,o,a,t,r){if(e!==null){var n=e.memoizedProps;if(Ct(n,t)&&e.ref===o.ref)if(eo=!1,o.pendingProps=t=n,(e.lanes&r)!==0)(e.flags&131072)!==0&&(eo=!0);else return o.lanes=e.lanes,Uo(e,o,r)}return yi(e,o,a,t,r)}function gc(e,o,a){var t=o.pendingProps,r=t.children,n=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe($a,mo),mo|=a;else{if((a&1073741824)===0)return e=n!==null?n.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:e,cachePool:null,transitions:null},o.updateQueue=null,fe($a,mo),mo|=e,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=n!==null?n.baseLanes:a,fe($a,mo),mo|=t}else n!==null?(t=n.baseLanes|a,o.memoizedState=null):t=a,fe($a,mo),mo|=t;return $e(e,o,r,a),o.child}function vc(e,o){var a=o.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function yi(e,o,a,t,r){var n=Ze(a)?pa:We.current;return n=Fa(o,n),Wa(o,r),a=ui(e,o,a,t,n,r),t=mi(),e!==null&&!eo?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~r,Uo(e,o,r)):(Ee&&t&&Qn(o),o.flags|=1,$e(e,o,a,r),o.child)}function Cc(e,o,a,t,r){if(Ze(a)){var n=!0;mr(o)}else n=!1;if(Wa(o,r),o.stateNode===null)Dr(e,o),nc(o,a,t),hi(o,a,t,r),t=!0;else if(e===null){var i=o.stateNode,s=o.memoizedProps;i.props=s;var u=i.context,h=a.contextType;typeof h=="object"&&h!==null?h=go(h):(h=Ze(a)?pa:We.current,h=Fa(o,h));var x=a.getDerivedStateFromProps,P=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";P||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==t||u!==h)&&ic(o,i,t,h),oa=!1;var T=o.memoizedState;i.state=T,yr(o,t,i,r),u=o.memoizedState,s!==t||T!==u||Je.current||oa?(typeof x=="function"&&(Ci(o,a,x,t),u=o.memoizedState),(s=oa||rc(o,a,s,t,T,u,h))?(P||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(o.flags|=4194308)):(typeof i.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=t,o.memoizedState=u),i.props=t,i.state=u,i.context=h,t=s):(typeof i.componentDidMount=="function"&&(o.flags|=4194308),t=!1)}else{i=o.stateNode,ql(e,o),s=o.memoizedProps,h=o.type===o.elementType?s:bo(o.type,s),i.props=h,P=o.pendingProps,T=i.context,u=a.contextType,typeof u=="object"&&u!==null?u=go(u):(u=Ze(a)?pa:We.current,u=Fa(o,u));var q=a.getDerivedStateFromProps;(x=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==P||T!==u)&&ic(o,i,t,u),oa=!1,T=o.memoizedState,i.state=T,yr(o,t,i,r);var _=o.memoizedState;s!==P||T!==_||Je.current||oa?(typeof q=="function"&&(Ci(o,a,q,t),_=o.memoizedState),(h=oa||rc(o,a,h,t,T,_,u)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,_,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,_,u)),typeof i.componentDidUpdate=="function"&&(o.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(o.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(o.flags|=1024),o.memoizedProps=t,o.memoizedState=_),i.props=t,i.state=_,i.context=u,t=h):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(o.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(o.flags|=1024),t=!1)}return bi(e,o,a,t,n,r)}function bi(e,o,a,t,r,n){vc(e,o);var i=(o.flags&128)!==0;if(!t&&!i)return r&&bl(o,a,!1),Uo(e,o,n);t=o.stateNode,zu.current=o;var s=i&&typeof a.getDerivedStateFromError!="function"?null:t.render();return o.flags|=1,e!==null&&i?(o.child=Ua(o,e.child,null,n),o.child=Ua(o,null,s,n)):$e(e,o,s,n),o.memoizedState=t.state,r&&bl(o,a,!0),o.child}function hc(e){var o=e.stateNode;o.pendingContext?El(e,o.pendingContext,o.pendingContext!==o.context):o.context&&El(e,o.context,!1),ni(e,o.containerInfo)}function Sc(e,o,a,t,r){return ja(),Jn(r),o.flags|=256,$e(e,o,a,t),o.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ec(e,o,a){var t=o.pendingProps,r=be.current,n=!1,i=(o.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(n=!0,o.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),fe(be,r&1),e===null)return Xn(o),e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((o.mode&1)===0?o.lanes=1:e.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(i=t.children,e=t.fallback,n?(t=o.mode,n=o.child,i={mode:"hidden",children:i},(t&1)===0&&n!==null?(n.childLanes=0,n.pendingProps=i):n=Br(i,t,0,null),e=Ia(e,t,a,null),n.return=o,e.return=o,n.sibling=e,o.child=n,o.child.memoizedState=Ti(a),o.memoizedState=Ii,e):xi(o,i));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return ju(e,o,i,t,s,r,a);if(n){n=t.fallback,i=o.mode,r=e.child,s=r.sibling;var u={mode:"hidden",children:t.children};return(i&1)===0&&o.child!==r?(t=o.child,t.childLanes=0,t.pendingProps=u,o.deletions=null):(t=la(r,u),t.subtreeFlags=r.subtreeFlags&14680064),s!==null?n=la(s,n):(n=Ia(n,i,a,null),n.flags|=2),n.return=o,t.return=o,t.sibling=n,o.child=t,t=n,n=o.child,i=e.child.memoizedState,i=i===null?Ti(a):{baseLanes:i.baseLanes|a,cachePool:null,transitions:i.transitions},n.memoizedState=i,n.childLanes=e.childLanes&~a,o.memoizedState=Ii,t}return n=e.child,e=n.sibling,t=la(n,{mode:"visible",children:t.children}),(o.mode&1)===0&&(t.lanes=a),t.return=o,t.sibling=null,e!==null&&(a=o.deletions,a===null?(o.deletions=[e],o.flags|=16):a.push(e)),o.child=t,o.memoizedState=null,t}function xi(e,o){return o=Br({mode:"visible",children:o},e.mode,0,null),o.return=e,e.child=o}function Nr(e,o,a,t){return t!==null&&Jn(t),Ua(o,e.child,null,a),e=xi(o,o.pendingProps.children),e.flags|=2,o.memoizedState=null,e}function ju(e,o,a,t,r,n,i){if(a)return o.flags&256?(o.flags&=-257,t=Si(Error(c(422))),Nr(e,o,i,t)):o.memoizedState!==null?(o.child=e.child,o.flags|=128,null):(n=t.fallback,r=o.mode,t=Br({mode:"visible",children:t.children},r,0,null),n=Ia(n,r,i,null),n.flags|=2,t.return=o,n.return=o,t.sibling=n,o.child=t,(o.mode&1)!==0&&Ua(o,e.child,null,i),o.child.memoizedState=Ti(i),o.memoizedState=Ii,n);if((o.mode&1)===0)return Nr(e,o,i,null);if(r.data==="$!"){if(t=r.nextSibling&&r.nextSibling.dataset,t)var s=t.dgst;return t=s,n=Error(c(419)),t=Si(n,t,void 0),Nr(e,o,i,t)}if(s=(i&e.childLanes)!==0,eo||s){if(t=qe,t!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(t.suspendedLanes|i))!==0?0:r,r!==0&&r!==n.retryLane&&(n.retryLane=r,zo(e,r),xo(t,e,r,-1))}return Ui(),t=Si(Error(c(421))),Nr(e,o,i,t)}return r.data==="$?"?(o.flags|=128,o.child=e.child,o=Zu.bind(null,e),r._reactRetry=o,null):(e=n.treeContext,uo=Xo(r.nextSibling),co=o,Ee=!0,yo=null,e!==null&&(po[fo++]=Fo,po[fo++]=_o,po[fo++]=fa,Fo=e.id,_o=e.overflow,fa=o),o=xi(o,t.children),o.flags|=4096,o)}function yc(e,o,a){e.lanes|=o;var t=e.alternate;t!==null&&(t.lanes|=o),ai(e.return,o,a)}function Pi(e,o,a,t,r){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:r}:(n.isBackwards=o,n.rendering=null,n.renderingStartTime=0,n.last=t,n.tail=a,n.tailMode=r)}function bc(e,o,a){var t=o.pendingProps,r=t.revealOrder,n=t.tail;if($e(e,o,t.children,a),t=be.current,(t&2)!==0)t=t&1|2,o.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=o.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,a,o);else if(e.tag===19)yc(e,a,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break e;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(fe(be,t),(o.mode&1)===0)o.memoizedState=null;else switch(r){case"forwards":for(a=o.child,r=null;a!==null;)e=a.alternate,e!==null&&br(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=o.child,o.child=null):(r=a.sibling,a.sibling=null),Pi(o,!1,r,a,n);break;case"backwards":for(a=null,r=o.child,o.child=null;r!==null;){if(e=r.alternate,e!==null&&br(e)===null){o.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Pi(o,!0,a,null,n);break;case"together":Pi(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Dr(e,o){(o.mode&1)===0&&e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2)}function Uo(e,o,a){if(e!==null&&(o.dependencies=e.dependencies),Sa|=o.lanes,(a&o.childLanes)===0)return null;if(e!==null&&o.child!==e.child)throw Error(c(153));if(o.child!==null){for(e=o.child,a=la(e,e.pendingProps),o.child=a,a.return=o;e.sibling!==null;)e=e.sibling,a=a.sibling=la(e,e.pendingProps),a.return=o;a.sibling=null}return o.child}function Uu(e,o,a){switch(o.tag){case 3:hc(o),ja();break;case 5:Ml(o);break;case 1:Ze(o.type)&&mr(o);break;case 4:ni(o,o.stateNode.containerInfo);break;case 10:var t=o.type._context,r=o.memoizedProps.value;fe(hr,t._currentValue),t._currentValue=r;break;case 13:if(t=o.memoizedState,t!==null)return t.dehydrated!==null?(fe(be,be.current&1),o.flags|=128,null):(a&o.child.childLanes)!==0?Ec(e,o,a):(fe(be,be.current&1),e=Uo(e,o,a),e!==null?e.sibling:null);fe(be,be.current&1);break;case 19:if(t=(a&o.childLanes)!==0,(e.flags&128)!==0){if(t)return bc(e,o,a);o.flags|=128}if(r=o.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),fe(be,be.current),t)break;return null;case 22:case 23:return o.lanes=0,gc(e,o,a)}return Uo(e,o,a)}var Ic,Ai,Tc,xc;Ic=function(e,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ai=function(){},Tc=function(e,o,a,t){var r=e.memoizedProps;if(r!==t){e=o.stateNode,Ca(Oo.current);var n=null;switch(a){case"input":r=Xe(e,r),t=Xe(e,t),n=[];break;case"select":r=L({},r,{value:void 0}),t=L({},t,{value:void 0}),n=[];break;case"textarea":r=rn(e,r),t=rn(e,t),n=[];break;default:typeof r.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=cr)}sn(a,t);var i;a=null;for(h in r)if(!t.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var s=r[h];for(i in s)s.hasOwnProperty(i)&&(a||(a={}),a[i]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(E.hasOwnProperty(h)?n||(n=[]):(n=n||[]).push(h,null));for(h in t){var u=t[h];if(s=r!=null?r[h]:void 0,t.hasOwnProperty(h)&&u!==s&&(u!=null||s!=null))if(h==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(a||(a={}),a[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(a||(a={}),a[i]=u[i])}else a||(n||(n=[]),n.push(h,a)),a=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(n=n||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(n=n||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(E.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ce("scroll",e),n||s===u||(n=[])):(n=n||[]).push(h,u))}a&&(n=n||[]).push("style",a);var h=n;(o.updateQueue=h)&&(o.flags|=4)}},xc=function(e,o,a,t){a!==t&&(o.flags|=4)};function wt(e,o){if(!Ee)switch(e.tailMode){case"hidden":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?o||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Ve(e){var o=e.alternate!==null&&e.alternate.child===e.child,a=0,t=0;if(o)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,t|=r.subtreeFlags&14680064,t|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,t|=r.subtreeFlags,t|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=t,e.childLanes=a,o}function Bu(e,o,a){var t=o.pendingProps;switch(Kn(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(o),null;case 1:return Ze(o.type)&&ur(),Ve(o),null;case 3:return t=o.stateNode,Ha(),he(Je),he(We),li(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(vr(o)?o.flags|=4:e===null||e.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,yo!==null&&(_i(yo),yo=null))),Ai(e,o),Ve(o),null;case 5:ii(o);var r=Ca(At.current);if(a=o.type,e!==null&&o.stateNode!=null)Tc(e,o,a,t,r),e.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!t){if(o.stateNode===null)throw Error(c(166));return Ve(o),null}if(e=Ca(Oo.current),vr(o)){t=o.stateNode,a=o.type;var n=o.memoizedProps;switch(t[Do]=o,t[bt]=n,e=(o.mode&1)!==0,a){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(r=0;r<St.length;r++)Ce(St[r],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":ns(t,n),Ce("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!n.multiple},Ce("invalid",t);break;case"textarea":ls(t,n),Ce("invalid",t)}sn(a,n),r=null;for(var i in n)if(n.hasOwnProperty(i)){var s=n[i];i==="children"?typeof s=="string"?t.textContent!==s&&(n.suppressHydrationWarning!==!0&&lr(t.textContent,s,e),r=["children",s]):typeof s=="number"&&t.textContent!==""+s&&(n.suppressHydrationWarning!==!0&&lr(t.textContent,s,e),r=["children",""+s]):E.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ce("scroll",t)}switch(a){case"input":pe(t),ss(t,n,!0);break;case"textarea":pe(t),ds(t);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(t.onclick=cr)}t=r,o.updateQueue=t,t!==null&&(o.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=us(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=i.createElement(a,{is:t.is}):(e=i.createElement(a),a==="select"&&(i=e,t.multiple?i.multiple=!0:t.size&&(i.size=t.size))):e=i.createElementNS(e,a),e[Do]=o,e[bt]=t,Ic(e,o,!1,!1),o.stateNode=e;e:{switch(i=ln(a,t),a){case"dialog":Ce("cancel",e),Ce("close",e),r=t;break;case"iframe":case"object":case"embed":Ce("load",e),r=t;break;case"video":case"audio":for(r=0;r<St.length;r++)Ce(St[r],e);r=t;break;case"source":Ce("error",e),r=t;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),r=t;break;case"details":Ce("toggle",e),r=t;break;case"input":ns(e,t),r=Xe(e,t),Ce("invalid",e);break;case"option":r=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},r=L({},t,{value:void 0}),Ce("invalid",e);break;case"textarea":ls(e,t),r=rn(e,t),Ce("invalid",e);break;default:r=t}sn(a,r),s=r;for(n in s)if(s.hasOwnProperty(n)){var u=s[n];n==="style"?fs(e,u):n==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ms(e,u)):n==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&et(e,u):typeof u=="number"&&et(e,""+u):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(E.hasOwnProperty(n)?u!=null&&n==="onScroll"&&Ce("scroll",e):u!=null&&ue(e,n,u,i))}switch(a){case"input":pe(e),ss(e,t,!1);break;case"textarea":pe(e),ds(e);break;case"option":t.value!=null&&e.setAttribute("value",""+ie(t.value));break;case"select":e.multiple=!!t.multiple,n=t.value,n!=null?xa(e,!!t.multiple,n,!1):t.defaultValue!=null&&xa(e,!!t.multiple,t.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=cr)}switch(a){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Ve(o),null;case 6:if(e&&o.stateNode!=null)xc(e,o,e.memoizedProps,t);else{if(typeof t!="string"&&o.stateNode===null)throw Error(c(166));if(a=Ca(At.current),Ca(Oo.current),vr(o)){if(t=o.stateNode,a=o.memoizedProps,t[Do]=o,(n=t.nodeValue!==a)&&(e=co,e!==null))switch(e.tag){case 3:lr(t.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lr(t.nodeValue,a,(e.mode&1)!==0)}n&&(o.flags|=4)}else t=(a.nodeType===9?a:a.ownerDocument).createTextNode(t),t[Do]=o,o.stateNode=t}return Ve(o),null;case 13:if(he(be),t=o.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&uo!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Rl(),ja(),o.flags|=98560,n=!1;else if(n=vr(o),t!==null&&t.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=o.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Do]=o}else ja(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Ve(o),n=!1}else yo!==null&&(_i(yo),yo=null),n=!0;if(!n)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=a,o):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(o.child.flags|=8192,(o.mode&1)!==0&&(e===null||(be.current&1)!==0?De===0&&(De=3):Ui())),o.updateQueue!==null&&(o.flags|=4),Ve(o),null);case 4:return Ha(),Ai(e,o),e===null&&Et(o.stateNode.containerInfo),Ve(o),null;case 10:return oi(o.type._context),Ve(o),null;case 17:return Ze(o.type)&&ur(),Ve(o),null;case 19:if(he(be),n=o.memoizedState,n===null)return Ve(o),null;if(t=(o.flags&128)!==0,i=n.rendering,i===null)if(t)wt(n,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=o.child;e!==null;){if(i=br(e),i!==null){for(o.flags|=128,wt(n,!1),t=i.updateQueue,t!==null&&(o.updateQueue=t,o.flags|=4),o.subtreeFlags=0,t=a,a=o.child;a!==null;)n=a,e=t,n.flags&=14680066,i=n.alternate,i===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=i.childLanes,n.lanes=i.lanes,n.child=i.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue,n.type=i.type,e=i.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return fe(be,be.current&1|2),o.child}e=e.sibling}n.tail!==null&&xe()>Qa&&(o.flags|=128,t=!0,wt(n,!1),o.lanes=4194304)}else{if(!t)if(e=br(i),e!==null){if(o.flags|=128,t=!0,a=e.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),wt(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Ee)return Ve(o),null}else 2*xe()-n.renderingStartTime>Qa&&a!==1073741824&&(o.flags|=128,t=!0,wt(n,!1),o.lanes=4194304);n.isBackwards?(i.sibling=o.child,o.child=i):(a=n.last,a!==null?a.sibling=i:o.child=i,n.last=i)}return n.tail!==null?(o=n.tail,n.rendering=o,n.tail=o.sibling,n.renderingStartTime=xe(),o.sibling=null,a=be.current,fe(be,t?a&1|2:a&1),o):(Ve(o),null);case 22:case 23:return ji(),t=o.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(o.flags|=8192),t&&(o.mode&1)!==0?(mo&1073741824)!==0&&(Ve(o),o.subtreeFlags&6&&(o.flags|=8192)):Ve(o),null;case 24:return null;case 25:return null}throw Error(c(156,o.tag))}function Wu(e,o){switch(Kn(o),o.tag){case 1:return Ze(o.type)&&ur(),e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 3:return Ha(),he(Je),he(We),li(),e=o.flags,(e&65536)!==0&&(e&128)===0?(o.flags=e&-65537|128,o):null;case 5:return ii(o),null;case 13:if(he(be),e=o.memoizedState,e!==null&&e.dehydrated!==null){if(o.alternate===null)throw Error(c(340));ja()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 19:return he(be),null;case 4:return Ha(),null;case 10:return oi(o.type._context),null;case 22:case 23:return ji(),null;case 24:return null;default:return null}}var Or=!1,Ge=!1,Hu=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ga(e,o){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(t){Te(e,o,t)}else a.current=null}function Ri(e,o,a){try{a()}catch(t){Te(e,o,t)}}var Pc=!1;function Vu(e,o){if(jn=Xt,e=rl(),wn(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var r=t.anchorOffset,n=t.focusNode;t=t.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var i=0,s=-1,u=-1,h=0,x=0,P=e,T=null;o:for(;;){for(var q;P!==a||r!==0&&P.nodeType!==3||(s=i+r),P!==n||t!==0&&P.nodeType!==3||(u=i+t),P.nodeType===3&&(i+=P.nodeValue.length),(q=P.firstChild)!==null;)T=P,P=q;for(;;){if(P===e)break o;if(T===a&&++h===r&&(s=i),T===n&&++x===t&&(u=i),(q=P.nextSibling)!==null)break;P=T,T=P.parentNode}P=q}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Un={focusedElem:e,selectionRange:a},Xt=!1,M=o;M!==null;)if(o=M,e=o.child,(o.subtreeFlags&1028)!==0&&e!==null)e.return=o,M=e;else for(;M!==null;){o=M;try{var _=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var j=_.memoizedProps,Pe=_.memoizedState,g=o.stateNode,p=g.getSnapshotBeforeUpdate(o.elementType===o.type?j:bo(o.type,j),Pe);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=o.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(N){Te(o,o.return,N)}if(e=o.sibling,e!==null){e.return=o.return,M=e;break}M=o.return}return _=Pc,Pc=!1,_}function qt(e,o,a){var t=o.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.destroy;r.destroy=void 0,n!==void 0&&Ri(o,a,n)}r=r.next}while(r!==t)}}function wr(e,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var t=a.create;a.destroy=t()}a=a.next}while(a!==o)}}function Ni(e){var o=e.ref;if(o!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof o=="function"?o(e):o.current=e}}function Ac(e){var o=e.alternate;o!==null&&(e.alternate=null,Ac(o)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(o=e.stateNode,o!==null&&(delete o[Do],delete o[bt],delete o[Vn],delete o[Au],delete o[Ru])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rc(e){return e.tag===5||e.tag===3||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,o,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(e,o):a.insertBefore(e,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(e,a)):(o=a,o.appendChild(e)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=cr));else if(t!==4&&(e=e.child,e!==null))for(Di(e,o,a),e=e.sibling;e!==null;)Di(e,o,a),e=e.sibling}function Oi(e,o,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,o?a.insertBefore(e,o):a.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Oi(e,o,a),e=e.sibling;e!==null;)Oi(e,o,a),e=e.sibling}var ze=null,Io=!1;function ta(e,o,a){for(a=a.child;a!==null;)Dc(e,o,a),a=a.sibling}function Dc(e,o,a){if(No&&typeof No.onCommitFiberUnmount=="function")try{No.onCommitFiberUnmount(Vt,a)}catch{}switch(a.tag){case 5:Ge||Ga(a,o);case 6:var t=ze,r=Io;ze=null,ta(e,o,a),ze=t,Io=r,ze!==null&&(Io?(e=ze,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ze.removeChild(a.stateNode));break;case 18:ze!==null&&(Io?(e=ze,a=a.stateNode,e.nodeType===8?Hn(e.parentNode,a):e.nodeType===1&&Hn(e,a),ut(e)):Hn(ze,a.stateNode));break;case 4:t=ze,r=Io,ze=a.stateNode.containerInfo,Io=!0,ta(e,o,a),ze=t,Io=r;break;case 0:case 11:case 14:case 15:if(!Ge&&(t=a.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){r=t=t.next;do{var n=r,i=n.destroy;n=n.tag,i!==void 0&&((n&2)!==0||(n&4)!==0)&&Ri(a,o,i),r=r.next}while(r!==t)}ta(e,o,a);break;case 1:if(!Ge&&(Ga(a,o),t=a.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=a.memoizedProps,t.state=a.memoizedState,t.componentWillUnmount()}catch(s){Te(a,o,s)}ta(e,o,a);break;case 21:ta(e,o,a);break;case 22:a.mode&1?(Ge=(t=Ge)||a.memoizedState!==null,ta(e,o,a),Ge=t):ta(e,o,a);break;default:ta(e,o,a)}}function Oc(e){var o=e.updateQueue;if(o!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Hu),o.forEach(function(t){var r=em.bind(null,e,t);a.has(t)||(a.add(t),t.then(r,r))})}}function To(e,o){var a=o.deletions;if(a!==null)for(var t=0;t<a.length;t++){var r=a[t];try{var n=e,i=o,s=i;e:for(;s!==null;){switch(s.tag){case 5:ze=s.stateNode,Io=!1;break e;case 3:ze=s.stateNode.containerInfo,Io=!0;break e;case 4:ze=s.stateNode.containerInfo,Io=!0;break e}s=s.return}if(ze===null)throw Error(c(160));Dc(n,i,r),ze=null,Io=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(h){Te(r,o,h)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)wc(o,e),o=o.sibling}function wc(e,o){var a=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(To(o,e),qo(e),t&4){try{qt(3,e,e.return),wr(3,e)}catch(j){Te(e,e.return,j)}try{qt(5,e,e.return)}catch(j){Te(e,e.return,j)}}break;case 1:To(o,e),qo(e),t&512&&a!==null&&Ga(a,a.return);break;case 5:if(To(o,e),qo(e),t&512&&a!==null&&Ga(a,a.return),e.flags&32){var r=e.stateNode;try{et(r,"")}catch(j){Te(e,e.return,j)}}if(t&4&&(r=e.stateNode,r!=null)){var n=e.memoizedProps,i=a!==null?a.memoizedProps:n,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&n.type==="radio"&&n.name!=null&&is(r,n),ln(s,i);var h=ln(s,n);for(i=0;i<u.length;i+=2){var x=u[i],P=u[i+1];x==="style"?fs(r,P):x==="dangerouslySetInnerHTML"?ms(r,P):x==="children"?et(r,P):ue(r,x,P,h)}switch(s){case"input":an(r,n);break;case"textarea":cs(r,n);break;case"select":var T=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!n.multiple;var q=n.value;q!=null?xa(r,!!n.multiple,q,!1):T!==!!n.multiple&&(n.defaultValue!=null?xa(r,!!n.multiple,n.defaultValue,!0):xa(r,!!n.multiple,n.multiple?[]:"",!1))}r[bt]=n}catch(j){Te(e,e.return,j)}}break;case 6:if(To(o,e),qo(e),t&4){if(e.stateNode===null)throw Error(c(162));r=e.stateNode,n=e.memoizedProps;try{r.nodeValue=n}catch(j){Te(e,e.return,j)}}break;case 3:if(To(o,e),qo(e),t&4&&a!==null&&a.memoizedState.isDehydrated)try{ut(o.containerInfo)}catch(j){Te(e,e.return,j)}break;case 4:To(o,e),qo(e);break;case 13:To(o,e),qo(e),r=e.child,r.flags&8192&&(n=r.memoizedState!==null,r.stateNode.isHidden=n,!n||r.alternate!==null&&r.alternate.memoizedState!==null||(Li=xe())),t&4&&Oc(e);break;case 22:if(x=a!==null&&a.memoizedState!==null,e.mode&1?(Ge=(h=Ge)||x,To(o,e),Ge=h):To(o,e),qo(e),t&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!x&&(e.mode&1)!==0)for(M=e,x=e.child;x!==null;){for(P=M=x;M!==null;){switch(T=M,q=T.child,T.tag){case 0:case 11:case 14:case 15:qt(4,T,T.return);break;case 1:Ga(T,T.return);var _=T.stateNode;if(typeof _.componentWillUnmount=="function"){t=T,a=T.return;try{o=t,_.props=o.memoizedProps,_.state=o.memoizedState,_.componentWillUnmount()}catch(j){Te(t,a,j)}}break;case 5:Ga(T,T.return);break;case 22:if(T.memoizedState!==null){kc(P);continue}}q!==null?(q.return=T,M=q):kc(P)}x=x.sibling}e:for(x=null,P=e;;){if(P.tag===5){if(x===null){x=P;try{r=P.stateNode,h?(n=r.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(s=P.stateNode,u=P.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ps("display",i))}catch(j){Te(e,e.return,j)}}}else if(P.tag===6){if(x===null)try{P.stateNode.nodeValue=h?"":P.memoizedProps}catch(j){Te(e,e.return,j)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;x===P&&(x=null),P=P.return}x===P&&(x=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:To(o,e),qo(e),t&4&&Oc(e);break;case 21:break;default:To(o,e),qo(e)}}function qo(e){var o=e.flags;if(o&2){try{e:{for(var a=e.return;a!==null;){if(Rc(a)){var t=a;break e}a=a.return}throw Error(c(160))}switch(t.tag){case 5:var r=t.stateNode;t.flags&32&&(et(r,""),t.flags&=-33);var n=Nc(e);Oi(e,n,r);break;case 3:case 4:var i=t.stateNode.containerInfo,s=Nc(e);Di(e,s,i);break;default:throw Error(c(161))}}catch(u){Te(e,e.return,u)}e.flags&=-3}o&4096&&(e.flags&=-4097)}function Gu(e,o,a){M=e,qc(e)}function qc(e,o,a){for(var t=(e.mode&1)!==0;M!==null;){var r=M,n=r.child;if(r.tag===22&&t){var i=r.memoizedState!==null||Or;if(!i){var s=r.alternate,u=s!==null&&s.memoizedState!==null||Ge;s=Or;var h=Ge;if(Or=i,(Ge=u)&&!h)for(M=r;M!==null;)i=M,u=i.child,i.tag===22&&i.memoizedState!==null?Mc(r):u!==null?(u.return=i,M=u):Mc(r);for(;n!==null;)M=n,qc(n),n=n.sibling;M=r,Or=s,Ge=h}Lc(e)}else(r.subtreeFlags&8772)!==0&&n!==null?(n.return=r,M=n):Lc(e)}}function Lc(e){for(;M!==null;){var o=M;if((o.flags&8772)!==0){var a=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Ge||wr(5,o);break;case 1:var t=o.stateNode;if(o.flags&4&&!Ge)if(a===null)t.componentDidMount();else{var r=o.elementType===o.type?a.memoizedProps:bo(o.type,a.memoizedProps);t.componentDidUpdate(r,a.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var n=o.updateQueue;n!==null&&kl(o,n,t);break;case 3:var i=o.updateQueue;if(i!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}kl(o,i,a)}break;case 5:var s=o.stateNode;if(a===null&&o.flags&4){a=s;var u=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var h=o.alternate;if(h!==null){var x=h.memoizedState;if(x!==null){var P=x.dehydrated;P!==null&&ut(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ge||o.flags&512&&Ni(o)}catch(T){Te(o,o.return,T)}}if(o===e){M=null;break}if(a=o.sibling,a!==null){a.return=o.return,M=a;break}M=o.return}}function kc(e){for(;M!==null;){var o=M;if(o===e){M=null;break}var a=o.sibling;if(a!==null){a.return=o.return,M=a;break}M=o.return}}function Mc(e){for(;M!==null;){var o=M;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{wr(4,o)}catch(u){Te(o,a,u)}break;case 1:var t=o.stateNode;if(typeof t.componentDidMount=="function"){var r=o.return;try{t.componentDidMount()}catch(u){Te(o,r,u)}}var n=o.return;try{Ni(o)}catch(u){Te(o,n,u)}break;case 5:var i=o.return;try{Ni(o)}catch(u){Te(o,i,u)}}}catch(u){Te(o,o.return,u)}if(o===e){M=null;break}var s=o.sibling;if(s!==null){s.return=o.return,M=s;break}M=o.return}}var $u=Math.ceil,qr=ye.ReactCurrentDispatcher,wi=ye.ReactCurrentOwner,Co=ye.ReactCurrentBatchConfig,ne=0,qe=null,Ae=null,je=0,mo=0,$a=Jo(0),De=0,Lt=null,Sa=0,Lr=0,qi=0,kt=null,oo=null,Li=0,Qa=1/0,Bo=null,kr=!1,ki=null,ra=null,Mr=!1,na=null,Fr=0,Mt=0,Mi=null,_r=-1,zr=0;function Qe(){return(ne&6)!==0?xe():_r!==-1?_r:_r=xe()}function ia(e){return(e.mode&1)===0?1:(ne&2)!==0&&je!==0?je&-je:Du.transition!==null?(zr===0&&(zr=Ns()),zr):(e=ce,e!==0||(e=window.event,e=e===void 0?16:_s(e.type)),e)}function xo(e,o,a,t){if(50<Mt)throw Mt=0,Mi=null,Error(c(185));it(e,a,t),((ne&2)===0||e!==qe)&&(e===qe&&((ne&2)===0&&(Lr|=a),De===4&&sa(e,je)),ao(e,t),a===1&&ne===0&&(o.mode&1)===0&&(Qa=xe()+500,pr&&ea()))}function ao(e,o){var a=e.callbackNode;Dd(e,o);var t=Qt(e,e===qe?je:0);if(t===0)a!==null&&Ps(a),e.callbackNode=null,e.callbackPriority=0;else if(o=t&-t,e.callbackPriority!==o){if(a!=null&&Ps(a),o===1)e.tag===0?Nu(_c.bind(null,e)):Il(_c.bind(null,e)),xu(function(){(ne&6)===0&&ea()}),a=null;else{switch(Ds(t)){case 1:a=gn;break;case 4:a=As;break;case 16:a=Ht;break;case 536870912:a=Rs;break;default:a=Ht}a=Gc(a,Fc.bind(null,e))}e.callbackPriority=o,e.callbackNode=a}}function Fc(e,o){if(_r=-1,zr=0,(ne&6)!==0)throw Error(c(327));var a=e.callbackNode;if(Ka()&&e.callbackNode!==a)return null;var t=Qt(e,e===qe?je:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||o)o=jr(e,t);else{o=t;var r=ne;ne|=2;var n=jc();(qe!==e||je!==o)&&(Bo=null,Qa=xe()+500,ya(e,o));do try{Yu();break}catch(s){zc(e,s)}while(!0);ei(),qr.current=n,ne=r,Ae!==null?o=0:(qe=null,je=0,o=De)}if(o!==0){if(o===2&&(r=vn(e),r!==0&&(t=r,o=Fi(e,r))),o===1)throw a=Lt,ya(e,0),sa(e,t),ao(e,xe()),a;if(o===6)sa(e,t);else{if(r=e.current.alternate,(t&30)===0&&!Qu(r)&&(o=jr(e,t),o===2&&(n=vn(e),n!==0&&(t=n,o=Fi(e,n))),o===1))throw a=Lt,ya(e,0),sa(e,t),ao(e,xe()),a;switch(e.finishedWork=r,e.finishedLanes=t,o){case 0:case 1:throw Error(c(345));case 2:ba(e,oo,Bo);break;case 3:if(sa(e,t),(t&130023424)===t&&(o=Li+500-xe(),10<o)){if(Qt(e,0)!==0)break;if(r=e.suspendedLanes,(r&t)!==t){Qe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Wn(ba.bind(null,e,oo,Bo),o);break}ba(e,oo,Bo);break;case 4:if(sa(e,t),(t&4194240)===t)break;for(o=e.eventTimes,r=-1;0<t;){var i=31-So(t);n=1<<i,i=o[i],i>r&&(r=i),t&=~n}if(t=r,t=xe()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*$u(t/1960))-t,10<t){e.timeoutHandle=Wn(ba.bind(null,e,oo,Bo),t);break}ba(e,oo,Bo);break;case 5:ba(e,oo,Bo);break;default:throw Error(c(329))}}}return ao(e,xe()),e.callbackNode===a?Fc.bind(null,e):null}function Fi(e,o){var a=kt;return e.current.memoizedState.isDehydrated&&(ya(e,o).flags|=256),e=jr(e,o),e!==2&&(o=oo,oo=a,o!==null&&_i(o)),e}function _i(e){oo===null?oo=e:oo.push.apply(oo,e)}function Qu(e){for(var o=e;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var t=0;t<a.length;t++){var r=a[t],n=r.getSnapshot;r=r.value;try{if(!Eo(n(),r))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function sa(e,o){for(o&=~qi,o&=~Lr,e.suspendedLanes|=o,e.pingedLanes&=~o,e=e.expirationTimes;0<o;){var a=31-So(o),t=1<<a;e[a]=-1,o&=~t}}function _c(e){if((ne&6)!==0)throw Error(c(327));Ka();var o=Qt(e,0);if((o&1)===0)return ao(e,xe()),null;var a=jr(e,o);if(e.tag!==0&&a===2){var t=vn(e);t!==0&&(o=t,a=Fi(e,t))}if(a===1)throw a=Lt,ya(e,0),sa(e,o),ao(e,xe()),a;if(a===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=o,ba(e,oo,Bo),ao(e,xe()),null}function zi(e,o){var a=ne;ne|=1;try{return e(o)}finally{ne=a,ne===0&&(Qa=xe()+500,pr&&ea())}}function Ea(e){na!==null&&na.tag===0&&(ne&6)===0&&Ka();var o=ne;ne|=1;var a=Co.transition,t=ce;try{if(Co.transition=null,ce=1,e)return e()}finally{ce=t,Co.transition=a,ne=o,(ne&6)===0&&ea()}}function ji(){mo=$a.current,he($a)}function ya(e,o){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Tu(a)),Ae!==null)for(a=Ae.return;a!==null;){var t=a;switch(Kn(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&ur();break;case 3:Ha(),he(Je),he(We),li();break;case 5:ii(t);break;case 4:Ha();break;case 13:he(be);break;case 19:he(be);break;case 10:oi(t.type._context);break;case 22:case 23:ji()}a=a.return}if(qe=e,Ae=e=la(e.current,null),je=mo=o,De=0,Lt=null,qi=Lr=Sa=0,oo=kt=null,va!==null){for(o=0;o<va.length;o++)if(a=va[o],t=a.interleaved,t!==null){a.interleaved=null;var r=t.next,n=a.pending;if(n!==null){var i=n.next;n.next=r,t.next=i}a.pending=t}va=null}return e}function zc(e,o){do{var a=Ae;try{if(ei(),Ir.current=Ar,Tr){for(var t=Ie.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Tr=!1}if(ha=0,we=Ne=Ie=null,Rt=!1,Nt=0,wi.current=null,a===null||a.return===null){De=1,Lt=o,Ae=null;break}e:{var n=e,i=a.return,s=a,u=o;if(o=je,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,x=s,P=x.tag;if((x.mode&1)===0&&(P===0||P===11||P===15)){var T=x.alternate;T?(x.updateQueue=T.updateQueue,x.memoizedState=T.memoizedState,x.lanes=T.lanes):(x.updateQueue=null,x.memoizedState=null)}var q=dc(i);if(q!==null){q.flags&=-257,uc(q,i,s,n,o),q.mode&1&&cc(n,h,o),o=q,u=h;var _=o.updateQueue;if(_===null){var j=new Set;j.add(u),o.updateQueue=j}else _.add(u);break e}else{if((o&1)===0){cc(n,h,o),Ui();break e}u=Error(c(426))}}else if(Ee&&s.mode&1){var Pe=dc(i);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),uc(Pe,i,s,n,o),Jn(Va(u,s));break e}}n=u=Va(u,s),De!==4&&(De=2),kt===null?kt=[n]:kt.push(n),n=i;do{switch(n.tag){case 3:n.flags|=65536,o&=-o,n.lanes|=o;var g=sc(n,u,o);Ll(n,g);break e;case 1:s=u;var p=n.type,v=n.stateNode;if((n.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ra===null||!ra.has(v)))){n.flags|=65536,o&=-o,n.lanes|=o;var N=lc(n,s,o);Ll(n,N);break e}}n=n.return}while(n!==null)}Bc(a)}catch(B){o=B,Ae===a&&a!==null&&(Ae=a=a.return);continue}break}while(!0)}function jc(){var e=qr.current;return qr.current=Ar,e===null?Ar:e}function Ui(){(De===0||De===3||De===2)&&(De=4),qe===null||(Sa&268435455)===0&&(Lr&268435455)===0||sa(qe,je)}function jr(e,o){var a=ne;ne|=2;var t=jc();(qe!==e||je!==o)&&(Bo=null,ya(e,o));do try{Ku();break}catch(r){zc(e,r)}while(!0);if(ei(),ne=a,qr.current=t,Ae!==null)throw Error(c(261));return qe=null,je=0,De}function Ku(){for(;Ae!==null;)Uc(Ae)}function Yu(){for(;Ae!==null&&!yd();)Uc(Ae)}function Uc(e){var o=Vc(e.alternate,e,mo);e.memoizedProps=e.pendingProps,o===null?Bc(e):Ae=o,wi.current=null}function Bc(e){var o=e;do{var a=o.alternate;if(e=o.return,(o.flags&32768)===0){if(a=Bu(a,o,mo),a!==null){Ae=a;return}}else{if(a=Wu(a,o),a!==null){a.flags&=32767,Ae=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Ae=null;return}}if(o=o.sibling,o!==null){Ae=o;return}Ae=o=e}while(o!==null);De===0&&(De=5)}function ba(e,o,a){var t=ce,r=Co.transition;try{Co.transition=null,ce=1,Xu(e,o,a,t)}finally{Co.transition=r,ce=t}return null}function Xu(e,o,a,t){do Ka();while(na!==null);if((ne&6)!==0)throw Error(c(327));a=e.finishedWork;var r=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var n=a.lanes|a.childLanes;if(Od(e,n),e===qe&&(Ae=qe=null,je=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Mr||(Mr=!0,Gc(Ht,function(){return Ka(),null})),n=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||n){n=Co.transition,Co.transition=null;var i=ce;ce=1;var s=ne;ne|=4,wi.current=null,Vu(e,a),wc(a,e),Cu(Un),Xt=!!jn,Un=jn=null,e.current=a,Gu(a),bd(),ne=s,ce=i,Co.transition=n}else e.current=a;if(Mr&&(Mr=!1,na=e,Fr=r),n=e.pendingLanes,n===0&&(ra=null),xd(a.stateNode),ao(e,xe()),o!==null)for(t=e.onRecoverableError,a=0;a<o.length;a++)r=o[a],t(r.value,{componentStack:r.stack,digest:r.digest});if(kr)throw kr=!1,e=ki,ki=null,e;return(Fr&1)!==0&&e.tag!==0&&Ka(),n=e.pendingLanes,(n&1)!==0?e===Mi?Mt++:(Mt=0,Mi=e):Mt=0,ea(),null}function Ka(){if(na!==null){var e=Ds(Fr),o=Co.transition,a=ce;try{if(Co.transition=null,ce=16>e?16:e,na===null)var t=!1;else{if(e=na,na=null,Fr=0,(ne&6)!==0)throw Error(c(331));var r=ne;for(ne|=4,M=e.current;M!==null;){var n=M,i=n.child;if((M.flags&16)!==0){var s=n.deletions;if(s!==null){for(var u=0;u<s.length;u++){var h=s[u];for(M=h;M!==null;){var x=M;switch(x.tag){case 0:case 11:case 15:qt(8,x,n)}var P=x.child;if(P!==null)P.return=x,M=P;else for(;M!==null;){x=M;var T=x.sibling,q=x.return;if(Ac(x),x===h){M=null;break}if(T!==null){T.return=q,M=T;break}M=q}}}var _=n.alternate;if(_!==null){var j=_.child;if(j!==null){_.child=null;do{var Pe=j.sibling;j.sibling=null,j=Pe}while(j!==null)}}M=n}}if((n.subtreeFlags&2064)!==0&&i!==null)i.return=n,M=i;else e:for(;M!==null;){if(n=M,(n.flags&2048)!==0)switch(n.tag){case 0:case 11:case 15:qt(9,n,n.return)}var g=n.sibling;if(g!==null){g.return=n.return,M=g;break e}M=n.return}}var p=e.current;for(M=p;M!==null;){i=M;var v=i.child;if((i.subtreeFlags&2064)!==0&&v!==null)v.return=i,M=v;else e:for(i=p;M!==null;){if(s=M,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:wr(9,s)}}catch(B){Te(s,s.return,B)}if(s===i){M=null;break e}var N=s.sibling;if(N!==null){N.return=s.return,M=N;break e}M=s.return}}if(ne=r,ea(),No&&typeof No.onPostCommitFiberRoot=="function")try{No.onPostCommitFiberRoot(Vt,e)}catch{}t=!0}return t}finally{ce=a,Co.transition=o}}return!1}function Wc(e,o,a){o=Va(a,o),o=sc(e,o,1),e=aa(e,o,1),o=Qe(),e!==null&&(it(e,1,o),ao(e,o))}function Te(e,o,a){if(e.tag===3)Wc(e,e,a);else for(;o!==null;){if(o.tag===3){Wc(o,e,a);break}else if(o.tag===1){var t=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ra===null||!ra.has(t))){e=Va(a,e),e=lc(o,e,1),o=aa(o,e,1),e=Qe(),o!==null&&(it(o,1,e),ao(o,e));break}}o=o.return}}function Ju(e,o,a){var t=e.pingCache;t!==null&&t.delete(o),o=Qe(),e.pingedLanes|=e.suspendedLanes&a,qe===e&&(je&a)===a&&(De===4||De===3&&(je&130023424)===je&&500>xe()-Li?ya(e,0):qi|=a),ao(e,o)}function Hc(e,o){o===0&&((e.mode&1)===0?o=1:(o=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var a=Qe();e=zo(e,o),e!==null&&(it(e,o,a),ao(e,a))}function Zu(e){var o=e.memoizedState,a=0;o!==null&&(a=o.retryLane),Hc(e,a)}function em(e,o){var a=0;switch(e.tag){case 13:var t=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(c(314))}t!==null&&t.delete(o),Hc(e,a)}var Vc;Vc=function(e,o,a){if(e!==null)if(e.memoizedProps!==o.pendingProps||Je.current)eo=!0;else{if((e.lanes&a)===0&&(o.flags&128)===0)return eo=!1,Uu(e,o,a);eo=(e.flags&131072)!==0}else eo=!1,Ee&&(o.flags&1048576)!==0&&Tl(o,gr,o.index);switch(o.lanes=0,o.tag){case 2:var t=o.type;Dr(e,o),e=o.pendingProps;var r=Fa(o,We.current);Wa(o,a),r=ui(null,o,t,e,r,a);var n=mi();return o.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Ze(t)?(n=!0,mr(o)):n=!1,o.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ri(o),r.updater=Rr,o.stateNode=r,r._reactInternals=o,hi(o,t,e,a),o=bi(null,o,t,!0,n,a)):(o.tag=0,Ee&&n&&Qn(o),$e(null,o,r,a),o=o.child),o;case 16:t=o.elementType;e:{switch(Dr(e,o),e=o.pendingProps,r=t._init,t=r(t._payload),o.type=t,r=o.tag=am(t),e=bo(t,e),r){case 0:o=yi(null,o,t,e,a);break e;case 1:o=Cc(null,o,t,e,a);break e;case 11:o=mc(null,o,t,e,a);break e;case 14:o=pc(null,o,t,bo(t.type,e),a);break e}throw Error(c(306,t,""))}return o;case 0:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:bo(t,r),yi(e,o,t,r,a);case 1:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:bo(t,r),Cc(e,o,t,r,a);case 3:e:{if(hc(o),e===null)throw Error(c(387));t=o.pendingProps,n=o.memoizedState,r=n.element,ql(e,o),yr(o,t,null,a);var i=o.memoizedState;if(t=i.element,n.isDehydrated)if(n={element:t,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},o.updateQueue.baseState=n,o.memoizedState=n,o.flags&256){r=Va(Error(c(423)),o),o=Sc(e,o,t,a,r);break e}else if(t!==r){r=Va(Error(c(424)),o),o=Sc(e,o,t,a,r);break e}else for(uo=Xo(o.stateNode.containerInfo.firstChild),co=o,Ee=!0,yo=null,a=Ol(o,null,t,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ja(),t===r){o=Uo(e,o,a);break e}$e(e,o,t,a)}o=o.child}return o;case 5:return Ml(o),e===null&&Xn(o),t=o.type,r=o.pendingProps,n=e!==null?e.memoizedProps:null,i=r.children,Bn(t,r)?i=null:n!==null&&Bn(t,n)&&(o.flags|=32),vc(e,o),$e(e,o,i,a),o.child;case 6:return e===null&&Xn(o),null;case 13:return Ec(e,o,a);case 4:return ni(o,o.stateNode.containerInfo),t=o.pendingProps,e===null?o.child=Ua(o,null,t,a):$e(e,o,t,a),o.child;case 11:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:bo(t,r),mc(e,o,t,r,a);case 7:return $e(e,o,o.pendingProps,a),o.child;case 8:return $e(e,o,o.pendingProps.children,a),o.child;case 12:return $e(e,o,o.pendingProps.children,a),o.child;case 10:e:{if(t=o.type._context,r=o.pendingProps,n=o.memoizedProps,i=r.value,fe(hr,t._currentValue),t._currentValue=i,n!==null)if(Eo(n.value,i)){if(n.children===r.children&&!Je.current){o=Uo(e,o,a);break e}}else for(n=o.child,n!==null&&(n.return=o);n!==null;){var s=n.dependencies;if(s!==null){i=n.child;for(var u=s.firstContext;u!==null;){if(u.context===t){if(n.tag===1){u=jo(-1,a&-a),u.tag=2;var h=n.updateQueue;if(h!==null){h=h.shared;var x=h.pending;x===null?u.next=u:(u.next=x.next,x.next=u),h.pending=u}}n.lanes|=a,u=n.alternate,u!==null&&(u.lanes|=a),ai(n.return,a,o),s.lanes|=a;break}u=u.next}}else if(n.tag===10)i=n.type===o.type?null:n.child;else if(n.tag===18){if(i=n.return,i===null)throw Error(c(341));i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),ai(i,a,o),i=n.sibling}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===o){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}$e(e,o,r.children,a),o=o.child}return o;case 9:return r=o.type,t=o.pendingProps.children,Wa(o,a),r=go(r),t=t(r),o.flags|=1,$e(e,o,t,a),o.child;case 14:return t=o.type,r=bo(t,o.pendingProps),r=bo(t.type,r),pc(e,o,t,r,a);case 15:return fc(e,o,o.type,o.pendingProps,a);case 17:return t=o.type,r=o.pendingProps,r=o.elementType===t?r:bo(t,r),Dr(e,o),o.tag=1,Ze(t)?(e=!0,mr(o)):e=!1,Wa(o,a),nc(o,t,r),hi(o,t,r,a),bi(null,o,t,!0,e,a);case 19:return bc(e,o,a);case 22:return gc(e,o,a)}throw Error(c(156,o.tag))};function Gc(e,o){return xs(e,o)}function om(e,o,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ho(e,o,a,t){return new om(e,o,a,t)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function am(e){if(typeof e=="function")return Bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===no)return 11;if(e===io)return 14}return 2}function la(e,o){var a=e.alternate;return a===null?(a=ho(e.tag,o,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=o,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,o=e.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Ur(e,o,a,t,r,n){var i=2;if(t=e,typeof e=="function")Bi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case me:return Ia(a.children,r,n,o);case Oe:i=8,r|=8;break;case ro:return e=ho(12,a,o,r|2),e.elementType=ro,e.lanes=n,e;case Ue:return e=ho(13,a,o,r),e.elementType=Ue,e.lanes=n,e;case Ye:return e=ho(19,a,o,r),e.elementType=Ye,e.lanes=n,e;case ve:return Br(a,r,n,o);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:i=10;break e;case Lo:i=9;break e;case no:i=11;break e;case io:i=14;break e;case _e:i=16,t=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return o=ho(i,a,o,r),o.elementType=e,o.type=t,o.lanes=n,o}function Ia(e,o,a,t){return e=ho(7,e,t,o),e.lanes=a,e}function Br(e,o,a,t){return e=ho(22,e,t,o),e.elementType=ve,e.lanes=a,e.stateNode={isHidden:!1},e}function Wi(e,o,a){return e=ho(6,e,null,o),e.lanes=a,e}function Hi(e,o,a){return o=ho(4,e.children!==null?e.children:[],e.key,o),o.lanes=a,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function tm(e,o,a,t,r){this.tag=o,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cn(0),this.expirationTimes=Cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.identifierPrefix=t,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vi(e,o,a,t,r,n,i,s,u){return e=new tm(e,o,a,s,u),o===1?(o=1,n===!0&&(o|=8)):o=0,n=ho(3,null,null,o),e.current=n,n.stateNode=e,n.memoizedState={element:t,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ri(n),e}function rm(e,o,a){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:t==null?null:""+t,children:e,containerInfo:o,implementation:a}}function $c(e){if(!e)return Zo;e=e._reactInternals;e:{if(ua(e)!==e||e.tag!==1)throw Error(c(170));var o=e;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Ze(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(c(171))}if(e.tag===1){var a=e.type;if(Ze(a))return yl(e,a,o)}return o}function Qc(e,o,a,t,r,n,i,s,u){return e=Vi(a,t,!0,e,r,n,i,s,u),e.context=$c(null),a=e.current,t=Qe(),r=ia(a),n=jo(t,r),n.callback=o??null,aa(a,n,r),e.current.lanes=r,it(e,r,t),ao(e,t),e}function Wr(e,o,a,t){var r=o.current,n=Qe(),i=ia(r);return a=$c(a),o.context===null?o.context=a:o.pendingContext=a,o=jo(n,i),o.payload={element:e},t=t===void 0?null:t,t!==null&&(o.callback=t),e=aa(r,o,i),e!==null&&(xo(e,r,i,n),Er(e,r,i)),i}function Hr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,o){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<o?a:o}}function Gi(e,o){Kc(e,o),(e=e.alternate)&&Kc(e,o)}function nm(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function $i(e){this._internalRoot=e}Vr.prototype.render=$i.prototype.render=function(e){var o=this._internalRoot;if(o===null)throw Error(c(409));Wr(e,o,null,null)},Vr.prototype.unmount=$i.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var o=e.containerInfo;Ea(function(){Wr(null,e,null,null)}),o[ko]=null}};function Vr(e){this._internalRoot=e}Vr.prototype.unstable_scheduleHydration=function(e){if(e){var o=qs();e={blockedOn:null,target:e,priority:o};for(var a=0;a<Qo.length&&o!==0&&o<Qo[a].priority;a++);Qo.splice(a,0,e),a===0&&Ms(e)}};function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function im(e,o,a,t,r){if(r){if(typeof t=="function"){var n=t;t=function(){var h=Hr(i);n.call(h)}}var i=Qc(o,t,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=i,e[ko]=i.current,Et(e.nodeType===8?e.parentNode:e),Ea(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof t=="function"){var s=t;t=function(){var h=Hr(u);s.call(h)}}var u=Vi(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=u,e[ko]=u.current,Et(e.nodeType===8?e.parentNode:e),Ea(function(){Wr(o,u,a,t)}),u}function $r(e,o,a,t,r){var n=a._reactRootContainer;if(n){var i=n;if(typeof r=="function"){var s=r;r=function(){var u=Hr(i);s.call(u)}}Wr(o,i,e,r)}else i=im(a,o,e,r,t);return Hr(i)}Os=function(e){switch(e.tag){case 3:var o=e.stateNode;if(o.current.memoizedState.isDehydrated){var a=nt(o.pendingLanes);a!==0&&(hn(o,a|1),ao(o,xe()),(ne&6)===0&&(Qa=xe()+500,ea()))}break;case 13:Ea(function(){var t=zo(e,1);if(t!==null){var r=Qe();xo(t,e,1,r)}}),Gi(e,1)}},Sn=function(e){if(e.tag===13){var o=zo(e,134217728);if(o!==null){var a=Qe();xo(o,e,134217728,a)}Gi(e,134217728)}},ws=function(e){if(e.tag===13){var o=ia(e),a=zo(e,o);if(a!==null){var t=Qe();xo(a,e,o,t)}Gi(e,o)}},qs=function(){return ce},Ls=function(e,o){var a=ce;try{return ce=e,o()}finally{ce=a}},un=function(e,o,a){switch(o){case"input":if(an(e,a),o=a.name,a.type==="radio"&&o!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var t=a[o];if(t!==e&&t.form===e.form){var r=dr(t);if(!r)throw Error(c(90));Be(t),an(t,r)}}}break;case"textarea":cs(e,a);break;case"select":o=a.value,o!=null&&xa(e,!!a.multiple,o,!1)}},hs=zi,Ss=Ea;var sm={usingClientEntryPoint:!1,Events:[It,ka,dr,vs,Cs,zi]},Ft={findFiberByHostInstance:ma,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:Ft.bundleType,version:Ft.version,rendererPackageName:Ft.rendererPackageName,rendererConfig:Ft.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Is(e),e===null?null:e.stateNode},findFiberByHostInstance:Ft.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Vt=Qr.inject(lm),No=Qr}catch{}}return to.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm,to.createPortal=function(e,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qi(o))throw Error(c(200));return rm(e,o,null,a)},to.createRoot=function(e,o){if(!Qi(e))throw Error(c(299));var a=!1,t="",r=Yc;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(t=o.identifierPrefix),o.onRecoverableError!==void 0&&(r=o.onRecoverableError)),o=Vi(e,1,!1,null,null,a,!1,t,r),e[ko]=o.current,Et(e.nodeType===8?e.parentNode:e),new $i(o)},to.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var o=e._reactInternals;if(o===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Is(o),e=e===null?null:e.stateNode,e},to.flushSync=function(e){return Ea(e)},to.hydrate=function(e,o,a){if(!Gr(o))throw Error(c(200));return $r(null,e,o,!0,a)},to.hydrateRoot=function(e,o,a){if(!Qi(e))throw Error(c(405));var t=a!=null&&a.hydratedSources||null,r=!1,n="",i=Yc;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),o=Qc(o,null,e,1,a??null,r,!1,n,i),e[ko]=o.current,Et(e),t)for(e=0;e<t.length;e++)a=t[e],r=a._getVersion,r=r(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,r]:o.mutableSourceEagerHydrationData.push(a,r);return new Vr(o)},to.render=function(e,o,a){if(!Gr(o))throw Error(c(200));return $r(null,e,o,!1,a)},to.unmountComponentAtNode=function(e){if(!Gr(e))throw Error(c(40));return e._reactRootContainer?(Ea(function(){$r(null,null,e,!1,function(){e._reactRootContainer=null,e[ko]=null})}),!0):!1},to.unstable_batchedUpdates=zi,to.unstable_renderSubtreeIntoContainer=function(e,o,a,t){if(!Gr(a))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return $r(e,o,a,!1,t)},to.version="18.3.1-next-f1338f8080-20240426",to}var nd;function vm(){if(nd)return Xi.exports;nd=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(C){console.error(C)}}return l(),Xi.exports=gm(),Xi.exports}var id;function Cm(){if(id)return Kr;id=1;var l=vm();return Kr.createRoot=l.createRoot,Kr.hydrateRoot=l.hydrateRoot,Kr}var hm=Cm(),F=ts();const m={bg:"#0a0a0f",surface:"#080c14",surface2:"#0f172a",border:"#1e293b",text:"#e2e8f0",textMuted:"#64748b",textDim:"#334155",m1:"#00D4FF",m2:"#7C3AED",m3:"#059669",m4:"#F59E0B",m5:"#7C3AED",m6:"#059669",m7:"#DC2626",m8:"#F59E0B",m9:"#06B6D4",m10:"#8B5CF6",m11:"#10B981",m12:"#F59E0B",success:"#10B981",error:"#EF4444",warning:"#F97316",xp:"#00D4FF"},Ya={moduleGroup:{marginBottom:24},moduleTitle:{fontSize:14,fontWeight:700,color:m.text,marginBottom:10,display:"flex",alignItems:"center",gap:8},noteCard:{padding:"12px 16px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:8},noteTitle:{fontSize:13,fontWeight:600,color:m.text,marginBottom:6},noteText:{fontSize:13,lineHeight:1.6,color:m.textMuted,whiteSpace:"pre-wrap"},empty:{textAlign:"center",padding:"40px 0",color:m.textMuted,fontSize:14}};function Sm({modules:l,notes:C}){return Object.values(C).some(y=>y&&y.trim())?d.jsx("div",{children:l.map(y=>{const E=y.topics.filter(S=>C[S.id]&&C[S.id].trim());return E.length===0?null:d.jsxs("div",{style:Ya.moduleGroup,children:[d.jsxs("div",{style:Ya.moduleTitle,children:[d.jsx("span",{children:y.icon}),d.jsx("span",{children:y.title})]}),E.map(S=>d.jsxs("div",{style:Ya.noteCard,children:[d.jsx("div",{style:Ya.noteTitle,children:S.title}),d.jsx("div",{style:Ya.noteText,children:C[S.id]})]},S.id))]},y.id)})}):d.jsx("div",{style:Ya.empty,children:"📝 Nenhuma anotação ainda. Comece a escrever nos tópicos!"})}function jt(l){if(l<60)return`${l}s`;const C=Math.floor(l/60);return C<60?`${C}min`:`${Math.floor(C/60)}h ${C%60}min`}const Se={section:{marginBottom:28},sectionTitle:{fontSize:14,fontWeight:700,color:m.text,marginBottom:12,display:"flex",alignItems:"center",gap:8},grid:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},topicCard:{padding:"10px 12px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,fontSize:12,lineHeight:1.4},topicTitle:{fontWeight:600,color:m.text,marginBottom:4},topicStatus:{fontSize:11,color:m.textMuted},moduleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:6},moduleLabel:{fontSize:13,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8},moduleValue:{fontSize:13,color:m.textMuted},xpRow:{display:"flex",justifyContent:"space-between",padding:"8px 14px",borderRadius:6,background:m.surface2,marginBottom:4,fontSize:13},xpLabel:{color:m.textMuted},xpValue:{color:m.xp,fontWeight:600}};function Em({modules:l,completedTopics:C,checklists:c,quizzes:y,timers:E,xp:S}){let R=0,A=0,b=0;for(const O of l){O.topics.every(w=>C.includes(w.id))&&(b+=100);for(const w of O.topics){const k=c[w.id];k&&k.length>0&&k.every(Boolean)&&(R+=20);const K=y[w.id];if(K&&K.submitted){const Z=K.answers.reduce((W,U,G)=>W+(U===w.quiz[G].answer?1:0),0);A+=Z*10}}}return d.jsxs("div",{children:[l.map(O=>d.jsxs("div",{style:Se.section,children:[d.jsxs("div",{style:Se.sectionTitle,children:[d.jsx("span",{children:O.icon}),d.jsx("span",{children:O.title})]}),d.jsx("div",{style:Se.grid,children:O.topics.map(z=>{const w=C.includes(z.id);return d.jsxs("div",{style:{...Se.topicCard,borderColor:w?`${m.success}60`:m.border},children:[d.jsxs("div",{style:Se.topicTitle,children:[w?"✅":"○"," ",z.title]}),d.jsx("div",{style:Se.topicStatus,children:w?"Concluído":"Pendente"})]},z.id)})})]},O.id)),d.jsxs("div",{style:Se.section,children:[d.jsx("div",{style:Se.sectionTitle,children:"⏱ Tempo por Módulo"}),l.map(O=>d.jsxs("div",{style:Se.moduleRow,children:[d.jsxs("span",{style:Se.moduleLabel,children:[d.jsx("span",{children:O.icon})," ",O.title]}),d.jsx("span",{style:Se.moduleValue,children:jt(E[O.id]||0)})]},O.id))]}),d.jsxs("div",{style:Se.section,children:[d.jsx("div",{style:Se.sectionTitle,children:"⚡ Origem do XP"}),d.jsxs("div",{style:Se.xpRow,children:[d.jsx("span",{style:Se.xpLabel,children:"Checklists completos"}),d.jsxs("span",{style:Se.xpValue,children:[R," XP"]})]}),d.jsxs("div",{style:Se.xpRow,children:[d.jsx("span",{style:Se.xpLabel,children:"Respostas corretas no quiz"}),d.jsxs("span",{style:Se.xpValue,children:[A," XP"]})]}),d.jsxs("div",{style:Se.xpRow,children:[d.jsx("span",{style:Se.xpLabel,children:"Módulos completos"}),d.jsxs("span",{style:Se.xpValue,children:[b," XP"]})]}),d.jsxs("div",{style:{...Se.xpRow,borderTop:`1px solid ${m.border}`,marginTop:8,paddingTop:12},children:[d.jsx("span",{style:{...Se.xpLabel,fontWeight:700,color:m.text},children:"Total"}),d.jsxs("span",{style:{...Se.xpValue,fontSize:15},children:[S," XP"]})]})]})]})}const Ta={moduleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:8},label:{fontSize:14,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8},value:{fontSize:14,color:m.textMuted,fontWeight:600},totalRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px",borderRadius:6,background:`${m.m1}08`,border:`1px solid ${m.m1}30`,marginTop:16,marginBottom:8},totalLabel:{fontSize:15,fontWeight:700,color:m.text},totalValue:{fontSize:15,fontWeight:700,color:m.xp},avgRow:{padding:"10px 16px",borderRadius:6,background:m.surface2,fontSize:13,color:m.textMuted,textAlign:"center"}};function ym({modules:l,timers:C,completedCount:c}){const y=l.reduce((S,R)=>S+(C[R.id]||0),0),E=c>0?Math.round(y/c):0;return d.jsxs("div",{children:[l.map(S=>d.jsxs("div",{style:Ta.moduleRow,children:[d.jsxs("span",{style:Ta.label,children:[d.jsx("span",{children:S.icon})," ",S.title]}),d.jsx("span",{style:Ta.value,children:jt(C[S.id]||0)})]},S.id)),d.jsxs("div",{style:Ta.totalRow,children:[d.jsx("span",{style:Ta.totalLabel,children:"Tempo Total"}),d.jsx("span",{style:Ta.totalValue,children:jt(y)})]}),d.jsxs("div",{style:Ta.avgRow,children:["Média por tópico concluído:"," ",c>0?jt(E):"—"]})]})}const Wo={empty:{textAlign:"center",padding:"40px 0",color:m.textMuted,fontSize:14},questionCard:{padding:"16px",borderRadius:8,border:`1px solid ${m.border}`,background:m.surface2,marginBottom:12},topicLabel:{fontSize:11,color:m.textMuted,marginBottom:8,textTransform:"uppercase",letterSpacing:.5},questionText:{fontSize:14,fontWeight:600,color:m.text,marginBottom:12,lineHeight:1.5},answerRow:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6,fontSize:13,lineHeight:1.4},wrongLabel:{color:m.error,fontWeight:600,flexShrink:0},correctLabel:{color:m.success,fontWeight:600,flexShrink:0},explanation:{marginTop:10,padding:"10px 12px",borderRadius:6,background:`${m.m1}08`,border:`1px solid ${m.m1}30`,fontSize:13,color:m.textMuted,lineHeight:1.5}};function bm({modules:l,quizzes:C}){const c=[];for(const y of l)for(const E of y.topics){const S=C[E.id];!S||!S.submitted||E.quiz.forEach((R,A)=>{S.answers[A]!==R.answer&&c.push({topicTitle:E.title,moduleIcon:y.icon,moduleName:y.title,question:R.question,givenAnswer:R.options[S.answers[A]],correctAnswer:R.options[R.answer],explanation:R.explanation})})}return c.length===0?d.jsx("div",{style:Wo.empty,children:"Nenhum erro para revisar 🎉"}):d.jsx("div",{children:c.map((y,E)=>d.jsxs("div",{style:Wo.questionCard,children:[d.jsxs("div",{style:Wo.topicLabel,children:[y.moduleIcon," ",y.moduleName," › ",y.topicTitle]}),d.jsx("div",{style:Wo.questionText,children:y.question}),d.jsxs("div",{style:Wo.answerRow,children:[d.jsx("span",{style:Wo.wrongLabel,children:"Sua resposta:"}),d.jsx("span",{style:{color:m.error},children:y.givenAnswer})]}),d.jsxs("div",{style:Wo.answerRow,children:[d.jsx("span",{style:Wo.correctLabel,children:"Correta:"}),d.jsx("span",{style:{color:m.success},children:y.correctAnswer})]}),d.jsx("div",{style:Wo.explanation,children:y.explanation})]},E))})}const Im=[{key:"progress",label:"📊 Progresso"},{key:"notes",label:"📝 Anotações"},{key:"review",label:"❌ Revisar"},{key:"time",label:"⏱ Tempo"}],Po={overlay:{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center"},modal:{width:"90vw",maxWidth:780,maxHeight:"85vh",background:m.surface,borderRadius:12,border:`1px solid ${m.border}`,display:"flex",flexDirection:"column",overflow:"hidden"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",borderBottom:`1px solid ${m.border}`,flexShrink:0},title:{fontSize:18,fontWeight:700,color:m.text},closeBtn:{width:32,height:32,borderRadius:6,border:`1px solid ${m.border}`,background:"transparent",color:m.textMuted,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"},tabs:{display:"flex",gap:0,borderBottom:`1px solid ${m.border}`,flexShrink:0},tab:{flex:1,padding:"12px 16px",fontSize:13,fontWeight:600,color:m.textMuted,background:"transparent",border:"none",borderBottom:"2px solid transparent",cursor:"pointer",transition:"all 0.15s",textAlign:"center"},tabActive:{color:m.text,borderBottomColor:m.m1,background:`${m.m1}08`},body:{flex:1,overflowY:"auto",padding:24},footer:{padding:"12px 24px",borderTop:`1px solid ${m.border}`,display:"flex",justifyContent:"center",flexShrink:0},resetBtn:{padding:"8px 20px",borderRadius:6,border:`1px solid ${m.error}40`,background:"transparent",color:m.error,fontSize:13,fontWeight:600,cursor:"pointer",transition:"all 0.15s"}};function Tm({modules:l,completedTopics:C,checklists:c,quizzes:y,notes:E,timers:S,xp:R,onClose:A,onReset:b}){const[O,z]=F.useState("progress"),w=C.length,k=()=>{window.confirm("Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.")&&b()};return d.jsx("div",{style:Po.overlay,onClick:A,children:d.jsxs("div",{style:Po.modal,onClick:K=>K.stopPropagation(),children:[d.jsxs("div",{style:Po.header,children:[d.jsx("div",{style:Po.title,children:"Dashboard"}),d.jsx("button",{style:Po.closeBtn,onClick:A,"aria-label":"Fechar dashboard",children:"✕"})]}),d.jsx("div",{style:Po.tabs,children:Im.map(K=>d.jsx("button",{style:{...Po.tab,...O===K.key?Po.tabActive:{}},onClick:()=>z(K.key),children:K.label},K.key))}),d.jsxs("div",{style:Po.body,children:[O==="progress"&&d.jsx(Em,{modules:l,completedTopics:C,checklists:c,quizzes:y,timers:S,xp:R}),O==="notes"&&d.jsx(Sm,{modules:l,notes:E}),O==="review"&&d.jsx(bm,{modules:l,quizzes:y}),O==="time"&&d.jsx(ym,{modules:l,timers:S,completedCount:w})]}),d.jsx("div",{style:Po.footer,children:d.jsx("button",{style:Po.resetBtn,onClick:k,children:"🗑️ Resetar Progresso"})})]})})}const sd={container:{display:"flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:6,border:`1px solid ${m.border}`,fontSize:13,fontWeight:600,whiteSpace:"nowrap"},icon:{fontSize:14}};function xm({seconds:l,moduleColor:C}){const c=jt(l||0);return d.jsxs("div",{style:{...sd.container,color:C||m.textMuted,borderColor:C?`${C}40`:m.border},children:[d.jsx("span",{style:sd.icon,children:"⏱"}),c]})}const Yr={container:{display:"flex",alignItems:"center",gap:10,fontSize:13,color:m.textMuted,whiteSpace:"nowrap"},barOuter:{width:80,height:6,background:m.border,borderRadius:3,overflow:"hidden"},label:{fontWeight:600},pct:{color:m.text,fontWeight:700,fontSize:12}},ld={phase1:`linear-gradient(90deg, ${m.m1}, ${m.m2}, ${m.m3}, ${m.m4})`,phase2:`linear-gradient(90deg, ${m.m5}, ${m.m6}, ${m.m7}, ${m.m8})`,phase3:`linear-gradient(90deg, ${m.m9}, ${m.m10}, ${m.m11}, ${m.m12})`};function Pm({completedCount:l,totalTopics:C,currentPhase:c}){const y=C>0?Math.round(l/C*100):0,E=ld[c==null?void 0:c.id]||ld.phase1;return d.jsxs("div",{style:Yr.container,children:[d.jsxs("span",{style:Yr.label,children:[l," / ",C," tópicos"]}),d.jsx("div",{style:Yr.barOuter,children:d.jsx("div",{style:{height:"100%",width:`${y}%`,background:E,borderRadius:3,transition:"width 0.5s ease"}})}),d.jsxs("span",{style:Yr.pct,children:[y,"%"]})]})}const Xr={container:{display:"flex",alignItems:"center",gap:10,padding:"4px 12px",borderRadius:6,border:`1px solid ${m.border}`,fontSize:13,fontWeight:600,whiteSpace:"nowrap"},xpText:{color:m.xp},barOuter:{width:60,height:6,background:m.border,borderRadius:3,overflow:"hidden"},level:{fontSize:12,fontWeight:700,background:`linear-gradient(135deg, ${m.m1}, ${m.m2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};function Am({xp:l}){const C=Math.floor(l/500)+1,y=l%500/500*100;return d.jsxs("div",{style:Xr.container,children:[d.jsxs("span",{style:Xr.xpText,children:["⚡ ",l," XP"]}),d.jsx("div",{style:Xr.barOuter,children:d.jsx("div",{style:{height:"100%",width:`${y}%`,background:`linear-gradient(90deg, ${m.m1}, ${m.m2})`,borderRadius:3,transition:"width 0.5s ease"}})}),d.jsxs("span",{style:Xr.level,children:["LVL ",C]})]})}const Jr={header:{position:"fixed",top:0,left:0,right:0,height:56,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",background:m.surface,borderBottom:`1px solid ${m.border}`},logo:{fontSize:18,fontWeight:700,letterSpacing:1,background:`linear-gradient(135deg, ${m.m1}, ${m.m2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",userSelect:"none"},center:{display:"flex",alignItems:"center"},right:{display:"flex",alignItems:"center",gap:12}};function Rm({timerSeconds:l,moduleColor:C,xp:c,completedCount:y,totalTopics:E,currentPhase:S,onDashboardOpen:R}){var A;return d.jsxs("header",{style:Jr.header,children:[d.jsxs("div",{style:Jr.logo,children:[".NET ",((A=S==null?void 0:S.title)==null?void 0:A.toUpperCase())||"FASE 1"]}),d.jsx("div",{style:Jr.center,children:d.jsx(Pm,{completedCount:y,totalTopics:E,currentPhase:S})}),d.jsxs("div",{style:Jr.right,children:[d.jsx(xm,{seconds:l,moduleColor:C}),d.jsx(Am,{xp:c}),d.jsx("button",{onClick:R,"aria-label":"Abrir dashboard",style:{width:34,height:34,borderRadius:6,border:`1px solid ${m.border}`,background:"transparent",color:m.textMuted,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"},children:"📊"})]})]})}const Nm={success:m.success,xp:m.xp,unlock:m.warning},cd={container:{position:"fixed",bottom:20,right:20,zIndex:300,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},toast:{pointerEvents:"auto",padding:"12px 20px",borderRadius:8,fontSize:14,fontWeight:600,color:m.text,background:m.surface2,border:`1px solid ${m.border}`,boxShadow:"0 4px 24px rgba(0,0,0,0.5)",animation:"slideIn 0.3s ease-out",cursor:"pointer",maxWidth:320,lineHeight:1.4}};function Dm({toasts:l,onDismiss:C}){return!l||l.length===0?null:d.jsx("div",{style:cd.container,children:l.map(c=>d.jsx("div",{style:{...cd.toast,borderLeftWidth:4,borderLeftStyle:"solid",borderLeftColor:Nm[c.type]||m.success},onClick:()=>C(c.id),children:c.message},c.id))})}function Om(l,C,c){const y=c.findIndex(S=>S.id===l);if(y===0)return!0;const E=c[y-1];return C.includes(E.id)}function wm(l,C,c){const y=C[l]||[],E=c[l]||{},S=y.length>0&&y.every(Boolean),R=E.submitted===!0;return S&&R}function Ja(l){return l.flatMap(C=>C.topics)}function qm(l,C){return C.find(c=>c.id===l)}function Lm(l,C){return C.find(c=>c.topics.some(y=>y.id===l))}function km({topic:l,isActive:C,isCompleted:c,isLocked:y,moduleColor:E,onClick:S}){const[R,A]=F.useState(!1),b=y?"🔒":c?"✅":C?"▶":"○",O={display:"flex",alignItems:"center",gap:8,padding:"6px 12px 6px 20px",fontSize:13,cursor:y?"not-allowed":"pointer",opacity:y?.4:1,color:C?m.text:c?m.success:m.textMuted,background:C?`${E}12`:R&&!y?`${m.text}08`:"transparent",borderRadius:4,transition:"background 0.15s, color 0.15s",userSelect:"none"},z=()=>{y||S(l.id)};return d.jsxs("div",{style:O,onClick:z,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:[d.jsx("span",{style:{fontSize:12,flexShrink:0},children:b}),d.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.title})]})}function Mm({module:l,currentTopicId:C,completedTopics:c,allTopics:y,isTopicUnlocked:E,onTopicClick:S}){const[R,A]=F.useState(!0),[b,O]=F.useState(!1),z=l.topics.filter(G=>c.includes(G.id)).length,w=l.topics.length,k={display:"flex",alignItems:"center",gap:8,padding:"10px 12px",cursor:"pointer",userSelect:"none",borderLeft:`3px solid ${l.color}`,background:b?`${l.color}10`:"transparent",transition:"background 0.15s"},K={fontSize:13,fontWeight:600,color:m.text,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},Z={fontSize:11,color:z===w?m.success:m.textMuted,flexShrink:0},W={fontSize:10,color:m.textMuted,transition:"transform 0.15s",transform:R?"rotate(90deg)":"rotate(0deg)",flexShrink:0},U={display:R?"flex":"none",flexDirection:"column",gap:2,paddingBottom:4};return d.jsxs("div",{children:[d.jsxs("div",{style:k,onClick:()=>A(!R),onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),children:[d.jsx("span",{style:{fontSize:14},children:l.icon}),d.jsx("span",{style:K,children:l.title}),z===w?d.jsx("span",{style:{fontSize:10,fontWeight:700,color:m.success,background:`${m.success}15`,padding:"2px 6px",borderRadius:4,letterSpacing:.5,flexShrink:0},children:"✓ COMPLETO"}):d.jsxs("span",{style:Z,children:[z,"/",w]}),d.jsx("span",{style:W,children:"▶"})]}),d.jsx("div",{style:U,children:l.topics.map(G=>d.jsx(km,{topic:G,isActive:G.id===C,isCompleted:c.includes(G.id),isLocked:!E(G.id,c,y),moduleColor:l.color,onClick:S},G.id))})]})}function Fm({phase:l,phaseIndex:C,isUnlocked:c,currentTopicId:y,completedTopics:E,allTopicsForPhase:S,isTopicUnlocked:R,onTopicClick:A,justUnlocked:b}){const[O,z]=F.useState(c),[w,k]=F.useState(!1),K=F.useRef(null),Z=l.data.flatMap(me=>me.topics),W=Z.filter(me=>E.includes(me.id)).length,U=Z.length,G=W===U&&U>0;F.useEffect(()=>{b&&K.current&&(z(!0),K.current.scrollIntoView({behavior:"smooth",block:"center"}))},[b]);const X=()=>{c&&z(!O)},ue={display:"flex",alignItems:"center",gap:8,padding:"10px 12px",cursor:c?"pointer":"not-allowed",userSelect:"none",borderBottom:`1px solid ${m.border}`,background:w&&c?`${l.color}10`:"transparent",opacity:c?1:.5,transition:"background 0.15s, opacity 0.3s",animation:b?"phaseUnlock 1s ease":"none"},ye={fontSize:12,fontWeight:700,color:l.color,letterSpacing:.8,textTransform:"uppercase",flex:1},Fe=G?{fontSize:10,fontWeight:700,color:m.success,background:`${m.success}15`,padding:"2px 6px",borderRadius:4,letterSpacing:.5}:{fontSize:11,color:m.textMuted,fontWeight:600},Re={fontSize:10,color:m.textMuted,transition:"transform 0.15s",transform:O&&c?"rotate(90deg)":"rotate(0deg)",flexShrink:0};return d.jsxs("div",{children:[d.jsx("style",{children:`
        @keyframes phaseUnlock {
          0% { outline: 2px solid ${l.color}; outline-offset: -2px; }
          50% { outline: 2px solid ${l.color}80; outline-offset: 2px; }
          100% { outline: 2px solid transparent; outline-offset: -2px; }
        }
      `}),d.jsxs("div",{ref:K,style:ue,onClick:X,onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[d.jsx("span",{style:{fontSize:12},children:c?G?"✅":"▶":"🔒"}),d.jsx("span",{style:ye,children:l.title}),d.jsx("span",{style:Fe,children:G?"CONCLUÍDA":`${W}/${U}`}),c&&d.jsx("span",{style:Re,children:"▶"})]}),O&&c&&d.jsx("div",{children:l.data.map(me=>d.jsx(Mm,{module:me,currentTopicId:y,completedTopics:E,allTopics:S,isTopicUnlocked:R,onTopicClick:A},me.id))})]})}const _m={sidebar:{width:220,minWidth:220,height:"calc(100vh - 56px)",overflowY:"auto",background:m.surface,borderRight:`1px solid ${m.border}`,display:"flex",flexDirection:"column"}};function zm({allPhases:l,currentTopicId:C,completedTopics:c,allTopics:y,isTopicUnlocked:E,onTopicClick:S,justUnlockedPhase:R}){return d.jsx("aside",{style:_m.sidebar,children:l.map((A,b)=>{const O=b>0?l[b-1]:null,z=O?Ja(O.data):[],w=b===0||z.every(k=>c.includes(k.id));return d.jsx(Fm,{phase:A,phaseIndex:b,isUnlocked:w,currentTopicId:C,completedTopics:c,allTopicsForPhase:y,isTopicUnlocked:E,onTopicClick:S,justUnlocked:R===A.id},A.id)})})}const ke={container:{marginBottom:32,borderRadius:8,border:`1px solid ${m.border}`,overflow:"hidden",transition:"background 0.3s"},containerDone:{background:`${m.success}08`,borderColor:`${m.success}40`},header:{padding:"16px 20px 12px"},title:{fontSize:16,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8,marginBottom:12},progressRow:{display:"flex",alignItems:"center",gap:10,marginBottom:4},progressText:{fontSize:12,color:m.textMuted,whiteSpace:"nowrap"},progressBarOuter:{flex:1,height:4,background:m.border,borderRadius:2,overflow:"hidden"},list:{padding:"0 20px 16px",display:"flex",flexDirection:"column",gap:6},item:{display:"flex",alignItems:"flex-start",gap:10,padding:"8px 12px",borderRadius:6,background:m.surface2,cursor:"pointer",transition:"background 0.15s",userSelect:"none"},checkbox:{width:18,height:18,borderRadius:4,border:`2px solid ${m.textDim}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all 0.15s",cursor:"pointer"},checkboxChecked:{background:m.success,borderColor:m.success},checkmark:{color:"#fff",fontSize:11,fontWeight:700},itemText:{fontSize:14,lineHeight:1.5,color:m.text,transition:"all 0.15s"},itemTextChecked:{textDecoration:"line-through",color:m.textMuted},doneMessage:{padding:"12px 20px 16px",fontSize:14,color:m.success,fontWeight:600,display:"flex",alignItems:"center",gap:8}};function jm({items:l,topicId:C,checked:c,onChange:y}){const E=c||l.map(()=>!1),S=E.filter(Boolean).length,R=S===l.length&&l.length>0,A=l.length>0?S/l.length*100:0,b=R?{...ke.container,...ke.containerDone}:ke.container,O={height:"100%",width:`${A}%`,background:R?m.success:m.m1,borderRadius:2,transition:"width 0.3s ease"};return d.jsxs("div",{style:b,children:[d.jsxs("div",{style:ke.header,children:[d.jsxs("div",{style:ke.title,children:[d.jsx("span",{children:"✅"}),d.jsx("span",{children:"Pratique no VSCode"})]}),d.jsxs("div",{style:ke.progressRow,children:[d.jsxs("span",{style:ke.progressText,children:[S," / ",l.length," tarefas concluídas"]}),d.jsx("div",{style:ke.progressBarOuter,children:d.jsx("div",{style:O})})]})]}),d.jsx("div",{style:ke.list,children:l.map((z,w)=>{const k=E[w],K=k?{...ke.checkbox,...ke.checkboxChecked}:ke.checkbox,Z=k?{...ke.itemText,...ke.itemTextChecked}:ke.itemText;return d.jsxs("div",{style:ke.item,onClick:()=>y(w,!k),children:[d.jsx("div",{style:K,children:k&&d.jsx("span",{style:ke.checkmark,children:"✓"})}),d.jsx("span",{style:Z,children:z})]},`${C}-cl-${w}`)})}),R&&d.jsxs("div",{style:ke.doneMessage,children:[d.jsx("span",{children:"🎉"}),d.jsx("span",{children:"Parabéns! Todas as tarefas concluídas"})]})]})}const Ke={keyword:"#c678dd",type:"#e5c07b",string:"#98c379",comment:"#5c6370",number:"#d19a66",method:"#61afef",attribute:"#56b6c2"},Um=["abstract","as","async","await","base","bool","break","byte","case","catch","char","checked","class","const","continue","decimal","default","delegate","do","double","else","enum","event","explicit","extern","false","finally","fixed","float","for","foreach","goto","if","implicit","in","int","interface","internal","is","lock","long","namespace","new","null","object","operator","out","override","params","private","protected","public","readonly","record","ref","return","sbyte","sealed","short","sizeof","stackalloc","static","string","struct","switch","this","throw","true","try","typeof","uint","ulong","unchecked","unsafe","ushort","using","var","virtual","void","volatile","when","where","while","yield","init","required","get","set","value","partial","global","not","and","or","with"],Bm=["Console","String","Int32","Int64","Boolean","Decimal","Double","List","Dictionary","HashSet","Array","Task","IEnumerable","IList","ICollection","IDictionary","IDisposable","Exception","ArgumentException","InvalidOperationException","NullReferenceException","StringBuilder","Span","ReadOnlySpan","Memory","Func","Action","Predicate","EventHandler","IComparable","IEquatable","CancellationToken","CancellationTokenSource","HttpClient","ILogger","IRepository","IService"];function pd(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wm(l){return pd(l).split(`
`).map(E=>{if(E.trimStart().startsWith("//"))return`<span style="color:${Ke.comment};font-style:italic">${E}</span>`;let S=E;S=S.replace(/(\$?&quot;(?:[^&]|&(?!quot;))*?&quot;|&quot;(?:[^&]|&(?!quot;))*?&quot;)/g,`<span style="color:${Ke.string}">$1</span>`),S=S.replace(/(&#39;.&#39;|&#39;\\.'&#39;)/g,`<span style="color:${Ke.string}">$1</span>`),S=S.replace(/(\[(?:Obsolete|Serializable|Flags|Test|Fact|Theory|HttpGet|HttpPost|Route|ApiController|Required)\])/g,`<span style="color:${Ke.attribute}">$1</span>`),S=S.replace(/\b(\d+\.?\d*[fFdDmMlL]?)\b/g,`<span style="color:${Ke.number}">$1</span>`);const R=new RegExp(`\\b(${Bm.join("|")})\\b`,"g");S=S.replace(R,`<span style="color:${Ke.type}">$1</span>`);const A=new RegExp(`\\b(${Um.join("|")})\\b`,"g");S=S.replace(A,`<span style="color:${Ke.keyword}">$1</span>`);const b=S.indexOf("//");if(b>0){const O=S.substring(0,b),z=S.substring(b);(O.match(/<span/g)||[]).length===(O.match(/<\/span>/g)||[]).length&&(S=`${O}<span style="color:${Ke.comment};font-style:italic">${z}</span>`)}return S}).join(`
`)}function Hm(l){return pd(l).split(`
`).map(E=>{if(E.trimStart().startsWith("#"))return`<span style="color:${Ke.comment};font-style:italic">${E}</span>`;let S=E;return S=S.replace(/(&quot;[^&]*?&quot;)/g,`<span style="color:${Ke.string}">$1</span>`),S=S.replace(/\b(git)\s+([\w-]+)/g,`<span style="color:${Ke.keyword}">$1</span> <span style="color:${Ke.method}">$2</span>`),S=S.replace(/\b(dotnet)\s+([\w-]+)/g,`<span style="color:${Ke.keyword}">$1</span> <span style="color:${Ke.method}">$2</span>`),S=S.replace(/(\s)(--?[\w-]+)/g,`$1<span style="color:${Ke.attribute}">$2</span>`),S}).join(`
`)}function Vm(l,C){return C==="bash"?Hm(l):Wm(l)}const Ao={container:{marginBottom:32,borderRadius:8,overflow:"hidden",border:`1px solid ${m.border}`},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:m.surface,borderBottom:`1px solid ${m.border}`},language:{fontSize:12,fontWeight:600,color:m.textMuted,textTransform:"uppercase",letterSpacing:.5},copyBtn:{fontSize:12,fontWeight:600,padding:"4px 12px",borderRadius:4,border:`1px solid ${m.border}`,background:"transparent",color:m.textMuted,cursor:"pointer",transition:"all 0.15s",letterSpacing:.5},copyBtnCopied:{color:m.success,borderColor:m.success},codeWrap:{padding:"16px 20px",overflowX:"auto",background:"#060a10"},pre:{margin:0,fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace",fontSize:13,lineHeight:1.7,color:m.text,whiteSpace:"pre",tabSize:4},runWrap:{padding:"8px 16px",background:m.surface2,borderTop:`1px solid ${m.border}`,display:"flex",alignItems:"center",gap:8},runLabel:{fontSize:12,color:m.textDim,fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace"},runCmd:{fontSize:12,color:m.m1,fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace"}};function Gm({code:l,language:C,runCommand:c}){const[y,E]=F.useState(!1),S=F.useCallback(()=>{navigator.clipboard.writeText(l).then(()=>{E(!0),setTimeout(()=>E(!1),2e3)})},[l]),R=Vm(l,C),A=y?{...Ao.copyBtn,...Ao.copyBtnCopied}:Ao.copyBtn;return d.jsxs("div",{style:Ao.container,children:[d.jsxs("div",{style:Ao.header,children:[d.jsx("span",{style:Ao.language,children:C}),d.jsx("button",{style:A,onClick:S,children:y?"✓ COPIADO":"COPIAR"})]}),d.jsx("div",{style:Ao.codeWrap,children:d.jsx("pre",{style:Ao.pre,dangerouslySetInnerHTML:{__html:R}})}),c&&d.jsxs("div",{style:Ao.runWrap,children:[d.jsx("span",{style:Ao.runLabel,children:"$"}),d.jsx("span",{style:Ao.runCmd,children:c})]})]})}const dd={container:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 0",marginTop:32,borderTop:`1px solid ${m.border}`},indicator:{fontSize:13,color:m.textMuted}};function ud({children:l,disabled:C,onClick:c}){const[y,E]=F.useState(!1),S={fontSize:14,fontWeight:600,padding:"8px 20px",borderRadius:6,border:`1px solid ${C?m.textDim:m.m1}`,background:C?"transparent":y?`${m.m1}20`:"transparent",color:C?m.textDim:m.m1,cursor:C?"not-allowed":"pointer",opacity:C?.5:1,transition:"all 0.15s",minWidth:120,textAlign:"center"};return d.jsx("button",{style:S,disabled:C,onClick:c,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),title:C&&l.toString().includes("Próximo")?"Complete o checklist e o quiz para avançar":void 0,children:l})}function $m({currentIndex:l,totalTopics:C,canAdvance:c,onPrevious:y,onNext:E}){const S=l===0,R=l===C-1;return d.jsxs("div",{style:dd.container,children:[d.jsx(ud,{disabled:S,onClick:y,children:"← Anterior"}),d.jsxs("span",{style:dd.indicator,children:["Tópico ",l+1," de ",C]}),d.jsx(ud,{disabled:R||!c,onClick:E,children:"Próximo →"})]})}const Xa={container:{marginBottom:32,borderRadius:8,border:`1px solid ${m.border}`,overflow:"hidden"},header:{padding:"16px 20px 0",display:"flex",alignItems:"center",justifyContent:"space-between"},title:{fontSize:16,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8},saveIndicator:{fontSize:12,transition:"opacity 0.3s"},body:{padding:"12px 20px 16px"},textarea:{width:"100%",minHeight:80,padding:"12px 14px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,color:m.text,fontSize:14,lineHeight:1.6,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif",resize:"vertical",outline:"none",transition:"border-color 0.15s",boxSizing:"border-box"}};function Qm({topicId:l,value:C,onChange:c}){const[y,E]=F.useState(!1),[S,R]=F.useState(!1),A=F.useRef(null),b=w=>{const k=w.target.value;c(k),E(!0),R(!1),A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{E(!1),R(!0),setTimeout(()=>R(!1),2e3)},1e3)};F.useEffect(()=>()=>{A.current&&clearTimeout(A.current)},[]);const O=y?"💾 Salvando...":S?"✓ Salvo":"",z=y?m.warning:m.success;return d.jsxs("div",{style:Xa.container,children:[d.jsxs("div",{style:Xa.header,children:[d.jsxs("div",{style:Xa.title,children:[d.jsx("span",{children:"📝"}),d.jsx("span",{children:"Minhas Anotações"})]}),d.jsx("span",{style:{...Xa.saveIndicator,color:z,opacity:y||S?1:0},children:O})]}),d.jsx("div",{style:Xa.body,children:d.jsx("textarea",{style:Xa.textarea,value:C||"",onChange:b,placeholder:"Anote suas dúvidas, insights ou observações sobre este tópico...",onFocus:w=>{w.target.style.borderColor=m.m1},onBlur:w=>{w.target.style.borderColor=m.border}})})]})}const Me={container:{marginBottom:32,borderRadius:8,border:`1px solid ${m.border}`,overflow:"hidden"},header:{padding:"16px 20px 12px"},title:{fontSize:16,fontWeight:600,color:m.text,display:"flex",alignItems:"center",gap:8,marginBottom:4},question:{padding:"16px 20px",borderTop:`1px solid ${m.border}`},questionText:{fontSize:14,fontWeight:600,color:m.text,marginBottom:12,lineHeight:1.5},questionNumber:{color:m.m1,marginRight:8},options:{display:"flex",flexDirection:"column",gap:8},option:{padding:"10px 14px",borderRadius:6,border:`1px solid ${m.border}`,background:m.surface2,fontSize:14,color:m.text,cursor:"pointer",transition:"all 0.15s",textAlign:"left",lineHeight:1.4},optionSelected:{borderColor:m.m1,background:`${m.m1}10`},optionCorrect:{borderColor:m.success,background:`${m.success}15`,color:m.success},optionWrong:{borderColor:m.error,background:`${m.error}15`,color:m.error},optionDisabled:{cursor:"default",opacity:.7},explanation:{marginTop:12,padding:"10px 14px",borderRadius:6,background:`${m.m1}08`,border:`1px solid ${m.m1}30`,fontSize:13,lineHeight:1.6,color:m.textMuted},footer:{padding:"12px 20px 16px",borderTop:`1px solid ${m.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},submitBtn:{padding:"10px 24px",borderRadius:6,border:"none",fontWeight:600,fontSize:14,cursor:"pointer",transition:"all 0.15s"},score:{fontSize:14,fontWeight:600}};function Km({questions:l,topicId:C,savedAnswers:c,savedSubmitted:y,onSubmit:E}){const[S,R]=F.useState(c||l.map(()=>-1)),[A,b]=F.useState(y||!1),O=S.every(W=>W!==-1),z=(W,U)=>{A||R(G=>{const X=[...G];return X[W]=U,X})},w=()=>{if(!O||A)return;b(!0);const U=S.reduce((G,X,ue)=>G+(X===l[ue].answer?1:0),0)*10;E(S,U)},k=A?S.reduce((W,U,G)=>W+(U===l[G].answer?1:0),0):0,K=(W,U)=>{const G=S[W]===U,X=l[W].answer===U;if(!A)return G?{...Me.option,...Me.optionSelected}:Me.option;let ue={...Me.option,...Me.optionDisabled};return X?ue={...ue,...Me.optionCorrect}:G&&!X&&(ue={...ue,...Me.optionWrong}),ue},Z={...Me.submitBtn,background:O?m.m1:m.textDim,color:O?"#000":m.textMuted,cursor:O?"pointer":"not-allowed"};return d.jsxs("div",{style:Me.container,children:[d.jsx("div",{style:Me.header,children:d.jsxs("div",{style:Me.title,children:[d.jsx("span",{children:"🧠"}),d.jsx("span",{children:"Teste seu Conhecimento"})]})}),l.map((W,U)=>d.jsxs("div",{style:Me.question,children:[d.jsxs("div",{style:Me.questionText,children:[d.jsxs("span",{style:Me.questionNumber,children:[U+1,"."]}),W.q]}),d.jsx("div",{style:Me.options,children:W.options.map((G,X)=>d.jsx("button",{style:K(U,X),onClick:()=>z(U,X),disabled:A,children:G},X))}),A&&d.jsxs("div",{style:Me.explanation,children:["💡 ",W.explanation]})]},`${C}-q-${U}`)),d.jsx("div",{style:Me.footer,children:A?d.jsxs("span",{style:{...Me.score,color:k===l.length?m.success:m.warning},children:[k," / ",l.length," corretas — +",k*10," ","XP"]}):d.jsx("button",{style:Z,onClick:w,disabled:!O,children:"Confirmar Respostas"})})]})}const Zr={container:{marginBottom:32},sectionTitle:{fontSize:16,fontWeight:600,color:m.text,marginBottom:16,display:"flex",alignItems:"center",gap:8},paragraph:{fontSize:15,lineHeight:1.8,color:m.text,marginBottom:16,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif"},inlineCode:{fontFamily:"'Cascadia Code', 'Fira Code', 'Consolas', monospace",fontSize:13,background:m.surface2,color:m.m1,padding:"2px 6px",borderRadius:4,border:`1px solid ${m.border}`}};function Ym(l){return l.split(/(`[^`]+`)/g).map((c,y)=>{if(c.startsWith("`")&&c.endsWith("`")){const E=c.slice(1,-1);return d.jsx("code",{style:Zr.inlineCode,children:E},y)}return c})}function Xm({theory:l}){const C=l.split(`

`);return d.jsxs("div",{style:Zr.container,children:[d.jsxs("div",{style:Zr.sectionTitle,children:[d.jsx("span",{children:"📖"}),d.jsx("span",{children:"Teoria"})]}),C.map((c,y)=>d.jsx("p",{style:Zr.paragraph,children:Ym(c)},y))]})}const da={container:{marginBottom:24},breadcrumb:{display:"flex",alignItems:"center",gap:8,fontSize:14,color:m.textMuted,marginBottom:8},separator:{color:m.textDim},meta:{display:"flex",alignItems:"center",gap:16,marginBottom:8},weekTag:{fontSize:12,fontWeight:600,padding:"3px 10px",borderRadius:12,letterSpacing:.5},progressWrap:{display:"flex",alignItems:"center",gap:8,flex:1},progressText:{fontSize:12,color:m.textMuted,whiteSpace:"nowrap"},progressBarOuter:{flex:1,height:4,background:m.border,borderRadius:2,maxWidth:120,overflow:"hidden"}};function Jm({topic:l,module:C,completedTopics:c}){const y=C.topics.filter(b=>c.includes(b.id)).length,E=C.topics.length,S=y/E*100,R={...da.weekTag,background:`${C.color}20`,color:C.color},A={height:"100%",width:`${S}%`,background:C.color,borderRadius:2,transition:"width 0.3s ease"};return d.jsxs("div",{style:da.container,children:[d.jsxs("div",{style:da.breadcrumb,children:[d.jsx("span",{children:C.icon}),d.jsx("span",{style:{color:C.color},children:C.title}),d.jsx("span",{style:da.separator,children:"›"}),d.jsx("span",{style:{color:m.text},children:l.title})]}),d.jsxs("div",{style:da.meta,children:[d.jsx("span",{style:R,children:C.week}),d.jsxs("div",{style:da.progressWrap,children:[d.jsxs("span",{style:da.progressText,children:[y,"/",E," tópicos"]}),d.jsx("div",{style:da.progressBarOuter,children:d.jsx("div",{style:A})})]})]})]})}function Zm({topic:l,module:C,completedTopics:c,currentIndex:y,totalTopics:E,canAdvance:S,onPrevious:R,onNext:A,checklist:b,onChecklistChange:O,quizAnswers:z,quizSubmitted:w,onQuizSubmit:k,notes:K,onNotesChange:Z}){return d.jsxs("div",{children:[d.jsx(Jm,{topic:l,module:C,completedTopics:c}),d.jsx(Xm,{theory:l.theory}),d.jsx(Gm,{code:l.code,language:l.codeLanguage,runCommand:l.runCommand}),d.jsx(jm,{items:l.checklist,topicId:l.id,checked:b,onChange:O}),d.jsx(Km,{questions:l.quiz,topicId:l.id,savedAnswers:z,savedSubmitted:w,onSubmit:k}),d.jsx(Qm,{topicId:l.id,value:K,onChange:Z}),d.jsx($m,{currentIndex:y,totalTopics:E,canAdvance:S,onPrevious:R,onNext:A})]})}const de={currentTopic:"phase1:current_topic",completed:"phase1:completed_topics",xp:"phase1:xp",checklist:l=>`phase1:checklist_${l}`,quiz:l=>`phase1:quiz_${l}`,notes:l=>`phase1:notes_${l}`,timer:l=>`phase1:timer_${l}`,phase2Completed:"phase2:completed_topics",phase2Xp:"phase2:xp",phase2Unlocked:"phase2:unlocked",checklist2:l=>`phase2:checklist_${l}`,quiz2:l=>`phase2:quiz_${l}`,notes2:l=>`phase2:notes_${l}`,timer2:l=>`phase2:timer_${l}`,phase3Completed:"phase3:completed_topics",phase3Xp:"phase3:xp",phase3Unlocked:"phase3:unlocked",checklist3:l=>`phase3:checklist_${l}`,quiz3:l=>`phase3:quiz_${l}`,notes3:l=>`phase3:notes_${l}`,timer3:l=>`phase3:timer_${l}`},en=l=>/^m[5-8]/.test(l),on=l=>/^m(9|1[0-2])/.test(l);function es(l){return on(l)?de.checklist3(l):en(l)?de.checklist2(l):de.checklist(l)}function os(l){return on(l)?de.quiz3(l):en(l)?de.quiz2(l):de.quiz(l)}function as(l){return on(l)?de.notes3(l):en(l)?de.notes2(l):de.notes(l)}function rs(l){return on(l)?de.timer3(l):en(l)?de.timer2(l):de.timer(l)}const ep={id:"m1",title:"C# Fundamentos",icon:"⚡",week:"Semana 1",color:"#00D4FF",topics:[{id:"m1t1",moduleId:"m1",title:"Tipos & Variáveis",theory:`Em C#, toda variável possui um tipo que define quais valores ela pode armazenar e quais operações são permitidas. O sistema de tipos do C# é dividido em duas categorias fundamentais: value types e reference types.

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

Console.WriteLine("\\n✅ Strings & Manipulação concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n StringsDemo && cd StringsDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n StringsDemo",'Usar interpolação com formatação ($"{valor:N2}") para exibir valores monetários',"Aplicar Trim, Split, Replace e Join em uma string de entrada","Criar um StringBuilder em loop e comparar resultado com concatenação simples","Testar fatiamento com range syntax (str[..3], str[4..8]) e Span"],quiz:[{q:'Por que strings em C# são chamadas de "imutáveis"?',options:["Porque não podem conter caracteres especiais","Porque cada operação cria uma nova string na memória em vez de modificar a original","Porque são armazenadas na stack","Porque não podem ser null"],answer:1,explanation:"Strings em C# são imutáveis — métodos como Replace, ToUpper, Trim retornam uma NOVA string. A original permanece inalterada. Isso impacta performance em loops, onde StringBuilder deve ser usado."},{q:"Quando usar StringBuilder em vez de concatenação com + ou interpolação?",options:["Sempre — StringBuilder é sempre mais rápido","Quando precisa fazer concatenações em loops ou montar strings grandes dinamicamente","Nunca — interpolação substituiu o StringBuilder","Apenas para strings maiores que 1000 caracteres"],answer:1,explanation:"StringBuilder é essencial em loops e concatenações intensivas. Cada + ou interpolação cria uma nova string imutável. Em loop de 1000 iterações, são 1000 objetos descartados vs 1 buffer do StringBuilder."},{q:'O que o código imprime? string s = "ABCDEF"; Console.Write(s[2..4]);',options:['"ABCD"','"CD"','"CDE"','"BC"'],answer:1,explanation:'A sintaxe de range [2..4] extrai caracteres dos índices 2 (inclusivo) ao 4 (exclusivo). Índice 2=C, índice 3=D. Resultado: "CD".'}]}]},op={id:"m2",title:"POO em C#",icon:"🧱",week:"Semana 2",color:"#7C3AED",topics:[{id:"m2t1",moduleId:"m2",title:"Classes & Objetos",theory:`Programação Orientada a Objetos (POO) é o paradigma fundamental do C# e do desenvolvimento corporativo com .NET. Tudo gira em torno de classes — blueprints que definem a estrutura (campos/propriedades) e o comportamento (métodos) dos objetos.

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

Console.WriteLine("\\n✅ Encapsulamento concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n EncapsulamentoDemo && cd EncapsulamentoDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n EncapsulamentoDemo","Criar uma classe com campos private e propriedades public com validação","Usar init-only properties em pelo menos uma propriedade","Criar uma classe com required members e testar object initializer","Verificar que dados privados não são acessíveis de fora da classe"],quiz:[{q:"Por que devemos preferir propriedades com validação em vez de campos públicos?",options:["Propriedades são mais rápidas que campos","Propriedades permitem controlar acesso e validar dados, impedindo que o objeto entre em estado inválido","Campos públicos não compilam em C# 12","Não há diferença prática"],answer:1,explanation:"Propriedades com validação no setter garantem que regras de negócio sejam respeitadas (ex: preço >= 0). Campos públicos permitem qualquer valor, podendo corromper o estado do objeto."},{q:"Qual a diferença entre init e set em uma propriedade?",options:["init é mais rápido que set","init permite atribuição apenas na inicialização (construtor ou object initializer); set permite a qualquer momento","set é somente leitura e init permite escrita","Não existe diferença"],answer:1,explanation:'init substitui set para criar propriedades semi-imutáveis. Após a construção do objeto, propriedades init não podem ser alteradas: obj.Nome = "X" gera erro se Nome usa init.'},{q:"O que acontece se você não fornecer uma propriedade required ao criar o objeto?",options:["A propriedade fica null","Usa valor default do tipo","Erro de compilação — required força atribuição na inicialização","Erro em tempo de execução"],answer:2,explanation:"required (C# 11+) faz o compilador exigir que a propriedade seja atribuída. Se faltar no object initializer ou construtor, é erro de compilação — não de runtime."}]}]},ap={id:"m3",title:"C# Intermediário",icon:"🚀",week:"Semana 3",color:"#059669",topics:[{id:"m3t1",moduleId:"m3",title:"Generics",theory:`Generics permitem criar classes, métodos e interfaces que funcionam com qualquer tipo, mantendo type-safety em tempo de compilação. Em vez de escrever RepositorioUsuario, RepositorioProduto, RepositorioPedido — você escreve Repository<T> uma única vez e usa com qualquer tipo.

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

Console.WriteLine("\\n✅ async/await concluído!");`,codeLanguage:"csharp",runCommand:"dotnet new console -n AsyncDemo && cd AsyncDemo && dotnet run",checklist:["Criar projeto console com dotnet new console -n AsyncDemo","Criar um método async Task<T> que simule uma operação de I/O com Task.Delay","Comparar execução sequencial (await um por um) vs paralela (Task.WhenAll)","Implementar cancelamento com CancellationTokenSource e CancelAfter","Usar try/catch em método assíncrono para tratar falhas com fallback"],quiz:[{q:"Por que async void deve ser evitado?",options:["É mais lento que async Task","Exceções não podem ser capturadas pelo chamador, o método não pode ser aguardado e pode crashar a aplicação","Não compila no .NET 8","async void é a forma recomendada para métodos sem retorno"],answer:1,explanation:`async void é "fire-and-forget" perigoso: exceções não propagam para o chamador (crash), não pode ser await'ed, e o chamador não sabe quando terminou. Use async Task para void assíncronos.`},{q:"Qual a vantagem de Task.WhenAll sobre await sequencial?",options:["É mais fácil de ler","Executa operações independentes em paralelo, reduzindo tempo total para o tempo da operação mais lenta","Consome menos memória","É obrigatório em ASP.NET Core"],answer:1,explanation:"3 operações de 1s sequenciais = 3s total. Com Task.WhenAll, as 3 rodam em paralelo = ~1s total (tempo da mais lenta). Essencial quando as operações são independentes."},{q:'O que acontece ao executar? async void Falhar() { throw new Exception("ops"); } try { Falhar(); } catch { Console.Write("capturado"); }',options:['Imprime "capturado"',"A exceção não é capturada — async void não propaga exceções ao chamador, podendo crashar a aplicação","Erro de compilação",'Imprime "ops"'],answer:1,explanation:"async void é fire-and-forget: exceções não fluem para o chamador. O try/catch ao redor de Falhar() NÃO captura a exceção. Ela vai para o SynchronizationContext e pode derrubar a aplicação. Use async Task para permitir captura."}]}]},tp={id:"m4",title:"Git & GitFlow",icon:"🔀",week:"Semana 4",color:"#F59E0B",topics:[{id:"m4t1",moduleId:"m4",title:"Git Essencial",theory:`Git é o sistema de controle de versão mais usado no mundo. Ele rastreia cada alteração em cada arquivo do projeto, permitindo voltar a qualquer ponto no tempo, colaborar com outras pessoas sem conflitos e manter um histórico completo de todas as mudanças.

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
# Resultado: 3 commits viram 1 com mensagem limpa`,codeLanguage:"bash",runCommand:'git config --global alias.lg "log --oneline --graph --decorate --all" && git lg',checklist:["Configurar alias úteis: git st, git lg, git last","Fazer 3 commits usando Conventional Commits (feat, fix, refactor)","Fazer um commit com corpo multi-linha explicando o porquê da mudança","Verificar que o .gitignore do projeto exclui bin/, obj/ e .vs/","Praticar squash de commits com git rebase -i (em branch local)"],quiz:[{q:"Qual o formato correto de um Conventional Commit?",options:['"Adicionei o login" (passado, sem tipo)','"tipo(escopo): descrição imperativa" — ex: "feat(auth): implementar login JWT"','"FIX - corrigir bug #123"',"Qualquer formato é aceito"],answer:1,explanation:"Conventional Commits segue o padrão tipo(escopo): descrição. O tipo indica a natureza (feat, fix, refactor...), escopo é opcional, e a descrição é imperativa e curta. Ferramentas de CI/CD usam isso para gerar changelogs automaticamente."},{q:"Qual o tamanho ideal de um Pull Request para garantir review de qualidade?",options:["Quanto maior melhor — menos PRs para revisar","Até ~400 linhas — PRs grandes recebem reviews superficiais","Exatamente 1 arquivo por PR","Tamanho não importa"],answer:1,explanation:"Estudos mostram que reviews de PRs com mais de 400 linhas são significativamente menos eficazes. PRs menores recebem feedback mais detalhado, são integrados mais rápido e têm menor risco de bugs."},{q:"Para que serve o comando git rebase -i HEAD~3?",options:["Apaga os últimos 3 commits","Abre editor interativo para reorganizar, combinar (squash) ou editar os últimos 3 commits","Cria 3 branches novos","Reverte o repositório para 3 commits atrás"],answer:1,explanation:"rebase -i (interativo) abre um editor listando os commits. Você pode: pick (manter), squash (combinar com anterior), reword (editar mensagem), drop (remover). Ideal para limpar histórico antes de abrir PR."}]}]},rp=[ep,op,ap,tp],np={id:"m5",title:"ASP.NET Core Web API",icon:"🌐",week:"Semana 5",color:"#7C3AED",topics:[{id:"m5t1",moduleId:"m5",title:"Estrutura de um Projeto Web API",theory:`ASP.NET Core é o framework web moderno da Microsoft, open-source e cross-platform. Diferente do antigo ASP.NET Framework (Windows-only, pesado, System.Web acoplado), o ASP.NET Core roda em Windows, Linux e macOS, é modular e extremamente performante — consistentemente entre os frameworks web mais rápidos do mundo em benchmarks do TechEmpower.

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
// [ServiceFilter(typeof(AuditActionFilter))]`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Reescrever o GET /api/produtos como Minimal API e comparar com o Controller","Criar um RouteGroupBuilder para agrupar os endpoints de produtos v2","Implementar um EndpointFilter que valida se o ID da rota é positivo","Aplicar o AuditActionFilter em um controller existente com [ServiceFilter]","Acessar o Swagger e comparar os dois grupos (Controller vs Minimal API)"],quiz:[{q:"Quando Minimal APIs são mais adequadas que Controllers?",options:["Sempre — Controllers são obsoletos","Para microserviços simples, funções serverless e APIs com poucos endpoints, onde a leveza é vantajosa","Minimal APIs são mais rápidas em todos os cenários","Nunca — Controllers são sempre melhores"],answer:1,explanation:"Minimal APIs eliminam boilerplate (sem classes, atributos, herança). Ideais para microserviços e APIs simples. Controllers são melhores para APIs grandes: organização por responsabilidade, model validation, filter pipeline completo."},{q:"O que é um EndpointFilter e como difere de um ActionFilter?",options:["São a mesma coisa com nomes diferentes","EndpointFilter funciona com Minimal APIs; ActionFilter funciona com Controllers MVC — ambos interceptam requisições antes/depois do endpoint","EndpointFilter é mais lento","ActionFilter funciona com ambos os modelos"],answer:1,explanation:"EndpointFilter (IEndpointFilter) é para Minimal APIs. ActionFilter (IActionFilter) é para controllers MVC. Ambos permitem lógica antes/depois do endpoint. Em Minimal APIs, ActionFilter não funciona — use EndpointFilter."},{q:'O que este código faz? app.MapGroup("/api/v2/tarefas").AddEndpointFilter<ValidarIdFilter>().MapGet("/{id}", handler);',options:["Cria um grupo em /api/v2/tarefas, aplica ValidarIdFilter em TODOS os endpoints do grupo, e mapeia GET /{id}","Define um controller chamado TarefasV2","Erro de compilação — MapGroup não existe","Aplica o filter apenas no MapGet"],answer:0,explanation:"MapGroup cria um prefixo (/api/v2/tarefas). AddEndpointFilter aplica o filter em todos os endpoints do grupo. MapGet adiciona o endpoint. Requisição GET /api/v2/tarefas/5 passa pelo ValidarIdFilter antes do handler."}]}]},ip={id:"m6",title:"Entity Framework Core",icon:"🗄️",week:"Semana 6",color:"#059669",topics:[{id:"m6t1",moduleId:"m6",title:"DbContext, DbSet e Code First",theory:`Entity Framework Core (EF Core) é o ORM (Object-Relational Mapper) oficial do .NET. Ele mapeia classes C# para tabelas do banco de dados, permitindo que você trabalhe com objetos em vez de escrever SQL manualmente. A abordagem Code First significa que você modela as classes primeiro e o EF Core gera o schema do banco a partir delas.

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
// Com isso, cada SQL gerado aparece no console durante desenvolvimento.`,codeLanguage:"csharp",runCommand:"cd EcommerceApi && dotnet run",checklist:["Habilitar log de SQL no appsettings e ver as queries no console","Implementar ListarPaginadoAsync e verificar o OFFSET/FETCH no SQL gerado","Detectar um N+1 problem e corrigir adicionando Include","Criar uma projeção com Select que retorna apenas 3 campos (sem SELECT *)","Implementar um filtro dinâmico com Where condicional"],quiz:[{q:"O que é o problema N+1 no EF Core e como resolvê-lo?",options:["É um erro de compilação resolvido atualizando o EF Core","1 query para entidades pai + N queries para carregar cada filho; resolvido com Include (eager loading) que gera JOINs","Acontece quando o banco tem mais de N+1 tabelas","É um problema de paginação resolvido com Skip/Take"],answer:1,explanation:'N+1: carregar 100 pedidos (1 query) e acessar pedido.Cliente para cada (100 queries extras = 101 total). Include("Cliente") gera um JOIN e traz tudo em 1 query. Diferença pode ser segundos vs milissegundos.'},{q:"Por que projeções com Select são melhores que Include para APIs?",options:["Select é mais fácil de escrever","Select traz apenas as colunas necessárias (SELECT Nome, Preco); Include traz a entidade inteira com todas as colunas — menos tráfego e memória","Include não funciona com APIs","Select é obrigatório no EF Core 8"],answer:1,explanation:"Include carrega entidades completas (todas as colunas + tracking). Select projeta apenas os campos necessários, gerando SQL otimizado. Para APIs que retornam DTOs, projeção elimina dados desnecessários e evita tracking."},{q:"O que acontece com este LINQ se o EF Core não conseguir traduzir o GroupBy para SQL?",options:["Erro de compilação","O EF Core carrega TODOS os dados do banco para memória e faz o GroupBy no cliente (client-side evaluation) — devastador para performance","Retorna lista vazia","O banco faz o GroupBy normalmente"],answer:1,explanation:'Client-side evaluation é silencioso e perigoso: o EF Core baixa toda a tabela para memória e processa em C#. Pode consumir GB de RAM. Habilite LogLevel "Warning" para "Microsoft.EntityFrameworkCore.Query" para detectar.'}]}]},sp={id:"m7",title:"SQL Server Essencial",icon:"📊",week:"Semana 7",color:"#DC2626",topics:[{id:"m7t1",moduleId:"m7",title:"DDL: Criando Tabelas Profissionais",theory:`DDL (Data Definition Language) abrange os comandos que definem a estrutura do banco de dados: CREATE, ALTER, DROP. Em projetos corporativos com SQL Server, a modelagem de tabelas segue padrões rígidos: convenções de nomeação, tipos de dados corretos, constraints obrigatórias e índices planejados desde o início.

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
//     .ToListAsync();`,codeLanguage:"sql",runCommand:"sqlcmd -S localhost -d EcommerceDb -i stored_procedures.sql",checklist:["Criar SP com parâmetros de entrada, valor default e SET NOCOUNT ON","Criar SP transacional com BEGIN TRY/CATCH + THROW para re-lançar erros","Usar SCOPE_IDENTITY() e OUTPUT para retornar o ID do pedido criado","Criar a View VW_RelatorioPedidos e consultá-la como uma tabela normal","Chamar a SP do EF Core com FromSqlRaw usando SqlParameter"],quiz:[{q:"Por que transações com TRY/CATCH são obrigatórias em SPs que modificam dados?",options:["É apenas uma boa prática opcional","Sem TRY/CATCH, um erro no meio da SP pode deixar a transação aberta (bloqueando tabelas) e os dados em estado inconsistente (parte das operações aplicada)","O SQL Server não permite SPs sem TRY/CATCH","TRY/CATCH melhora a performance da SP"],answer:1,explanation:"Sem TRY/CATCH, um erro após BEGIN TRANSACTION não faz ROLLBACK automático. A transação fica aberta, segurando locks nas tabelas. Dados ficam parcialmente escritos (inconsistentes). TRY/CATCH garante ROLLBACK no erro."},{q:"Qual a diferença entre SCOPE_IDENTITY() e @@IDENTITY?",options:["São idênticos","SCOPE_IDENTITY() retorna o último IDENTITY gerado no escopo atual; @@IDENTITY retorna o último IDENTITY de qualquer escopo (pode ser de um trigger) — use SCOPE_IDENTITY()","@@IDENTITY é mais seguro","SCOPE_IDENTITY() só funciona com INT"],answer:1,explanation:"SCOPE_IDENTITY() é limitado ao escopo atual (a SP ou batch). @@IDENTITY pode retornar um ID gerado por um trigger que executou INSERT em outra tabela. Sempre use SCOPE_IDENTITY() para evitar bugs sutis."},{q:"O que acontece ao executar esta SP se o estoque de um produto fica negativo? (veja sp_CriarPedido)",options:["O pedido é criado normalmente com estoque negativo","RAISERROR interrompe a execução, o fluxo vai para CATCH, ROLLBACK desfaz TODAS as operações (inserção do pedido, itens e update de estoque)","Apenas o UPDATE de estoque é revertido","O SQL Server ajusta o estoque para zero automaticamente"],answer:1,explanation:"RAISERROR com severity 16 lança um erro que vai para o CATCH. O CATCH verifica @@TRANCOUNT > 0 e faz ROLLBACK TRANSACTION, desfazendo TUDO desde o BEGIN TRANSACTION: inserts e updates. Dados ficam como estavam antes."}]}]},lp={id:"m8",title:"Injeção de Dependência",icon:"🔌",week:"Semana 8",color:"#F59E0B",topics:[{id:"m8t1",moduleId:"m8",title:"Container de DI do .NET",theory:`Injeção de Dependência (DI) é o padrão arquitetural mais importante do ASP.NET Core. O framework foi construído sobre DI — Controllers, middlewares, DbContext, logging: tudo é resolvido pelo container. Entender DI é obrigatório para qualquer desenvolvedor .NET corporativo.

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
// $ git flow release finish v1.0.0`,codeLanguage:"csharp",runCommand:"dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi && dotnet run",checklist:["Criar o projeto do zero seguindo a estrutura de pastas indicada (Domain, Application, Infrastructure, API)","Implementar CRUD completo de Produtos com DTOs, Service e Repository","Implementar endpoints de Pedidos com validação de estoque no Service","Rodar todas as migrations e verificar o banco no Azure Data Studio","Fazer o commit final com GitFlow: git flow release start v1.0.0 && git flow release finish v1.0.0"],quiz:[{q:"Em Clean Architecture, qual camada deve conter a lógica de negócio (validação de estoque, cálculo de total)?",options:["Controller — é o ponto de entrada do request","Application/Services — orquestra lógica de negócio, recebe DTOs e delega acesso a dados para os repositórios","Infrastructure/Repositories — onde ficam as queries","Domain/Entities — as entidades sabem tudo sobre si mesmas"],answer:1,explanation:"A camada Application contém os Services que orquestram a lógica de negócio. Controllers são finos (validam input e retornam response). Repositories são focados em persistência. Entities contêm regras do domínio (invariantes), mas a orquestração fica nos Services."},{q:"Por que usar Repository Pattern neste projeto se o EF Core já é um ORM completo?",options:["Repository é obrigatório — sem ele o EF Core não funciona","Repository abstrai o acesso a dados atrás de interfaces, permitindo: trocar ORM sem alterar Services, usar mocks em testes unitários, encapsular queries complexas com nomes semânticos","Para adicionar mais camadas e código — quanto mais camadas, melhor","Repository é mais rápido que usar DbContext diretamente"],answer:1,explanation:"Repository + DI: Services dependem de IProdutoRepository (abstração). Em produção: EF Core. Em testes: mock. Se trocar para Dapper, cria nova implementação sem alterar Services. Queries complexas ficam encapsuladas com nomes legíveis."},{q:"Como garantir que as migrations rodem em produção de forma segura?",options:["Chamar Database.Migrate() no Program.cs — aplica automaticamente","Gerar script SQL com dotnet ef migrations script --idempotent, revisar com DBA, fazer backup do banco e executar o script manualmente ou via pipeline CI/CD","Migrations são apenas para desenvolvimento — em produção cria tabelas manualmente","O EF Core aplica migrations automaticamente em produção"],answer:1,explanation:"Em produção NUNCA aplique migrations automaticamente. Gere o script SQL (--idempotent para re-executar com segurança), passe por code review + DBA review, faça backup, aplique em staging primeiro e depois em produção via pipeline CI/CD controlada."}]}]},cp=[np,ip,sp,lp],dp={id:"m10",title:"Princípios SOLID",icon:"🏛️",week:"Semana 10",color:"#8B5CF6",topics:[{id:"m10t1",moduleId:"m10",title:"S: Single Responsibility Principle",theory:`"Uma classe deve ter apenas um motivo para mudar" — Robert C. Martin. Mas atenção: SRP não significa "fazer só uma coisa". Significa ter apenas um ator (stakeholder) que pode pedir mudança naquela classe.

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
// services.AddScoped<IAuditoriaLogger, FakeAuditoria>();`,checklist:['Buscar "new" no ContaService ou ProdutoService — cada "new" de serviço é DIP violation',"Substituir instanciações diretas por injeção via construtor","Criar uma implementação InMemory de IContaRepository para testes","Verificar que o service funciona com a implementação real E com a InMemory","Escrever um teste unitário que usa a implementação InMemory"],quiz:[{question:"Qual a diferença entre Dependency Injection e Dependency Inversion Principle?",options:["São a mesma coisa","DIP é o princípio arquitetural (abstrações entre camadas); DI é o mecanismo de implementação (container que injeta as dependências). Você pode ter DI sem DIP se injetar classes concretas em vez de interfaces","DIP é mais moderno que DI","DI é só para testes"],answer:1,explanation:'DIP é a regra ("dependa de abstrações"), DI é a ferramenta ("container que injeta"). Sem abstrações (interfaces), DI apenas move o "new" para outro lugar sem inverter nada.'},{question:'Por que "new SqlConnection()" dentro de um service viola o DIP?',options:["Não viola — é uma boa prática","O service de alto nível passa a depender de um detalhe de infraestrutura (SQL Server) — se mudar para PostgreSQL ou MongoDB, o service precisa mudar junto","SqlConnection é selado (sealed)","Performance é reduzida"],answer:1,explanation:"O service de negócio fica acoplado ao SQL Server. Com DIP, o service depende de IContaRepository — e não sabe se por trás está SQL, Mongo ou InMemory."},{question:"Qual o benefício mais direto de aplicar DIP em um sistema financeiro?",options:["Código mais curto","Possibilidade de testar a lógica de negócio em isolamento, sem banco de dados, servidor de email ou dependências externas — usando implementações InMemory ou Mocks","Menos interfaces para manter","Maior performance das queries"],answer:1,explanation:"DIP permite testes em milissegundos, sem Docker, sem banco real. A lógica de negócio é testada em isolamento — exatamente como Nubank e PicPay fazem."}]}]},up={id:"m11",title:"Domain-Driven Design",icon:"🏗️",week:"Semanas 11–12",color:"#10B981",topics:[{id:"m11t1",moduleId:"m11",title:"Linguagem Ubíqua e Bounded Contexts",theory:`Domain-Driven Design resolve um problema que todo sistema corporativo enfrenta: o código não fala a língua do negócio. Quando o analista financeiro diz "Fazer uma TED" e o desenvolvedor implementa ProcessTransaction(int userId, decimal amount, int typeId), surge um abismo de tradução que causa bugs, retrabalho e frustração.

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
//             <ProjectReference Infrastructure.csproj />`,checklist:["Criar a interface IDomainEvent e adicionar lista de eventos na Entity Conta (Aggregate Root)","Implementar ContaAbertaEvent e TransacaoRealizadaEvent como records imutáveis","Instalar MediatR (dotnet add package MediatR) e criar o Use Case RealizarTransferenciaUseCase","Criar um Handler que loga o evento TransacaoRealizada no console (simulando notificação)","Verificar que Domain Events são publicados APÓS SaveChanges — nunca antes"],quiz:[{question:"Por que Domain Events são nomeados no passado (TransacaoRealizada e não RealizarTransacao)?",options:["É apenas convenção sem motivo técnico real","Porque representam algo que JÁ aconteceu no domínio — um fato imutável, não uma intenção ou comando","Para diferir da nomenclatura de Controllers no ASP.NET","É exigência da biblioteca MediatR para publicação"],answer:1,explanation:"Domain Events são fatos: TransacaoRealizada, ContaAberta, LimiteExcedido. Comandos são intenções: RealizarTransacao, AbrirConta. Essa distinção é fundamental — você não pode 'desfazer' um evento, mas pode rejeitar um comando. O Domain registra eventos após a regra de negócio executar com sucesso."},{question:"Qual a responsabilidade de um Use Case na Application Layer?",options:["Conter as regras de negócio validando saldo, limites e status da conta","Orquestrar — buscar Aggregates, chamar Domain Services, salvar via Repository e publicar Domain Events. Sem regras de negócio (Domain) e sem acesso direto ao banco (Infrastructure)","Substituir os Controllers da API e receber requisições HTTP","Validar os dados de entrada usando FluentValidation"],answer:1,explanation:"O Use Case é um orquestrador: busca Conta no Repository (I/O), chama TransferenciaService.Executar() (regra de negócio no Domain), salva com SaveChanges (I/O), e publica eventos (notificação). Ele NÃO contém regras de negócio — isso é responsabilidade do Domain."},{question:"Por que os Domain Events são publicados APÓS o SaveChanges e não antes?",options:["Por convenção do MediatR e padrão de nomenclatura","Para garantir que os efeitos colaterais (notificação, auditoria) só acontecem se a transação foi commitada com sucesso — publicar antes poderia disparar ações para uma operação que ainda vai falhar","Por limitação técnica do Entity Framework Core com transações","Não importa a ordem — é apenas preferência do desenvolvedor"],answer:1,explanation:"Se o SaveChanges falha (erro de concorrência, constraint violation), os eventos nunca devem ser disparados. Imagine enviar 'Transferência de R$10.000 realizada' ao cliente quando o banco rollback a operação. Publicar APÓS o commit garante que só notificamos sobre fatos que realmente persistiram."}]}]},mp={id:"m12",title:"FluentValidation",icon:"✅",week:"Semana 12",color:"#F59E0B",topics:[{id:"m12t1",moduleId:"m12",title:"Validators e Regras Básicas",theory:"Conteúdo pendente — será preenchido na etapa F3-6.",code:"// Conteúdo pendente — será preenchido na etapa F3-6.",checklist:["Tarefa pendente"],quiz:[{question:"Pendente",options:["A","B"],answer:0,explanation:"Pendente"}]},{id:"m12t2",moduleId:"m12",title:"Regras Customizadas e Condicionais",theory:"Conteúdo pendente — será preenchido na etapa F3-6.",code:"// Conteúdo pendente — será preenchido na etapa F3-6.",checklist:["Tarefa pendente"],quiz:[{question:"Pendente",options:["A","B"],answer:0,explanation:"Pendente"}]},{id:"m12t3",moduleId:"m12",title:"Integração com ASP.NET Core e DI",theory:"Conteúdo pendente — será preenchido na etapa F3-6.",code:"// Conteúdo pendente — será preenchido na etapa F3-6.",checklist:["Tarefa pendente"],quiz:[{question:"Pendente",options:["A","B"],answer:0,explanation:"Pendente"}]},{id:"m12t4",moduleId:"m12",title:"Validação em Camadas (Domain + Application)",theory:"Conteúdo pendente — será preenchido na etapa F3-6.",code:"// Conteúdo pendente — será preenchido na etapa F3-6.",checklist:["Tarefa pendente"],quiz:[{question:"Pendente",options:["A","B"],answer:0,explanation:"Pendente"}]},{id:"m12proj",moduleId:"m12",title:"🏦 Projeto: Sistema Financeiro DDD",theory:"Conteúdo pendente — será preenchido na etapa F3-6.",code:"// Conteúdo pendente — será preenchido na etapa F3-6.",checklist:["Tarefa pendente"],quiz:[{question:"Pendente",options:["A","B"],answer:0,explanation:"Pendente"}]}]},pp={id:"m9",title:"Clean Code",icon:"✨",week:"Semana 9",color:"#06B6D4",topics:[{id:"m9t1",moduleId:"m9",title:"Nomes que Revelam Intenção",theory:`Clean Code começa pela escolha dos nomes. Robert C. Martin diz: "o nome de uma variável, função ou classe deve responder três perguntas — por que existe, o que faz e como é usada." Se o nome precisar de um comentário para ser entendido, ele está errado.

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
    decimal SaldoFinal);`,checklist:["Identificar 3 Code Smells no projeto da Fase 2 usando a lista do tópico","Aplicar Extract Method em um método longo (F1 no Rider ou Ctrl+R+M no VS)","Substituir pelo menos 3 magic numbers por constantes nomeadas","Criar um record para agrupar parâmetros de um método com 4+ params","Rodar os testes após cada refatoração para garantir que nada quebrou"],quiz:[{question:"Qual a definição correta de refatoração?",options:["Reescrever o código do zero para adicionar novas funcionalidades","Alterar a estrutura interna do código sem modificar seu comportamento externo observável","Corrigir bugs sem alterar a arquitetura","Otimizar performance do código"],answer:1,explanation:"Refatoração é exclusivamente sobre estrutura interna — o comportamento externo deve permanecer idêntico. Alterações de funcionalidade ou bugs são outras atividades."},{question:'O que é "Primitive Obsession" como Code Smell?',options:["Usar tipos primitivos (string, int) onde uma classe ou record expressaria melhor o conceito — ex: CPF como string em vez de um Value Object Cpf","Código que usa muitos loops primitivos","Excesso de if/else","Usar int em vez de long"],answer:0,explanation:"Primitive Obsession é usar string para CPF, email, telefone quando um Value Object com validação embutida expressaria melhor a intenção e garantiria a consistência."},{question:"Por que refatorar sem testes automatizados é arriscado?",options:["Testes não são necessários para refatorar","Sem testes não há como verificar que o comportamento externo não mudou — você pode introduzir bugs silenciosos que só aparecem em produção","Refatoração só é válida com 100% de cobertura","O compilador garante que o comportamento não mudou"],answer:1,explanation:"Testes são a rede de segurança da refatoração. Sem eles, qualquer mudança estrutural pode alterar o comportamento sem que ninguém perceba até explodir em produção."}]}]},fp=[pp,dp,up,mp],Ro=[{id:"phase1",title:"Fase 1",subtitle:"C# Fundamentos & Git",data:rp,color:"#00D4FF",weeks:"Semanas 1–4"},{id:"phase2",title:"Fase 2",subtitle:"Web API & Banco de Dados",data:cp,color:"#7C3AED",weeks:"Semanas 5–8"},{id:"phase3",title:"Fase 3",subtitle:"Qualidade & Arquitetura",data:fp,color:"#10B981",weeks:"Semanas 9–12"}];function Ho(l){var C;try{const c=(C=window.storage)==null?void 0:C.getItem(l);return c!=null?JSON.parse(c):void 0}catch{return}}function gp(l,C){var c;try{(c=window.storage)==null||c.setItem(l,JSON.stringify(C))}catch{}}const vp=["m1t1","m1t2","m1t3","m1t4","m2t1","m2t2","m2t3","m2t4","m3t1","m3t2","m3t3","m3t4","m4t1","m4t2","m4t3","m4t4"],Cp=["m5t1","m5t2","m5t3","m5t4","m6t1","m6t2","m6t3","m6t4","m7t1","m7t2","m7t3","m7t4","m8t1","m8t2","m8t3","m8t4","m8proj"],hp=["m9t1","m9t2","m9t3","m9t4","m10t1","m10t2","m10t3","m10t4","m11t1","m11t2","m11t3","m11t4","m12t1","m12t2","m12t3","m12t4","m12proj"],Sp=["m1","m2","m3","m4"],Ep=["m5","m6","m7","m8"],yp=["m9","m10","m11","m12"];function bp(){const[l,C]=F.useState(!0),[c,y]=F.useState(null),E=F.useRef(!1);return F.useEffect(()=>{if(E.current)return;E.current=!0;const S=Ho(de.currentTopic)??null,R=Ho(de.xp)??0,A=Ho(de.completed)??[],b=Ho(de.phase2Completed)??[],O=Ho(de.phase3Completed)??[],z=[...A,...b,...O],w={},k={},K={},Z={},W=[...vp,...Cp,...hp],U=[...Sp,...Ep,...yp];for(const G of W){const X=Ho(es(G));X!==void 0&&(w[G]=X);const ue=Ho(os(G));ue!==void 0&&(k[G]=ue);const ye=Ho(as(G));ye!==void 0&&(K[G]=ye)}for(const G of U){const X=Ho(rs(G));X!==void 0&&(Z[G]=X)}y({currentTopic:S,completed:z,xp:R,checklists:w,quizzes:k,notes:K,timers:Z}),C(!1)},[]),{loading:l,initialState:c,saveItem:gp,STORAGE:de}}const Ip=5e3;function Tp(l,C,c){const[y,E]=F.useState(C||{}),S=F.useRef(null),R=F.useRef(!0),A=F.useRef(l),b=F.useRef(y);b.current=y,A.current=l;const O=F.useCallback(()=>{S.current&&clearInterval(S.current),A.current&&(S.current=setInterval(()=>{!R.current||!A.current||E(z=>({...z,[A.current]:(z[A.current]||0)+5}))},Ip))},[]);return F.useEffect(()=>{if(!l){S.current&&clearInterval(S.current);return}return O(),()=>{S.current&&clearInterval(S.current)}},[l,O]),F.useEffect(()=>{const z=()=>{R.current=document.visibilityState==="visible"};return document.addEventListener("visibilitychange",z),()=>{document.removeEventListener("visibilitychange",z)}},[]),F.useEffect(()=>{l&&c(rs(l),y[l]||0)},[y,l,c]),y}const md=3,xp=3e3;function Pp(){const[l,C]=F.useState([]),c=F.useRef(1),y=F.useCallback((S,R="success")=>{const A=c.current++;C(b=>{const O=[...b,{id:A,message:S,type:R}];return O.length>md?O.slice(-md):O}),setTimeout(()=>{C(b=>b.filter(O=>O.id!==A))},xp)},[]),E=F.useCallback(S=>{C(R=>R.filter(A=>A.id!==S))},[]);return{toasts:l,addToast:y,removeToast:E}}function Ap(l,C,c){const[y,E]=F.useState(l||0),S=F.useRef({checklists:new Set,quizzes:new Set,modules:new Set}),R=F.useCallback((w,k)=>{E(K=>{const Z=K+w;return C(de.xp,Z),Z}),k&&c&&c(k,"xp")},[C,c]),A=F.useCallback(w=>{S.current.checklists.has(w)||(S.current.checklists.add(w),R(20,"+20 XP — Checklist completo!"))},[R]),b=F.useCallback((w,k)=>{if(S.current.quizzes.has(w))return;S.current.quizzes.add(w);const K=k*10;K>0&&R(K,`+${K} XP — Quiz concluído!`)},[R]),O=F.useCallback((w,k)=>{S.current.modules.has(w)||(S.current.modules.add(w),R(100,`🎉 Módulo ${k} Concluído! +100 XP`))},[R]),z=F.useCallback((w,k,K,Z)=>{for(const W of w){const U=K[W];U&&U.length>0&&U.every(Boolean)&&S.current.checklists.add(W);const G=k[W];G&&G.submitted&&S.current.quizzes.add(W)}for(const W of Z)W.topics.every(G=>w.includes(G.id))&&S.current.modules.add(W.id)},[]);return{xp:y,awardChecklistXP:A,awardQuizXP:b,awardModuleXP:O,initAwarded:z}}const zt={layout:{display:"flex",marginTop:56,height:"calc(100vh - 56px)",background:m.bg,color:m.text,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif"},main:{flex:1,height:"calc(100vh - 56px)",overflowY:"auto",padding:32},mainInner:{maxWidth:820,margin:"0 auto"},placeholder:{display:"flex",alignItems:"center",justifyContent:"center",height:"60vh",color:m.textMuted,fontSize:16},loading:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:m.bg,color:m.textMuted,fontSize:16,fontFamily:"'Segoe UI', system-ui, -apple-system, sans-serif"}};function Rp(){var le,ie;const{loading:l,initialState:C,saveItem:c}=bp(),{toasts:y,addToast:E,removeToast:S}=Pp(),R=F.useMemo(()=>Ro.flatMap(V=>V.data),[]),A=F.useMemo(()=>Ja(R),[R]),[b,O]=F.useState(null),[z,w]=F.useState([]),[k,K]=F.useState({}),[Z,W]=F.useState({}),[U,G]=F.useState({}),[X,ue]=F.useState(!1),[ye,Fe]=F.useState(!1),[Re,me]=F.useState(null),Oe=F.useRef(!1),ro=F.useRef(!1),ge=b?Lm(b,R):null,Lo=F.useMemo(()=>{if(!b)return Ro[0];for(const V of Ro)if(V.data.some(oe=>oe.topics.some(pe=>pe.id===b)))return V;return Ro[0]},[b]),{xp:no,awardChecklistXP:Ue,awardQuizXP:Ye,awardModuleXP:io,initAwarded:_e}=Ap((C==null?void 0:C.xp)||0,c,E),ve=Tp((ge==null?void 0:ge.id)||null,(C==null?void 0:C.timers)||{},c);F.useEffect(()=>{if(l||X||!C)return;O(C.currentTopic),w(C.completed),K(C.checklists),W(C.quizzes),G(C.notes),_e(C.completed,C.quizzes,C.checklists,R);const V=Ja(Ro[0].data);Oe.current=V.every(pe=>C.completed.includes(pe.id));const oe=Ja(Ro[1].data);ro.current=oe.every(pe=>C.completed.includes(pe.id)),ue(!0)},[l,X,C,_e,R]),F.useEffect(()=>{X&&c(de.currentTopic,b)},[b,X,c]),F.useEffect(()=>{if(!X)return;const V=z.filter(Be=>/^m[1-4]/.test(Be)),oe=z.filter(Be=>/^m[5-8]/.test(Be)),pe=z.filter(Be=>/^m(9|1[0-2])/.test(Be));c(de.completed,V),c(de.phase2Completed,oe),c(de.phase3Completed,pe)},[z,X,c]),F.useEffect(()=>{if(X)for(const[V,oe]of Object.entries(k))c(es(V),oe)},[k,X,c]),F.useEffect(()=>{if(X)for(const[V,oe]of Object.entries(Z))c(os(V),oe)},[Z,X,c]),F.useEffect(()=>{if(X)for(const[V,oe]of Object.entries(U))c(as(V),oe)},[U,X,c]);const D=b?qm(b,A):null,H=D?A.findIndex(V=>V.id===D.id):-1,L=b?wm(b,k,Z):!1,f=F.useCallback((V,oe)=>{!b||!D||K(pe=>{const so=[...pe[b]||D.checklist.map(()=>!1)];return so[V]=oe,so.every(Boolean)&&Ue(b),{...pe,[b]:so}})},[b,D,Ue]),I=F.useCallback((V,oe)=>{if(!b)return;const pe=D.quiz.reduce((Be,so,Xe)=>Be+(V[Xe]===so.answer?1:0),0);W(Be=>({...Be,[b]:{answers:V,submitted:!0}})),Ye(b,pe)},[b,D,Ye]),J=F.useCallback(V=>{b&&G(oe=>({...oe,[b]:V}))},[b]),ee=F.useCallback(()=>{H>0&&O(A[H-1].id)},[H,A]),te=F.useCallback(()=>{if(H<A.length-1&&L){const V=A[H+1].id;w(oe=>{if(oe.includes(b))return oe;const pe=[...oe,b];return ge&&ge.topics.every(Xe=>Xe.id===b||pe.includes(Xe.id))&&io(ge.id,ge.title),Oe.current||Ja(Ro[0].data).every(Xe=>Xe.id===b||pe.includes(Xe.id))&&(Oe.current=!0,E("🎉 Fase 2 Desbloqueada! Web API & Banco de Dados","unlock"),me("phase2"),setTimeout(()=>me(null),2e3)),!ro.current&&Oe.current&&Ja(Ro[1].data).every(Xe=>Xe.id===b||pe.includes(Xe.id))&&(ro.current=!0,E("🎉 Fase 3 Desbloqueada! Qualidade & Arquitetura","unlock"),me("phase3"),setTimeout(()=>me(null),2e3)),E("🔓 Novo tópico desbloqueado","unlock"),pe}),O(V)}},[H,A,L,b,ge,io,E]),re=F.useCallback(()=>{O(null),w([]),K({}),W({}),G({}),Fe(!1),Oe.current=!1,ro.current=!1,c(de.currentTopic,null),c(de.completed,[]),c(de.phase2Completed,[]),c(de.phase3Completed,[]),c(de.xp,0);for(const V of Ro)for(const oe of V.data)for(const pe of oe.topics)c(es(pe.id),void 0),c(os(pe.id),void 0),c(as(pe.id),void 0);for(const V of Ro)for(const oe of V.data)c(rs(oe.id),void 0);E("Progresso resetado com sucesso","success")},[c,E]);return l||!X?d.jsx("div",{style:zt.loading,children:"Carregando progresso..."}):d.jsxs(d.Fragment,{children:[d.jsx(Rm,{timerSeconds:ge&&ve[ge.id]||0,moduleColor:ge==null?void 0:ge.color,xp:no,completedCount:z.length,totalTopics:A.length,currentPhase:Lo,onDashboardOpen:()=>Fe(!0)}),d.jsxs("div",{style:zt.layout,children:[d.jsx(zm,{allPhases:Ro,currentTopicId:b,completedTopics:z,allTopics:A,isTopicUnlocked:Om,onTopicClick:O,justUnlockedPhase:Re}),d.jsx("main",{style:zt.main,children:d.jsx("div",{style:zt.mainInner,children:D&&ge?d.jsx(Zm,{topic:D,module:ge,completedTopics:z,currentIndex:H,totalTopics:A.length,canAdvance:L,onPrevious:ee,onNext:te,checklist:k[b],onChecklistChange:f,quizAnswers:(le=Z[b])==null?void 0:le.answers,quizSubmitted:(ie=Z[b])==null?void 0:ie.submitted,onQuizSubmit:I,notes:U[b],onNotesChange:J}):d.jsx("div",{style:zt.placeholder,children:"Selecione um tópico para começar"})})})]}),d.jsx(Dm,{toasts:y,onDismiss:S}),ye&&d.jsx(Tm,{modules:R,completedTopics:z,checklists:k,quizzes:Z,notes:U,timers:ve,xp:no,onClose:()=>Fe(!1),onReset:re})]})}hm.createRoot(document.getElementById("root")).render(d.jsx(Rp,{}));
