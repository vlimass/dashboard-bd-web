import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Overview } from "./pages/Overview"
import { Customers } from "./pages/Customers"
import { Products } from "./pages/Products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />}/>
        <Route path="/customers" element={<Customers />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
