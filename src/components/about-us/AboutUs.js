import React from "react";
import {motion} from 'framer-motion'

import style from "./AboutUs.module.css"
import Arrow from "../arrowUp/arrow";
import Img_1 from '../../asserts/img_person.png';

    const textAnimation = {
        hidden:{
            x:-100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 2,
            transition: { delay: custom * 0.2},
        }),
    }
const textAnimationAbout = {
    hidden:{
        y:150,
        opacity: 1,
    },
    visible: custom => ({
        y: 0,
        opacity: 2,
        transition: { delay: custom * 0.2},
    }),
}




const AboutUs = () =>{

    return (

        <div className={style.box} >
            <motion.section
                initial="hidden"
                whileInView="visible"
                >
            <div className={style.boxWelcomeWithImg}>
                <div className={style.boxWelcome}>
                    <motion.h1 custom={2} variants= {textAnimation} className={style.h11}>Welcome to Workers</motion.h1>
                    <motion.p custom={3} variants= {textAnimation} className={style.p11}>If you need people for work than you are in right place If you need people for work than you are in right place If you need people for work than you are in right place</motion.p>
                    <motion.a custom={4} variants= {textAnimation} href="/home" className={style.btn}>Зворотній зв'язок</motion.a>
                </div>
            </div>
            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{amount:0.3}}
                >
            <div className={style.info}>
                <div className={style.box_who_we}>

                    <div className={style.info_who_we}>
                        <motion.img src={Img_1} custom={1} variants= {textAnimationAbout} alt="/"/>
                                <div         className={style.box_text}>
                                    <div className={style.who_we_text}>
                                        <motion.h1 custom={1} variants= {textAnimationAbout}>Хто ми </motion.h1>
                                        <motion.p custom={2} variants= {textAnimationAbout}>Консалтингова компанія «ЕКСПЕРТ» є одним з перших створених в Україні податковим консультантом tax adviser у розумінні, прийнятому в світі.</motion.p>
                                        <motion.p custom={3} variants= {textAnimationAbout}> Понад 15 років ми забезпечуємо комплекс професійних послуг, спрямованих на побудову ефективних моделей оподаткування як бізнесу, так і приватних осіб.</motion.p>
                                        <motion.p custom={4} variants= {textAnimationAbout}> Наша команда – це сертифіковані податкові консультанти та  бухгалтери-практики, професіоналізм котрих підтверджується постійними публікаціями в системах ЛІГА:Закон, ДІНАЙ та інших виданнях.</motion.p>
                                    </div>
                                    <div className={style.our_advantage}>
                                        <motion.h2 custom={1} variants= {textAnimationAbout}>Наші переваги</motion.h2>
                                            <ul>
                                                <motion.li custom={2} variants= {textAnimationAbout}>Податкова спеціалізація</motion.li>
                                                <motion.li custom={2} variants= {textAnimationAbout}>Податкова спеціалізація</motion.li>
                                                <motion.li custom={3} variants= {textAnimationAbout}>Податкова спеціалізація</motion.li>
                                                <motion.li custom={3} variants= {textAnimationAbout}>Податкова спеціалізація</motion.li>
                                                <motion.li custom={4} variants= {textAnimationAbout}>Податкова спеціалізація</motion.li>
                                                <motion.li custom={4} variants= {textAnimationAbout}>Податкова спеціалізація</motion.li>
                                            </ul>
                                    </div>
                             </div>
                    </div>
                </div>
                <Arrow/>
            </div>
            </motion.section>
        </div>

    );
};

export default AboutUs;