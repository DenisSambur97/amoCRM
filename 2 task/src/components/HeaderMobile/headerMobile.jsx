import React from "react";

import style from "./headerMobile.module.sass"

function HeaderMobile() {
    const menuItemsMobile = [
        {id: 1, title: 'Услуги', href: 'services'},
        {id: 2, title: 'Виджеты', href: 'widgets'},
        {id: 3, title: 'Интеграции', href: 'integration'},
        {id: 4, title: 'Кейсы', href: 'cases'}
    ]

    return(
        <header className={style.header_mobile}>
            <ul className={style.menu_mobile}>
                {menuItemsMobile.map(({id, title, href}) => (
                    <a key={id} href={`/${href}`} className={style.menu_mobile__item}>{title}</a>
                ))}
            </ul>
        </header>
    )
}

export default HeaderMobile