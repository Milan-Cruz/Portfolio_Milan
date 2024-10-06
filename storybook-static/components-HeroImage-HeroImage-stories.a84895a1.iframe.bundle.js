"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[407],{"./src/components/HeroImage/HeroImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeroImage_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledHero=styled_components_browser_esm.Ay.div`
  background-image: url(${_ref=>{let{bgImage}=_ref;return bgImage}});
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${_ref2=>{let{disabled}=_ref2;return disabled?"#a0a0a0":"white"}};
  font-size: 24px;
  cursor: ${_ref3=>{let{disabled}=_ref3;return disabled?"not-allowed":"pointer"}};
  opacity: ${_ref4=>{let{disabled}=_ref4;return disabled?.6:1}};
  transition: opacity 0.3s ease, color 0.3s ease;
`,HeroImage=_ref5=>{let{bgImage,children,disabled=!1}=_ref5;return(0,jsx_runtime.jsx)(StyledHero,{bgImage,disabled,children})},HeroImage_HeroImage=HeroImage;HeroImage.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{bgImage:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const HeroImage_stories={title:"Components/HeroImage",component:HeroImage_HeroImage,argTypes:{bgImage:{control:"text"},children:{control:"text"},disabled:{control:"boolean"}}},Template=args=>(0,jsx_runtime.jsx)(HeroImage_HeroImage,{...args}),Default=Template.bind({});Default.args={bgImage:"https://via.placeholder.com/1200x400",children:"Hero Content",disabled:!1};const Disabled=Template.bind({});Disabled.args={bgImage:"https://via.placeholder.com/1200x400",children:"Hero Content (Disabled)",disabled:!0};const __namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <HeroImage {...args} />",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <HeroImage {...args} />",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-HeroImage-HeroImage-stories.a84895a1.iframe.bundle.js.map