import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import { LogIn } from './pages/LogIn/LogIn';
import { SignUp } from './pages/SignUp/SignUp';
import { NotFound } from './pages/NotFound/NotFound';
import { Courses } from './pages/Courses/Courses';
import { SingleCourse } from './pages/SingleCourse/SingleCourse';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/singleCourse/:id" element={<SingleCourse />} />
      </Routes>
    </>
  );
}

export default App;
