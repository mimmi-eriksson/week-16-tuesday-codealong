import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header"
import Movies from "./pages/Movies"
import About from "./pages/About"
import Details from "./pages/Details"
import NotFound from "./pages/NotFound"

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:movieId" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
