import React, { useEffect } from 'react'

const FetchApi = () => {
    useEffect(() => {
      const fetchDataFromAPI = async () =>{
        const api = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await api.json();

        console.log("fetching data",result)
      };
      fetchDataFromAPI();
    
    }, [])
    
  return (
    <div>FetchApi</div>
  )
}

export default FetchApi