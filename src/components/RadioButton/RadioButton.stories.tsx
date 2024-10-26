import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import RadioButton from './RadioButton'
import { RadioButtonProps } from './RadioButton.types'

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }, // Add control for disabled state
  },
} as Meta

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Option 1',
  value: 'option1',
  checked: false,
  disabled: false, // Default is not disabled
  onChange: () => {},
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Option 1 (Disabled)',
  value: 'option1',
  checked: false,
  disabled: true, // Disabled state
  onChange: () => {},
}
