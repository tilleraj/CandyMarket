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

const postCandy = newCandy => axios.post(`${baseUrl}/candy`, newCandy);
const deleteCandy = candyToDelete => axios.delete(`${baseUrl}/candy/${candyToDelete.id}/eat`,candyToDelete);

export default {
  getCandy,
  postCandy,
  deleteCandy
}