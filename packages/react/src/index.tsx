import { styled } from './styles'

export type ButtonProps = {
  size: 'small' | 'medium' | 'big'
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  height: '$10',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      madium: {
        fontSize: 16,
        padding: '$3 $6',
      },
      big: {
        fontSize: 20,
        padding: '$6 $12',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})
