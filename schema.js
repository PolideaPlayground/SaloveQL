const typeDefs = `
type Reservation {
  room: Room!
  start: Float!
  end: Float!
  summary: String!
}

type Room {
  id: ID!
  size: RoomSize!
  name: String!
  color: String
}

enum RoomSize {
  small
  medium
  large
}

type Query {
  reservations: [Reservation]
  rooms: [Room]
}

type Mutation {
  reserveRoom (
    roomId: Int!
  ): Reservation
}
`

export default typeDefs