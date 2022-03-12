import React from "react";
import "./menu.css"

export const Menu = ()=>{

    return (
        <div className="menuStyle">
            <div className="menuitem"><a href="#">About us</a></div>
            <div className="menuitem"><a href="#">Services</a></div>
            <div className="menuitem"><a href="#">Projects</a></div>
            <div className="menuitem"><a href="#">Solutions</a></div>
            <div className="menuitem"><a href="#">Blogs</a></div>
        </div>
    )
}