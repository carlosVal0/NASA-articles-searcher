import { useCallback, useState } from "react"

export function useArticles ({query}){

    const [articles, setArticles] = useState([])
    const getData = useCallback( async({ query }) => {
      if(query){
        console.log('getting data')
        fetch(`https://images-api.nasa.gov/search?q=${query}`)
         .then(res => res.json())
         .then(articles => {
           setArticles(articles.collection.items.filter(item => item.data[0].media_type.includes("image") || item.data[0].media_type.includes('video')))
           console.log(articles)
         })
       }  
    }, [])
    
    return {articles, getData}
  }
  