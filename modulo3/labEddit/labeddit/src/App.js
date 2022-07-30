import React from "react"
import GlobalState from "./global/GlobalState"
import Router from "./routes/Router"
import { GlobalStyle } from "./styled"

const App = () => {
  return (
    <GlobalState>
        <GlobalStyle/>
        <Router/>
    </GlobalState>
  )
}

export default App