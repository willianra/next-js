import { getBlogPostById } from "@/data/blogPostData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params{
    params:Promise<{
        id:string;

    }>
}
export default  async function BlogPostId({params}:Params) { 
  const paramsValues = await params;
  const id =  paramsValues.id;
  const post = getBlogPostById(id);
  if(!post) return notFound();
  return (
    <div>
      <h1 className="text-center text-3xl">post detalle </h1>
      <h1 className="text-2xl ml-2"> <p className="font-bold">titulo:</p>{post.titulo}</h1>
      <h1 className="text-2xl ml-2"> <p className="font-bold">contenido:</p>{post.contenido}</h1> 
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 ml-2 py-2 px-4 rounded-2xl "> 
        <Link href="/blogPost">Regresar</Link>
      </button>
    </div>
  );
}