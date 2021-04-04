import './list.css';
import React from 'react';
import {useState} from 'react';
    
export default function List(props) {

  const [title,setTitle] = useState(props.webs[0].title);
  const [description,setDescription] = useState(props.webs[0].description);

  return (
    <section className={`list ${props.inverted ? "inverted" : ""}`}>
        <div className="left_side">
            <h2>{title} <sup></sup></h2>
            <p>{description}</p>
        </div>
        <div className="right_side">
            <ul>
                {props.webs.map((web, key) => 
                  <li onMouseEnter={() => setTitle(web.title)} >
                    <a href="#" onMouseEnter={() => setDescription(web.description)}>{web.title}&nbsp;<sub>0{key+1}.</sub></a>
                  </li>
                )};
                
            </ul>
        </div>
    </section>
  );
}


