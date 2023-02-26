import React,{useEffect, useState} from 'react'

export const useFetch = (url='', options = null) => {
  const [data, setData] = useState(null)
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    let isMounted = true;

    setIsLoading(true)

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (isMounted){
          setData(data)
          setError(null)
        }
      })
      .catch(error => {
        if (isMounted){
          setError(error)
          setData(null)          
        }
      })
      .finally(()=> isMounted && setIsLoading(false))
  },[url,options])

  return {error, data, isloading};
}

