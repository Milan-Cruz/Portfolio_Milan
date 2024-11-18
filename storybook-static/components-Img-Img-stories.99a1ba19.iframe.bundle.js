'use strict'
;(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [15],
  {
    './src/components/Img/Img.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Img_stories,
        })
      __webpack_require__('./node_modules/react/index.js')
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      const StyledImg = styled_components_browser_esm.Ay.img`
  max-width: 100%;
  height: auto;
  cursor: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? 'not-allowed' : 'pointer'
  }};
  opacity: ${(_ref2) => {
    let { disabled } = _ref2
    return disabled ? 0.5 : 1
  }};
  transition: opacity 0.3s ease;
`,
        Img = (_ref3) => {
          let { src, alt, disabled = !1 } = _ref3
          return (0, jsx_runtime.jsx)(StyledImg, { src, alt, disabled })
        },
        Img_Img = Img
      Img.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Img',
        props: {
          src: { required: !0, tsType: { name: 'string' }, description: '' },
          alt: { required: !0, tsType: { name: 'string' }, description: '' },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      }
      const Img_stories = {
          title: 'Components/Img',
          component: Img_Img,
          argTypes: {
            src: { control: 'text' },
            alt: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Img_Img, { ...args }),
        Default = Template.bind({})
      Default.args = {
        src: 'https://via.placeholder.com/150',
        alt: 'Placeholder Image',
        disabled: !1,
      }
      const Disabled = Template.bind({})
      Disabled.args = {
        src: 'https://via.placeholder.com/150',
        alt: 'Disabled Image',
        disabled: !0,
      }
      const __namedExportsOrder = ['Default', 'Disabled']
      ;(Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Img {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Img {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        })
    },
  },
])
//# sourceMappingURL=components-Img-Img-stories.99a1ba19.iframe.bundle.js.map
