import React, {useState} from "react";


// type RatingPropsType={
//     value:number
// }



export function Rating() {

    let [selected,setSelected]=useState(0)

    let id=[
        {num:1, selected:false},
        {num:2, selected:false},
        {num:3, selected:false},
        {num:4, selected:false},
        {num:5, selected:false}
]



    if (selected===1){
        id[0].selected=true}
    if (selected===2){
        id[0].selected=true
        id[1].selected=true}
    if (selected===3){
        id[0].selected=true
        id[1].selected=true
        id[2].selected=true}
    if (selected===4){
        id[0].selected=true
        id[1].selected=true
        id[2].selected=true
        id[3].selected=true}
    if (selected===5){
        id[0].selected=true
        id[1].selected=true
        id[2].selected=true
        id[3].selected=true
        id[4].selected=true}

    function selectedStar(value:number){
        setSelected(value)
    }


    return (
            <div>

                {id.map( (id)=>{
                    return <Star id={id.num} selected={id.selected} selectedStar={selectedStar}/>
                } )}
            </div>
        )

}

type StarPropsType = {
    id:number
    selected: boolean
    selectedStar:(value:number)=>void
}

function Star(props: StarPropsType) {

    return (<>
        {props.selected ? <span onClick={()=>{props.selectedStar(props.id)}}><b>star </b></span> : <span onClick={()=>{props.selectedStar(props.id)}}>star </span>}
    </>)
}



