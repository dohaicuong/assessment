import { css, type Styles } from '../../../styled-system/css'

export type CardDescriptionProps = Omit<
  React.ComponentProps<'p'>,
  'className'
> & {
  css?: Styles
}

export const CardDescription: React.FC<CardDescriptionProps> = (props) => (
  <p
    {...props}
    className={css(
      {
        textStyle: 'md',
        fontWeight: 'normal',
        color: 'gray.500',
      },
      props.css,
    )}
  />
)
