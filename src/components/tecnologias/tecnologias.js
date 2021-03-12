import './tecnologias.css';
import React from 'react';
import { gsap } from "gsap/dist/gsap";
import $ from "jquery";

export default function Tecnologias() {
    
        gsap.to('.tecnologias_exponenciales', {
            duration:3,
            ease: "none",
            y: 0,
            stagger: 1,
            scrollTrigger:{
                //scroller: ".containerScroll",
                trigger: '.tecnologias_exponenciales',
                start: 'top bottom',
                end: 'center top',
                // markers:true,     
                scrub: 1,
                toggleActions: 'restart pause reverse reset'
            }
        })
        
        gsap.to('.tecnologias_exponenciales', {
            duration:3,
            ease: "none",
            stagger: 1,
            opacity: 1,
            scrollTrigger:{
                //scroller: ".containerScroll",
                trigger: '.tecnologias_exponenciales',
                start: 'top bottom',
                end: 'center 80%',
                // markers:true,     
                scrub: 1,
                toggleActions: 'restart pause reverse reset'
            }
        })
        
        $('.tecnologias').clone().appendTo(".contenedor_tecnologias");

        gsap.to('.contenedor_tecnologias',{
            x:0-$('.tecnologias').width()+600,
            duration:200,
            repeat:-1,
            ease:'linear'}
        );
    
    
  return (
    <section className="tecnologias_exponenciales">
        <h3>Tecnologías adquiridas</h3>
        <div className="linea_tecno"></div>
            <div className="contenedor_tecnologias">
                <div className="tecnologias">
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
                    </div>
            </div>
        <div className="linea_tecno"></div>
        <div className="descripcion_tec_ex">
            <p>Las tecnologías exponenciales son aquellas que siguen un patrón<br /> de crecimiento acelerado o exponencial; esto significa que, en poco<br /> tiempo, su precio y complejidad se reducen de forma relevante,<br /> mientras que su capacidad y el número de aplicaciones que las<br /> aprovechan aumenta de forma vertiginosa.</p>
        </div>
    </section>
  );
}


