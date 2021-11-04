import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to='/sign-up' style={{margin: "20px"}}>Sign up</Link>
            <Link to='/sign-in' style={{margin: "20px"}}>Sign in</Link>
        </div>
    )
}

export default Nav