import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';



const ActualizarProducto = () => {
    
      // Hook para redireccionar
      const navigate = useNavigate();

    const {reference} = useParams();
  

    const [ productosActualizar, guardarProductosActualizar] = useState([]);

    fetch(`http://localhost:8080/api/cookware/${reference}`)
    .then((res) => res.json())
    .then((data) => {
       
        guardarProductosActualizar(data);
    });
    
    const { brand, price, photography, category,quantity,description, materiales,dimensiones,availability } = productosActualizar;
   
    const formik = useFormik({
        initialValues: {
            reference: reference,
            brand: "",
            category: "",
            materiales: "",
            dimensiones: "",
            description: "",
            availability: "",
            price: "",
            quantity: "",
            photography:"",
        }, 
        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres actualizar el producto?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Quiero Actualizar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    try{ console.log(datos);
                        fetch(`http://localhost:8080/api/cookware/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                //console.log(data);             
                        });
                       
                  Swal.fire(
                    'Actualizado!',
                    'Se actualizo correctamente.',
                    'success'
                    
                    
                  );
                  navigate('/productos');
                } catch (error) {
                    console.log(error)
                }
                
            }
          })
               
        }
     });   
    
    return( 
        <>
                  <div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
      <h1 className="text-3xl font-light mb-4">Actualizar Productos</h1>

<div className="flex justify-center mt-10">
     <div className="w-full max-w-3xl">
         <form
           onSubmit={formik.handleSubmit}
         > 
             <div className="mb-4">
             <p className="font-bold text-2xl text-yellow-600 mb-4">{reference} </p>
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Marca</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="brand"
                     type="text"
                     placeholder="Marca " 
                     value={formik.values.brand || brand} 
                     onChange={formik.handleChange}  
                 />
             </div>
 
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Categoria</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="category"
                     type="text"
                     placeholder="Categoria"
                     value={formik.values.category || category}
                     onChange={formik.handleChange} 
                 />
             </div>
     
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Materiales</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="materiales"
                     type="text"
                     placeholder="Materiales"
                     value={formik.values.materiales || materiales}
                     onChange={formik.handleChange}   
                 />
             </div>


             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dimensiones</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="dimensiones"
                     type="text"
                     placeholder="Dimensiones"
                     value={formik.values.dimensiones || dimensiones}
                     onChange={formik.handleChange}   
                 />
             </div>
      
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Descripción</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="description"
                     type="text"
                     placeholder="Descripcion" 
                     value={formik.values.description || description}
                     onChange={formik.handleChange}   
                 />
             </div>
        
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Disponibilidad</label>
             <select 
                 className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                 id="availability"   
                 value={formik.values.availability}
                 onChange={formik.handleChange}        
                 >
                 <option value="true">Disponible</option>
                 <option value="false">No Disponible</option>
             </select>

             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Precio</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="price"
                     type="number"
                     placeholder="Precio"
                     value={formik.values.price || price}
                     onChange={formik.handleChange}
                 />
             </div>
       

             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Cantidad</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="quantity"
                     type="number"
                     placeholder="Cantidad"
                     value={formik.values.quantity || quantity}
                     onChange={formik.handleChange}                          
                 />
             </div>
     
         <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fotografia</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="photography"
                     type="text"
                     placeholder="Fotografia"
                     value={formik.values.photography || photography}
                     onChange={formik.handleChange}
                 />
             </div>
        <input
                 type="submit"
                 className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                 value="Actualizar Producto"
             />
         </form>
     </div>
 </div>
    
    </div>
    </div>
          
       
        </>
     );
}
 
export default ActualizarProducto;