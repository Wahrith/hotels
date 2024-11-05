import React from "react";

export default function Fourth(){
    return(
        <section className="fourth row1">
            <div className="fourthdiv color1">
                <div>
                    <h1>Special Hotel Deals and Offers</h1>
                    <p>Enter your email address to receive secret hotel deals</p>
                </div>
                <div className="row">
                    <div>
                        <input className="input" id="input3" type="email" placeholder="Enter your email address" />
                    </div>
                    <button id="btn2">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}