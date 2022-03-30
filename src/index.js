import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BudgetsProvider } from "./contexts/BudgetContext"

import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
