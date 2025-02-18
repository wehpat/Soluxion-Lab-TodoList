
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx'
import Header from './components/Header'
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path= "/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
