import { useQuery } from "@tanstack/react-query"


const useParts = () =>{

    const {data:parts , isLoading , isError,error , refetch} = useQuery({
        queryKey:['partsData'],
        queryFn: () =>
          fetch(" https://rockauto-server.vercel.app/parts")
          .then(res=>res.json())
        
      })
      return [parts , isLoading ,isError,error ,refetch]
  
    
   
}
export default useParts