import m from"../../../_snowpack/pkg/antd/es/form.js";import d from"../../../_snowpack/pkg/antd/es/input.js";import f from"../../../_snowpack/pkg/antd/es/typography.js";import t,{useEffect as g,useState as l}from"../../../_snowpack/pkg/react.js";import k from"../../helpers/validate.js";function v({name:e,setter:n}){const[o,p]=l("");g(()=>{const[a,r]=n;r({...a,[e]:o})},[o]);const[s,i]=l({status:""});function c(a){const[r,u]=k(e,a.target.value,1);i(u),r&&p(a.target.value)}return t.createElement(t.Fragment,null,t.createElement(f.Title,{level:5,style:{textTransform:"capitalize"}},e,":"),t.createElement(m.Item,{hasFeedback:!0,validateStatus:s.status,help:s.message},t.createElement(d,{allowClear:!0,size:"large",placeholder:`Option ${e}...`,value:o,onChange:c})))}export default v;