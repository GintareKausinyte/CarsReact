import axios from 'axios'

export default {

fetchCars(){
    return axios.get('https://backend.daviva.lt/API/InformacijaTestui')
}

}