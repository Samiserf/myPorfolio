import './footer.css';
import React from 'react';

export default function Footer(props) {
  
    return (
        <React.Fragment>
            <div className="contact">
                <h3>Let´s do something great</h3>
                <span><a href={`mailto:${props.mail}`}>{props.mail}</a></span>
                <span><a href={`tel:${props.tel}`}>+054-{props.tel}</a></span>
            </div>
            <div className="social">
                <h3>I´M HERE!</h3>
                <ul>
                    {props.social.map( (social) => (
                        <li><a href={social.link} target="_blank">{social.red}</a></li>
                    ) )}
                </ul>
            </div>
        </React.Fragment>
    )

}