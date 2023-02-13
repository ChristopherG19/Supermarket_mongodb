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
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> 
                                    <g clip-path="url(#clip0_443_3628)">
                                        <rect x="2" y="6" width="20" height="12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                                        <path d="M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                                        <path d="M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                                        <path d="M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 9.51733V8.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                                        <path d="M12 15.5173V14.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs>
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
                                <svg fill="#ffffff" height="50px" width="50px" version="1.2" baseProfile="tiny" id="inventory" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 219.3" xml:space="preserve">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
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
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18.5V4H4V20H20V18.5H5.5Z" fill="#ffffff"/>
                                    <path d="M10.5 17V8.00131H12V17H10.5Z" fill="#ffffff"/>
                                    <path d="M7 17V12H8.5V17H7Z" fill="#ffffff"/>
                                    <path d="M17.5 17V10H19V17H17.5Z" fill="#ffffff"/>
                                    <path d="M14 17V5H15.5V17H14Z" fill="#ffffff"/>
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