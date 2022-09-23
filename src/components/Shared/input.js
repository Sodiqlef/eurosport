import React, {useReducer} from "react";
import { validate } from "./validator";


import './input.css'


const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return{
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case "BLUR":
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, 
        {
            value:'', 
            isValid: false,
            isTouched: false});
    
    const changeHandler = (event) => {
        dispatch(
            {type: "CHANGE", 
            val: event.target.value,
            validators: props.validators})
    }

    const blurHandler = () => {
        dispatch({
            type: "BLUR"
        })
    }
    
    return ( 
        <React.Fragment>
            <div className={!inputState.isValid && inputState.isTouched ? 'form-group form-invalid' : 'form-group'} >
                <label>{props.label}</label>
                <input 
                    type={props.type} 
                    className='form-control'
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    value={inputState.val}
                    onBlur={blurHandler}
                />
            </div>
        </React.Fragment>
     );
}
 
export default Input;