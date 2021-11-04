import { useState } from "react";
import { isAlpha } from 'validator'

function FirstNameHooks() {
    const [ firstName, setFirstName ] = useState("")
    const [ error, setError ] = useState("")

    function handleFirstNameOnChange(e){
        

        if(e.target.value.length === 0){
            setError("first name cannot be empty")
        }else{
            if(!isAlpha(e.target.value)){
            setError("Cannot contain special character or number")
            }else{
                setError("")
                setFirstName(e.target.value)
        }
        }

        
    }
    return [firstName, handleFirstNameOnChange, error]
}

export default FirstNameHooks;