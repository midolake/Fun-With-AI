import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';
import Entry from './entry.jsx';

const Response = () => {
  const { prompts } = useContext(Context);

  return (
    <div>
      <h2>Responses</h2>
      <div className='response-body'>
        {prompts.map(prompt => (
          <Entry prompt={prompt} key={prompt}/>
        ))}
      </div>

    </div>
  )
};

export default Response;

