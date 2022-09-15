import SupportForm from "./supportForm";
import { useState } from "react";
import './support.css'


const Support = () => {
    const [support, setSupport] = useState([
        {}
    ])

    const newSupportHandler = (newSupport) => {
        setSupport(support.concat(newSupport))
    }
    

    return ( 
        <div className="form-body">
            <SupportForm supports={newSupportHandler}/>
            {support.map(s => {
                return <p key={s.id}>{s.username}</p>
            })}
        </div>
     );
}
 
export default Support;