import React from "react";
import BetButton from "./smallscreen/betbuttons/betbuttons";
import BetLarge from "./largescreen/betlarge";

const Bet = () => {
   
    return <React.Fragment>
        <div className="w3-hide-large w3-hide-medium">
        <BetButton />
        </div>
        <div className="w3-hide-small">
            <BetLarge />
        </div>
    </React.Fragment>
    
}

export default Bet;