import axios from "axios";

const instance = axios.create({
  baseURL: "https://ghibliapi.herokuapp.com/films"
})

export default instance;