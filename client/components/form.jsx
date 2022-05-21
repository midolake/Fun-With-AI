import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';

const Form = () => {
  return(
    <div>
      <p>Enter prompt</p>
      <div className="enter">
        <textarea rows="10" cols="40"></textarea>
      </div>
      <div className="button-section">
        <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default Form;