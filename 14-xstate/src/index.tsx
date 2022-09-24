import { StrictMode } from "react"
import { render } from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"

// import("@xstate/inspect").then(({ inspect }) => {
//   inspect({
//     iframe: false
//   })
// })

// New Root API landing in react 18. Following is deprecated and now called Legacy Root API
const container = document.getElementById("root")
render(
  <StrictMode>
    <App />
  </StrictMode>,
  container
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
