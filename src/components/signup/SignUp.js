import React from "react";
import EmailHooks from "../hooks/EmailHooks";
import FirstNameHooks from "../hooks/FirstNameHooks";
import LastNameHooks from "../hooks/LastNameHooks";
import PasswordHooks from "../hooks/PasswordHooks";
import UsernameHooks from "../hooks/UsernameHooks";

// export const SignUp = () => {
function SignUp(){

    const [firstName, handleFirstNameOnChange, firstNameError] = FirstNameHooks()
    const [lastName, handleLastNameOnChange, lastNameError, setOnFocus, setOnBlur] = LastNameHooks()
    const [password, handlePassowrdOnChange, passwordError, setPasswordOnFocus, setPasswordOnBlur] = PasswordHooks()
    const [username, handleUsernameOnChange, usernameError, setUsernameOnFocus, setUsernameOnBlur] = UsernameHooks()
    const [email, handleEmailOnChange, emailError, setEmailOnFocus, setEmailOnBlur] = EmailHooks()

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(email)
        console.log(username)
        console.log(firstName)
        console.log(lastName)
        console.log(password)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <table style={{margin : "10px auto"}}>
                    <tbody>
                        <tr>
                            <td>
                                First name: 
                            </td>
                            <td>
                                <input name={firstName} onChange={handleFirstNameOnChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Last name: 
                            </td>
                            <td>
                                <input name={lastName} onChange={handleLastNameOnChange} onFocus={() => setOnFocus(true)} onBlur={() => setOnBlur(true)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email: 
                            </td>
                            <td>
                                <input name={email} onChange={handleEmailOnChange} onFocus={()=> setEmailOnFocus(true)} onBlur={()=> setEmailOnBlur(true)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Username: 
                            </td>
                            <td>
                                <input name={username} onChange={handleUsernameOnChange} onFocus={() => setUsernameOnFocus(true)} onBlur={() => setUsernameOnBlur(true)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password: 
                            </td>
                            <td>
                                <input type="password" name={password} onChange={handlePassowrdOnChange} onFocus={()=> setPasswordOnFocus(true)} onBlur={()=> setPasswordOnBlur(true)} />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button>Submit</button>
                <div style={{color: "red"}}>{firstNameError && firstNameError}</div>
                <div style={{color: "red"}}>{lastNameError && lastNameError}</div>
                <div style={{color: "red"}}>{emailError}</div>
                <div style={{color: "red"}}>{usernameError}</div>
                <div style={{color: "red"}}>{passwordError}</div>
            </form>
        </div>
    );
}

export default SignUp;
