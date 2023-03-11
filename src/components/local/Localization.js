import React from 'react';
import {useTranslation} from "react-i18next";

import style from './Localization.module.css';
import 'react-phone-number-input/style.css'
import {MdLanguage} from "react-icons/md";


const Localization = () =>{
    const {i18n } = useTranslation();
    const changeLanguage = (language) =>{
        i18n.changeLanguage(language);
    };
    return(

        <div className={style.lang_menu}>
            <MdLanguage size={25} className={style.selected_lang}/>
            {/*//<GrLanguage size={25}   value={{ color: 'white' }}/>*/}
            <ul>
                <li>
                    <a  className={style.ua}  onClick={() => changeLanguage('ua')}></a>
                </li>
                <li>
                    <a className={style.en} onClick={() => changeLanguage('en')}></a>
                </li>

            </ul>

        </div>
    )
}

export default Localization;