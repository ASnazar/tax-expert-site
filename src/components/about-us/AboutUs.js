import React from "react";
import style from "./AboutUs.module.css"
import Arrow from "../arrowUp/arrow";
const AboutUs = () =>{

    return (
        <div className={style.box} >
            <div className={style.boxWelcomeWithImg}>
            <div className={style.boxWelcome}>
                <h1 className={style.h11}>Welcome to Workers</h1>
            <p className={style.p11}>If you need people for work than you are in right place If you need people for work than you are in right place If you need people for work than you are in right place</p>
                <a href="/home" className={style.btn}>Зворотній зв'язок</a>
            </div>
            </div>


            <div className={style.info}>
                <Arrow/>
            </div>

        </div>
    );
};

export default AboutUs;