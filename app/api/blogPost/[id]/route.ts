import { getBlogPostById } from "@/data/blogPostData";
 import { NextRequest, NextResponse } from "next/server"; 

interface Params{
    params:Promise<{
        id:string
    }>;
}
export async function GET(request: NextRequest,{params}:Params){
    const paramsValues = await params;
    const id = paramsValues.id;
    const blogPost = await getBlogPostById(id);
    if(!blogPost)
        return NextResponse.json(
            {error:'no encontrado'},
            {status:404}
        );

    return new Response(JSON.stringify(blogPost),{
            status:200,
            headers:{"Content-Type":"application/json"}
     });
    }

 