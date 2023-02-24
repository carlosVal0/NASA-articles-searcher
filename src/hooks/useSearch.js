import { useEffect, useState, useRef } from "react"

export function useSearch() {

    const [query, setQuery] = useState("")
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
  
      if(isFirstInput.current){
        isFirstInput.current = query === ''
        return
      }
  
      if(query === ''){
        setError('No empty prompts available')
        return
      }
  
      if(query.length < 3){
        setError('Try a longer prompt')
        return
      }
  
      setError(null)
    }, [query])
  
  
    return { query, setQuery, error}
  }
  
  