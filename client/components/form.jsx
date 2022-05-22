import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';
import './styles.css';


const Form = () => {

  const { handleEnter } = useContext(Context);

  return(
    <div>
      <h4>Enter prompt</h4>
      <form onSubmit={(event) => handleEnter(event)}>
        <div className="enter">
          <textarea rows="10" cols="40"></textarea>
        </div>
        <div className="button-section">
          <button className="button-5" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form;