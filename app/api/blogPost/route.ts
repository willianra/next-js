import { getBlogPost } from "@/data/blogPostData";

export async function GET(){
    const blogPost = await getBlogPost();
    return new Response(JSON.stringify(blogPost),{
        status:200,//ok
        headers:{"Content-Type":'application/json'}
    })
}