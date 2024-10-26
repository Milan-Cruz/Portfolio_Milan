import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import HeroImage from './HeroImage'
import { HeroImageProps } from './HeroImage.types'

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    bgImage: { control: 'text' },
    children: { control: 'text' },
    disabled: { control: 'boolean' }, // Add control for disabled
  },
} as Meta

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />

export const Default = Template.bind({})
Default.args = {
  bgImage: 'https://via.placeholder.com/1200x400',
  children: 'Hero Content',
  disabled: false, // Default is not disabled
}

export const Disabled = Template.bind({})
Disabled.args = {
  bgImage: 'https://via.placeholder.com/1200x400',
  children: 'Hero Content (Disabled)',
  disabled: true, // Disabled state
}
