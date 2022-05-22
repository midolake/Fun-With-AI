import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';
import './styles.css';


const Entry = ({prompt}) => {
  return(
    <div className='entry-block'>

      <div className='prompt-area'>
        <div className='def'> Prompt: </div>
        <div className='explain'> {prompt ? prompt.p : null}</div>
      </div>

      <div className='Response-area'>
        <div className='def'>Response: </div>
        <div className='explain'>{prompt ? prompt.res : null}</div>
      </div>

    </div>
  )
};

export default Entry;