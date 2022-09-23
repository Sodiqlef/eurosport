import { useReducer, useCallback } from "react";

import Input from "../Shared/input";
import { VALIDATOR_REQUIRE } from "../Shared/validator";


const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
      default:
        return state;
    }
  };

const SupportForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
          email: {
            value: '',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          }
        },
        isValid: false
      });


    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id
        });
      }, []);
    
    return ( <form>
        <Input 
        id="email"
        element="input"
        type="text"
        placeholder="email"
        validators={[VALIDATOR_REQUIRE()]}
        label="Email"
        onInput={inputHandler}/>

        <Input 
        id="description"
        type="text"
        element="input"
        placeholder="description"
        validators={[VALIDATOR_REQUIRE()]}
        label="Description"
        onInput={inputHandler}/>

        <button type="submit" disabled={!formState.isValid}>
            ADD PLACE
        </button>
    </form> );
}
 
export default SupportForm; 