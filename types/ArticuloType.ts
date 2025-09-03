export type ArticuloType ={
    id: string;
    descripcion: string;
    cantidad: number;
    tipoCantidad: TipoCantidad;
    completado:boolean;
    
}
export enum TipoCantidad{
    Unidad="Uni",
    Libras="Lb",
    Kilogramos="kg",
    Paquete="Paq"
}
//necesario para zustand
export type ArticuloStateType={
    articulos:ArticuloType[];
    agregarArticulo:(articulo:ArticuloType)=>void;
    cambiarEstadoArticulo:(id:string)=>void;
    removerArticulo:(id:string)=>void;

}