import React, {useState} from 'react';
import style from './Navbar.module.css';
import Logo_2 from '../../asserts/logo_2.png';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
const Navbar = () =>{
    const [nav, setNav] = useState(false);
    return (
        <header className={style.header}>
            <div  className='conteiner'>
                <div className={style.box}>
                    <div >
                    </div>
                    <ul className={nav ? [style.menu, style.active].join(' ') : style.menu }>
                        <div className={style.logo_image_menu}>
                            <img src={Logo_2} alt="/"/>
                            </div>
                        <li ><a href='/hom'>Послуги</a> </li>
                        <li ><a href='/home'>Про нас</a> </li>
                        <li ><a href='/home'>Ціни</a> </li>
                        <li ><a href='/home'>Контакти</a> </li>

                    </ul>
                    <div onClick={()=>setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25}/> :  <AiOutlineMenu size={25}/>}
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Navbar;