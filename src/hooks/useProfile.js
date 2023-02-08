import { useEffect, useState } from "react"


const useProfile = user =>{
    const [profile , setProfile ] = useState([])
    
    const email = user?.email

    useEffect( ()=>{
     fetch(` https://rockauto-server.vercel.app/profile/${email}`)
     .then(res => res.json())
     .then(data =>{
        
         setProfile(data)
     })
    } , [email])
    return [profile]
}

export default useProfile