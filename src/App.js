import Courses_div from "./Components/Courses_div";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import courses from "./Data/Data";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Coursedetails from "./Pages/Coursedetails";
import Courses from "./Pages/Courses";
import Get_course from "./Pages/Get_course";
import Get_service from "./Pages/Get_service";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import "./Static/Styles/Style.css";
import {
  Router,
  Route,
  BrowserRouter,
  Routes,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/course-detail/:name" element={<Coursedetails />} />
          <Route path="/get-course/" element={<Get_course />} />
          <Route path="/get-course/:name" element={<Get_course />} />
          <Route path="/get-service/" element={<Get_service />} />
          <Route path="/get-service/:name" element={<Get_service />} />
        </Routes>{" "}
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
