export async function GET(request){
  const users = [
    {id : 1, name: "badol"},
    {id : 2, name: "sakib"},
    {id : 3, name: "anas"},
  ]
  return new Response(JSON.stringify(users))
}