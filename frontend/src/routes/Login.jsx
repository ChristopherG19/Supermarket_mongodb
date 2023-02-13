import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({}) => {


  return (
    <div>
      <div>
        <h1>Welcome</h1>
        <p>Minimal login page for day to day use</p>
        
        <form>
          <input type="text" placeholder="Email" />
          <div >
            <input type="password" placeholder="Password" />
            <span>Show</span>
          </div>
  
          <div className="">
            <a href="#!">Forgot Password ?</a>
          </div>
          <Link to="/menu">
          <button>
            
              Login
            
          </button>
          </Link>
        </form>
      </div>
    </div>
  )

}

export default Login
