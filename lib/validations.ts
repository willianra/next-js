import {z} from "zod";
export const clienteSchema = z.object({
    nombre:z.string().min(2,"nombre debe tener al menos 2 caracteres"),
    apellidos:z.string().min(2,"nombre debe tener al menos 2 "),
    email:z.email("email debe ser valido"),
    telefono:z.string().optional(),
})