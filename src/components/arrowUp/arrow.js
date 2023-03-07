import React from 'react';
import style from './Arrow.module.css';
import {FaArrowAltCircleUp} from "react-icons/fa";


const Arrow = () =>{
    return (
        <div className={style.arrow}>
        <FaArrowAltCircleUp size={30}/>
        </div>
    );
};

export default Arrow;