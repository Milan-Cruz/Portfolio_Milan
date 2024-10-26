import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Card from './Card'
import { CardProps } from './Card.types'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    disabled: { control: 'boolean' }, // Add control for disabled
  },
} as Meta

const Template: StoryFn<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Card Title',
  content: 'This is the card content.',
  disabled: false, // Default is not disabled
}

export const Disabled = Template.bind({})
Disabled.args = {
  title: 'Card Title',
  content: 'This card is disabled.',
  disabled: true, // Disabled state
}
