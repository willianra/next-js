
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() { 
  const pathName  = usePathname();
  return (
    <div>

        <nav>
            <Link className={pathName==="/"?"bg-amber-100": "px-3 py-2"} href="/">HOME</Link>
            <Link className={pathName==="/dashboard"?"bg-amber-100":"px-3 py-2"} href="/dashboard"> Dashboard</Link>
            <Link className={pathName==="/contacto"?"bg-amber-100":"px-3 py-3"} href="/contacto">contacto</Link>
            <Link className={pathName==="/blogPost"?"bg-amber-100":"px-3 py-3"} href="/blogPost">Blog Post</Link>

                <Link className={pathName==="/producto"?"bg-amber-100":"px-3 py-3"} href="/producto">productos</Link>
                <Link className={pathName==="/tarea"?"bg-amber-100":"px-3 py-3"} href="/tarea">Tareas con Redux</Link>

                  <Link className={pathName==="/articulo"?"bg-amber-100":"px-3 py-3"} href="/articulo">Articulos</Link>


            <Link className={pathName==="/usuarios/carlospriedra"?"bg-amber-100":"px-3 py-3"} href="/usuarios/carlospriedra">mi perfil</Link>
        </nav>
    </div>
  )
}
 