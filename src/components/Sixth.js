import React from "react";
import lastpicture from "../images/lastpicture.png"
import gplay from "../images/gplay.png"

export default function Sixth(){
    return(
        <section className="sixth">
            <div className="sixthdiv row1">
                <div id="lastpicture">
                    <img src={lastpicture} alt="" />
                </div>
                <div className="color1" id="lastpicturediv">
                    <h2 className="color2">Get the Hotels.ng app</h2>
                    <h3>Download the hotels.ng app and book a hotel instantly</h3>
                    <p>Book your hotel instantly with our Andriod App.</p>
                    <div id="googleplay"><img src={gplay} alt="" /></div>
                </div>
            </div>
        </section>
    )
}