import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Text from './Text'
import { TextProps } from './Text.types'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta

const Template: StoryFn<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter text...',
  value: '',
  disabled: false,
  onChange: () => {},
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Disabled input',
  value: '',
  disabled: true,
  onChange: () => {},
}
