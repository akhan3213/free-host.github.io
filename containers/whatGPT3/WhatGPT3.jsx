import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3_whatgpt3-features">
        <Feature title="What is GPT-3" text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text" />
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3_whatgpt3-container">
        <Feature title="Chatbots" text="we so opinion friends me message me whole heartly welcome the feature"/>
        <Feature title="Knowledge" text="At jointure the leadur ship must be knowledgeable o know hoe to do the best version"/>
        <Feature title="Education" text="education must be firstprioity only educated people must have access so that uneducated cannot misysed it" />
      </div>
    </div>
  )
}

export default WhatGPT3
