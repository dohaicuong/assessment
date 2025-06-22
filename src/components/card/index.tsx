import { css, type Styles } from '../../../styled-system/css'
import { CardContent } from './card-content'
import { CardActions } from './card-actions'
import { CardImage } from './card-image'
import { CardTitle } from './card-title'
import { CardDescription } from './card-description'

export type CardProps = Omit<React.ComponentProps<'div'>, 'className'> & {
  css?: Styles
  selected?: boolean
}

export const Card: React.FC<CardProps> & CardComponents = (props) => (
  <div
    className={css({
      minHeight: 320,
      width: 240,
      shadow: {
        base: 'xl',
        _hover: '2xl',
      },
      transition: 'box-shadow 0.3s ease-in-out',
    })}
  >
    <div
      {...props}
      data-selected={props.selected || undefined}
      className={css(
        {
          height: '100%',
          backgroundColor: 'gray.50',
          borderRadius: 'xl',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',

          shadow: {
            base: '0 0 0px 0px rgb(37 99 235 / 80%)',
            _selected: '0 0 1px 3px rgb(37 99 235 / 80%)',
          },
          transition: 'box-shadow 0.2s ease-in-out',
        },
        props.css,
      )}
    />
  </div>
)

type CardComponents = {
  Image: typeof CardImage
  Content: typeof CardContent
  Title: typeof CardTitle
  Description: typeof CardDescription
  Actions: typeof CardActions
}
Card.Image = CardImage
Card.Content = CardContent
Card.Title = CardTitle
Card.Description = CardDescription
Card.Actions = CardActions
