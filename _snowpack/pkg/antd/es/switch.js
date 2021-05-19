import{n as D,d as T,a as h,g as W,e as R,S as $,b as L,L as M}from"../../common/index-b555160e.js";import{r as i}from"../../common/index-4b0af3e2.js";import{c as S}from"../../common/index.esm-dc9b15a0.js";import{u as A}from"../../common/useMergedState-545be37d.js";import{K as I}from"../../common/KeyCode-ab1b83ef.js";import{W as H}from"../../common/wave-5a47d06d.js";import"../../common/index-6302b3fe.js";import"../../common/raf-1dc0bd75.js";import"../../common/reactNode-7d14b139.js";var O=i.forwardRef(function(e,r){var n,a=e.prefixCls,o=a===void 0?"rc-switch":a,s=e.className,C=e.checked,b=e.defaultChecked,d=e.disabled,l=e.loadingIcon,p=e.checkedChildren,g=e.unCheckedChildren,m=e.onClick,u=e.onChange,t=e.onKeyDown,x=D(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=A(!1,{value:C,defaultValue:b}),j=T(k,2),f=j[0],E=j[1];function w(c,y){var v=f;return d||(v=c,E(v),u==null||u(v,y)),v}function P(c){c.which===I.LEFT?w(!1,c):c.which===I.RIGHT&&w(!0,c),t==null||t(c)}function K(c){var y=w(!f,c);m==null||m(y,c)}var z=S(o,s,(n={},h(n,"".concat(o,"-checked"),f),h(n,"".concat(o,"-disabled"),d),n));return i.createElement("button",Object.assign({},x,{type:"button",role:"switch","aria-checked":f,disabled:d,className:z,ref:r,onKeyDown:P,onClick:K}),l,i.createElement("span",{className:"".concat(o,"-inner")},f?p:g))});O.displayName="Switch";var _=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n},N=i.forwardRef(function(e,r){var n,a=e.prefixCls,o=e.size,s=e.loading,C=e.className,b=C===void 0?"":C,d=e.disabled,l=_(e,["prefixCls","size","loading","className","disabled"]);W("checked"in l||!("value"in l),"Switch","`value` is not a valid prop, do you mean `checked`?");var p=i.useContext(R),g=p.getPrefixCls,m=p.direction,u=i.useContext($),t=g("switch",a),x=i.createElement("div",{className:"".concat(t,"-handle")},s&&i.createElement(M,{className:"".concat(t,"-loading-icon")})),k=S((n={},h(n,"".concat(t,"-small"),(o||u)==="small"),h(n,"".concat(t,"-loading"),s),h(n,"".concat(t,"-rtl"),m==="rtl"),n),b);return i.createElement(H,{insertExtraNode:!0},i.createElement(O,L({},l,{prefixCls:t,className:k,disabled:d||s,ref:r,loadingIcon:x})))});N.__ANT_SWITCH=!0,N.displayName="Switch";export default N;