import { useState } from "react";
import './doublechance.css'

const DoubleChance = (props) => {

    return <div className="w3-animate-top ">
        {props.matches.map(match => {
            return <div ><br />
                <b className="match"> {match.match}  Double_Chance</b>
                <span className="content">
                    <span className="seperate-box">
                        <b >{match.x1}</b>
                    </span>
                    <span className="seperate-box">
                        <b >{match.either}</b>
                    </span>
                    <span className="seperate-box">
                        <b >{match.x2}</b>
                    </span>
                    
                </span>
                
            </div>
        })}
    </div>
}



export default DoubleChance;