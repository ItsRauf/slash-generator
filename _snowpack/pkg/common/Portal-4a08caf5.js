import{r}from"./index-4b0af3e2.js";import{r as d}from"./index-6302b3fe.js";import{z as l}from"./index-4e618a8b.js";function s(e,t){return e?e.contains(t):!1}var v=r.forwardRef(function(e,t){var i=e.didUpdate,o=e.getContainer,f=e.children,n=r.useRef();r.useImperativeHandle(t,function(){return{}});var c=r.useRef(!1);return!c.current&&l()&&(n.current=o(),c.current=!0),r.useEffect(function(){i==null||i(e)}),r.useEffect(function(){return function(){var a,u;(a=n.current)===null||a===void 0||(u=a.parentNode)===null||u===void 0||u.removeChild(n.current)}},[]),n.current?d.createPortal(f,n.current):null});export{v as P,s as c};