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
        ).catch(e => [reservationFromAPI({
            "id" : 1,
            "start" : 1503672351000,
            "end" : 1503678351000
        })]
    )
    }
  },
  Mutation: {
    reserveRoom: (root, args, context) => {
      return API.postReservation({
        id: args.id,
        start: args.start,
        end: args.end
      }).then(reservationFromAPI);
    }
  }
};
