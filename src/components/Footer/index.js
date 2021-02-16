import "./Footer.css"
import React from 'react';

const Footer = (props) => {
    if (props.roundWon){
        return <div>{props.currentPlayer} lost.</div>
    }else{
        return <div>Current Player : {props.currentPlayer}</div>
    }
};

export default Footer;