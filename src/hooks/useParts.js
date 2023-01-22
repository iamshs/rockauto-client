import { useQuery } from "@tanstack/react-query"


const useParts = () =>{

    const {data:parts , isLoading , isError,error , refetch} = useQuery({
        queryKey:['parts'],
        queryFn: () =>
          fetch("http://localhost:5000/parts")
          .then(res=>res.json())
        
      })
      return [parts , isLoading ,isError,error ,refetch]
  
    
   
}
export default useParts