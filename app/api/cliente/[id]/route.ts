import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { clienteSchema } from "@/lib/validations";

interface Params{
    params:Promise<{
        id:string;
    }>
}
//optener cliente por id
export async function GET(request:NextRequest,{params}:Params){
    const paramsValues=await params;
    const id = paramsValues.id;
    const cliente = await prisma.cliente.findUnique({
        where:{id:Number( id)}
    });
    return NextResponse.json(cliente,{status:200});
}
//actualizar cliente
export async function PUT(request:NextRequest,{params}:Params) {
       const paramsValues=await params;
       const id = paramsValues.id; 

       try {
        const data=await request.json();
        //validar con zos
        const validData = clienteSchema.partial().parse(data);
       const cliente = await prisma.cliente.update({
             where :{id:Number(id)},
             data:validData
        });
       return NextResponse.json(cliente,{status:200});

       } catch (error) {
        if(error instanceof Error){
            return NextResponse.json(
                {error:error.message},
                {status:400}
            )
        }
       }
}
       
//eliminar un registro
export async function DELETE(request:NextRequest,{params}:Params){
    const paramsValues= await params;
    const id = paramsValues.id;
    await prisma.cliente.delete({
        where:{id:Number(id)}
    });
    return NextResponse.json({mensaje:"Cliente Eliminado"});
}