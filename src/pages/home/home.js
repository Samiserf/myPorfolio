import Header from './../../components/header/header'
import Tecnologias from './../../components/tecnologias/tecnologias'
import WebDesign from './../../components/webDesign/webDesign'
import List from './../../components/list/list'
import Art from './../../components/art/art'
import Footer from './../../components/footer/footer'
import './home.css';


// IMAGES
import design1 from './../../images/lambo.jpg'
import design2 from './../../images/missFortune.jpg'
import design3 from './../../images/solsito.jpg'

import React, {useEffect} from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import $ from "jquery";

export default function Home() {

  const social= [
    
    {
      link:"www.linkedin.com",
      red:"Linkedin"
    },
    {
       link:"www.github.com",
       red:"Github"
    },
    {
      link:"www.behance.com",
      red:"Behance"
    }] 


  const art = [
      {
        image: design1,
        title: "MODEL 3D",
        descrip: "Harry Potter.",
        href: "https://editorial.unipe.edu.ar/colecciones/herramientas/dise%C3%B1o-e-impresi%C3%B3n-de-objetos-3d-una-gu%C3%ADa-de-apoyo-a-escuelas-detail"
      },
      {
        image: design2,
        title: "CHARACTER ANIMATION",
        descript: "Groot",
        href: "https://editorial.unipe.edu.ar/colecciones/herramientas/dise%C3%B1o-e-impresi%C3%B3n-de-objetos-3d-una-gu%C3%ADa-de-apoyo-a-escuelas-detail"
      },
      {
        image: design3,
        title: "MODAL 3D",
        descript: "Material.",
        href: "https://editorial.unipe.edu.ar/colecciones/herramientas/dise%C3%B1o-e-impresi%C3%B3n-de-objetos-3d-una-gu%C3%ADa-de-apoyo-a-escuelas-detail"
      },
      {
        image: design1,
        title: "FYLO WEB",
        descript: "Material2.",
        href: "https://editorial.unipe.edu.ar/colecciones/herramientas/dise%C3%B1o-e-impresi%C3%B3n-de-objetos-3d-una-gu%C3%ADa-de-apoyo-a-escuelas-detail"
      },
      {
        image: design2,
        title: "FYLO WEB",
        descript: "elaborado.",
        href: "https://editorial.unipe.edu.ar/colecciones/herramientas/dise%C3%B1o-e-impresi%C3%B3n-de-objetos-3d-una-gu%C3%ADa-de-apoyo-a-escuelas-detail"
      },
      {
        image: design3,
        title: "FYLO WEB",
        descript: "UNIPE.",
        href: "https://editorial.unipe.edu.ar/colecciones/herramientas/dise%C3%B1o-e-impresi%C3%B3n-de-objetos-3d-una-gu%C3%ADa-de-apoyo-a-escuelas-detail"
      },
  ];


  const proyects = [
      {
        image: design1,
        proyectName: "FYLO WEB"
      },
      {
        image: design2,
        proyectName: "LETTOS"
      },
      {
        image:design3,
        proyectName: "4 Patas"
      }
  ];

  const webs = [
      {
        title: "utopia",
        description: "Sitio realizado en Javascript post migrado a NextJS."
      },
      {
        title: "4patas",
        description: "Realizado en PHP y MySQL, 4Patas es un proyecto educativo"
      },
      {
        title: "lettos",
        description: "krkkrt."
      },
      {
        title: "maps",
        description: "Sitio redkgdhtJS."
      },
      {
        title: "lancefleet",
        description: "Sitio realikykrado a NextJS."
      }
  ];

  const works = [
    {
      title: "WUNDERMAN",
      description: "- sites development // Visual Studio .NET. banners design and animation, GSAP, Adobe Animate. email development, HTML5, CSS3, Studio, testing emails // Litmus - EOA, video editing // AE"
    },
    {
      title: "PENT",
      description: "Teamwork in development and maintenance of different sites. Work with ReactJS, NextJS, jQuery, PHP, Drupal, SASS, AWS."
    },
    {
      title: "GLAMIT",
      description: "- Armado de reportes de performance de los equipos de desarrollo backend y frontend (individual y grupal). Armado de reportes acerca del progreso y evolución del los sprints / roadmaps de desarrollo. - seguimiento de las planificaciones de los distintos equipos. Colaboración en la comunicación de nuevos desarrollos hacia las distintas áreas internas y hacia el cliente.."
    }
];

  const aboutMe = [
    "Marco",
    "Multimedia designer",
    "Full Stack",
    "Web designer"
  ];

  useEffect(() => {
    
    if(typeof window !== 'undefined') {
      var checkedheight=0;
      var totalheight=$("#home").height();
      import("locomotive-scroll/dist/locomotive-scroll").then(locomotiveModule => {
      const locoScroll = new locomotiveModule.default({
        el: document.querySelector("#home"),
        smooth: true,
        //multiplier: velocidad
        multiplier: 0.5,
        // This defines the "smoothness" intensity
        lerp: .1
      })
      var checkheight = function(){
          if(totalheight != $("#home").height())
          {
              totalheight=$("#home").height();
              locoScroll.update();
          }
      }
      setTimeout(checkheight(),1000);
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);
      locoScroll.on("scroll", checkheight);
      })
    }
  });
  
  return (
    <div id="home">
      <Header aboutMe={aboutMe} />

      <section className="container_list">
        <h2><sup>01</sup> Web development</h2>
        <List inverted={false} webs={webs}/>
      </section>

      <Tecnologias />

      <div className="carrousel_experiencia">
        <WebDesign introTitle="STAY PRODUCTIVE" introDescrip={`Creo que una de las mejores formas de aprender es haciendo. \\n Por eso, en mis tiempos libres, me gusta diseñar apps.`}
                   proyects={proyects}/>
      </div>

      <div className="bloque_recursos">
        <div className="title"><h2><sup>02</sup> Art</h2></div>
          <div className="contenedor_recursos">
              <Art art={art}
              />
          </div>
      </div>

      <section className="container_list">
        <h2><sup>03</sup> Work</h2>
        <List inverted={true} webs={works}/>
      </section>

      <section className="footerContainer">
        <div className="title">
          <h2><sup>04</sup> Contact</h2>
        </div>
        <div className="footer">
          <Footer mail="marcoarielf96@gmail.com" social={social} tel="1136764398"/>
        </div>
        <div className="endFooter">
          <h4> Marco Filetto - All rights reserved - 2021</h4>
        </div>
      </section>
    </div>
  )
}


