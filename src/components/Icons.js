import React from "react";
import { Twitter,Instagram,Github,Linkedin } from "react-bootstrap-icons";
export default function Icons(){
    return(
        <div className="icons">
            <div className="container">
                <button className="btn btn-light btn-sm"  ><Twitter width={18} height={18} /></button>
                <button className="btn btn-light btn-sm"><Linkedin width={18} height={18}/></button>
                <button className="btn btn-light btn-sm"><Instagram width={18} height={18}/></button>
                <button className="btn btn-light btn-sm "><Github width={18} height={18}/></button>
        
            </div>
        </div>
    )
}