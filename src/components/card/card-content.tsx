import { css, type Styles } from '../../../styled-system/css'

export type CardContentProps = Omit<
  React.ComponentProps<'div'>,
  'className'
> & {
  css?: Styles
}

export const CardContent: React.FC<CardContentProps> = (props) => (
  <div
    {...props}
    className={css(
      {
        height: '100%',
        padding: '6',
        display: 'flex',
        flexDirection: 'column',
        gap: '6',
      },
      props.css,
    )}
  />
)
