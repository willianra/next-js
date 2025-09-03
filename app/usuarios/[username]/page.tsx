interface Params{
    params:Promise<{
        username:string;
    }>
}
export default async function UsuarioPage({params}:Params) {
    const paramsValues= await params;
    const username  =   paramsValues.username;
  return (
    <div>
      <h1 className="text-2xl">hola {username}</h1>
    </div>
  );
}