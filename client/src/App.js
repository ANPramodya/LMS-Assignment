import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Course from "./pages/course/Course";
import Calender from "./pages/calender/Calender";
import Group from "./pages/group/Group";
import Grades from "./pages/grades/Grades";
import Settings from "./pages/settings/Settings";
import Logout from "./pages/logout/Logout";
import Enroll from "./pages/course/Enroll";
import Single from "./pages/course/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Home />} />

            <Route path="/course">
              <Route index element={<Course />} />
              <Route path="enroll" element={<Enroll />} />
              <Route path=":courseId" element={<Single />} />
            </Route>

            <Route path="/calender" element={<Calender />} />
            <Route path="/groups" element={<Group />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
        {/* <Logo to={"/signin"}></Logo>
        <Pages /> */}
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;
