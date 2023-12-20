
import React, { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/contansts';


const ASlider = () => {
  useEffect(() => {
    axios.get(`${API_URL}/product`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <>
      <h1>slider</h1>
    </>
  );
};

export default ASlider;
