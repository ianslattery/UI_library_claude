import type { Meta, StoryObj } from '@storybook/angular-vite';
import { fn } from 'storybook/test';

import { PrimaryButton } from './primary-button';

const meta: Meta<PrimaryButton> = {
  title: 'Components/Primary Button',
  component: PrimaryButton,
  tags: ['autodocs'],
  args: {
    label: 'Button',
    type: 'button',
    icon: 'none',
    disabled: false,
  },
  argTypes: {
    icon: {
      control: 'inline-radio',
      options: ['none', 'leading', 'trailing'],
    },
    type: {
      control: 'inline-radio',
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj<PrimaryButton>;

export const TextOnly: Story = {};

export const LeadingIcon: Story = {
  args: { icon: 'leading', label: 'Button' },
};

export const TrailingIcon: Story = {
  args: { icon: 'trailing', label: 'Button' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledLeadingIcon: Story = {
  args: { disabled: true, icon: 'leading', label: 'Button' },
};

export const DisabledTrailingIcon: Story = {
  args: { disabled: true, icon: 'trailing', label: 'Button' },
};
