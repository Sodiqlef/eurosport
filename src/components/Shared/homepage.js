import React, {useState} from 'react';
import Matches from './matches/matches';
import './homepage.css'
import Standings from './standings';


const HomePage = (props) => {

  let [matchesButton, setMatchesButton] = useState(true)
  let [standingsButton, setStandingsButton] = useState(false)
  let [statsButton, setStatsButton] = useState(false)



  const matchesButtonHandler = (event) => {
    event.preventDefault();
    setMatchesButton(true)
    setStandingsButton(false)
    setStatsButton(false)
  }

  const standingsButtonHandler = (event) => {
    event.preventDefault();
    setMatchesButton(false)
    setStandingsButton(true)
    setStatsButton(false)
  }

  const statsButtonHandler = (event) => {
    event.preventDefault();
    setMatchesButton(false)
    setStandingsButton(false)
    setStatsButton(true)
  }
    return <React.Fragment>
      <div className='hp-border'>
        <button className={(matchesButton)?'hp-active hp w3-btn': 'hp w3-btn'} onClick={matchesButtonHandler}> MATCHES <i className='fas fa-angle-down '></i> </button>
        <button className={(standingsButton)?'hp-active hp w3-btn': 'hp w3-btn'} onClick={standingsButtonHandler}> STANDINGS <i className='fas fa-angle-down'></i></button>
        <button className={(statsButton)?'hp-active hp w3-btn': 'hp w3-btn'} onClick={statsButtonHandler}> STATS <i className='fas fa-angle-down'></i> </button>
        </div>

         {(matchesButton) && <Matches />}
         {(standingsButton) && <Standings />}

    </React.Fragment>
  }
  
  
  export default HomePage;