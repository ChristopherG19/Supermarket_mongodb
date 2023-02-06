import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({}) => {

    return (
        <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
            <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div class="rounded-xl bg-white shadow-xl">
                        <div class="p-6 sm:p-16">
                            <div class="space-y-4">
                                
                                <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                                    ¿Cuál es el propósito?
                                </h2>
                            </div>
                            <div class="mt-16 grid space-y-4">
                                <Link className="Menu-Link-venta" to="/ventas">
                                    <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                        <div class="relative flex items-center space-x-4 justify-center">
                                            <a href="">
                                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                                                Venta
                                            </span>
                                        </a>
                                        </div>
                                    </button>
                                </Link>
                                <Link className="Menu-Link-Inventario" to="/inventario">
                                    <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                        <div class="relative flex items-center space-x-4 justify-center">
                                            
                                            <a href="">
                                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                                                Inventario
                                            </span>
                                        </a></div>
                                    </button>
                                </Link>
                                <Link className="Menu-Link-Inventario" to="/estadisticas">
                                    <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                        <div class="relative flex items-center space-x-4 justify-center">
                                            
                                            <a href="">
                                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
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