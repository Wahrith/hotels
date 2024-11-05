import React from "react";
import twitter from "../images/twitter.svg"
import nanta from "../images/foot/Nanta.png"
import ntdc from "../images/foot/ntdc.png"


export default function Eighth(){
    return(
        <section className="eighth">
            <div className="eighthdiv">
                <div className="numbers row1">
                    <div className="tops column0">
                        <h6 className="color1">Company</h6>
                        <hr />
                        <div className="links column0">
                            <button className="color2 buttons">Visa</button>
                            <button className="color2 buttons">Blog</button>
                            <button className="color2 buttons">About Us</button>
                            <button className="color2 buttons">Press Page</button>
                            <button className="color2 buttons">Job Openings</button>
                            <button className="color2 buttons">Privacy Policy</button>
                            <button className="color2 buttons">Terms of Service</button>
                            <button className="color2 buttons">How it Works</button>
                        </div>
                    </div>
                    <div className="tops column0">
                        <h6 className="color1">Communtiy</h6>
                        <hr />
                        <div className="links column0">
                            <button className="color2 buttons">Twitter</button>
                            <button className="color2 buttons">Facebook</button>
                            <button className="color2 buttons">Instagram</button>
                            <button className="color2 buttons">Travel Blog</button>
                            <button className="color2 buttons">Tourist Attractions</button>
                            <button className="color2 buttons">Travel guide</button>
                            <button className="color2 buttons">Top Hotels in Nigeria</button>
                            <button className="color2 buttons">Top Places in Nigeria</button>
                            <button className="color2 buttons">Cars in Nigeria</button>
                        </div>
                    </div>
                    <div className="tops column0">
                        <h6 className="color1">Top Cities</h6>
                        <hr />
                        <div className="links column0">
                            <button className="color2 buttons">Hotels in Lagos</button>
                            <button className="color2 buttons">Hotels in Calabar</button>
                            <button className="color2 buttons">Hotels in Abuja</button>
                            <button className="color2 buttons">Hotels in Ikoyi</button>
                            <button className="color2 buttons">Hotels in Port Harcourt</button>
                            <button className="color2 buttons">Hotels in Owerri</button>
                            <button className="color2 buttons">Hotels in Maryland</button>
                            <button className="color2 buttons">Hotels in Abia</button>
                            <button className="color2 buttons">Hotels in Jos</button>
                        </div>
                    </div>
                    <div className="tops column0">
                        <h6 className="color1">Top Destinations</h6>
                        <hr />
                        <div className="links column0">
                            <button className="color2 buttons">Abuja</button>
                            <button className="color2 buttons">Calabar</button>
                            <button className="color2 buttons">Lagos</button>
                            <button className="color2 buttons">Enugu</button>
                            <button className="color2 buttons">Port Harcourt</button>
                            <button className="color2 buttons">Benin city</button>
                            <button className="color2 buttons">Ibadan</button>
                            <button className="color2 buttons">Abeokuta</button>
                        </div>
                    </div>
                    <div className="tops column0">
                        <h6 className="color1">Top Hotels</h6>
                        <hr />
                        <div className="links column0">
                            <button className="color2 buttons">Ibis Lagos Airport</button>
                            <button className="color2 buttons">Hotel Ibis Lagos Ikeja</button>
                            <button className="color2 buttons">Beni Gold Hotel and</button>
                            <button className="color2 buttons">Apartments</button>
                            <button className="color2 buttons">Beni Apartments</button>
                            <button className="color2 buttons">Beni Hotels</button>
                            <button className="color2 buttons">Grand Ibro Hotel</button>
                            <button className="color2 buttons">Choice Suites (Formerly</button>
                            <button className="color2 buttons">Chantella Suites)</button>
                            <button className="color2 buttons">Silver Grandeur Hotel</button>
                            <button className="color2 buttons">Jeromes Garden and Suites</button>
                            <button className="color2 buttons">Integrity Hotel and Suites</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="foot row1">
                    <div className="footdiv row0">
                        <div className="left color1 row2">
                            <p>Copyright @ 2022 Hotel Booking Limited All Rights Reserved</p>
                            <img src={twitter} alt="" />
                        </div>
                        <div className="images row">
                            <p className="color1">Certified by:</p>
                            <img src={nanta} id="nanta" alt="" />
                            <img src={ntdc} id="ntdc" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}