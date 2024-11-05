import React from "react";
import beland from "../images/panelone/sw…tel-(formerly-beland-hotel-owerri)-1438118-26.jpg"
import classicHotels from "../images/panelone/embassy-classic-hotels-owerri-1443996-18.jpg"
import shortlet from "../images/panelone/shortlet-haven-enugu-1441328-6.jpg"
import mercure from "../images/panelone/mercure-the-moorhouse-ikoyi-48897-7.jpg"
import demeg from "../images/panelone/demeg-hotel-and-suites-1398654-7.jpg"
import cedars from "../images/panelone/royal-cedars-hotels-and-apartments-1441261-19.jpg"

export default function Third(){
    return (
        <section className="third">
            <div className="thirddiv">
                <div className="one column2 color1">
                    <h1>Suggested Destinations in Nigeria</h1>
                    <p>Below are the most popular travel destinations in Nigeria</p>
                </div>
                <div className="boxes row1">
                    <div className="box row1" id="box1">
                        <div className="column2">
                            <div className="color2">
                                Hotels in Lagos
                            </div>
                            <div className="color1">
                                3,337 hotels
                            </div>
                        </div>
                    </div>
                    <div className="box row1" id="box2">
                        <div className="column2">
                            <div className="color2">
                                Hotels in Abuja
                            </div>
                            <div className="color1">
                                1,131 hotels
                            </div>
                        </div>
                    </div>
                    <div className="box row1" id="box3">
                        <div className="column2">
                            <div className="color2">
                                Hotels in Port Harcourt
                            </div>
                            <div className="color1">
                                380 hotels
                            </div>
                        </div>
                    </div>
                    <div className="box row1" id="box4">
                        <div className="column2">
                            <div className="color2">
                                Hotels in Kaduna
                            </div>
                            <div className="color1">
                                331 hotels
                            </div>
                        </div>
                    </div>
                    <div className="box row1" id="box5">
                        <div className="column2">
                            <div className="color2">
                                Hotels in Uyo
                            </div>
                            <div className="color1">
                                197 hotels
                            </div>
                        </div>
                    </div>
                    <div className="box row1" id="box6">
                        <div className="column2">
                            <div className="color2">
                                Hotels in Ibadan
                            </div>
                            <div className="color1">
                                434 hotels
                            </div>
                        </div>
                    </div>
                </div>
                <div className="one column2 color1">
                    <h1>Today's Top Hotel Deals</h1>
                    <p>A selection of the best hotel deals, only available today</p>
                </div>
                <div className="panels row1" id="panelone">
                    <div className="panel panel1">
                        <div className="absolute">
                            <div className="overlay"></div>
                            <img src={beland} alt="" />    
                        </div>
                        <div>
                            <div className="column0" id="inner">
                                <h1 className="color2">Swiss International Beland Hotel</h1>
                                <p className="color1">New Owerri, Imo</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel1">
                        <div className="absolute">
                            <div className="overlay"></div>
                            <img src={classicHotels} alt="" />
                        </div>
                        <div>
                            <div className="column0" id="inner">
                                <h1 className="color2">Embassy Classic Hotels Owerri</h1>
                                <p className="color1">Owerri, Imo</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel1">
                        <div className="absolute">
                            <div className="overlay"></div>
                            <img src={shortlet} alt="" />
                        </div>
                        <div>
                            <div className="column0" id="inner">
                                <h1 className="color2">Shortlet Haven Enugu</h1>
                                <p className="color1">Enugu, Enugu</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel1">
                        <div className="absolute">
                            <div className="overlay"></div>
                            <img src={mercure} alt="" />
                        </div>
                        <div>
                            <div className="column0" id="inner">
                                <h1 className="color2">Mercure The Moorhouse Ikoyi</h1>
                                <p className="color1">Ikoyi, Lagos</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel1">
                        <div className="absolute">
                            <div className="overlay"></div>
                            <img src={demeg} alt="" />
                        </div>
                        <div>
                            <div className="column0" id="inner">
                                <h1 className="color2">DEMEG HOTEL AND SUITES</h1>
                                <p className="color1">Ipaja, Lagos</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel1">
                        <div className="absolute">
                            <div className="overlay"></div>
                            <img src={cedars} alt="" />
                        </div>
                        <div>
                            <div className="column0" id="inner">
                                <h1 className="color2">Royal Cedars Hotels and Apartments</h1>
                                <p className="color1">Ibadan, Oyo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="one column2 color1">
                    <h1>Popular cities with Hotels.ng travellers</h1>
                    <p>See the top destinations people are traveling to</p>
                </div>
                <div className="panels row1" id="paneltwo">
                    <div className="panel panel2 column1 lagosCity">
                        <div className="ovlay"></div>
                        <div className="column2">
                            <p>3,337</p>
                            <h1>Lagos hotels</h1>
                        </div>
                        <div className="layer row">
                            <button className="dark">Book Hotels in Lagos</button>
                        </div>
                    </div>
                    <div className="panel panel2 column1 abujaCity">
                        <div className="ovlay"></div>
                        <div className="column2">
                            <p>1,131</p>
                            <h1>Abuja hotels</h1>
                        </div>
                        <div className="layer row">
                            <button className="dark"> Book Hotels in Abuja</button>
                        </div>
                    </div>
                    <div className="panel panel2 column1 calabarCity">
                        <div className="ovlay"></div>
                        <div className="column2">
                            <p>278</p>
                            <h1>Calabar hotels</h1>
                        </div>
                        <div className="layer row">
                            <button className="dark">Book Hotels in Calabar</button>
                        </div>
                    </div>
                    <div className="panel panel2 column1 portHarcourt">
                        <div className="ovlay"></div>
                        <div className="column2">
                            <p>380</p>
                            <h1>Port Harcourt hotels</h1>
                        </div>
                        <div className="layer row">
                            <button className="dark">Book Hotels in Port Harcourt</button>
                        </div>
                    </div>
                    <div className="panel panel2 column1 owerriCity">
                        <div className="ovlay"></div>
                        <div className="column2">
                            <p>179</p>
                            <h1>Owerri hotels</h1>
                        </div>
                        <div className="layer row">
                            <button className="dark">Book Hotels in Owerri</button>
                        </div>
                    </div>
                    <div className="panel panel2 column1 uyoCity">
                        <div className="ovlay"></div>
                        <div className="column2">
                            <p>197</p>
                            <h1>Uyo hotels</h1>
                        </div>
                        <div className="layer row">
                            <button className="dark">Book Hotels in Uyo</button>
                        </div>
                    </div>
                </div>
                <div className="one column2 color1">
                    <h1>Which City Do You Want To Book A Hotel</h1>
                    <p>7201 hotels in 1,849 cities / towns in Nigeria</p>
                </div>
                <div className="allhotels row1">
                    <div className="line" id="line1">
                        <div>
                            <h1 className="color2">Hotels in Abia</h1>
                            <p className="color1">296 hotels in Abia with over 163 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Anambra</h1>
                            <p className="color1">297 hotels in Anambra with over 130 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Borno</h1>
                            <p className="color1">24 hotels in Borno with over 11 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Edo</h1>
                            <p className="color1">370 hotels Edo in with over 486 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Gombe</h1>
                            <p className="color1">44 hotels in Gombe with over 24 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Kano</h1>
                            <p className="color1">127 hotels in Kano with over 119 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Kwara</h1>
                            <p className="color1">334 hotels in Kwara with over 302 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Ogun</h1>
                            <p className="color1">735 hotels in Ogun with over 502 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Plateau</h1>
                            <p className="color1">284 hotels in Plateau with over 141 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Yobe</h1>
                            <p className="color1">11 hotels in Yobe with no hotel review</p>
                        </div>
                    </div>
                    <div className="line" id="line2">
                        <div>
                            <h1 className="color2">Hotels in Abuja</h1>
                            <p className="color1">1,131 hotels in Abuja with over 2,352 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Bauchi</h1>
                            <p className="color1">52 hotels in Bauchi with over 54 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Cross River</h1>
                            <p className="color1">367 hotels in Cross River with 334 over hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Ekiti</h1>
                            <p className="color1">231 hotels in Ekiti with over 203 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Imo</h1>
                            <p className="color1">323 hotels in Imo with over 310 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Katsina</h1>
                            <p className="color1">32 hotels in Katsina with over 23 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Lagos</h1>
                            <p className="color1">3,337 hotels in Lagos with over 8,452 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Ondo</h1>
                            <p className="color1">256 hotels in Ondo with over 199 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Rivers</h1>
                            <p className="color1">518 hotels in Rivers with over 578 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Zamfara</h1>
                            <p className="color1">28 hotels in Zamfara with over 9 hotel reviews</p>
                        </div>
                    </div>
                    <div className="line" id="line3">
                        <div>
                            <h1 className="color2">Hotels in Adamawa</h1>
                            <p className="color1">70 hotels in Adamawa with over 46 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Bayelsa</h1>
                            <p className="color1">180 hotels in Bayelsa with over 55 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Delta</h1>
                            <p className="color1">639 hotels in Delta with over 437 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Enugu</h1>
                            <p className="color1">354 hotels in Enugu with over 446 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Jigawa</h1>
                            <p className="color1">33 hotels in Jigawa with over 4 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Kebbi</h1>
                            <p className="color1">27 hotels in Kebbi with over 10 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Nasarawa</h1>
                            <p className="color1">237 hotels in Nasarawa with over 59 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Osun</h1>
                            <p className="color1">323 hotels in Osun with over 261 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Sokoto</h1>
                            <p className="color1">21 hotels in Sokoto with over 50 hotel reviews</p>
                        </div>
                    </div>
                    <div className="line" id="line4">
                        <div>
                            <h1 className="color2">Hotels in Akwa Ibom</h1>
                            <p className="color1">473 hotels in Akwa Ibom with over 296 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Benue</h1>
                            <p className="color1">295 hotels in Benue with over 37 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Ebonyi</h1>
                            <p className="color1">99 hotels in Ebonyi with over 21 hotel reviews</p>
                        </div>
                        <div id="fct">
                            <h1 className="color2">Hotels in FCT</h1>
                            <p className="color1">1 hotel in FCT with no hotel review</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Kaduna</h1>
                            <p className="color1">331 hotels in Kaduna with over 254 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Kogi</h1>
                            <p className="color1">263 hotels in Kogi with over 48 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Niger</h1>
                            <p className="color1">113 hotels in Niger with over 58 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Oyo</h1>
                            <p className="color1">642 hotels in Oyo with over 666 hotel reviews</p>
                        </div>
                        <div>
                            <h1 className="color2">Hotels in Taraba</h1>
                            <p className="color1">97 hotels in Taraba with over 6 hotel reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}