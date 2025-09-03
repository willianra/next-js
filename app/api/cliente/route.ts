 
import prisma from '@/lib/prisma';
import { clienteSchema } from '@/lib/validations';
import { NextResponse } from 'next/server';
 
export async function GET(){
    const clientes = await prisma.cliente.findMany();

    return NextResponse.json(clientes,{status:200})
}

export async function POST(request:Request){
    try {
         const data = await request.json();
        //validar con zod 
        const validData=clienteSchema.parse(data);
         const nuevoCliente = await prisma.cliente.create({
        data: validData
    });
    return NextResponse.json(nuevoCliente,{status:201})

    } catch (error) { 
        if (error instanceof Error) {
            return NextResponse.json(
                {error:error.message},
                {status:400}
            )
            
        }
    }
   
}