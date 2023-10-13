import React, {useState} from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    let [open, setOpen]=useState(false)

    let [ratingValue,setRatingValue]=useState(0)

    let [on, setOn]=useState(false)

    const openAccordion=()=>{
        setOpen(!open)
    }

    function selectedStar(value:number){
        setRatingValue(value)
    }

    function tumbler(){
        setOn(!on)
    }


  return (
    <div>

        {/*<input/>*/}
        {/*<input type={"date"}/>*/}

        {/*<AppTitle title={"This is component"}/>*/}
        {/*<AppTitle title={"My friends"}/>*/}
        {/*<Rating value={0}/>*/}
        <Accordion title={"Menu"} open={open} openAccordion={openAccordion}/>
        {/*<Accordion title={"Main page"}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        <Rating value={ratingValue} selectedStar={selectedStar}/>
        <OnOff on={on} tumbler={tumbler}/>
    </div>

  );
}

type AppTitlePropsType={
    title:string
}

function AppTitle(props:AppTitlePropsType) {
    return (
      <div>{props.title}</div>
    )
}



export default App;
