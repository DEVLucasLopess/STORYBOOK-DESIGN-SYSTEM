import { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from '@mineirinho-ui/react';

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <p>testando o elemento box</p>
            </>
        ),
    },
} as Meta<BoxProps>

export const Primary: StoryObj = {}
