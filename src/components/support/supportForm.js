import Input from "../Shared/input";
import { VALIDATOR_REQUIRE } from "../Shared/validator";

const SupportForm = () => {

    
    return ( <form>
        <Input element="input"
        type="text"
        placeholder="email"
        validators={([VALIDATOR_REQUIRE()])}
        label="email"/>
    </form> );
}
 
export default SupportForm;