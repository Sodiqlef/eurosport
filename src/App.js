import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Error404Page from "./components/Shared/error404/error404";
import NavBar from "./components/Shared/navbar/navbar";
import HomePage from "./components/Shared/homepage";
import Bet from "./components/bet/bet";
import Support from "./components/support/support";
import './App.css';
import MatchStat from "./components/Shared/matches/matchstat";
import './fontawesome-free-5.15.4-web/css/all.css'
import Standings from "./components/Shared/standings";




const App = () => {
  return (
    
    <Router>
      <NavBar />
      <main className="w3-container">
      <Switch>
          <Route path='/' exact><HomePage /></Route>
          <Route path='/support' exact><Support /></Route>
          <Route path='/bet' exact><Bet /></Route>
          <Route path='/match/:matchId' exact><MatchStat /></Route>
          <Route path='/error404' exact><Error404Page /></Route>
          <Route path='/standings' exact><Standings /></Route>
          <Redirect to="/error404" />
      </Switch>
      </main>
      
    </Router>
    
  )
}


export default App;