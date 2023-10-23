import './style.css'
import { setupCounter } from './counter.js'
import axios from 'axios'

const getUsers = () => {
  axios.get('')
  .then(response => {
   const users = response.data.data;
   console.log(`GET users`, users);
 })
  .catch(error => console.error(error));
 };
 getUsers();

setupCounter(document.querySelector('#counter'))
