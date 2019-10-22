//* Imports
import React from 'react';
import Fetch from 'unfetch';

// Pick random number
const randomInt = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; };
  
export default class Background extends React.Component {
  async getAndSetBackground() {    
    try { // First we try and get an image from the API...
      let data = await Fetch('https://api.muetab.xyz/getImage?category=Outdoors');
      data = await data.json(); 

      document.getElementById('root').style.backgroundImage = `url(${data.file})`;
      document.getElementById('photographer').innerText = `Photo by ${data.photographer}`;
      document.getElementById('location').innerText = `${data.location}`;   
    } catch (e) { // ..and if that fails we load one locally
      document.getElementById('backgroundCredits').style.display = 'none';
      document.getElementById('photographer').innerText = 'Photo from Pexels';
      document.getElementById('root').style.backgroundImage = `url(../offline-images/${randomInt(1, 25)}.jpeg)`;
    }
  }

  componentDidMount() {
    this.getAndSetBackground();
  }

  render() {
    return null; // React gets annoyed if I don't put anything here or use "return;"
  }
}