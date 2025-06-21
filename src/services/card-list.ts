import { queryOptions } from '@tanstack/react-query'
import { faker } from '@faker-js/faker'
import card from '../assets/card.jpg?url'

const speedMap = {
  instant: 0,
  fast: 500,
  slow: 2000,
}

export const cardListOptions = ({
  speed = 'instant',
}: {
  speed?: keyof typeof speedMap
}) => {
  return queryOptions({
    queryKey: ['card-list'],
    queryFn: async () => {
      await new Promise((resolve) =>
        setTimeout(() => resolve({}), speedMap[speed]),
      )
      return {
        total: 3,
        hits: [
          createRandomCard('ef0b404f-c1cf-4741-988a-f975ada91689'),
          createRandomCard('d0e9d8a7-60e4-4b35-b902-6d3fea7e9f32'),
          createRandomCard('274787d0-f2bf-4f3a-a471-75d0ce5a6b24'),
        ],
      }
    },
  })
}

const createRandomCard = (id: string) => {
  return {
    id,
    title: faker.food.dish(),
    description: faker.food.description(),
    image: card,
  }
}
