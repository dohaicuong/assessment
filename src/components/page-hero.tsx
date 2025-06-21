import { css } from '../../styled-system/css'

export type PageHeroProps = {
  background: string
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
}

export const PageHero: React.FC<PageHeroProps> = ({
  background,
  title,
  description,
  actions,
}) => {
  return (
    <div
      style={{
        '--hero-image': background,
      }}
      className={css({
        width: '100%',
        minHeight: 500,
        paddingX: '48',
        paddingY: '32',

        backgroundImage: 'var(--hero-image)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundSize: 'cover',

        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.45)',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <div
        className={css({
          maxWidth: {
            base: 240,
            md: 360,
            lg: 720,
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8',
        })}
      >
        <h1
          className={css({
            textAlign: 'center',
            textStyle: '5xl',
            fontWeight: 'semibold',
            color: 'gray.100',
          })}
        >
          {title}
        </h1>
        {description && (
          <p
            className={css({
              textStyle: 'lg',
              fontWeight: 'medium',
              color: 'gray.100',
              textAlign: 'center',
            })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
            lectus sed elit varius, vel pretium sem mollis. Etiam a diam et
            turpis porta euismod. Nunc mattis pulvinar urna ac venenatis. Morbi
            vel velit vel velit blandit vestibulum ac in sapien. Etiam mauris
            ipsum, lobortis ut tempus a, aliquam at ligula.
          </p>
        )}

        {actions}
      </div>
    </div>
  )
}
