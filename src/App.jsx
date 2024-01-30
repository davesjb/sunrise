import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873").then((response) => {

      console.log("response", response)

      response.json().then((jsonData) => {

        setData(jsonData)

        console.log("json", jsonData)

      })




    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <h1 className='text-red-500'>Test</h1>
      <div class="grid gap-4 grid-cols-3 ">
        <Card title={"date"} body={data.results.date} />

        <Card title={"sunrise"} body={data.results.sunrise} />

        <Card title={"sunset"} body={data.results.sunset} />
      </div>
    </>
  )
}

export default App
