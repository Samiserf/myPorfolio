import React, {useEffect} from 'react';
import './header.css'
import TextTransition, { presets } from "react-text-transition";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Header(props) {

  
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
    
    return (
      <div className="portada_sitio">
        <div className="text">
          <div>
            <h2>&#60;Hello World /&#62;</h2>
          </div>
            
          <h1>I'm&nbsp;
          <TextTransition
            text={ props.aboutMe[index % props.aboutMe.length] }
            springConfig={ presets.wobbly }
            inline={true}
            direction={"down"}
          />
          </h1>
        </div>

        
      </div> 
      
    );
  }
