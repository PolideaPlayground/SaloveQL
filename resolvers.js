import moment from "moment";
import API from "./api";
import db from "./db.json"

function reservationFromAPI(reservation) {
    return Object.assign(reservation, {
        startDate: moment(reservation.start).toISOString(),
        endDate: moment(reservation.end).toISOString()
    })
}

export default {
  Query: {
    reservations: (root, args, context) => {
        return API.getReservations()
    },
    rooms: (root, args, context) => {
      return db.rooms
    },
  },
  Mutation: {
    reserveRoom: (root, args, context) => {
      return API.postReservation({
        roomId: args.roomId,
      })
    }
  },
  Reservation: {
    room: (root, args, context) => {
      return db.rooms.find(room => room.id === root.roomId)
    },
  }
};
