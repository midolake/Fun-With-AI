import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';

const Entry = () => {
  return(
    <div>
      <div className='prompt-area'>
        <span>Prompt: </span>
      </div>

      <div className='Response-area'>
        <span>Response: </span>
      </div>

    </div>
  )
};

export default Entry;