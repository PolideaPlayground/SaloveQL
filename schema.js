const typeDefs = `
type Reservation {
  roomId: Int!
  start: Float!
  end: Float!
  startDate: String!
  endDate: String!
  summary: String!
}

type Query {
  reservations: [Reservation]
}

type Mutation {
  reserveRoom (
    roomId: Int!
    start: Float!
    end: Float!
  ): Reservation
}
`

export default typeDefs