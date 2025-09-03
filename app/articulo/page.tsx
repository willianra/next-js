 "use client";

import { useArticuloStore } from "@/store/useArticuloStore";
import { TipoCantidad } from '@/types/ArticuloType';
import { useState } from "react";

 export default function ArticuloPage() {
const {articulos,agregarArticulo,cambiarEstadoArticulo,removerArticulo} = useArticuloStore();
    const [descripcion,setDescripcion]=useState("");
    const [cantidad,setCantidad]=useState(1);
    const [tipoCantidad,setTipoCantidad]=useState(TipoCantidad.Unidad);

    const handleAgregar=()=>{
      if(descripcion.trim() ==="")return;
      agregarArticulo({
        id:"",
        descripcion:descripcion,
        cantidad:cantidad,
        tipoCantidad:tipoCantidad,
        completado:false

      });
      setDescripcion("");
      setCantidad(1);
      setTipoCantidad(TipoCantidad.Unidad)

    }

    const incrementar=()=>{
      setCantidad(cantidad+1);
    }
    const decrementar = ()=>{
      if(cantidad===1)return;
      setCantidad(cantidad-1)
    }

   return (
     <div>
       <div className="max-w-md mx-auto bg-white shadown-lg rounded-2xl p-6 ">
        <h1 className="mb-6 text-3xl font-bold text-center">
          lista de sumerpercado Zustand
        </h1>
        <div className="flex gap-4">
            <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1"> Descripcion</label>
                  <input value={descripcion}
                  onChange={(e)=>setDescripcion(e.target.value)}
                  placeholder="Escriba una Descripcion"
                  className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
            </div>
        </div>

        <div className="flex gap-4 mt-2">\
            <div className="flex-1">
              <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-red-600 text-2xl"
              onClick={decrementar}
              >
                -
              </button>
            </div>
            <div className="flex1">
              <p className="text-2xl">{cantidad}</p>
            </div>
            <div className="flex-1">
              <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-green-600 text-2xl"
              onClick={incrementar}
              >
                +
              </button>
            </div>
            <div className="flex1">
              <select className="w-full rounded-lg border border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={cantidad}
              onChange={(e)=>setTipoCantidad(e.target.value as TipoCantidad )}
              >
                  {Object.values(TipoCantidad).map((t)=>(
                      <option key={t} value={t}>{t}</option>
                  ))}
              </select>
            </div>
        </div>

                  <div className="flex- mb-6 mt-2">
                      <div  className="flex-1">
                          <button 
                            onClick={handleAgregar}
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 w-full"
                          >
                            agregar
                          </button>
                      </div>
                  </div>
          
          <ul className="w-full max-w-md space-y-2">
            {
              articulos.map((articulo)=>(
                <li key={articulo.id} className="flex item-center justify-between  rounded border-b p-2">
                  <span 
                    onClick={()=>cambiarEstadoArticulo(articulo.id)}
                    className={`cursos-pointer ${ articulo.completado?"line-through text-gray-500":""}`}                  >
                    {articulo.descripcion} - {articulo.cantidad} {" "}{
                      articulo.tipoCantidad
                    }
                  </span> 
                  <span></span>
                  
                  <button 
                  onClick={()=>removerArticulo(articulo.id)}
                  className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-500"
                  >
                    x
                  </button>
                </li>
              ))
            }

          </ul>

       </div>
     </div>
   );
 }