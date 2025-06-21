import { css, type Styles } from '../../styled-system/css'

export type SpinnerProps = Omit<React.ComponentProps<'span'>, 'className'> & {
  css?: Styles
  message?: React.ReactNode
}

export const Spinner: React.FC<SpinnerProps> = ({ message, ...props }) => (
  <div
    className={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6',
    })}
  >
    <span
      {...props}
      className={css(
        {
          width: 16,
          height: 16,
          borderWidth: 5,
          borderStyle: 'solid',
          borderColor: 'blue.500',
          borderBottomColor: 'transparent',
          borderRadius: 'full',
          display: 'inline-block',
          boxSizing: 'border-box',
          animationName: 'rotation',
          animationDuration: 'turtle',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        },
        props.css,
      )}
    />
    {message && (
      <span className={css({ textStyle: 'lg', color: 'gray.700' })}>
        {message}
      </span>
    )}
  </div>
)
