import Header from './../../components/header/header'
import Tecnologias from './../../components/tecnologias/tecnologias'
//import tecExponenciales from '../../components/tecExponenciales/index'

// const tecExponencialesWithNoSSR = dynamic(
//   () => import('../../components/tecExponenciales/index'),
//   { ssr: false }
// )

//import Footer from '../../components/footer/footer'
//import Header from '../../components/headerHome'
//import styles from '../../styles/Home.module.scss'

import React, {useEffect} from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import $ from "jquery";

export default function Home() {

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
      <Header />
      <Tecnologias />
    </div>
  )
}


