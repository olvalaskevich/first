import React from 'react';
import './index.css'

export type BtnPropsType={
    title:string
    name?:string
    tumbler?:()=>void
}

export const Button = (props:BtnPropsType)=> {
    return (<div>
        <button className={props.name} onClick={props.tumbler}>{props.title}</button>
    </div>)
}

// import React from 'react';
// import {BtnPropsType, Button} from "./Button";
// import './index.css'
// export default {
//     title:'Button',
//     component: Button,
//     argTypes:{
//         title:'string',
//         description:'Текст кнопки'
//     }
// }
//
// const Template=(arg:BtnPropsType)=><Button {...arg}/>
//
// export const Default=()=> Template.bind({})
// Default.arg={
//     title:'On',
//     name:'on',
//
// }