import { css, type Styles } from '../../../styled-system/css'

export type CardImageProps = Omit<React.ComponentProps<'img'>, 'className'> & {
  css?: Styles
}

export const CardImage: React.FC<CardImageProps> = (props) => (
  <img
    {...props}
    alt={props.alt}
    className={css({ width: '100%', borderTopRadius: 'xl' }, props.css)}
  />
)
