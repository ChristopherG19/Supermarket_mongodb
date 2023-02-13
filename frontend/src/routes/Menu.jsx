import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({}) => {

    return (
        <div>  
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                
                                <h2>
                                    Elija la acción o página que desea ver a continuación
                                </h2>
                            </div>
                            <div >
                                <Link className="Menu-Link-venta" to="/ventas">
                                    <button>
                                        <div>
                                            <a href="">
                                            <span>
                                                Venta
                                            </span>
                                        </a>
                                        </div>
                                    </button>
                                </Link>
                                <Link>
                                    <button>
                                        <div>
                                            
                                            <a href="">
                                            <span>
                                                Inventario
                                            </span>
                                        </a></div>
                                    </button>
                                </Link>
                                <Link className="Menu-Link-Inventario" to="/estadisticas">
                                    <button>
                                        <div>
                                            
                                            <a href="">
                                            <span>
                                                Estadísticas
                                            </span>
                                        </a></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu