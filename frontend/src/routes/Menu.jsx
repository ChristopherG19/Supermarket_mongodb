import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({}) => {

    return (
        <div className='fullscreen'>  
            <div>
                <div>
                    <div>
                        
                        <h2 className='instructions'>
                            Elija la acción o página que desea ver a continuación
                        </h2>
                    </div>
                    <div className='botones'>
                        <Link className="Menu-Link-venta" to="/ventas">
                            <button className='menubtn'>
                                <span className='menu-btn-text'>
                                    Venta
                                </span>
                                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> 
                                    <g clipPath="url(#clip0_443_3628)">
                                        <rect x="2" y="6" width="20" height="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                                        <path d="M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                                        <path d="M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                                        <path d="M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 9.51733V8.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                                        <path d="M12 15.5173V14.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs>
                                        <clipPath id="clip0_443_3628"> 
                                        <rect width="24" height="24" fill="white"/> </clipPath> </defs> </g>
                                </svg>
                            </button>
                        </Link>
                        <Link className="Menu-Link-Inventario" to="/inventario">
                            <button className='menubtn'>
                                <span className='menu-btn-text'>
                                    Inventario
                                </span>
                                <svg fill="#ffffff" height="50px" width="50px" version="1.2" baseProfile="tiny" id="inventory" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 219.3" xmlSpace="preserve">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M118.8,209.6h-59v-59h22.7v18.8h13.5v-18.8h22.7V209.6z M195.9,209.6h-59v-59h22.7v18.8h13.5v-18.8h22.7V209.6z M157.8,132.5h-59v-59h22.7v18.8h13.5V73.5h22.7V132.5z M246.6,78.9l-16.1-7.5v139.9h-18.2V62.6l-84.5-39.9L43.5,62.6v148.5H25.3 V71.3L9.2,78.9L1.4,62.4L127.8,2.7l126.7,59.6L246.6,78.9z"/> </g>
                                </svg>
                            </button>
                        </Link>
                        <Link className="Menu-Link-Estadisticas" to="/estadisticas">
                            <button className='menubtn'>
                                <span className='menu-btn-text'>
                                    Estadísticas
                                </span>
                                <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 18.5V4H4V20H20V18.5H5.5Z" fill="#ffffff"/>
                                    <path d="M10.5 17V8.00131H12V17H10.5Z" fill="#ffffff"/>
                                    <path d="M7 17V12H8.5V17H7Z" fill="#ffffff"/>
                                    <path d="M17.5 17V10H19V17H17.5Z" fill="#ffffff"/>
                                    <path d="M14 17V5H15.5V17H14Z" fill="#ffffff"/>
                                </svg>
                            </button>
                        </Link>
                        <Link className="Menu-Link-Modificaciones" to="/modificaciones">
                            <button className='menubtn'>
                                <span className='menu-btn-text'>
                                    Información cajeros
                                </span>
                                <svg enableBackground="new 0 0 91 91" height="40px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="91px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <path d="M90.668,35.091c0.17-0.643,0.08-1.326-0.25-1.902L78.813,13.115c-0.695-1.195-2.225-1.607-3.422-0.914   l-9.734,5.619c-1.791-1.283-3.707-2.391-5.727-3.307V3.269c0-1.383-1.121-2.504-2.506-2.504H34.23   c-1.385,0-2.504,1.121-2.504,2.504v11.246c-1.891,0.861-3.699,1.893-5.406,3.086l-9.678-5.736   c-0.572-0.338-1.252-0.434-1.896-0.271c-0.643,0.166-1.197,0.578-1.535,1.15L1.387,32.69c-0.338,0.57-0.436,1.254-0.271,1.898   c0.166,0.643,0.578,1.195,1.15,1.533l9.682,5.734c-0.154,1.305-0.229,2.523-0.229,3.695c0,1.039,0.061,2.117,0.189,3.309   L2.16,54.491c-0.576,0.334-0.996,0.881-1.166,1.521c-0.174,0.641-0.082,1.326,0.25,1.9l11.6,20.076   c0.691,1.197,2.225,1.609,3.422,0.914l9.736-5.621c1.793,1.285,3.711,2.391,5.725,3.307v11.244c0,1.385,1.119,2.504,2.504,2.504   h23.193c1.385,0,2.506-1.119,2.506-2.504V76.589c1.889-0.859,3.697-1.895,5.402-3.088l9.684,5.736   c1.188,0.705,2.727,0.311,3.432-0.879L90.27,58.413c0.336-0.572,0.434-1.256,0.271-1.898c-0.166-0.643-0.578-1.195-1.152-1.533   l-9.676-5.734c0.156-1.314,0.23-2.518,0.23-3.695c0-1.051-0.063-2.143-0.189-3.313l9.746-5.627   C90.074,36.282,90.496,35.733,90.668,35.091z M59.242,45.55c0,7.396-6.018,13.414-13.416,13.414   c-7.396,0-13.412-6.018-13.412-13.414c0-7.393,6.016-13.41,13.412-13.41C53.225,32.14,59.242,38.157,59.242,45.55z" fill="#ffffff"/>
                                    </g>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu