import './tecnologias.css';
import React from 'react';
import { gsap } from "gsap/dist/gsap";
import Marquee from "react-fast-marquee";

export default function Tecnologias() {
    
  return (
    <section className="tecnologias_exponenciales">
        <h3>My knowledge</h3>
        <div className="linea_tecno"></div>
            <div className="contenedor_tecnologias">
                <div className="tecnologias">
                    <Marquee speed="200" gradient="false">
                        <p><span>PHP</span></p>
                        <p><span>MySQL</span></p>
                        <p><span>Javascript</span></p>
                        <p><span>ReactJS</span></p>
                        <p><span>HTML5</span></p>
                        <p><span>CSS3</span></p>
                        <p><span>SASS</span></p>
                        <p><span>NextJS</span></p>
                        <p><span>Wordpress</span></p>
                        <p><span>Drupal</span></p>
                        <p><span>jQuery</span></p>
                        <p><span>NodeJS</span></p>
                        <p><span>jQuery Mobile</span></p>
                        <p><span>React Native</span></p>
                        <p><span>Adobe Package</span></p>
                    </Marquee>
                    </div>
            </div>
        <div className="linea_tecno"></div>
    </section>
  );
}


