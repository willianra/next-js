import { PrismaClient } from "./generated/prisma";

 
//permite exportar todo
const prisma = new PrismaClient();
//usaremos todo de prisma
export default prisma;