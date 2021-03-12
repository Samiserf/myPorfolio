import React, {useEffect} from 'react';
import './header.css'
import $ from "jquery";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    
    // useEffect(() => {
    //     var tl = new TimelineMax({repeat:-1});
        
    //     $(".anim_typewriter").each(function(index, element){
    //         console.log(element);
    //         console.log(tl);
    //         tl.to(element, 1, {opacity:1})
    //         .to(element, 1, {opacity:0}, "+=1.2")
    //     })
    // }, [])
    
    return (
      <div className="portada_sitio">
        <div className="text">
            <h2>&#60;Hello World &#62;</h2>
            <h1>I'm&nbsp;</h1>
            <h1 className="anim_typewriter">Marco</h1>
            <h1 className="anim_typewriter">Web designer</h1>
            <h1 className="anim_typewriter">Web developer</h1>
            <h1 className="anim_typewriter">3D Artist</h1>
            <h1 className="anim_typewriter">Newbie</h1>
        </div>

        
      </div> 
      
    );
  }
