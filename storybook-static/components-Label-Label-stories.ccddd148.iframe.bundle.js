'use strict'
;(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [747],
  {
    './src/components/Label/Label.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Label_stories,
        })
      __webpack_require__('./node_modules/react/index.js')
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      const StyledLabel = styled_components_browser_esm.Ay.label`
  font-size: 16px;
  color: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? '#a0a0a0' : 'black'
  }};
  cursor: ${(_ref2) => {
    let { disabled } = _ref2
    return disabled ? 'not-allowed' : 'pointer'
  }};
  display: block;
  margin-bottom: 8px;
  opacity: ${(_ref3) => {
    let { disabled } = _ref3
    return disabled ? 0.6 : 1
  }};
  transition: color 0.3s ease, opacity 0.3s ease;
`,
        Label = (_ref4) => {
          let { text, htmlFor, disabled = !1 } = _ref4
          return (0, jsx_runtime.jsx)(StyledLabel, {
            htmlFor,
            disabled,
            children: text,
          })
        },
        Label_Label = Label
      Label.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Label',
        props: {
          text: { required: !0, tsType: { name: 'string' }, description: '' },
          htmlFor: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      }
      const Label_stories = {
          title: 'Components/Label',
          component: Label_Label,
          argTypes: {
            text: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Label_Label, { ...args }),
        Default = Template.bind({})
      Default.args = { text: 'Label Text', disabled: !1 }
      const Disabled = Template.bind({})
      Disabled.args = { text: 'Label Text (Disabled)', disabled: !0 }
      const __namedExportsOrder = ['Default', 'Disabled']
      ;(Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Label {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Label {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        })
    },
  },
])
//# sourceMappingURL=components-Label-Label-stories.ccddd148.iframe.bundle.js.map
