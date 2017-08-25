export default {
    Query: {
      reservations: (root, args, context) => {
        return [
            {id: 1, start: 1503672351000, end : 1503678351000},
        ]
      }
    },
    Mutation: {
        reserveRoom: (root, args, context) => {
            return {id: 1, start: 1503672351000, end : 1503678351000}
        }
    },
  }
  