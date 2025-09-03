import { BlogPostType } from "@/types/BlogPostType";

const posts:BlogPostType[]=[
    {
        id:"1",
        titulo:"entendiendo next.js 1",
        contenido:"estrategias de renderizado 1"

    },
    {
        id:"2",
        titulo:"entendiendo next.js 22",
        contenido:"estrategias de renderizado 22"

    },
    {
        id:"3",
        titulo:"entendiendo next.js 3",
        contenido:"mejores practicas 3"

    },
] 
export function getBlogPost(){
    return posts;
}
export function getBlogPostById(id:string){
    const post=posts.find(p=>p.id==id);
    return post;
}