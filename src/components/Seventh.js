import React from "react";
import padlock from "../images/padlockk.png"

export default function Seventh(){
    return(
        <section className="seventh">
            <div className="seventhdiv row">
                <div id="seventhimage">
                    <img src={padlock} alt="" />
                </div>
                <div className="column0">
                    <h1>Enter your email address to unlock hotel deals</h1>
                    <p className="color2">Sign up to start receiving exclusive offers</p>
                </div>
                <div className="row0">
                    <input className="input" id="input4" type="email" placeholder="Enter your email address" />
                    <button id="btn4">Unlock</button>
                </div>
            </div>
        </section>
    )
}