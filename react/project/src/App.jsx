import './App.css'
import {Route, Routes} from "react-router-dom";
import Index from "./pages/Index.jsx";
import GamePage from "./pages/GamePage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/game" element={<GamePage/>}/>
      </Routes>
    </>
  )
}

export default App
