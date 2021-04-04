import './webDesign.css';
import React from 'react';
import Draggable from 'react-draggable'; 

export default function WebDesign(props) {
    
  return (
    <Draggable axis="x">
            <div className="rail_contenido">
                <div className="contenido">
                    <div className="introDesign">
                            <h1>{props.introTitle}</h1>
                            <span>{props.introDescrip}</span>
                    </div>
                    
                    {props.proyects.map( (proyect,  index) => (
                        <div className="proyect">
                            <img src={proyect.image} />
                            <h2>{proyect.proyectName}&nbsp;<sup>0{index+1}.</sup></h2>
                        </div>
                    ))}
                </div>
            </div>
        </Draggable>
  );
}


