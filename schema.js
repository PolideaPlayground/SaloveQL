const typeDefs = `
type Reservation {
  roomId: Int!
  start: Float!
  end: Float!
  summary: String!
}

type Query {
  reservations: [Reservation]
}

type Mutation {
  reserveRoom (
    roomId: Int!
  ): Reservation
}
`

export default typeDefs