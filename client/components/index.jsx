import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';
import Form from './form.jsx';
import Response from './response.jsx';

const APP = () => {
  const [prompts, setPrompt] = useState([{p:'hello', res:'whats up'}, {p:'today', res:'happy'}]);
  //const [responses, setResponse] = useState([]);

  const handleEnter = (event) => {
    event.preventDefault();
    console.log('event:', event.target[0].value);
  };

  return(
    <div>
      <div className="title">
        <h1>Fun With AI</h1>
      </div>

      <div className="form-section">
        <Context.Provider value={{ handleEnter }}>
          <Form />
        </Context.Provider>
      </div>

      <div className="response-section">
        <Context.Provider value={{ prompts }}>
          <Response />
        </Context.Provider>
      </div>

    </div>
  )
}

export default APP;