const typeDefs = `
type Reservation {
  id: Int!
  start: Float!
  end: Float!
  startDate: String!
  endDate: String!
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