import Hero from "./components/Hero/Hero"
import Presentation from "./components/Presentation/Presentation"
import Carousel from "./components/Carousel/Carousel"
import Bar from "./components/Bar/Bar"
import APropos from "./components/APropos/APropos"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Hero />
      <Routes>
        <Route 
          path="/"
          element={
            <>
            <Presentation />
            <Carousel />
            <Bar/>
            </>
          }>
        </Route>

        <Route
          path="/apropos"
          element={
            <>
            <APropos />
            </>
          }>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
