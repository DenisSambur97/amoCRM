import React from "react";
import Logo from "../../image/logo_welbex.svg"
import Telegram from "../../image/telegram.svg"
import Viber from "../../image/viber.svg"
import Whatsapp from "../../image/whatsapp.svg"

import style from "./header.module.sass"
import Contacts from "../Contacts/contacts";

function Header(props) {
    const menuItems = [
        {id: 1, title: 'Услуги', href: 'services'},
        {id: 2, title: 'Виджеты', href: 'widgets'},
        {id: 3, title: 'Интеграции', href: 'integration'},
        {id: 4, title: 'Кейсы', href: 'cases'},
        {id: 5, title: 'Сертификаты', href: 'certificates'}
    ]

    return(
        <div className={style.header}>
            <a className={style.logo} href="#">
                <img src={Logo} alt="Welbex"/>
                <p className={style.logo__descr}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </a>
            <ul className={style.menu}>
                {menuItems.map((item) => (
                    <a key={item.id} href={`/${item.href}`} className={style.menu__item}>{item.title}</a>
                ))}
            </ul>
            <Contacts/>
        </div>
    )
}

export default Header