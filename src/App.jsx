import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Insights from "./Pages/Insights";
import Moodlog from "./Pages/Moodlog";
import Habittracker from "./Pages/Habittracker";

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/insights" element={<Insights/>} />
      <Route path="/moodlog" element={<Moodlog/>} />
      <Route path="/habittracker" element={<Habittracker/>} />
    </Routes>
  );
}
export default App;