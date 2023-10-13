import React, {useState} from 'react';
import '../index.css'
import {Btn} from "./Btn";


type OnOffPropsType={
    on:boolean,
    tumbler:()=>void
}




export const OnOff = (props:OnOffPropsType) => {

    return (
        <div>

            {props.on &&
                <div>
                    <Btn name='on' title={'On'}/>
                    <Btn tumbler={props.tumbler} title={'Off'}/>
                    <img src='https://avatars.mds.yandex.net/get-mpic/4120716/img_id6365070089787389708.jpeg/9' alt='on'/>
                </div> ||
                <div>
                    <Btn tumbler={props.tumbler} title={'On'}/>
                    <Btn name='off' title={'Off'}/>
                    <img src='https://avatars.mds.yandex.net/i?id=2e5ac2b9020e562f100bf5549029665709f99062-10767321-images-thumbs&n=13' alt='off'/>
                </div>}

        </div>
    );
};

