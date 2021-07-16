import React from 'react';
import Functiontime from './Components/FunctComp';
import Classtime from './Components/ClassComp';
import RunTimer from './Components/RunTimer';
import StateComp from './Components/Counter';


function App(){
    return(
        <>
            <Functiontime /> 
            <hr />
            <Classtime />
            <hr />
            <RunTimer />
            <hr />
            <StateComp />
            <hr />
        </>
    );
}

export default App;
