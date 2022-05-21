import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';

const Entry = ({prompt}) => {
  return(
    <div>
      <div className='prompt-area'>
        <span>Prompt: {prompt.p}</span>
      </div>

      <div className='Response-area'>
        <span>Response: {prompt.res}</span>
      </div>

    </div>
  )
};

export default Entry;