'use strict'
;(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [513],
  {
    './src/components/Card/Card.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        })
      __webpack_require__('./node_modules/react/index.js')
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      const StyledCard = styled_components_browser_esm.Ay.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? '#f0f0f0' : 'white'
  }};
  color: ${(_ref2) => {
    let { disabled } = _ref2
    return disabled ? '#a0a0a0' : 'black'
  }};
  cursor: ${(_ref3) => {
    let { disabled } = _ref3
    return disabled ? 'not-allowed' : 'pointer'
  }};
  opacity: ${(_ref4) => {
    let { disabled } = _ref4
    return disabled ? 0.6 : 1
  }};
  transition: opacity 0.3s ease, background-color 0.3s ease;
`,
        Card = (_ref5) => {
          let { title, content, disabled = !1 } = _ref5
          return (0, jsx_runtime.jsxs)(StyledCard, {
            disabled,
            children: [
              (0, jsx_runtime.jsx)('h2', { children: title }),
              (0, jsx_runtime.jsx)('p', { children: content }),
            ],
          })
        },
        Card_Card = Card
      Card.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card',
        props: {
          title: { required: !0, tsType: { name: 'string' }, description: '' },
          content: {
            required: !0,
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
      const Card_stories = {
          title: 'Components/Card',
          component: Card_Card,
          argTypes: {
            title: { control: 'text' },
            content: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Card_Card, { ...args }),
        Default = Template.bind({})
      Default.args = {
        title: 'Card Title',
        content: 'This is the card content.',
        disabled: !1,
      }
      const Disabled = Template.bind({})
      Disabled.args = {
        title: 'Card Title',
        content: 'This card is disabled.',
        disabled: !0,
      }
      const __namedExportsOrder = ['Default', 'Disabled']
      ;(Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Card {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Card {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        })
    },
  },
])
//# sourceMappingURL=components-Card-Card-stories.1bd400b0.iframe.bundle.js.map
