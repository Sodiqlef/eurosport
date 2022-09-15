import React from "react";
import './betbuttons.css'
import { useState } from 'react';
import HomeAway from "../homeaway/homeaway";
import OverUnder from "../overunder/overunder";
import DoubleChance from "../doublechance/doublechance";

const BetButton = (props) => {

    const [allMatches, setMatches] = useState([
       {match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},        {match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},        {match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},        {match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},        {match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},        {match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},        {match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},{match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
},{match: 'Chelsea vs Everton',
home: 2.5,
away: 1.8,
draw: 3.01,
over: 1.8,
under: 4.5,
x1: 3.01,
either: 2.2,
x2: 1.8
}
    ])


    let [homeAway, setHomeAway] = useState(true)
    let [overUnder, setOverUnder] = useState(false)
    let [doubleChance, setDoubleChance] = useState(false)

    
    const homeAwayHandler = (event) => {
        event.preventDefault()
        setHomeAway(true)
        setOverUnder(false)
        setDoubleChance(false)

         
    }

    const overUnderHandler = (event) => {
        event.preventDefault()
         setHomeAway(false)
         setOverUnder(true)
         setDoubleChance(false)
         
         
    }

    const doubleChanceHandler = (event) => {
        event.preventDefault()
        setHomeAway(false)
        setOverUnder(false)
        setDoubleChance(true)
         
    }

    return <div className="flex-display">
        
        <b className="game-btn"><li className={(homeAway)? 'btn-active w3-btn m-width ': "w3-btn m-width  "} onClick={homeAwayHandler}>1X2</li></b>        
        <b className="game-btn"><li className={(overUnder)? 'btn-active w3-btn m-width ': "w3-btn m-width  "} onClick={overUnderHandler}>o/u 2.5</li></b>
        <b className="game-btn"><li className={(doubleChance)? 'btn-active w3-btn m-width ': "w3-btn m-width  "} onClick={doubleChanceHandler}>DC</li></b>


{/** This is the setup for the home, away and draw bet*/}
        {(homeAway && !overUnder && !doubleChance)  ? <HomeAway matches={allMatches}/>: null}


{/** This is the setup for the over and under bet*/}
        {(overUnder && !homeAway && !doubleChance)  ? <OverUnder matches={allMatches}/>: null}


{/** This is the setup for the double chance bet*/}
        {(!homeAway && !overUnder && doubleChance)  ? <DoubleChance matches={allMatches}/> : null}
    </div>



}

export default BetButton;