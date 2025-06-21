import { css, type Styles } from '../../styled-system/css'

export type ButtonProps = Omit<React.ComponentProps<'button'>, 'className'> & {
  css?: Styles
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={css(
        {
          cursor: {
            base: 'pointer',
            _disabled: 'not-allowed',
          },

          backgroundColor: {
            base: 'blue.600',
            _hover: 'blue.800',
            _active: 'blue.900',
            _disabled: 'gray.700!',
          },
          paddingX: '12',
          paddingY: '4',
          borderRadius: 'lg',

          fontSize: '16',
          fontWeight: 'semibold',
          color: {
            base: 'gray.100',
            _disabled: 'gray.400',
          },
        },
        props.css,
      )}
    />
  )
}
