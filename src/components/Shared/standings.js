import React from "react";

const Standings = () => {
    return ( <React.Fragment>
        <div>
            <table className="w3-table w3-table-striped">
                <tr>
                    <th></th>
                    <th></th>
                    <th>Club</th>
                    <th>Mp</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                </tr>
                <tr className="padd">
                    <td>1</td>
                    <td className="fas fa-home"></td>
                    <td>Chelsea</td>

                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>7</td>
                </tr>
                <tr className="padd">
                    <td>2</td>
                    <td className="fas fa-home"></td>
                    <td>Everton</td>

                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>7</td>
                </tr>
                <tr className="padd">
                    <td>3</td>
                    <td className="fas fa-home"></td>
                    <td>Real Madrid</td>

                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>7</td>
                </tr>
            </table>
        </div>

    </React.Fragment> );
}
 
export default Standings;