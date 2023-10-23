import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';
import axios from 'axios';
document.querySelector('#app').innerHTML = `
  
`;
const getUsers = () => {
  axios
    .get('https://usman-fake-api.herokuapp.com/api/recipes')
    .then(response => {
      
      
      
      catImageElement.src = response.data[0].url;
      
      catImageElement.alt = 'Cat Image';
    })
    .catch(error => {
      console.error(error);
    });
};
getUsers();
setupCounter(document.querySelector('#counter')
