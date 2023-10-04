import React from "react";

type AccordionPropsType={
    title:string
    colapse:boolean
}


function Accordion (props:AccordionPropsType) {

    return (
        <div>
            <AccordionTitle titles={props.title}/>
            {!props.colapse && <AccordionBody/> }
        </div>
    )

}

function AccordionTitle(props:any) {
        return (
        <><h3>{props.titles}</h3></>
    )
}

function AccordionBody() {
    return(
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}


export default  Accordion