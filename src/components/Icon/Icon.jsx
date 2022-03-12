import React from "react";
import "./icon.css";
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"
import mail from "../../assets/mail.png"
import github from "../../assets/github.png"

export const Icon = ()=>{

    return(
        <div className="iconStyle">
            <div className="icon"><a><img src={twitter}/></a></div>
            <div className="icon"><a><img src={linkedin}/></a></div>
            <div className="icon"><a><img src={mail}/></a></div>
            <div className="icon"><a><img src={github}/></a></div>
        </div>
    )
}