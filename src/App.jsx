import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Achivements from "./Pages/Achivements";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="achievements" element={<Achivements />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
