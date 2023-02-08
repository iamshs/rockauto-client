import { useEffect, useState } from "react"

const useReview = () =>{
  
   const [review , setReview ] = useState([])

   useEffect( ()=>{
    fetch(' https://rockauto-server.vercel.app/review' ,{
        method : 'GET' 
    } )
    .then(res => res.json())
    .then(data =>{
        
        setReview(data)
    })
   } , [])
   return [review]

}

export default useReview