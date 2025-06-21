import { css, type Styles } from '../../../styled-system/css'

export type CardActionsProps = Omit<
  React.ComponentProps<'div'>,
  'className'
> & {
  css?: Styles
}

export const CardActions: React.FC<CardActionsProps> = (props) => (
  <div
    {...props}
    className={css(
      {
        padding: '6',
        display: 'flex',
        flexDirection: 'column',
        gap: '8',
      },
      props.css,
    )}
  />
)
