import React from "react";
import {Link} from 'react-router-dom'
import './matches.css'

let DummyMatch = [{
    mid: 'm1',
    home: 'Everton',
    away: 'Arsenal',
    division: 'Division 1',
    date: 'Today',
    goalscorer: ['sodiq', 'pious', 'euro'],
    time: '09:00'

},{
    mid: 'm2',
    home: 'Chelsea',
    away: 'Liverpool',
    date: 'Today',
    division: 'Division 1',
    goalscorer: ['sodiq', 'pious', 'euro'],
    time: '09:00'

},{
    mid: 'm2',
    home: 'Chelsea',
    away: 'Liverpool',
    date: 'Today',
    division: 'Division 1',
    goalscorer: ['sodiq', 'pious', 'euro'],
    time: '09:00'

}]


const Matches = () => {
    return <React.Fragment>
        <div className="matches-pad">
        {DummyMatch.map(each => {
           return <div className="matches-float-rt"><br /><Link to={`/match/${each.mid}`}><fieldset>

            <div className="matches-datetime">
                <p></p>
                <small>{each.date}</small>
                <small>{each.time}</small>
             </div>
             <p><b><i className="fas fa-user-circle"></i> {each.home}</b></p> 
             
             <b><i className="fas fa-user-circle"></i> {each.away}</b>
             
             
            </fieldset></Link></div>
            })}
            
            
        </div>
        <div className="icon-pad">
            <h1>test@test.com</h1>
        </div>
    </React.Fragment>
}

export default Matches;