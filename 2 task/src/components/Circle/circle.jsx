import React from "react";
import style from "./circle.module.sass"

function Circle() {
    return(
        <div className={style.circle}>
            {/*<div className="purple-circle"/>*/}
            {/*<div className="red-circle"/>*/}
            {/*<div className="red-circle_small"/>*/}
            {/*<div className="purple-light_circle"/>*/}
            {/*<div className="red-light_circle"/>*/}
            <div className={style.purple_circle}/>
            <div className={style.red_circle}/>
            <div className={style.red_circle_small}/>
            <div className={style.purple_light_circle}/>
            <div className={style.red_light_circle}/>
        </div>
    )
}

export default Circle