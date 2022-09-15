import { useState } from "react";
import './overunder.css'

const OverUnder = (props) => {

    return <div className="w3-animate-top ">
        {props.matches.map(match => {
            return <div><br />
                <b className="match"> {match.match}  Over/Under2.5</b>
                <span className="content-2">
                    <span className="seperate-box-2">
                        <b >{match.over}</b>
                    </span>
                    <span className="seperate-box-2">
                        <b >{match.under}</b>
                    </span>
                    
                </span>
                
            </div>
        })}
    </div>
}



export default OverUnder;