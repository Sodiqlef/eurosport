import React, {useState} from "react";
import { useParams } from "react-router-dom";

import './matchstat.css'


let DummyMatch = [{
    mid: 'm1',
    home: 'Everton',
    away: 'Arsenal',
    division: 'Division 1',
    awayGoalscorer: ['sodiq', 'pious', 'euro'],
    homeGoalscorer: ['sodiq', 'pious', 'euro'],
    date: 'Today',
    time: '09:00'

},{
    mid: 'm2',
    home: 'Chelsea',
    away: 'Liverpool',
    division: 'Division 1',
    homeGoalscorer: ['sodiq', 'pious', 'euro'],
    awayGoalscorer: ['sodiq', 'pious', 'euro'],
    date: 'Today',
    time: '09:00'

}]

const MatchStat = () => {
    const matchId = useParams().matchId
    
    const loadedMatch = DummyMatch.filter(match => match.mid === matchId);
    
        return <React.Fragment>
             <div className="matchstat-pad">
             {loadedMatch.map(e => {
           return <div >
                        <p><b>{e.division}</b></p><hr />
                        <div className="matchstat-home">
                            <i className="fas fa-circle"></i>
                            <p>{e.home}</p>
                            <span>Jesus</span><br></br>
                            <span>Saka</span><br></br>
                            <span>Martinelli</span>
                        </div>
                        <div className="matchstat-away">
                            <i className="fas fa-circle"></i>
                            <p>{e.away}</p>
                            <span>Jesus</span><br></br>
                            <span>Saka</span><br></br>
                            <span>Martinelli</span>
                        </div> 
                    </div>
                {
                //This is an hardcoded goalscorer please make sure to change
                }
             
            })}
           </div>
        
        
        </React.Fragment>
   
}
 
export default MatchStat;