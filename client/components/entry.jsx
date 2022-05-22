import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';
import './styles.css';


const Entry = ({prompt}) => {
  return(
    <div className='entry-block'>

      <div className='prompt-area'>
        <span className='def'> Prompt:  </span>
        <span className='explain'> {prompt ? prompt.p : null}</span>
      </div>

      <div className='Response-area'>
        <span className='def'>Response: </span>
        <span className='explain'>{prompt ? prompt.res : null}</span>
      </div>

    </div>
  )
};

export default Entry;