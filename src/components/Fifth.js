import React from "react";

export default function Fifth(){
    return(
        <section className="fifth row1">
            <div className="fifthdiv">
                <div className="hide color1">
                    <div><p>We've been featured in</p></div>
                    <div className="logos">
                        <img src="images/logo/bbc.svg" alt="" />
                        <img src="images/logo/forbes.svg" alt="" />
                        <img src="images/logo/newsweek.svg" alt="" />
                        <img src="images/logo/webafrica.svg" alt="" />
                    </div>
                </div>
                <div className="show color1">
                    <h1>Get More Bookings for Your Hotel</h1>
                    <p>Find out why over 13,007 hotel managers trust Hotels.ng</p>
                    <button id="btn3">Add Your Hotel</button>
                </div>
            </div>
        </section>
    )
}