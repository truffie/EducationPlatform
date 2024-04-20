import Home from "./pages/Home/Home"
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import { Courses } from "./pages/Courses/Courses";
import { LogIn } from "./pages/LogIn/LogIn";
import { SignUp } from "./pages/SignUp/SignUp";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
