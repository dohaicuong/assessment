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
    {...props}
    data-selected={props.selected || undefined}
    className={css(
      {
        minHeight: 320,
        width: 240,
        backgroundColor: 'gray.50',
        borderRadius: 'xl',
        shadow: 'xl',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        _selected: {
          borderWidth: 3,
          borderColor: 'blue.500',
        },
      },
      props.css,
    )}
  />
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
