import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'
import hero from '../assets/hero.jpg?url'
import { Button } from '../components/button'
import { useSuspenseQuery } from '@tanstack/react-query'
import { cardListOptions } from '../services/card-list'
import { Suspense } from 'react'
import { Card } from '../components/card'
import { Spinner } from '../components/spinner'
import { ErrorMessage } from '../components/error-message'
import { z } from 'zod/v4'
import { PageHero } from '../components/page-hero'

export const Route = createFileRoute('/assessment')({
  component: Index,
  validateSearch: z.object({
    selectedCard: z.string().optional(),
  }),
})

function Index() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '12',
        marginBottom: '12',
      })}
    >
      <PageHero
        background={`url("${hero}")`}
        title="Welcome to G Automotive"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
        lectus sed elit varius, vel pretium sem mollis. Etiam a diam et turpis
        porta euismod. Nunc mattis pulvinar urna ac venenatis. Morbi vel velit
        vel velit blandit vestibulum ac in sapien. Etiam mauris ipsum, lobortis
        ut tempus a, aliquam at ligula."
        actions={<Button type="button">Contact Us</Button>}
      />

      <Suspense
        fallback={
          <div className={css({ display: 'flex', justifyContent: 'center' })}>
            <Spinner message="Cards are being loaded..." />
          </div>
        }
      >
        <CardList />
      </Suspense>
    </div>
  )
}

const CardList = () => {
  const { selectedCard } = Route.useSearch()
  const navigate = Route.useNavigate()

  const { data, error, refetch } = useSuspenseQuery(
    cardListOptions({ speed: 'instant' }),
  )

  if (error) return <ErrorMessage onRetry={refetch} />

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <div
        className={css({
          maxWidth: {
            base: 320,
            md: 560,
            lg: 840,
          },
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
          gap: '12',
          flexWrap: 'wrap',
        })}
      >
        {data.hits.map((card) => (
          <Card key={card.id} selected={selectedCard === card.id}>
            <Card.Image src={card.image} alt={card.description} />
            <Card.Content>
              <Card.Title>{card.title}</Card.Title>
              <Card.Description>{card.description}</Card.Description>
            </Card.Content>
            <Card.Actions>
              <Button
                onClick={() => {
                  navigate({
                    to: '/assessment',
                    search: { selectedCard: card.id },
                  })
                }}
              >
                Select
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </div>
    </div>
  )
}
