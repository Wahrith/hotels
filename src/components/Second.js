import React from "react";

export default function Second(){
    return(
        <section className="second column2">
            <div className="seconddiv row">
                <div className="search">
                    <input className="input" id="input1" type="text" placeholder="Search for a city or a particular hotel" />
                </div>
                <div className="calendar">
                    <input className="input" id="input2" type="calendar" placeholder="Sun, 13 Mar - Mon, 14 Mar" />
                </div>
                <button id="btn1">Find Hotels</button>
            </div>
        </section>
    )
}