import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../../components/Header'

import '../../assets/css/index.scss'

const loadingInitial = {
  data: [],
  loading: false,
  error: null
}

const App = () => {
  const [result, setResult] = useState(loadingInitial)

  useEffect(() => {
    setResult({
      ...result,
      loading: true
    })

    const getData = async () => {
      const response = await axios.get('/api/obterDados')

      setResult({
        ...result,
        data: response.data,
        loading: false
      })
    }

    getData()
  }, [setResult])

  return (
    <>
      <Header />
      <div className='container'>
        <p>teste</p>
      </div>
    </>
  )
}

export default App
