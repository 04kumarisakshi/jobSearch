import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import JobSearch from "./pages/JobSearch"
import ContactUs from "./pages/ContactUs"
import { SignUp } from "./pages/Signup"
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/job-search" element={<JobSearch/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  </Router>
  )
}

export default App