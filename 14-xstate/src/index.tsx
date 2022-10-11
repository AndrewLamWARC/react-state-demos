import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"

// React 18
const container = document.getElementById("root")
// eslint-disable-next-line
const root = createRoot(container!)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// import("@xstate/inspect").then(({ inspect }) => {
//   inspect({
//     iframe: false
//   })
// })

// New Root API landing in react 18. Following react 17- is deprecated and now called Legacy Root API
// const container = document.getElementById("root")
// render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   container
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
