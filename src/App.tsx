import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";

function App() {
    debugger
  return (
    <div>

        {/*<input/>*/}
        {/*<input type={"date"}/>*/}

        {/*<AppTitle title={"This is component"}/>*/}
        {/*<AppTitle title={"My friends"}/>*/}
        {/*<Rating value={0}/>*/}
        <Accordion title={"Menu"} colapse={true}/>
        <Accordion title={"Main page"} colapse={false}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <OnOff state={true}/>
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
