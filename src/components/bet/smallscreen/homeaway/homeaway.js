import { useState } from "react";
import './homeaway.css'

const HomeAway = (props) => {

    return <div className="w3-animate-top ">
        {props.matches.map(match => {
            return <div><br />
                <b className="match"> {match.match}  Home/Dray/Away</b>
                <span className="content">
                    <span className="seperate-box">
                        <b >{match.home}</b>
                    </span>
                    <span className="seperate-box">
                        <b >{match.draw}</b>
                    </span>
                    <span className="seperate-box">
                        <b >{match.away}</b>
                    </span>
                    
                </span>
                
            </div>
        })}
    </div>
}



export default HomeAway;