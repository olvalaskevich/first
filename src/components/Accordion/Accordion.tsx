import React, {useState} from "react";

type AccordionPropsType={
    title:string

}

type AccordionTitlePropsType={
    openAccordion:()=>void
    titles:string
}


export function Accordion (props:AccordionPropsType) {

    let [open, setOpen]=useState(false)

    const openAccordion=()=>{
        setOpen(!open)
    }


    return (
        <div>
            <AccordionTitle titles={props.title} openAccordion={openAccordion}/>
            {open && <AccordionBody/> }
        </div>
    )

}

function AccordionTitle(props:AccordionTitlePropsType) {
        return (
        <><h3 onClick={props.openAccordion}>{props.titles}</h3></>
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

