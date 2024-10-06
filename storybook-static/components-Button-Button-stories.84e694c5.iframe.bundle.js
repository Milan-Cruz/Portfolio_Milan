"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.Ay.button`
  padding: 10px 20px;
  background-color: ${_ref=>{let{disabled}=_ref;return disabled?"grey":"blue"}};
  color: white;
  cursor: ${_ref2=>{let{disabled}=_ref2;return disabled?"not-allowed":"pointer"}};
  opacity: ${_ref3=>{let{disabled}=_ref3;return disabled?.6:1}};
  border: none;
  border-radius: 5px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: ${_ref4=>{let{disabled}=_ref4;return disabled?.6:.8}};
  }
`,Button=_ref5=>{let{label,onClick,disabled=!1}=_ref5;return(0,jsx_runtime.jsx)(StyledButton,{onClick:disabled?void 0:onClick,disabled,children:label})},Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Button_stories={title:"Components/Button",component:Button_Button,argTypes:{label:{control:"text"},disabled:{control:"boolean"}}},Template=args=>(0,jsx_runtime.jsx)(Button_Button,{...args}),Default=Template.bind({});Default.args={label:"Click Me",disabled:!1,onClick:()=>alert("Button clicked!")};const Disabled=Template.bind({});Disabled.args={label:"Disabled",disabled:!0,onClick:()=>{}};const __namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Button-Button-stories.84e694c5.iframe.bundle.js.map