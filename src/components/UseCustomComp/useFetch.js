import React, { useEffect, useState } from 'react'
//custom hook should be treadted as js function not react comp
  export  const useFetch=(url)=>{
        const [data,setData]=useState([])
        const [loading,setLoading]=useState(true)
        const [error,setError]=useState([])

        useEffect(()=>{
         const fetcheDATA=async()=>{
            try {
                const apiCall=await fetch(`${url}`)
                const result=await apiCall.json()
                setData(result)
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
         }
         fetcheDATA()
        },[url])
        return {data,loading,error}
    }

