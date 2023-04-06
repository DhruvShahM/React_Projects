export const getData=(request)=>{
    return fetch(`https://jsonplaceholder.typicode.com/${request}`).then(
      (res)=>res.json()
    )
  }