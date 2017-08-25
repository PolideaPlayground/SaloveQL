import axios from 'axios'

const BASE_URL = 'https://3f37e101.ngrok.io'

export default {
    getReservations() {
        return axios.get(`${BASE_URL}/rooms/reservations`)
            .then(response => {
                console.log(response)
                return response
            })
    },
    postReservation(reservation) {
        return axios.post(`${BASE_URL}/rooms/reservations`, reservation)
            .then(response => {
                // console.log(response)
                return response
            })
            .then(response => reservation)
    }
}
