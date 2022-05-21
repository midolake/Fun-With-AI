import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';
import Form from './form.jsx';

const APP = () => {

  return(
    <div>
      <div className="title">
        <h1>Fun With AI</h1>
      </div>

      <div className="form-section">
        <Form />
      </div>

    </div>
  )
}

export default APP;