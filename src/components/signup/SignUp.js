import axios from "axios";
import React from "react";

import "./signUp.css"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import EmailHooks from "../hooks/EmailHooks";
import FirstNameHooks from "../hooks/FirstNameHooks";
import LastNameHooks from "../hooks/LastNameHooks";
import PasswordHooks from "../hooks/PasswordHooks";
import UsernameHooks from "../hooks/UsernameHooks";


// export const SignUp = () => {
function SignUp(){

    const notifySuccess = () => toast.success('User successfully created!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    const notifyFailed = (input) => toast.error(`${input}`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const [firstName, handleFirstNameOnChange, firstNameError, setFirstNameOnFocus, setFirstNameOnBlur] = FirstNameHooks()
    const [lastName, handleLastNameOnChange, lastNameError, setOnFocus, setOnBlur] = LastNameHooks()
    const [password, handlePassowrdOnChange, passwordError, setPasswordOnFocus, setPasswordOnBlur] = PasswordHooks()
    const [username, handleUsernameOnChange, usernameError, setUsernameOnFocus, setUsernameOnBlur] = UsernameHooks()
    const [email, handleEmailOnChange, emailError, setEmailOnFocus, setEmailOnBlur] = EmailHooks()

    async function handleOnSubmit(e) {
        e.preventDefault()
        
        try {
            let payload = await axios.post("http://localhost:3001/api/users/create-user",
            {
                firstName,
                lastName,
                username,
                email,
                password
            })
            console.log(payload)
            notifySuccess()
        }catch(e){
            let arr = []
            console.log(e.response)
            for(let key in e.response.data.error){
                arr.push(e.response.data.error[key])
            }
            console.log(arr)
            if(arr[0].length === 1){
                notifyFailed(e.response.data.error)
            }else{
                arr.map( error => notifyFailed(error))
            }
        }
    }

    return (
        <div className="form-div-signin">
            <main className="form-signin">
                <form onSubmit={handleOnSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            
                    <div className="form-floating" >
                        <input
                        style={{border : `1px solid ${firstNameError.length > 0 ? "rgba(241, 62, 62, 0.7)" : "rgba(0, 0, 0, 0.2)"}`, boxShadow : `0 0  ${firstNameError.length > 0 ? "rgba(241, 62, 62, 0.7)" : ""}`}}
                        name={firstName} 
                        onChange={handleFirstNameOnChange}
                        onFocus={() => setFirstNameOnFocus(true)} 
                        onBlur={() => setFirstNameOnBlur(true) }
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="First name"
                        />
                        <label htmlFor="floatingInput">{firstNameError.length > 0 ? <span style={{color : 'red'}}>{firstNameError}</span>  : ("First Name")}</label>
                    </div>

                    <div className="form-floating">
                        <input
                        style={{border : `1px solid ${lastNameError.length > 0 ? "rgba(241, 62, 62, 0.7)" : "rgba(0, 0, 0, 0.2)"}`, boxShadow : `0 0  ${lastNameError.length > 0 ? "rgba(241, 62, 62, 0.7)" : ""}`}}
                        name={lastName} 
                        onChange={handleLastNameOnChange}
                        onFocus={() => setOnFocus(true)} 
                        onBlur={() => setOnBlur(true) }
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last name"
                        />
                        <label htmlFor="floatingInput">{lastNameError.length > 0 ? <span style={{color : 'red'}}>{lastNameError}</span>  : ("Last Name")}</label>
                    </div>

                    <div className="form-floating">
                        <input
                        style={{border : `1px solid ${usernameError.length > 0 ? "rgba(241, 62, 62, 0.7)" : "rgba(0, 0, 0, 0.2)"}`, boxShadow : `0 0  ${usernameError.length > 0 ? "rgba(241, 62, 62, 0.7)" : ""}`}}
                        name={username} 
                        onChange={handleUsernameOnChange} 
                        onFocus={() => setUsernameOnFocus(true)} 
                        onBlur={() => setUsernameOnBlur(true)}
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        />
                        <label htmlFor="floatingInput">{usernameError.length > 0 ? <span style={{color : 'red'}}>{usernameError}</span>  : ("Username")}</label>
                    </div>
            
                    <div className="form-floating">
                        <input
                        style={{border : `1px solid ${emailError.length > 0 ? "rgba(241, 62, 62, 0.7)" : "rgba(0, 0, 0, 0.2)"}`, boxShadow : `0 0  ${emailError.length > 0 ? "rgba(241, 62, 62, 0.7)" : ""}`}}
                        name={email} 
                        onChange={handleEmailOnChange}
                        onFocus={()=> setEmailOnFocus(true)} 
                        onBlur={()=> setEmailOnBlur(true)}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">{emailError.length > 0 ? <span style={{color : 'red'}}>{emailError}</span>  : ("Email")}</label>
                    </div>

                    <div className="form-floating">
                        <input
                        style={{border : `1px solid ${passwordError.length > 0 ? "rgba(241, 62, 62, 0.7)" : "rgba(0, 0, 0, 0.2)"}`, boxShadow : `0 0  ${passwordError.length > 0 ? "rgba(241, 62, 62, 0.7)" : ""}`}}
                        type="password"
                        name={password} 
                        onChange={handlePassowrdOnChange}
                        onFocus={()=> setPasswordOnFocus(true)} 
                        onBlur={()=> setPasswordOnBlur(true)}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        />
                        <label htmlFor="floatingInput">{passwordError.length > 0 ? <span style={{color : 'red'}}>{passwordError}</span>  : ("Password")}</label>
                    </div>
            
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign up
                    </button>
                </form>
            </main>
        </div>
    );
}

export default SignUp;


/* <div>
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
</div> */
