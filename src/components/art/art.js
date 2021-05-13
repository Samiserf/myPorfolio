import './art.css';
import React from 'react';

export default function Art(props) {
  
  return (
    <React.Fragment>
        {props.art.map( (art) => (
          <a href={`${art.href}`} target="_blank">
            <div className="recurso">
                <img src={art.image} />
                <div className="overImage">
                  <h5>{art.title}</h5>
                  <p>{art.descript}</p>
                </div>
                
            </div>
          </a>
        ) )}
    </React.Fragment>
  );
}