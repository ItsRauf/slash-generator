import{ApplicationCommandOptionType as a}from"../slash/ApplicationCommand.js";import{atom as i,selector as e}from"../../_snowpack/pkg/recoil.js";export const commandState=i({key:"commandState",default:{}}),finalCommandState=e({key:"finalCommandState",get:({get:o})=>{const t={...o(commandState)};return t.options&&(t.options=t.options.map(p=>({...p,key:void 0})),t.options.length===0&&(t.options=void 0)),JSON.stringify(t,null,2)}}),optionElementState=i({key:"optionElementState",default:[]}),finalOptionElementState=e({key:"finalOptionElementState",get:({get:o})=>o(optionElementState)}),useableOptionType=e({key:"usableOptionType",get:({get:o})=>{const n=o(commandState);return n.options?.find(t=>t.type===a.SubCommandGroup)?"SubCommandGroup":n.options?.find(t=>t.type===a.SubCommand)?"SubCommand":n.options&&n.options.length>0?"Option":!1}});