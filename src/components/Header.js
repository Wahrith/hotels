import React from "react";
import logo from "../images/logo.svg"
import whatsapp from "../images/head/whatsapp.png"
import call from "../images/head/call.jpg"
import phone from "../images/phone-icon.svg"
import naira from "../images/head/naira.svg"
import account from "../images/head/avatar.svg"
import toggle from "../images/bars-solid.svg"

export default function Header(){
    return(
        <section className="header">
            <div className="headerdiv row2">
                <div id="headlogo">
                    <img src={logo} alt="" />
                </div>
                <div className="row2" id="right">
                    <div id="whatsapp" className="row2">
                        <img src={whatsapp} alt="" />
                    </div>
                    <div className="row2" id="call">
                        <div className="row2" id="phone">
                            <img src={call} alt="" />
                            <div className="column2">
                                <p>You can call us to book your hotel</p>
                                <h1>+234 700 880 8800</h1>
                            </div>
                        </div>
                        <div id="callus" className="row2">
                            <div className="row1">
                                <img src={phone} alt="" />
                            </div>
                            <div>
                                <p>Call us</p>
                            </div>
                        </div>
                    </div>
                    <div id="flag" className="row2">
                        <img src={naira} alt="" />
                        <span>₦</span>
                    </div>
                    <div className="row2" id="account">
                        <img src={account} alt="" />
                        <p>Account</p>
                    </div>
                    <div id="toggle"><img src={toggle} alt="" /></div>
                </div>
            </div>
        </section>
    )
}