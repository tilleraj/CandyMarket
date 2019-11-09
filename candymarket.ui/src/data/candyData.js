import axios from 'axios';

const baseUrl = 'https://localhost:44337';

const getCandy = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/candy`).then((result) => {
    console.log(result.data);
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getCandy
}