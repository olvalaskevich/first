import React from 'react';

type BtnPropsType={
    title:string
    name?:string
    tumbler?:()=>void
}

export const Btn = (props:BtnPropsType)=> {
    return <button className={props.name} onClick={props.tumbler}>{props.title}</button>
}