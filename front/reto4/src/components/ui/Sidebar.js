import React from 'react';
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-500">
            <div className="p-6">
            <img src="plogo.png " alt="" />
                <p className="uppercase text-black text-2xl tracking-wide text-center font-bold">Con La Sartén Por El Mango</p>

                <p className="mt-3 text-gray-800">Administra tu empresa en las siguientes opciones:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-800 block hover:bg-yellow-200 hover:text-gray-600" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-800 block hover:bg-yellow-200 hover:text-gray-600" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-800 block hover:bg-yellow-200 hover:text-gray-600" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-800 block hover:bg-yellow-200 hover:text-gray-600" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;