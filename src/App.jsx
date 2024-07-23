import { useState } from "react"
import Home from "./components/Home"
import Result from "./components/Result"
import { RatingContext } from "./context/RatingContext"

function App() {
  const [rateFlag , setRateFlag] = useState(true)
  const [rateNum , setRateNum] = useState(0)
  return (
    <>
      <div className="bg-Very-Dark-Blue grid place-items-center h-screen">
        <RatingContext.Provider value={{rateFlag , setRateFlag , rateNum , setRateNum}}>
          {rateFlag && <Home />}
          {!rateFlag && <Result />}
        </RatingContext.Provider>
      </div>
    </>
  )
}

export default App
