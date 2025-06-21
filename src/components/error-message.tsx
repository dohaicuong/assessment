import { css } from '../../styled-system/css'
import { Button } from './button'

export const ErrorMessage = ({ onRetry }: { onRetry?: () => void }) => (
  <div
    className={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4',
    })}
  >
    <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
      {/* <TriangleAlert className={css({ color: 'red.800' })} /> */}
      <h4
        className={css({
          textStyle: 'xl',
          color: 'red.800',
          fontWeight: 'semibold',
        })}
      >
        Something went wrong!
      </h4>
    </div>
    {onRetry && <Button onClick={onRetry}>Please try again!</Button>}
  </div>
)
