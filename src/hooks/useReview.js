import { useEffect, useState } from "react"

const useReview = () =>{
  
   const [review , setReview ] = useState([])

   useEffect( ()=>{
    fetch('http://localhost:5000/review' ,{
        method : 'GET' ,
        headers:{
            authorization: ` Bearer ${localStorage.getItem('accessToken')}`
        }
    } )
    .then(res => res.json())
    .then(data =>{
        
        setReview(data)
    })
   } , [])
   return [review]

}

export default useReview