import { getBlogPost } from "@/data/blogPostData";
import Link from "next/link";

const posts=getBlogPost();
export function generateStaticParams(){
    return posts.map(p=>({id:p.id}));
}
export default function BlogPostPage() {
  return (
    <div>
     <table className="table-auto">
        <thead>
            <tr>
                <th className="p-2 border-b border-blue-100 bg-blue-100">Id</th>
          
             
                <th className="p-2 border-b border-blue-100 bg-blue-100">Titulo</th>
           
          
                <th className="p-2 border-b border-blue-100 bg-blue-100">detalle</th>
            </tr>
        </thead> 
        <tbody>
            {posts.map((post)   =>  (
              <tr key={post.id}> 
                    <td className="p-2">{post.id}</td>
                    <td className="p-2 font-black">{post.titulo}</td>
                    <td className="p-2 font-black"> 
                        <Link href={`/blogPost/${post.id}`}>ver detalle </Link>
                    </td>
              </tr>  
            ))}
        </tbody>

     </table>
    </div>
  );
}