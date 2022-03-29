import React from "react";
import { EnvelopeFill,Linkedin } from "react-bootstrap-icons";
export default function Buttons(){
    return(
        <div className="Buttons--contact">

        <button className="btn--email" ><EnvelopeFill /> Email</button>
        <button className="btn--linkedin" ><Linkedin /> Linkedin</button>
        
        </div>
    )
}