import{_ as pe,C as ge,a as l,b as E,L as Y,c as Ce,S as be,d as Z,e as ye,f as ee,g as te}from"./index-4e618a8b.js";import{r}from"./index-4b0af3e2.js";import{c as ne}from"./index.esm-b2aae1e2.js";import{o as he}from"./omit-3a8a51e1.js";import{W as xe}from"./wave-3d2487d8.js";import{t as O}from"./type-10729977.js";import{c as Ne}from"./reactNode-7d14b139.js";var Se=function t(n){return pe(this,t),new Error("unreachable case: ".concat(JSON.stringify(n)))},_e=function(t,n){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)n.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(o[e[a]]=t[e[a]]);return o},ke=function(n){return r.createElement(ge,null,function(o){var e,a=o.getPrefixCls,s=o.direction,u=n.prefixCls,i=n.size,m=n.className,p=_e(n,["prefixCls","size","className"]),b=a("btn-group",u),g="";switch(i){case"large":g="lg";break;case"small":g="sm";break;case"middle":case void 0:break;default:console.warn(new Se(i))}var f=ne(b,(e={},l(e,"".concat(b,"-").concat(g),g),l(e,"".concat(b,"-rtl"),s==="rtl"),e),m);return r.createElement("div",E({},p,{className:f}))})},T=function(){return{width:0,opacity:0,transform:"scale(0)"}},P=function(n){return{width:n.scrollWidth,opacity:1,transform:"scale(1)"}},we=function(n){var o=n.prefixCls,e=n.loading,a=n.existIcon,s=!!e;return a?r.createElement("span",{className:"".concat(o,"-loading-icon")},r.createElement(Y,null)):r.createElement(Ce,{visible:s,motionName:"".concat(o,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:T,onAppearActive:P,onEnterStart:T,onEnterActive:P,onLeaveStart:P,onLeaveActive:T},function(u,i){var m=u.className,p=u.style;return r.createElement("span",{className:"".concat(o,"-loading-icon"),style:p,ref:i},r.createElement(Y,{className:m}))})},Ee=function(t,n){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)n.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(o[e[a]]=t[e[a]]);return o},ae=/^[\u4e00-\u9fa5]{2}$/,j=ae.test.bind(ae);function Oe(t){return typeof t=="string"}function N(t){return t==="text"||t==="link"}function Te(t,n){if(t!=null){var o=n?" ":"";return typeof t!="string"&&typeof t!="number"&&Oe(t.type)&&j(t.props.children)?Ne(t,{children:t.props.children.split("").join(o)}):typeof t=="string"?(j(t)&&(t=t.split("").join(o)),r.createElement("span",null,t)):t}}function Pe(t,n){var o=!1,e=[];return r.Children.forEach(t,function(a){var s=ee(a),u=s==="string"||s==="number";if(o&&u){var i=e.length-1,m=e[i];e[i]="".concat(m).concat(a)}else e.push(a);o=u}),r.Children.map(e,function(a){return Te(a,n)})}var Ue=O("default","primary","ghost","dashed","link","text"),Ge=O("circle","round"),De=O("submit","button","reset");function je(t){return t==="danger"?{danger:!0}:{type:t}}var Be=function(n,o){var e,a=n.loading,s=a===void 0?!1:a,u=n.prefixCls,i=n.type,m=n.danger,p=n.shape,b=n.size,g=n.className,f=n.children,d=n.icon,B=n.ghost,I=B===void 0?!1:B,R=n.block,re=R===void 0?!1:R,z=n.htmlType,oe=z===void 0?"button":z,L=Ee(n,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),ie=r.useContext(be),se=r.useState(!!s),$=Z(se,2),y=$[0],A=$[1],ce=r.useState(!1),W=Z(ce,2),_=W[0],U=W[1],k=r.useContext(ye),le=k.getPrefixCls,G=k.autoInsertSpaceInButton,ue=k.direction,C=o||r.createRef(),D=r.useRef(),H=function(){return r.Children.count(f)===1&&!d&&!N(i)},fe=function(){if(!(!C||!C.current||G===!1)){var x=C.current.textContent;H()&&j(x)?_||U(!0):_&&U(!1)}},v;ee(s)==="object"&&s.delay?v=s.delay||!0:v=!!s,r.useEffect(function(){clearTimeout(D.current),typeof v=="number"?D.current=window.setTimeout(function(){A(v)},v):A(v)},[v]),r.useEffect(fe,[C]);var M=function(x){var w,me=n.onClick,ve=n.disabled;if(y||ve){x.preventDefault();return}(w=me)===null||w===void 0||w(x)};te(!(typeof d=="string"&&d.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(d,"` at https://ant.design/components/icon")),te(!(I&&N(i)),"Button","`link` or `text` button can't be a `ghost` button.");var c=le("btn",u),J=G!==!1,h="";switch(b||ie){case"large":h="lg";break;case"small":h="sm";break}var de=y?"loading":d,q=ne(c,(e={},l(e,"".concat(c,"-").concat(i),i),l(e,"".concat(c,"-").concat(p),p),l(e,"".concat(c,"-").concat(h),h),l(e,"".concat(c,"-icon-only"),!f&&f!==0&&!!de),l(e,"".concat(c,"-background-ghost"),I&&!N(i)),l(e,"".concat(c,"-loading"),y),l(e,"".concat(c,"-two-chinese-chars"),_&&J),l(e,"".concat(c,"-block"),re),l(e,"".concat(c,"-dangerous"),!!m),l(e,"".concat(c,"-rtl"),ue==="rtl"),e),g),F=d&&!y?d:r.createElement(we,{existIcon:!!d,prefixCls:c,loading:!!y}),K=f||f===0?Pe(f,H()&&J):null,Q=he(L,["navigate"]);if(Q.href!==void 0)return r.createElement("a",E({},Q,{className:q,onClick:M,ref:C}),F,K);var V=r.createElement("button",E({},L,{type:oe,className:q,onClick:M,ref:C}),F,K);return N(i)?V:r.createElement(xe,null,V)},S=r.forwardRef(Be);S.displayName="Button",S.Group=ke,S.__ANT_BUTTON=!0;export{S as B,je as c};