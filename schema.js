const typeDefs = `
type Reservation {
  id: Int!
  start: Float!
  end: Float!
}

type Query {
  reservations: [Reservation]
}

type Mutation {
  reserveRoom (
    id: Int!
    start: Float!
    end: Float!
  ): Reservation
}
`

export default typeDefs