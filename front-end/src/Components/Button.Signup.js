 
  import React from 'react';
  import { Link } from 'react-router-dom'
  
  function SignupButton() {
      return (
          <Link to="sign-up">
              <button class="btn btn-light" style={{marginTop:"5px", marginRight:"10px" ,color:"black" ,borderColor:"black"}} >Sign Up</button>
          </Link>
      )
  }
  export default SignupButton
  