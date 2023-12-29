import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@mineirinho-ui/react';

export default {
    title: 'Button',
    component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj = {
    args: {
        children: 'Enviar',
    },
}

export const Secondary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: 'big',
    },
}