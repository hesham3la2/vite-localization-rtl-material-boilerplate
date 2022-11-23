import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import StyleFlipper from "./StyleFlipper"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <StyleFlipper>
        <App />
      </StyleFlipper>
    </React.Suspense>
  </React.StrictMode>
)
