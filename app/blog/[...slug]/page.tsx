interface Params{
    params:Promise<{
        slug:string[];
    }>
}

export default  async function BlogPage({params}:Params) {
  const paramsValues= await params;
  const slug =  paramsValues.slug;
    return (
    <div>
      <h1 className="text-3xl">blog ruta :{slug.join("/")}</h1>
    </div>
  );
}