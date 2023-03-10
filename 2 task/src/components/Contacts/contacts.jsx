import React from "react"
import Telegram from "../../image/telegram.svg"
import Viber from "../../image/viber.svg"
import Whatsapp from "../../image/whatsapp.svg"

import style from "./contacts.module.sass"

function Contacts(props) {
    return (
        <ul className={style.contacts}>
            <li className={style.contacts__item}>
                <p className={style.contacts__item_text}>+7 555 555-55-55</p>
            </li>
            <li className={style.contacts__social}>
                <img className={style.contacts__social_image} alt="Telegram" src={Telegram}/>
            </li>
            <li className={style.contacts__social}>
                <img className={style.contacts__social_image} alt="Viber" src={Viber}/>
            </li>
            <li className={style.contacts__social}>
                <img className={style.contacts__social_image} alt="Whatsapp" src={Whatsapp}/>
            </li>
            <li className={props.isAddress  ? style.contacts__item_address : style.contacts__item_address_none}>
                <p className={style.contacts__item_text}>Москва, Путевой проезд 3с1, к 902</p>
            </li>
        </ul>
    )
}

export default Contacts