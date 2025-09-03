import { GetProductos } from "@/data/ProductData";
import Link from "next/link";

export default async function ProductoPage() {
    const productos =   await GetProductos();
  return (
    <div>
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="p-2 border-b border-blue-100 bg-blue-50">id</th>
                    <th className="p-2 border-b border-blue-100 bg-blue-50">title</th>
                    <th className="p-2 border-b border-blue-100 bg-blue-50">enlace</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto)=>(
                    <tr key={producto.id}>
                        <td className="p-2">{producto.id}</td>    
                        <td className="p-2" >{producto.title}</td>    
                        <td className="p-2 font-black" > <Link href={`/producto/${producto.id}`}>ver Detalle</Link></td>    
                     </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}