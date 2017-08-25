import moment from "moment";
import API from "./api";

function reservationFromAPI(reservation) {
    return Object.assign(reservation, {
        startDate: moment(reservation.start).toISOString(),
        endDate: moment(reservation.end).toISOString()
    })
}

export default {
  Query: {
    reservations: (root, args, context) => {
        return API.getReservations().then(reservations => 
            reservations.map(reservationFromAPI)
        )
    }
  },
  Mutation: {
    reserveRoom: (root, args, context) => {
      return API.postReservation({
        roomId: args.roomId,
        start: args.start,
        end: args.end
      }).then(reservationFromAPI);
    }
  }
};
