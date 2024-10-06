"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[103],{"./src/components/Text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Text_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledInput=styled_components_browser_esm.Ay.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s ease;
  background-color: ${_ref=>{let{disabled}=_ref;return disabled?"#f0f0f0":"white"}};
  cursor: ${_ref2=>{let{disabled}=_ref2;return disabled?"not-allowed":"text"}};

  &:focus {
    outline: none;
    border-color: blue;
  }
`,Text=_ref3=>{let{placeholder,value,onChange,disabled=!1}=_ref3;return(0,jsx_runtime.jsx)(StyledInput,{type:"text",placeholder,value,onChange,disabled})},Text_Text=Text;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Text_stories={title:"Components/Text",component:Text_Text,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"}}},Template=args=>(0,jsx_runtime.jsx)(Text_Text,{...args}),Default=Template.bind({});Default.args={placeholder:"Enter text...",value:"",disabled:!1,onChange:()=>{}};const Disabled=Template.bind({});Disabled.args={placeholder:"Disabled input",value:"",disabled:!0,onChange:()=>{}};const __namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Text {...args} />",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Text {...args} />",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Text-Text-stories.bbad0b31.iframe.bundle.js.map