import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page from "@/assets/pages/Page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App