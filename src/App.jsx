import { Routes, Route } from "react-router-dom";
// Components 
import Navbar from "./Components/01_Navbar";
import Footer from "./Components/07_Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Insights from "./Pages/Insights";
import Moodlog from "./Pages/Moodlog";
import Habittracker from "./Pages/Habittracker";
import About from "./Pages/About";
import Reviews from "./Pages/Reviews";
import Support from "./Pages/Support";
import Policies from "./Pages/Policies";
function App () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/insights" element={<Insights/>} />
      <Route path="/moodlog" element={<Moodlog/>} />
      <Route path="/habittracker" element={<Habittracker/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/reviews" element={<Reviews/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/policies" element={<Policies/>} />
    </Routes>
    </>
  );
}
export default App;