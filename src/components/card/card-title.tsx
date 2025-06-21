import { css, type Styles } from '../../../styled-system/css'

export type CardTitleProps = Omit<React.ComponentProps<'h3'>, 'className'> & {
  css?: Styles
}

export const CardTitle: React.FC<CardTitleProps> = (props) => (
  <h3
    {...props}
    className={css(
      {
        textStyle: 'xl',
        fontWeight: 'semibold',
        color: 'gray.800',
      },
      props.css,
    )}
  />
)
