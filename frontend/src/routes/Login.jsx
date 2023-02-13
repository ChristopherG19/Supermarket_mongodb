import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Login.css'

const Login = ({}) => {


  return (
    <div className='fullscreen'>
      <div>
        <h2>Bienvendio a</h2>
        <h1>Supermarket</h1>
        <p>Hecho por:</p>
        <p>Christopher García (20541)</p>
        <p>Ma. Isabel Solano (20504)</p>
        <svg fill="#ffffff" height="200px" width="120px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 52" xml:space="preserve">

          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <g> <path d="M51.966,24.833c-0.006-0.037,0.005-0.074-0.005-0.111l-2.885-10C48.953,14.295,48.561,14,48.115,14H27v-2h12 c0.552,0,1-0.447,1-1V1c0-0.553-0.448-1-1-1H14c-0.552,0-1,0.447-1,1v10c0,0.553,0.448,1,1,1h11v2H3.885 c-0.445,0-0.837,0.295-0.961,0.723l-2.885,10c-0.01,0.036,0.001,0.074-0.005,0.111C0.024,24.89,0,24.941,0,25v10.005 c0,2.629,1.705,4.863,4.066,5.669C4.03,40.778,4,40.884,4,41v10c0,0.553,0.448,1,1,1h12h7h4h7h12c0.552,0,1-0.447,1-1V41 c0-0.116-0.03-0.222-0.066-0.326C50.295,39.868,52,37.634,52,35.005V25C52,24.941,51.976,24.89,51.966,24.833z M15,10V2h23v8H27h-2 H15z M4.637,16H25v4h2v-4h20.363l2.308,8H41H31H21H11H2.329L4.637,16z M40,35.005C40,37.208,38.206,39,36,39s-4-1.792-4-3.995V26h8 V35.005z M30,35.005C30,37.208,28.206,39,26,39s-4-1.792-4-3.995V26h8V35.005z M20,35.005C20,37.208,18.206,39,16,39 s-4-1.792-4-3.995V26h8V35.005z M2,35.005V26h8v9.005C10,37.208,8.206,39,6,39S2,37.208,2,35.005z M18,50v-5h5v5H18z M29,50v-5h5v5 H29z M46,50H36v-6c0-0.553-0.448-1-1-1h-7c-0.552,0-1,0.447-1,1v6h-2v-6c0-0.553-0.448-1-1-1h-7c-0.552,0-1,0.447-1,1v6H6v-9 c2.086,0,3.924-1.07,5-2.688C12.075,39.93,13.914,41,16,41s3.924-1.07,5-2.688C22.076,39.93,23.914,41,26,41s3.924-1.07,5-2.688 C32.076,39.93,33.914,41,36,41s3.924-1.07,5-2.688C42.076,39.93,43.914,41,46,41V50z M50,35.005C50,37.208,48.206,39,46,39 s-4-1.792-4-3.995V26h8V35.005z"/> </g> </g>

        </svg>
        
        <form>
          {/* <input type="text" placeholder="Email" />
          <div >
            <input type="password" placeholder="Password" />
            <span>Show</span>
          </div>
  
          <div>
            <a href="#!">Forgot Password ?</a>
          </div> */}
          <Link to="/menu">
          <button className='iniciar-btn'>
            
              Iniciar
            
          </button>
          </Link>
        </form>
      </div>
    </div>
  )

}

export default Login
