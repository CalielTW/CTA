import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://dealerproxapi.com/api/v1';
} else {
  baseURL = 'http://localhost:5000/api/v1';
  //baseURL = 'https://dealerproxapi.com/api/v1';

}

export default axios.create({
  baseURL: baseURL
});