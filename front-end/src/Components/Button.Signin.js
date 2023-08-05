import React from 'react';
import { Link } from 'react-router-dom'

function SigninButton() {
    return (
        <Link to="sign-in">
            <button class="btn btn-light" style={{marginTop:"5px", marginRight:"10px" ,color:"black" ,borderColor:"black"}} >Sign In</button>
        </Link>
    )
}
export default SigninButton