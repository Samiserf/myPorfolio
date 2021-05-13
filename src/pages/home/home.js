import Header from './../../components/header/header'
import Tecnologias from './../../components/tecnologias/tecnologias'
import WebDesign from './../../components/webDesign/webDesign'
import List from './../../components/list/list'
import Art from './../../components/art/art'
import Footer from './../../components/footer/footer'
import './home.css';


// IMAGES
import utopia from './../../images/Utopia.PNG'
import cuatroPatas from './../../images/4patas.PNG'
import countries from './../../images/countries.PNG'
import ecommerce from './../../images/filettoLucio_ecommerce.gif'

import React, {useEffect} from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import $ from "jquery";

export default function Home() {

  const social= [
    
    {
      link:"https://www.linkedin.com/in/lucio-filetto-a8165b174/",
      red:"Linkedin"
    },
    {
       link:"https://github.com/Samiserf",
       red:"Github"
    }] 


  const art = [
      {
        image: utopia,
        title: "Utopia",
        descrip: "Sitio realizado en Javascript post migrado a NextJS.",
        href: "https://utopia.fundacionbyb.org/"
      },
      {
        image: cuatroPatas,
        title: "Lettos",
        descript: "Realizado en PHP y MySQL, 4Patas es un proyecto educativo",
        href: "https://github.com/Samiserf/4patas"
      },
      {
        image: countries,
        title: "Countries web",
        descript: "Pagina web para validar mi conocimiento sobre API REST. | Web Page for valid my kwnow about API REST",
        href: "https://countries-rest.vercel.app/"
      },
      {
        image: ecommerce,
        title: "Ecommerce",
        descript: "Sitio realizado con React, Javascript, integracion a API MELI, uso de Firebase Google, uso de context, states, Hooks.",
        href: "https://github.com/Samiserf/CoderHouse"
      }
  ];


  const proyects = [
      {
        image: utopia,
        proyectName: "FYLO WEB"
      },
      {
        image: cuatroPatas,
        proyectName: "LETTOS"
      },
      {
        image:countries,
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
        title: "Countries",
        description: "Realizo en React, JavaScript integracion con API."
      },
      {
        title: "Ecommerce",
        description: "Sitio realizado con React, Javascript, integracion a API MELI, uso de Firebase Google, uso de context, states, Hooks."
      },
      {
        title: "ChekIns",
        description: "Sitio realizado en Android Studio con Kotlin."
      }
  ];

  const works = [
    {
      title: "Cordial",
      description: "- Lider desarrollo RPA, desarrollo de procesos evolutivos, armado de scripts, integracion con APIS, integracion de interfaces, relevamiento, implementacion, soporte."
    },
    {
      title: "PENT",
      description: "Teamwork in development and maintenance of different sites. Work with ReactJS, NextJS, jQuery, PHP, Drupal, SASS, AWS."
    }
];

  const aboutMe = [
    "Lucio",
    "Developer RPA",
    "Developer Full Stack"
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

      {/* <div className="carrousel_experiencia">
        <WebDesign introTitle="STAY PRODUCTIVE" introDescrip={`Creo que una de las mejores formas de aprender es haciendo. \\n Por eso, en mis tiempos libres, me gusta diseñar apps.`}
                   proyects={proyects}/>
      </div> */}

      <div className="bloque_recursos">
        <div className="title"><h2><sup>02</sup> Webs</h2></div>
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
          <Footer mail="filettolucio@gmail.com" social={social} tel="1138165004"/>
        </div>
        <div className="endFooter">
          <h4> Lucio Filetto - All rights reserved - 2021</h4>
        </div>
      </section>
    </div>
  )
}


