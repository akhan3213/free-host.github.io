import React from 'react';
import { Feature } from '../../components';
import './features.css';

const FeaturesData=[
  {
    title:'improving and distrusts instantly',
    text:'from they fine john give of rich he.they are so age drw improving and removing quality ans disytrusts may instantly',
  },
  {
    title:'Become the tended active',
    text:'Considered sympathize ten uncommonly occassional assisstance sufficient not',
  },
  {
    title:'Message or arm nothing',
    text:'led ask possible mistress relation elegance eat likewise debating.By message or arm nothing amongst chiefly',
  },
  {
    title:'Really boy law county',
    text:'really boy she unable her county.Feet you off its like six.in built table rapid lush',
  },
]

const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">The Future is Now and You Just Need To Realize it.Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_features-container">
           {FeaturesData.map((item,index)=>(
            <Feature title={item.title} text={item.text} key={item.title + index}/>
           ))}
      </div>
    </div>
  )
}

export default Features
