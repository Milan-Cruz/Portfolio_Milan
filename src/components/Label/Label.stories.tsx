import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },  // Add control for disabled state
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
  disabled: false,  // Default is not disabled
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Label Text (Disabled)',
  disabled: true,  // Disabled state
};
