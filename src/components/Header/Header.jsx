import React from "react";
import "./header.css";
import { LogoIcon } from "../LogoIcon/LogoIcon";
import { Menu } from "../MenuItems/Menu";
import { Icon } from "../Icon/Icon";

export const Header = ()=>{
    return (
        <div className="header">
            <div className="icons"><Icon/></div>
            <div className="headerStyle">
            <LogoIcon/>
            <Menu/>
            </div>
        </div>
    )
}