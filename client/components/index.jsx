import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../context/context.js';
import Form from './form.jsx';
import Response from './response.jsx';
const { Configuration, OpenAIApi } = require("openai");

const APP = () => {
  const [prompts, setPrompt] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("item");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  //example: {p:'hello', res:'whats up'}, {p:'today', res:'happy'}

  // setItem() Method
  useEffect(() => {
    window.localStorage.setItem('item', JSON.stringify(prompts));
  }, [prompts]);

  //getItem() Method
  useEffect(() => {
    //const prompts = JSON.parse(window.localStorage.getItem('item'));
    // if (prompts) {
    //   setPrompt(prompts);
    // }
    setPrompt(JSON.parse(window.localStorage.getItem('item')));
  }, []);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const handleEnter = async (event) => {
    event.preventDefault();
    let question = event.target[0].value;
    //console.log('event:', event.target[0].value);
    const response = await openai.createCompletion("text-curie-001", {
      prompt: question,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    //let pack = {p: question, res: response.data.choices[0].text};
    //console.log('pack: ',pack);
    let newArray = Array.from(prompts).slice();
    newArray.push({p: question, res: response.data.choices[0].text});

    setPrompt(newArray);
    //console.log('this is the response:', question, response.data.choices[0].text);
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