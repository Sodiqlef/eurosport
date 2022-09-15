import React, {useReducer} from 'react';
import { validate } from './validator.js';

import './input.css';


const inputReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE': 
            return {
                ...state, 
                value: action.val, 
                isValid: validate(action.val, action.validator)};
        case 'BLUR': 
            return {
                ...state, 
                isTouched: true};
        default:
            return state
    }
}


const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        isTouched: false
    })

    const onChangeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validator: props.validators
        })
    }

    const onBlurHandler = () => {
        dispatch({
            type: 'BLUR'
        })
    }


let element;
    if (props.ot === 'input') {
        element = <React.Fragment><input type={'text'} 
        className="input-support" 
        placeholder={props.placeholder }
        onChange={onChangeHandler}
        value={inputState.value}
        onBlur={onBlurHandler}
        />
        <br></br><br></br>
        </React.Fragment>
        }else if(props.ot==='textarea'){
             element = <React.Fragment>
            <textarea 
            cols={20} 
            rows={15} 
            placeholder={props.placeholder} 
            onChange={onChangeHandler}
            value={inputState.value}
            onBlur={onBlurHandler}
            />
            <br></br>
            </React.Fragment>
        }
        return (
            <div className={(!inputState.isValid && inputState.isTouched) ? 'form-invalid' : ''}>
                {(!inputState.isValid && inputState.isTouched) ? 
                <small>Please fill in all required field</small>: null} 
                {element}
                
            </div>
        )

    }

export default Input;