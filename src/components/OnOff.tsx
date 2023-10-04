import React from 'react';
import '../index.css'


type BtnPropsType={
    state:string
    name?:string
}

type OnOffPropsType={
    state:boolean,

}


export const OnOff = (props:OnOffPropsType) => {
    return (
        <div>

            {props.state &&
                <div>
                    <Btn state='On' name='on'/>
                    <Btn state='Off'/>
                </div> ||
                <div>
                    <Btn state='On'/>
                    <Btn state='Off' name='off'/>
                </div>}

            {props.state &&
                <img src='https://avatars.mds.yandex.net/get-mpic/4120716/img_id6365070089787389708.jpeg/9' alt='on'/> ||
                <img src='https://avatars.mds.yandex.net/i?id=2e5ac2b9020e562f100bf5549029665709f99062-10767321-images-thumbs&n=13' alt='off'/>
            }


        </div>
    );
};

const Btn = (props:BtnPropsType)=> {
    return <button className={props.name}>{props.state}</button>
}